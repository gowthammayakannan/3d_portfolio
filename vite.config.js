// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/3d_portfolio-/', // 👈 Make sure this matches your GitHub repo name
  plugins: [react()],
  assetsInclude: ['**/*.glb'] // 👈 Add this line to include .glb files as assets
})
