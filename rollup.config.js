import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import alias from '@rollup/plugin-alias'; // 配置别名
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import resolve from "@rollup/plugin-node-resolve"; // 解析 node 包
import commonjs from "@rollup/plugin-commonjs"; // 适配 commonjs 导入的包
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
    resolve(),
    commonjs(),
    copy({
      targets: [
        { src: 'public/*', dest: 'dist/' },
      ]
    }),
    typescript(),
    getBabelOutputPlugin({
      configFile: path.resolve(__dirname, '.babelrc')
    })
  ],
  // external: ["lodash"] 
}