import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base = tavo repo pavadinimas
export default defineConfig({
  plugins: [react()],
  base: "/project-name/", // pvz: /todo-app/, /link-hub/
})