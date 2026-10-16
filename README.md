# CMFinds Project

CMFinds Projectは内部のプロジェクト名です。このリポジトリでは、Webサイト「月と星と空と」をAstroで実装・運用しています。

## ローカル実行

```sh
npm install
npm run dev
```

## 現在の最小構成

- 記事Markdown：`src/content/articles/`
- Frontmatter定義：`src/content.config.ts`
- 記事ページ：`src/pages/articles/[id].astro`
- 共通レイアウト・CSS：`src/layouts/BaseLayout.astro`、`src/styles/global.css`
- 記事の共通目次・注意事項・余白：`src/styles/article-product-toc.css`
- 文房具記事専用のテキストCTA：`src/styles/article-stationery.css`
- 商品画像・商品リンク：記事Markdown内の楽天アフィリエイト公式生成HTML（画像は外部配信）

楽天の商品画像・商品リンクには公式生成コードを使用し、生成HTMLは原則として改変しません。商品を差し替える際も、URLだけを独自に組み立てず、対応する公式生成コードを使用します。画像の独自ダウンロード・加工・再配信は行いません。

## 記事の追加・更新

- `src/content/articles/` に `.md` を追加し、`src/content.config.ts` のスキーマに合わせてFrontmatterを設定します。現在は `title`、`description`、`publishedDate`、`category`、`slug`、`draft` が必須で、`updatedDate` は任意です。
- `draft: false` の記事はトップ一覧と記事ページの生成対象になります。URLは `/articles/{slug}/` です。公開済みのslug・見出しIDは原則維持します。
- 本文は通常のMarkdownと、必要な構造・属性を持つHTMLを組み合わせます。同じ役割には既存の構造・CSSクラスを再利用します。
- 記事テンプレートが全記事に `article-intro-compact` を付けるため、共通の目次・価格送料注意文・購入前注意事項・余白のために記事IDを追記する必要はありません。各UIは既存の専用クラスと配置に合わせて記載します。
- `article-stationery` とテキストCTAの装飾は、引き続き `moon-star-stationery` 記事だけに適用します。
- 目次の構造と注意文の配置は [記事目次の説明](docs/article-product-toc.md) を参照してください。

変更後は既存の `npm run check` と `npm run build` で検証し、ブラウザでの最終表示・操作を確認します。

## Pinkoi・A8.net商品リンクの検証記録（2026-10-13終了）

利用者による検証結果：

- Windows Chromeでは、A8.netの新形式・旧形式とも商品画像の表示とPinkoi商品ページへの遷移が正常だった。
- iPhone Safariでは、280blockerのSafari広告ブロック・DNSブロックが有効な環境で画像表示やリンク遷移に問題が発生した。両機能を同時にOFFにすると正常に動作した。各機能の影響は個別には特定していない。
- Pinkoiの商品画像URLへの直接アクセスは、ブロック設定にかかわらず成功した。Adblock単独のON/OFFでは症状は変わらず、ローカル環境と本番環境で同じ症状を確認した。

今後の運用方針：

- 利用者の環境によって商品画像・アフィリエイトリンクが遮断される場合を前提とし、遮断されても記事として破綻しないサイトを目指す。
- 広告ブロッカーを回避する実装は行わず、現段階では商品画像の配信方式を大きく変更しない。
- Pinkoiの採用・不採用は今回の検証だけでは決定しない。本件の追加調査はいったん終了する。

検証用ページ `/tests/a8-pinkoi/` と診断コード、および専用のサイトマップ除外設定は撤去した。既存記事・商品カード・広告コード・サイトデザイン・ナビゲーションは変更していない。
