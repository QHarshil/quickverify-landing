import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

const PROD_BASE = '/quickverify/';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : PROD_BASE,
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}));
