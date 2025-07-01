import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    viteReact(),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  server: {
    allowedHosts: ['petite-numbers-itch.loca.lt']
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
