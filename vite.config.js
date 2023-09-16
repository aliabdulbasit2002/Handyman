import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),VitePWA({
    manifest: '/public/manifest.json', // Path to your manifest file
  }),],
  server:{
    host: '0.0.0.0',
  }
})
