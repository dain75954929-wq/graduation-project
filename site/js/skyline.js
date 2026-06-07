/* =========================================================
   Cover Skyline — 아파트 관련 '단어'가 화면 밖(위)에서 천천히
   떨어져 쌓이며 한국 아파트 단지 입면을 완성.
   · 단어 = 순수 글자, 타워 = 단색(3톤) 직사각형
   · 레이어드: 옅은 색이 짙은 색보다 위로 솟아 보임(뒤에서 겹침)
     - 앞(짙은) 타워가 덮는 자리엔 옅은 단어를 생성하지 않음(단어 단위 경계, 마스킹 없음)
   · 색상별 낙하: 진한 색 먼저 → 중간 → 연한 색
   · 형상/색 = 제공 PDF(메인페이지_건물색칠)
   ========================================================= */
(function () {
  "use strict";
  var canvas = document.getElementById("skyline");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var cover = document.querySelector(".cover");
  var foot = document.querySelector(".cover__foot");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 3톤 (PDF): 0 진함 / 1 중간 / 2 연함 ---- */
  var COLORS = ["#4d4d4d", "#9a9a9a", "#e6e6e6"];
  var CBASE = [0, 800, 1600];               // 색상별 낙하 시차 (진한 색 먼저)

  /* ---- 5개 단지: towers [x0,x1,h,c] (겹침 허용 — 옅은 색이 더 높고 뒤) ---- */
  var SITES = [
    { towers: [ [.10,.22,.52,2],[.16,.28,.46,1],[.22,.34,.40,0],
      [.34,.40,.60,2],[.38,.50,.50,0],
      [.54,.66,.52,1],[.60,.72,.46,0],
      [.74,.84,.50,2],[.78,.88,.44,0] ] },
    { towers: [ [.10,.20,.60,2],[.14,.24,.54,1],[.20,.30,.48,0],
      [.40,.50,.50,2],[.44,.54,.44,0],
      [.58,.70,.62,1],[.62,.74,.54,0],
      [.80,.92,.58,2],[.84,.94,.50,0] ] },
    { towers: [ [.08,.18,.42,1],[.12,.22,.36,0],
      [.30,.42,.58,2],[.34,.46,.50,0],
      [.46,.56,.70,2],[.50,.62,.60,0],
      [.64,.76,.62,1],[.68,.80,.54,0],
      [.82,.92,.46,2],[.85,.94,.40,0] ] },
    { towers: [ [.06,.16,.54,2],[.10,.20,.48,0],
      [.26,.36,.54,2],[.30,.40,.48,1],
      [.46,.56,.52,2],[.50,.60,.46,0],
      [.66,.76,.54,2],[.70,.80,.48,1],
      [.84,.94,.52,2],[.87,.96,.46,0] ] },
    { towers: [ [.16,.26,.16,0],
      [.30,.42,.44,1],[.34,.44,.38,0],
      [.44,.56,.64,2],[.48,.60,.54,0],
      [.60,.72,.60,1],[.64,.74,.52,0],
      [.74,.86,.66,2],[.78,.88,.56,0] ] }
  ];

  var WORDS = ["아파트","주동","세대","발코니","베란다","거실","안방","입면","채광","조망",
    "일조","단지","필로티","코어","복도","현관","주차장","조경","중정","놀이터",
    "커뮤니티","분양","재건축","용적률","건폐율","인동간격","남향","판상형","탑상형","베이",
    "평면","전용","공용","옥상","단열","창호","새시","수납","팬트리","알파룸"];

  var SPEED = 0.20;                          // px/ms (build) — 조금 더 천천히
  var OUT_MULT = 2.6;

  function labelFS() {
    var el = document.querySelector(".hdr__menulabel");
    var v = el ? parseFloat(getComputedStyle(el).fontSize) : 0;
    return v || 11;
  }
  function mulberry32(a) {
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function fontStr(px) { return px + "px Pretendard, -apple-system, sans-serif"; }

  var baseFS, W, H, dpr;
  var groups = [], tiles = [], siteIndex = 0, raf = 0, lastT = 0, phase = "build", holdUntil = 0, outUntil = 0;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = cover.clientWidth;
    H = cover.clientHeight - (foot ? foot.offsetHeight : 0);
    if (!W || H <= 0) return;
    baseFS = labelFS();
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.textBaseline = "top";
    build(siteIndex, reduce);
  }

  function buildTiles(si) {
    var site = SITES[si], rng = mulberry32(6000 + si * 157);
    groups = []; var flat = [], spawnDist = H + 70;
    var T = site.towers.map(function (tw) {
      return { bx: tw[0] * W, bw: (tw[1] - tw[0]) * W, bTop: H - tw[2] * H * 0.92, c: tw[3] };
    });
    // 더 앞(짙은 색, c 작음) 타워가 덮는 자리인가 → 그 자리엔 옅은 단어를 만들지 않음(마스킹 대신 단어 단위 경계)
    function coveredByFront(px, ry, c) {
      for (var i = 0; i < T.length; i++) {
        var f = T[i];
        if (f.c < c && px >= f.bx && px <= f.bx + f.bw && ry >= f.bTop) return true;
      }
      return false;
    }
    T.forEach(function (t) {
      var bFS = Math.max(8, Math.round(baseFS * (0.85 + rng() * 0.40)));
      ctx.font = fontStr(bFS);
      var bLine = Math.round(bFS * 1.4), bGap = Math.round(bFS * 0.5);
      var g = { bx: t.bx, bw: t.bw, c: t.c, fs: bFS, color: COLORS[t.c], tiles: [] };
      for (var ry = H - bFS - 2; ry >= t.bTop; ry -= bLine) {
        var cx = t.bx, guard = 0;
        while (cx < t.bx + t.bw && guard++ < 60) {
          var word = WORDS[Math.floor(rng() * WORDS.length)];
          var twd = ctx.measureText(word).width;
          if (!coveredByFront(cx + twd / 2, ry + bFS * 0.5, t.c)) {
            var o = { x: cx, ty: ry, y: ry - spawnDist, word: word,
              settled: false, delay: CBASE[t.c] + rng() * 700, start: 0 };
            g.tiles.push(o); flat.push(o);
          }
          cx += twd + bGap;
        }
      }
      groups.push(g);
    });
    return flat;
  }

  function build(si, instant) {
    siteIndex = si;
    tiles = buildTiles(si);
    phase = "build";
    var now = (window.performance && performance.now()) ? performance.now() : 0;
    lastT = now;
    tiles.forEach(function (o) { o.start = now; if (instant) { o.y = o.ty; o.settled = true; } });
    if (instant) draw();
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    var order = groups.slice().sort(function (a, b) { return b.c - a.c; });  // 연→중→진(뒤→앞): 낙하 중 짙은 색이 위에
    for (var k = 0; k < order.length; k++) {
      var g = order[k];
      ctx.save();
      ctx.beginPath(); ctx.rect(g.bx, 0, g.bw, H); ctx.clip();   // 자기 컬럼만 클립(좌우 직선) — 마스킹 없음
      ctx.font = fontStr(g.fs); ctx.fillStyle = g.color;
      for (var i = 0; i < g.tiles.length; i++) {
        var o = g.tiles[i];
        if (o.y > H + g.fs * 2 || o.y < -g.fs * 3) continue;
        ctx.fillText(o.word, o.x, o.y);
      }
      ctx.restore();
    }
  }

  function step(t) {
    var dt = Math.min(40, t - lastT); lastT = t;
    var sp = (phase === "out" ? SPEED * OUT_MULT : SPEED), allSettled = true;
    for (var i = 0; i < tiles.length; i++) {
      var o = tiles[i];
      if (o.settled) continue;
      var d = (phase === "out") ? o.outDelay : o.delay;
      if (t - o.start < d) { allSettled = false; continue; }
      o.y += sp * dt;
      if (phase !== "out" && o.y >= o.ty) { o.y = o.ty; o.settled = true; }
      else allSettled = false;
    }
    draw();
    if (phase === "build" && allSettled) { phase = "hold"; holdUntil = t + 3000; }
    else if (phase === "hold" && t > holdUntil) {
      phase = "out"; outUntil = t + 3400;
      tiles.forEach(function (o) {
        o.outDelay = (o.ty / H) * 1500 + Math.random() * 350;
        o.ty = H + 160; o.settled = false; o.start = t;
      });
    } else if (phase === "out" && t > outUntil) { build((siteIndex + 1) % SITES.length, false); }
    raf = requestAnimationFrame(step);
  }

  function debounce(fn, ms) { var t; return function () { clearTimeout(t); t = setTimeout(fn, ms); }; }
  resize();
  if (!reduce) raf = requestAnimationFrame(step);
  window.addEventListener("resize", debounce(resize, 200));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
})();
