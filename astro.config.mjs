import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

// WSL用
import preact from "@astrojs/preact";
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  vite: {
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  integrations: [preact()]
});
