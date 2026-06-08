/* =========================================================
   세부 페이지 콘텐츠 (섹션당 1페이지)
   - 키 = main.js MENU 의 섹션 id (about / problem / theory ...)
   - 각 섹션: { titleKo, titleEn, subKo, subEn, body }
   - body 안의 <section id="..."> 는 메뉴 소제목 앵커와 일치
   - 텍스트는 data-ko / data-en 로 한·영 동시 작성 (applyLang 이 스왑)
   ========================================================= */
window.CONTENT = {

  /* ---------------- 02. 문제의식 (프로토타입) ---------------- */
  problem: {
    titleKo: "기존 아파트는 ‘안’을 위해 ‘밖’을 포기했다",
    titleEn: "Apartments traded the ‘outside’ away for the ‘inside’",
    subKo: "한국 아파트는 세대 안의 일조와 프라이버시를 최우선으로 삼은 대가로, 단지 밖 가로를 걷는 보행자의 스케일과 심리를 희생해 왔다.",
    subEn: "By prioritizing in-unit sunlight and privacy above all, Korean apartments have sacrificed the scale and psychology of the pedestrian on the street outside.",
    body: `
      <section class="section" id="limits">
        <div class="section__head reveal">
          <span class="section__index">01.1</span>
          <h2 class="section__title" data-ko="기존 아파트의 한계" data-en="Limits of Today’s Apartments">기존 아파트의 한계</h2>
        </div>

        <div class="cols cols--wide-fig">
          <div class="reveal">
            <p class="measure muted" data-ko="한국의 재개발·재건축 아파트 단지는 설계의 거의 모든 판단 기준을 단지 내부와 세대 내부에 둔다. 남향 채광을 위한 일률적인 판상형 배치, 프라이버시·법규를 위한 인동간격 확보가 대표적이다." data-en="Korea’s redevelopment apartment complexes anchor almost every design decision inside the complex and inside the unit — uniform slab layouts chasing south-facing light, and inter-building spacing secured for privacy and code.">한국의 재개발·재건축 아파트 단지는 설계의 거의 모든 판단 기준을 단지 내부와 세대 내부에 둔다. 남향 채광을 위한 일률적인 판상형 배치, 프라이버시·법규를 위한 인동간격 확보가 대표적이다.</p>
            <p class="measure muted" data-ko="그 결과 세대에서 내다보는 환경은 최적화되지만, 단지 밖 가로를 걷는 보행자가 마주하는 환경은 오히려 악화된다." data-en="As a result, the view from inside the unit is optimized — while the environment facing the pedestrian on the street outside only deteriorates.">그 결과 세대에서 내다보는 환경은 최적화되지만, 단지 밖 가로를 걷는 보행자가 마주하는 환경은 오히려 악화된다.</p>
          </div>

          <figure class="figure reveal" data-d="1">
            <div class="figure__ph"><span data-ko="외부인(보행자) · 내부인(거주자) 관점 비교" data-en="Outsider (pedestrian) vs. insider (resident) viewpoint">외부인(보행자) · 내부인(거주자) 관점 비교</span></div>
            <figcaption class="figure__cap"><b>FIG 01</b><span data-ko="같은 단지를 보행자와 거주자가 전혀 다르게 경험한다" data-en="A pedestrian and a resident experience the same complex in entirely different ways">같은 단지를 보행자와 거주자가 전혀 다르게 경험한다</span></figcaption>
          </figure>
        </div>

        <div class="tbl-wrap reveal" style="margin-top: var(--space-lg)">
          <table class="data">
            <thead>
              <tr>
                <th data-ko="보행자 관점의 문제" data-en="Problem from the pedestrian’s view">보행자 관점의 문제</th>
                <th data-ko="설명" data-en="Description">설명</th>
              </tr>
            </thead>
            <tbody>
              <tr><td data-ko="시각적 위압감" data-en="Visual oppression">시각적 위압감</td><td data-ko="가로변에서 올려다본 주동의 앙각이 커져 답답함" data-en="Steep look-up angles from the street feel overbearing">가로변에서 올려다본 주동의 앙각이 커져 답답함</td></tr>
              <tr><td data-ko="천공 차폐" data-en="Sky obstruction">천공 차폐</td><td data-ko="하늘이 가려져 폐쇄적인 가로 경험" data-en="A blocked sky yields an enclosed street experience">하늘이 가려져 폐쇄적인 가로 경험</td></tr>
              <tr><td data-ko="거대·황량한 오픈스페이스" data-en="Vast, barren open space">거대·황량한 오픈스페이스</td><td data-ko="초고층·저밀도일수록 경계 모호한 자투리 공간 발생" data-en="Taller, sparser towers leave ambiguous leftover space">초고층·저밀도일수록 경계 모호한 자투리 공간 발생</td></tr>
              <tr><td data-ko="단조로운 가로 입면" data-en="Monotonous street frontage">단조로운 가로 입면</td><td data-ko="일률적 배치로 가로변 활력 저하" data-en="Uniform layouts drain street-level vitality">일률적 배치로 가로변 활력 저하</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="section" id="question">
        <div class="section__head reveal">
          <span class="section__index">01.2</span>
          <h2 class="section__title" data-ko="연구 질문 · 가설" data-en="Question &amp; Hypothesis">연구 질문 · 가설</h2>
        </div>

        <div class="cols">
          <p class="pull reveal" data-ko="“용적률(밀도)을 그대로 둔 채, 배치 방식만 바꾸면 가로를 걷는 경험을 개선할 수 있는가?”" data-en="“Holding density fixed, can changing only the layout improve the experience of walking the street?”">“용적률(밀도)을 그대로 둔 채, 배치 방식만 바꾸면 가로를 걷는 경험을 개선할 수 있는가?”</p>
          <div class="reveal" data-d="1">
            <span class="label" data-ko="가설" data-en="Hypothesis">가설</span>
            <p class="lead" style="margin-top: var(--space-sm)" data-ko="향(남향)과 인동간격 법규를 일부 양보하면(시나리오 B·C), 동수가 늘고 매스가 낮아지면서 가로의 위압감이 줄고 보행 친화적 가로공간이 완성될 것이다." data-en="If orientation and spacing rules are partly relaxed (Scenarios B·C), the number of buildings rises and the masses drop — reducing street oppression and completing a walkable street.">향(남향)과 인동간격 법규를 일부 양보하면(시나리오 B·C), 동수가 늘고 매스가 낮아지면서 가로의 위압감이 줄고 보행 친화적 가로공간이 완성될 것이다.</p>
          </div>
        </div>
      </section>

      <section class="section" id="tracks">
        <div class="section__head reveal">
          <span class="section__index">01.3</span>
          <h2 class="section__title" data-ko="연구의 두 축" data-en="Two Tracks of the Study">연구의 두 축</h2>
          <p class="section__sub" data-ko="현재 아파트의 가로 문제를 데이터로 진단하고, 그 해법을 자동배치로 제안한다" data-en="Diagnose today’s street problem with data, then propose a remedy through auto-layout">현재 아파트의 가로 문제를 데이터로 진단하고, 그 해법을 자동배치로 제안한다</p>
        </div>

        <div class="cols">
          <div class="reveal">
            <span class="track" data-ko="① 실증 분석 — Empirical" data-en="① Empirical">① 실증 분석 — Empirical</span>
            <p class="measure muted" style="margin-top: var(--space-md)" data-ko="실제 서울 아파트 21단지의 가로경관을 AI(Florence-2 + SAM2)로 분석해, 문제를 데이터로 진단하고 평가지표를 검증한다." data-en="AI (Florence-2 + SAM2) analyzes the streetscapes of 21 real Seoul complexes — diagnosing the problem with data and validating the evaluation metrics.">실제 서울 아파트 21단지의 가로경관을 AI(Florence-2 + SAM2)로 분석해, 문제를 데이터로 진단하고 평가지표를 검증한다.</p>
            <p class="readout"><b data-ko="→ 03b 사례분석 · AI" data-en="→ 03b Cases · AI">→ 03b 사례분석 · AI</b></p>
          </div>
          <div class="reveal" data-d="1">
            <span class="track" data-ko="② 생성·제안 — Generative" data-en="② Generative">② 생성·제안 — Generative</span>
            <p class="measure muted" style="margin-top: var(--space-md)" data-ko="파라메트릭 자동배치로 용적률 250% 대안을 생성해, 가로 성능이 실제로 개선됨을 정량적으로 입증한다." data-en="Parametric auto-layout generates FAR-250% alternatives, quantitatively demonstrating that street performance actually improves.">파라메트릭 자동배치로 용적률 250% 대안을 생성해, 가로 성능이 실제로 개선됨을 정량적으로 입증한다.</p>
            <p class="readout"><b data-ko="→ 05–11 생성·제안" data-en="→ 05–11 Generative">→ 05–11 생성·제안</b></p>
          </div>
        </div>
      </section>
    `
  }

};
