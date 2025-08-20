import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // <-- set to root because HashRouter handles routing
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  }
})
