import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT) || 5173,
    host: '0.0.0.0',
    middlewareMode: false,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'hpybdyakash.onrender.com',
      '.onrender.com'
    ]
  },
  preview: {
    port: parseInt(process.env.PORT) || 4173,
    host: '0.0.0.0',
    middlewareMode: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  }
})
