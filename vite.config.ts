import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Позволяет сёрвить файлы из директории выше над корнем проекта
      allow: ['..']
    }
  }
});
