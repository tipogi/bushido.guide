import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* Access from our local network
   IMPORTANT: Deactivate when we do not need
  server: { 
    host: '0.0.0.0'
  }*/
})
