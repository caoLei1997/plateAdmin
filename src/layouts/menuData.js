export default [
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
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/catalog',
            },
            {
              name: '人员管理',
              icon: 'smile',
              path: '/personal',
              component: './personalManage',
            },
            {
              name: '目录管理',
              icon: 'smile',
              path: '/catalog',
              component: './catalogManage',
            },
            {
              name: '基础详情页',
              icon: 'smile',
              path: '/carmanage/details/:id',
              component: './carManage/details',
              hideInMenu: true,
            },
            {
              name: '车辆管理',
              icon: 'smile',
              path: '/carmanage',
              component: './carManage',
            },
            {
              name: '车辆管理重构',
              icon: 'smile',
              path: '/carManageNew',
              component: './carManageNew',
              hideInMenu: true,
            },
            {
              name: '经销商管理',
              icon: 'smile',
              path: '/agentManage',
              component: './agentManage',
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
  ]