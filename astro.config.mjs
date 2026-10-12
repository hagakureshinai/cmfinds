import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cmfinds.hagakureshinai.workers.dev',
  output: 'static',
  integrations: [sitemap({
    filter: (page) => !/^\/tests\/a8-pinkoi\/?$/.test(new URL(page).pathname),
  })],
});
