import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cmfinds.hagakureshinai.workers.dev',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
