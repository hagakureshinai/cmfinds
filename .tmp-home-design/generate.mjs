import { readFile, readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../', import.meta.url));
const out = fileURLToPath(new URL('./', import.meta.url));
const escape = value => value.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const articles = [];
for (const name of await readdir(`${root}src/content/articles`)) {
  if (!name.endsWith('.md')) continue;
  const md = await readFile(`${root}src/content/articles/${name}`, 'utf8');
  const frontmatter = md.split(/^---\s*$/m)[1];
  if (!/^draft: false\s*$/m.test(frontmatter)) continue;
  const field = key => JSON.parse(frontmatter.match(new RegExp(`^${key}: (.+)$`, 'm'))[1]);
  articles.push({title:field('title'), description:field('description'), slug:field('slug')});
}
// Match the current Astro collection's slug order, without choosing new featured content.
articles.sort((a,b) => a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0);
if (articles.length !== 4) throw new Error('Expected the current four published articles');
await writeFile(`${out}current.css`, await readFile(`${root}src/styles/global.css`));
const header = `<header class="site-header"><a class="brand" href="index.html" aria-label="比較プレビューに戻る"><span class="brand-mark" aria-hidden="true">☾</span><span>月と星と空と</span></a><p>月と星と空が好きな大人のための小さなセレクトメディア</p></header>`;
const intro = `<h1>月と星と空と</h1><p class="home-intro">月と星と空が好きな大人のための小さなセレクトメディア</p>`;
const item = (article,index,variant) => `<article class="article-card">${variant==='editorial'?`<span class="selection-number" aria-hidden="true">${String(index+1).padStart(2,'0')}</span>`:''}<div class="article-copy"><h2><a href="http://127.0.0.1:4321/articles/${escape(article.slug)}/" target="_blank" rel="noopener">${escape(article.title)}</a></h2><p>${escape(article.description)}</p>${variant==='editorial'?`<a class="article-read-link" href="http://127.0.0.1:4321/articles/${escape(article.slug)}/" target="_blank" rel="noopener" aria-label="記事を読む：${escape(article.title)}">記事を読む<span aria-hidden="true">→</span></a>`:''}</div></article>`;
for(const variant of ['current','editorial','refined']) {
  const html = `<!doctype html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>${{current:'現状',editorial:'エディトリアル型',refined:'洗練カード型'}[variant]}｜CMFinds 比較プレビュー</title><link rel="stylesheet" href="current.css">${variant!=='current'?'<link rel="stylesheet" href="variants.css">':''}</head><body class="preview-${variant}">${header}<main><section class="home-shell">${intro}<div class="article-list">${articles.map((a,i)=>item(a,i,variant)).join('')}</div></section></main><footer class="site-footer"><p>©月と星と空と</p></footer></body></html>`;
  await writeFile(`${out}${variant}.html`,html);
}
await writeFile(`${out}articles.json`,JSON.stringify(articles,null,2));
console.log('Generated three standalone previews from all four published articles.');
