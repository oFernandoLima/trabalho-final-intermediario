import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  compilerOptions: {
    target: "es2020",
    module: "esnext",
    baseUrl: "./",
    paths: {
      "@/*": ["src/*"]
    }
  },
  include: ["src"]
})
