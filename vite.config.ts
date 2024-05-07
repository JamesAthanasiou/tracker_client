import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Server is for docker
  server: {
    host: true,
    port: 8000,
  }
})
