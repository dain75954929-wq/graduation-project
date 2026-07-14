/* =========================================================
   세부 페이지 콘텐츠 (절당 1페이지)
   - 키 = main.js MENU 의 절 id (7-1 / 7-2 / …)
   - 각 절: { titleKo, titleEn, subKo, subEn, body }
   - body 는 편집 클래스(.section/.figure/table.data/.cols/.scn/.kv/.bcr) 로 조립
   - 텍스트는 data-ko / data-en 로 한·영 동시 작성 (renderDoc 이 lg 로 스왑)
   - 도판: .figure__ph 안에 <img data-fig src="assets/img/…"> 를 두면
     파일이 없을 땐 캡션 달린 placeholder 가, 파일을 넣으면 이미지가 뜬다.
   ========================================================= */
window.CONTENT = {

  /* ==================== 7-1 실험 설계 ==================== */
  "7-1": {
    titleKo: "실험 설계",
    titleEn: "Experiment Design",
    subKo: "같은 대지, 같은 용적률에서 형태만 바꾼다. 잠실르엘 위에 세운 96개 배치안의 통제된 실험",
    subEn: "One site, one floor area ratio, only the form changes. A controlled experiment of 96 layouts on the Le-el site",
    body: `
      <p class="lead reveal" data-ko="같은 대지, 같은 용적률에서 매스와 배치만 달라질 때 보행자가 받는 시각적 영향은 어떻게 달라지는가. 이 물음에 답하기 위해 잠실르엘아파트의 대지 위에 96개의 배치안을 자동으로 생성했다." data-en="On one site, at one floor area ratio, how does what a pedestrian sees change as only the massing and layout change? To answer this, 96 layouts were generated on the site of the Jamsil Le-el apartments.">같은 대지, 같은 용적률에서 매스와 배치만 달라질 때 보행자가 받는 시각적 영향은 어떻게 달라지는가. 이 물음에 답하기 위해 잠실르엘아파트의 대지 위에 96개의 배치안을 자동으로 생성했다.</p>

      <section class="section" id="variables">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="변인 설계" data-en="Variables">변인 설계</h2>
        </div>
        <div class="cols cols--wide-fig">
          <div class="reveal">
            <p class="measure muted" data-ko="실험은 하나의 조작 변인만 남기고 나머지를 통제하는 구조다. 대지와 용적률 250퍼센트, 16종의 주동 유닛, 층고를 고정하고, 건폐율만 5퍼센트에서 50퍼센트까지 여섯 단계로 움직인다." data-en="The experiment isolates a single manipulated variable. Site, FAR 250%, sixteen unit types, and floor height are held fixed; only the building coverage ratio moves through six steps from 5% to 50%.">실험은 하나의 조작 변인만 남기고 나머지를 통제하는 구조다. 대지와 용적률 250퍼센트, 16종의 주동 유닛, 층고를 고정하고, 건폐율만 5퍼센트에서 50퍼센트까지 여섯 단계로 움직인다.</p>
            <p class="measure muted" data-ko="그 결과로 나타나는 형태, 곧 층수와 동수와 배치가 외부 가로 성능이라는 종속 변인을 만든다." data-en="The resulting form of floors, building count, and arrangement becomes the dependent variable: street performance seen from outside.">그 결과로 나타나는 형태, 곧 층수와 동수와 배치가 외부 가로 성능이라는 종속 변인을 만든다.</p>
          </div>
          <dl class="kv reveal" data-d="1">
            <div><dt data-ko="대지면적" data-en="Site area">대지면적</dt><dd>72,695 ㎡</dd></div>
            <div><dt data-ko="용적률" data-en="FAR">용적률</dt><dd data-ko="250 % (고정)" data-en="250 % (fixed)">250 % (고정)</dd></div>
            <div><dt data-ko="주동 유닛" data-en="Units">주동 유닛</dt><dd data-ko="16종 (고정)" data-en="16 types (fixed)">16종 (고정)</dd></div>
            <div><dt data-ko="건폐율" data-en="BCR">건폐율</dt><dd data-ko="5·10·20·30·40·50 % (조작)" data-en="5·10·20·30·40·50 % (manipulated)">5·10·20·30·40·50 % (조작)</dd></div>
            <div><dt data-ko="종속 변인" data-en="Dependent">종속 변인</dt><dd data-ko="가로 성능 4개 지표" data-en="4 street-performance metrics">가로 성능 4개 지표</dd></div>
          </dl>
        </div>
      </section>

      <section class="section" id="site">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="대상지 잠실르엘" data-en="The site, Jamsil Le-el">대상지 잠실르엘</h2>
        </div>
        <div class="cols cols--text-fig">
          <p class="measure muted reveal" data-ko="송파구 올림픽로에 면한 약 72,695제곱미터의 대지로, 석촌호수와 올림픽공원, 지하철역을 이웃한 일반주거지역이다. 일반주거지역 단지 가운데 위압감이 가장 높게 나타나, 저건폐·초고층이 만들어 내는 가로 문제를 가장 선명하게 담고 있는 실험 조건이다." data-en="A roughly 72,695 ㎡ site on Olympic-ro in Songpa-gu, a residential zone neighboring Seokchon Lake, Olympic Park, and a subway station. It scored highest for oppressiveness among residential-zone complexes, the clearest case of the street problems that sparse-coverage high-rise produces.">송파구 올림픽로에 면한 약 72,695제곱미터의 대지로, 석촌호수와 올림픽공원, 지하철역을 이웃한 일반주거지역이다. 일반주거지역 단지 가운데 위압감이 가장 높게 나타나, 저건폐·초고층이 만들어 내는 가로 문제를 가장 선명하게 담고 있는 실험 조건이다.</p>
          <figure class="figure figure--wide reveal" data-d="1">
            <div class="figure__ph">
              <img data-fig src="assets/img/07/site-map.svg" alt="잠실르엘과 주변 용도지역" loading="lazy">
              <span data-ko="도판 · 대상지 입지" data-en="Figure · the site">도판 · 대상지 입지</span>
            </div>
            <figcaption class="figure__cap"><span data-ko="붉은색이 잠실르엘. 북쪽은 일반주거지역, 서남쪽은 일반상업지역, 동쪽에 올림픽공원, 남쪽에 석촌호수가 있다" data-en="Jamsil Le-el in red. General residential to the north, general commercial to the southwest, Olympic Park to the east, Seokchon Lake to the south">붉은색이 잠실르엘. 북쪽은 일반주거지역, 서남쪽은 일반상업지역, 동쪽에 올림픽공원, 남쪽에 석촌호수가 있다</span></figcaption>
          </figure>
        </div>
      </section>

      <section class="section" id="precedent">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="선례와의 거리" data-en="Against Precedents">선례와의 거리</h2>
        </div>
        <p class="measure muted reveal" data-ko="대상지를 고르는 것과 그 대상지가 어떤 자리에 서 있는지 아는 것은 다른 일이다. 도쿄의 힐사이드 테라스, 로테르담의 리틀 C, 취리히의 훈치커 아레알, 뉴욕의 배터리 파크 시티, 코펜하겐의 노르드하운, 밀라노의 시티라이프. 그리고 국내에서 가장 최근에 다른 답을 시도한 e편한세상 고덕 어반브릿지. 이들을 잠실르엘 옆에 나란히 놓으면 대상지가 어디에 서 있는지가 보인다." data-en="Choosing a site and knowing where that site stands are two different things. Hillside Terrace in Tokyo, Little C in Rotterdam, Hunziker Areal in Zurich, Battery Park City in New York, Nordhavn in Copenhagen, CityLife in Milan. And the most recent domestic attempt at a different answer, Godeok Urban Bridge. Set beside Jamsil Le-el, they show where the site actually stands.">대상지를 고르는 것과 그 대상지가 어떤 자리에 서 있는지 아는 것은 다른 일이다. 도쿄의 힐사이드 테라스, 로테르담의 리틀 C, 취리히의 훈치커 아레알, 뉴욕의 배터리 파크 시티, 코펜하겐의 노르드하운, 밀라노의 시티라이프. 그리고 국내에서 가장 최근에 다른 답을 시도한 e편한세상 고덕 어반브릿지. 이들을 잠실르엘 옆에 나란히 놓으면 대상지가 어디에 서 있는지가 보인다.</p>

        <div class="tbl-wrap reveal" id="precTable" data-d="1"></div>
        <p class="readout reveal"><span data-ko="값은 대략치를 포함한다. 층수는 최저층에서 최고층까지의 범위다." data-en="Figures include approximations. Floors are given as a range from lowest to highest.">값은 대략치를 포함한다. 층수는 최저층에서 최고층까지의 범위다.</span></p>

        <p class="measure muted reveal" data-ko="표를 세로로 읽으면 한 줄이 유독 튄다. 건폐율이다. 선례들의 건폐율은 30퍼센트에서 70퍼센트 사이인데 잠실르엘은 17퍼센트다. 용적률은 오히려 비슷하거나 대상지가 더 높다. 같은 용적률을 절반도 안 되는 바닥에 얹었으니 남는 것은 높이뿐이다. 힐사이드 테라스가 6층, 훈치커 아레알이 8층, 시티라이프가 13층에서 멈추는 동안 잠실르엘은 35층까지 올라간다." data-en="Read the table down one column and a single row breaks rank: coverage. The precedents sit between 30% and 70%; Jamsil Le-el sits at 17%. Floor area ratio, meanwhile, is comparable or higher at the site. The same floor area ratio placed on less than half the footprint leaves only one direction to go. Hillside Terrace stops at six storeys, Hunziker Areal at eight, CityLife at thirteen. Jamsil Le-el climbs to thirty-five.">표를 세로로 읽으면 한 줄이 유독 튄다. 건폐율이다. 선례들의 건폐율은 30퍼센트에서 70퍼센트 사이인데 잠실르엘은 17퍼센트다. 용적률은 오히려 비슷하거나 대상지가 더 높다. 같은 용적률을 절반도 안 되는 바닥에 얹었으니 남는 것은 높이뿐이다. 힐사이드 테라스가 6층, 훈치커 아레알이 8층, 시티라이프가 13층에서 멈추는 동안 잠실르엘은 35층까지 올라간다.</p>

        <p class="measure muted reveal" data-ko="중요한 것은 이 선례들이 우리 법을 벗어나지 않는다는 점이다. 대부분 제3종 일반주거지역의 법정 한도인 건폐율 50퍼센트 이하, 용적률 300퍼센트 이하 안에 들어온다. 법이 막아서 못 짓는 것이 아니다. 그런데도 층이 낮고 건폐율이 높은 단지는 한국에서 지어지지 않는다. 남향과 맞통풍을 포기할 수 없다는 것이 가장 큰 이유로 지목된다. e편한세상 고덕 어반브릿지가 건폐율 30퍼센트에 인동간격을 지키며 공공보행통로를 낸 것은 그 벽을 넘어 보려는 국내의 드문 시도다." data-en="What matters is that none of these precedents breaks Korean law. Most fall inside the statutory limits for a Class 3 general residential zone: coverage below 50%, floor area ratio below 300%. The law is not what prevents them. And yet low-rise estates at high coverage are not built here. The reason most often named is that south orientation and cross-ventilation cannot be given up. Godeok Urban Bridge, at 30% coverage with spacing kept and a public passage cut through, is one of the rare domestic attempts to get past that wall.">중요한 것은 이 선례들이 우리 법을 벗어나지 않는다는 점이다. 대부분 제3종 일반주거지역의 법정 한도인 건폐율 50퍼센트 이하, 용적률 300퍼센트 이하 안에 들어온다. 법이 막아서 못 짓는 것이 아니다. 그런데도 층이 낮고 건폐율이 높은 단지는 한국에서 지어지지 않는다. 남향과 맞통풍을 포기할 수 없다는 것이 가장 큰 이유로 지목된다. e편한세상 고덕 어반브릿지가 건폐율 30퍼센트에 인동간격을 지키며 공공보행통로를 낸 것은 그 벽을 넘어 보려는 국내의 드문 시도다.</p>

        <p class="measure muted reveal" data-ko="7장의 실험은 정확히 이 질문에서 출발한다. 남향과 인동간격을 지키면서 건폐율을 17퍼센트에서 얼마나 끌어올릴 수 있는가. 용적률을 250퍼센트에 고정한 채 건폐율만 5퍼센트에서 50퍼센트까지 벌리면, 선례들이 서 있는 30에서 50퍼센트 구간이 그 안에 통째로 들어온다. 지어진 적 없는 구간까지 포함해야 어디서 무엇이 무너지는지 보인다." data-en="Chapter 7 begins from exactly this question: how far can coverage rise from 17% while south orientation and spacing are held? Holding the floor area ratio at 250% and opening the coverage from 5% to 50% brings the whole 30–50% band where the precedents stand inside the experiment. Only by including the bands never built does it become visible where, and what, gives way.">7장의 실험은 정확히 이 질문에서 출발한다. 남향과 인동간격을 지키면서 건폐율을 17퍼센트에서 얼마나 끌어올릴 수 있는가. 용적률을 250퍼센트에 고정한 채 건폐율만 5퍼센트에서 50퍼센트까지 벌리면, 선례들이 서 있는 30에서 50퍼센트 구간이 그 안에 통째로 들어온다. 지어진 적 없는 구간까지 포함해야 어디서 무엇이 무너지는지 보인다.</p>
      </section>
    `
  },

  /* ==================== 7-2 16종 유닛과 세 시나리오 ==================== */
  "7-2": {
    titleKo: "16종 유닛과 세 시나리오",
    titleEn: "16 Units & Three Scenarios",
    subKo: "배치의 재료는 열여섯 종의 주동 유닛, 배치의 규칙은 세 가지 시나리오",
    subEn: "The material of a layout is sixteen unit types; the rule is three scenarios",
    body: `
      <p class="lead reveal" data-ko="무엇을 놓을지와 어떻게 놓을지를 각각 열여섯 가지와 세 가지로 정의했다. 유닛은 재료이고, 시나리오는 규칙이다." data-en="What to place and how to place it are defined as sixteen and three. Units are the material; scenarios are the rule.">무엇을 놓을지와 어떻게 놓을지를 각각 열여섯 가지와 세 가지로 정의했다. 유닛은 재료이고, 시나리오는 규칙이다.</p>

      <figure class="figure figure--wide reveal">
        <div class="figure__ph">
          <img data-fig src="assets/img/07/units-16.svg" alt="16종 주동 유닛의 아이소메트릭과 평면" loading="lazy">
          <span data-ko="도판 · 16종 주동 유닛" data-en="Figure · the sixteen units">도판 · 16종 주동 유닛</span>
        </div>
        <figcaption class="figure__cap"><span data-ko="16종 주동 유닛. 단일 12종과 결합 4종을 아이소메트릭과 평면으로 함께 보인다" data-en="Sixteen building units, twelve single and four combined, each shown in isometric and in plan">16종 주동 유닛. 단일 12종과 결합 4종을 아이소메트릭과 평면으로 함께 보인다</span></figcaption>
      </figure>

      <p class="measure muted reveal" data-ko="각 유닛은 기하 형태와 가구 수를 결합한 이름을 갖는다. I·L·V·X·Y·ㅁ 같은 평면 기하에 한 층당 세대 수를 붙여 I2·L22·V4·ㅁ4처럼 부르고, 서로 다른 기하를 이어 붙인 결합형 네 종(ㅁ3+L11·V4+I2·V3+I2·I2+V4+I2)을 더했다. 이 이름 체계는 3장의 유형화와 이어진다." data-en="Each unit is named by combining plan geometry with household count: geometries like I, L, V, X, Y, ㅁ take a per-floor unit count to become I2, L22, V4, ㅁ4, joined by four combined types (ㅁ3+L11, V4+I2, V3+I2, I2+V4+I2). This naming continues from the typology in Chapter 3.">각 유닛은 기하 형태와 가구 수를 결합한 이름을 갖는다. I·L·V·X·Y·ㅁ 같은 평면 기하에 한 층당 세대 수를 붙여 I2·L22·V4·ㅁ4처럼 부르고, 서로 다른 기하를 이어 붙인 결합형 네 종(ㅁ3+L11·V4+I2·V3+I2·I2+V4+I2)을 더했다. 이 이름 체계는 3장의 유형화와 이어진다.</p>

      <section class="section" id="scenarios">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="세 가지 시나리오" data-en="Three Scenarios">세 가지 시나리오</h2>
        </div>
        <p class="measure muted reveal" data-ko="시나리오는 한국 주거의 두 원칙, 곧 남향과 인동간격을 어디까지 지키는가로 갈린다. 규제를 한 겹씩 벗을 때마다 같은 대지에 더 많은 동을 채울 수 있고, A·B·C의 건폐율 격차가 곧 규제 때문에 잃는 건폐율을 정량화한다." data-en="Scenarios divide by how far two Korean housing principles, south orientation and inter-building spacing, are kept. Each rule shed lets more buildings fit on the same site, and the coverage gap between A, B, and C quantifies the coverage lost to regulation.">시나리오는 한국 주거의 두 원칙, 곧 남향과 인동간격을 어디까지 지키는가로 갈린다. 규제를 한 겹씩 벗을 때마다 같은 대지에 더 많은 동을 채울 수 있고, A·B·C의 건폐율 격차가 곧 규제 때문에 잃는 건폐율을 정량화한다.</p>

        <div class="tbl-wrap reveal" data-d="1">
          <table class="data">
            <thead><tr>
              <th data-ko="시나리오" data-en="Scenario">시나리오</th>
              <th data-ko="남향" data-en="South">남향</th>
              <th data-ko="인동간격" data-en="Spacing">인동간격</th>
              <th data-ko="결과" data-en="Effect">결과</th>
            </tr></thead>
            <tbody>
              <tr><td><span class="scn scn--a">A</span><span data-ko="남향+인동" data-en="Orient + spacing">남향+인동</span></td><td data-ko="준수" data-en="Kept">준수</td><td data-ko="준수" data-en="Kept">준수</td><td data-ko="남향 채광 최대, 건폐율 최소" data-en="Max south light, min coverage">남향 채광 최대, 건폐율 최소</td></tr>
              <tr><td><span class="scn scn--b">B</span><span data-ko="인동만" data-en="Spacing only">인동만</span></td><td data-ko="양보" data-en="Given up">양보</td><td data-ko="준수" data-en="Kept">준수</td><td data-ko="회전 자유로 동수 증가" data-en="Free rotation, more buildings">회전 자유로 동수 증가</td></tr>
              <tr><td><span class="scn scn--c">C</span><span data-ko="인동무시" data-en="Spacing relaxed">인동무시</span></td><td data-ko="양보" data-en="Given up">양보</td><td data-ko="10m 완화" data-en="Relaxed to 10 m">10m 완화</td><td data-ko="저층·고건폐율, 동수 급증" data-en="Low-rise at high coverage, buildings surge">저층·고건폐율, 동수 급증</td></tr>
            </tbody>
          </table>
        </div>

        <figure class="figure figure--wide reveal" data-d="1">
          <div class="figure__ph">
            <img data-fig src="assets/img/07/scenarios-abc.svg" alt="시나리오 A B C 배치 다이어그램" loading="lazy">
            <span data-ko="도판 · 시나리오 A·B·C" data-en="Figure · scenarios A, B, C">도판 · 시나리오 A·B·C</span>
          </div>
          <figcaption class="figure__cap"><span data-ko="A는 남향 최대에 인동간격 준수, B는 남향 양보, C는 인동간격을 10m까지 완화. 규제를 한 겹씩 벗을수록 같은 대지에 더 많은 동이 들어간다" data-en="A keeps full south orientation and spacing; B gives up orientation; C relaxes spacing to 10 m. Each rule shed lets more buildings onto the same site">A는 남향 최대에 인동간격 준수, B는 남향 양보, C는 인동간격을 10m까지 완화. 규제를 한 겹씩 벗을수록 같은 대지에 더 많은 동이 들어간다</span></figcaption>
        </figure>
        <p class="readout reveal"><b data-ko="임계전환점 ≈ 건폐율 25.5%" data-en="Transition ≈ BCR 25.5%">임계전환점 ≈ 건폐율 25.5%</b> <span data-ko="여기를 넘으면 남향을 지킨 채로는 배치가 성립하지 않는다. 시나리오 A가 끝나고 B가 시작되는 지점이다." data-en="Past this point no layout holds while keeping south orientation. Scenario A ends here and B begins.">여기를 넘으면 남향을 지킨 채로는 배치가 성립하지 않는다. 시나리오 A가 끝나고 B가 시작되는 지점이다.</span><br><b data-ko="임계전환점 ≈ 건폐율 50.9%" data-en="Transition ≈ BCR 50.9%">임계전환점 ≈ 건폐율 50.9%</b> <span data-ko="여기를 넘으면 인동간격 규제 안에서는 배치가 성립하지 않는다. 시나리오 B가 끝나고 C가 시작되는 지점이다." data-en="Past this point no layout holds within the spacing rule. Scenario B ends here and C begins.">여기를 넘으면 인동간격 규제 안에서는 배치가 성립하지 않는다. 시나리오 B가 끝나고 C가 시작되는 지점이다.</span></p>
      </section>

      <section class="section" id="spacing-law">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="인동간격의 법적 근거" data-en="Legal Basis for Spacing">인동간격의 법적 근거</h2>
        </div>
        <div class="cols cols--text-fig">
          <p class="measure muted reveal" data-ko="인동간격은 건축법 시행령 제86조를 따른다. 마주 보는 두 면이 무엇인가에 따라 최소 이격이 달라지며, 채광창이 한 면이라도 관여하면 0.5H가 적용된다(서울시 조례). 여기서 H는 층수에 층고 3,000밀리미터를 곱한 건물 높이다." data-en="Spacing follows Article 86 of the Building Act Enforcement Decree. The minimum gap depends on which two surfaces face each other; if a light window is involved on either side, 0.5H applies (Seoul ordinance), where H is floors times the 3,000 mm story height.">인동간격은 건축법 시행령 제86조를 따른다. 마주 보는 두 면이 무엇인가에 따라 최소 이격이 달라지며, 채광창이 한 면이라도 관여하면 0.5H가 적용된다(서울시 조례). 여기서 H는 층수에 층고 3,000밀리미터를 곱한 건물 높이다.</p>
          <div class="tbl-wrap reveal" data-d="1">
            <table class="data" style="min-width:0">
              <thead><tr><th data-ko="마주 보는 면" data-en="Facing surfaces">마주 보는 면</th><th class="num" data-ko="최소 이격" data-en="Min. gap">최소 이격</th></tr></thead>
              <tbody>
                <tr><td data-ko="채광창 ↔ 창·측벽" data-en="Light window ↔ any">채광창 ↔ 창·측벽</td><td class="num">0.5H</td></tr>
                <tr><td data-ko="소창 ↔ 소창·측벽" data-en="Small window ↔ small/wall">소창 ↔ 소창·측벽</td><td class="num">8,000㎜</td></tr>
                <tr><td data-ko="측벽 ↔ 측벽" data-en="Blank wall ↔ blank wall">측벽 ↔ 측벽</td><td class="num">4,000㎜</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    `
  },

  /* ==================== 7-3 평가 방법 ==================== */
  "7-3": {
    titleKo: "평가 방법",
    titleEn: "Evaluation Method",
    subKo: "단지 안이 아니라 단지 바깥에서, 지나가는 보행자의 눈으로 평가한다",
    subEn: "Not from inside the complex but outside it, through the eyes of a passing pedestrian",
    body: `
      <p class="lead reveal" data-ko="생성한 배치안은 대지 경계 밖 1,294개의 조망점에서, 눈높이 1.6미터의 보행자 시선으로 네 가지 지표를 측정해 평가한다." data-en="Each layout is judged from 1,294 viewpoints beyond the site boundary, at a 1.6 m pedestrian eye height, across four metrics.">생성한 배치안은 대지 경계 밖 1,294개의 조망점에서, 눈높이 1.6미터의 보행자 시선으로 네 가지 지표를 측정해 평가한다.</p>

      <section class="section" id="viewpoints">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="평가 지점" data-en="Viewpoints">평가 지점</h2>
        </div>
        <div class="cols cols--text-fig">
          <div class="reveal">
            <p class="measure muted" data-ko="대지 경계선에서 7·25·100·200미터 떨어진 네 개의 오프셋 링을 두르고, 그 위를 5미터 간격으로 세분해 1,294개의 조망점을 만든다. 네 거리대는 겔이 말한 보행 거리의 층위, 곧 마주침과 인지와 전경에 대응한다." data-en="Four offset rings at 7, 25, 100, and 200 m from the site boundary are subdivided at 5 m spacing into 1,294 viewpoints. The four bands correspond to Gehl's layers of walking distance: encounter, recognition, panorama.">대지 경계선에서 7·25·100·200미터 떨어진 네 개의 오프셋 링을 두르고, 그 위를 5미터 간격으로 세분해 1,294개의 조망점을 만든다. 네 거리대는 겔이 말한 보행 거리의 층위, 곧 마주침과 인지와 전경에 대응한다.</p>
            <dl class="kv">
              <div><dt data-ko="조망점" data-en="Viewpoints">조망점</dt><dd>1,294</dd></div>
              <div><dt data-ko="평가 거리" data-en="Distances">평가 거리</dt><dd>7 · 25 · 100 · 200 m</dd></div>
              <div><dt data-ko="세분 간격" data-en="Spacing">세분 간격</dt><dd>5 m</dd></div>
              <div><dt data-ko="눈높이" data-en="Eye height">눈높이</dt><dd>1.6 m</dd></div>
            </dl>
          </div>
          <figure class="figure figure--wide reveal" data-d="1">
            <div class="figure__ph">
              <img data-fig src="assets/img/07/eval-points.svg" alt="평가 지점 링 다이어그램" loading="lazy">
              <span data-ko="도판 · 조망점 링" data-en="Figure · the viewpoint rings">도판 · 조망점 링</span>
            </div>
            <figcaption class="figure__cap"><span data-ko="7·25·100·200m 링 위 조망점, 5m 간격 세분" data-en="Viewpoints on 7/25/100/200 m rings, 5 m spacing">7·25·100·200m 링 위 조망점, 5m 간격 세분</span></figcaption>
          </figure>
        </div>
      </section>

      <section class="section" id="four-metrics">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="네 가지 지표" data-en="Four Metrics">네 가지 지표</h2>
        </div>
        <div class="cards reveal">
          <div class="card"><div class="card__img"><img data-fig src="assets/img/07/metric-spacing.svg" alt="동간거리" loading="lazy"></div><div class="card__body"><div class="card__name" data-ko="동간거리" data-en="Spacing">동간거리</div><div class="card__tag" data-ko="동 사이가 얼마나 열려 있는가" data-en="how open the gaps are">동 사이가 얼마나 열려 있는가</div></div></div>
          <div class="card"><div class="card__img"><img data-fig src="assets/img/07/metric-frontage.svg" alt="전면점유율" loading="lazy"></div><div class="card__body"><div class="card__name" data-ko="전면점유율" data-en="Frontage">전면점유율</div><div class="card__tag" data-ko="가로에 얼마나 접하는가" data-en="how much it meets the street">가로에 얼마나 접하는가</div></div></div>
          <div class="card"><div class="card__img"><img data-fig src="assets/img/07/metric-angle.svg" alt="조망앙각" loading="lazy"></div><div class="card__body"><div class="card__name" data-ko="조망앙각" data-en="View angle">조망앙각</div><div class="card__tag" data-ko="얼마나 올려다보는가" data-en="how much one looks up">얼마나 올려다보는가</div></div></div>
          <div class="card"><div class="card__img"><img data-fig src="assets/img/07/metric-solid.svg" alt="입체각" loading="lazy"></div><div class="card__body"><div class="card__name" data-ko="입체각" data-en="Solid angle">입체각</div><div class="card__tag" data-ko="시야를 얼마나 채우는가" data-en="how much of the view it fills">시야를 얼마나 채우는가</div></div></div>
        </div>

        <div class="tbl-wrap reveal" data-d="1">
          <table class="data">
            <thead><tr>
              <th data-ko="지표" data-en="Metric">지표</th>
              <th data-ko="판정 기준" data-en="Criterion">판정 기준</th>
              <th data-ko="근거" data-en="Source">근거</th>
            </tr></thead>
            <tbody>
              <tr><td data-ko="동간거리" data-en="Spacing">동간거리</td><td data-ko="채광창 0.5H·10m 중 큰 값 이상" data-en="≥ greater of 0.5H or 10 m for light windows">채광창 0.5H·10m 중 큰 값 이상</td><td data-ko="건축법 §86" data-en="Building Act §86">건축법 §86</td></tr>
              <tr><td data-ko="전면점유율" data-en="Frontage">전면점유율</td><td data-ko="6.1m 빌드투존 접면 ≥ 50 %" data-en="≥ 50 % contact within 6.1 m build-to zone">6.1m 빌드투존 접면 ≥ 50 %</td><td>Portland 33.120</td></tr>
              <tr><td data-ko="조망앙각" data-en="View angle">조망앙각</td><td data-ko="27° 이하 통과거리를 [7m=100·200m=0]로 정규화" data-en="pass distance below 27°, normalized [7m=100·200m=0]">27° 이하 통과거리를 [7m=100·200m=0]로 정규화</td><td>Maertens 1884</td></tr>
              <tr><td data-ko="입체각" data-en="Solid angle">입체각</td><td data-ko="7.1 %FOV 이하 통과거리를 정규화 (형상계수 8 환산)" data-en="pass distance below 7.1 %FOV, normalized (converted from shape factor 8)">7.1 %FOV 이하 통과거리를 정규화 (형상계수 8 환산)</td><td>Takei &amp; Oohara 1977</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    `
  },

  /* ==================== 7-4 자동 생성·평가 ==================== */
  "7-4": {
    titleKo: "자동 생성·평가",
    titleEn: "Automated Pipeline",
    subKo: "96개 배치안과 수십만 개 조망 측정을 손으로 그릴 수는 없다. Rhino·Grasshopper·GHPython",
    subEn: "Ninety-six layouts and hundreds of thousands of measurements cannot be drawn by hand",
    body: `
      <p class="lead reveal" data-ko="Rhino·Grasshopper·GHPython으로 배치를 자동 생성하고, 같은 파이프라인이 조망점마다 네 지표를 자동 산출한다." data-en="A Rhino / Grasshopper / GHPython pipeline generates each layout, and the same pipeline computes the four metrics at every viewpoint.">Rhino·Grasshopper·GHPython으로 배치를 자동 생성하고, 같은 파이프라인이 조망점마다 네 지표를 자동 산출한다.</p>

      <section class="section" id="pipeline">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="생성 파이프라인" data-en="Generation Pipeline">생성 파이프라인</h2>
        </div>
        <p class="measure muted reveal" data-ko="대지 형상에 맞춰 용적률 250퍼센트를 달성하는 최대 건폐율·최대 세대수 배치를 자동으로 찾는다. 동일 용적률 범위에서는 층수를 최소화하고 그 다음으로 건폐율을 최대화하도록 목적 함수를 두었다." data-en="For the given site shape, it searches automatically for the maximum-coverage, maximum-household layout that reaches FAR 250%. Within the same FAR band, the objective minimizes floors first, then maximizes coverage.">대지 형상에 맞춰 용적률 250퍼센트를 달성하는 최대 건폐율·최대 세대수 배치를 자동으로 찾는다. 동일 용적률 범위에서는 층수를 최소화하고 그 다음으로 건폐율을 최대화하도록 목적 함수를 두었다.</p>
        <div class="stepper reveal" data-d="1">
          <div class="step"><span class="step__n">01</span><h3 class="step__t" data-ko="회전 결정" data-en="Orient">회전 결정</h3><p class="step__d" data-ko="시나리오 A·B·C 분기" data-en="branch by scenario A·B·C">시나리오 A·B·C 분기</p></div>
          <div class="step"><span class="step__n">02</span><h3 class="step__t" data-ko="프로그램 산정" data-en="Program">프로그램 산정</h3><p class="step__d" data-ko="목표 동수·층당 세대수" data-en="target buildings, units per floor">목표 동수·층당 세대수</p></div>
          <div class="step"><span class="step__n">03</span><h3 class="step__t" data-ko="행렬 배치" data-en="Grid place">행렬 배치</h3><p class="step__d" data-ko="rowplace 격자 엔진" data-en="rowplace grid engine">rowplace 격자 엔진</p></div>
          <div class="step"><span class="step__n">04</span><h3 class="step__t" data-ko="용적률 회복·베이크" data-en="Recover &amp; bake">용적률 회복·베이크</h3><p class="step__d" data-ko="점증 cap 으로 FAR 250% 회복" data-en="recover FAR 250% via incremental cap">점증 cap 으로 FAR 250% 회복</p></div>
        </div>
      </section>

      <section class="section" id="surfaces">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="면 유형 자동 분류" data-en="Auto-classified Surfaces">면 유형 자동 분류</h2>
        </div>
        <div class="cols cols--text-fig">
          <p class="measure muted reveal" data-ko="인동간격을 자동으로 매기려면 각 외벽이 채광창인지 소창인지 측벽인지 알아야 한다. 알고리즘은 footprint의 각 모서리에 채광창·소창 선의 중점을 수직 투영해(거리 500밀리미터 이내) 면 유형을 판별하고, 그 유형에 따라 방향별 인동간격을 결정한다." data-en="To score spacing automatically, each outer wall must be known as a light window, a small window, or a blank wall. The algorithm perpendicularly projects window-line midpoints onto each footprint edge (within 500 mm) to classify surfaces, then sets directional spacing from the type.">인동간격을 자동으로 매기려면 각 외벽이 채광창인지 소창인지 측벽인지 알아야 한다. 알고리즘은 footprint의 각 모서리에 채광창·소창 선의 중점을 수직 투영해(거리 500밀리미터 이내) 면 유형을 판별하고, 그 유형에 따라 방향별 인동간격을 결정한다.</p>
          <div class="tbl-wrap reveal" data-d="1">
            <table class="data" style="min-width:0">
              <thead><tr><th data-ko="레이어" data-en="Layer">레이어</th><th data-ko="면 유형" data-en="Surface">면 유형</th><th class="num" data-ko="인동" data-en="Gap">인동</th></tr></thead>
              <tbody>
                <tr><td>plan</td><td data-ko="측벽" data-en="Blank wall">측벽</td><td class="num">4 m</td></tr>
                <tr><td>bay</td><td data-ko="채광창" data-en="Light window">채광창</td><td class="num">0.5H</td></tr>
                <tr><td>little</td><td data-ko="소창" data-en="Small window">소창</td><td class="num">8 m</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="section" id="auto-eval">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="평가 자동화" data-en="Automated Evaluation">평가 자동화</h2>
        </div>
        <p class="measure muted reveal" data-ko="베이크된 매스는 평가 스크립트가 읽어 1,294개 조망점에서 렌더링하고, 조망앙각·입체각·통과거리·전면점유율을 산출한다. 아래는 I4 유닛, 건폐율 10퍼센트에서의 지표별 예시다." data-en="The evaluation script reads the baked masses, renders from 1,294 viewpoints, and computes view angle, solid angle, pass distance, and frontage. Below: the I4 unit at BCR 10%.">베이크된 매스는 평가 스크립트가 읽어 1,294개 조망점에서 렌더링하고, 조망앙각·입체각·통과거리·전면점유율을 산출한다. 아래는 I4 유닛, 건폐율 10퍼센트에서의 지표별 예시다.</p>
        <div class="cols reveal" data-d="1">
          <figure class="figure figure--wide">
            <div class="figure__ph"><img data-fig src="assets/img/07/eval-angle-i4.svg" alt="조망앙각 산출 방법" loading="lazy"><span data-ko="도판 · 조망앙각 산출" data-en="Figure · computing the view angle">도판 · 조망앙각 산출</span></div>
            <figcaption class="figure__cap"><span data-ko="조망앙각 산출. 평가 지점에서 모든 주동으로 광선을 쏘아 그중 가장 큰 올려다보는 각도를 취한다" data-en="Computing the view angle: rays are cast from the viewpoint to every building, and the largest upward angle is taken">조망앙각 산출. 평가 지점에서 모든 주동으로 광선을 쏘아 그중 가장 큰 올려다보는 각도를 취한다</span></figcaption>
          </figure>
          <figure class="figure figure--wide">
            <div class="figure__ph"><img data-fig src="assets/img/07/eval-solid-i4.svg" alt="입체각 산출 방법" loading="lazy"><span data-ko="도판 · 입체각 산출" data-en="Figure · computing the solid angle">도판 · 입체각 산출</span></div>
            <figcaption class="figure__cap"><span data-ko="입체각 산출. 평가 지점을 감싼 구에 건물을 투사해 시야에서 차지하는 조각의 비율을 잰다" data-en="Computing the solid angle: the buildings are projected onto a sphere around the viewpoint, and the share of the field of view is measured">입체각 산출. 평가 지점을 감싼 구에 건물을 투사해 시야에서 차지하는 조각의 비율을 잰다</span></figcaption>
          </figure>
          <figure class="figure figure--wide">
            <div class="figure__ph"><img data-fig src="assets/img/07/eval-frontage-i4.svg" alt="전면점유율 산출 방법" loading="lazy"><span data-ko="도판 · 전면점유율 산출" data-en="Figure · computing frontage">도판 · 전면점유율 산출</span></div>
            <figcaption class="figure__cap"><span data-ko="전면점유율 산출. 주동을 대지경계선에 투사해 가로에 실제로 접한 길이의 비율을 잰다" data-en="Computing frontage: the buildings are projected onto the site boundary, and the length actually meeting the street is measured">전면점유율 산출. 주동을 대지경계선에 투사해 가로에 실제로 접한 길이의 비율을 잰다</span></figcaption>
          </figure>
          <figure class="figure figure--wide">
            <div class="figure__ph"><img data-fig src="assets/img/07/eval-spacing-i4.svg" alt="동간거리 산출 방법" loading="lazy"><span data-ko="도판 · 동간거리 산출" data-en="Figure · computing spacing">도판 · 동간거리 산출</span></div>
            <figcaption class="figure__cap"><span data-ko="동간거리 산출. 채광창면에서 수직으로 투사해 마주 보는 가장 가까운 동까지의 거리를 잰다" data-en="Computing spacing: rays are cast perpendicular from each daylight facade to the nearest facing building">동간거리 산출. 채광창면에서 수직으로 투사해 마주 보는 가장 가까운 동까지의 거리를 잰다</span></figcaption>
          </figure>
        </div>
      </section>
    `
  },

  /* ==================== 7-5 96개 배치안 ==================== */
  "7-5": {
    titleKo: "96개 배치안",
    titleEn: "The 96 Layouts",
    subKo: "16종의 유닛과 여섯 단계의 건폐율이 만나 만들어진 하나의 지형",
    subEn: "Sixteen units across six coverage steps form a single terrain",
    body: `
      <p class="lead reveal" data-ko="한 판에 늘어놓으면, 위로는 초고층 저건폐가 아래로는 저층 고건폐가 이어지는 하나의 지형이 된다." data-en="Laid out on one board, they form a single terrain: sparse high-rise above, dense low-rise below.">한 판에 늘어놓으면, 위로는 초고층 저건폐가 아래로는 저층 고건폐가 이어지는 하나의 지형이 된다.</p>

      <section class="section" id="explore">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="96개 배치안 살펴보기" data-en="Explore the 96 Layouts">96개 배치안 살펴보기</h2>
        </div>
        <p class="measure muted reveal" data-ko="용적률 250%는 고정이다. 따라서 건폐율을 올리면 동수가 늘고 층수가 낮아진다. 초고층 저건폐에서는 시각 위압이 크고 인동은 넉넉하며, 저층 고건폐에서는 그 반대다. 96개 중 어디에서 두 힘이 교차하는지 직접 확인해 보자." data-en="Floor area ratio is fixed at 250%. Raising coverage therefore adds buildings and lowers floors. Sparse high-rise brings visual oppression with generous spacing; dense low-rise, the reverse. Find where the two forces cross.">용적률 250%는 고정이다. 따라서 건폐율을 올리면 동수가 늘고 층수가 낮아진다. 초고층 저건폐에서는 시각 위압이 크고 인동은 넉넉하며, 저층 고건폐에서는 그 반대다. 96개 중 어디에서 두 힘이 교차하는지 직접 확인해 보자.</p>

        <div class="lx block reveal" data-d="1" id="lx">
          <div class="lx__ctrl">
            <div class="lx__row">
              <span class="lx__ctrl-label" data-ko="건폐율" data-en="Coverage">건폐율</span>
              <div class="lx__chips" id="lxBcr" role="group" aria-label="건폐율"></div>
            </div>
            <div class="lx__row">
              <span class="lx__ctrl-label" data-ko="주동 유형" data-en="Mass type">주동 유형</span>
              <div class="lx__chips" id="lxMass" role="group" aria-label="주동 유형"></div>
            </div>
          </div>

          <div class="lx__view">
            <div class="lx__iso figure__ph">
              <img id="lxIso" data-fig src="" alt="" loading="lazy">
              <span id="lxPh" data-ko="아이소메트릭 도판 예정" data-en="Isometric pending">아이소메트릭 도판 예정</span>
            </div>
            <div class="lx__panel">
              <p class="lx__id" id="lxId"></p>
              <div class="lx__stats" id="lxStats"></div>
              <p class="lx__note" id="lxNote"></p>
            </div>
          </div>
        </div>
        <p class="readout reveal"><span data-ko="96개 셀 모두 실제 산출값(2026-06). 위압 점수는 통과거리를 7 m=100점 · 200 m=0점으로 정규화한 값이다. 클수록 위압이 가까이서 해소된다." data-en="All 96 cells carry measured values (2026-06). Relief scores normalise the pass-through distance to 7 m = 100 and 200 m = 0. Higher means oppression clears sooner.">96개 셀 모두 실제 산출값(2026-06). 위압 점수는 통과거리를 7 m=100점 · 200 m=0점으로 정규화한 값이다. 클수록 위압이 가까이서 해소된다.</span></p>
      </section>
    `
  },

  /* ==================== 3-1 보행자의 시지각 ==================== */
  "3-1": {
    titleKo: "보행자의 시지각",
    titleEn: "Pedestrian Perception",
    body: `
      <p class="lead reveal" data-ko="보행자는 건물을 도면으로 보지 않는다. 눈높이 1.6미터에서, 고개를 들어, 시야의 일부로 본다. 위압감을 재려면 먼저 이 눈을 이해해야 한다." data-en="A pedestrian does not see a building as a drawing. They see it from an eye height of 1.6 m, head tilted back, as part of a field of view. To measure oppressiveness, this eye must first be understood.">보행자는 건물을 도면으로 보지 않는다. 눈높이 1.6미터에서, 고개를 들어, 시야의 일부로 본다. 위압감을 재려면 먼저 이 눈을 이해해야 한다.</p>

      <section class="section" id="distance">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="거리가 감각을 나눈다" data-en="Distance Divides the Senses">거리가 감각을 나눈다</h2>
        </div>
        <p class="measure muted reveal" data-ko="Gehl은 인간의 감각이 거리에 따라 단계적으로 작동한다고 보았다. 100미터 안에서 신체의 움직임을 구분하고, 25미터 안에서 얼굴 표정과 감정을 읽으며, 7미터 안에서 진솔한 대화를 나눈다. 그는 이 감각과 이동성이 도시공간 활동의 바탕이므로, 그것이 설계의 자연스러운 출발점이어야 한다고 주장했다." data-en="Gehl saw the human senses working in stages by distance: body movement is distinguished within 100 m, facial expression and emotion read within 25 m, genuine conversation held within 7 m. Because these senses and this mobility underlie all activity in urban space, he argued, they should be the natural starting point of design.">Gehl은 인간의 감각이 거리에 따라 단계적으로 작동한다고 보았다. 100미터 안에서 신체의 움직임을 구분하고, 25미터 안에서 얼굴 표정과 감정을 읽으며, 7미터 안에서 진솔한 대화를 나눈다. 그는 이 감각과 이동성이 도시공간 활동의 바탕이므로, 그것이 설계의 자연스러운 출발점이어야 한다고 주장했다.</p>
        <p class="measure muted reveal" data-ko="이 프로젝트가 조망점을 7미터, 25미터, 100미터, 200미터의 네 개 링으로 놓은 것은 여기서 나온다. 앞의 세 거리는 Gehl의 감각 단계를 그대로 옮긴 것이고, 200미터는 위압이 풀리는 상한선이다. 이 거리에서도 위압이 남아 있다면 그것은 사실상 해소되지 않는다고 본다. 위압 점수를 7미터=100점, 200미터=0점으로 정규화한 것도 이 두 끝점을 기준으로 삼은 것이다." data-en="This is why the project places its viewpoints on four rings at 7, 25, 100, and 200 m. The first three carry Gehl’s sensory thresholds directly; 200 m is the outer bound at which pressure should have cleared. If it persists there, it is treated as never resolving. The relief score normalises to these two endpoints: 7 m = 100, 200 m = 0.">이 프로젝트가 조망점을 7미터, 25미터, 100미터, 200미터의 네 개 링으로 놓은 것은 여기서 나온다. 앞의 세 거리는 Gehl의 감각 단계를 그대로 옮긴 것이고, 200미터는 위압이 풀리는 상한선이다. 이 거리에서도 위압이 남아 있다면 그것은 사실상 해소되지 않는다고 본다. 위압 점수를 7미터=100점, 200미터=0점으로 정규화한 것도 이 두 끝점을 기준으로 삼은 것이다.</p>

        <div class="numbers reveal" data-d="1">
          <div class="num"><b data-count="7" data-suffix=" m">7 m</b><span data-ko="대화의 거리" data-en="conversation">대화의 거리</span></div>
          <div class="num"><b data-count="25" data-suffix=" m">25 m</b><span data-ko="표정을 읽는 거리" data-en="expression">표정을 읽는 거리</span></div>
          <div class="num"><b data-count="100" data-suffix=" m">100 m</b><span data-ko="움직임을 보는 거리" data-en="movement">움직임을 보는 거리</span></div>
          <div class="num"><b data-count="200" data-suffix=" m">200 m</b><span data-ko="위압이 풀리는 한계" data-en="pressure clears">위압이 풀리는 한계</span></div>
        </div>

        <figure class="figure figure--wide reveal">
          <div class="figure__ph">
            <img data-fig src="assets/img/03/perception.svg" alt="사람의 수직 시야와 거리별 인지 단계" loading="lazy">
            <span data-ko="도판 · 시야각과 거리 단계" data-en="Figure · field of view and distance">도판 · 시야각과 거리 단계</span>
          </div>
          <figcaption class="figure__cap"><span data-ko="사람의 수직 시야는 위로 50~55도, 아래로 70~80도다. 그리고 거리가 멀어질수록 알아볼 수 있는 것이 달라진다" data-en="The human field of view reaches 50–55° above and 70–80° below. And what can be recognised changes with distance">사람의 수직 시야는 위로 50~55도, 아래로 70~80도다. 그리고 거리가 멀어질수록 알아볼 수 있는 것이 달라진다</span></figcaption>
        </figure>
      </section>

      
    `
  },

  /* ==================== 3-2 아파트 주동의 유형화 ==================== */
  "3-2": {
    titleKo: "아파트 주동의 유형화",
    titleEn: "Building Typology",
    body: `
      <p class="lead reveal" data-ko="한국 아파트의 주동은 지난 20년간 조용히 형태를 바꿔 왔다. 일자형이 물러나고 결합형이 그 자리를 채웠다. 이 변화가 무엇을 뜻하는지 읽어야 96개 배치안의 16종 유닛을 이해할 수 있다." data-en="Korean apartment blocks have quietly changed shape over the past twenty years: the straight slab has retreated and the combined form has taken its place. Reading that change is how the sixteen unit types of the 96 layouts come into focus.">한국 아파트의 주동은 지난 20년간 조용히 형태를 바꿔 왔다. 일자형이 물러나고 결합형이 그 자리를 채웠다. 이 변화가 무엇을 뜻하는지 읽어야 96개 배치안의 16종 유닛을 이해할 수 있다.</p>

      <section class="section" id="typology-shift">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="판상형의 퇴장" data-en="The Slab Departs">판상형의 퇴장</h2>
        </div>
        <p class="measure muted reveal" data-ko="서울시 재개발·재건축 아파트 300개 단지, 3,761개 주동을 전수조사한 연구에 따르면 판상형 주동은 2000~2005년 74.3퍼센트에서 2015~2021년 28.5퍼센트로 급감했다. 그 자리를 채운 것은 탑상형이 아니라 결합형이다. L자·V자처럼 서로 다른 기하를 이어 붙인 유형이 42.0퍼센트로 최다가 되었다. 부산에서도 같은 일이 벌어졌다. 일자형은 2005년까지 80퍼센트를 넘다가 2011년 이후 28퍼센트로 떨어졌고, L자 유형이 42퍼센트로 올라섰다." data-en="A census of 3,761 buildings across 300 redevelopment estates in Seoul found the slab falling from 74.3% in 2000–2005 to 28.5% in 2015–2021. What replaced it was not the tower but the combined form: L-shapes, V-shapes, geometries joined together, now the largest group at 42.0%. The same happened in Busan. The straight type held over 80% until 2005, then fell to 28% after 2011, with the L-shape rising to 42%.">서울시 재개발·재건축 아파트 300개 단지, 3,761개 주동을 전수조사한 연구에 따르면 판상형 주동은 2000~2005년 74.3퍼센트에서 2015~2021년 28.5퍼센트로 급감했다. 그 자리를 채운 것은 탑상형이 아니라 결합형이다. L자·V자처럼 서로 다른 기하를 이어 붙인 유형이 42.0퍼센트로 최다가 되었다. 부산에서도 같은 일이 벌어졌다. 일자형은 2005년까지 80퍼센트를 넘다가 2011년 이후 28퍼센트로 떨어졌고, L자 유형이 42퍼센트로 올라섰다.</p>
        <p class="measure muted reveal" data-ko="이유는 명확하다. 판상형은 향과 개방감에서 유리하지만 입면차폐율이 크고 높은 용적률을 담기에 불리하다. 탑상형은 높은 용적률에 유리하지만 향이 나쁜 세대가 생긴다. 결합형은 둘의 절충이다. 시장은 규제와 사업성 사이에서 스스로 답을 찾아갔다." data-en="The reason is plain. The slab gives good orientation and openness but obstructs heavily and struggles to carry floor area. The tower carries floor area but produces poorly oriented units. The combined form is the compromise. The market found its own answer between regulation and feasibility.">이유는 명확하다. 판상형은 향과 개방감에서 유리하지만 입면차폐율이 크고 높은 용적률을 담기에 불리하다. 탑상형은 높은 용적률에 유리하지만 향이 나쁜 세대가 생긴다. 결합형은 둘의 절충이다. 시장은 규제와 사업성 사이에서 스스로 답을 찾아갔다.</p>
      </section>

      <section class="section" id="layout-shift">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="배치도 함께 바뀌었다" data-en="The Layout Changed Too">배치도 함께 바뀌었다</h2>
        </div>
        <p class="measure muted reveal" data-ko="판상형을 줄지어 놓던 선형 배치는 2015~2021년 사실상 소멸했다(평행 1.0%, 직교 0.0%). 대신 점형 배치가 우세해졌다. 그런데 여기서 반직관적인 결과가 나온다. 점형 배치는 단지 경계에서 본 '건축물 개방지수'는 높이지만, 보행자 시점의 사진 개방도는 오히려 낮았다. 판상형을 줄 세운 단지에 비해 통경축이 만들어지지 않기 때문이다." data-en="Linear arrangements, slabs set in rows, had all but vanished by 2015–2021 (parallel 1.0%, orthogonal 0.0%), giving way to point layouts. And here a counter-intuitive result appears: point layouts raise the ‘building openness index’ measured at the estate boundary, yet lower the photographic openness seen from a pedestrian’s eye. Rows of slabs create view corridors; scattered points do not.">판상형을 줄지어 놓던 선형 배치는 2015~2021년 사실상 소멸했다(평행 1.0%, 직교 0.0%). 대신 점형 배치가 우세해졌다. 그런데 여기서 반직관적인 결과가 나온다. 점형 배치는 단지 경계에서 본 '건축물 개방지수'는 높이지만, 보행자 시점의 사진 개방도는 오히려 낮았다. 판상형을 줄 세운 단지에 비해 통경축이 만들어지지 않기 때문이다.</p>
        <p class="measure muted reveal" data-ko="숫자로 열려 있다고 눈으로 열려 있는 것은 아니다. 이 간극이 이 프로젝트가 보행자 시점에서 다시 재려는 이유다." data-en="Open on paper is not open to the eye. That gap is why this project measures again, from where the pedestrian stands.">숫자로 열려 있다고 눈으로 열려 있는 것은 아니다. 이 간극이 이 프로젝트가 보행자 시점에서 다시 재려는 이유다.</p>
      </section>
    `
  },

  /* ==================== 3-3 위압감의 측정 지표 ==================== */
  "3-3": {
    titleKo: "위압감의 측정 지표",
    titleEn: "Metrics of Oppressiveness",
    body: `
      <p class="lead reveal" data-ko="위압감을 재려면 무엇을 세어야 하는가. 이 프로젝트는 단지 바깥 보행자가 실제로 관찰할 수 있는 것만을 지표로 삼았다. 네 가지다." data-en="To measure oppressiveness, what must be counted? This project takes as its metrics only what a pedestrian outside the estate can actually observe. There are four.">위압감을 재려면 무엇을 세어야 하는가. 이 프로젝트는 단지 바깥 보행자가 실제로 관찰할 수 있는 것만을 지표로 삼았다. 네 가지다.</p>

      

      <section class="section" id="four">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="네 개의 지표" data-en="Four Metrics">네 개의 지표</h2>
        </div>
        <p class="measure muted reveal" data-ko="하나의 지표로는 부족하다. 보행자는 도로 하나와 건물 하나의 관계 속에 서 있는 것이 아니라, 여러 동이 겹쳐 만드는 입체적인 시야 속에 서 있다. 그래서 이 프로젝트는 네 개의 지표를 함께 쓴다." data-en="One metric is not enough. A pedestrian does not stand in the relation of one road to one building, but inside a three-dimensional field made by many masses overlapping. So this project uses four metrics together.">하나의 지표로는 부족하다. 보행자는 도로 하나와 건물 하나의 관계 속에 서 있는 것이 아니라, 여러 동이 겹쳐 만드는 입체적인 시야 속에 서 있다. 그래서 이 프로젝트는 네 개의 지표를 함께 쓴다.</p>

        <div class="cards reveal">
          <div class="card"><div class="card__img"><img data-fig src="assets/img/07/metric-spacing.svg" alt="동간거리" loading="lazy"></div><div class="card__body"><div class="card__name" data-ko="동간거리" data-en="Spacing">동간거리</div><div class="card__tag" data-ko="동 사이가 얼마나 열려 있는가" data-en="how open the gaps are">동 사이가 얼마나 열려 있는가</div></div></div>
          <div class="card"><div class="card__img"><img data-fig src="assets/img/07/metric-frontage.svg" alt="전면점유율" loading="lazy"></div><div class="card__body"><div class="card__name" data-ko="전면점유율" data-en="Frontage">전면점유율</div><div class="card__tag" data-ko="가로에 얼마나 접하는가" data-en="how much it meets the street">가로에 얼마나 접하는가</div></div></div>
          <div class="card"><div class="card__img"><img data-fig src="assets/img/07/metric-angle.svg" alt="조망앙각" loading="lazy"></div><div class="card__body"><div class="card__name" data-ko="조망앙각" data-en="View angle">조망앙각</div><div class="card__tag" data-ko="얼마나 올려다보는가" data-en="how much one looks up">얼마나 올려다보는가</div></div></div>
          <div class="card"><div class="card__img"><img data-fig src="assets/img/07/metric-solid.svg" alt="입체각" loading="lazy"></div><div class="card__body"><div class="card__name" data-ko="입체각" data-en="Solid angle">입체각</div><div class="card__tag" data-ko="시야를 얼마나 채우는가" data-en="how much of the view it fills">시야를 얼마나 채우는가</div></div></div>
        </div>
        <p class="measure muted reveal" data-ko="앞의 둘은 물리적 관계를, 뒤의 둘은 시각 위압을 잰다. 네 지표를 함께 봐야 하는 이유는 8장에서 드러난다. 이들은 서로 반대 방향으로 움직인다." data-en="The first two measure visual pressure; the last two, physical relation. Why all four must be read together becomes clear in Chapter 8: they move in opposite directions.">앞의 둘은 물리적 관계를, 뒤의 둘은 시각 위압을 잰다. 네 지표를 함께 봐야 하는 이유는 8장에서 드러난다. 이들은 서로 반대 방향으로 움직인다.</p>
      </section>
    `
  },

  /* ==================== 3-4 컴퓨터 비전 선행연구 ==================== */
  "3-4": {
    titleKo: "컴퓨터 비전 선행연구",
    titleEn: "Computer Vision Research",
    body: `
      <p class="lead reveal" data-ko="보행자의 시선을 자동으로 재려는 시도는 이미 있었다. 그 계보 위에 이 프로젝트가 놓인다." data-en="Attempts to compute the pedestrian’s line of sight automatically already exist. This project stands in that lineage.">보행자의 시선을 자동으로 재려는 시도는 이미 있었다. 그 계보 위에 이 프로젝트가 놓인다.</p>

      <section class="section" id="cv-prior">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="3D로 다시 쓴 입면차폐도" data-en="Facade Obstruction, Rewritten in 3D">3D로 다시 쓴 입면차폐도</h2>
        </div>
        <p class="measure muted reveal" data-ko="폐지된 입면차폐도를 되살리려는 연구는 그 지표를 3차원으로 다시 정의했다. 지표면 1.8미터 높이의 보행자 시선을 기준으로, 단지경계선에서 100미터를 더한 값의 절반을 반지름으로 하는 360도 경로 위에 1,000개 이상의 조망점을 놓고, 각 지점에서 시야가 가려지는 면적을 백분율로 산출한다. 2차원 산술을 3차원 시지각으로 옮긴 것이다." data-en="Research seeking to revive the repealed obstruction index redefined it in three dimensions: a pedestrian eye at 1.8 m, a 360-degree path at a radius of half the site boundary plus 100 m, over a thousand viewpoints along it, and at each the share of the field of view that is blocked. Two-dimensional arithmetic translated into three-dimensional perception.">폐지된 입면차폐도를 되살리려는 연구는 그 지표를 3차원으로 다시 정의했다. 지표면 1.8미터 높이의 보행자 시선을 기준으로, 단지경계선에서 100미터를 더한 값의 절반을 반지름으로 하는 360도 경로 위에 1,000개 이상의 조망점을 놓고, 각 지점에서 시야가 가려지는 면적을 백분율로 산출한다. 2차원 산술을 3차원 시지각으로 옮긴 것이다.</p>
        <p class="measure muted reveal" data-ko="이 프로젝트가 1,294개 조망점을 단지 경계 바깥 네 개 링에 배치하는 방식은 이 선행연구와 매우 가깝다. 다른 점은 하나다. 선행연구가 기존 단지를 평가했다면, 이 프로젝트는 아직 짓지 않은 96개 배치안을 평가한다. 심의의 도구가 아니라 설계의 도구로 쓰려는 것이다." data-en="This project’s 1,294 viewpoints, set on four rings outside the site boundary, sit very close to that precedent. One thing differs: where the earlier work assessed existing estates, this one assesses 96 layouts not yet built. It is meant as a tool of design, not only of review.">이 프로젝트가 1,294개 조망점을 단지 경계 바깥 네 개 링에 배치하는 방식은 이 선행연구와 매우 가깝다. 다른 점은 하나다. 선행연구가 기존 단지를 평가했다면, 이 프로젝트는 아직 짓지 않은 96개 배치안을 평가한다. 심의의 도구가 아니라 설계의 도구로 쓰려는 것이다.</p>
        <p class="measure muted reveal" data-ko="그 연구가 서울시 대규모 단지 9곳을 측정한 결과도 참고할 만하다. 3D 입면차폐도 평균은 판상형 57.0퍼센트, 탑상형 60.4퍼센트, 혼합형 60.3퍼센트로, 개방성을 제도로 관리해 온 캐나다 사례(46.7퍼센트)보다 10~14퍼센트포인트 높았다." data-en="Its measurements of nine large Seoul estates are worth noting too: 3D obstruction averaged 57.0% for slabs, 60.4% for towers, 60.3% for mixed, ten to fourteen points higher than a Canadian case (46.7%) where openness has long been managed by rule.">그 연구가 서울시 대규모 단지 9곳을 측정한 결과도 참고할 만하다. 3D 입면차폐도 평균은 판상형 57.0퍼센트, 탑상형 60.4퍼센트, 혼합형 60.3퍼센트로, 개방성을 제도로 관리해 온 캐나다 사례(46.7퍼센트)보다 10~14퍼센트포인트 높았다.</p>
      </section>

      <section class="section" id="seg-prior">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="사진에서 숫자로" data-en="From Photograph to Number">사진에서 숫자로</h2>
        </div>
        <p class="measure muted reveal" data-ko="다른 갈래는 사진에서 출발한다. 시맨틱 세그멘테이션은 사진의 모든 픽셀에 의미를 붙인다. 이 픽셀은 건물, 저 픽셀은 하늘. 그러면 화면에서 건물이 차지하는 비율, 하늘이 차지하는 비율을 셀 수 있다. 5장에서 21개 단지의 129장 사진에 적용한 방법이 이것이다." data-en="Another line begins from the photograph. Semantic segmentation attaches a meaning to every pixel: this one building, that one sky. The share of the frame each occupies can then be counted. This is the method applied in Chapter 5 to 129 photographs of 21 complexes.">다른 갈래는 사진에서 출발한다. 시맨틱 세그멘테이션은 사진의 모든 픽셀에 의미를 붙인다. 이 픽셀은 건물, 저 픽셀은 하늘. 그러면 화면에서 건물이 차지하는 비율, 하늘이 차지하는 비율을 셀 수 있다. 5장에서 21개 단지의 129장 사진에 적용한 방법이 이것이다.</p>
        <p class="measure muted reveal" data-ko="두 갈래는 서로를 필요로 한다. 사진은 실제로 존재하는 단지만 잴 수 있고, 3D 시뮬레이션은 아직 짓지 않은 배치안을 잴 수 있다. 이 프로젝트는 앞의 것으로 무엇이 위압감을 만드는지 찾아내고(4~6장), 뒤의 것으로 그 답을 96번 시험한다(7~8장)." data-en="The two need each other. Photography can measure only estates that exist; 3D simulation can measure layouts not yet built. This project uses the first to find what produces oppressiveness (Chapters 4–6), and the second to test that answer ninety-six times (Chapters 7–8).">두 갈래는 서로를 필요로 한다. 사진은 실제로 존재하는 단지만 잴 수 있고, 3D 시뮬레이션은 아직 짓지 않은 배치안을 잴 수 있다. 이 프로젝트는 앞의 것으로 무엇이 위압감을 만드는지 찾아내고(4~6장), 뒤의 것으로 그 답을 96번 시험한다(7~8장).</p>
      </section>
    `
  },

  /* ==================== 10-1 데이터 ==================== */
  "10-1": {
    titleKo: "데이터",
    titleEn: "Data",
    body: `
      <p class="lead reveal" data-ko="96개 배치안의 산출값 전체. 7장의 탐색기가 읽는 것과 같은 자료다. 건폐율이나 주동 유형을 골라 원하는 배치안만 꺼내 볼 수 있다." data-en="The full computed values for all 96 layouts, the same data the explorer in Chapter 7 reads. Pick a coverage ratio or a mass type to pull out just the layouts you want.">96개 배치안의 산출값 전체. 7장의 탐색기가 읽는 것과 같은 자료다. 건폐율이나 주동 유형을 골라 원하는 배치안만 꺼내 볼 수 있다.</p>
      <div class="tbl-wrap reveal" id="allData" data-d="1"></div>
      <p class="readout reveal"><span data-ko="용적률 250% 고정. 위압 점수는 통과거리를 7m=100점·200m=0점으로 정규화한 값이다. 클수록 위압이 가까이서 해소된다." data-en="FAR fixed at 250%. Relief scores normalise the pass-through distance to 7 m = 100 and 200 m = 0. Higher means oppression clears sooner.">용적률 250% 고정. 위압 점수는 통과거리를 7m=100점·200m=0점으로 정규화한 값이다. 클수록 위압이 가까이서 해소된다.</span></p>
    `
  },

  /* ==================== 10-2 용어 정리 ==================== */
  "10-2": {
    titleKo: "용어 정리",
    titleEn: "Glossary",
    body: `
      <div class="tbl-wrap reveal">
        <table class="data">
          <thead><tr>
            <th data-ko="용어" data-en="Term">용어</th>
            <th data-ko="뜻" data-en="Definition">뜻</th>
          </tr></thead>
          <tbody>
            <tr><td data-ko="건폐율" data-en="Coverage (BCR)">건폐율</td><td data-ko="대지면적에 대한 건축면적의 비율. 대지를 위에서 내려다볼 때 건물이 덮는 비율이다." data-en="Building footprint as a share of site area. How much of the site the buildings cover, seen from above.">대지면적에 대한 건축면적의 비율. 대지를 위에서 내려다볼 때 건물이 덮는 비율이다.</td></tr>
            <tr><td data-ko="용적률" data-en="Floor area ratio (FAR)">용적률</td><td data-ko="대지면적에 대한 연면적의 비율. 대지 위에 얼마나 많은 바닥을 쌓았는지를 뜻한다." data-en="Gross floor area as a share of site area. How much floor is stacked on the site.">대지면적에 대한 연면적의 비율. 대지 위에 얼마나 많은 바닥을 쌓았는지를 뜻한다.</td></tr>
            <tr><td data-ko="인동간격" data-en="Inter-building spacing">인동간격</td><td data-ko="마주 보는 주동 사이의 최소 거리. 서울시는 채광창 방향으로 건물 높이의 0.5배, 최소 10미터를 요구한다." data-en="The minimum distance between facing buildings. Seoul requires 0.5× the building height toward a daylight window, with a 10 m minimum.">마주 보는 주동 사이의 최소 거리. 서울시는 채광창 방향으로 건물 높이의 0.5배, 최소 10미터를 요구한다.</td></tr>
            <tr><td data-ko="조망앙각" data-en="View angle">조망앙각</td><td data-ko="보행자가 건물 꼭대기를 보기 위해 고개를 들어야 하는 각도. 클수록 위압적이다." data-en="The angle a pedestrian must raise their head to see the top of a building. The larger, the more oppressive.">보행자가 건물 꼭대기를 보기 위해 고개를 들어야 하는 각도. 클수록 위압적이다.</td></tr>
            <tr><td data-ko="입체각" data-en="Solid angle">입체각</td><td data-ko="보행자의 시야 전체에서 건물이 차지하는 입체적 비율. 시야를 얼마나 채우는가를 뜻한다." data-en="The share of a pedestrian’s full field of view occupied by building. How much of the view it fills.">보행자의 시야 전체에서 건물이 차지하는 입체적 비율. 시야를 얼마나 채우는가를 뜻한다.</td></tr>
            <tr><td data-ko="위압 점수" data-en="Relief score">위압 점수</td><td data-ko="위압이 해소되는 통과거리를 7미터=100점, 200미터=0점으로 정규화한 값. 클수록 가까이서 위압이 풀린다." data-en="The pass-through distance at which oppression clears, normalised as 7 m = 100 and 200 m = 0. Higher means it clears sooner.">위압이 해소되는 통과거리를 7미터=100점, 200미터=0점으로 정규화한 값. 클수록 가까이서 위압이 풀린다.</td></tr>
            <tr><td data-ko="전면점유율" data-en="Frontage">전면점유율</td><td data-ko="단지 경계 가로변에서 건물이 실제로 접하는 길이의 비율. 도시 가로에 얼마나 얼굴을 내미는가를 뜻한다." data-en="The share of the estate’s street edge actually met by building. How far it faces the city street.">단지 경계 가로변에서 건물이 실제로 접하는 길이의 비율. 도시 가로에 얼마나 얼굴을 내미는가를 뜻한다.</td></tr>
            <tr><td data-ko="입면차폐도" data-en="Facade obstruction">입면차폐도</td><td data-ko="조망축 방향으로 투영한 입면적을 단지 최장길이로 나눈 값. 1999년 서울시 건축심의 기준으로 도입되어 2008년 폐지되었다." data-en="Facade area projected along the view axis, divided by the longest site dimension. Adopted into Seoul’s design review in 1999; repealed in 2008.">조망축 방향으로 투영한 입면적을 단지 최장길이로 나눈 값. 1999년 서울시 건축심의 기준으로 도입되어 2008년 폐지되었다.</td></tr>
            <tr><td data-ko="시맨틱 세그멘테이션" data-en="Semantic segmentation">시맨틱 세그멘테이션</td><td data-ko="사진의 모든 픽셀에 '건물·하늘·나무' 같은 의미를 붙이는 컴퓨터 비전 기법. 화면에서 각 요소가 차지하는 비율을 셀 수 있게 한다." data-en="A computer vision method that labels every pixel of a photograph as building, sky, or tree, making it possible to count each element’s share of the frame.">사진의 모든 픽셀에 '건물·하늘·나무' 같은 의미를 붙이는 컴퓨터 비전 기법. 화면에서 각 요소가 차지하는 비율을 셀 수 있게 한다.</td></tr>
            <tr><td data-ko="천공률 (SVF)" data-en="Sky view factor">천공률 (SVF)</td><td data-ko="시야에서 하늘이 차지하는 비율. 열린 정도를 재는 가장 단순한 지표다." data-en="The share of sky in the field of view. The simplest measure of openness.">시야에서 하늘이 차지하는 비율. 열린 정도를 재는 가장 단순한 지표다.</td></tr>
            
            <tr><td data-ko="판상형 / 탑상형" data-en="Slab / tower">판상형 / 탑상형</td><td data-ko="판상형은 일자로 긴 주동, 탑상형은 정방형에 가까운 탑 모양 주동. 서울 재건축 단지에서 판상형은 2000년대 74%에서 2010년대 후반 29%로 줄었다." data-en="A slab is a long straight block; a tower is closer to square in plan. In Seoul’s redevelopment estates the slab fell from 74% in the early 2000s to 29% by the late 2010s.">판상형은 일자로 긴 주동, 탑상형은 정방형에 가까운 탑 모양 주동. 서울 재건축 단지에서 판상형은 2000년대 74%에서 2010년대 후반 29%로 줄었다.</td></tr>
          </tbody>
        </table>
      </div>
    `
  },

  /* ==================== 10-3 참고문헌 ==================== */
  "10-3": {
    titleKo: "참고문헌",
    titleEn: "References",
    body: `
      <section class="section" id="ref-form">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="주동 형태·배치" data-en="Building Form and Layout">주동 형태·배치</h2>
        </div>
        <ul class="reflist reveal">
          <li>황세원 (2022). 서울시 재개발 및 재건축 아파트단지의 주동형태와 배치계획 변화에 따른 차폐도 및 보행경관에 대한 공공성 연구.</li>
          <li>손정우·황세원 (2025). 아파트 단지의 주동 형태와 배치계획에 따른 내·외부 환경 분석 — 최근 10년간 건설된 단지를 중심으로.</li>
          <li>이상진·박소현 (2019). 부산 아파트 단지 배치형태 변화의 요인과 과정에 관한 연구.</li>
          <li>이상진·박소현 (2019). 부산 아파트 단지의 주동 평면형태의 변화 특성에 관한 연구.</li>
          <li>김종도 외 (2010). 아파트 주동평면형태의 특성 및 개방성에 관한 연구.</li>
          <li>장인선·박상민 (2024). 고층아파트와 초고층아파트의 단지배치와 주동형태 비교분석.</li>
          <li>장현주·이정재 (2022). APT 주동 형태 및 배치유형에 따른 일조·조망 분석.</li>
          <li>이석문·함정도 (2005). 공동주택 주거동 배치특성 및 평가방법에 관한 연구. 지역사회발전학회논문집 30(2), 통권 60호.</li>
          <li>성우제·정요한 (2020). 아파트 최적 배치 자동화: Rhino Grasshopper를 활용한 parametric model의 최적화를 중심으로. Journal of KIBIM 10(3), 22–33.</li>
        </ul>
      </section>

      <section class="section" id="ref-facade">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="입면·경관·차폐" data-en="Facade, Landscape, Obstruction">입면·경관·차폐</h2>
        </div>
        <ul class="reflist reveal">
          <li>입면 차폐도 분석 자동화를 통한 주거단지 개방성 비교분석 연구 — 서울시 유형별 대규모 아파트 단지를 중심으로.</li>
          <li>공동주택의 입면 특화계획에 관한 연구.</li>
          <li>광주광역시 공동주택 경관 디자인 구성 요소에 따른 경관심의 평가 사례 연구.</li>
          <li>도시경관과 공동주택 입면색채 변화에 관한 연구.</li>
          <li>가로변 공동주택 경관의 인지특성에 관한 연구 — 남악신도시 공동주택을 대상으로.</li>
          <li>이정호·김종하·김상희 (2016). 가로 공간 이미지의 시각적 인지과정에 나타난 주시특성 분석. 대한건축학회논문집 32(5).</li>
          <li>유승재·하정원·김혜준·기동환·이수기 (2021). 서울시 가로경관 이미지에 대한 주관적 인지에 영향을 미치는 가로환경 요인 분석: Deep Learning 의미론적 분할과 YOLOv3 객체 검출기법을 적용하여. 국토계획 56(2), 79–93.</li>
        </ul>
      </section>

      <section class="section" id="ref-street">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="가로공간·공공성" data-en="Street and Public Realm">가로공간·공공성</h2>
        </div>
        <ul class="reflist reveal">
          <li>문영은·권영상 (2025). 한강변 재건축단지 외부 공공공간의 공공성 증진을 위한 단지계획 방안 연구 — 반포아파트지구를 중심으로.</li>
          <li>김선호·양승우 (2021). 공간구문론을 적용한 공동주택 생활가로공간의 설계 방안 연구. 한국도시설계학회지 22(1).</li>
          <li>정동섭 (2010). 공간위계를 고려한 공동주택 단지규모별 생활가로의 계획특성 연구.</li>
          <li>김한수 외 (2024). 커뮤니티 시설을 중심으로 본 공동주택의 폐쇄성에 관한 연구.</li>
          <li>문자영 외 (2017). 신도시 공동주택 부대복리시설의 배치특성에 관한 연구 — 제2기 신도시 아파트를 중심으로.</li>
          <li>우동주 (2010). 탑상형과 연도형 배치비교를 통한 가로형 공동주택 설계방안. 대한건축학회연합논문집 12(2).</li>
          <li>City of Toronto (2013). <em>Tall Building Design Guidelines</em>.</li>
          <li>Tomajian &amp; Gyergyák (2024). Urban Housing Typologies Through Modern History. <em>Ybl Journal of Built Environment</em> 9(1).</li>
        </ul>
      </section>

      <section class="section" id="ref-perception">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="시지각·심리" data-en="Perception and Psychology">시지각·심리</h2>
        </div>
        <ul class="reflist reveal">
          <li>김민재 외 (2021). 휴먼스케일 인지관점의 도시재생설계 방향 — 오감 기반의 도시재생설계, 김해시 사례를 중심으로. 한국도시설계학회지 22(1).</li>
          <li>장자흠·조택연 (2025). 시각적 무게중심의 편이가 건축의 미적 판단과 정서적 경험에 미치는 영향. 한국공간디자인학회논문집 20(8).</li>
          <li>비대칭 형태 건축의 시각적 불균형 및 감정에 미치는 영향 분석 연구 (2025). 한국공간디자인학회논문집 20(3).</li>
          <li>Gehl, J. (2010). <em>Cities for People</em>.</li>
          <li>Gehl, J. (1993). 옥외 공간의 생활과 디자인. 화영사.</li>
          <li>Maertens, H. (1884). <em>Der Optische-Maassstab in den bildenden Künsten</em>. 조망앙각 27도 기준의 출처.</li>
          <li>Takei, H. &amp; Oohara, M. (1977). 입체각 기준의 출처. 형상계수 8을 시야 점유율 7.1퍼센트로 환산해 썼다.</li>
        </ul>
      </section>

      <section class="section" id="ref-law">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="법령" data-en="Statutes">법령</h2>
        </div>
        <ul class="reflist reveal">
          <li>건축법 제55조 (건폐율) · 제56조 (용적률) · 제58조 (대지 안의 공지) · 제61조 (일조 등의 확보).</li>
          <li>건축법 시행령 제86조 (일조 등의 확보를 위한 건축물의 높이 제한).</li>
          <li>건축법 제60조 제3항 (도로사선제한) — 2015. 5. 18. 삭제.</li>
          <li>국토의 계획 및 이용에 관한 법률 시행령 제85조 (용도지역별 용적률).</li>
          <li>서울특별시 건축 조례 (2022. 9. 개정 — 인동간격 0.5배, 최소 10m).</li>
          <li>서울특별시 도시계획 조례 (제3종 일반주거지역 용적률 250%).</li>
          <li>2030 서울도시기본계획 (2014) · 2040 서울도시기본계획 (2023) — 35층 규제의 도입과 폐지.</li>
        </ul>
      </section>
    `
  },

  /* ==================== 10-4 이미지 크레딧 ==================== */
  "10-4": {
    titleKo: "이미지 크레딧",
    titleEn: "Image Credits",
    body: `
      <div class="tbl-wrap reveal">
        <table class="data">
          <thead><tr>
            <th data-ko="자료" data-en="Material">자료</th>
            <th data-ko="출처" data-en="Source">출처</th>
          </tr></thead>
          <tbody>
            <tr><td data-ko="21개 단지 보행자 시점 사진 129장" data-en="129 pedestrian-eye photographs of 21 complexes">21개 단지 보행자 시점 사진 129장</td><td data-ko="직접 촬영" data-en="Photographed by the author (2026)">직접 촬영</td></tr>
            <tr><td data-ko="세그멘테이션 마스크·오버레이" data-en="Segmentation masks and overlays">세그멘테이션 마스크·오버레이</td><td data-ko="Mask2Former (Cityscapes) 로 직접 생성" data-en="Generated with Mask2Former (Cityscapes)">Mask2Former (Cityscapes) 로 직접 생성</td></tr>
            <tr><td data-ko="96개 배치안 아이소메트릭" data-en="96 layout isometrics">96개 배치안 아이소메트릭</td><td data-ko="Rhino + Grasshopper 로 직접 생성·렌더" data-en="Generated and rendered in Rhino + Grasshopper">Rhino + Grasshopper 로 직접 생성·렌더</td></tr>
            <tr><td data-ko="보행자 시점 뷰 384장 (7·25·100·200m)" data-en="384 pedestrian views (7 · 25 · 100 · 200 m)">보행자 시점 뷰 384장 (7·25·100·200m)</td><td data-ko="Rhino Raytraced 로 직접 렌더" data-en="Rendered in Rhino (Raytraced)">Rhino Raytraced 로 직접 렌더</td></tr>
            <tr><td data-ko="지표 다이어그램 (동간거리·전면점유율·조망앙각·입체각)" data-en="Metric diagrams">지표 다이어그램</td><td data-ko="직접 작성" data-en="Drawn by the author">직접 작성</td></tr>
            <tr><td data-ko="대상지 지도·배치도" data-en="Site maps and plans">대상지 지도·배치도</td><td data-ko="직접 작성" data-en="Drawn by the author (base data: MOLIT spatial information)">직접 작성</td></tr>
            <tr><td data-ko="표지 스카이라인 애니메이션" data-en="Cover skyline animation">표지 스카이라인 애니메이션</td><td data-ko="직접 작성" data-en="Written by the author (HTML Canvas)">직접 작성</td></tr>
          </tbody>
        </table>
      </div>
          `
  },

  /* ==================== 1장 아파트와 도시 보행자 (세부 구분 없음) ==================== */
  "pedestrian": {
    titleKo: "아파트와 도시 보행자",
    titleEn: "Apartments and the Urban Pedestrian",
    body: `
      <p class="lead reveal" data-ko="한국인의 절반 이상이 아파트에 산다. 그러나 아파트를 가장 자주 마주치는 사람은 그 안에 사는 사람이 아니다. 그 앞을 지나가는 사람이다." data-en="More than half of all Koreans live in apartments. Yet the person who meets the apartment most often is not the one who lives inside it. It is the one walking past.">한국인의 절반 이상이 아파트에 산다. 그러나 아파트를 가장 자주 마주치는 사람은 그 안에 사는 사람이 아니다. 그 앞을 지나가는 사람이다.</p>

      <section class="section" id="two-eyes">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="두 개의 시선" data-en="Two Gazes">두 개의 시선</h2>
        </div>
        <p class="measure muted reveal" data-ko="아파트에는 두 종류의 눈이 있다. 하나는 안에서 밖을 보는 눈이다. 이 눈은 남향과 조망, 채광과 사생활을 원한다. 아파트 설계의 거의 모든 결정이 이 눈을 위해 내려진다. 법도 그렇다. 인동간격이든 일조권이든, 지키려는 것은 입주민의 거주성이다." data-en="An apartment has two kinds of eye. One looks outward from within: it wants a southern aspect, a view, daylight, privacy. Nearly every decision in apartment design is made for this eye. So is the law. Spacing, sunlight rights: what they protect is the habitability of the resident.">아파트에는 두 종류의 눈이 있다. 하나는 안에서 밖을 보는 눈이다. 이 눈은 남향과 조망, 채광과 사생활을 원한다. 아파트 설계의 거의 모든 결정이 이 눈을 위해 내려진다. 법도 그렇다. 인동간격이든 일조권이든, 지키려는 것은 입주민의 거주성이다.</p>
        <p class="measure muted reveal" data-ko="다른 하나는 밖에서 안을 보는 눈이다. 이 눈은 아무것도 요구하지 못한다. 단지 앞 보도를 걷는 사람, 버스를 기다리는 사람, 옆 동네에 사는 사람. 그들이 매일 마주치는 것은 아파트의 뒷면이고, 담장이고, 옹벽이고, 45층짜리 벽이다. 그들을 위한 규정은 어디에도 없다." data-en="The other looks inward from outside. This eye can demand nothing. The person on the pavement in front, the person waiting for a bus, the person from the next neighbourhood over. What they meet each day is the back of the estate: the wall, the retaining wall, the forty-five-storey slab. No rule anywhere exists for them.">다른 하나는 밖에서 안을 보는 눈이다. 이 눈은 아무것도 요구하지 못한다. 단지 앞 보도를 걷는 사람, 버스를 기다리는 사람, 옆 동네에 사는 사람. 그들이 매일 마주치는 것은 아파트의 뒷면이고, 담장이고, 옹벽이고, 45층짜리 벽이다. 그들을 위한 규정은 어디에도 없다.</p>
        <p class="measure muted reveal" data-ko="이 비대칭이 이 프로젝트의 출발점이다. 아파트가 도시에 등을 돌리는 것은 설계자의 악의가 아니다. 아무도 그 등을 보라고 요구하지 않았기 때문이다." data-en="This asymmetry is where the project begins. That apartments turn their backs on the city is not the designer’s malice. It is that no one ever asked them to face it.">이 비대칭이 이 프로젝트의 출발점이다. 아파트가 도시에 등을 돌리는 것은 설계자의 악의가 아니다. 아무도 그 등을 보라고 요구하지 않았기 때문이다.</p>

        <figure class="figure figure--wide reveal">
          <div class="figure__ph">
            <img data-fig src="assets/img/01/two-views.webp" alt="담장과 CCTV 너머로 솟은 아파트를 마주한 보행자" loading="lazy">
            <span data-ko="도판 · 담장 너머의 아파트" data-en="Figure · the apartment beyond the wall">도판 · 담장 너머의 아파트</span>
          </div>
          <figcaption class="figure__cap"><span data-ko="밖에서 본 아파트. 보행자가 매일 마주하는 것은 담장과 CCTV, 출입금지 표지, 그리고 그 위로 솟은 매스다" data-en="The apartment from outside. What a pedestrian meets each day is the wall, the cameras, the no-entry sign, and the mass rising above them">밖에서 본 아파트. 보행자가 매일 마주하는 것은 담장과 CCTV, 출입금지 표지, 그리고 그 위로 솟은 매스다</span></figcaption>
        </figure>
      </section>

      <section class="section" id="oppression">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="위압감이라는 말" data-en="A Word: Oppressiveness">위압감이라는 말</h2>
        </div>
        <p class="measure muted reveal" data-ko="도시경관 분야에서 아파트 단지가 오래도록 지적받아온 문제는 네 가지로 정리된다. 획일경관, 차폐경관, 위압경관, 돌출경관. 이 가운데 위압경관은 가장 자주 언급되면서도 가장 측정되지 않은 항목이다. 느낌이기 때문이다." data-en="Four problems have long been named of apartment estates in the urban landscape: uniformity, obstruction, oppression, and protrusion. Of these, oppression is the most often cited and the least measured, because it is a feeling.">도시경관 분야에서 아파트 단지가 오래도록 지적받아온 문제는 네 가지로 정리된다. 획일경관, 차폐경관, 위압경관, 돌출경관. 이 가운데 위압경관은 가장 자주 언급되면서도 가장 측정되지 않은 항목이다. 느낌이기 때문이다.</p>
        <p class="measure muted reveal" data-ko="그러나 느낌이라고 해서 측정할 수 없는 것은 아니다. 신경미학 연구는 복잡하거나 비대칭적인 건축 형태 앞에서 인간의 편도체가 활성화되어 경계심과 불안이 유발된다고 보고한다. 사람들은 그런 공간에 오래 머물기를 꺼리고 빠르게 떠난다. 위압감은 미학적 취향이 아니라 생리적 방어 반응에 가깝다. 그렇다면 그것을 재는 방법도 있을 것이다." data-en="But a feeling is not therefore unmeasurable. Neuroaesthetic research reports that before complex or asymmetric architectural form the amygdala activates, raising vigilance and anxiety; people are reluctant to linger in such spaces and leave them quickly. Oppressiveness is less an aesthetic taste than a physiological defence. If so, there must be a way to measure it.">그러나 느낌이라고 해서 측정할 수 없는 것은 아니다. 신경미학 연구는 복잡하거나 비대칭적인 건축 형태 앞에서 인간의 편도체가 활성화되어 경계심과 불안이 유발된다고 보고한다. 사람들은 그런 공간에 오래 머물기를 꺼리고 빠르게 떠난다. 위압감은 미학적 취향이 아니라 생리적 방어 반응에 가깝다. 그렇다면 그것을 재는 방법도 있을 것이다.</p>
      </section>

      <section class="section" id="questions">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="세 가지 질문" data-en="Three Questions">세 가지 질문</h2>
        </div>
        <div class="stepper stepper--3 reveal" data-d="1">
          <div class="step">
            <span class="step__n">01</span>
            <h3 class="step__t" data-ko="어떻게 잴 것인가" data-en="How to measure">어떻게 잴 것인가</h3>
            <p class="step__d" data-ko="위압감을 수치화하는 방법. 4·5장" data-en="Turning oppressiveness into a number. Chapters 4–5">위압감을 수치화하는 방법. 4·5장</p>
          </div>
          <div class="step">
            <span class="step__n">02</span>
            <h3 class="step__t" data-ko="무엇이 좌우하는가" data-en="What governs it">무엇이 좌우하는가</h3>
            <p class="step__d" data-ko="어떤 물리적 속성이 위압감을 만드는가. 6장" data-en="Which physical properties produce it. Chapter 6">어떤 물리적 속성이 위압감을 만드는가. 6장</p>
          </div>
          <div class="step">
            <span class="step__n">03</span>
            <h3 class="step__t" data-ko="무엇을 지을 것인가" data-en="What to build">무엇을 지을 것인가</h3>
            <p class="step__d" data-ko="그렇다면 어떻게 배치해야 하는가. 7·8장" data-en="And so, how should it be laid out. Chapters 7–8">그렇다면 어떻게 배치해야 하는가. 7·8장</p>
          </div>
        </div>
      </section>
    `
  },

  /* ==================== 9장 결론 (세부 구분 없음) ==================== */
  "conclusion": {
    titleKo: "공공을 배려한 아파트 단지를 향하여",
    titleEn: "Toward Publicly Considerate Housing",
    body: `
      <p class="lead reveal" data-ko="이 프로젝트가 도달한 결론은 하나의 숫자가 아니라 하나의 방향이다. 위압감은 잴 수 있고, 재고 나면 설계할 수 있다." data-en="What this project arrives at is not a number but a direction. Oppressiveness can be measured, and once measured, it can be designed for.">이 프로젝트가 도달한 결론은 하나의 숫자가 아니라 하나의 방향이다. 위압감은 잴 수 있고, 재고 나면 설계할 수 있다.</p>

      <section class="section" id="found">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="확인한 것" data-en="What Was Found">확인한 것</h2>
        </div>
        <p class="measure muted reveal" data-ko="첫째, 위압감은 상당 부분 물리량으로 환원된다. 21개 단지에서 용적률·최고층·건폐율은 위압감을 키웠고, 동수와 세대수는 오히려 줄였다. 네 지표를 묶은 모형이 위압감 변동의 약 60퍼센트를 설명한다." data-en="First, oppressiveness reduces in large part to physical quantity. Across 21 complexes, floor area ratio, top floor, and coverage raised it; building and household counts lowered it. A model of four metrics explains about 60% of the variance.">첫째, 위압감은 상당 부분 물리량으로 환원된다. 21개 단지에서 용적률·최고층·건폐율은 위압감을 키웠고, 동수와 세대수는 오히려 줄였다. 네 지표를 묶은 모형이 위압감 변동의 약 60퍼센트를 설명한다.</p>
        <p class="measure muted reveal" data-ko="둘째, 저층화가 답은 아니다. 96개 배치안에서 건폐율을 올려 층수를 낮추면 시각 위압은 풀리지만 인동간격이 무너진다. 두 힘이 교차하는 건폐율 30퍼센트 안팎이 절충점으로 나타났다." data-en="Second, going low is not the answer. Across 96 layouts, raising coverage to lower the floors relieves visual pressure but collapses the spacing. The two forces cross at a middle coverage of around 30%.">둘째, 저층화가 답은 아니다. 96개 배치안에서 건폐율을 올려 층수를 낮추면 시각 위압은 풀리지만 인동간격이 무너진다. 두 힘이 교차하는 건폐율 30퍼센트 안팎이 절충점으로 나타났다.</p>
        <p class="measure muted reveal" data-ko="셋째, 매스를 결합하면 그 절충점을 더 올릴 수 있다. 서로 다른 기하를 이어 붙인 결합형 매스는 마주 보는 주동 쌍 자체를 줄여, 균형점을 건폐율 40에서 50퍼센트까지 끌어올린다. 더 높은 건폐율을 담으면서도 인동을 지킬 수 있다는 뜻이다." data-en="Third, combining masses lifts that compromise higher. A mass that joins different geometries cuts the number of facing pairs, raising the balance point to 40–50% coverage, carrying more coverage while spacing still holds.">셋째, 매스를 결합하면 그 절충점을 더 올릴 수 있다. 서로 다른 기하를 이어 붙인 결합형 매스는 마주 보는 주동 쌍 자체를 줄여, 균형점을 건폐율 40에서 50퍼센트까지 끌어올린다. 더 높은 건폐율을 담으면서도 인동을 지킬 수 있다는 뜻이다.</p>
      </section>

      <section class="section" id="gap">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="보행자를 위한 기준이 없다" data-en="No Standard for the Pedestrian">보행자를 위한 기준이 없다</h2>
        </div>
        <p class="measure muted reveal" data-ko="96개 배치안 가운데 전면점유율을 충족한 것은 네 개뿐이었다. 아파트 단지가 도시 가로에 접하는 방식이 얼마나 빈약한지를 보여주는 숫자다. 그러나 이것은 설계자의 실패가 아니다. 아무도 그것을 요구하지 않았기 때문에 아무도 하지 않았을 뿐이다." data-en="Of 96 layouts, only four met the frontage requirement, a number that measures how thinly the estate touches the city street. But this is not a failure of designers. No one asked for it, so no one did it.">96개 배치안 가운데 전면점유율을 충족한 것은 네 개뿐이었다. 아파트 단지가 도시 가로에 접하는 방식이 얼마나 빈약한지를 보여주는 숫자다. 그러나 이것은 설계자의 실패가 아니다. 아무도 그것을 요구하지 않았기 때문에 아무도 하지 않았을 뿐이다.</p>
        <p class="measure muted reveal" data-ko="2008년 입면차폐도가 폐지된 이후, 서울에는 건축물의 개방성을 재는 자가 없다. 공동주택 가이드라인이 개방감에 대해 제시하는 유일한 숫자는 '측벽 사이 5미터 이격'이다. 그 사이 2022년에는 인동간격마저 0.8배에서 0.5배로 완화되었다." data-en="Since facade obstruction was repealed in 2008, Seoul has held no instrument for measuring openness. The only number its apartment guidelines offer is ‘5 m between side walls’. Meanwhile, in 2022, even the spacing requirement was eased from 0.8 to 0.5 times the height.">2008년 입면차폐도가 폐지된 이후, 서울에는 건축물의 개방성을 재는 자가 없다. 공동주택 가이드라인이 개방감에 대해 제시하는 유일한 숫자는 '측벽 사이 5미터 이격'이다. 그 사이 2022년에는 인동간격마저 0.8배에서 0.5배로 완화되었다.</p>
      </section>

      <section class="section" id="proposal">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="해외에는 보행자를 위한 기준이 있다" data-en="Abroad, the Pedestrian Is Written In">해외에는 보행자를 위한 기준이 있다</h2>
        </div>
        <p class="measure muted reveal" data-ko="토론토의 고층건물 설계지침은 보행자를 위한 기준을 숫자로 적는다. 저층부 높이는 도로 폭의 80퍼센트 이내, 최대 24미터. 그 이상 올리려면 3미터 후퇴. 가로 전면의 60퍼센트 이상은 활성 용도. 출입구는 7~10미터 간격. 1층 층고 최소 4.5미터. 보도는 최소 6미터." data-en="Toronto’s tall building guidelines write their standards as numbers. Base building height within 80% of the street right-of-way, 24 m maximum. Above that, a 3 m stepback. At least 60% of the frontage in active use. Entrances every 7–10 m. First floor at least 4.5 m. Sidewalk at least 6 m.">토론토의 고층건물 설계지침은 보행자를 위한 기준을 숫자로 적는다. 저층부 높이는 도로 폭의 80퍼센트 이내, 최대 24미터. 그 이상 올리려면 3미터 후퇴. 가로 전면의 60퍼센트 이상은 활성 용도. 출입구는 7~10미터 간격. 1층 층고 최소 4.5미터. 보도는 최소 6미터.</p>
        <p class="measure muted reveal" data-ko="그리고 그 이유를 명시한다. 저층부가 보행 환경을 압도하지 않도록. 타워가 저층부 없이 지면에 바로 닿으면 '억압적인 보행자 스케일 감각'이 생기므로. 위압감이라는 말이 규범 문서 안에 들어 있다." data-en="And they state the reason. So that the base does not overwhelm the pedestrian environment. Because a tower meeting the ground directly creates ‘an oppressive sense of pedestrian scale’. The word is written into the code itself.">그리고 그 이유를 명시한다. 저층부가 보행 환경을 압도하지 않도록. 타워가 저층부 없이 지면에 바로 닿으면 '억압적인 보행자 스케일 감각'이 생기므로. 위압감이라는 말이 규범 문서 안에 들어 있다.</p>
        <p class="measure muted reveal" data-ko="이 프로젝트가 만든 네 개의 지표, 곧 조망앙각과 입체각과 전면점유율과 동간거리는 그런 문장을 쓰기 위한 도구다. 1,294개 조망점에서 자동으로 산출되므로 심의 단계에서 배치안을 비교하는 데 쓸 수 있다. 완성된 제도는 아니지만, 폐지된 입면차폐도가 하지 못했던 일, 보행자의 시선을 기준으로 삼는 일을 시작할 수는 있다." data-en="The four metrics this project builds (view angle, solid angle, frontage, and spacing) are tools for writing such sentences. Computed automatically from 1,294 viewpoints, they can be used at review stage to compare layouts. They are not a finished instrument, but they can begin the thing the repealed rule never did: taking the pedestrian’s line of sight as the measure.">이 프로젝트가 만든 네 개의 지표, 곧 조망앙각과 입체각과 전면점유율과 동간거리는 그런 문장을 쓰기 위한 도구다. 1,294개 조망점에서 자동으로 산출되므로 심의 단계에서 배치안을 비교하는 데 쓸 수 있다. 완성된 제도는 아니지만, 폐지된 입면차폐도가 하지 못했던 일, 보행자의 시선을 기준으로 삼는 일을 시작할 수는 있다.</p>

                <p class="readout reveal"><span data-ko="같은 대지, 다른 매스. 단순한 판상형은 건폐율 30퍼센트에서 멈춰야 하지만, 여러 동을 하나로 묶은 결합형은 건폐율 45퍼센트까지 올리고도 인동간격을 지킨다. 용적률을 포기하지 않고도 가로를 지킬 방법이 있다는 뜻이다." data-en="One site, two massings. A simple slab must stop at 30% coverage; a combined mass, tying several buildings into one, carries coverage to 45% and still keeps its spacing. There is a way to hold the street without giving up floor area ratio.">같은 대지, 다른 매스. 단순한 판상형은 건폐율 30퍼센트에서 멈춰야 하지만, 여러 동을 하나로 묶은 결합형은 건폐율 45퍼센트까지 올리고도 인동간격을 지킨다. 용적률을 포기하지 않고도 가로를 지킬 방법이 있다는 뜻이다.</span></p>
      </section>

      <section class="section" id="limits">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="한계" data-en="Limits">한계</h2>
        </div>
        <p class="measure muted reveal" data-ko="이 프로젝트는 성격이 다른 두 개의 분석으로 이루어져 있다. 앞의 것은 이미 지어진 21개 단지를 관찰해 무엇이 위압감을 만드는지 찾는 사전 분석이고, 뒤의 것은 아직 짓지 않은 96개 배치안을 시뮬레이션해 그 답을 시험하는 본 분석이다. 둘은 한계도 서로 다르다." data-en="This project consists of two analyses of different kinds. The first, the preliminary analysis, observes 21 built estates to find what produces oppressiveness. The second, the main analysis, simulates 96 unbuilt layouts to test that answer. Their limits differ.">이 프로젝트는 성격이 다른 두 개의 분석으로 이루어져 있다. 앞의 것은 이미 지어진 21개 단지를 관찰해 무엇이 위압감을 만드는지 찾는 사전 분석이고, 뒤의 것은 아직 짓지 않은 96개 배치안을 시뮬레이션해 그 답을 시험하는 본 분석이다. 둘은 한계도 서로 다르다.</p>

        <div class="tbl-wrap reveal" data-d="1">
          <table class="data">
            <thead><tr>
              <th data-ko="구분" data-en="Analysis">구분</th>
              <th data-ko="무엇을 했는가" data-en="What it did">무엇을 했는가</th>
              <th data-ko="한계" data-en="Its limits">한계</th>
            </tr></thead>
            <tbody>
              <tr>
                <td><span data-ko="사전 분석" data-en="Preliminary">사전 분석</span> <span class="nb" data-ko="(4–6장)" data-en="(Ch. 4–6)">(4–6장)</span></td>
                <td data-ko="서울 21개 단지 답사 · 사진 129장 세그멘테이션 · 상관과 회귀" data-en="21 estates surveyed, 129 photographs segmented, correlation and regression">서울 21개 단지 답사 · 사진 129장 세그멘테이션 · 상관과 회귀</td>
                <td data-ko="표본이 21개뿐이다. 위압감 순위는 한 사람의 주관이며 설문으로 검증하지 않았다. 회귀 모형의 개별 계수는 동수·세대수의 공선성(VIF 33·28) 때문에 읽을 수 없고, 읽을 수 있는 것은 모형 전체의 설명력(R² 0.60)뿐이다. 단지마다 대표 사진 한 장만 썼으므로 촬영 지점의 선택이 결과에 영향을 준다." data-en="The sample is only 21. The ranking is one person’s judgement, unverified by survey. Individual regression coefficients cannot be read owing to collinearity between building and household count (VIF 33 and 28); only the model’s overall explanatory power (R² 0.60) can. One representative photograph per estate means the choice of vantage affects the result.">표본이 21개뿐이다. 위압감 순위는 한 사람의 주관이며 설문으로 검증하지 않았다. 회귀 모형의 개별 계수는 동수·세대수의 공선성(VIF 33·28) 때문에 읽을 수 없고, 읽을 수 있는 것은 모형 전체의 설명력(R² 0.60)뿐이다. 단지마다 대표 사진 한 장만 썼으므로 촬영 지점의 선택이 결과에 영향을 준다.</td>
              </tr>
              <tr>
                <td><span data-ko="본 분석" data-en="Main">본 분석</span> <span class="nb" data-ko="(7–8장)" data-en="(Ch. 7–8)">(7–8장)</span></td>
                <td data-ko="96개 배치안 자동 생성 · 1,294개 조망점 평가 · 네 지표 산출" data-en="96 layouts generated, evaluated from 1,294 viewpoints, four metrics computed">96개 배치안 자동 생성 · 1,294개 조망점 평가 · 네 지표 산출</td>
                <td data-ko="배치안은 하나의 대지(잠실르엘)에서만 생성되었으므로 다른 형상의 대지에 그대로 적용되지 않는다. 매스는 16종 유닛의 조합으로만 만들어져 자유 형상은 다루지 못한다. 평가는 매스의 기하만 보며 색채·재료·저층부 프로그램·가로수는 계산에 들어가지 않는다. 그리고 시뮬레이션이므로, 실제로 그 앞에 선 사람이 같은 것을 느끼는지는 검증되지 않았다." data-en="The layouts were generated on a single site (Jamsil Le-el) and do not transfer unchanged to differently shaped sites. Masses are built only from combinations of the sixteen unit types; free form is out of reach. Evaluation reads mass geometry alone. Colour, material, ground-floor programme, and street trees never enter the calculation. And it is a simulation: whether a person standing there actually feels the same has not been tested.">배치안은 하나의 대지(잠실르엘)에서만 생성되었으므로 다른 형상의 대지에 그대로 적용되지 않는다. 매스는 16종 유닛의 조합으로만 만들어져 자유 형상은 다루지 못한다. 평가는 매스의 기하만 보며 색채·재료·저층부 프로그램·가로수는 계산에 들어가지 않는다. 그리고 시뮬레이션이므로, 실제로 그 앞에 선 사람이 같은 것을 느끼는지는 검증되지 않았다.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="measure muted reveal" data-ko="두 분석은 서로의 한계를 일부 메운다. 사전 분석은 실재하지만 표본이 적고, 본 분석은 표본이 96개지만 실재하지 않는다. 실측이 시뮬레이션의 방향을 잡아 주고, 시뮬레이션이 실측으로는 만들 수 없는 경우의 수를 채운다." data-en="Each analysis partly covers the other’s weakness. The first is real but small; the second is large but unbuilt. Measurement sets the direction of the simulation; simulation fills in the cases measurement could never produce.">두 분석은 서로의 한계를 일부 메운다. 사전 분석은 실재하지만 표본이 적고, 본 분석은 표본이 96개지만 실재하지 않는다. 실측이 시뮬레이션의 방향을 잡아 주고, 시뮬레이션이 실측으로는 만들 수 없는 경우의 수를 채운다.</p>

        <p class="measure muted reveal" data-ko="그러나 잠정적이라는 것과 무의미하다는 것은 다르다. 위압감을 재려는 시도 자체가 드물었고, 재지 않으면 요구할 수도 없다. 이 프로젝트는 답이 아니라 자를 만들려 했다." data-en="But provisional is not the same as meaningless. Attempts to measure oppressiveness have been rare, and what is not measured cannot be demanded. This project set out to make not an answer but a ruler.">그러나 잠정적이라는 것과 무의미하다는 것은 다르다. 위압감을 재려는 시도 자체가 드물었고, 재지 않으면 요구할 수도 없다. 이 프로젝트는 답이 아니라 자를 만들려 했다.</p>
      </section>
    `
  },

  /* ==================== 2-1 형태를 규정하는 규정들 ==================== */
  "2-1": {
    titleKo: "형태를 규정하는 규정들",
    titleEn: "The Rules That Define Form",
    body: `
      <p class="lead reveal" data-ko="아파트의 형태는 설계자가 그린 것이 아니다. 법이 그린 것을 설계자가 받아 적었다. 건폐율과 용적률, 인동간격이라는 세 숫자가 매스의 부피와 높이와 간격을 결정한다." data-en="The form of an apartment estate is not drawn by its architect. The law draws it; the architect transcribes. Three numbers (coverage, floor area ratio, and inter-building spacing) settle the bulk, the height, and the gaps.">아파트의 형태는 설계자가 그린 것이 아니다. 법이 그린 것을 설계자가 받아 적었다. 건폐율과 용적률, 인동간격이라는 세 숫자가 매스의 부피와 높이와 간격을 결정한다.</p>

      <section class="section" id="far-bcr">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="용적률 나누기 건폐율" data-en="FAR Divided by Coverage">용적률 나누기 건폐율</h2>
        </div>
        <p class="measure muted reveal" data-ko="건폐율은 대지면적에 대한 건축면적의 비율, 용적률은 대지면적에 대한 연면적의 비율이다. 두 값의 최대한도는 국토계획법이 정한 용도지역별 기준을 따른다. 대상지가 속한 제3종 일반주거지역의 용적률 상한은 서울시 도시계획 조례로 250퍼센트다." data-en="Coverage is the ratio of building footprint to site; floor area ratio, of gross floor area to site. Their maxima follow the zoning limits set by national planning law. For the Class 3 general residential zone of the site, Seoul’s urban planning ordinance caps the floor area ratio at 250%.">건폐율은 대지면적에 대한 건축면적의 비율, 용적률은 대지면적에 대한 연면적의 비율이다. 두 값의 최대한도는 국토계획법이 정한 용도지역별 기준을 따른다. 대상지가 속한 제3종 일반주거지역의 용적률 상한은 서울시 도시계획 조례로 250퍼센트다.</p>
        <p class="measure muted reveal" data-ko="여기서 하나의 관계식이 나온다. 평균 층수는 용적률을 건폐율로 나눈 값이다. 용적률이 고정된 상태에서 건폐율을 낮추면 층수는 반드시 올라간다. 이 단순한 나눗셈이 초고층 저건폐 단지를 만든 산수다. 7장의 실험은 이 식을 뒤집어 쓴다. 용적률을 250퍼센트에 묶어 두고 건폐율만 움직이면, 층수와 동수가 자동으로 뒤바뀐다." data-en="From this comes a single relation: average floors equal floor area ratio divided by coverage. Hold the ratio and lower the coverage, and the floors must rise. This plain division is the arithmetic that produced the sparse-coverage tower estate. Chapter 7 runs the equation backwards: pin the ratio at 250% and move only the coverage, and floors and building counts trade places on their own.">여기서 하나의 관계식이 나온다. 평균 층수는 용적률을 건폐율로 나눈 값이다. 용적률이 고정된 상태에서 건폐율을 낮추면 층수는 반드시 올라간다. 이 단순한 나눗셈이 초고층 저건폐 단지를 만든 산수다. 7장의 실험은 이 식을 뒤집어 쓴다. 용적률을 250퍼센트에 묶어 두고 건폐율만 움직이면, 층수와 동수가 자동으로 뒤바뀐다.</p>

        <div class="numbers reveal" data-d="1">
          <div class="num"><b>250 %</b><span data-ko="3종 일반주거 용적률 (서울)" data-en="FAR, Class 3 (Seoul)">3종 일반주거 용적률 (서울)</span></div>
          <div class="num"><b>50 %</b><span data-ko="3종 일반주거 건폐율" data-en="Coverage, Class 3">3종 일반주거 건폐율</span></div>
          <div class="num"><b>= 5</b><span data-ko="평균 층수 하한" data-en="Minimum average floors">평균 층수 하한</span></div>
        </div>
      </section>

      <section class="section" id="spacing-law">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="인동간격, 두 겹의 규칙" data-en="Spacing: A Rule in Two Layers">인동간격, 두 겹의 규칙</h2>
        </div>
        <p class="measure muted reveal" data-ko="인동간격은 흔히 '건축법 시행령 제86조'로 인용되지만, 정확히는 두 겹이다. 시행령은 채광창이 있는 벽면에서 직각방향으로 건축물 높이의 0.5배 '이상의 범위에서 건축조례로 정하는 거리'를 띄우라고 말한다. 0.5배는 하한일 뿐, 실제 거리를 정하는 것은 조례다." data-en="Spacing is usually cited as ‘Article 86 of the Building Act Enforcement Decree’, but it is in fact two layers. The decree requires a distance ‘set by building ordinance, within a range of at least 0.5 times the building height’, measured perpendicular from a wall with a daylight window. The 0.5 is only a floor; the actual distance is fixed by ordinance.">인동간격은 흔히 '건축법 시행령 제86조'로 인용되지만, 정확히는 두 겹이다. 시행령은 채광창이 있는 벽면에서 직각방향으로 건축물 높이의 0.5배 '이상의 범위에서 건축조례로 정하는 거리'를 띄우라고 말한다. 0.5배는 하한일 뿐, 실제 거리를 정하는 것은 조례다.</p>
        <p class="measure muted reveal" data-ko="서울시는 2022년 9월 건축 조례를 개정해 이 값을 0.8배에서 0.5배로 완화했다. 대신 사생활 보호와 재난 대응을 위해 최소 이격거리 10미터를 유지하도록 했다. 이 프로젝트가 실험에 적용한 기준, 곧 0.5H와 10미터 중 큰 값은 여기서 나온다." data-en="In September 2022 Seoul amended its building ordinance, easing this value from 0.8 to 0.5 times the height, while requiring a minimum separation of 10 m for privacy and emergency access. The standard this project applies, the greater of 0.5H and 10 m, comes from here.">서울시는 2022년 9월 건축 조례를 개정해 이 값을 0.8배에서 0.5배로 완화했다. 대신 사생활 보호와 재난 대응을 위해 최소 이격거리 10미터를 유지하도록 했다. 이 프로젝트가 실험에 적용한 기준, 곧 0.5H와 10미터 중 큰 값은 여기서 나온다.</p>

        <div class="tbl-wrap reveal" data-d="1">
          <table class="data">
            <thead><tr>
              <th data-ko="마주보는 면" data-en="Facing surfaces">마주보는 면</th>
              <th data-ko="기준" data-en="Requirement">기준</th>
              <th data-ko="근거" data-en="Basis">근거</th>
            </tr></thead>
            <tbody>
              <tr><td data-ko="채광창 ↔ 벽면" data-en="Daylight window ↔ wall">채광창 ↔ 벽면</td><td data-ko="0.5H 이상 (서울시: 최소 10 m)" data-en="≥ 0.5H (Seoul: min 10 m)">0.5H 이상 (서울시: 최소 10 m)</td><td data-ko="시행령 §86 ③2 가 + 서울시 건축조례" data-en="Decree §86 + Seoul ordinance">시행령 §86 ③2 가 + 서울시 건축조례</td></tr>
              <tr><td data-ko="채광창 없는 벽면 ↔ 측벽" data-en="Blank wall ↔ side wall">채광창 없는 벽면 ↔ 측벽</td><td>8 m</td><td data-ko="시행령 §86 ③2 나" data-en="Decree §86">시행령 §86 ③2 나</td></tr>
              <tr><td data-ko="측벽 ↔ 측벽" data-en="Side wall ↔ side wall">측벽 ↔ 측벽</td><td>4 m</td><td data-ko="시행령 §86 ③2 다" data-en="Decree §86">시행령 §86 ③2 다</td></tr>
            </tbody>
          </table>
        </div>

        <p class="measure muted reveal" data-ko="이 규칙들은 모두 단지 '안'을 향한다. 채광과 사생활, 곧 입주민의 거주성을 지키기 위한 것이다. 단지 바깥을 걷는 사람에 대한 규정은 여기에 없다." data-en="Every one of these rules faces inward. They protect daylight and privacy, the habitability of the residents. Nothing here concerns the person walking outside.">이 규칙들은 모두 단지 '안'을 향한다. 채광과 사생활, 곧 입주민의 거주성을 지키기 위한 것이다. 단지 바깥을 걷는 사람에 대한 규정은 여기에 없다.</p>

        <p class="readout reveal"><span data-ko="본 실험은 배치 가능 영역을 대지경계선 안쪽 3미터로 설정했다. 이는 건축법 제58조 '대지 안의 공지'(6미터 이내에서 조례로 결정)를 참조한 실험 설정값이며, 법정 수치가 아니다." data-en="The experiment sets the buildable area 3 m inside the site boundary. This is an experimental value referencing Article 58 of the Building Act (required open space, determined by ordinance within 6 m), not a statutory figure.">본 실험은 배치 가능 영역을 대지경계선 안쪽 3미터로 설정했다. 이는 건축법 제58조 '대지 안의 공지'(6미터 이내에서 조례로 결정)를 참조한 실험 설정값이며, 법정 수치가 아니다.</span></p>
      </section>
    `
  },

  /* ==================== 2-2 제도의 변천과 폐지된 규제 ==================== */
  "2-2": {
    titleKo: "제도의 변천과 폐지된 규제",
    titleEn: "Change and Repealed Rules",
    body: `
      <p class="lead reveal" data-ko="지금 서울의 아파트 형태는 살아 있는 법보다 죽은 법이 더 많이 만들었다. 폐지된 세 제도가 남긴 자국을 따라가면, 왜 오늘의 단지가 이렇게 생겼는지 보인다." data-en="The shape of Seoul’s apartments owes more to dead law than to living law. Follow the marks left by three repealed rules and you can see why today’s estates look the way they do.">지금 서울의 아파트 형태는 살아 있는 법보다 죽은 법이 더 많이 만들었다. 폐지된 세 제도가 남긴 자국을 따라가면, 왜 오늘의 단지가 이렇게 생겼는지 보인다.</p>

      <section class="section" id="repealed">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="폐지된 세 제도" data-en="Three Rules, Repealed">폐지된 세 제도</h2>
        </div>

        <div class="tbl-wrap reveal" data-d="1">
          <table class="data">
            <thead><tr>
              <th data-ko="제도" data-en="Rule">제도</th>
              <th data-ko="내용" data-en="What it required">내용</th>
              <th data-ko="도입" data-en="In">도입</th>
              <th data-ko="폐지" data-en="Out">폐지</th>
              <th data-ko="남긴 형태" data-en="Form it left">남긴 형태</th>
            </tr></thead>
            <tbody>
              <tr><td data-ko="도로사선제한" data-en="Street angular limit">도로사선제한</td><td data-ko="건물 높이를 도로 반대쪽 경계선까지 수평거리의 1.5배 이하로" data-en="Height ≤ 1.5× the horizontal distance to the far side of the street">건물 높이를 도로 반대쪽 경계선까지 수평거리의 1.5배 이하로</td><td>—</td><td>2015</td><td data-ko="계단형 매스" data-en="Stepped masses">계단형 매스</td></tr>
              <tr><td data-ko="입면차폐도" data-en="Facade obstruction">입면차폐도</td><td data-ko="조망축 방향 투영 입면적 ÷ 단지 최장길이" data-en="Projected facade area on the view axis ÷ longest site dimension">조망축 방향 투영 입면적 ÷ 단지 최장길이</td><td>1999</td><td>2008</td><td data-ko="벽처럼 늘어선 판상 매스의 방치" data-en="Slabs left to line up like a wall">벽처럼 늘어선 판상 매스의 방치</td></tr>
              <tr><td data-ko="35층 규제" data-en="35-storey cap">35층 규제</td><td data-ko="제3종 일반주거지역 주거용 건축물 35층 이하" data-en="Residential buildings in Class 3 zones capped at 35 storeys">제3종 일반주거지역 주거용 건축물 35층 이하</td><td>2013</td><td>2023</td><td data-ko="35층에 맞춰 깎인 스카이라인" data-en="A skyline shaved flat at 35">35층에 맞춰 깎인 스카이라인</td></tr>
            </tbody>
          </table>
        </div>

        <p class="readout reveal"><span data-ko="도로사선제한은 폐지 당시 건축법 제60조 제3항(2015.5.18. 삭제). 35층 규제는 법령이 아니라 서울도시기본계획(2030 → 2040)에 따른 방침이다." data-en="The street angular limit was Article 60(3) of the Building Act when repealed (deleted 18 May 2015). The 35-storey cap was not a statute but a policy of the Seoul Master Plan (2030 → 2040).">도로사선제한은 폐지 당시 건축법 제60조 제3항(2015.5.18. 삭제). 35층 규제는 법령이 아니라 서울도시기본계획(2030 → 2040)에 따른 방침이다.</span></p>
      </section>

      <section class="section" id="obstruction">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="입면차폐도의 일생" data-en="The Life of Facade Obstruction">입면차폐도의 일생</h2>
        </div>
        <p class="measure muted reveal" data-ko="세 제도 가운데 이 프로젝트와 가장 깊이 닿아 있는 것은 입면차폐도다. 1994년 한강 연접지역의 경관을 관리하기 위해 개념이 제안되었고, 1999년 서울시 공동주택 건축심의 기준으로 도입되었다. 산정식은 조망축 방향으로 투영한 입면적을 단지 최장길이로 나눈 값이다. 아파트가 도시를 향해 얼마나 두꺼운 벽을 세우는지를 하나의 숫자로 재려는 시도였다." data-en="Of the three, facade obstruction touches this project most closely. Proposed in 1994 to manage the landscape along the Han River, it entered Seoul’s apartment design review criteria in 1999. Its formula: the facade area projected along the view axis, divided by the longest dimension of the site. It was an attempt to measure, in a single number, how thick a wall an apartment estate raises against the city.">세 제도 가운데 이 프로젝트와 가장 깊이 닿아 있는 것은 입면차폐도다. 1994년 한강 연접지역의 경관을 관리하기 위해 개념이 제안되었고, 1999년 서울시 공동주택 건축심의 기준으로 도입되었다. 산정식은 조망축 방향으로 투영한 입면적을 단지 최장길이로 나눈 값이다. 아파트가 도시를 향해 얼마나 두꺼운 벽을 세우는지를 하나의 숫자로 재려는 시도였다.</p>
        <p class="measure muted reveal" data-ko="그러나 2008년 폐지되었다. 이유는 세 가지였다. 법령 근거 없이 획일적으로 건축물을 제한한다는 것, 다양한 설계를 불가능하게 한다는 것, 그리고 용적률 규제와 중복된다는 것. 도입 10년도 채우지 못했다." data-en="It was repealed in 2008 for three reasons: that it restricted buildings uniformly without statutory basis, that it made varied design impossible, and that it duplicated the floor area ratio control. It did not last ten years.">그러나 2008년 폐지되었다. 이유는 세 가지였다. 법령 근거 없이 획일적으로 건축물을 제한한다는 것, 다양한 설계를 불가능하게 한다는 것, 그리고 용적률 규제와 중복된다는 것. 도입 10년도 채우지 못했다.</p>
        <p class="measure muted reveal" data-ko="이 제도를 되살리려는 후속 연구는 폐지된 입면차폐도의 진짜 문제를 다른 데서 찾았다. 입체적인 건축물을 2차원 최장변 하나로만 산술 규정한 것, 그리고 무엇보다 '실제 도시민의 시선이 전혀 고려되지 않은 채 단순한 산술로 판단하여 규제하도록 했다'는 것. 벽의 넓이는 쟀지만 그 벽 앞에 선 사람은 재지 않았다." data-en="Later research seeking to revive the rule located its real failure elsewhere: that it reduced a three-dimensional building to an arithmetic on one two-dimensional edge, and above all that ‘it judged and regulated by simple arithmetic, with no consideration whatsoever of the actual city dweller’s line of sight’. It measured the area of the wall, but never the person standing before it.">이 제도를 되살리려는 후속 연구는 폐지된 입면차폐도의 진짜 문제를 다른 데서 찾았다. 입체적인 건축물을 2차원 최장변 하나로만 산술 규정한 것, 그리고 무엇보다 '실제 도시민의 시선이 전혀 고려되지 않은 채 단순한 산술로 판단하여 규제하도록 했다'는 것. 벽의 넓이는 쟀지만 그 벽 앞에 선 사람은 재지 않았다.</p>
        <p class="measure muted reveal" data-ko="이 프로젝트는 바로 그 자리에서 시작한다. 보행자의 시선을 기준으로 삼는 것, 폐지된 제도가 하지 못한 일이다." data-en="This project begins exactly there: taking the pedestrian’s line of sight as the measure, the thing the repealed rule never did.">이 프로젝트는 바로 그 자리에서 시작한다. 보행자의 시선을 기준으로 삼는 것, 폐지된 제도가 하지 못한 일이다.</p>
      </section>

      <section class="section" id="vacuum">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="지금은 아무 기준도 없다" data-en="Now There Is No Standard at All">지금은 아무 기준도 없다</h2>
        </div>
        <p class="measure muted reveal" data-ko="입면차폐도가 사라진 뒤, 서울시에는 건축물의 개방성이나 폐쇄성을 규제하는 제도가 없다. 공동주택 가이드라인은 정량 기준 없이 서술형 목표만 제시한다. 개방감에 대해 제시하는 유일한 숫자는 '채광창 없는 측벽 사이 5미터 이상 이격'이고, 그마저 지키기 어려우면 1~2층에 필로티를 두라는 권장에 그친다." data-en="Since facade obstruction disappeared, Seoul has had no rule governing the openness or closedness of buildings. Its apartment guidelines offer narrative goals without quantitative standards. The only number given for openness is ‘at least 5 m between blank side walls’, and if even that cannot be met, a suggestion to put a piloti on the first or second floor.">입면차폐도가 사라진 뒤, 서울시에는 건축물의 개방성이나 폐쇄성을 규제하는 제도가 없다. 공동주택 가이드라인은 정량 기준 없이 서술형 목표만 제시한다. 개방감에 대해 제시하는 유일한 숫자는 '채광창 없는 측벽 사이 5미터 이상 이격'이고, 그마저 지키기 어려우면 1~2층에 필로티를 두라는 권장에 그친다.</p>
        <p class="measure muted reveal" data-ko="그 사이 규제는 오히려 완화되었다. 2022년 9월 서울시 건축 조례 개정으로 인동간격은 0.8배에서 0.5배로 풀렸다. 개방성을 재는 자가 없는 상태에서 매스는 더 가까이 설 수 있게 되었다." data-en="Meanwhile the rules loosened. Seoul’s September 2022 amendment eased spacing from 0.8 to 0.5 times the height. With no instrument left to measure openness, the masses were allowed to stand closer.">그 사이 규제는 오히려 완화되었다. 2022년 9월 서울시 건축 조례 개정으로 인동간격은 0.8배에서 0.5배로 풀렸다. 개방성을 재는 자가 없는 상태에서 매스는 더 가까이 설 수 있게 되었다.</p>
        <p class="measure muted reveal" data-ko="다른 도시는 다르다. 토론토의 고층건물 설계지침은 저층부 높이를 도로 폭의 80퍼센트 이내(최대 24미터)로 묶고, 그 이상 올리려면 3미터를 후퇴시키라고 못박는다. 근거는 명시적이다. '저층부가 보행 환경을 압도하지 않도록.' 타워가 저층부 없이 지면에 바로 닿으면 '억압적인 보행자 스케일 감각'이 생긴다고 지침 스스로 적고 있다. 우리에게는 이런 문장이 없다." data-en="Other cities differ. Toronto’s tall building guidelines cap the base building at 80% of the street right-of-way (24 m maximum) and require a 3 m stepback above it. The stated rationale is explicit: so that ‘the base does not overwhelm the pedestrian environment’. Where a tower meets the ground directly, the guidelines say, it creates ‘an oppressive sense of pedestrian scale’. We have no such sentence.">다른 도시는 다르다. 토론토의 고층건물 설계지침은 저층부 높이를 도로 폭의 80퍼센트 이내(최대 24미터)로 묶고, 그 이상 올리려면 3미터를 후퇴시키라고 못박는다. 근거는 명시적이다. '저층부가 보행 환경을 압도하지 않도록.' 타워가 저층부 없이 지면에 바로 닿으면 '억압적인 보행자 스케일 감각'이 생긴다고 지침 스스로 적고 있다. 우리에게는 이런 문장이 없다.</p>
      </section>
    `
  },

  /* ==================== 4-1 21곳의 기록 ==================== */
  "4-1": {
    titleKo: "21곳의 기록",
    titleEn: "Records of 21 Complexes",
    body: `
      <p class="lead reveal" data-ko="서울의 아파트 단지는 주변 환경과 준공 시기, 주동과 배치에 따라 전혀 다른 얼굴을 갖는다. 어떤 단지가 무엇 때문에 위압적인지 알아보기 위해, 특성이 고루 담기도록 일곱 지역 21개 단지를 골라 직접 걸었다." data-en="Seoul’s apartment estates wear entirely different faces depending on their surroundings, their year, their massing and layout. To find out which of them press, and why, twenty-one complexes across seven districts were chosen for their spread, and walked.">서울의 아파트 단지는 주변 환경과 준공 시기, 주동과 배치에 따라 전혀 다른 얼굴을 갖는다. 어떤 단지가 무엇 때문에 위압적인지 알아보기 위해, 특성이 고루 담기도록 일곱 지역 21개 단지를 골라 직접 걸었다.</p>

      <section class="section" id="districts">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="21곳의 아파트 단지" data-en="Twenty-One Apartment Complexes">21곳의 아파트 단지</h2>
        </div>
        <p class="measure muted reveal" data-ko="고저차와 옹벽의 성동, 초고층의 동대문, 한강변의 서초, 용적률이 높은 강남, 신축 대단지의 송파와 강동, 오래된 저층 단지의 노원. 이 스펙트럼이 통계 분석의 기반이 된다. 21곳의 용적률은 193퍼센트에서 998퍼센트까지, 최고층은 15층에서 65층까지, 동수는 2동에서 84동까지 다양하다." data-en="Seongdong with its slopes and retaining walls; Dongdaemun’s towers; Seocho along the river; Gangnam at high floor area ratio; the new mega-estates of Songpa and Gangdong; the old low-rise blocks of Nowon. This spread is what makes the statistics possible. Across the twenty-one, floor area ratio runs from 193% to 998%, top floors from 15 to 65, and building counts from 2 to 84.">고저차와 옹벽의 성동, 초고층의 동대문, 한강변의 서초, 용적률이 높은 강남, 신축 대단지의 송파와 강동, 오래된 저층 단지의 노원. 이 스펙트럼이 통계 분석의 기반이 된다. 21곳의 용적률은 193퍼센트에서 998퍼센트까지, 최고층은 15층에서 65층까지, 동수는 2동에서 84동까지 다양하다.</p>

        <figure class="figure figure--wide reveal">
          <div class="figure__ph">
            <img data-fig src="assets/img/04/map-21.svg" alt="21개 단지의 건물 배치도" loading="lazy">
            <span data-ko="도판 · 21개 단지 배치도" data-en="Figure · footprints of the 21">도판 · 21개 단지 배치도</span>
          </div>
          <figcaption class="figure__cap"><span data-ko="21개 단지의 건물 배치를 같은 축척으로 늘어놓았다. 왼쪽 위부터 위압감 순위 순서다" data-en="The building footprints of all twenty-one, drawn at one scale and laid out in order of oppressiveness, starting top left">21개 단지의 건물 배치를 같은 축척으로 늘어놓았다. 왼쪽 위부터 위압감 순위 순서다</span></figcaption>
        </figure>
      </section>

      <section class="section" id="capture">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="기록하다" data-en="The Record">기록하다</h2>
        </div>
        <p class="measure muted reveal" data-ko="각 단지는 두 가지가 한 쌍으로 기록되었다. 하나는 보행자 시점의 사진, 다른 하나는 건폐율·용적률·세대수·최고층 같은 물리 지표다. 사진은 사람의 눈과 가장 가까운 50밀리미터 화각으로, 보행자 눈높이 1.6미터에서, 단지 바깥 가로에 서서 찍었다. 촬영 기준은 5장에서 자세히 다룬다." data-en="Each complex was recorded as a pair: a photograph from the pedestrian’s eye, and the physical figures of coverage, floor area ratio, households, and top floor. The photographs use a 50 mm field of view, closest to human sight, taken at an eye height of 1.6 m from the street outside the estate. Chapter 5 sets out the capture protocol in full.">각 단지는 두 가지가 한 쌍으로 기록되었다. 하나는 보행자 시점의 사진, 다른 하나는 건폐율·용적률·세대수·최고층 같은 물리 지표다. 사진은 사람의 눈과 가장 가까운 50밀리미터 화각으로, 보행자 눈높이 1.6미터에서, 단지 바깥 가로에 서서 찍었다. 촬영 기준은 5장에서 자세히 다룬다.</p>
        <p class="measure muted reveal" data-ko="답사가 끝난 뒤에는 체감한 위압감으로 21곳의 순위를 매겼다. 이 주관적 순위가 이후 모든 통계 분석의 종속 변인이 된다." data-en="After the visits, the twenty-one were ranked by the oppressiveness actually felt. That subjective ranking becomes the dependent variable for every statistic that follows.">답사가 끝난 뒤에는 체감한 위압감으로 21곳의 순위를 매겼다. 이 주관적 순위가 이후 모든 통계 분석의 종속 변인이 된다.</p>

      </section>
    `
  },

  /* ==================== 4-2 주관적 순위와 종합 ==================== */
  "4-2": {
    titleKo: "주관적 순위와 종합",
    titleEn: "Ranking and Synthesis",
    body: `
      <p class="lead reveal" data-ko="21곳을 위압감으로 줄 세웠다. 이 줄이 정확한지 묻는 것은 무의미하다. 위압감은 원래 주관적이다. 중요한 것은 이 주관이 어떤 물리량과 함께 움직이는가다." data-en="The twenty-one were placed in a line by oppressiveness. Asking whether the line is correct misses the point. Oppressiveness is subjective by nature. What matters is which physical quantities move with it.">21곳을 위압감으로 줄 세웠다. 이 줄이 정확한지 묻는 것은 무의미하다. 위압감은 원래 주관적이다. 중요한 것은 이 주관이 어떤 물리량과 함께 움직이는가다.</p>

      <section class="section" id="ranking">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="위압감을 나열하다" data-en="Oppressiveness, Lined Up">위압감을 나열하다</h2>
        </div>
        <p class="measure muted reveal" data-ko="가장 위압적이라고 느낀 곳은 롯데캐슬 SKY-L65였다. 65층, 용적률 998퍼센트. 상업지역에 선 초고층 주상복합이다. 반대편 끝은 상계주공7단지다. 15층, 용적률 193퍼센트의 오래된 저층 단지다. 이 두 극단 사이에 나머지 열아홉 곳이 놓인다." data-en="The most oppressive was Lotte Castle SKY-L65: 65 storeys, FAR 998%, a commercial-zone tower complex. At the other end stands Sanggye Jugong 7, 15 storeys, FAR 193%, an old low-rise estate. The other nineteen fall between these two poles.">가장 위압적이라고 느낀 곳은 롯데캐슬 SKY-L65였다. 65층, 용적률 998퍼센트. 상업지역에 선 초고층 주상복합이다. 반대편 끝은 상계주공7단지다. 15층, 용적률 193퍼센트의 오래된 저층 단지다. 이 두 극단 사이에 나머지 열아홉 곳이 놓인다.</p>

        <p class="measure muted reveal" data-ko="아래 표는 21곳을 위압감 순위대로 세운 것이다. 각 숫자 뒤의 막대는 그 열 안에서의 상대적 크기다. 순위대로 읽어 내려가면 용적률과 최고층의 막대가 대체로 함께 짧아지고, 동수의 막대는 반대로 길어진다. 위압감이라는 주관이 어떤 물리량과 함께 움직이는지가 여기서 처음 눈에 보인다." data-en="The table below places the twenty-one in order of oppressiveness. The bar behind each number is its size relative to the rest of that column. Read down the ranking and the bars for floor area ratio and top floor shorten together, while the bar for building count does the opposite. Here, for the first time, one can see which physical quantities move with the subjective judgment.">아래 표는 21곳을 위압감 순위대로 세운 것이다. 각 숫자 뒤의 막대는 그 열 안에서의 상대적 크기다. 순위대로 읽어 내려가면 용적률과 최고층의 막대가 대체로 함께 짧아지고, 동수의 막대는 반대로 길어진다. 위압감이라는 주관이 어떤 물리량과 함께 움직이는지가 여기서 처음 눈에 보인다.</p>

        <div class="tbl-wrap reveal" id="cxTable" data-d="1"></div>
        <p class="readout reveal"><span data-ko="순위 1 = 위압감이 가장 강함. 열 제목을 누르면 그 지표를 기준으로 다시 정렬된다. 순위순으로 볼 수도, 단지명순이나 용적률순으로 볼 수도 있다. 최고층 한 곳은 원본 자료 손상으로 비어 있다." data-en="Rank 1 = most oppressive. Click a column heading to re-sort by that measure, whether by rank, by name, or by floor area ratio. One top-floor value is missing due to source corruption.">순위 1 = 위압감이 가장 강함. 열 제목을 누르면 그 지표를 기준으로 다시 정렬된다. 순위순으로 볼 수도, 단지명순이나 용적률순으로 볼 수도 있다. 최고층 한 곳은 원본 자료 손상으로 비어 있다.</span></p>
      </section>
    `
  },

  /* ==================== 5-1 데이터 수집과 촬영 기준 ==================== */
  "5-1": {
    titleKo: "데이터 수집과 촬영 기준",
    titleEn: "Collection and Capture Protocol",
    body: `
      <p class="lead reveal" data-ko="느낌을 숫자로 옮기려면 먼저 눈을 표준화해야 한다. 같은 높이에서, 같은 화각으로, 같은 거리 단계에서 찍지 않으면 비교할 수 없다." data-en="To turn feeling into numbers, the eye must first be standardised. Without the same height, the same field of view, the same distance steps, nothing can be compared.">느낌을 숫자로 옮기려면 먼저 눈을 표준화해야 한다. 같은 높이에서, 같은 화각으로, 같은 거리 단계에서 찍지 않으면 비교할 수 없다.</p>

      <section class="section" id="protocol">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="사람의 눈에 맞추다" data-en="Matching the Human Eye">사람의 눈에 맞추다</h2>
        </div>
        <div class="cols">
          <p class="measure muted reveal" data-ko="화각은 50밀리미터로 고정했다. 사람이 실제로 보는 것과 가장 가까운 표준 렌즈다. 광각으로 찍으면 건물이 실제보다 작고 멀어 보이고, 망원으로 찍으면 반대가 된다. 높이는 1.6미터, 보행자의 눈높이다. 그리고 거리에 따라 인지가 달라진다는 점을 반영해 근경·중경·원경 세 단계로 나누어 찍었다." data-en="The field of view is fixed at 50 mm, the standard lens closest to what a person actually sees. Shoot wide and buildings look smaller and farther than they are; shoot long and the reverse. Height is 1.6 m, a pedestrian’s eye. And because perception changes with distance, each site was shot at three ranges: near, middle, far.">화각은 50밀리미터로 고정했다. 사람이 실제로 보는 것과 가장 가까운 표준 렌즈다. 광각으로 찍으면 건물이 실제보다 작고 멀어 보이고, 망원으로 찍으면 반대가 된다. 높이는 1.6미터, 보행자의 눈높이다. 그리고 거리에 따라 인지가 달라진다는 점을 반영해 근경·중경·원경 세 단계로 나누어 찍었다.</p>
          <dl class="kv reveal" data-d="1">
            <div><dt data-ko="화각" data-en="Focal length">화각</dt><dd data-ko="50 mm (표준)" data-en="50 mm (standard)">50 mm (표준)</dd></div>
            <div><dt data-ko="시점 높이" data-en="Eye height">시점 높이</dt><dd>1.6 m</dd></div>
            <div><dt data-ko="거리 단계" data-en="Distance">거리 단계</dt><dd data-ko="근경 · 중경 · 원경" data-en="Near · middle · far">근경 · 중경 · 원경</dd></div>
            <div><dt data-ko="촬영 위치" data-en="Position">촬영 위치</dt><dd data-ko="단지 바깥 가로" data-en="Street outside the estate">단지 바깥 가로</dd></div>
            <div><dt data-ko="수집 사진" data-en="Photographs">수집 사진</dt><dd data-ko="129장 / 21개 단지" data-en="129 across 21 complexes">129장 / 21개 단지</dd></div>
          </dl>
        </div>
        <p class="measure muted reveal" data-ko="거리를 나눈 근거는 Gehl에 있다. 사람은 100미터 안에서 신체의 움직임을 구분하고, 25미터 안에서 얼굴 표정과 감정을 읽으며, 7미터 안에서 진솔한 대화를 나눈다. 거리마다 다른 감각이 작동하므로, 하나의 거리에서만 찍으면 위압감의 한 단면만 보게 된다." data-en="The grounds for splitting by distance come from Gehl: within 100 m we distinguish body movement, within 25 m we read facial expression and emotion, within 7 m we hold a genuine conversation. Different senses work at different ranges. Shoot at one distance and you see only one slice of the pressure.">거리를 나눈 근거는 Gehl에 있다. 사람은 100미터 안에서 신체의 움직임을 구분하고, 25미터 안에서 얼굴 표정과 감정을 읽으며, 7미터 안에서 진솔한 대화를 나눈다. 거리마다 다른 감각이 작동하므로, 하나의 거리에서만 찍으면 위압감의 한 단면만 보게 된다.</p>

              </section>

      <section class="section" id="pipeline5">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="다섯 단계" data-en="Five Stages">다섯 단계</h2>
        </div>
        <div class="stepper reveal" data-d="1">
          <div class="step"><span class="step__n">01</span><h3 class="step__t" data-ko="수집" data-en="Collect">수집</h3><p class="step__d" data-ko="21개 단지 129장 촬영" data-en="129 photographs across 21 complexes">21개 단지 129장 촬영</p></div>
          <div class="step"><span class="step__n">02</span><h3 class="step__t" data-ko="전처리" data-en="Prepare">전처리</h3><p class="step__d" data-ko="해상도·구도 정규화" data-en="Normalise resolution and framing">해상도·구도 정규화</p></div>
          <div class="step"><span class="step__n">03</span><h3 class="step__t" data-ko="세그멘테이션" data-en="Segment">세그멘테이션</h3><p class="step__d" data-ko="픽셀 단위 분할, 7개 경관 그룹" data-en="Pixel-level split into seven groups">픽셀 단위 분할, 7개 경관 그룹</p></div>
          <div class="step"><span class="step__n">04</span><h3 class="step__t" data-ko="지표 산출" data-en="Measure">지표 산출</h3><p class="step__d" data-ko="점유율·무게중심" data-en="Share and centroid">점유율·무게중심</p></div>
          <div class="step"><span class="step__n">05</span><h3 class="step__t" data-ko="데이터 마이닝" data-en="Mine">데이터 마이닝</h3><p class="step__d" data-ko="상관·회귀로 위압감과 연결" data-en="Correlate and regress against felt oppression">상관·회귀로 위압감과 연결</p></div>
        </div>
      </section>
    `
  },

  /* ==================== 5-2 세그멘테이션과 시각 지표 ==================== */
  "5-2": {
    titleKo: "세그멘테이션과 시각 지표",
    titleEn: "Segmentation and Visual Indicators",
    body: `
      <p class="lead reveal" data-ko="사진 한 장을 픽셀 단위로 분해한다. 이 픽셀은 건물, 저 픽셀은 하늘. 그러면 화면에서 건물이 차지하는 비율을 셀 수 있다." data-en="A photograph is taken apart pixel by pixel. This pixel is building, that one sky. Then the share of the frame the buildings occupy can be counted.">사진 한 장을 픽셀 단위로 분해한다. 이 픽셀은 건물, 저 픽셀은 하늘. 그러면 화면에서 건물이 차지하는 비율을 셀 수 있다.</p>

      <section class="section" id="seg">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="19개 클래스를 7개 그룹으로" data-en="Nineteen Classes into Seven Groups">19개 클래스를 7개 그룹으로</h2>
        </div>
        <p class="measure muted reveal" data-ko="시맨틱 세그멘테이션 모델은 도시 장면을 19개 클래스로 나눈다. 이 프로젝트는 그것을 경관 분석에 쓸 수 있는 일곱 개 그룹으로 통합했다. 각 그룹이 화면에서 차지하는 비율이 곧 시각 지표가 된다." data-en="The semantic segmentation model divides an urban scene into nineteen classes. This project folds them into seven groups usable for landscape analysis. The share of the frame each group occupies becomes a visual indicator.">시맨틱 세그멘테이션 모델은 도시 장면을 19개 클래스로 나눈다. 이 프로젝트는 그것을 경관 분석에 쓸 수 있는 일곱 개 그룹으로 통합했다. 각 그룹이 화면에서 차지하는 비율이 곧 시각 지표가 된다.</p>

        <div class="tbl-wrap reveal" data-d="1">
          <table class="data">
            <thead><tr>
              <th data-ko="경관 그룹" data-en="Group">경관 그룹</th>
              <th data-ko="포함 클래스" data-en="Classes">포함 클래스</th>
              <th data-ko="분석적 의미" data-en="What it means">분석적 의미</th>
            </tr></thead>
            <tbody>
              <tr><td data-ko="건물" data-en="Building">건물</td><td data-ko="건물, 벽(옹벽·방음벽)" data-en="Building, wall">건물, 벽(옹벽·방음벽)</td><td data-ko="시야를 막는 매스, 위압감의 직접 원인" data-en="The mass that blocks sight, the direct source of pressure">시야를 막는 매스, 위압감의 직접 원인</td></tr>
              <tr><td data-ko="하늘" data-en="Sky">하늘</td><td data-ko="하늘" data-en="Sky">하늘</td><td data-ko="천공률(SVF), 열린 정도" data-en="Sky view factor, how much is open">천공률(SVF), 열린 정도</td></tr>
              <tr><td data-ko="식재" data-en="Vegetation">식재</td><td data-ko="수목, 초지" data-en="Tree, terrain">수목, 초지</td><td data-ko="녹시율, 매스를 가리는 완충" data-en="Greenery, the buffer that veils mass">녹시율, 매스를 가리는 완충</td></tr>
              <tr><td data-ko="도로" data-en="Road">도로</td><td data-ko="차도, 보도" data-en="Road, sidewalk">차도, 보도</td><td data-ko="보행자가 선 바닥" data-en="The ground the pedestrian stands on">보행자가 선 바닥</td></tr>
              <tr><td data-ko="구성부재" data-en="Furniture">구성부재</td><td data-ko="울타리, 기둥, 가로등, 표지" data-en="Fence, pole, light, sign">울타리, 기둥, 가로등, 표지</td><td data-ko="가로의 잡음, 담장·분리대 포함" data-en="Street noise, fences and barriers among them">가로의 잡음, 담장·분리대 포함</td></tr>
              <tr><td data-ko="사람" data-en="Person">사람</td><td data-ko="보행자" data-en="Person">보행자</td><td data-ko="가로의 활기" data-en="Life on the street">가로의 활기</td></tr>
              <tr><td data-ko="차량" data-en="Vehicle">차량</td><td data-ko="승용차, 버스, 트럭" data-en="Car, bus, truck">승용차, 버스, 트럭</td><td data-ko="차량 점유" data-en="Vehicle occupation">차량 점유</td></tr>
            </tbody>
          </table>
        </div>

        <p class="measure muted reveal" data-ko="한 가지 결정을 짚어 둔다. 옹벽과 방음벽을 '벽'이 아니라 '건물'로 넣었다. 보행자에게는 둘 다 시야를 막는 벽이기 때문이다. 성동구 단지들의 옹벽이 만드는 위압감을 놓치지 않으려면 이 통합이 필요했다." data-en="One decision is worth naming: retaining walls and sound barriers were folded into ‘building’, not treated apart. To a pedestrian both are simply walls that block sight. Without this merge, the pressure created by Seongdong’s retaining walls would have gone uncounted.">한 가지 결정을 짚어 둔다. 옹벽과 방음벽을 '벽'이 아니라 '건물'로 넣었다. 보행자에게는 둘 다 시야를 막는 벽이기 때문이다. 성동구 단지들의 옹벽이 만드는 위압감을 놓치지 않으려면 이 통합이 필요했다.</p>

        <p class="measure muted reveal" data-ko="21곳 모두가 이렇게 분해되었다. 단지 이름을 누르면 그 단지의 대표 사진과 세그멘테이션 결과를 나란히 볼 수 있다. 왼쪽은 사람이 보는 장면이고, 오른쪽은 기계가 나눈 픽셀이다." data-en="All twenty-one were taken apart this way. Click a name to place that estate’s representative photograph beside its segmentation. On the left is the scene a person sees; on the right, the pixels a machine has divided.">21곳 모두가 이렇게 분해되었다. 단지 이름을 누르면 그 단지의 대표 사진과 세그멘테이션 결과를 나란히 볼 수 있다. 왼쪽은 사람이 보는 장면이고, 오른쪽은 기계가 나눈 픽셀이다.</p>

        <div class="segp reveal" id="segPair" data-d="1"></div>
        <p class="readout reveal"><span data-ko="대표 사진은 단지마다 촬영한 사진 가운데 '단지 바깥에서, 비슷한 구도로' 찍힌 한 장을 자동으로 고른 것이다. 21곳의 대표컷 129장 중에서 선정했다." data-en="The representative photograph is chosen automatically from each estate’s shots, the one taken from outside the estate in the most comparable framing. Selected from the 129 photographs across the twenty-one.">대표 사진은 단지마다 촬영한 사진 가운데 '단지 바깥에서, 비슷한 구도로' 찍힌 한 장을 자동으로 고른 것이다. 21곳의 대표컷 129장 중에서 선정했다.</span></p>
      </section>

      <section class="section" id="centroid">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="무게중심이라는 지표" data-en="The Centroid">무게중심이라는 지표</h2>
        </div>
        <p class="measure muted reveal" data-ko="점유율만으로는 부족하다. 건물이 화면의 40퍼센트를 차지하더라도, 그것이 아래쪽에 낮게 깔려 있는 것과 위쪽에서 머리 위로 덮쳐 오는 것은 전혀 다른 경험이다. 그래서 건물 픽셀의 무게중심이 화면에서 얼마나 위에 있는지를 함께 쟀다." data-en="Share alone is not enough. Buildings may fill 40% of the frame, but lying low along the bottom is a wholly different experience from bearing down from above. So the vertical position of the building pixels’ centroid was measured too.">점유율만으로는 부족하다. 건물이 화면의 40퍼센트를 차지하더라도, 그것이 아래쪽에 낮게 깔려 있는 것과 위쪽에서 머리 위로 덮쳐 오는 것은 전혀 다른 경험이다. 그래서 건물 픽셀의 무게중심이 화면에서 얼마나 위에 있는지를 함께 쟀다.</p>
        <p class="measure muted reveal" data-ko="이 지표에는 이론적 뒷받침이 있다. 시각적 무게중심 연구에 따르면 '아래가 무겁고 위가 가벼운' 구성은 안정과 안전의 상징으로 인식되는 반면, 무게중심이 위로 쏠리거나 기울면 관찰자는 중력 불안정의 심리적 인상을 갖는다. 신경미학 연구는 더 나아가, 복잡하거나 비대칭적인 건축 형태 앞에서 편도체가 활성화되어 경계심과 불안이 유발된다고 보고한다. 위압감은 취향의 문제가 아니라 생리적 방어 반응에 가깝다." data-en="The indicator has theory behind it. Studies of visual centre of gravity find that a ‘heavy below, light above’ composition reads as stability and safety, while a centroid pushed upward or tilted leaves the viewer with an impression of gravitational instability. Neuroaesthetics goes further: before complex or asymmetric architectural form the amygdala activates, raising vigilance and anxiety. Oppressiveness is less a matter of taste than a physiological defence.">이 지표에는 이론적 뒷받침이 있다. 시각적 무게중심 연구에 따르면 '아래가 무겁고 위가 가벼운' 구성은 안정과 안전의 상징으로 인식되는 반면, 무게중심이 위로 쏠리거나 기울면 관찰자는 중력 불안정의 심리적 인상을 갖는다. 신경미학 연구는 더 나아가, 복잡하거나 비대칭적인 건축 형태 앞에서 편도체가 활성화되어 경계심과 불안이 유발된다고 보고한다. 위압감은 취향의 문제가 아니라 생리적 방어 반응에 가깝다.</p>
      </section>
    `
  },

  /* ==================== 5-3 데이터 마이닝 ==================== */
  "5-3": {
    titleKo: "데이터 마이닝",
    titleEn: "Data Mining",
    body: `
      <p class="lead reveal" data-ko="이제 두 벌의 숫자가 있다. 하나는 사진에서 뽑은 시각 지표, 다른 하나는 단지의 물리 지표. 그리고 세 번째 숫자가 있다. 내가 매긴 위압감 순위다." data-en="Now there are two sets of numbers: the visual indicators drawn from the photographs, and the physical figures of each estate. And a third: the ranking of oppressiveness I assigned.">이제 두 벌의 숫자가 있다. 하나는 사진에서 뽑은 시각 지표, 다른 하나는 단지의 물리 지표. 그리고 세 번째 숫자가 있다. 내가 매긴 위압감 순위다.</p>

      <section class="section" id="mining">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="주관을 종속 변인으로" data-en="Subjectivity as the Dependent Variable">주관을 종속 변인으로</h2>
        </div>
        <p class="measure muted reveal" data-ko="분석의 구조는 단순하다. 주관적 위압감 순위를 종속 변인에 놓고, 열네 개의 지표를 독립 변인에 놓는다. 스피어만 상관으로 어느 지표가 순위와 함께 움직이는지 보고, 다중회귀로 그 지표들이 합쳐서 얼마나 설명하는지 본다." data-en="The structure is simple. Put the subjective ranking on the dependent side and fourteen metrics on the independent side. Spearman correlation shows which metrics move with the ranking; multiple regression shows how much they explain together.">분석의 구조는 단순하다. 주관적 위압감 순위를 종속 변인에 놓고, 열네 개의 지표를 독립 변인에 놓는다. 스피어만 상관으로 어느 지표가 순위와 함께 움직이는지 보고, 다중회귀로 그 지표들이 합쳐서 얼마나 설명하는지 본다.</p>
        <p class="measure muted reveal" data-ko="단지마다 사진이 여러 장이므로, 단지별로 대표 사진 한 장을 자동 선정했다. 외부에서 찍혔고 구도가 서로 비슷한 사진을 고르는 알고리즘이다. 그러지 않으면 어떤 단지는 하늘이 넓게 찍힌 사진으로, 어떤 단지는 벽이 꽉 찬 사진으로 대표되어 비교가 무너진다." data-en="Because each estate has several photographs, one representative frame was selected automatically per estate by an algorithm that picks shots taken from outside with comparable framing. Without it, one estate would be represented by a sky-filled view and another by a wall, and the comparison would collapse.">단지마다 사진이 여러 장이므로, 단지별로 대표 사진 한 장을 자동 선정했다. 외부에서 찍혔고 구도가 서로 비슷한 사진을 고르는 알고리즘이다. 그러지 않으면 어떤 단지는 하늘이 넓게 찍힌 사진으로, 어떤 단지는 벽이 꽉 찬 사진으로 대표되어 비교가 무너진다.</p>

        <div class="numbers reveal" data-d="1">
          <div class="num"><b data-count="129">129</b><span data-ko="분할한 사진" data-en="segmented">분할한 사진</span></div>
          <div class="num"><b data-count="14">14</b><span data-ko="독립 변인" data-en="metrics">독립 변인</span></div>
          <div class="num"><b data-count="21">21</b><span data-ko="표본" data-en="cases">표본</span></div>
        </div>

        <p class="measure muted reveal" data-ko="결과는 다음 장에서 다룬다. 미리 말하면, 살아남은 지표는 다섯 개였고 그중 하나는 부호가 반대였다." data-en="The results belong to the next chapter. To say it in advance: five metrics survived, and one of them carried the opposite sign.">결과는 다음 장에서 다룬다. 미리 말하면, 살아남은 지표는 다섯 개였고 그중 하나는 부호가 반대였다.</p>
      </section>
    `
  },

  /* ==================== 8-1 건폐율에 따른 변화 ==================== */
  "8-1": {
    titleKo: "건폐율에 따른 변화",
    titleEn: "Change by Coverage",
    body: `
      <p class="lead reveal" data-ko="96개 배치안 가운데 네 지표를 동시에 만족하는 안은 없었다. 지표들이 서로 반대 방향으로 작동하기 때문이다." data-en="Not one of the 96 layouts satisfies all four metrics. They pull in opposite directions.">96개 배치안 가운데 네 지표를 동시에 만족하는 안은 없었다. 지표들이 서로 반대 방향으로 작동하기 때문이다.</p>

      <section class="section" id="crossing">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="두 힘이 교차한다" data-en="Two Forces Cross">두 힘이 교차한다</h2>
        </div>
        <p class="measure muted reveal" data-ko="건폐율이 낮으면 같은 용적률을 담기 위해 건물이 높아진다. 올려다보는 각도가 커지고 시야를 채우는 매스가 커진다. 조망앙각과 입체각의 위압이 최대가 된다. 건폐율을 올리면 이 위압은 풀린다. 대신 동이 늘고 사이가 좁아져 인동간격이 무너진다." data-en="At low coverage the same floor area forces the buildings up. The angle you look up grows, the mass filling your view grows, and view angle and solid angle press hardest. Raise the coverage and that pressure eases. But buildings multiply, gaps narrow, and the spacing requirement collapses.">건폐율이 낮으면 같은 용적률을 담기 위해 건물이 높아진다. 올려다보는 각도가 커지고 시야를 채우는 매스가 커진다. 조망앙각과 입체각의 위압이 최대가 된다. 건폐율을 올리면 이 위압은 풀린다. 대신 동이 늘고 사이가 좁아져 인동간격이 무너진다.</p>

        <div class="tbl-wrap reveal" id="scBcr" data-d="1"></div>

        <p class="measure muted reveal" data-ko="표를 세로로 읽으면 교차가 보인다. 시각 위압 점수는 9에서 100으로 계속 오르고, 동간 충족은 16종에서 2종으로 계속 떨어진다. 두 곡선이 만나는 곳이 건폐율 30퍼센트 부근이다." data-en="Read the table down its columns and the crossing appears. The visual-relief score climbs from 9 to 100 without pause; spacing compliance falls from 16 types to 2 without pause. The two curves meet near 30% coverage.">표를 세로로 읽으면 교차가 보인다. 시각 위압 점수는 9에서 100으로 계속 오르고, 동간 충족은 16종에서 2종으로 계속 떨어진다. 두 곡선이 만나는 곳이 건폐율 30퍼센트 부근이다.</p>

        <p class="measure muted reveal" data-ko="이 교차는 별도로 도출한 전환임계점과도 맞물린다. 배치 생성 단계에서 남향과 인동간격이라는 두 원칙을 어디까지 지킬 수 있는지 계산하면, 건폐율이 올라가는 과정에서 세 개의 문턱이 나타난다." data-en="The crossing lines up with transition thresholds derived separately. Computing how far the two principles of southern orientation and inter-building spacing can be held as coverage rises reveals three thresholds.">이 교차는 별도로 도출한 전환임계점과도 맞물린다. 배치 생성 단계에서 남향과 인동간격이라는 두 원칙을 어디까지 지킬 수 있는지 계산하면, 건폐율이 올라가는 과정에서 세 개의 문턱이 나타난다.</p>

        <div class="tbl-wrap reveal" data-d="1">
          <table class="data">
            <thead><tr>
              <th data-ko="구간" data-en="Zone">구간</th>
              <th class="num" data-ko="임계 건폐율" data-en="Threshold">임계 건폐율</th>
              <th data-ko="의미" data-en="What it means">의미</th>
            </tr></thead>
            <tbody>
              <tr><td data-ko="1구간 · 최적" data-en="Zone 1 · Optimal">1구간 · 최적</td><td class="num">17.3 %</td><td data-ko="남향과 인동간격을 모두 만족하는 한계. 대상지 잠실르엘의 현황(17%)이 정확히 여기다." data-en="The limit at which both southern orientation and spacing are satisfied. Jamsil Le-el’s existing 17% sits exactly here.">남향과 인동간격을 모두 만족하는 한계. 대상지 잠실르엘의 현황(17%)이 정확히 여기다.</td></tr>
              <tr><td data-ko="2구간 · 타협" data-en="Zone 2 · Compromise">2구간 · 타협</td><td class="num">25.5 %</td><td data-ko="남향을 양보해야 넘을 수 있는 문턱. 시나리오 B가 여는 구간이다." data-en="The threshold that can be crossed only by giving up southern orientation, the band Scenario B opens.">남향을 양보해야 넘을 수 있는 문턱. 시나리오 B가 여는 구간이다.</td></tr>
              <tr><td data-ko="3구간 · 규제 이탈" data-en="Zone 3 · Beyond the rule">3구간 · 규제 이탈</td><td class="num">50.9 %</td><td data-ko="인동간격 규제를 완화해야만 도달하는 문턱. 시나리오 C가 여는 구간이며, 그 너머는 주동 매스 자체의 한계다." data-en="Reachable only by relaxing the spacing rule, the band Scenario C opens. Beyond it lies the limit of the mass itself.">인동간격 규제를 완화해야만 도달하는 문턱. 시나리오 C가 여는 구간이며, 그 너머는 주동 매스 자체의 한계다.</td></tr>
            </tbody>
          </table>
        </div>

        <p class="measure muted reveal" data-ko="네 지표의 교차점 30퍼센트는 2구간(25.5%)과 3구간(50.9%) 사이에 놓인다. 남향은 이미 양보했지만 인동간격은 아직 지킬 수 있는 구간이다. 규제를 어기지 않고 갈 수 있는 가장 높은 건폐율이 그 부근이라는 뜻이다." data-en="The 30% crossing of the four metrics falls between Zone 2 (25.5%) and Zone 3 (50.9%): a band where orientation has already been conceded but spacing can still be kept. It is the highest coverage reachable without breaking the rule.">네 지표의 교차점 30퍼센트는 2구간(25.5%)과 3구간(50.9%) 사이에 놓인다. 남향은 이미 양보했지만 인동간격은 아직 지킬 수 있는 구간이다. 규제를 어기지 않고 갈 수 있는 가장 높은 건폐율이 그 부근이라는 뜻이다.</p>

        <figure class="figure figure--wide reveal">
          <div class="figure__ph">
            <img data-fig src="assets/img/08/crossing-30.svg" alt="건폐율에 따른 네 지표의 변화" loading="lazy">
            <span data-ko="도판 · 네 지표의 교차" data-en="Figure · where the four metrics cross">도판 · 네 지표의 교차</span>
          </div>
          <figcaption class="figure__cap"><span data-ko="건폐율이 오를수록 조망앙각과 입체각의 위압은 풀리고, 동간거리 통과율은 떨어진다. 두 흐름이 엇갈리는 곳이 30퍼센트 부근이다. 전면점유율은 거의 전 구간에서 바닥에 붙어 있다" data-en="As coverage rises, the pressure of view angle and solid angle eases while the spacing pass rate falls. The two cross at around 30%. Frontage stays on the floor almost throughout">건폐율이 오를수록 조망앙각과 입체각의 위압은 풀리고, 동간거리 통과율은 떨어진다. 두 흐름이 엇갈리는 곳이 30퍼센트 부근이다. 전면점유율은 거의 전 구간에서 바닥에 붙어 있다</span></figcaption>
        </figure>
      </section>

      <section class="section" id="passdist">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="위압이 풀리는 거리" data-en="The Distance Where Pressure Clears">위압이 풀리는 거리</h2>
        </div>
        <p class="measure muted reveal" data-ko="위압 점수는 추상적이다. 원래 값은 거리다. 건물에서 얼마나 멀어져야 위압이 풀리는가를 잰 것이다. 건폐율 5퍼센트에서는 평균 177미터를 걸어야 위압에서 벗어난다. 50퍼센트에서는 43미터면 된다. 초고층 저건폐 단지의 그늘은 두 블록 밖까지 미친다는 뜻이다." data-en="The relief score is abstract; underneath it is a distance, how far you must walk from the building before the pressure lets go. At 5% coverage that distance averages 177 m. At 50% it is 43 m. The shadow of a sparse-coverage tower estate reaches two blocks away.">위압 점수는 추상적이다. 원래 값은 거리다. 건물에서 얼마나 멀어져야 위압이 풀리는가를 잰 것이다. 건폐율 5퍼센트에서는 평균 177미터를 걸어야 위압에서 벗어난다. 50퍼센트에서는 43미터면 된다. 초고층 저건폐 단지의 그늘은 두 블록 밖까지 미친다는 뜻이다.</p>

        <div class="numbers reveal" data-d="1">
          <div class="num"><b data-count="177" data-suffix=" m">177 m</b><span data-ko="건폐율 5%" data-en="at BCR 5%">건폐율 5%</span></div>
          <div class="num"><b data-count="60" data-suffix=" m">60 m</b><span data-ko="건폐율 30%" data-en="at BCR 30%">건폐율 30%</span></div>
          <div class="num"><b data-count="43" data-suffix=" m">43 m</b><span data-ko="건폐율 50%" data-en="at BCR 50%">건폐율 50%</span></div>
        </div>
      </section>
    `
  },

  /* ==================== 8-2 지표별 상세 ==================== */
  "8-2": {
    titleKo: "지표별 상세",
    titleEn: "Metric Details",
    body: `
      <p class="lead reveal" data-ko="네 지표를 하나씩 뜯어본다. 무너지는 것과 회복되는 것, 그리고 끝내 채워지지 않는 것." data-en="The four metrics, taken one at a time: what collapses, what recovers, and what is never satisfied at all.">네 지표를 하나씩 뜯어본다. 무너지는 것과 회복되는 것, 그리고 끝내 채워지지 않는 것.</p>

      <section class="section" id="gapfall">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="동간거리의 붕괴" data-en="The Collapse of Spacing">동간거리의 붕괴</h2>
        </div>
        <p class="measure muted reveal" data-ko="건폐율 20퍼센트까지는 16종 전 유형이 인동간격을 충족한다. 30퍼센트에서 12종, 40퍼센트에서 7종, 50퍼센트에서 2종으로 줄어든다. 계단처럼 떨어진다." data-en="Up to 20% coverage all sixteen types meet the spacing requirement. At 30%, twelve. At 40%, seven. At 50%, two. It falls like a staircase.">건폐율 20퍼센트까지는 16종 전 유형이 인동간격을 충족한다. 30퍼센트에서 12종, 40퍼센트에서 7종, 50퍼센트에서 2종으로 줄어든다. 계단처럼 떨어진다.</p>
        <p class="measure muted reveal" data-ko="중요한 것은 이 붕괴가 기준을 완화해서 생긴 결과가 아니라는 점이다. 모든 배치안에 0.5H 기준을 똑같이 적용했다. 30퍼센트에서 나타나는 균형은 규칙을 느슨하게 해서 얻은 것이 아니라 건폐율 그 자체가 만든 결과다." data-en="What matters is that this collapse is not the product of a relaxed rule. The 0.5H standard was applied identically to every layout. The balance that appears at 30% was not bought by loosening anything. It is what the coverage itself produces.">중요한 것은 이 붕괴가 기준을 완화해서 생긴 결과가 아니라는 점이다. 모든 배치안에 0.5H 기준을 똑같이 적용했다. 30퍼센트에서 나타나는 균형은 규칙을 느슨하게 해서 얻은 것이 아니라 건폐율 그 자체가 만든 결과다.</p>
      </section>

      <section class="section" id="frontfail">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="채워지지 않는 전면점유율" data-en="Frontage, Never Met">채워지지 않는 전면점유율</h2>
        </div>
        <p class="measure muted reveal" data-ko="네 지표 가운데 전면점유율만은 거의 모든 배치안에서 충족되지 않았다. 96개 중 단 4개, 그것도 건폐율 50퍼센트에서만 나온다. 아파트 단지가 도시 가로에 접하는 방식이 얼마나 빈약한지를 보여주는 숫자다." data-en="Of the four metrics, frontage alone goes unmet in nearly every layout: four out of ninety-six, and only at 50% coverage. It is a number that measures how thinly the apartment estate touches the city street.">네 지표 가운데 전면점유율만은 거의 모든 배치안에서 충족되지 않았다. 96개 중 단 4개, 그것도 건폐율 50퍼센트에서만 나온다. 아파트 단지가 도시 가로에 접하는 방식이 얼마나 빈약한지를 보여주는 숫자다.</p>
        <p class="measure muted reveal" data-ko="비교할 기준이 있다. 토론토 고층건물 설계지침은 저층부 가로 전면의 60퍼센트 이상을 활성 용도로 채우고, 출입구를 7~10미터 간격으로 반복하도록 규정한다. 한국에는 이런 기준이 없다. 전면점유율이 96개 중 4개에서만 충족되는 것은 설계자의 실수가 아니라, 아무도 그것을 요구하지 않았기 때문이다." data-en="There is a benchmark. Toronto’s tall building guidelines require at least 60% of the base building’s street frontage to be active use, with entrances repeated every 7–10 m. Korea has no such rule. That frontage is met in only four of ninety-six layouts is not a designer’s error. It is that no one ever asked for it.">비교할 기준이 있다. 토론토 고층건물 설계지침은 저층부 가로 전면의 60퍼센트 이상을 활성 용도로 채우고, 출입구를 7~10미터 간격으로 반복하도록 규정한다. 한국에는 이런 기준이 없다. 전면점유율이 96개 중 4개에서만 충족되는 것은 설계자의 실수가 아니라, 아무도 그것을 요구하지 않았기 때문이다.</p>
      </section>

      <section class="section" id="ranktable">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="16종 유형의 성적표" data-en="Sixteen Types, Ranked">16종 유형의 성적표</h2>
        </div>
        <p class="measure muted reveal" data-ko="여섯 건폐율의 평균으로 16종 유형을 줄 세웠다. 정렬 기준은 시각위압 점수, 곧 조망앙각과 입체각 점수의 평균이다." data-en="Averaged across the six coverage steps, the sixteen types line up. The sort key is the visual-relief score, the mean of the view-angle and solid-angle scores.">여섯 건폐율의 평균으로 16종 유형을 줄 세웠다. 정렬 기준은 시각위압 점수, 곧 조망앙각과 입체각 점수의 평균이다.</p>
        <div class="tbl-wrap reveal" id="scMass" data-d="1"></div>
      </section>
    `
  },

  /* ==================== 8-3 매스 유형과 클러스터형 ==================== */
  "8-3": {
    titleKo: "매스 유형과 클러스터형",
    titleEn: "Mass Types and Clusters",
    body: `
      <p class="lead reveal" data-ko="상위권은 결합형 매스가 차지했다. 서로 다른 기하를 이어 붙인 유형들이다. 그 이유는 단순하고, 설계에 곧바로 쓸 수 있다." data-en="The upper ranks belong to the combined masses, the types that join different geometries together. The reason is simple, and it can be used directly in design.">상위권은 결합형 매스가 차지했다. 서로 다른 기하를 이어 붙인 유형들이다. 그 이유는 단순하고, 설계에 곧바로 쓸 수 있다.</p>

      <section class="section" id="cluster">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="마주 보는 쌍을 줄이다" data-en="Fewer Facing Pairs">마주 보는 쌍을 줄이다</h2>
        </div>
        <p class="measure muted reveal" data-ko="인동간격은 마주 보는 주동 사이의 문제다. 그러므로 마주 보는 쌍 자체를 줄이면 규제가 걸리는 지점이 줄어든다. 결합형 매스는 여러 동을 하나로 묶어 그 쌍의 수를 원천적으로 줄인다. I2+V4+I2와 V3+I2는 여섯 개 건폐율 전 구간에서 동간거리를 충족한 유일한 두 유형이다." data-en="Spacing is a problem between facing buildings. Reduce the facing pairs and you reduce the points where the rule bites. A combined mass ties several buildings into one, cutting the pair count at the root. I2+V4+I2 and V3+I2 are the only two types that meet the spacing requirement across all six coverage steps.">인동간격은 마주 보는 주동 사이의 문제다. 그러므로 마주 보는 쌍 자체를 줄이면 규제가 걸리는 지점이 줄어든다. 결합형 매스는 여러 동을 하나로 묶어 그 쌍의 수를 원천적으로 줄인다. I2+V4+I2와 V3+I2는 여섯 개 건폐율 전 구간에서 동간거리를 충족한 유일한 두 유형이다.</p>
        <p class="measure muted reveal" data-ko="이것이 뜻하는 바는 크다. 단순 선형 매스로는 건폐율 30퍼센트가 한계였던 균형점이, 결합형 매스에서는 40에서 50퍼센트까지 올라간다. 더 높은 건폐율을 담으면서도 인동을 지킬 수 있다는 뜻이다." data-en="The implication is large. With simple linear masses the balance point capped out around 30% coverage; with combined masses it rises to 40–50%. Higher coverage can be carried while spacing still holds.">이것이 뜻하는 바는 크다. 단순 선형 매스로는 건폐율 30퍼센트가 한계였던 균형점이, 결합형 매스에서는 40에서 50퍼센트까지 올라간다. 더 높은 건폐율을 담으면서도 인동을 지킬 수 있다는 뜻이다.</p>
        <p class="measure muted reveal" data-ko="반대로 하위권에는 I2, Y2, L22' 같은 단순한 형태가 모여 있다. 한국 아파트의 전형인 일자형 판상 매스가 꼴찌다. 부산 아파트 3,284개 주동을 전수조사한 연구에서도 일자형은 2005년까지 80퍼센트를 넘다가 2011년 이후 28퍼센트로 급감하고 L자형이 그 자리를 대신했다. 시장은 이미 답을 알고 있었던 셈이다." data-en="At the foot of the table sit the simple forms: I2, Y2, L22'. The straight slab, the archetype of the Korean apartment, comes last. A survey of 3,284 buildings in Busan found the straight type held over 80% until 2005 and fell to 28% after 2011, with the L-shape taking its place. The market had already worked this out.">반대로 하위권에는 I2, Y2, L22' 같은 단순한 형태가 모여 있다. 한국 아파트의 전형인 일자형 판상 매스가 꼴찌다. 부산 아파트 3,284개 주동을 전수조사한 연구에서도 일자형은 2005년까지 80퍼센트를 넘다가 2011년 이후 28퍼센트로 급감하고 L자형이 그 자리를 대신했다. 시장은 이미 답을 알고 있었던 셈이다.</p>

        <figure class="figure figure--wide reveal">
          <div class="figure__ph">
            <img data-fig src="assets/img/08/cluster-balance.svg" alt="결합형 주동의 동간거리 통과율" loading="lazy">
            <span data-ko="도판 · 결합형과 균형점 상향" data-en="Figure · combined masses raise the balance point">도판 · 결합형과 균형점 상향</span>
          </div>
          <figcaption class="figure__cap"><span data-ko="결합형 주동만 따로 보면 동간거리 통과율이 훨씬 오래 버틴다. 16종 전체로는 30퍼센트에서 엇갈리던 두 흐름이, 결합형에서는 45퍼센트 부근까지 밀린다" data-en="Taken on their own, the combined masses hold their spacing far longer. What crossed at 30% across all sixteen types is pushed out to around 45%">결합형 주동만 따로 보면 동간거리 통과율이 훨씬 오래 버틴다. 16종 전체로는 30퍼센트에서 엇갈리던 두 흐름이, 결합형에서는 45퍼센트 부근까지 밀린다</span></figcaption>
        </figure>
      </section>

      <section class="section" id="conclusion8">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="저층화가 답은 아니다" data-en="Going Low Is Not the Answer">저층화가 답은 아니다</h2>
        </div>
        <p class="measure muted reveal" data-ko="위압감을 줄이려면 건물을 낮추라는 말은 절반만 맞다. 무한정 낮추면 동이 늘어 인동이 무너지고, 단지 안의 거주성이 위협받는다. 도시 보행자의 시지각을 기준으로 보면, 답은 극단이 아니라 중간 건폐율에 있다. 그리고 매스를 결합해 마주 보는 쌍을 줄이면, 그 중간 건폐율의 상한을 더 올릴 수 있다." data-en="‘Lower the buildings to lessen the pressure’ is only half true. Lower them without limit and the buildings multiply, spacing collapses, and life inside the estate is threatened. Measured by the pedestrian’s perception, the answer lies not at either extreme but at middle coverage, and combining masses to cut the facing pairs lifts the ceiling of that middle.">위압감을 줄이려면 건물을 낮추라는 말은 절반만 맞다. 무한정 낮추면 동이 늘어 인동이 무너지고, 단지 안의 거주성이 위협받는다. 도시 보행자의 시지각을 기준으로 보면, 답은 극단이 아니라 중간 건폐율에 있다. 그리고 매스를 결합해 마주 보는 쌍을 줄이면, 그 중간 건폐율의 상한을 더 올릴 수 있다.</p>
      </section>
    `
  },

  /* ==================== 6-1 상관과 회귀의 결과 ==================== */
  "6-1": {
    titleKo: "상관과 회귀의 결과",
    titleEn: "Correlation and Regression",
    body: `
      <p class="lead reveal" data-ko="21개 단지에서 느낀 위압감의 순위를, 그 단지의 물리 지표와 사진에서 뽑은 시각 지표에 나란히 놓았다. 어떤 값이 위압감과 함께 움직이는가." data-en="The oppressiveness ranking of 21 complexes, set beside each complex’s physical metrics and the visual metrics extracted from its photographs. Which values move with the feeling?">21개 단지에서 느낀 위압감의 순위를, 그 단지의 물리 지표와 사진에서 뽑은 시각 지표에 나란히 놓았다. 어떤 값이 위압감과 함께 움직이는가.</p>

      <section class="section" id="corr">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="다섯 개의 지표가 남았다" data-en="Five Metrics Survived">다섯 개의 지표가 남았다</h2>
        </div>
        <p class="measure muted reveal" data-ko="열네 개 지표 가운데 통계적으로 유의한 것은 다섯 개였다. 용적률과 최고층, 건폐율은 값이 클수록 위압감이 커졌고, 동수와 세대수는 반대로 클수록 위압감이 작아졌다. 같은 용적률을 여러 동에 나누어 담을수록 덜 위압적이라는 뜻이다." data-en="Of fourteen metrics, five were statistically significant. Floor area ratio, maximum floors, and coverage all raised oppressiveness as they grew; building count and household count lowered it. The same floor area ratio, spread across more buildings, presses less.">열네 개 지표 가운데 통계적으로 유의한 것은 다섯 개였다. 용적률과 최고층, 건폐율은 값이 클수록 위압감이 커졌고, 동수와 세대수는 반대로 클수록 위압감이 작아졌다. 같은 용적률을 여러 동에 나누어 담을수록 덜 위압적이라는 뜻이다.</p>
        <p class="measure muted reveal" data-ko="주의할 점이 있다. 종속 변인이 순위이고 1등이 가장 위압적이므로, 상관계수가 음수일 때 위압감이 커진다. 아래 표에서는 부호 대신 방향을 함께 적었다." data-en="One caution: the dependent variable is a rank where 1 is the most oppressive, so a negative coefficient means more oppression. The table below states the direction alongside the sign.">주의할 점이 있다. 종속 변인이 순위이고 1등이 가장 위압적이므로, 상관계수가 음수일 때 위압감이 커진다. 아래 표에서는 부호 대신 방향을 함께 적었다.</p>

        <div class="tbl-wrap reveal" id="regCorr" data-d="1"></div>

        <figure class="figure figure--wide reveal">
          <div class="figure__ph">
            <img data-fig src="assets/img/06/regression-scatter.svg" alt="위압감 순위와 용적률·최고층·동수의 산점도" loading="lazy">
            <span data-ko="도판 · 세 지표의 산점도" data-en="Figure · three metrics against rank">도판 · 세 지표의 산점도</span>
          </div>
          <figcaption class="figure__cap"><span data-ko="세로축은 위압감 순위이고, 위쪽이 1위로 가장 위압적이다. 용적률과 최고층이 커질수록 점이 위로 올라가고, 동수가 늘수록 아래로 내려간다" data-en="The vertical axis is the oppressiveness rank, with rank 1 at the top. As floor area ratio and top floor rise, the points climb; as building count rises, they fall">세로축은 위압감 순위이고, 위쪽이 1위로 가장 위압적이다. 용적률과 최고층이 커질수록 점이 위로 올라가고, 동수가 늘수록 아래로 내려간다</span></figcaption>
        </figure>
      </section>

      <section class="section" id="ols">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="60퍼센트를 설명한다" data-en="Explaining 60 Percent">60퍼센트를 설명한다</h2>
        </div>
        <p class="measure muted reveal" data-ko="유의한 지표 넷을 묶어 다중회귀 모형을 세우면 위압감 변동의 약 60퍼센트가 설명된다. 보행자가 막연히 느끼는 감각이 상당 부분 측정 가능한 물리량으로 환원된다는 뜻이다. 남은 40퍼센트는 이 네 지표로는 잡히지 않는 무엇이다. 색채, 재료, 담장, 가로수 같은 것들이 그 안에 있을 것이다." data-en="Combining the four significant metrics into a multiple regression explains about 60% of the variance. A pedestrian’s vague sense reduces, in large part, to measurable quantities. The remaining 40% is what these four cannot see: colour, material, walls, street trees.">유의한 지표 넷을 묶어 다중회귀 모형을 세우면 위압감 변동의 약 60퍼센트가 설명된다. 보행자가 막연히 느끼는 감각이 상당 부분 측정 가능한 물리량으로 환원된다는 뜻이다. 남은 40퍼센트는 이 네 지표로는 잡히지 않는 무엇이다. 색채, 재료, 담장, 가로수 같은 것들이 그 안에 있을 것이다.</p>

        <div class="numbers reveal" data-d="1" id="regOls"></div>

        <p class="measure muted reveal" data-ko="다만 이 모형의 개별 계수는 읽지 않는 편이 낫다. 동수와 세대수의 분산팽창지수가 각각 33과 28로, 둘이 사실상 같은 것을 재고 있기 때문이다. 표본이 21개뿐이라는 한계도 분명하다. 여기서 얻을 수 있는 결론은 개별 지표의 정확한 기여도가 아니라, 위압감이 물리량으로 상당 부분 설명된다는 사실 그 자체다." data-en="The individual coefficients, however, are best left unread: the variance inflation factors for building and household count are 33 and 28, which means the two are measuring nearly the same thing. With only 21 cases, the limit is plain. What this model earns is not the exact weight of each metric but the fact that oppressiveness is largely explicable in physical terms.">다만 이 모형의 개별 계수는 읽지 않는 편이 낫다. 동수와 세대수의 분산팽창지수가 각각 33과 28로, 둘이 사실상 같은 것을 재고 있기 때문이다. 표본이 21개뿐이라는 한계도 분명하다. 여기서 얻을 수 있는 결론은 개별 지표의 정확한 기여도가 아니라, 위압감이 물리량으로 상당 부분 설명된다는 사실 그 자체다.</p>
      </section>
    `
  },

  /* ==================== 6-2 해석: 용적률·높이·분산 ==================== */
  "6-2": {
    titleKo: "용적률·높이·분산",
    titleEn: "Floor Area Ratio, Height, Dispersion",
    body: `
      <p class="lead reveal" data-ko="유의했던 다섯 지표는 세 개의 축으로 묶인다. 얼마나 많이 얹었는가, 얼마나 높은가, 얼마나 나뉘어 있는가." data-en="The five significant metrics resolve into three axes: how much floor area, how tall, how divided.">유의했던 다섯 지표는 세 개의 축으로 묶인다. 얼마나 많이 얹었는가, 얼마나 높은가, 얼마나 나뉘어 있는가.</p>

      <div class="stepper stepper--3 reveal" data-d="1">
        <div class="step">
          <span class="step__n">01</span>
          <h3 class="step__t" data-ko="용적률" data-en="Floor area ratio">용적률</h3>
          <p class="step__d" data-ko="같은 대지에 얼마나 많은 연면적을 얹었는가. 클수록 위압적이다(r −0.57)." data-en="How much floor area sits on the site. More presses harder (r −0.57).">같은 대지에 얼마나 많은 연면적을 얹었는가. 클수록 위압적이다(r −0.57).</p>
        </div>
        <div class="step">
          <span class="step__n">02</span>
          <h3 class="step__t" data-ko="높이" data-en="Height">높이</h3>
          <p class="step__d" data-ko="최고층. 상관이 가장 강했던 지표다(r −0.61). 올려다보는 각도가 위압감의 실체에 가장 가깝다." data-en="Maximum floors, the strongest correlate (r −0.61). The angle you must look up is closest to the thing itself.">최고층. 상관이 가장 강했던 지표다(r −0.61). 올려다보는 각도가 위압감의 실체에 가장 가깝다.</p>
        </div>
        <div class="step">
          <span class="step__n">03</span>
          <h3 class="step__t" data-ko="분산" data-en="Dispersion">분산</h3>
          <p class="step__d" data-ko="동수·세대수. 유일하게 부호가 반대인 축이다. 같은 규모를 여러 동으로 나누면 매스 사이로 시야가 열린다." data-en="Building and household count, the one axis with the opposite sign. Split the same bulk into more masses and sight lines open between them.">동수·세대수. 유일하게 부호가 반대인 축이다. 같은 규모를 여러 동으로 나누면 매스 사이로 시야가 열린다.</p>
        </div>
      </div>

      <p class="measure muted reveal" data-ko="다섯 번째 지표인 건폐율은 따로 떼어 놓아야 한다. 상관은 유의했다(r −0.45). 클수록 위압적이라는 뜻이다. 그러나 이 숫자를 그대로 읽으면 안 된다. 21곳에서 건폐율과 용적률의 상관은 0.88이다. 건폐율이 높은 단지는 예외 없이 용적률도 높은 상업지역 초고층 주상복합이었다. 청량리역 한양수자인은 건폐율 59퍼센트에 용적률 998퍼센트, 롯데캐슬 SKY-L65는 58퍼센트에 994퍼센트다. 건폐율이 위압감을 키운 것이 아니라, 용적률이 높은 곳의 건폐율도 덩달아 높았을 뿐이다." data-en="The fifth metric, coverage, must be set apart. Its correlation was significant (r −0.45), which reads as: more coverage, more pressure. But the number cannot be taken at face value. Across the twenty-one, coverage and floor area ratio correlate at 0.88. Every high-coverage estate was a commercial-zone tower complex that also carried a high ratio. Cheongnyangni Hanyang Sujain sits at 59% coverage and 998% ratio; Lotte Castle SKY-L65 at 58% and 994%. Coverage did not raise the pressure. It merely rose alongside the ratio that did.">다섯 번째 지표인 건폐율은 따로 떼어 놓아야 한다. 상관은 유의했다(r −0.45). 클수록 위압적이라는 뜻이다. 그러나 이 숫자를 그대로 읽으면 안 된다. 21곳에서 건폐율과 용적률의 상관은 0.88이다. 건폐율이 높은 단지는 예외 없이 용적률도 높은 상업지역 초고층 주상복합이었다. 청량리역 한양수자인은 건폐율 59퍼센트에 용적률 998퍼센트, 롯데캐슬 SKY-L65는 58퍼센트에 994퍼센트다. 건폐율이 위압감을 키운 것이 아니라, 용적률이 높은 곳의 건폐율도 덩달아 높았을 뿐이다.</p>

      <p class="measure muted reveal" data-ko="용적률을 고정하고 건폐율만 움직이면 부호가 뒤집힌다. 같은 연면적을 더 넓은 바닥에 펴면 층수가 낮아지고 위압은 오히려 풀린다. 7장과 8장이 보여주는 것이 정확히 그것이다. 관찰만으로는 이 둘을 갈라낼 수 없었고, 그래서 실험이 필요했다." data-en="Hold the floor area ratio and move only the coverage, and the sign flips. Spread the same floor area across a wider footprint and the buildings come down; the pressure eases. That is exactly what Chapters 7 and 8 show. Observation alone could not separate the two, and that is why the experiment was needed.">용적률을 고정하고 건폐율만 움직이면 부호가 뒤집힌다. 같은 연면적을 더 넓은 바닥에 펴면 층수가 낮아지고 위압은 오히려 풀린다. 7장과 8장이 보여주는 것이 정확히 그것이다. 관찰만으로는 이 둘을 갈라낼 수 없었고, 그래서 실험이 필요했다.</p>

      <section class="section" id="dispersion">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="분산이라는 단서" data-en="Dispersion as the Lever">분산이라는 단서</h2>
        </div>
        <p class="measure muted reveal" data-ko="용적률과 높이는 사업성이 걸린 값이라 설계자가 마음대로 낮출 수 없다. 그러나 분산은 다르다. 용적률을 그대로 둔 채 동수를 늘리면 층수가 낮아지고, 매스 사이에 틈이 생긴다. 이것이 설계로 다룰 수 있는 유일한 축이다." data-en="Floor area ratio and height are tied to feasibility; a designer cannot simply lower them. Dispersion is different. Hold the floor area ratio and add buildings: floors drop, and gaps open between masses. This is the one axis design can actually work.">용적률과 높이는 사업성이 걸린 값이라 설계자가 마음대로 낮출 수 없다. 그러나 분산은 다르다. 용적률을 그대로 둔 채 동수를 늘리면 층수가 낮아지고, 매스 사이에 틈이 생긴다. 이것이 설계로 다룰 수 있는 유일한 축이다.</p>
        <p class="measure muted reveal" data-ko="선행 연구도 같은 곳을 가리킨다. 서울시 재개발·재건축 단지를 전수조사한 연구는 가로개방감이 주동의 형태나 배치 유형보다 대지경계선에서 얼마나 물러났는가에 더 좌우된다고 보고했고, 5층짜리 반포주공 1단지가 아홉 개 단지 가운데 차폐도가 가장 높았던 사례는 차폐를 결정하는 것이 층수가 아니라 주동의 길이와 간격임을 보여준다." data-en="Prior work points the same way. A survey of Seoul’s redevelopment estates found street openness governed less by building form or layout type than by how far the mass steps back from the boundary; and the five-storey Banpo Jugong 1 scoring the highest obstruction of nine estates shows that what closes a street is not height but the length and spacing of the slabs.">선행 연구도 같은 곳을 가리킨다. 서울시 재개발·재건축 단지를 전수조사한 연구는 가로개방감이 주동의 형태나 배치 유형보다 대지경계선에서 얼마나 물러났는가에 더 좌우된다고 보고했고, 5층짜리 반포주공 1단지가 아홉 개 단지 가운데 차폐도가 가장 높았던 사례는 차폐를 결정하는 것이 층수가 아니라 주동의 길이와 간격임을 보여준다.</p>
        <p class="measure muted reveal" data-ko="7장의 실험은 정확히 이 지점에서 출발한다. 용적률 250퍼센트를 고정한 채 건폐율만 움직이면, 동수와 층수가 자동으로 뒤바뀐다. 분산이라는 축 하나만 남기고 나머지를 통제하는 것이다." data-en="Chapter 7 begins exactly here. Fix the floor area ratio at 250% and move only the coverage: building count and floor count trade places automatically. One axis, dispersion, is left free, and everything else is held.">7장의 실험은 정확히 이 지점에서 출발한다. 용적률 250퍼센트를 고정한 채 건폐율만 움직이면, 동수와 층수가 자동으로 뒤바뀐다. 분산이라는 축 하나만 남기고 나머지를 통제하는 것이다.</p>
      </section>
    `
  },

  /* ==================== 6-3 대상지 선정 ==================== */
  "6-3": {
    titleKo: "대상지 선정",
    titleEn: "Site Selection",
    body: `
      <p class="lead reveal" data-ko="위압감이 가장 첨예하게 드러나는 단지를 실험의 대지로 삼는다. 21곳 가운데 하나를 고르는 데는 두 번의 거름이 필요했다." data-en="The experiment needs the site where oppressiveness is sharpest. Choosing one of the twenty-one took two filters.">위압감이 가장 첨예하게 드러나는 단지를 실험의 대지로 삼는다. 21곳 가운데 하나를 고르는 데는 두 번의 거름이 필요했다.</p>

      <section class="section" id="filter">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="상업지역을 걸러내다" data-en="Filtering Out Commercial Zones">상업지역을 걸러내다</h2>
        </div>
        <p class="measure muted reveal" data-ko="위압감 순위 1위는 롯데캐슬 SKY-L65였다. 65층, 용적률 994퍼센트. 압도적인 수치지만 이 단지는 상업지역에 서 있다. 용적률 조건이 근본적으로 다르므로 일반적인 아파트 단지를 대변할 수 없고, 여기서 얻은 결론을 다른 단지에 적용할 수도 없다." data-en="The most oppressive was Lotte Castle SKY-L65, at 65 storeys and FAR 994%. Overwhelming figures, but the complex stands in a commercial zone. Its floor area ratio conditions are fundamentally different; it cannot stand for ordinary apartment estates, and conclusions drawn there do not transfer.">위압감 순위 1위는 롯데캐슬 SKY-L65였다. 65층, 용적률 994퍼센트. 압도적인 수치지만 이 단지는 상업지역에 서 있다. 용적률 조건이 근본적으로 다르므로 일반적인 아파트 단지를 대변할 수 없고, 여기서 얻은 결론을 다른 단지에 적용할 수도 없다.</p>
        <p class="measure muted reveal" data-ko="그래서 일반주거지역으로 범위를 좁혔다. 그 안에서 위압감이 가장 높게 나타난 단지가 잠실르엘이다." data-en="So the field narrows to general residential zones. Within it, the highest oppressiveness belongs to Jamsil Le-el.">그래서 일반주거지역으로 범위를 좁혔다. 그 안에서 위압감이 가장 높게 나타난 단지가 잠실르엘이다.</p>
      </section>

      <section class="section" id="target">
        <div class="section__head reveal">
          <h2 class="section__title" data-ko="잠실르엘" data-en="Jamsil Le-el">잠실르엘</h2>
        </div>
        <div class="cols">
          <p class="measure muted reveal" data-ko="송파구 올림픽로에 면한 약 72,695제곱미터의 대지. 석촌호수와 올림픽공원, 지하철역을 이웃한 제3종 일반주거지역이다. 저건폐·초고층이 만들어 내는 가로 문제를 가장 선명하게 담고 있어, 96개 배치안을 얹을 실험대로 삼기에 적합하다." data-en="A site of roughly 72,695 ㎡ on Olympic-ro in Songpa-gu, a Class 3 general residential zone neighbouring Seokchon Lake, Olympic Park, and a subway station. It holds the street problem of sparse-coverage high-rise in its clearest form, and so makes a fitting bed for the 96 layouts.">송파구 올림픽로에 면한 약 72,695제곱미터의 대지. 석촌호수와 올림픽공원, 지하철역을 이웃한 제3종 일반주거지역이다. 저건폐·초고층이 만들어 내는 가로 문제를 가장 선명하게 담고 있어, 96개 배치안을 얹을 실험대로 삼기에 적합하다.</p>
          <dl class="kv reveal" data-d="1">
            <div><dt data-ko="대지면적" data-en="Site area">대지면적</dt><dd>72,695 ㎡</dd></div>
            <div><dt data-ko="용도지역" data-en="Zoning">용도지역</dt><dd data-ko="제3종 일반주거지역" data-en="Class 3 general residential">제3종 일반주거지역</dd></div>
            <div><dt data-ko="동수" data-en="Buildings">동수</dt><dd data-ko="13동" data-en="13">13동</dd></div>
            <div><dt data-ko="세대수" data-en="Households">세대수</dt><dd data-ko="1,865세대" data-en="1,865">1,865세대</dd></div>
            <div><dt data-ko="건폐율" data-en="BCR">건폐율</dt><dd>17 %</dd></div>
            <div><dt data-ko="용적률" data-en="FAR">용적률</dt><dd>299 %</dd></div>
            <div><dt data-ko="층수" data-en="Floors">층수</dt><dd data-ko="15–35층" data-en="15–35">15–35층</dd></div>
          </dl>
        </div>

        <p class="readout reveal"><span data-ko="선별은 두 번 걸렀다. 먼저 21곳에서 상업지역에 선 초고층 주상복합을 제외했다. 위압감 1위 롯데캐슬 SKY-L65와 3위 청량리역 한양수자인 그라시엘이 여기서 빠진다. 이들은 애초에 일반주거지역의 배치 규칙을 적용받지 않으므로 실험대가 될 수 없다. 남은 일반주거지역 단지 가운데 위압감이 가장 높았던 곳이 잠실르엘이다. 7장의 지도는 이 대지가 실제로 어디에 놓여 있는지를 보여 준다." data-en="The filter ran twice. First, the commercial-zone towers were removed from the twenty-one, which takes out Lotte Castle SKY-L65 (rank 1) and Cheongnyangni Hanyang Sujain Graciel (rank 3). Standing outside the layout rules of a general residential zone, they cannot serve as a test bed. Of the general-residential estates that remain, Jamsil Le-el ranked highest for oppressiveness. The map in Chapter 7 shows where the site actually sits.">선별은 두 번 걸렀다. 먼저 21곳에서 상업지역에 선 초고층 주상복합을 제외했다. 위압감 1위 롯데캐슬 SKY-L65와 3위 청량리역 한양수자인 그라시엘이 여기서 빠진다. 이들은 애초에 일반주거지역의 배치 규칙을 적용받지 않으므로 실험대가 될 수 없다. 남은 일반주거지역 단지 가운데 위압감이 가장 높았던 곳이 잠실르엘이다. 7장의 지도는 이 대지가 실제로 어디에 놓여 있는지를 보여 준다.</span></p>
      </section>
    `
  }

};
