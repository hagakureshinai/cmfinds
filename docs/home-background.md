# トップページの星空背景

2026-10-17。組み込みの image_gen で背景用の夜空を生成し、既存の sharp でWebP（品質90）へ変換した。スマホ版は同じ画像の右側を縦長に切り出している。新規依存の追加はない。

- PC用: `public/images/home/starfield.webp`（1672×941px、190,366 bytes）
- スマホ用: `public/images/home/starfield-mobile.webp`（706×941px、119,090 bytes）
- 元の試作用SVGは `public/images/home/starfield.svg` として保持。

## 実装と調整方法

設定は `src/styles/home.css` のトップページ限定ルールで管理する。

- `--home-sky-image`: 画像の差し替え先。680px以下ではスマホ用へ切り替える。
- `--home-sky-dim`: 背景に重ねる紺色フィルターの濃さ。現在は0.12。0にすると画像の元の明るさ、増やすと星の主張が弱くなる。
- `--home-card-tint`: ゴールド35%とオフホワイト65%を混ぜた淡いカード色。
- `--home-card-background`: カード背景の不透明度。PCは通常64%・ホバー時94%、タッチ端末は82%。
- 固定背景は `.home-sky::before` の `position: fixed; inset: 0`、`background-position: right bottom`、`background-size: cover` で描画する。PC・スマホ共通。
- `body:has(.home-sky)` の `isolation: isolate` により、固定背景をページ本文より後ろ・bodyの塗りより前に配置する。既存ヘッダー・フッターの不透明な背景は前面に保たれる。他ページには適用しない。
- スマホでの `background-attachment: fixed` の制約を避けるため、背景専用の固定レイヤーを使用する。端末のアドレスバー開閉時などの最終動作は実機確認が必要。

背景画像の作成時には、カード構成、列数、余白、FIX済みのサムネイル、記事、計測設定は変更していない。カードの配色は後述の追加調整を反映している。

## 検証の範囲

ブラウザを利用できない環境のため、実ブラウザでのスクロールと画面表示は未確認。画像の右下基準の切り取りと既存カードを重ねる合成画像で、PC（1440×1000px）・スマホ（390×844px）の背景の強さを確認する。合成画像はブラウザのスクリーンショットではなく、タイトルの行数も実測ではない。

背景制作時の合成確認では星空がカードの隙間から見え、タイトルを読む背景には強い光源が入らないことを確認した。旧仕様の濃紺カード背景84%とオフホワイトのタイトルの組み合わせでは、全背景画素に紺色フィルター12%とカード背景を重ねる計算で、最小コントラストはPC約10.41:1、スマホ約10.48:1だった。現行の淡いゴールドのカードは次の節を参照。数値はいずれも指定色のモデル計算であり、ブラウザの描画実測ではない。

`npm.cmd run check` はエラー・警告・ヒント0件、`npm.cmd run build` は全6ページ成功。ビルド後のCSS参照と背景ファイルの一致も確認した。固定レイヤーのスクロール動作、ヘッダー・フッターとの重なり、スマホのブラウザUI開閉時の挙動はユーザーによる最終確認が必要。

## 2026-10-17: カードの枠線・配色の追加調整

- 枠線はヘッダー下の仕切りと同じ `1px solid var(--gold)`。ホバー時も枠線を太くする影は重ねない。
- 背景色は `var(--gold)` 35%と `var(--surface)` 65%を混ぜた淡いゴールド（概算RGB 227, 215, 191）。
- PCなどホバー対応端末は通常時の不透明度64%、ホバー時94%。カード背景そのものを160msで変化させ、タッチ端末では不透明度82%を維持する。サムネイル画像は透過させない。
- タイトルは `var(--outer-bg)` の濃紺に変更。背景の全画素を使ったモデル計算で最小コントラストはPC通常時約5.10:1、ホバー時約10.73:1、スマホ約8.16:1。
- 既存のキーボードフォーカス表示と、動きを減らす設定を尊重する。背景画像・記事・レイアウト・余白は維持。

## 最終生成プロンプト

```text
Use case: stylized-concept.
Asset type: a wide landscape 16:9 starry night-sky BACKGROUND TEXTURE for a Japanese adult lifestyle website, used behind a grid of article cards, not a standalone hero illustration.
Primary request: a serene deep navy to blue-black sky filled with small, delicate natural-looking stars, sophisticated and quietly atmospheric. Make it clearly a starry sky even through the margins and narrow gaps between cards.
Composition: edge-to-edge sky only, with continuity across the whole frame. Tiny stars exist in the upper and left areas too. Increase the star density gradually and moderately toward the lower right, giving that region a little extra interest, with no isolated bright cluster or hard boundary. The sky should survive arbitrary desktop landscape and narrow mobile portrait crops anchored at the bottom right. Keep the upper left and middle especially quiet. Do not arrange stars in a diagonal band, constellation diagram, stripe or repeating pattern.
Color and atmosphere: very dark blue-black and deep ink navy across most of the image, subtle muted blue tonal variation in the lower right, a very restrained atmospheric sense of depth across the whole frame. The base should remain dark, roughly in the family of #091321, #101f35 and #142a43. Cool off-white and pale blue-gray pinprick stars, with softly varied but modest brightness. Fine stars are mostly minute points, not giant sparkles. There should be enough fine stars to feel immersive without looking noisy or glittery.
Background usability: article thumbnails and off-white text will appear over this texture. Maintain low global contrast, plenty of dark resting areas and no localized light source behind the central card area. The lower right can be subtly richer, but must remain dark and unobtrusive. Natural, understated and mature, not a fantasy space-poster.
Style: polished naturalistic night-sky texture, very fine detail, smooth deep colors, no visible brush strokes or paper grain. The depth comes from small stars and restrained color, not from clouds.
Avoid: moon or any large celestial body, planets, sun, horizon, landscape, silhouettes, buildings, galaxy, Milky Way, bright nebula, space clouds, aurora, pink/red/purple colors, luminous gas, glowing fog, strong glow, lens flare, halo, light rays, bright sweeping band, large four-point star icons, graphic constellation lines, meteor streaks, fireworks, exaggerated highlights, high-contrast patches, noisy granular texture, vignette frame, borders, writing, logos or watermark.
```
