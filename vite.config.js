import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://YOOBAMAWHEREISMYCLOTHES.github.io/my_portfolio/",
  plugins: [react()],
})
