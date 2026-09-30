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
