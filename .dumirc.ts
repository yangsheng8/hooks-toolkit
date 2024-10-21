import { defineConfig } from 'dumi';
const path = require('path');
import { menus } from './config/hooks';

const packages = require('./packages/hooks/package.json');

export default defineConfig({
  exportStatic: {},
  history: { type: 'hash' },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  themeConfig: {
    name: '',
    logo: '/logo.png',
    nav: [{ title: '指南', link: '/guide' }, { title: 'Hooks', link: '/hooks/toggle' }],
    sidebar: {
      '/guide': [{
        title: 'hooks-toolkit',
        children: [{ title: '介绍', link: '/guide' }],
      }],
      '/hooks': menus,
    },
    footer: 'Copyright (c) © 2024 by Anson, All Rights Reserved',
    socialLinks: {
      github: 'https://github.com/yangsheng8/hooks-toolkit',
    }
  },
  locales: [{ id: 'zh-CN', name: '中文' }], // 2.0 默认值
  resolve: {
    docDirs: ['docs'], // 2.0 默认值
    atomDirs: [{ type: 'hook', dir: 'packages/hooks/src' }], 
    codeBlockMode: 'passive',
  },
  favicons: ['/avatar.png'],
  alias: {
    hooksToolkit: require.resolve(path.join(__dirname, 'packages/hooks/src/index.ts')),
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ]
});