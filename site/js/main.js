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
      sub: [["프로젝트 배경","Background","1-1"], ["프로젝트 목적","Objective","1-2"]] },
    { num: "02", id: "background", kr: "이론적 배경", en: "Theoretical Background",
      sub: [["관련 법규 및 제도","Laws & Regulations","2-1"], ["선행 연구","Literature Review","2-2"], ["사전 분석","Preliminary Analysis","2-3"]] },
    { num: "03", id: "subject", kr: "분석 대상", en: "Subject",
      sub: [["대상지 선정","Site Selection","3-1"], ["대상지 분석","Site Analysis","3-2"]] },
    { num: "04", id: "method", kr: "분석 방법", en: "Method",
      sub: [["분석 단계","Analysis Steps","4-1"], ["분석 도구","Tools","4-2"], ["분석 지표","Metrics","4-3"]] },
    { num: "05", id: "analysis", kr: "분석", en: "Analysis",
      sub: [["임계전환점 도출","Transition Point","5-1"], ["배치안 자동 생성","Auto-Layout","5-2"]] },
    { num: "06", id: "results", kr: "분석 결과", en: "Results",
      sub: [["배치안별 분석 결과","Results by Layout","6-1"], ["배치안별 이미지","Layout Images","6-2"]] },
    { num: "07", id: "conclusion", kr: "결론 및 한계", en: "Conclusion & Limits", sub: [] },
    { num: "08", id: "references", kr: "참고문헌", en: "References", sub: [] }
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

  /* ---------- 건폐율 슬라이더 ----------
     지표 체계: 노션 `지표별 평가 기준`·`지표별 가설`.
     - 기술·조작 변수: bcr(독립변수) · floors/height(평균높이, FAR250%÷BCR) · dong(동수)
     - 판정 지표(단지 외부 보행자 시지각): ang(조망앙각°) · solid(입체각 %FOV) · front(전면점유율 %)
       · 임계: 앙각 27°거리≤100m / 입체각 7.1%FOV / 전면점유 ≥50%
       · 가설: 앙각 단조↓ · 입체각 역U(중간 BCR 최소) · 전면점유 단조↑ → BCR 15~30% 최적 구간
     ※ 수치는 가설 방향에 맞춘 illustrative 값. 확정 시 `4. 배치 분석/2. 지표별/` 산출값으로 교체. */
  var STOPS = [
    { bcr: 5,  floors: 50, height: 150, dong: 22,  ang: 58, solid: 9.4, front: 18,
      zone: "초고층·저밀 — 수직 위압 구간",
      note: "앙각·입체각 모두 임계 초과(27°거리 > 100m). 전면점유 낮아 가로 단절." },
    { bcr: 10, floors: 25, height: 75,  dong: 40,  ang: 51, solid: 7.2, front: 28,
      zone: "고층 — 앙각 합격 임계 부근",
      note: "평균높이 ~75m. 27°거리 막 100m 진입, 입체각은 아직 위압(7.1%↑)." },
    { bcr: 20, floors: 13, height: 38,  dong: 64,  ang: 45, solid: 5.6, front: 44,
      zone: "최적 구간 진입 — 4지표 균형",
      note: "평균높이 ~38m. 앙각·입체각 동시 합격 시작, 전면점유 50% 근접." },
    { bcr: 30, floors: 8,  height: 25,  dong: 92,  ang: 38, solid: 5.3, front: 56,
      zone: "최적 구간 — 외부 보행 친화",
      note: "입체각 최저(역U 바닥). 전면점유 50% 돌파, 가로 접면 확보." },
    { bcr: 40, floors: 6,  height: 19,  dong: 124, ang: 33, solid: 6.9, front: 70,
      zone: "저층고밀 — 수평 위압 시작",
      note: "광폭 footprint로 근경 입체각 재상승(역U 우측). 전면점유는 높음." },
    { bcr: 50, floors: 5,  height: 15,  dong: 158, ang: 29, solid: 8.6, front: 82,
      zone: "저층고밀 — 병풍(수평) 위압",
      note: "앙각은 최저지만 입체각 7.1% 재초과 — 병풍 벽면이 근경 시야 점유." }
  ];

  var range = document.getElementById("bcrRange");
  if (range) {
    var elBcr = document.getElementById("rBcr"), elFloors = document.getElementById("rFloors"),
        elDong = document.getElementById("rDong"), elAng = document.getElementById("rAng"),
        elSolid = document.getElementById("rSolid"), elFront = document.getElementById("rFront"),
        elZone = document.getElementById("bcrZone"), elNote = document.getElementById("bcrNote"),
        elPlanN = document.getElementById("bcrPlanN"), unitsWrap = document.getElementById("bcrUnits"),
        sectionWrap = document.getElementById("bcrSection"), ticks = document.querySelectorAll("#bcrTicks button");

    var BARS = 14, bars = [];
    for (var b = 0; b < BARS; b++) { var bar = document.createElement("div"); bar.className = "bcr__bar"; sectionWrap.appendChild(bar); bars.push(bar); }

    function render(i) {
      var d = STOPS[i];
      elBcr.textContent = d.bcr; elFloors.textContent = d.floors; elDong.textContent = d.dong;
      elAng.textContent = d.ang + "°"; elSolid.textContent = d.solid + "%"; elFront.textContent = d.front + "%";
      elZone.textContent = d.zone; elNote.textContent = d.note; elPlanN.textContent = d.dong;

      var n = Math.min(d.dong, 120);
      var size = Math.max(7, Math.round(46 - d.bcr * 0.7));
      var html = "";
      for (var k = 0; k < n; k++) html += '<div class="bcr__unit" style="width:' + size + 'px;height:' + Math.round(size * 0.6) + 'px"></div>';
      unitsWrap.innerHTML = html;

      var hpct = d.floors / 50;
      bars.forEach(function (bar, idx) { bar.style.height = Math.round(100 * hpct * (1 - (idx % 3) * 0.05)) + "%"; });

      ticks.forEach(function (t) { t.classList.toggle("is-active", parseInt(t.getAttribute("data-i"), 10) === i); });
    }
    range.addEventListener("input", function () { render(parseInt(range.value, 10)); });
    ticks.forEach(function (t) { t.addEventListener("click", function () { var i = parseInt(t.getAttribute("data-i"), 10); range.value = i; render(i); }); });
    render(0);
  }
})();
