/* =========================================================
   8장 — 상충하는 지표와 균형점
   출처: 4. 배치 분석/2. 지표별/_종합점수_표.md · _판정점수_표.md · _통과거리_순위.md (2026-06 산출)

   · 전면·동간 = '적절' 판정을 받은 유형 수 (분모 16)
   · 입체각·조망앙각 = 위압 점수. 통과거리를 [7m=100, 200m=0] 정규화 — 클수록 위압이 가까이서 해소
   · 시각위압 점수 = (입체각 + 조망앙각) / 2
   · 통과거리 = 지표가 임계 아래로 내려가는 거리(m). 작을수록 위압이 가까이서 해소
       입체각 임계 7.1 %FOV · 조망앙각 임계 27°
   · 종합 점수 = (입체각 + 조망앙각 + 동간충족률 + 전면충족률) / 4, 각 항 100점 환산

   2026-07-14 수정 — 원본(_통과거리_순위.md)과 대조해 두 건을 고쳤다.
     ① 통과거리: 10·20·30·40% 가 132·78·60·52 로 잘못 들어가 있었다 (→ 124·75·57·50).
        입체각/조망앙각 통과거리를 분리해 함께 싣는다.
     ② byMass 가 시각위압 점수로만 정렬돼 동간거리를 못 지키는 L24' 가 2위로 올라왔다.
        네 지표를 반영한 종합 점수(total)를 넣고 그 순서로 재정렬했다.
   ========================================================= */
window.SCORES = {
  /* 건폐율별 — 두 힘이 교차하는 지점을 보여주는 핵심 표
     solidPass·angPass 를 나란히 놓으면, 조망앙각은 170→8m 로 무너지는데
     입체각은 183→79m 에서 멈춘다. 입체각이 더 엄격한 지표라는 사실이 여기서 보인다. */
  byBcr: [
    { bcr: "5%",  front: 0, gap: 16, solid: 9,  ang: 16,  solidPass: 183, angPass: 170, pass: 177 },
    { bcr: "10%", front: 0, gap: 16, solid: 15, ang: 64,  solidPass: 171, angPass: 76,  pass: 124 },
    { bcr: "20%", front: 0, gap: 16, solid: 41, ang: 89,  solidPass: 122, angPass: 28,  pass: 75 },
    { bcr: "30%", front: 0, gap: 12, solid: 54, ang: 94,  solidPass: 96,  angPass: 18,  pass: 57 },
    { bcr: "40%", front: 0, gap: 7,  solid: 58, ang: 97,  solidPass: 87,  angPass: 12,  pass: 50 },
    { bcr: "50%", front: 4, gap: 2,  solid: 63, ang: 100, solidPass: 79,  angPass: 8,   pass: 43 }
  ],

  /* 매스 유형별 — 6개 건폐율 평균, 종합 점수 순
     동간거리를 6구간 전부 지키는 유형은 I2+V4+I2 와 V3+I2 둘뿐이다. */
  byMass: [
    { rank: 1,  type: "I2+V4+I2",  front: 0, gap: 6, solid: 42, ang: 79, score: 60, total: 55.3 },
    { rank: 2,  type: "V3+I2",     front: 0, gap: 6, solid: 41, ang: 77, score: 59, total: 54.5 },
    { rank: 3,  type: "ㅁ3+L11",   front: 0, gap: 5, solid: 44, ang: 79, score: 62, total: 51.6 },
    { rank: 4,  type: "ㅁ4",       front: 0, gap: 5, solid: 42, ang: 79, score: 60, total: 51.1 },
    { rank: 5,  type: "V4",        front: 0, gap: 5, solid: 40, ang: 78, score: 59, total: 50.3 },
    { rank: 6,  type: "X4",        front: 0, gap: 5, solid: 41, ang: 76, score: 58, total: 50.1 },
    { rank: 7,  type: "ㅁ3",       front: 1, gap: 4, solid: 40, ang: 76, score: 58, total: 49.8 },
    { rank: 8,  type: "Y3",        front: 0, gap: 5, solid: 38, ang: 75, score: 56, total: 49.1 },
    { rank: 9,  type: "I2",        front: 1, gap: 4, solid: 36, ang: 74, score: 55, total: 48.3 },
    { rank: 10, type: "V4+I2",     front: 0, gap: 4, solid: 41, ang: 77, score: 59, total: 46.2 },
    { rank: 11, type: "V3",        front: 0, gap: 4, solid: 40, ang: 77, score: 58, total: 45.9 },
    { rank: 12, type: "L22",       front: 0, gap: 4, solid: 40, ang: 76, score: 58, total: 45.7 },
    { rank: 13, type: "I4",        front: 1, gap: 3, solid: 38, ang: 76, score: 57, total: 45.2 },
    { rank: 14, type: "Y2",        front: 1, gap: 3, solid: 37, ang: 74, score: 56, total: 44.4 },
    { rank: 15, type: "L24'",      front: 0, gap: 3, solid: 40, ang: 79, score: 60, total: 42.3 },
    { rank: 16, type: "L22'",      front: 0, gap: 3, solid: 38, ang: 75, score: 56, total: 40.8 }
  ]
};
