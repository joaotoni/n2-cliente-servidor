import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://afraid-dogs-clap.loca.lt/', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
