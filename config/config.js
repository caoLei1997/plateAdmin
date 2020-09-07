// https://umijs.org/config/
import { defineConfig, utils } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import webpackPlugin from './plugin.config';
const { winPath } = utils; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION, REACT_APP_ENV, GA_KEY } = process.env;
export default defineConfig({
  hash: true,
  history: {
    type: 'hash',
  },
  runtimePublicPath: true,
  devServer: {
    prot: 4200,
  },
  publicPath: '/plateSale/',
  outputPath: '/plateSale',
  antd: {},
  analytics: GA_KEY
    ? {
      ga: GA_KEY,
    }
    : false,
  dva: {
    hmr: true,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          routes: [
            {
              path: '/',
              redirect: 'personal',
            },
            {
              name: '人员管理',
              icon: 'https://electric.sxwinstar.net/plateSale/rygl.png',
              path: '/personal/:index?',
              component: './personalManage/$index$.jsx',
              authority: ['admin'],
            },
            {
              name: '商户管理',
              icon: 'https://electric.sxwinstar.net/plateSale/shgl.png',
              path: '/agentManage',
              component: './agentManage',
              authority: ['admin'],
            },
            {
              name: '目录管理',
              path: '/catalog',
              icon: 'https://electric.sxwinstar.net/plateSale/mlgl.png',
              authority: ['admin'],
              routes: [
                { path: '/catalog', redirect: '/catalog/typeapproval' },
                {
                  path: '/catalog/typeapproval',
                  name: '型号审批',
                  routes: [
                    {
                      path: '/catalog/typeapproval',
                      redirect: '/catalog/typeapproval/list'
                    },
                    {
                      path: '/catalog/typeapproval/list',
                      name: '型号审批',
                      component: './TypeApproval',
                      hideInMenu: true,
                      hideInBreadcrumb: true,
                    },
                    {
                      path: '/catalog/typeapproval/detail/:id',
                      name: '型号审批详情',
                      component: './TypeApproval/detail',
                      hideInMenu: true,
                    }
                  ]
                },
                {
                  path: '/catalog/snapprove',
                  name: 'SN审批',
                  routes: [
                    {
                      path: '/catalog/snapprove',
                      redirect: '/catalog/snapprove/list'
                    },
                    {
                      path: '/catalog/snapprove/list',
                      name: 'SN审批',
                      component: './SnApprove',
                      hideInMenu: true,
                      hideInBreadcrumb: true,
                    },
                    {
                      path: '/catalog/snapprove/detail/:id',
                      name: 'SN审批详情',
                      component: './SnApprove/detail',
                      hideInMenu: true,
                    }]
                  // component: './SnApprove',
                },
                { path: '/catalog/catalogmange', name: '目录明细', component: './catalogManage' },
              ],
            },

            {
              name: 'SN管理',
              path: '/snmanagement',
              authority: ['agent'],
              icon: 'https://electric.sxwinstar.net/plateSale/mlgl.png',
              routes: [
                { path: '/snmanagement', redirect: '/snmanagement/declare' },
                {
                  path: '/snmanagement/declare',
                  name: 'SN申报',
                  component: './SnDeclare'
                },
                {
                  path: '/snmanagement/detail',
                  name: 'SN明细',
                  component: './SnDetail'
                },
              ],
            },
            {
              name: '车辆管理',
              icon: 'https://electric.sxwinstar.net/plateSale/clgl.png',
              path: '/carmanage',
              component: './carManage',
              authority: ['agent', 'admin'],
            },
            {
              name: '基础详情页',
              path: '/carmanage/details/:id',
              component: './carManage/details',
              hideInMenu: true,
            },
            {
              name: '车辆管理重构',
              icon: 'smile',
              path: '/carManageNew',
              component: './carManageNew',
              hideInMenu: true,
            },
            {
              name: '备案管理',
              icon: 'https://electric.sxwinstar.net/plateSale/bagl.png',
              path: '/record',
              component: './record',
              authority: ['admin', 'police'],
            },
            {
              name: '备案详情',
              icon: 'smile',
              path: '/record/recordDetail/:id',
              component: './recordDetail',
              authority: ['admin', 'police'],
              hideInMenu: true,
            },
            {
              name: '权限管理',
              icon: 'https://electric.sxwinstar.net/plateSale/bagl.png',
              path: '/authorityMange',
              component: './authorityMange',
              authority: ['admin'],
            },
            {
              component: './404',
            },
          ],
        },
        {
          component: './404',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  define: {
    REACT_APP_ENV: REACT_APP_ENV || false,
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoader: {
    javascriptEnabled: true,
  },
  cssLoader: {
    modules: {
      getLocalIdent: (context, _, localName) => {
        if (
          context.resourcePath.includes('node_modules') ||
          context.resourcePath.includes('ant.design.pro.less') ||
          context.resourcePath.includes('global.less')
        ) {
          return localName;
        }

        const match = context.resourcePath.match(/src(.*)/);
        if (match && match[1]) {
          const antdProPath = match[1].replace('.less', '');
          const arr = winPath(antdProPath)
            .split('/')
            .map(a => a.replace(/([A-Z])/g, '-$1'))
            .map(a => a.toLowerCase());
          return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
        }

        return localName;
      },
    },
  },
  manifest: {
    basePath: '/',
  },
  proxy: proxy[REACT_APP_ENV || 'dev'],
  chainWebpack: webpackPlugin,
});
