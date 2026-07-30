// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BTTMLINE website — static marketing site.
// Real routes per page: / /diensten /cases /inzichten /team /contact
export default defineConfig({
  site: 'https://www.bttmline.be',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
