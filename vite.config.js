import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://pillepalle1893.github.io/skydiving-cat-parallax',
  plugins: [react()]
})
