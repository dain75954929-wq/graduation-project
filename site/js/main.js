/* =========================================================
   졸업설계 메인 — 인터랙션
   ========================================================= */
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 저장된 디자인 설정 적용 (스타일 가이드에서 선택) ---------- */
  try {
    var root = document.documentElement;
    ["type", "theme", "scale"].forEach(function (k) {
      var v = localStorage.getItem("sg-" + k);
      if (v) root.setAttribute("data-" + k, v);
    });
  } catch (e) {}

  /* ---------- 콘텐츠 목록 (GNB) + 소분류 (LNB) ---------- */
  var MENU = [
    { num: "01", id: "intro", kr: "서론", en: "Introduction",
      sub: [["연구의 배경 및 필요성","Background & Need","1-1"], ["연구의 목적","Objectives","1-2"], ["연구의 범위 및 방법","Scope & Methods","1-3"], ["연구의 흐름 및 구성","Flow & Structure","1-4"]] },
    { num: "02", id: "background", kr: "이론적 배경 및 선행 연구", en: "Background & Literature",
      sub: [["관련 개념 및 이론적 고찰","Concepts & Theory","2-1"], ["선행 연구 검토","Literature Review","2-2"], ["선행 연구의 한계 및 본 연구의 차별성","Gap & Contribution","2-3"]] },
    { num: "03", id: "framework", kr: "분석의 틀 및 연구 방법", en: "Framework & Methods",
      sub: [["분석 대상 및 범위","Subject & Scope","3-1"], ["분석 기준 및 변수 설정","Criteria & Variables","3-2"], ["분석·설계 방법","Analysis & Design Methods","3-3"]] },
    { num: "04", id: "design", kr: "분석 및 설계", en: "Analysis & Design",
      sub: [["대상지 분석","Site Analysis","4-1"], ["유형 분석","Typology Analysis","4-2"], ["설계(생성) 과정 및 결과","Design (Generation)","4-3"]] },
    { num: "05", id: "evaluation", kr: "평가 및 종합", en: "Evaluation & Synthesis",
      sub: [["평가 기준","Evaluation Criteria","5-1"], ["평가 결과","Evaluation Results","5-2"], ["결과의 해석 및 논의","Interpretation & Discussion","5-3"]] },
    { num: "06", id: "conclusion", kr: "결론", en: "Conclusion",
      sub: [["연구 요약","Summary","6-1"], ["연구의 의의 및 한계","Significance & Limits","6-2"], ["향후 과제","Future Work","6-3"]] },
    { num: "07", id: "references", kr: "참고문헌", en: "References", sub: [] },
    { num: "08", id: "appendix", kr: "부록", en: "Appendix", sub: [] }
  ];
  var SUBS = [];
  MENU.forEach(function (item) {
    if (item.sub && item.sub.length) item.sub.forEach(function (s) { SUBS.push({ id: s[2], ko: s[0], en: s[1], num: item.num, gnbKo: item.kr, gnbEn: item.en }); });
    else SUBS.push({ id: item.id, ko: item.kr, en: item.en, num: item.num, gnbKo: item.kr, gnbEn: item.en });
  });

  var gnb = document.getElementById("gnb");
  var menu = document.getElementById("menu");
  var toggle = document.getElementById("menuToggle");
  var menuLabel = document.getElementById("menuLabel");
  var langToggle = document.getElementById("langToggle");
  var isOpen = false;
  var lang = "ko";
  try { lang = localStorage.getItem("sg-lang") || "ko"; } catch (e) {}

  function subHTML(item, lg) {
    if (!item.sub || !item.sub.length) return "";
    return item.sub.map(function (s) {
      return '<a href="page.html?id=' + s[2] + '">' + (lg === "en" ? s[1] : s[0]) + "</a>";
    }).join("");
  }
  function buildMenu(lg) {
    if (!gnb) return;
    gnb.innerHTML = MENU.map(function (item) {
      var mainId = (item.sub && item.sub.length) ? item.sub[0][2] : item.id;
      return '<div class="gnb__item">' +
               '<a class="gnb__link" href="page.html?id=' + mainId + '">' +
                 '<span class="gnb__num">' + item.num + '</span>' +
                 '<span class="gnb__t">' + (lg === "en" ? item.en : item.kr) + "</span>" +
               "</a>" +
               '<div class="gnb-sub">' + subHTML(item, lg) + "</div>" +
             "</div>";
    }).join("");
    bindClose(gnb.querySelectorAll("a"));
  }

  /* ---------- 세부 페이지(page.html?id=) — 빈 페이지 + 좌·우 하단 버튼 ----------
     좌측 하단: '처음으로 가기'(index.html) · 우측 하단: '다음 소제목으로 가기'(다음 소제목)
     두 버튼 동일 디자인(cover-cta / page-cta) ------------------------------------- */
  function makeCta(idAttr, extraClass) {
    var el = document.getElementById(idAttr);
    if (!el) {
      el = document.createElement("a");
      el.id = idAttr;
      el.className = "cover-cta page-cta is-shown" + (extraClass ? " " + extraClass : "");
      document.body.appendChild(el);
    }
    return el;
  }
  function renderDoc(lg) {
    var doc = document.getElementById("doc");
    if (!doc) return;                        // page.html 아니면 무시
    var id = "", q = location.search.match(/[?&]id=([^&]+)/); if (q) id = decodeURIComponent(q[1]);
    var idx = 0; for (var i = 0; i < SUBS.length; i++) if (SUBS[i].id === id) { idx = i; break; }
    var cur = SUBS[idx], nx = SUBS[(idx + 1) % SUBS.length];
    var isLast = (idx === SUBS.length - 1);   // 마지막 소제목 페이지
    document.title = (lg === "en" ? cur.en : cur.ko) + " — 2026 졸업설계";
    doc.innerHTML = "";                       // 소제목 페이지는 비워 둠

    // 다음 소제목으로 가기 (우측 하단) — 마지막 페이지에선 숨김
    var next = makeCta("pageCta");
    if (isLast) {
      next.style.display = "none";
    } else {
      next.style.display = "";
      next.setAttribute("href", "page.html?id=" + nx.id);
      next.setAttribute("data-ko", nx.ko + " 보기 →");
      next.setAttribute("data-en", "View " + nx.en + " →");
      next.textContent = (lg === "en" ? "View " + nx.en : nx.ko + " 보기") + " →";
    }

    // 처음으로 가기 (동일 디자인) — 항상 좌측 하단 고정
    var home = makeCta("homeCta", "page-cta--home");
    home.setAttribute("href", "index.html");
    home.setAttribute("data-ko", "← 처음으로 가기");
    home.setAttribute("data-en", "← Home");
    home.textContent = lg === "en" ? "← Home" : "← 처음으로 가기";
    home.classList.add("page-cta--home");   // 마지막 페이지에서도 좌측 유지

    // 동적 주입 콘텐츠(content.js)에도 리빌·카운터 적용 — 언어 토글 재주입 포함
    initReveals(doc);
    initCounters(doc);
  }

  function applyLang(lg) {
    lang = lg;
    document.documentElement.setAttribute("lang", lg);
    document.querySelectorAll("[data-ko]").forEach(function (el) {
      var t = lg === "en" ? el.getAttribute("data-en") : el.getAttribute("data-ko");
      if (t) el.textContent = t;
    });
    buildMenu(lg);
    renderDoc(lg);
    if (langToggle) langToggle.querySelectorAll(".langtoggle__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lg);
    });
    try { localStorage.setItem("sg-lang", lg); } catch (e) {}
  }
  if (langToggle) {
    langToggle.addEventListener("click", function (e) {
      var btn = e.target.closest && e.target.closest(".langtoggle__btn");
      if (btn) { e.stopPropagation(); applyLang(btn.getAttribute("data-lang")); }
    });
  }
  applyLang(lang);

  /* ---------- 메뉴 열기/닫기 ---------- */
  function openMenu() {
    isOpen = true;
    document.documentElement.classList.add("is-menu-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    isOpen = false;
    document.documentElement.classList.remove("is-menu-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
  }
  if (toggle) {
    toggle.addEventListener("click", function (e) { e.stopPropagation(); isOpen ? closeMenu() : openMenu(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && isOpen) closeMenu(); });
    document.addEventListener("click", function (e) {
      if (isOpen && menu && !menu.contains(e.target) && !toggle.contains(e.target)) closeMenu();
    });
  }

  // 메뉴 내 링크 클릭 → 닫고 스무스 스크롤
  function bindClose(links) {
    links.forEach(function (a) {
      if (a.__bound) return; a.__bound = true;
      a.addEventListener("click", function (e) {
        var href = a.getAttribute("href");
        if (href && href.charAt(0) === "#") {
          e.preventDefault();
          var id = href === "#top" ? null : href.slice(1);
          var target = id ? document.getElementById(id) : document.body;
          closeMenu();
          window.setTimeout(function () {
            if (!id) { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }
            else if (target) { target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }); }
          }, reduce ? 0 : 220);
        } else { closeMenu(); }
      });
    });
  }
  /* GNB 링크 바인딩은 buildMenu() 내부에서 처리됨 */

  /* ---------- Scroll reveal (정적 + 동적 주입 콘텐츠) ---------- */
  function initReveals(root) {
    var reveals = (root || document).querySelectorAll(".reveal:not(.in-view)");
    if ("IntersectionObserver" in window && !reduce) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in-view"); });
    }
  }
  initReveals(document);

  /* ---------- Count-up ---------- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduce) { el.textContent = target + suffix; return; }
    var dur = 1200, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  function initCounters(root) {
    var counters = (root || document).querySelectorAll("[data-count]:not(.counted)");
    counters.forEach(function (el) { el.classList.add("counted"); });
    if ("IntersectionObserver" in window && !reduce) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { cio.observe(el); });
    } else {
      counters.forEach(countUp);
    }
  }
  initCounters(document);

  /* ---------- 건폐율 슬라이더 ---------- */
  var STOPS = [
    { bcr: 5,  floors: 49, dong: 26,  ang: 58, svf: 6,  dh: 0.6,
      zone: "1구간 · Optimal Zone — 남향·인동 모두 만족",
      note: "초고층·저밀 — 거대하고 황량한 광장형 오픈스페이스." },
    { bcr: 10, floors: 24, dong: 47,  ang: 51, svf: 10, dh: 0.9,
      zone: "1구간 · Optimal Zone — 남향·인동 모두 만족",
      note: "현황대 — 남향·인동 모두 확보되는 안정 구간." },
    { bcr: 20, floors: 17, dong: 68,  ang: 45, svf: 15, dh: 1.2,
      zone: "2구간 · Compromise Zone — 남향 완화로 설계 타협",
      note: "임계 17.3% 통과 — 남향을 양보하며 동수가 늘기 시작." },
    { bcr: 30, floors: 12, dong: 90,  ang: 38, svf: 22, dh: 1.6,
      zone: "2~3구간 — 남향 양보 가속, 가로 분절 시작",
      note: "앙각 45° 이하로 — 보행자에게 편안한 범위 진입." },
    { bcr: 40, floors: 9,  dong: 130, ang: 33, svf: 28, dh: 1.9,
      zone: "3구간 · 인동간격 규제 압박 구간",
      note: "저층고밀 — 매스가 가로 스케일로 분절." },
    { bcr: 50, floors: 7,  dong: 170, ang: 29, svf: 34, dh: 2.2,
      zone: "3구간 · Invalid Zone — 인동 규제 완화 임계(50.9%)",
      note: "중정형 영역성 — 아늑한 가로, 보행 친화 완성." }
  ];

  var range = document.getElementById("bcrRange");
  if (range) {
    var elBcr = document.getElementById("rBcr"), elFloors = document.getElementById("rFloors"),
        elDong = document.getElementById("rDong"), elAng = document.getElementById("rAng"),
        elSvf = document.getElementById("rSvf"), elDh = document.getElementById("rDh"),
        elZone = document.getElementById("bcrZone"), elNote = document.getElementById("bcrNote"),
        elPlanN = document.getElementById("bcrPlanN"), unitsWrap = document.getElementById("bcrUnits"),
        sectionWrap = document.getElementById("bcrSection"), ticks = document.querySelectorAll("#bcrTicks button");

    var BARS = 14, bars = [];
    for (var b = 0; b < BARS; b++) { var bar = document.createElement("div"); bar.className = "bcr__bar"; sectionWrap.appendChild(bar); bars.push(bar); }

    function render(i) {
      var d = STOPS[i];
      elBcr.textContent = d.bcr; elFloors.textContent = d.floors; elDong.textContent = d.dong;
      elAng.textContent = d.ang + "°"; elSvf.textContent = d.svf + "%"; elDh.textContent = d.dh.toFixed(1);
      elZone.textContent = d.zone; elNote.textContent = d.note; elPlanN.textContent = d.dong;

      var n = Math.min(d.dong, 120);
      var size = Math.max(7, Math.round(46 - d.bcr * 0.7));
      var html = "";
      for (var k = 0; k < n; k++) html += '<div class="bcr__unit" style="width:' + size + 'px;height:' + Math.round(size * 0.6) + 'px"></div>';
      unitsWrap.innerHTML = html;

      var hpct = d.floors / 49;
      bars.forEach(function (bar, idx) { bar.style.height = Math.round(100 * hpct * (1 - (idx % 3) * 0.05)) + "%"; });

      ticks.forEach(function (t) { t.classList.toggle("is-active", parseInt(t.getAttribute("data-i"), 10) === i); });
    }
    range.addEventListener("input", function () { render(parseInt(range.value, 10)); });
    ticks.forEach(function (t) { t.addEventListener("click", function () { var i = parseInt(t.getAttribute("data-i"), 10); range.value = i; render(i); }); });
    render(0);
  }
})();
