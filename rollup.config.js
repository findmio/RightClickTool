import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import alias from '@rollup/plugin-alias';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import path from 'path';


export default {
  input: ['src/scripts/vendor.ts', 'src/background/background.ts'],
  output: {
    dir: 'dist/js/',
    format: 'cjs',
  },
  plugins: [
    del({ targets: 'dist/*' }),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
      ]
    }),
    copy({
      targets: [
        { src: 'public/*', dest: 'dist/' },
      ]
    }),
    typescript(),
    getBabelOutputPlugin({
      configFile: path.resolve(__dirname, 'babel.config.js')
    })
  ]
}