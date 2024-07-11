import path from 'node:path'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import VuePlugin from '@vitejs/plugin-vue2'
import VuePluginJsx from '@vitejs/plugin-vue2-jsx'

export default defineConfig({
  plugins: [RubyPlugin(), VuePlugin(), VuePluginJsx({ compositionAPI: true })],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'app/frontend/'),
    },
    dedupe: ['vue'],
    // https://cn.vitejs.dev/config/#resolve-extensions
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: 'dist',
    reportCompressedSize: false,
    chunkSizeWarningLimit: 2000,
    manifest: true,
  },
})
