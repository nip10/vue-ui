/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import visualizer from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsConfigFilePath: './tsconfig.app.json',
      copyDtsFiles: true,
      exclude: [
        'node_modules',
        'dist',
        'src/**/*.stories.ts',
        'src/**/*.stories.tsx',
        'src/**/*.stories.mdx',
      ],
    }),
    process.env.ANALYZE === 'true' &&
      visualizer({
        filename: './dist/stats.html',
        open: true,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'Vue-UI',
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          dir: 'dist',
          format: 'es',
          entryFileNames: 'vue-ui.es.js', // Name of the output file
          globals: {
            vue: 'Vue',
          },
        },
        {
          dir: 'dist',
          format: 'umd',
          entryFileNames: 'vue-ui.umd.js', // Name of the output file
          name: 'Vue-UI',
          globals: {
            vue: 'Vue',
          },
        },
      ],
    },
  },
});
