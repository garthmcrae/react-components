import autoprefixer from 'autoprefixer';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import url from 'rollup-plugin-url';

export default {
  input: 'src/index.js',
  plugins: [
    external(),
    postcss({
      modules: true,
      plugins: [autoprefixer()],
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      presets: [['@babel/env', { modules: false }], '@babel/preset-react'],
    }),
    resolve(),
    commonjs(),
  ],
  output: [
    {
      name: pkg.name,
      file: pkg.main,
      format: 'cjs',
      exports: 'auto',
    },
    {
      name: pkg.name,
      file: pkg.module,
      format: 'es',
      exports: 'auto',
    },
  ],
};
