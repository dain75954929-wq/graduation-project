# 2026 졸업설계 — 가로공간 성능 분석 웹사이트

> 보기 좋은 아파트에 대하여 — 도시 보행자의 시지각을 기준으로 한 아파트 배치의 정량 분석
> 건축설계 7 (01) · 김다인 · 잠실(서울특별시 송파구 올림픽로 333, 잠실르엘아파트)

## 구성
- `site/` — 정적 웹사이트 (HTML/CSS/JS, 빌드 불필요)
  - `index.html` — 표지(Cover) · 키네틱 스카이라인
  - `style-guide.html` — 서체·테마·스케일 토글 가이드
  - `css/style.css` · `js/main.js` · `js/skyline.js`
- `design.md` — 디자인 가이드(단일 기준). §12에 구현 현황
- `페이지구성_제안.md` — 사이트맵·페이지 구성 제안
- `콘텐츠/` — 섹션별 콘텐츠 원고(md)
- `PDF/`, `*.ai` — 참고 자료

## 로컬 미리보기
```
cd site
python -m http.server 8123
# http://localhost:8123
```

## 디자인 기본값
서체 sans · 테마 warm · 스케일 compact (style-guide.html에서 전환). 무채색 + 건축 도면 톤.
