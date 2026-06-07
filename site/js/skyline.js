/* =========================================================
   Cover Skyline — 아파트 관련 '단어'가 화면 밖(위)에서 천천히
   떨어져 쌓이며 한국 아파트 단지 입면을 완성.
   · 단어 = 순수 글자, 타워 = 단색(3톤). 옅은 타워는 왼쪽 오프셋(옆 띠+윗 캡)
   · 앞(짙은) 타워에 가려지는 단어는 draw 시 판정해 안 그림(coverY) — 비침 없음
   · 색 흐름: 진 → 중 → 연 (겹쳐 자연스럽게), 소멸: 연 → 중 → 진
   · 형상/색 = 제공 PDF(메인페이지_건물색칠), 중앙 정렬
   ========================================================= */
(function () {
  "use strict";
  var canvas = document.getElementById("skyline");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var cover = document.querySelector(".cover");
  var foot = document.querySelector(".cover__foot");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- 3톤: 0 진함 / 1 중간 / 2 연함 ---- */
  var COLORS = ["#4d4d4d", "#9a9a9a", "#cfcfcf"];

  /* ---- 5개 단지: towers [x0,x1,h,c] — 짙은(앞) + 왼쪽 오프셋된 옅은(뒤) 적층, 중앙 분포 ---- */
  var SITES = [
    { towers: [ [.16,.24,.46,0],[.13,.21,.56,1],[.10,.18,.62,2],
      [.32,.40,.54,0],[.29,.37,.64,2],
      [.48,.56,.58,0],[.45,.53,.68,1],
      [.64,.72,.52,0],[.61,.69,.62,2],
      [.80,.88,.46,0],[.77,.85,.54,1] ] },
    { towers: [ [.14,.22,.50,0],[.11,.19,.62,1],
      [.32,.40,.64,0],[.29,.37,.72,2],
      [.50,.58,.54,0],[.47,.55,.64,2],
      [.68,.76,.52,0],[.65,.73,.60,1],
      [.84,.92,.50,0],[.81,.89,.58,2] ] },
    { towers: [ [.12,.20,.40,0],[.09,.17,.48,1],
      [.28,.36,.54,0],[.25,.33,.64,2],
      [.44,.52,.66,0],[.41,.49,.78,2],
      [.60,.68,.58,0],[.57,.65,.68,1],
      [.76,.84,.46,0],[.73,.81,.56,2] ] },
    { towers: [ [.14,.22,.52,0],[.11,.19,.60,2],
      [.32,.40,.50,0],[.29,.37,.58,1],
      [.50,.58,.54,0],[.47,.55,.62,2],
      [.68,.76,.50,0],[.65,.73,.58,2],
      [.84,.92,.54,0],[.81,.89,.62,1] ] },
    { towers: [ [.14,.22,.20,0],
      [.30,.38,.42,0],[.27,.35,.50,1],
      [.46,.54,.58,0],[.43,.51,.70,2],
      [.62,.70,.54,0],[.59,.67,.62,2],
      [.78,.86,.62,0],[.75,.83,.72,2] ] }
  ];

  var WORDS = ["아파트","주동","세대","발코니","베란다","거실","안방","입면","채광","조망",
    "일조","단지","필로티","코어","복도","현관","주차장","조경","중정","놀이터",
    "커뮤니티","분양","재건축","용적률","건폐율","인동간격","남향","판상형","탑상형","베이",
    "평면","전용","공용","옥상","단열","창호","새시","수납","팬트리","알파룸"];

  var SPEED = 0.34, OUT_MULT = 2.4;

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
  var groups = [], tiles = [], siteIndex = 0, raf = 0, lastT = 0;
  var phase = "build", buildStart = 0, holdUntil = 0, outStart = 0;

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
    var site = SITES[si], rng = mulberry32(8000 + si * 167);
    groups = []; var flat = [], spawnDist = H + 70;
    var fallMs = spawnDist / SPEED;
    var TOWER_STEP = fallMs * 0.22;               // 건물(타워) 간 시차 — 앞 건물 ~1/4 내려오면 다음 건물
    var WORD_SPREAD = fallMs * 0.50;              // 한 건물 안 단어들 펼침(예측 어렵게)
    var minX = 1, maxX = 0;                       // 전체 바운더리 → 화면 중앙 정렬
    site.towers.forEach(function (tw) { if (tw[0] < minX) minX = tw[0]; if (tw[1] > maxX) maxX = tw[1]; });
    var shift = 0.5 - (minX + maxX) / 2;
    var T = site.towers.map(function (tw) {
      return { bx: (tw[0] + shift) * W, bw: (tw[1] - tw[0]) * W, bTop: H - tw[2] * H * 0.92, c: tw[3], key: 0 };
    });
    T.forEach(function (t) { t.key = rng(); });    // 같은 색 안 건물 순서는 무작위
    var ranks = T.map(function (_, i) { return i; }).sort(function (a, b) { return T[a].c - T[b].c || T[a].key - T[b].key; });
    var rankOf = []; ranks.forEach(function (ti, r) { rankOf[ti] = r; });   // 색(진→연) → 건물 순서로 줄세움
    var outTowerStep = TOWER_STEP * 0.5, outWordSpread = WORD_SPREAD * 0.5;   // 사라짐: 빌드의 절반 길이로 늘어짐
    var outRanks = T.map(function (_, i) { return i; }).sort(function (a, b) { return T[b].c - T[a].c || T[a].key - T[b].key; });  // 연한색 먼저
    var outRankOf = []; outRanks.forEach(function (ti, r) { outRankOf[ti] = r; });
    function coverY(px, c) {
      var y = Infinity;
      for (var i = 0; i < T.length; i++) {
        var f = T[i];
        if (f.c < c && px >= f.bx && px <= f.bx + f.bw && f.bTop < y) y = f.bTop;
      }
      return y;
    }
    T.forEach(function (t, ti) {
      var towerStart = rankOf[ti] * TOWER_STEP;    // 이 건물이 내려오기 시작하는 시점
      var bFS = Math.max(8, Math.round(baseFS * (0.72 + rng() * 0.70)));
      var bLine = Math.round(bFS * 1.45), bGap = Math.round(bFS * 0.5);
      var g = { bx: t.bx, bw: t.bw, fs: bFS, color: COLORS[t.c], tiles: [] };
      for (var ry = H - bFS - 2; ry >= t.bTop; ry -= bLine) {
        var cx = t.bx, guard = 0;
        while (cx < t.bx + t.bw && guard++ < 60) {
          var word = WORDS[Math.floor(rng() * WORDS.length)];
          var tfs = Math.max(8, Math.round(bFS * (0.86 + rng() * 0.30)));
          ctx.font = fontStr(tfs);
          var twd = ctx.measureText(word).width;
          var o = { x: cx, ty: ry, y: ry - spawnDist, word: word, c: t.c, fs: tfs,
            coverY: coverY(cx + twd / 2, t.c), settled: false, gone: false,
            delay: towerStart + rng() * WORD_SPREAD,
            outDelay: outRankOf[ti] * outTowerStep + rng() * outWordSpread };
          g.tiles.push(o); flat.push(o);
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
    lastT = now; buildStart = now;
    if (instant) { tiles.forEach(function (o) { o.y = o.ty; o.settled = true; }); draw(); }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (var gi = 0; gi < groups.length; gi++) {                    // coverY가 가림 처리 → 그리기 순서 무관
      var g = groups[gi];
      ctx.save();
      ctx.beginPath(); ctx.rect(g.bx, 0, g.bw, H); ctx.clip();      // 좌/우 직선 (구멍 없음 → 비침 버그 없음)
      ctx.fillStyle = g.color;
      for (var i = 0; i < g.tiles.length; i++) {
        var o = g.tiles[i];
        if (o.y >= o.coverY) continue;                              // 앞(짙은) 타워에 가려지는 단어는 안 그림
        if (o.y > H + o.fs * 2 || o.y < -o.fs * 3) continue;
        ctx.font = fontStr(o.fs);                                   // 단어별 크기
        ctx.fillText(o.word, o.x, o.y);
      }
      ctx.restore();
    }
  }

  function step(t) {
    var dt = Math.min(40, t - lastT); lastT = t;
    if (phase === "build") {
      var all = true;
      for (var i = 0; i < tiles.length; i++) {
        var o = tiles[i];
        if (o.settled) continue;
        if (t - buildStart < o.delay) { all = false; continue; }
        o.y += SPEED * (o.c === 0 ? 0.7 : 1) * dt;          // 처음(진한색) 조금 느리게
        if (o.y >= o.ty) { o.y = o.ty; o.settled = true; } else all = false;
      }
      if (all) { phase = "hold"; holdUntil = t + 2400; }
    } else if (phase === "hold") {
      if (t > holdUntil) {
        phase = "out"; outStart = t;
        for (var j = 0; j < tiles.length; j++) tiles[j].gone = false;
      }
    } else {
      var done = true;
      for (var k = 0; k < tiles.length; k++) {
        var p = tiles[k];
        if (p.gone) continue;
        if (t - outStart < p.outDelay) { done = false; continue; }
        p.y += SPEED * OUT_MULT * (p.c === 0 ? 0.6 : 1) * dt;     // 마지막(진한색) 조금 느리게
        if (p.y > H + 120) p.gone = true; else done = false;
      }
      if (done) build((siteIndex + 1) % SITES.length, false);
    }
    draw();
    raf = requestAnimationFrame(step);
  }

  function debounce(fn, ms) { var t; return function () { clearTimeout(t); t = setTimeout(fn, ms); }; }
  resize();
  if (!reduce) raf = requestAnimationFrame(step);
  window.addEventListener("resize", debounce(resize, 200));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(draw);
})();
