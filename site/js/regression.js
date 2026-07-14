/* =========================================================
   6장 — 위압감은 어디에서 오는가 (상관·회귀 결과)
   출처: 2. apartment analysis/vscode_pipeline/outputs/regression_representative_report.md
        (표본 21개 단지, 종속변수 = 위압감 순위, 1 = 가장 강함)
   ※ 순위가 낮을수록(=1에 가까울수록) 위압감이 크므로, 상관계수의 부호는 뒤집어 읽어야 한다.
     r 이 음수 → 그 지표가 클수록 순위 숫자가 작아진다 → 위압감이 커진다.
   ========================================================= */
window.REGRESSION = {
  n: 21,
  note: "종속변수 = 주관 위압감 순위(1 = 가장 강함). r 이 음수면 그 지표가 클수록 위압감이 크다.",

  /* 단변량 상관 — 위압감 순위 vs 각 지표 */
  corr: [
    { key: "far",     ko: "용적률",          en: "FAR",              n: 21, r: -0.571, p: 0.007, rho: -0.507, prho: 0.019, sig: true,  dir: "위압감 ↑" },
    { key: "floors",  ko: "최고층",          en: "Max floors",       n: 18, r: -0.606, p: 0.008, rho: -0.462, prho: 0.053, sig: true,  dir: "위압감 ↑" },
    { key: "n",       ko: "동수",            en: "Buildings",        n: 21, r:  0.447, p: 0.042, rho:  0.452, prho: 0.040, sig: true,  dir: "위압감 ↓" },
    { key: "hh",      ko: "세대수",          en: "Households",       n: 21, r:  0.437, p: 0.048, rho:  0.348, prho: 0.122, sig: true,  dir: "위압감 ↓" },
    { key: "bcr",     ko: "건폐율",          en: "BCR",              n: 21, r: -0.446, p: 0.043, rho: -0.212, prho: 0.356, sig: true,  dir: "위압감 ↑" },
    { key: "road",    ko: "도로 점유율",      en: "Road area %",      n: 21, r:  0.336, p: 0.136, rho:  0.341, prho: 0.130, sig: false, dir: "—" },
    { key: "cy",      ko: "건물 무게중심",    en: "Building centroid", n: 21, r: -0.312, p: 0.169, rho: -0.303, prho: 0.182, sig: false, dir: "—" },
    { key: "bld",     ko: "건물 점유율",      en: "Building area %",  n: 21, r: -0.323, p: 0.153, rho: -0.234, prho: 0.308, sig: false, dir: "—" },
    { key: "veg",     ko: "녹시율",          en: "Greenery %",       n: 21, r:  0.185, p: 0.422, rho:  0.226, prho: 0.325, sig: false, dir: "—" },
    { key: "barrier", ko: "차폐 강도",       en: "Barrier",          n: 21, r:  0.210, p: 0.361, rho:  0.217, prho: 0.346, sig: false, dir: "—" },
    { key: "furn",    ko: "구성부재 점유율",  en: "Furniture %",      n: 21, r:  0.160, p: 0.487, rho:  0.197, prho: 0.391, sig: false, dir: "—" },
    { key: "sky",     ko: "하늘 점유율(SVF)", en: "Sky view factor",  n: 21, r:  0.101, p: 0.663, rho:  0.119, prho: 0.606, sig: false, dir: "—" },
    { key: "rw",      ko: "도로폭",          en: "Road width",       n: 21, r: -0.038, p: 0.871, rho: -0.086, prho: 0.712, sig: false, dir: "—" },
    { key: "open",    ko: "출입 자유",       en: "Open access",      n: 21, r:  0.020, p: 0.931, rho:  0.020, prho: 0.931, sig: false, dir: "—" }
  ],

  /* 표준화 다중회귀 (OLS) — 상관 상위 4개 지표 */
  ols: {
    vars: ["용적률", "최고층", "동수", "세대수"],
    n: 18,
    r2: 0.603,
    adjR2: 0.480,
    f: 4.930,
    pf: 0.0122,
    coef: [
      { ko: "용적률", en: "FAR",        b:  2.567, se: 3.340, t:  0.769, p: 0.456, vif: 9.22 },
      { ko: "최고층", en: "Max floors", b: -5.972, se: 2.817, t: -2.120, p: 0.054, vif: null },
      { ko: "동수",   en: "Buildings",  b: -2.692, se: 6.389, t: -0.421, p: 0.680, vif: 33 },
      { ko: "세대수", en: "Households", b:  5.824, se: 5.882, t:  0.990, p: 0.340, vif: 28 }
    ],
    caveat: "동수·세대수의 VIF 가 33·28 로 공선성이 크다 — 개별 계수는 신뢰할 수 없고, 모형 전체의 설명력(R² 0.60)만 읽어야 한다."
  }
};
