import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, "public"),
  base: "./",
  plugins: [svelte({
    configFile: false,
    compilerOptions: {
      css: false,
    }
  })]
})
