import path from 'node:path'
import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import FullReload from 'vite-plugin-full-reload'
import VuePlugin from '@vitejs/plugin-vue2'
import VuePluginJsx from '@vitejs/plugin-vue2-jsx'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    FullReload(['config/routes.rb', 'app/views/**/*'], { delay: 200 }),
    VuePlugin(),
    VuePluginJsx({ compositionAPI: true }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'app/javascript/'),
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
  server: {
    hmr: {
      // host: '0.0.0.0',
      host: '172.18.0.3',
      // host: 'rails-dev.d.hj.io',
      port: 3006,
    },
  },
})
