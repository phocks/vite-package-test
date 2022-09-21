// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Vite Test',
      fileName: 'main'
    },
    rollupOptions: {
      input: ['src/main.ts'],
      output: {
        sourcemap: true
      },
      plugins: [typescript()]
    }
  },
  plugins: [
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // })
  ]
});
