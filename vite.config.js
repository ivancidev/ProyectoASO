import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
<<<<<<< HEAD
    host: '192.168.0.10' // Especifica la dirección IP aquí
=======
    host: '192.168.0.10' 
>>>>>>> origin/andrea
  }
})
