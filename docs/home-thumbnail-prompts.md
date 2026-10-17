# トップページ用の仮サムネイル

現行の女性向けギフト・インテリア・普段使いは、末尾の各修正記録を参照。

2026-10-17。組み込みの image_gen で写真風のオリジナル画像を3点生成。既存の sharp を使い、構図を変えずに768×768pxのWebP（品質86）へ縮小・圧縮した。新規依存の追加はない。

商品画像・実在人物の写真ではなく、記事テーマを伝える架空のイメージ画像。楽天アフィリエイトの商品画像は使用していない。

文房具と大人向けプレゼントは、既存のシンプルなSVGイラストを継続使用。星空背景・カード構成・列数・ヘッダーは維持している。

画像の割り当ては `src/pages/index.astro` の `thumbnails` で差し替えられる。

## moon-star-gifts-3000-yen-women-30s

保存先: `public/images/home/thumbnails/moon-star-gifts-3000-yen-women-30s.webp`

最終生成プロンプト:

```text
Use case: photorealistic-natural.
Asset type: square 1:1 editorial thumbnail for a Japanese moon-and-stars lifestyle article about affordable gifts for women in their thirties.
Primary request: a natural, elegant adult woman in her thirties receives a small gift and smiles gently. This is an original fictional lifestyle image, not a depiction or endorsement of an actual product.
Scene: a calm contemporary home, muted blue-gray wall, soft daylight.
Subject and framing: waist-up medium shot of one East Asian adult woman around 35 wearing an understated ivory knit top. Her face and the present must both read clearly at small thumbnail size. She looks warmly down at a clearly visible, hand-sized ivory gift box with a matte navy ribbon and small crescent-moon gift tag. She supports the gift naturally with both hands at chest level; a giver's hand may enter only if anatomically natural, otherwise omit it. Keep gift fully visible near the center and face in the upper third, within the square crop.
Style: believable editorial photography, natural skin texture, softly lit, genuine understated smile, realistic proportions and fingers, adult and refined rather than girlish or glamorous.
Palette: desaturated navy, warm ivory, muted blue and a little soft gold; maintain natural skin tones.
Avoid: text, lettering, prices, logos, watermark, branded products, exaggerated facial expression, face-only close-up, giant box, childlike styling, glitter effects, star overlays, pink background, collage or borders.
```

## daily-moon-star-items

保存先: `public/images/home/thumbnails/daily-moon-star-items.webp`

最終生成プロンプト:

```text
Use case: photorealistic-natural.
Asset type: square 1:1 editorial lifestyle thumbnail for an article on moon-and-star items for adults' everyday use.
Primary request: a realistic, quietly beautiful still-life of small moon-and-star themed belongings naturally used in everyday life, not a product catalog.
Scene: a real oak desk near a window, muted navy linen cloth partly underneath.
Subjects: a simple unbranded off-white ceramic mug with a few tiny abstract blue stars, an understated closed blue-gray notebook, a plain brass pen, and a loosely folded blue-gray cotton handkerchief with a subtle moon-phase motif. These must be fictional generic objects, not copies of any existing merchandise.
Composition: a coherent 45-degree overhead editorial photograph, objects arranged loosely within one square frame as a person might leave them after journaling, mug and notebook are the main readable silhouettes, enough breathing room, crop-safe. Show tactile ceramic, paper, wood and fabric with slight realistic imperfections. No people needed.
Lighting and mood: soft late-afternoon window light with gentle shadows, calm adult domestic atmosphere, restrained and credible.
Palette: off-white, desaturated slate/navy, natural light oak, subtle brass gold. Everyday use is more important than magical sparkle.
Avoid: visible words, writing, logos, labels, watermark, actual brands, dramatic galaxies, glitter, fantastical objects, product grids, collage, borders, overhead star overlays.
```

## night-sky-motif-interior

保存先: `public/images/home/thumbnails/night-sky-motif-interior.webp`

最終生成プロンプト:

```text
Use case: photorealistic-natural.
Asset type: square 1:1 editorial interior photograph thumbnail for a Japanese article about night-sky-inspired home decor.
Primary request: show a peaceful, sophisticated adult living-room corner where subtle moon-and-star decor belongs naturally to the space. The room is the subject, not a single isolated product.
Scene and composition: an intimate wide interior view in a square crop, a textured navy-blue accent wall, a small warm-ivory upholstered armchair on the left, an oak side table to the right with a simple frosted-glass vase and a small candle, a framed minimal dark-blue constellation artwork on the wall, and one understated warm crescent-shaped pendant or wall light. A window edge suggests blue-hour light. Keep decor generic and original, not resembling any specific branded designs or actual products. All major shapes readable at small thumbnail size. Show chair, table, wall and a little floor as one convincing space.
Style: realistic interior editorial photography, tactile natural fabrics and wood, believable scale, balanced exposure with readable shadows, quiet warm light and blue-hour ambient illumination.
Mood: adult, serene, inviting and attainable, not a fantasy room or luxury showroom.
Palette: navy, blue-gray, oatmeal ivory, natural oak and muted warm gold.
Avoid: text, logos, labels, watermark, people, giant moon, celestial body outdoors as focal point, vivid nebulae, projected star-field ceiling, pink/purple lighting, excessive glitter, clutter, isolated catalog objects, collage, borders.
```

## 2026-10-17: 女性向けギフト・インテリアの修正

組み込みの image_gen の編集機能を使用。各画像の無加工の初回生成PNGを編集対象、ユーザーの書き込み付きPNGを位置・構図の指示として参照した。出力から書き込みは除去済み。既存の sharp で768×768pxのWebP（品質86）に縮小・圧縮し、以下の2ファイルを差し替えた。サイトのレイアウト・画像割り当て・記事には変更なし。

この節の編集プロンプトが以下2点の現行版。上の生成プロンプトは初回作成時の記録。

### moon-star-gifts-3000-yen-women-30s

保存先: `public/images/home/thumbnails/moon-star-gifts-3000-yen-women-30s.webp`

最終編集プロンプト:

```text
Use case: precise-object-edit.
Asset type: square 1:1 photographic website thumbnail.
Image 1 is the clean edit target. Image 2 is the same photo with the user's edit annotations, used ONLY as editing guidance, never as artwork.
Edit this existing photograph with these precise changes:
1. Recompose the square photograph so ONLY THE LOWER HALF OF THE WOMAN'S FACE is in frame. The upper image edge should cut across the nose/upper cheeks below both eyes. Show her gentle smiling mouth, chin, some lower nose and hair at the top of the square, shoulders and torso underneath. Both eyes, eyebrows, forehead and the top of her head must be completely outside the image. The red horizontal line on image 2 indicates the intended cropping boundary; do not show the region above that line. Maintain a square final image by reframing/recomposing the scene, with the gift and her hands remaining fully in frame.
2. Completely remove the hanging crescent-moon gift tag AND its string. No tag or medallion should remain.
3. Make the gift box noticeably bigger, about 1.5 times the original width and about 50–60% of the final image width, with believable proportions and natural supporting hands. The cyan outline on image 2 indicates enlargement, not an exact box shape. The enlarged box is the main subject, centrally held under her smile. Replace plain wrapping paper with elegant ivory wrapping paper printed with a restrained, repeating small crescent-moon and star motif in desaturated navy with a few muted gold details. Keep the matte navy ribbon and tasteful bow. Print the motif ON THE PAPER, not on an attached label or overlay.
Preserve the same adult woman, natural gentle smile, cream knit sweater, photographic texture, soft daylight, muted blue-gray domestic background and refined adult mood of the clean target. Maintain believable hands and fingers and realistic paper and ribbon. No other new subjects.
Final output: one clean square photograph. Remove all red, cyan and other annotations. No text, logos, watermark, frame or collage.
```

### night-sky-motif-interior

保存先: `public/images/home/thumbnails/night-sky-motif-interior.webp`

最終編集プロンプト:

```text
Use case: precise-object-edit.
Asset type: square 1:1 interior editorial photograph website thumbnail.
Image 1 is the clean edit target. Image 2 is the user's annotated edit guide, used ONLY to locate changes. Red crosses mean remove, cyan arrow and boundary mean widen the window, yellow crescent means an actual crescent moon outdoors.
Edit the existing room with these precise changes:
1. Remove the framed constellation picture completely, including frame, and remove the indoor crescent-shaped pendant light completely, including its cord, fitting and wall glow.
2. Greatly widen the existing window from the far left across the background, replacing the former picture area. Its right boundary should be roughly 72% of the image width, near the cyan vertical guide in image 2. This must read as one broad real architectural window behind the armchair, with a large uninterrupted glass pane and only minimal natural thin mullions. Keep the remaining dark navy wall on the right. Show an expansive outdoor twilight sky through the widened window.
3. Put ONE natural slender crescent moon IN THE OUTDOOR SKY seen through that window, near the upper middle/right of the window around where the yellow crescent is marked in image 2. The moon should be legible at thumbnail size but believable, about 3–4% of image width, softly ivory, not a glowing indoor fixture. Maintain the SAME subdued blue-hour dusk sky colors as the original view: blue above, gently warm pale horizon below, distant buildings low in the window. Do not turn the sky into black night or a dramatic orange sunset.
Preserve the original camera angle, square crop, ivory armchair with navy cushion and knitted throw, oak side table, vase and foliage, small candle, wood floor, right-edge shelf and the overall inviting adult atmosphere. Preserve the furniture positions as closely as possible. Lighting remains balanced dusk blue with warm candlelight; the navy wall left after removing the lamp has natural shadow rather than a lamp-shaped halo.
Final output: one clean realistic square photograph. No annotation strokes, colored guides, yellow drawn symbol, red crosses, writing, logos, watermark or collage. No framed art and no hanging crescent lamp.
```

## 2026-10-17: 普段使いを手描きイラストへ差し替え

組み込みの image_gen で新しいイラストを生成。初回の写真風ビジュアルから、ノート・マグ・ペン・ポーチ・ハンカチ・小さなトレイを俯瞰で並べた、質感とやわらかな陰影のある水彩・色鉛筆風の表現へ変更した。構図と内容の違いを確認できるよう、特定の商品に依存しない架空の小物として描いている。

保存先: `public/images/home/thumbnails/daily-moon-star-items.webp`

既存の sharp で768×768pxのWebP（品質86）へ縮小・圧縮し、同じファイル名で差し替え。レイアウト・記事・他のサムネイルには変更なし。この節はバッグの構図へ変更する前の試作記録。

最終生成プロンプト:

```text
Use case: stylized-concept.
Asset type: a single square 1:1 editorial illustration for a Japanese lifestyle website article titled "Everyday moon-and-star items for adults".
Primary request: an elegant hand-drawn, slightly realistic sketch illustration showing several moon-and-star themed everyday belongings in a relaxed overhead flat-lay arrangement.
Style/medium: clearly an ILLUSTRATION, with visible delicate pencil linework, softly layered watercolor and colored-pencil shading, subtle paper grain, gently imperfect handmade edges. Moderately realistic volumes, tactile fabric and ceramic textures, and soft illustrated cast shadows. More dimensional and detailed than flat vector illustration, but absolutely not a photograph, photorealistic render or glossy product mockup.
Subjects: a closed slate-blue notebook with a small understated crescent motif, an ivory ceramic mug decorated with a few tiny navy moons/stars, a simple brass-colored pen, a muted blue-gray cloth zipper pouch with subtle star stitching, a loosely folded cotton handkerchief with a quiet moon-phase design, and a little shallow tray. Use fictional generic objects rather than reproducing actual merchandise. Keep motifs restrained and adult.
Composition: true top-down flat-lay with all objects lying naturally on a warm off-white lightly textured paper-like ground. A casually balanced, lived-in arrangement with gentle overlaps and small rotations, readable distinct silhouettes, generous breathing room, not an evenly spaced product catalog or a numbered grid. The notebook and mug anchor the scene; fabric items, pen and tray support a sense of everyday use. Objects should fill the square usefully and remain recognizable when reduced to a small two-column mobile article card. No hands or people.
Lighting/mood: soft illustrated daylight and delicate warm shadows; quiet, refined, intimate and adult.
Palette: restrained navy, slate blue, blue-gray, warm ivory, a little muted teal and subtle brass gold. Harmonize with a navy-and-off-white moon-and-stars website.
Purpose: suggest incorporating moon-and-star motifs into ordinary daily life, without looking like an advertisement for any particular product.
Avoid: photography, camera blur or bokeh, hyperreal surface detail, 3D render, uniform flat vector fills, thick cartoon outlines, cute childish faces, brands, legible words, lettering, prices, watermark, logos, labels, packaging, glitter effects, neon, dramatic galaxies, giant celestial objects, decorative border, collage panels or rigid product grid.
```

## 2026-10-17: 普段使いをバッグと持ち歩き小物の構図へ変更（現行版）

組み込みの image_gen で新しいイラストを生成。フラットレイから、開いたバッグにノート・ポーチ・ペンを入れ、ハンカチと小さな月のチャームを添えた斜めからの構図へ変更。個別商品を並べるのではなく、普段の外出に月・星の小物を取り入れる雰囲気を描いた。輪郭線・ハッチング・塗りむら・筆致を残し、小さい表示でも写真とは異なる描画表現にしている。

保存先: `public/images/home/thumbnails/daily-moon-star-items.webp`

既存の sharp で768×768pxのWebP（品質86）へ縮小・圧縮して差し替え。レイアウト・記事・他のサムネイルは変更していない。前の普段使いの2案は履歴で、この節が現行版。

最終生成プロンプト:

```text
Use case: stylized-concept.
Asset type: one square 1:1 hand-painted editorial thumbnail for a Japanese adult lifestyle article about using moon-and-star everyday belongings.
Primary request: a refined, unmistakably HAND-DRAWN ILLUSTRATION of an open everyday tote bag with a few personal belongings casually tucked inside, suggesting someone getting ready to go out. The overall theme is everyday use and carrying favorite moon-and-star items, rather than a display of individual merchandise.
Composition: an intimate three-quarter oblique view, NOT a top-down flat lay. One open soft slate/navy tote bag is the main connected silhouette, centrally grouped with a small notebook peeking from the opening, a muted blue-gray zipper pouch partially nested inside, a folded ivory handkerchief with a few navy stars casually draped over the rim, and one pen tucked by the notebook. A tiny simple crescent charm hangs naturally from a handle. Add one or two restrained moon or star details to the belongings; do not cover everything in celestial prints. Overlaps, partial concealment and handles connect the objects into ONE casual lived-in vignette. Items must not be laid out separately around the bag. Use enough surrounding off-white paper space to read clearly as a small mobile thumbnail. No person is required.
Style/medium, highest priority: visibly drawn, tasteful contemporary gouache-and-ink magazine illustration. Confident slightly irregular dark-blue pen contours, visible broken pencil strokes and a little crosshatching, broad matte gouache brush marks, simplified shapes and deliberately interpreted proportions. Use only a few painted tonal planes and soft brushed shadows for volume, not realistic microtexture. Allow small patches of cream paper to show through paint. This must look like a skilled illustrator's FINISHED DRAWING even when viewed small, not a photo with an art filter. Elegant and intentional, not a rough unfinished sketch and not childlike.
Palette: desaturated navy, slate blue, muted teal, warm cream and small dull gold details, cohesive and quiet.
Surface/background: warm ivory drawing paper; a few economical drawn surface lines and a broad pale blue-gray painted shadow gently ground the bag. Minimal background. No photographic setting, camera effects or detailed wood texture.
Purpose: show the feeling of an adult naturally carrying moon-and-star motifs through everyday life. All objects are fictional and generic.
Avoid: photorealism, photographic rendering, realistic leather/fabric/ceramic microtexture, studio product lighting, glossy 3D, bokeh, extremely detailed product rendering, near-photographic watercolor, overhead flat lay, product grid, isolated evenly spaced items, catalog composition, packaging, labels, branding, text, prices, watermark, childish cartoon faces, overly cute style, uniform flat-vector shapes, neon or glitter, collage panels or decorative frame.
```
