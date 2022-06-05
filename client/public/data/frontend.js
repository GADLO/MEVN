const frontend = {
  vue: {
    icon: 'icon-Vue',
    name: 'Vue',
    url: 'https://v3.cn.vuejs.org/',
    description: '渐进式JavaScript框架',
    tag: 'unknown',
    version: '3.0',
  },
  svelte: {
    icon: 'icon-svelte',
    name: 'Svelte',
    url: 'https://v3.cn.vuejs.org/',
    description: '传统框架在浏览器中完成大部分工作，Svelte将这些工作转移到编译步骤中，在构建应用程序时发生。',
    tag: 'unknown',
    version: '3.0',
  },
  react: {
    icon: 'icon-React',
    name: 'React',
    url: 'https://zh-hans.reactjs.org/',
    description: '用于构建用户界面的 JavaScript 库',
    tag: 'unknown',
    version: '18.1.0',
  },
  angular: {
    icon: 'icon-Angular',
    name: 'Angualar',
    url: 'https://angular.cn/',
    description: 'Angular 是一个应用程序设计框架和开发平台，用于创建高效和复杂的单页应用程序。',
    tag: 'unknown',
    version: '13.2.0',
  },
  preact: {
    icon: 'icon-preact',
    name: 'Preact',
    url: 'https://preactjs.com/',
    description: '比React更快的框架',
    tag: 'unknown',
    version: '10.7.2',
  },
  solid: {
    icon: 'icon-solid',
    name: 'SOLIDJS',
    url: 'https://www.solidjs.com/',
    description: '用于构建用户界面的简单且高性能的响应性。',
    tag: 'unknown',
    version: '1.4.3',
  },
};

const backend = {
  express: {
    icon: 'icon-express',
    name: 'Express',
    url: 'https://expressjs.com/',
    description: 'Express 是一个最小且灵活的 Node.js Web 应用程序框架，它为 Web 和移动应用程序提供了一组强大的功能。',
    tag: 'unknown',
    version: '5.0',
  },
  nextjs: {
    icon: 'icon-nextjs',
    name: 'Next.js',
    url: 'https://nextjs.org/',
    description:
      'Next.js 为您提供生产所需的所有功能的最佳开发人员体验：混合静态和服务器渲染、TypeScript 支持、智能捆绑、路由预取等。无需配置。',
    tag: 'unknown',
    version: '12.1.6',
  },
  nestjs: {
    icon: 'icon-nestjs',
    name: 'Nest.js',
    url: 'https://nestjs.com/',
    description: 'Nest (NestJS) 是一个用于构建高效、可扩展的 Node.js 服务器端应用程序的框架。',
    tag: 'unknown',
    version: '3.0',
  },
  nuxtjs: {
    icon: 'icon-nuxt',
    name: 'Nuxt.js',
    url: 'https://nuxtjs.org/',
    description: '使用 Nuxt 自信地构建您的下一个 Vue.js 应用程序。 一个开源框架，使 Web 开发变得简单而强大。',
    tag: 'unknown',
    version: '3.0',
  },
  strapi: {
    icon: 'icon-strapi',
    name: 'Strapi',
    url: 'https://strapi.io/',
    description: 'Strapi 是领先的开源无头 CMS。它是 100% JavaScript，完全可定制和开发者优先。',
    tag: 'unknown',
    version: '4.0',
  },
  gatsby: {
    icon: 'icon-gatsby',
    name: 'Gatsby',
    url: 'https://www.gatsbyjs.com/',
    description: 'Gatsby 是一个快速灵活的框架，它让使用任何 CMS、API 或数据库构建网站再次变得有趣。',
    tag: 'unknown',
    version: '4.15.0',
  },
};

const buildTools = {
  vite: {
    icon: 'icon-vite',
    name: 'Vite',
    url: 'https://cn.vitejs.dev/',
    description: '下一代前端开发与构建工具',
    tag: 'unknown',
    version: '2.9.8',
  },

  esbuild: {
    icon: 'icon-esbuild',
    name: 'ESbuild',
    url: 'https://esbuild.github.io/',
    description: '一个非常快速的 JavaScript 打包器',
    tag: 'unknown',
    version: '1.18.2',
  },

  tsccli: {
    icon: 'icon-tsc',
    name: 'tsc CLI',
    url: '',
    description: '',
    tag: 'unknown',
    version: '',
  },

  rollup: {
    icon: 'icon-rollup',
    name: 'Rollup',
    url: 'https://rollupjs.org/guide/zh/',
    description: 'Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码',
    tag: 'unknown',
    version: '_._',
  },

  parcel: {
    icon: 'icon-parcel',
    name: 'Parcel',
    url: 'https://parceljs.org/',
    description:
      'Parcel 将开箱即用的出色开发体验与可扩展的架构相结合，可以将您的项目从刚刚开始转变为大规模生产应用程序。',
    tag: 'unknown',
    version: '2.6.0',
  },

  webpack: {
    icon: 'icon-webpack',
    name: 'Webpack',
    url: 'https://webpack.js.org/',
    description: 'webpack 的核心是现代 JavaScript 应用程序的静态模块打包器',
    tag: 'unknown',
    version: '5.0.0',
  },

  browserify: {
    icon: 'icon-browserify',
    name: 'Browserify',
    url: 'https://browserify.org/',
    description: "Browserify 允许您通过捆绑所有依赖项在浏览器中使用 require('modules')。",
    tag: 'unknown',
    version: '17.0.0',
  },

  gulp: {
    icon: 'icon-gulp',
    name: 'Gulp',
    url: 'https://gulpjs.com/',
    description: '利用 gulp 和 JavaScript 的灵活性来自动化缓慢、重复的工作流程，并将它们组合成高效的构建管道。',
    tag: 'unknown',
    version: '4.0.2',
  },
};

const jsTools = {
  dayjs: {
    icon: 'icon-',
    name: 'dayjs',
    url: 'https://day.js.org/',
    description: '一个格式化日期的库',
    tag: 'unknown',
    version: '1.11.2',
  },
  qs: {
    icon: 'icon-',
    name: 'qs',
    url: 'https://github.com/ljharb/qs',
    description: '一个查询字符串解析和字符串化库',
    tag: 'unknown',
    version: '6.10.3',
  },
};

const web = {
  frontend,
  backend,
  buildTools,
  jsTools,
};

export default web;
