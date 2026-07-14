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
    // 소제목은 장 페이지 안의 앵커(#소제목id)로 스크롤
    return item.sub.map(function (s) {
      return '<a href="page.html?id=' + item.id + "#" + s[2] + '">' + (lg === "en" ? s[1] : s[0]) + "</a>";
    }).join("");
  }
  function buildMenu(lg) {
    if (!gnb) return;
    gnb.innerHTML = MENU.map(function (item) {
      return '<div class="gnb__item">' +
               '<a class="gnb__link" href="page.html?id=' + item.id + '">' +
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
  function chapContent(chap) {
    // 장 본문 = 소제목(절) 섹션들을 세로로 쌓기. 없으면 장 id 로 단일 콘텐츠.
    return (chap.sub && chap.sub.length) ? chap.sub : null;
  }
  function renderDoc(lg) {
    var doc = document.getElementById("doc");
    if (!doc) return;                        // page.html 아니면 무시
    var id = "", q = location.search.match(/[?&]id=([^&]+)/); if (q) id = decodeURIComponent(q[1]);

    // 장 해석 — id 는 장 id. 레거시 소제목 id 로 들어오면 소유 장을 찾아 그 절로 스크롤.
    var chap = null, chapIdx = -1, targetHash = "";
    for (var i = 0; i < MENU.length; i++) if (MENU[i].id === id) { chap = MENU[i]; chapIdx = i; break; }
    if (!chap) {
      for (var m = 0; m < MENU.length && !chap; m++) {
        var it = MENU[m];
        if (it.sub) for (var j = 0; j < it.sub.length; j++) if (it.sub[j][2] === id) { chap = it; chapIdx = m; targetHash = id; break; }
      }
    }
    if (!chap) { chap = MENU[0]; chapIdx = 0; }
    document.title = (lg === "en" ? chap.en : chap.kr) + " — 보기 좋은 아파트에 대하여";

    // 장 본문 조립 (소제목 = 스크롤 섹션)
    var subs = chapContent(chap), parts = [];
    if (subs) {
      subs.forEach(function (s) {
        var d = window.CONTENT && window.CONTENT[s[2]];
        if (!d) return;
        var st = lg === "en" ? (d.titleEn || s[1]) : (d.titleKo || s[0]);
        parts.push(
          '<section class="chsec" id="' + s[2] + '">' +
            '<div class="chsec__rail reveal">' +
              '<span class="chsec__idx">' + s[2] + "</span>" +
              '<h2 class="chsec__title">' + st + "</h2>" +
            "</div>" +
            '<div class="chsec__main">' + d.body + "</div>" +
          "</section>"
        );
      });
    } else {
      var one = window.CONTENT && window.CONTENT[chap.id];
      if (one) parts.push('<section class="chsec chsec--single" id="' + chap.id + '"><div class="chsec__main">' + one.body + "</div></section>");
    }

    if (parts.length) {
      var head = '<header class="doc__head">' +
                   '<span class="doc__index">' + chap.num + "</span>" +
                   '<h1 class="doc__title">' + (lg === "en" ? chap.en : chap.kr) + "</h1>" +
                 "</header>";
      document.body.classList.remove("is-empty-doc");
      doc.classList.remove("doc--empty");
      doc.innerHTML = head + '<div class="doc__body">' + parts.join("") + "</div>";
      // 주입된 subtree 언어 스왑 (applyLang 의 전역 스왑은 주입 전에 실행됨)
      doc.querySelectorAll("[data-ko]").forEach(function (el) {
        var t = lg === "en" ? el.getAttribute("data-en") : el.getAttribute("data-ko");
        if (t) el.textContent = t;
      });
    } else {
      document.body.classList.add("is-empty-doc");
      doc.classList.add("doc--empty");
      doc.innerHTML = "";                     // 콘텐츠 미작성 장은 비워 둠
    }

    // 다음 장으로 가기 (우측 하단) — 마지막 장에선 숨김
    // 라벨(.cta__t)과 화살표(.cta__a)를 분리 → 라벨만 말줄임되고 화살표는 항상 보인다.
    // 앵커에 data-ko 를 두면 applyLang 이 textContent 로 덮어써 내부 span 이 날아가므로 라벨 span 에만 둔다.
    var nextChap = MENU[chapIdx + 1];
    var next = makeCta("pageCta");
    next.removeAttribute("data-ko"); next.removeAttribute("data-en");
    if (!nextChap) {
      next.style.display = "none";
    } else {
      next.style.display = "";
      next.setAttribute("href", "page.html?id=" + nextChap.id);
      next.innerHTML =
        '<span class="cta__t" data-ko="' + nextChap.kr + '" data-en="' + nextChap.en + '">' +
          (lg === "en" ? nextChap.en : nextChap.kr) +
        '</span><span class="cta__a" aria-hidden="true">→</span>';
    }

    // 처음으로 가기 (동일 디자인) — 항상 좌측 하단 고정
    var home = makeCta("homeCta", "page-cta--home");
    home.removeAttribute("data-ko"); home.removeAttribute("data-en");
    home.setAttribute("href", "index.html");
    home.innerHTML =
      '<span class="cta__a" aria-hidden="true">←</span>' +
      '<span class="cta__t" data-ko="처음으로 가기" data-en="Home">' +
        (lg === "en" ? "Home" : "처음으로 가기") +
      "</span>";
    home.classList.add("page-cta--home");

    // 동적 주입 콘텐츠에도 리빌·카운터·슬라이더·도판 적용.
    // 위젯 하나가 실패해도 나머지 스크립트(메뉴·언어토글·모바일 크롬)까지 죽지 않도록 개별 격리.
    [initReveals, initCounters, initLx, initRegression, initComplexes, initPrecedent, initSeg, initScores, initAllData, initFigures].forEach(function (fn) {
      try { fn(doc); } catch (err) { if (window.console) console.error("[doc init]", fn.name, err); }
    });

    // 해시(#소제목)나 레거시 소제목 id 로 왔으면 해당 절로 스크롤
    var hash = location.hash ? decodeURIComponent(location.hash.slice(1)) : targetHash;
    if (hash) {
      var target = document.getElementById(hash);
      if (target) requestAnimationFrame(function () { target.scrollIntoView({ behavior: "auto", block: "start" }); });
    }
  }

  /* ---------- 도판 이미지: 로드되면 placeholder 위에 표시 ---------- */
  function initFigures(root) {
    (root || document).querySelectorAll("img[data-fig]").forEach(function (img) {
      if (img.__f) return; img.__f = 1;
      if (img.complete && img.naturalWidth > 0) { img.classList.add("is-loaded"); return; }
      img.addEventListener("load", function () { img.classList.add("is-loaded"); });
      img.addEventListener("error", function () { img.classList.remove("is-loaded"); });
    });
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
  /* ※ applyLang(lang) 최초 호출은 파일 맨 끝에 있다.
     renderDoc 이 쓰는 데이터·헬퍼(var 선언)가 모두 채워진 뒤에 그려야 한다.
     여기서 부르면 아래쪽 var 들이 undefined 인 채로 실행돼 TypeError → 메뉴 바인딩·모바일 크롬까지 전부 죽는다. */

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
      // threshold 0 — 요소 일부만 들어와도 보인다.
      // 0.15 로 두면 '뷰포트보다 6배 이상 긴 요소'(예: 부록 96행 표)는 교차율이 0.15 를
      // 절대 못 넘겨 영영 in-view 가 되지 않는다 → 화면에서 통째로 사라진다.
      }, { threshold: 0, rootMargin: "0px 0px -8% 0px" });
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

  /* ---------- 96개 배치안 탐색기 (건폐율 6 × 주동유형 16) ----------
     데이터: js/layouts.js (window.LAYOUTS) — `4. 배치 분석` 산출값에서 자동 생성.
     · 용적률 250% 고정 → 건폐율↑ = 동수↑ · 층수↓
     · 위압 점수(조망앙각·입체각) = 위압 해소 통과거리를 [7 m=100, 200 m=0] 정규화 — 클수록 위압 적음
     · 아이소메트릭: assets/img/07/iso/iso_<건폐율>_<유형슬러그>.webp (없으면 placeholder) */
  var LX_ZONE = {
    "5%":  ["초고층·저밀 — 시각 위압 최대", "Sparse high-rise — peak visual oppression"],
    "10%": ["고층 — 조망앙각이 먼저 풀린다", "High-rise — view angle clears first"],
    "20%": ["중층 — 조망앙각 거의 해소", "Mid-rise — view angle largely resolved"],
    "30%": ["중밀 — 시지각과 인동이 함께 충족되는 균형 구간", "Balanced — perception and spacing both hold"],
    "40%": ["저층고밀 — 동간이 무너지기 시작", "Dense low-rise — spacing starts to fail"],
    "50%": ["저층고밀 — 인동 한계", "Dense low-rise — spacing at its limit"]
  };
  // 데이터 키가 1·2·3·4 인 복합 유형 → 실제 조합 이름으로 표시 (키는 그대로 두고 라벨만 교체)
  var LX_NAME = { "1": "ㅁ3+L11", "2": "V4+I2", "3": "V3+I2", "4": "I2+V4+I2" };
  function lxName(m) { return LX_NAME[m] || m; }
  // 파일명에 쓸 수 없는 기호(', ㅁ, +)를 안전한 슬러그로
  var LX_SLUG = { "L22'": "L22p", "L24'": "L24p", "ㅁ3": "M3", "ㅁ4": "M4", "1": "N1", "2": "N2", "3": "N3", "4": "N4" };
  function lxSlug(m) { return LX_SLUG[m] || m; }
  // 파일명이 그대로라 이미지를 갈아 끼워도 브라우저가 옛 캐시를 계속 쓴다 → 버전 쿼리로 무효화.
  // rt1 = 2026-07-14 Raytraced 재렌더(SE 아이소 B · 태양 az135/alt60 · 그림자 있음)
  var ISO_V = "rt1";
  function lxIsoSrc(b, m) {
    return "assets/img/07/iso/iso_" + b.replace("%", "") + "_" + lxSlug(m) + ".webp?v=" + ISO_V;
  }

  function initLx(root) {
    root = root || document;
    var wrap = root.querySelector("#lx");
    if (!wrap || wrap.__lx || !window.LAYOUTS) return;
    wrap.__lx = 1;
    var L = window.LAYOUTS;
    var elBcr = root.querySelector("#lxBcr"), elMass = root.querySelector("#lxMass");
    var iso = root.querySelector("#lxIso"), ph = root.querySelector("#lxPh");
    var elId = root.querySelector("#lxId"), elStats = root.querySelector("#lxStats"), elNote = root.querySelector("#lxNote");
    var bcr = "30%", mass = "ㅁ4";      // 기본값 = 균형 구간

    elBcr.innerHTML = L.bcrs.map(function (b) {
      return '<button type="button" class="lx__chip" data-b="' + b + '">' + b + "</button>";
    }).join("");
    elMass.innerHTML = L.masses.map(function (m) {
      return '<button type="button" class="lx__chip" data-m="' + m + '">' + lxName(m) + "</button>";
    }).join("");

    function stat(v, ko, en) {
      var lg = document.documentElement.lang === "en" ? en : ko;
      return '<div class="lx__stat"><b>' + v + "</b><span>" + lg + "</span></div>";
    }
    function render() {
      var d = L.cells[bcr] && L.cells[bcr][mass];
      if (!d) return;
      var en = document.documentElement.lang === "en";
      var meta = L.meta[mass] || {};

      iso.src = lxIsoSrc(bcr, mass);
      iso.alt = (en ? "Isometric — " : "아이소메트릭 — ") + bcr + " · " + lxName(mass);
      if (ph) ph.textContent = (en ? "Isometric pending · " : "아이소메트릭 도판 예정 · ") + bcr + " · " + lxName(mass);

      elId.innerHTML = '<b>' + bcr + " · " + lxName(mass) + "</b><span>" +
        (en ? meta.ufp + " units/floor · footprint " + meta.fp + " m²" : "층당 " + meta.ufp + "세대 · 풋프린트 " + meta.fp + "㎡") + "</span>";

      elStats.innerHTML =
        '<div class="lx__group">' +
          '<p class="lx__gt">' + (en ? "Form" : "형태") + "</p>" +
          stat(d.n, "동수", "Buildings") +
          stat(d.floors, "층수", "Floors") +
          stat(d.h + " m", "평균 높이", "Mean height") +
          stat(d.units.toLocaleString(), "세대수", "Units") +
          stat(d.far + "%", "용적률", "FAR") +
          stat(d.bcr + "%", "실제 건폐율", "Actual BCR") +
        "</div>" +
        '<div class="lx__group lx__group--perf">' +
          '<p class="lx__gt">' + (en ? "Street performance" : "가로 성능") + "</p>" +
          stat(d.ang, "조망앙각 점수", "View-angle score") +
          stat(d.solid, "입체각 점수", "Solid-angle score") +
          stat(d.front + "%", "전면 점유", "Frontage") +
          stat(d.gap + " m", "최근접 동간", "Nearest gap") +
        "</div>";

      var z = LX_ZONE[bcr] || ["", ""];
      elNote.textContent = en ? z[1] : z[0];

      elBcr.querySelectorAll(".lx__chip").forEach(function (c) { c.classList.toggle("is-on", c.getAttribute("data-b") === bcr); });
      elMass.querySelectorAll(".lx__chip").forEach(function (c) { c.classList.toggle("is-on", c.getAttribute("data-m") === mass); });
    }

    elBcr.addEventListener("click", function (e) {
      var c = e.target.closest(".lx__chip"); if (!c) return;
      bcr = c.getAttribute("data-b"); render();
    });
    elMass.addEventListener("click", function (e) {
      var c = e.target.closest(".lx__chip"); if (!c) return;
      mass = c.getAttribute("data-m"); render();
    });
    render();
  }

  /* ---------- 10-1 부록 데이터 — 96행 (js/layouts.js) ----------
     건폐율·유형 칩으로 걸러 본다. 필터는 '행'을 줄이지만 열은 10개 그대로이므로,
     모바일에서는 CSS 가 각 행을 카드로 접는다(.data--stack) → 가로 스크롤이 사라진다.
     td 의 data-label 이 그때 열 이름 노릇을 한다. ---------- */
  function initAllData(root) {
    root = root || document;
    var wrap = root.querySelector("#allData");
    if (!wrap || wrap.__a || !window.LAYOUTS) return;
    wrap.__a = 1;
    var L = window.LAYOUTS;
    // 처음엔 아무것도 고르지 않은 상태 — 96행을 통째로 쏟아내지 않는다.
    // 건폐율이나 유형 중 하나라도 고르면 그때 표가 나타난다. ("all" = 전체 보기)
    var fB = "", fM = "";

    var COLS = [
      { ko: "건폐율", en: "BCR", get: function (b) { return b; } },
      { ko: "유형", en: "Type", get: function (b, m) { return lxName(m); } },
      { ko: "동수", en: "Bldgs", num: 1, get: function (b, m, d) { return d.n; } },
      { ko: "층수", en: "Floors", num: 1, get: function (b, m, d) { return d.floors; } },
      { ko: "세대수", en: "Units", num: 1, get: function (b, m, d) { return d.units.toLocaleString(); } },
      { ko: "평균높이 m", en: "Height m", num: 1, get: function (b, m, d) { return d.h; } },
      { ko: "조망앙각", en: "View", num: 1, get: function (b, m, d) { return d.ang; } },
      { ko: "입체각", en: "Solid", num: 1, get: function (b, m, d) { return d.solid; } },
      { ko: "전면 %", en: "Front %", num: 1, get: function (b, m, d) { return d.front; } },
      { ko: "동간 m", en: "Gap m", num: 1, get: function (b, m, d) { return d.gap; } }
    ];

    function chips(id, items, sel, labeller) {
      return '<div class="lx__chips" id="' + id + '">' +
        '<button type="button" class="lx__chip' + (sel === "all" ? " is-on" : "") + '" data-v="all">' +
          (document.documentElement.lang === "en" ? "All" : "전체") + "</button>" +
        items.map(function (v) {
          return '<button type="button" class="lx__chip' + (sel === v ? " is-on" : "") +
            '" data-v="' + v + '">' + labeller(v) + "</button>";
        }).join("") + "</div>";
    }

    function draw() {
      var en = document.documentElement.lang === "en";
      var picked = fB || fM;                       // 하나라도 골랐는가

      var ctrl =
        '<div class="lx__ctrl" style="margin-bottom: var(--space-sm)">' +
          '<div class="lx__row"><span class="lx__ctrl-label">' + (en ? "Coverage" : "건폐율") + "</span>" +
            chips("adB", L.bcrs, fB, function (v) { return v; }) + "</div>" +
          '<div class="lx__row"><span class="lx__ctrl-label">' + (en ? "Mass type" : "주동 유형") + "</span>" +
            chips("adM", L.masses, fM, lxName) + "</div>" +
        "</div>";

      if (!picked) {
        wrap.innerHTML = ctrl +
          '<p class="lx__empty">' +
            (en ? "Pick a coverage ratio or a mass type to see the layouts."
                : "건폐율이나 주동 유형을 고르면 해당 배치안이 나타납니다.") +
          "</p>";
        return;
      }

      var body = [];
      L.bcrs.forEach(function (b) {
        if (fB && fB !== "all" && b !== fB) return;
        L.masses.forEach(function (m) {
          if (fM && fM !== "all" && m !== fM) return;
          var d = L.cells[b][m];
          if (!d) return;
          body.push("<tr>" + COLS.map(function (c) {
            return "<td" + (c.num ? ' class="num"' : "") +
              ' data-label="' + (en ? c.en : c.ko) + '">' + c.get(b, m, d) + "</td>";
          }).join("") + "</tr>");
        });
      });

      wrap.innerHTML = ctrl +
        '<p class="readout" style="margin-bottom: 12px">' + body.length +
          (en ? " of 96 layouts" : " / 96 개 배치안") + "</p>" +
        '<div class="tbl-scroll"><table class="data data--stack"><thead><tr>' +
          COLS.map(function (c) {
            return "<th" + (c.num ? ' class="num"' : "") + ">" + (en ? c.en : c.ko) + "</th>";
          }).join("") +
        "</tr></thead><tbody>" + body.join("") + "</tbody></table></div>";
    }

    wrap.addEventListener("click", function (e) {
      var c = e.target.closest && e.target.closest(".lx__chip");
      if (!c) return;
      var group = c.parentNode.id, v = c.getAttribute("data-v");
      // 켜져 있는 칩을 다시 누르면 해제 (아무것도 안 고른 처음 상태로)
      if (group === "adB") fB = (fB === v) ? "" : v;
      else if (group === "adM") fM = (fM === v) ? "" : v;
      else return;
      draw();
    });
    draw();
    return;
  }

  /* ---------- 8장 종합 점수 표 (js/scores.js 에서 자동 렌더) ---------- */
  function initScores(root) {
    root = root || document;
    if (!window.SCORES) return;
    var S = window.SCORES, en = document.documentElement.lang === "en";

    var b = root.querySelector("#scBcr");
    if (b && !b.__s) {
      b.__s = 1;
      b.innerHTML =
        '<table class="data data--stack"><thead><tr>' +
          "<th>" + (en ? "Coverage" : "건폐율") + "</th>" +
          '<th class="num">' + (en ? "Frontage /16" : "전면점유 /16") + "</th>" +
          '<th class="num">' + (en ? "Spacing /16" : "동간 충족 /16") + "</th>" +
          '<th class="num">' + (en ? "Solid angle" : "입체각 점수") + "</th>" +
          '<th class="num">' + (en ? "View angle" : "조망앙각 점수") + "</th>" +
          '<th class="num">' + (en ? "Pass distance" : "위압 해소 거리") + "</th>" +
        "</tr></thead><tbody>" +
        S.byBcr.map(function (r) {
          return "<tr>" +
            '<td data-label="' + (en ? "Coverage" : "건폐율") + '">' + r.bcr + "</td>" +
            '<td class="num" data-label="' + (en ? "Frontage /16" : "전면점유 /16") + '">' + r.front + "</td>" +
            '<td class="num" data-label="' + (en ? "Spacing /16" : "동간 충족 /16") + '">' + r.gap + "</td>" +
            '<td class="num" data-label="' + (en ? "Solid angle" : "입체각 점수") + '">' + r.solid + "</td>" +
            '<td class="num" data-label="' + (en ? "View angle" : "조망앙각 점수") + '">' + r.ang + "</td>" +
            '<td class="num" data-label="' + (en ? "Pass distance" : "위압 해소 거리") + '">' + r.pass + " m</td>" +
          "</tr>";
        }).join("") + "</tbody></table>";
    }

    var m = root.querySelector("#scMass");
    if (m && !m.__s) {
      m.__s = 1;
      m.innerHTML =
        '<table class="data data--stack"><thead><tr>' +
          '<th class="num">' + (en ? "Rank" : "순위") + "</th>" +
          "<th>" + (en ? "Type" : "유형") + "</th>" +
          '<th class="num">' + (en ? "Frontage /6" : "전면 /6") + "</th>" +
          '<th class="num">' + (en ? "Spacing /6" : "동간 /6") + "</th>" +
          '<th class="num">' + (en ? "Solid" : "입체각") + "</th>" +
          '<th class="num">' + (en ? "View" : "조망앙각") + "</th>" +
          '<th class="num">' + (en ? "Score" : "시각위압 점수") + "</th>" +
        "</tr></thead><tbody>" +
        S.byMass.map(function (r) {
          return "<tr>" +
            '<td class="num" data-label="' + (en ? "Rank" : "순위") + '">' + r.rank + "</td>" +
            '<td data-label="' + (en ? "Type" : "유형") + '">' + r.type + "</td>" +
            '<td class="num" data-label="' + (en ? "Frontage /6" : "전면 /6") + '">' + r.front + "/6</td>" +
            '<td class="num" data-label="' + (en ? "Spacing /6" : "동간 /6") + '">' + r.gap + "/6</td>" +
            '<td class="num" data-label="' + (en ? "Solid" : "입체각") + '">' + r.solid + "</td>" +
            '<td class="num" data-label="' + (en ? "View" : "조망앙각") + '">' + r.ang + "</td>" +
            '<td class="num" data-label="' + (en ? "Score" : "시각위압 점수") + '">' + r.score + "</td>" +
          "</tr>";
        }).join("") + "</tbody></table>";
    }
  }

  /* ---------- 4장 21단지 표 (js/complexes.js 에서 자동 렌더) ----------
     헤더를 누르면 그 열로 정렬. 결측(최고층 3곳)은 빈칸으로 두고 정렬 시 항상 뒤로 보낸다. */
  function initComplexes(root) {
    root = root || document;
    var wrap = root.querySelector("#cxTable");
    if (!wrap || wrap.__c || !window.COMPLEXES) return;
    wrap.__c = 1;
    var data = window.COMPLEXES.slice();
    var sortKey = "rank", asc = true;

    // 열이 많을수록 표가 본문 칸(820px)을 넘어 잘린다.
    // 시각 지표(건물·하늘·녹시율 %)는 5장 세그멘테이션의 소재이므로 4장에서는 물리 지표만 둔다.
    var COLS = [
      { k: "rank",   ko: "순위",     en: "Rank",    num: true },
      { k: "name",   ko: "단지",     en: "Complex", num: false },
      { k: "far",    ko: "용적률 %", en: "FAR %",   num: true },
      { k: "floors", ko: "최고층",   en: "Floors",  num: true },
      { k: "bcr",    ko: "건폐율 %", en: "BCR %",   num: true },
      { k: "n",      ko: "동수",     en: "Bldgs",   num: true },
      { k: "hh",     ko: "세대수",   en: "Units",   num: true }
    ];

    // 열마다 최소·최대를 구해 셀 뒤에 상대 크기 막대를 깐다 (04/rank-bars 도판을 표가 흡수했다).
    // 순위(rank)는 정렬 기준일 뿐이라 막대를 그리지 않는다 — 그리면 그냥 계단 모양이 된다.
    var SPAN = {};
    COLS.forEach(function (c) {
      if (!c.num || c.k === "rank") return;
      var vs = data.map(function (d) { return d[c.k]; }).filter(function (v) { return v != null; });
      SPAN[c.k] = { lo: Math.min.apply(null, vs), hi: Math.max.apply(null, vs) };
    });
    function barPct(k, v) {
      var s = SPAN[k];
      if (!s || v == null || s.hi === s.lo) return 0;
      return 8 + 92 * (v - s.lo) / (s.hi - s.lo);   // 최소값도 흔적은 남게 8% 부터
    }

    function draw() {
      var en = document.documentElement.lang === "en";
      data.sort(function (a, b) {
        var x = a[sortKey], y = b[sortKey];
        if (x == null) return 1;              // 결측은 항상 뒤로
        if (y == null) return -1;
        if (typeof x === "string") return asc ? x.localeCompare(y) : y.localeCompare(x);
        return asc ? x - y : y - x;
      });
      var head = COLS.map(function (c) {
        return '<th class="' + (c.num ? "num " : "") + 'sortable' + (c.k === sortKey ? " is-sorted" : "") +
          '" data-k="' + c.k + '">' + (en ? c.en : c.ko) + "</th>";
      }).join("");
      var body = data.map(function (d) {
        return "<tr>" + COLS.map(function (c) {
          var v = d[c.k];
          var txt = v == null ? "—" : (c.k === "hh" ? v.toLocaleString() : v);
          var cls = c.num ? "num" : "";
          var bar = "";
          if (SPAN[c.k] && v != null) {
            cls += " bar";
            bar = '<i class="bar__f" style="width:' + barPct(c.k, v).toFixed(1) + '%"></i>';
          }
          return "<td" + (cls ? ' class="' + cls + '"' : "") + ' data-label="' + (en ? c.en : c.ko) + '">' +
            bar + "<span>" + txt + "</span></td>";
        }).join("") + "</tr>";
      }).join("");
      // data--stack : 좁은 화면에서 행을 카드로 접는다 (가로 스크롤·페이지 확장 방지)
      wrap.innerHTML = '<table class="data data--stack"><thead><tr>' + head + "</tr></thead><tbody>" + body + "</tbody></table>";
    }
    wrap.addEventListener("click", function (e) {
      var th = e.target.closest && e.target.closest("th.sortable");
      if (!th) return;
      var k = th.getAttribute("data-k");
      if (k === sortKey) asc = !asc; else { sortKey = k; asc = true; }
      draw();
    });
    draw();
  }

  /* ---------- 7-1 선례와의 거리 ----------
     출처: 2026_booklet.pdf p.63 '분석 사례와 대상지 현황 비교'.
     해외 선례 6곳 + 국내 신작 1곳 + 대상지 2곳. 값은 부클릿 표기 그대로(대략치 포함).
     범위 값이 많아 막대는 그리지 않는다. 대신 대상지 행에 표식만 단다. ---------- */
  var CASES = [
    { ko: "Hillside Terrace Complex", en: "Hillside Terrace Complex", bcr: "약 50~60", bcrEn: "approx. 50–60", far: "약 150~200", farEn: "approx. 150–200", fl: "2~6층", flEn: "2–6",
      note: "도쿄의 10m 높이 제한을 지키며 30년에 걸쳐 점진적으로 지었다", noteEn: "Built over thirty years, holding Tokyo’s 10 m height limit" },
    { ko: "CityLife Apartments", en: "CityLife Apartments", bcr: "약 30", bcrEn: "approx. 30", far: "약 250~300", farEn: "approx. 250–300", fl: "5~13층", flEn: "5–13",
      note: "건물을 단지 외곽으로 돌려 내부 녹지를 최대로 확보했다", noteEn: "Buildings pushed to the edge to maximise the green interior" },
    { ko: "Little C", en: "Little C", bcr: "약 60~70", bcrEn: "approx. 60–70", far: "약 400", farEn: "approx. 400", fl: "5~15층", flEn: "5–15",
      note: "거대한 매스 대신 15개의 작은 건물로 쪼개 유럽형 고밀 가로를 만들었다", noteEn: "Split into fifteen small buildings instead of one mass, making a dense European street" },
    { ko: "Hunziker Areal", en: "Hunziker Areal", bcr: "약 40~50", bcrEn: "approx. 40–50", far: "약 200~250", farEn: "approx. 200–250", fl: "4~8층", flEn: "4–8",
      note: "자동차 없는 마을을 지향하며 건물 사이를 광장과 공용 공간으로 채웠다", noteEn: "A car-free village; the gaps between buildings are squares and shared space" },
    { ko: "Battery Park City", en: "Battery Park City", bcr: "약 40", bcrEn: "approx. 40", far: "약 600~1000", farEn: "approx. 600–1000", fl: "6~45층", flEn: "6–45",
      note: "높은 용적률을 허용하는 대신 대지의 30% 이상을 공공 공원으로 내주었다", noteEn: "High density allowed, but over 30% of the site given back as public park" },
    { ko: "Nordhavn", en: "Nordhavn", bcr: "약 50", bcrEn: "approx. 50", far: "약 180~250", farEn: "approx. 180–250", fl: "3~17층", flEn: "3–17",
      note: "수변 조망을 고려해 건물 높이를 변주하고 저층부를 가로에 내주었다", noteEn: "Heights varied for the waterfront view; the base given to the street" },
    { ko: "e편한세상고덕어반브릿지", en: "Godeok Urban Bridge (Seoul)", bcr: "30", bcrEn: "30", far: "201", farEn: "201", fl: "5~27층", flEn: "5–27",
      note: "단지를 관통하는 공공보행통로를 두고 인동간격을 지켰다", noteEn: "A public passage cut through the estate, spacing kept" },
    { ko: "잠실르엘아파트", en: "Jamsil Le-el", bcr: "17", bcrEn: "17", far: "299", farEn: "299", fl: "15~35층", flEn: "15–35",
      note: "대상지", noteEn: "The site", site: true },
    { ko: "잠실래미안아이파크", en: "Jamsil Raemian I-Park", bcr: "17", bcrEn: "17", far: "276", farEn: "276", fl: "9~35층", flEn: "9–35",
      note: "대상지와 같은 건폐율, 답사 21곳 가운데 하나", noteEn: "Same coverage as the site; one of the twenty-one surveyed" }
  ];

  function initPrecedent(root) {
    root = root || document;
    var wrap = root.querySelector("#precTable");
    if (!wrap || wrap.__p) return;
    wrap.__p = 1;
    var en = document.documentElement.lang === "en";
    var L = en
      ? { a: "Project", b: "BCR %", c: "FAR %", d: "Floors", e: "What it does" }
      : { a: "프로젝트", b: "건폐율 %", c: "용적률 %", d: "층수", e: "무엇을 했는가" };

    var head = '<th data-k="a">' + L.a + '</th><th class="num">' + L.b + '</th><th class="num">' + L.c +
      '</th><th class="num">' + L.d + '</th><th>' + L.e + "</th>";
    var body = CASES.map(function (c) {
      return "<tr" + (c.site ? ' class="is-site"' : "") + ">" +
        '<td class="nb" data-label="' + L.a + '">' + (en ? c.en : c.ko) + "</td>" +
        '<td class="num nb" data-label="' + L.b + '">' + (en ? c.bcrEn : c.bcr) + "</td>" +
        '<td class="num nb" data-label="' + L.c + '">' + (en ? c.farEn : c.far) + "</td>" +
        '<td class="num nb" data-label="' + L.d + '">' + (en ? c.flEn : c.fl) + "</td>" +
        '<td data-label="' + L.e + '">' + (en ? c.noteEn : c.note) + "</td></tr>";
    }).join("");
    wrap.innerHTML = '<table class="data data--stack"><thead><tr>' + head + "</tr></thead><tbody>" + body + "</tbody></table>";
  }


  /* ---------- 5-2 세그멘테이션 대조쌍 (js/seg.js) ----------
     21곳을 한 장의 도판에 늘어놓으면 아무것도 안 보인다. 단지를 하나 고르면
     그 단지의 대표 사진 ↔ 세그멘테이션 오버레이가 나란히 뜬다.
     기본값은 위압감 1위(seg.js 가 순위순으로 정렬돼 있다). ---------- */
  function initSeg(root) {
    root = root || document;
    var wrap = root.querySelector("#segPair");
    if (!wrap || wrap.__s || !window.SEGPAIRS) return;
    wrap.__s = 1;
    var S = window.SEGPAIRS, cur = 0;

    // 칩·활성표시는 10-1 탐색기와 같은 .lx__chip 을 그대로 쓴다 (스타일 중복 금지)
    wrap.innerHTML =
      '<div class="lx__chips segp__chips">' +
        S.map(function (p, i) {
          return '<button class="lx__chip" type="button" data-i="' + i + '">' + p.name + "</button>";
        }).join("") +
      '</div>' +
      '<div class="segp__view">' +
        '<figure class="figure"><div class="figure__ph"><img data-fig class="segp__img" alt=""></div>' +
          '<figcaption class="figure__cap"><span></span></figcaption></figure>' +
        '<figure class="figure"><div class="figure__ph"><img data-fig class="segp__img" alt=""></div>' +
          '<figcaption class="figure__cap"><span></span></figcaption></figure>' +
      '</div>';

    var imgs = wrap.querySelectorAll(".segp__img");
    var caps = wrap.querySelectorAll(".figure__cap span");
    var chips = wrap.querySelectorAll(".lx__chip");

    function draw() {
      var en = document.documentElement.lang === "en";
      var p = S[cur];
      imgs[0].src = "assets/img/05/seg/" + p.id + ".webp";
      imgs[1].src = "assets/img/05/seg/" + p.id + "__seg.webp";
      imgs[0].alt = p.name + (en ? " — photograph" : " — 대표 사진");
      imgs[1].alt = p.name + (en ? " — segmentation" : " — 세그멘테이션");
      caps[0].textContent = (en ? "Photograph · " : "대표 사진 · ") + p.name;
      caps[1].textContent = (en ? "Segmentation · rank " : "세그멘테이션 · 위압감 순위 ") + p.rank;
      chips.forEach(function (b, i) { b.classList.toggle("is-on", i === cur); });
    }
    wrap.addEventListener("click", function (e) {
      var b = e.target.closest && e.target.closest(".lx__chip");
      if (!b) return;
      cur = +b.getAttribute("data-i");
      draw();
    });
    draw();
  }

  /* ---------- 6장 상관·회귀 표 (js/regression.js 에서 자동 렌더) ----------
     ※ 순위가 종속변인이라 r 이 음수 = 위압감이 커진다. 부호를 그대로 읽으면 정반대가 되므로
        표에 '방향' 열을 따로 두어 오독을 막는다. ---------- */
  function initRegression(root) {
    root = root || document;
    var wrap = root.querySelector("#regCorr");
    if (!wrap || wrap.__r || !window.REGRESSION) return;
    wrap.__r = 1;
    var R = window.REGRESSION, en = document.documentElement.lang === "en";

    var L1 = en ? "Metric" : "지표", L3 = "r", L4 = "p", L5 = en ? "Direction" : "위압감 방향";
    var rows = R.corr.map(function (c) {
      var dir = c.sig
        ? (c.r < 0 ? (en ? "raises" : "위압감 ↑") : (en ? "lowers" : "위압감 ↓"))
        : "—";
      return "<tr>" +
        '<td data-label="' + L1 + '">' + (en ? c.en : c.ko) + "</td>" +
        '<td class="num" data-label="n">' + c.n + "</td>" +
        '<td class="num" data-label="' + L3 + '">' + (c.r > 0 ? "+" : "") + c.r.toFixed(3) + "</td>" +
        '<td class="num" data-label="' + L4 + '">' + c.p.toFixed(3) + "</td>" +
        '<td data-label="' + L5 + '">' + dir + "</td>" +
        "</tr>";
    }).join("");

    wrap.innerHTML =
      '<table class="data data--stack"><thead><tr>' +
        "<th>" + (en ? "Metric" : "지표") + "</th>" +
        '<th class="num">n</th>' +
        '<th class="num">r</th>' +
        '<th class="num">p</th>' +
        "<th>" + (en ? "Direction" : "위압감 방향") + "</th>" +
      "</tr></thead><tbody>" + rows + "</tbody></table>";

    var ols = root.querySelector("#regOls");
    if (ols) {
      ols.innerHTML =
        '<div class="num"><b>' + Math.round(R.ols.r2 * 100) + "%</b><span>" +
          (en ? "variance explained (R²)" : "설명된 변동 (R²)") + "</span></div>" +
        '<div class="num"><b>' + R.ols.adjR2.toFixed(2) + "</b><span>" +
          (en ? "adjusted R²" : "보정 R²") + "</span></div>" +
        '<div class="num"><b>' + R.ols.pf.toFixed(3) + "</b><span>" +
          (en ? "model p-value" : "모형 p 값") + "</span></div>" +
        '<div class="num"><b>' + R.ols.n + "</b><span>" +
          (en ? "cases used" : "유효 표본") + "</span></div>";
    }
  }

  /* ---------- 도판 확대 (라이트박스) ----------
     실제 이미지가 로드된 도판(.is-loaded)만 클릭 대상. placeholder 프레임은 반응하지 않는다.
     캡션은 figcaption 을 그대로 가져오고, 없으면 alt 를 쓴다. ---------- */
  (function initLightbox() {
    var box = null, imgEl = null, capEl = null;

    function build() {
      box = document.createElement("div");
      box.className = "lbx";
      box.setAttribute("role", "dialog");
      box.setAttribute("aria-modal", "true");
      box.innerHTML =
        '<img class="lbx__img" alt="">' +
        '<p class="lbx__cap"></p>' +
        '<button class="lbx__close" type="button" aria-label="닫기">✕</button>';
      document.body.appendChild(box);
      imgEl = box.querySelector(".lbx__img");
      capEl = box.querySelector(".lbx__cap");
      box.addEventListener("click", close);           // 배경·이미지 어디를 눌러도 닫힘
    }
    function open(img) {
      if (!box) build();
      imgEl.src = img.currentSrc || img.src;
      imgEl.alt = img.alt || "";
      var fig = img.closest("figure");
      var cap = fig && fig.querySelector(".figure__cap");
      capEl.textContent = cap ? cap.textContent.trim() : (img.alt || "");
      capEl.style.display = capEl.textContent ? "" : "none";
      box.classList.add("is-open");
      document.documentElement.style.overflow = "hidden";
    }
    function close() {
      if (!box) return;
      box.classList.remove("is-open");
      document.documentElement.style.overflow = "";
    }
    document.addEventListener("click", function (e) {
      var img = e.target.closest && e.target.closest("img.is-loaded");
      if (!img) return;
      if (!img.closest(".figure__ph, .card__img, .lx__iso")) return;
      e.preventDefault();
      open(img);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
  })();

  /* ---------- 최초 렌더 (위 데이터·헬퍼가 모두 준비된 뒤) ---------- */
  applyLang(lang);

  /* ---------- 모바일 크롬(헤더 + 하단 버튼) 자동 숨김 ----------
     · 평소엔 숨김 → 읽기 화면을 방해하지 않음
     · 화면을 터치하면 잠깐(HOLD_MS) 등장했다가 다시 사라짐
     · 페이지 끝(END_PAD 이내)에 도달하면 계속 표시 — '다음 장' 버튼을 바로 누를 수 있게
     · 스크롤이 없는 화면(표지)은 항상 '끝'으로 판정되어 헤더가 늘 보인다 ---------- */
  (function initMobileChrome() {
    var mq = window.matchMedia("(max-width: 760px)");
    var body = document.body, timer = 0;
    var HOLD_MS = 2600, END_PAD = 64;

    function atEnd() {
      var doc = document.documentElement;
      return window.innerHeight + window.scrollY >= doc.scrollHeight - END_PAD;
    }
    function hide() { body.classList.add("is-chrome-off"); }
    function show() { body.classList.remove("is-chrome-off"); }
    function clear() { clearTimeout(timer); timer = 0; }

    function update(touched) {
      if (!mq.matches) { clear(); show(); return; }     // 데스크탑 — 항상 표시
      if (atEnd()) { clear(); show(); return; }         // 페이지 끝 — 계속 표시
      if (touched) {                                    // 터치 — 잠깐 표시
        show(); clear();
        timer = setTimeout(function () { timer = 0; if (!atEnd()) hide(); }, HOLD_MS);
      } else if (!timer) {
        hide();                                         // 대기 중인 타이머가 없으면 숨김
      }
    }

    window.addEventListener("scroll", function () { update(false); }, { passive: true });
    window.addEventListener("resize", function () { update(false); });
    document.addEventListener("pointerdown", function () { update(true); }, { passive: true });
    if (mq.addEventListener) mq.addEventListener("change", function () { clear(); update(true); });
    update(true);                                       // 진입 직후엔 잠깐 보여준 뒤 사라짐
  })();
})();
