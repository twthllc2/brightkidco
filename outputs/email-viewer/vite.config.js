import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    fs: {
      // Don't allow serving files outside the project root
      strict: false,
    },
  },
  optimizeDeps: {
    include: ['@babel/parser', '@babel/generator', '@babel/core', '@babel/preset-react', '@babel/types'],
  },
})
