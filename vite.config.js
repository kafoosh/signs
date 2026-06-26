import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Served from the ROOT of the custom domain https://signs.oddpaq.com/ , so base is '/'.
// (If you ever drop the custom domain and serve from kafoosh.github.io/signs/, set this back to '/signs/'.)
export default defineConfig({ base: '/', plugins: [react()] })
