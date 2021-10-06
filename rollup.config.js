import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  plugins: [
    getBabelOutputPlugin({
      presets: ['@babel/preset-env'],
    }),
  ],
  output: [
    { file: 'dist/index.cjs.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'esm' },
  ],
};
