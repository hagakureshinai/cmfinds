# CMFinds

CMFinds Project｜Web集客実験 #01 のAstroサイトです。

## ローカル実行

```sh
npm install
npm run dev
```

## 現在の最小構成

- 記事Markdown：`src/content/articles/`
- Frontmatter定義：`src/content.config.ts`
- 記事ページ：`src/pages/articles/[id].astro`
- 商品画像：`public/images/products/`

商品リンクは記事Markdown内に置き、アフィリエイトリンク発行後は各`href`だけを差し替えます。

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
