// vite.config.js
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    // Other plugins...
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ]
})
