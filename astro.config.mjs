// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dzhjose.github.io',
  base: '/portfolio-nails/',
  trailingSlash: "always",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  },
});
