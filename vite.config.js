import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import babel from '@rollup/plugin-babel';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    babel({
      babelHelpers: 'bundled',
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {},
          },
        ],
      ],
    }),
    svgr(),
  ],
  server: {
    port: 4000,
  },
  resolve: {
    alias: {},
  },
  build: {
    sourcemap: true, // 이 옵션을 추가
    //...
  },
});
