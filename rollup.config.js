import autoprefixer from 'autoprefixer';
import eslint from '@rollup/plugin-eslint';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  external: ['react'],
  input: './src/index.ts',
  output: [
    {
      name: pkg.name,
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
  ],
  plugins: [
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
};
