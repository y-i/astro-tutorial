import { defineConfig } from 'astro/config';

// https://astro.build/config
// export default defineConfig({});

// WSL用
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
