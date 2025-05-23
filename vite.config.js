
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    base: "/triage-care",
    server: {
      port: 3000,
      proxy: {
        "/api": {
          target: "http://localhost:5000"
        }
      }
    }, define: {
      "process.env": env,
    },
  }
})
