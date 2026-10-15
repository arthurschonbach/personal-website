// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Project Pages: https://arthurschonbach.github.io/personal-website/
export default defineConfig({
  site: 'https://arthurschonbach.github.io',
  base: '/personal-website/',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
