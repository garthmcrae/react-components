import autoprefixer from 'autoprefixer';
import eslint from '@rollup/plugin-eslint';
import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: './src/index.ts',
  plugins: [
    external(),
    resolve(),
    postcss({
      extract: true,
      minimize: true,
      modules: true,
      plugins: [autoprefixer()],
      sourceMap: true,
    }),
    eslint(),
    typescript(),
  ],
  output: [
    {
      name: pkg.name,
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
  ],
  external: ['react'],
};
