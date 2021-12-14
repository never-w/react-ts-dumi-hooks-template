import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'w-hooks',
  favicon: 'https://avatars.githubusercontent.com/u/80503467?v=4',
  logo: 'https://avatars.githubusercontent.com/u/80503467?v=4',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
    '@': './src',
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/never-w/w-hooks.git',
    },
    { title: '帮助', path: 'https://www.baidu.com' },
  ],
  // menus: {
  //   '/guide': [
  //     {
  //       title: '介绍',
  //       path: '/guide/foo',
  //     },
  //     {
  //       title: 'Blog',
  //       path: '/guide/foo1',
  //     },
  //   ],
  // },
  exportStatic: {}, // 将所有路由输出为 HTML 目录结构，以免刷新页面时 404
})
