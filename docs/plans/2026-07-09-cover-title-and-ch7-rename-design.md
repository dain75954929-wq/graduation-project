# 표지 제목·부제 도입 + 7장 제목 축약 — 설계

> 2026-07-09 · 승인 완료 · brainstorming 스킬 절차에 따름

## 배경

사이트에는 화면에 보이는 제목이 없었다. 표지 푸터 `Title` 칸에 긴 연구제목
("고정 용적률(250%)하 건폐율 변화에 따른 공동주택 배치안의 가로공간 성능 분석")만
작게 들어가 있었고, 화면 대부분은 키네틱 스카이라인 캔버스가 차지한다.

책자(`booklet_구성안_및_도입텍스트.md`) 제목이 "보기 좋은 아파트에 대하여"로 확정되면서
사이트와 책자의 제목이 어긋났다. 7장 제목도 책자 쪽에서 축약이 결정되었다.

## 결정

| 항목 | 결정 |
|---|---|
| 기존 연구제목 | **완전 대체**. 표지·`<title>`·meta에서 폐기 |
| 제목 | 보기 좋은 아파트에 대하여 / *On Apartments Worth Looking At* |
| 부제 | 도시 보행자의 시지각을 기준으로 한 아파트 배치의 정량 분석 / *A Quantitative Analysis of Apartment Layouts from the Urban Pedestrian's Visual Perception* |
| 배치 | **푸터 `Title` 칸만 교체**. 스카이라인이 표지의 주인공이라는 컨셉을 유지 |
| 7장 제목 | `하나의 대지, 96개의 배치` → `96개의 배치` (en: `One Site, 96 Layouts` → `96 Layouts`) |

### 검토했으나 채택하지 않은 안

- **표지 중앙 대형 제목 오버레이**: 임팩트는 크지만 낙하하는 단어와 겹쳐 가독성이 떨어지고,
  반투명 판이나 블러를 덧대야 해서 `skyline.js` 낙하 영역과 조율이 필요하다.
- **헤더 라벨을 제목으로 교체**: 전 페이지 상단에 제목이 고정되지만,
  Space Grotesk 대문자 라벨 톤(`2026 GRADUATION PROJECT`)과 국문 제목이 어울리지 않는다.

## 구현

**제약**: 푸터는 높이 `--nav-h`(70px) 고정, `.cover__col`은 `label | text` flex row.
제목(fs-small · line-height 1.6 ≈ 23px) + 부제(fs-label · 1.5 ≈ 17px) = 약 40px이므로
70px 안에 들어간다. **푸터 높이는 손대지 않는다.**

- `site/index.html` — `<title>`·`meta description` 교체. `Title` 칸을 `.cover__titleblock` 2줄로
- `site/css/style.css` — `.cover__titleblock`, `.cover__text--sub` 추가. 다른 컴포넌트 영향 없음
- `site/js/main.js` — `MENU` 07번 `kr`/`en` 축약
- `design.md` §12 — 목차 07번, 푸터 스펙("내용 한 줄" → Title 칸만 2줄) 갱신
- `페이지구성_제안.md` · `booklet_구성안_및_도입텍스트.md` — 7장 제목 각 2곳

한/영 토글은 `[data-ko]`를 순회하며 `textContent`를 교체하므로 새 마크업이 그대로 동작한다.
`style.css`·`main.js` 캐시버스팅을 `?v=20260709`로 올린다.

## 검증

`python -m http.server 8123`으로 서빙 후 확인 완료:
`<title>`·제목·부제·영문 제목 노출 O, 구 연구제목 잔존 X, `.cover__titleblock` CSS 전달 O,
`MENU` 07 = `96개의 배치`, `하나의 대지` 잔존 X.
