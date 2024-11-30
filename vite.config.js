import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'three': ['@react-three/fiber', '@react-three/drei', 'three'],
          'framer': ['framer-motion'],
        }
      }
    },
    chunkSizeWarningLimit: 1500,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    sourcemap: false
  },
  server: {
    open: true,
    host: true,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@react-three/fiber', '@react-three/drei', 'three', 'framer-motion']
  }
})
