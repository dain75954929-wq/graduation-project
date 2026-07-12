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
      var v = localStorage.getItem("sg2-" + k);
      if (v) root.setAttribute("data-" + k, v);
    });
  } catch (e) {}

  /* ---------- 콘텐츠 목록 (GNB) + 소분류 (LNB) ---------- */
  /* 세부 구분 20개 — 책자(booklet_구성안_및_도입텍스트.md)와 공유하는 공통 구조.
     1장·9장은 세부 구분 없음(하나의 흐름) → 대제목 클릭 시 바로 해당 페이지. */
  var MENU = [
    { num: "01", id: "pedestrian", kr: "아파트와 도시 보행자", en: "Apartments and the Urban Pedestrian", sub: [] },
    { num: "02", id: "regulation", kr: "아파트의 형태를 만들어온 법과 제도", en: "The Laws That Shaped the Form",
      sub: [["형태를 규정하는 규정들","Form-Defining Regulations","2-1"], ["제도의 변천과 폐지된 규제","Change & Repealed Rules","2-2"]] },
    { num: "03", id: "theory", kr: "위압감을 이해하기 위한 이론들", en: "Theories for Understanding Oppressiveness",
      sub: [["보행자의 시지각","Pedestrian Perception","3-1"], ["아파트 주동의 유형화","Building Typology","3-2"], ["위압감의 측정 지표","Metrics of Oppressiveness","3-3"], ["컴퓨터 비전 선행연구","Computer Vision Research","3-4"]] },
    { num: "04", id: "observation", kr: "서울 아파트 단지 21곳의 관찰", en: "Observing 21 Seoul Complexes",
      sub: [["21곳의 기록","Records of 21 Complexes","4-1"], ["주관적 순위와 종합","Ranking & Synthesis","4-2"]] },
    { num: "05", id: "measurement", kr: "느낌을 숫자로 옮기기", en: "Turning Feeling into Numbers",
      sub: [["데이터 수집과 촬영 기준","Collection & Capture Protocol","5-1"], ["세그멘테이션과 시각 지표","Segmentation & Visual Indicators","5-2"], ["데이터 마이닝","Data Mining","5-3"]] },
    { num: "06", id: "findings", kr: "위압감은 어디에서 오는가", en: "Where Oppressiveness Comes From",
      sub: [["상관과 회귀의 결과","Correlation & Regression","6-1"], ["해석: 밀도·높이·분산","Density · Height · Dispersion","6-2"], ["대상지 선정","Site Selection","6-3"]] },
    { num: "07", id: "experiment", kr: "96개의 배치", en: "96 Layouts",
      sub: [["실험 설계","Experiment Design","7-1"], ["16종 유닛과 세 시나리오","16 Units & Three Scenarios","7-2"], ["평가 방법","Evaluation Method","7-3"], ["자동 생성·평가","Automated Pipeline","7-4"], ["96개 배치안","The 96 Layouts","7-5"]] },
    { num: "08", id: "balance", kr: "상충하는 지표와 균형점", en: "Conflicting Metrics, a Balance Point",
      sub: [["건폐율에 따른 변화","Change by BCR","8-1"], ["지표별 상세","Metric Details","8-2"], ["매스 유형과 클러스터형","Mass Types & Clusters","8-3"]] },
    { num: "09", id: "conclusion", kr: "공공을 배려한 아파트 단지를 향하여", en: "Toward Publicly Considerate Housing", sub: [] },
    { num: "10", id: "appendix", kr: "부록", en: "Appendix",
      sub: [["데이터","Data","10-1"], ["용어 정리","Glossary","10-2"], ["참고문헌","References","10-3"], ["이미지 크레딧","Image Credits","10-4"]] }
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
  try { lang = localStorage.getItem("sg2-lang") || "ko"; } catch (e) {}

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
    try { localStorage.setItem("sg2-lang", lg); } catch (e) {}
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
     지표 체계: 노션 `지표별 평가 기준`.
     - 기술·조작 변수: bcr(독립변수) · floors/height(층수·평균높이) · dong(동수)
     - 지표: ang(조망앙각 위압 점수) · solid(입체각 위압 점수) · front(전면점유율 %) · dongOk(동간 적절 유형/16)
       · 위압 점수 = 위압거리(조망앙각 27°↓·입체각 7.1%↓)를 [7m=100점, 200m=0점] 정규화 — 클수록 위압 적음
       · 실측 추세: 위압 점수 모두 단조↑(저층일수록 위압 해소) · 전면점유 단조↑ · 동간(§86) 적절은 단조↓ → 둘이 함께 양호한 BCR ~30%가 균형
     ※ 값 = `4. 배치 분석/2. 지표별/` 건폐율별 평균 산출값(2026-06 갱신). */
  var STOPS = [
    { bcr: 5,  floors: 48, height: 143, dong: 9,   ang: 16,  solid: 9,  front: 2,  dongOk: 16,
      zone: "초고층·저밀 — 시각 위압 최대",
      note: "위압 점수 최저(입체각 9·조망앙각 16) — 위압이 200 m 밖까지 미친다. 단 동간은 16/16 넉넉, 전면점유 거의 0." },
    { bcr: 10, floors: 24, height: 73,  dong: 17,  ang: 64,  solid: 15, front: 6,  dongOk: 16,
      zone: "고층 — 조망앙각 빠르게 해소",
      note: "조망앙각 점수 급등(64), 입체각은 아직 낮음(15). 동간 16/16 유지." },
    { bcr: 20, floors: 12, height: 37,  dong: 33,  ang: 89,  solid: 41, front: 5,  dongOk: 16,
      zone: "중층 — 조망앙각 거의 해소",
      note: "조망앙각 점수 89, 입체각 41로 상승. 동간 16/16. 전면점유는 여전히 낮음." },
    { bcr: 30, floors: 8,  height: 25,  dong: 49,  ang: 94,  solid: 54, front: 27, dongOk: 12,
      zone: "중밀 — 균형 구간",
      note: "시각위압 점수 양호(입체각 54·조망앙각 94), 동간도 12/16로 아직 양호 — 시지각·법규가 함께 충족되는 균형점." },
    { bcr: 40, floors: 6,  height: 19,  dong: 65,  ang: 97,  solid: 58, front: 34, dongOk: 7,
      zone: "저층고밀 — 동간 무너지기 시작",
      note: "위압 점수 더 오름(입체각 58·조망앙각 97)이나 동간 적절 7/16로 급락 — 인동간격 위반 증가." },
    { bcr: 50, floors: 5,  height: 15,  dong: 81,  ang: 100, solid: 63, front: 39, dongOk: 2,
      zone: "저층고밀 — 인동 한계",
      note: "위압 점수 최고(입체각 63·조망앙각 100)이나 동간 2/16뿐 — 인동간격 위반으로 거주성 위협. 전면점유는 일부(4개)만 충족." }
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
      elAng.textContent = d.ang + "점"; elSolid.textContent = d.solid + "점"; elFront.textContent = d.front + "%";
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
