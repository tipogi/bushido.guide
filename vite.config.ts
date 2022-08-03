import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  /* Access from our local network
   IMPORTANT: Deactivate when we do not need
  server: { 
    host: '0.0.0.0'
  }*/
})
