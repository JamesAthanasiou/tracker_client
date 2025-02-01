import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // vite config
    plugins: [react(), TanStackRouterVite()],
    server: {
      host: true,
      port: env.APP_PORT
    },
  }
})
