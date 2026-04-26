import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hosseinsalahi.dev',
  adapter: cloudflare(),
  integrations: [sitemap()],
});
