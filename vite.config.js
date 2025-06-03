import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/3d_portfolio/',
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.mp3'], // 👈 This line is important!
});
