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
    { num: "00", id: "about", kr: "개요", en: "About",
      sub: [["연구 개요","Overview","overview"], ["핵심 숫자","Key Figures","figures"]] },
    { num: "01", id: "problem", kr: "문제의식", en: "Problem",
      sub: [["기존 아파트의 한계","Limits of Today's Apartments","limits"], ["연구 질문 · 가설","Question & Hypothesis","question"], ["연구 두 축","Two Tracks","tracks"]] },
    { num: "03", id: "theory", kr: "이론적 배경", en: "Theory",
      sub: [["Martin & March","Martin & March","martin-march"], ["아시하라 — 앙각·D/H","Ashihara — Angle · D/H","ashihara"], ["Jan Gehl — Walkable","Jan Gehl — Walkable","gehl"]] },
    { num: "03b", id: "cases", kr: "사례분석 · AI", en: "Cases · AI",
      sub: [["AI 파이프라인","AI Pipeline","ai-pipeline"], ["분석 21개 단지","21 Complexes","complexes"], ["분류 5그룹","Five Groups","groups"]] },
    { num: "04", id: "site", kr: "대상지", en: "Site",
      sub: [["위치 · 규모","Location · Scale","location"], ["사이트 역사 1976–2024","History 1976–2024","history"], ["현황 분석","Context Analysis","context"]] },
    { num: "05", id: "method", kr: "연구방법", en: "Method",
      sub: [["3단계 흐름","Three-Step Flow","flow"], ["변인 설정","Variables","variables"]] },
    { num: "07", id: "scenario", kr: "시나리오", en: "Scenario",
      sub: [["A — 남향 + 인동","A — South + Spacing","scn-a"], ["B — 인동만","B — Spacing Only","scn-b"], ["C — 인동 무시","C — No Spacing","scn-c"]] },
    { num: "09", id: "results", kr: "결과", en: "Results",
      sub: [["전환임계점 3구간","Three Threshold Zones","zones"], ["건폐율별 배치안","Layouts by BCR","layouts"], ["국내 · 국외 비교","Domestic · Intl.","compare"]] },
    { num: "10", id: "metrics", kr: "평가지표", en: "Metrics",
      sub: [["A — 물리적 형태","A — Physical Form","metric-a"], ["B — 보행자 인지","B — Perception","metric-b"], ["C — 내부 환경","C — Internal Env.","metric-c"]] },
    { num: "11", id: "conclusion", kr: "결론", en: "Conclusion",
      sub: [["핵심 주장","Key Claim","claim"], ["설계 제안","Design Proposal","proposal"], ["향후 과제","Future Work","future"]] }
  ];
  var SUBS = [];
  MENU.forEach(function (item) { item.sub.forEach(function (s) { SUBS.push({ id: s[2], ko: s[0], en: s[1], num: item.num, gnbKo: item.kr, gnbEn: item.en }); }); });

  var gnb = document.getElementById("gnb");
  var menu = document.getElementById("menu");
  var toggle = document.getElementById("menuToggle");
  var menuLabel = document.getElementById("menuLabel");
  var langToggle = document.getElementById("langToggle");
  var isOpen = false;
  var lang = "ko";
  try { lang = localStorage.getItem("sg-lang") || "ko"; } catch (e) {}

  function subHTML(item, lg) {
    return item.sub.map(function (s) {
      return '<a href="page.html?id=' + s[2] + '">' + (lg === "en" ? s[1] : s[0]) + "</a>";
    }).join("");
  }
  function buildMenu(lg) {
    if (!gnb) return;
    gnb.innerHTML = MENU.map(function (item) {
      return '<div class="gnb__item">' +
               '<a class="gnb__link" href="page.html?id=' + item.sub[0][2] + '">' +
                 '<span class="gnb__num">' + item.num + '</span>' +
                 '<span class="gnb__t">' + (lg === "en" ? item.en : item.kr) + "</span>" +
               "</a>" +
               '<div class="gnb-sub">' + subHTML(item, lg) + "</div>" +
             "</div>";
    }).join("");
    bindClose(gnb.querySelectorAll("a"));
  }

  /* ---------- 세부 페이지(page.html?id=) — 빈 페이지 + 우측 하단 '다음 소제목' 버튼 ---------- */
  function renderDoc(lg) {
    var doc = document.getElementById("doc");
    if (!doc) return;                        // page.html 아니면 무시
    var id = "", q = location.search.match(/[?&]id=([^&]+)/); if (q) id = decodeURIComponent(q[1]);
    var idx = 0; for (var i = 0; i < SUBS.length; i++) if (SUBS[i].id === id) { idx = i; break; }
    var cur = SUBS[idx], nx = SUBS[(idx + 1) % SUBS.length];
    document.title = (lg === "en" ? cur.en : cur.ko) + " — 2026 졸업설계";
    var cta = document.getElementById("pageCta");
    if (!cta) { cta = document.createElement("a"); cta.id = "pageCta"; cta.className = "cover-cta page-cta is-shown"; document.body.appendChild(cta); }
    cta.setAttribute("href", "page.html?id=" + nx.id);
    cta.textContent = (lg === "en" ? nx.en : nx.ko) + " →";
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

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
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
  var counters = document.querySelectorAll("[data-count]");
  if ("IntersectionObserver" in window && !reduce) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(countUp);
  }

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
