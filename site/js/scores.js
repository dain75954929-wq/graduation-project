/* =========================================================
   8장 — 상충하는 지표와 균형점
   출처: 4. 배치 분석/2. 지표별/_종합점수_표.md (2026-06 산출)
   · 전면·동간 = '적절' 판정을 받은 유형 수 (분모 16)
   · 입체각·조망앙각 = 위압 점수. 통과거리를 [7m=100, 200m=0] 정규화 — 클수록 위압이 가까이서 해소
   · 시각위압 점수 = (입체각 + 조망앙각) / 2
   ========================================================= */
window.SCORES = {
  /* 건폐율별 — 두 힘이 교차하는 지점을 보여주는 핵심 표 */
  byBcr: [
    { bcr: "5%",  front: 0, gap: 16, solid: 9,  ang: 16,  pass: 177 },
    { bcr: "10%", front: 0, gap: 16, solid: 15, ang: 64,  pass: 132 },
    { bcr: "20%", front: 0, gap: 16, solid: 41, ang: 89,  pass: 78 },
    { bcr: "30%", front: 0, gap: 12, solid: 54, ang: 94,  pass: 60 },
    { bcr: "40%", front: 0, gap: 7,  solid: 58, ang: 97,  pass: 52 },
    { bcr: "50%", front: 4, gap: 2,  solid: 63, ang: 100, pass: 43 }
  ],

  /* 매스 유형별 — 6개 건폐율 평균, 시각위압 점수 순 */
  byMass: [
    { rank: 1,  type: "ㅁ3+L11",   front: 0, gap: 5, solid: 44, ang: 79, score: 62 },
    { rank: 2,  type: "L24'",      front: 0, gap: 3, solid: 40, ang: 79, score: 60 },
    { rank: 3,  type: "ㅁ4",       front: 0, gap: 5, solid: 42, ang: 79, score: 60 },
    { rank: 4,  type: "I2+V4+I2",  front: 0, gap: 6, solid: 42, ang: 79, score: 60 },
    { rank: 5,  type: "V4",        front: 0, gap: 5, solid: 40, ang: 78, score: 59 },
    { rank: 6,  type: "V4+I2",     front: 0, gap: 4, solid: 41, ang: 77, score: 59 },
    { rank: 7,  type: "V3+I2",     front: 0, gap: 6, solid: 41, ang: 77, score: 59 },
    { rank: 8,  type: "L22",       front: 0, gap: 4, solid: 40, ang: 76, score: 58 },
    { rank: 9,  type: "V3",        front: 0, gap: 4, solid: 40, ang: 77, score: 58 },
    { rank: 10, type: "X4",        front: 0, gap: 5, solid: 41, ang: 76, score: 58 },
    { rank: 11, type: "ㅁ3",       front: 1, gap: 4, solid: 40, ang: 76, score: 58 },
    { rank: 12, type: "I4",        front: 1, gap: 3, solid: 38, ang: 76, score: 57 },
    { rank: 13, type: "L22'",      front: 0, gap: 3, solid: 38, ang: 75, score: 56 },
    { rank: 14, type: "Y2",        front: 1, gap: 3, solid: 37, ang: 74, score: 56 },
    { rank: 15, type: "Y3",        front: 0, gap: 5, solid: 38, ang: 75, score: 56 },
    { rank: 16, type: "I2",        front: 1, gap: 4, solid: 36, ang: 74, score: 55 }
  ]
};
