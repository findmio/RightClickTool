// export default [
// import typescript from '@rollup/plugin-typescript';
import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';

export default {
  input: 'src/mixin/a.ts',
  output: {
    file: 'dist/a.js',
    // file: 'a.js',
    format: 'es'
  },
  plugins: [
    del({ targets: 'dist/*' }),
    typescript()
  ]
}