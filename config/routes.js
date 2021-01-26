export const routes = [
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
                  }
                ]
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
              { path: '/snmanagement', redirect: '/snmanagement/upload' },
              {
                path: '/snmanagement/upload',
                name: 'SN上传',
                component: './SnUpload'
              },
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
            name: '车辆管理详情页',
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
            authority: ['admin', 'police', 'brigade'],
          },
          {
            name: '备案详情',
            icon: 'smile',
            path: '/record/recordDetail/:id',
            component: './recordDetail',
            authority: ['admin', 'police', 'brigade'],
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
];
