import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';

const isGitHubPages =
  process.env.GITHUB_REPOSITORY?.toLowerCase() === 'qharshil/quickverify-landing';

export default defineConfig({
  base: isGitHubPages ? '/quickverify-landing/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
