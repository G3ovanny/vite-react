import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  // Opcional: configuración adicional para manejar otros tipos de archivos de imagen
  resolve: {
    alias: {
      '@/assets': '/src/assets' // Alias para la carpeta de assets
    }
  }
})