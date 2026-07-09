# design-taste-frontend 테마 정식 채택 (zinc) — 설계

> 2026-07-09 · 승인 완료 · brainstorming 스킬 절차에 따름

## 배경

`npx skills add Leonxlnx/taste-skill`로 설치한 13개 스킬 중 두 개(`minimalist-ui`,
`design-taste-frontend`)를 `style-guide.html`의 Taste 토글로 비교했다.
사용자 판단: **minimalist-ui는 어둡고, design-taste-frontend가 확 눈에 들어온다.** → dtf 채택.

## 결정

| 항목 | 결정 |
|---|---|
| 적용 범위 | 색 + 타이포 + 반경 **전부** (단, 반경만 재고 후 제외) |
| **반경** | **0px 유지.** dtf 원문은 6px 통일을 권하지만, 각진 모서리가 건축 도면 톤의 근거다. "Shape Consistency Lock"은 *반경을 하나로 통일하라*는 규칙이지 *둥글게 하라*는 규칙이 아니므로 0px도 이를 만족한다 |
| 모눈 배경 | **유지, zinc로 환산.** dtf는 장식용 hairline grid를 "AI tell"로 금지하지만 "실제 콘텐츠를 조직할 때는 허용"이라는 예외를 둔다 |
| 구 웜 팔레트 | `html[data-theme="warm"]`로 **보존** (스타일 가이드에서 비교·롤백) |

### 검토했으나 채택하지 않은 안

- **웜 팔레트 삭제 후 zinc로 대체**: 되돌릴 수 없다.
- **웜을 기본으로 두고 `data-theme="dtf"` 추가**: 테마 이름이 스킬명에 영구히 묶인다.

## 구현

**색 토큰** (`:root`) — 웜 → zinc

| 토큰 | 구 (warm) | 신 (zinc) |
|---|---|---|
| `--paper` | `#F4F3EF` | `#FAFAFA` |
| `--paper-pure` | `#FBFAF7` | `#FFFFFF` |
| `--ink` | `#16140F` | `#18181B` |
| `--ink-70` | `#4A4742` | `#52525B` |
| `--ink-40` | `#918C84` | `#A1A1AA` |
| `--ink-20` | `#C5C0B6` | `#D4D4D8` |
| `--line` | `#DAD6CC` | `#E4E4E7` |
| `--line-soft` | `#E7E3DA` | `#F4F4F5` |

**하드코딩된 색 세 군데도 환산** — 토큰만 바꾸면 놓치는 지점이다.

- 모눈 배경 SVG data-URI: 격자선 `#E7E3DA`→`#E4E4E7`, 교차 십자 `#918C84`→`#A1A1AA`
- `.section--dark` 6종: `#1e1c16`→`#27272A`, `#34302a`→`#3F3F46`, `#8a857b`→`#A1A1AA`,
  `#cdc8be`→`#D4D4D8`, `#6f6a60`→`#52525B`, `#4a463f`→`#3F3F46`
- `skyline.js` 3톤: `#4d4d4d/#9a9a9a/#cfcfcf` → `#52525B/#A1A1AA/#D4D4D8`

**타이포** — 폰트는 바꿀 게 없었다. 기본 `data-type="sans"`가 이미 `--serif-kr`을 Pretendard,
`--serif-en`을 Space Grotesk로 덮고 있어 국문 제목은 원래 명조가 아니었다.
`--w-display` 600 → **500**, 디스플레이 자간 `-0.025em` → **`-0.045em`**,
H1·H2·리드 자간 `-0.02em` → **`-0.04em`**. 숫자 readout(`.num b`)은 그대로 뒀다.

**localStorage** — 접두사 `sg-` → **`sg2-`**. 구 `sg-theme=warm`이 남아 있으면
새 기본값(zinc)이 가려지므로 한 번 초기화한다. `sg2-lang`도 같이 올라가 언어 설정이 초기화된다.

**기본 속성** — 세 HTML의 `data-theme="warm"` → `data-theme="zinc"`.

**스타일 가이드** — Theme에 `zinc · 기본` 버튼 추가, `따뜻한 종이 (구)`로 개명.
Taste 그룹에서 `dtf` 버튼과 오버라이드 CSS 제거(채택되어 `:root`로 이동).

## 검증

`python -m http.server 8123`으로 확인 완료. `:root`의 paper/ink가 zinc, `warm`·`zinc` 블록 공존,
모눈 SVG에 웜 hex(`%23E7E3DA`) 잔존 없음, `--w-display: 500`,
`border-radius` 총 2건(레인지 슬라이더 썸만 — 새로 추가된 반경 없음),
`index.html`이 `data-theme="zinc"`, skyline 3톤 zinc, 세 페이지 모두 200.

## 남은 이탈 항목

`skyline.js`의 낙하 단어 대비는 배경이 `#FAFAFA`로 밝아진 만큼 실제 화면에서 한 번 볼 것.
`.t-lead`의 이탤릭(`--serif-en` = Space Grotesk에 합성 오블리크)은 dtf의 세리프 억제 기조와
어긋나지만 이번 범위 밖으로 남긴다.
