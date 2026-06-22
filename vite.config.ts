import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // listen on all interfaces, not just default localhost binding
    port: 5173,
    strictPort: true, // fail loudly instead of silently switching ports
    allowedHosts: [
      'patient.securclinic.local',
      'patient.securclinic.localhost',
    ],
  },
})