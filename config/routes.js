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
          // {
          //   name: '商户管理重构',
          //   icon: 'https://electric.sxwinstar.net/plateSale/shgl.png',
          //   path: '/merchant',
          //   component: './MerchantManagement/_layout',
          //   authority: ['admin'],
          //   routes: [
          //     {
          //       path: '/merchant',
          //       // redirect: '/merchant/brand',
          //       redirect: '/merchant/distributor',
          //     },
          //     {
          //       path: 'brand',
          //       name: '商户管理-品牌厂家',
          //       component: './MerchantManagement',
          //       hideInMenu: true
          //     },
          //     {
          //       path: 'distributor',
          //       name: '商户管理-经销商',
          //       component: './MerchantManagement/Distributor',
          //       hideInMenu: true
          //     }
          //   ]
          // },
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
            authority: ['vip', 'agent'],
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
            authority: ['vip', 'admin'],
            routes: [
              {
                path: '/carmanage',
                redirect: '/carmanage/basic'
              },
              {
                path: '/carmanage/basic',
                name: '基础通道',
                routes: [
                  {
                    path: '/carmanage/basic',
                    redirect: '/carmanage/basic/list'
                  },
                  {
                    path: '/carmanage/basic/list',
                    name: '车辆管理基础通道',
                    component: './carManage',
                    hideInMenu: true,
                    hideInBreadcrumb: true,
                  },
                  {
                    name: '车辆管理详情页',
                    path: '/carmanage/basic/details/:id',
                    component: './carManage/details',
                    hideInMenu: true,
                  },
                ]
              },
              {
                path: '/carmanage/vip',
                name: 'VIP通道',
                authority: ['vip', 'admin'],
                routes: [
                  {
                    path: '/carmanage/vip',
                    redirect: '/carmanage/vip/list'
                  },
                  {
                    path: '/carmanage/vip/list',
                    name: '车辆管理VIP通道',
                    component: './carManageVip',
                    hideInMenu: true,
                    hideInBreadcrumb: true,
                  },
                  {
                    name: '车辆管理详情页',
                    path: '/carmanage/vip/details/:id',
                    component: './carManageVip/details',
                    hideInMenu: true,
                  },
                ]
              },
            ],
          },

          {
            name: '审批管理',
            icon: 'https://electric.sxwinstar.net/plateSale/bagl.png',
            path: '/approveManage',
            authority: ['admin', 'police', 'brigade'],
            routes: [
              {
                path: '/approveManage',
                redirect: 'record',
              },
              {
                path: 'record',
                name: '备案管理',
                routes: [
                  {
                    path: '/approveManage/record',
                    redirect: 'recordList',
                  },
                  {
                    path: 'recordList',
                    component: './record',
                    hideInMenu: true,
                    name: '备案管理',
                    hideInBreadcrumb: true,
                  },
                  {
                    path: 'recordDetail/:id',
                    component: './recordDetail',
                    hideInMenu: true,
                    name: '备案详情',
                  },
                ]
              },
              {
                path: 'carCancel',
                name: '车辆注销',
                routes: [
                  {
                    path: '/approveManage/carCancel',
                    redirect: 'carCancelList'
                  },
                  {
                    path: 'carCancelList',
                    name: '车辆注销',
                    component: './CarCancel/List',
                    hideInMenu: true,
                    hideInBreadcrumb: true,
                  },
                  {
                    path: 'carCancelDetail/:id',
                    name: '车辆注销详情',
                    component: './CarCancel/Detail',
                    hideInMenu: true,
                  }
                ]
              },
              {
                path: 'infoChange',
                name: '信息变更',
                routes: [
                  {
                    path: '/approveManage/infoChange',
                    redirect: 'infoChangeList'
                  },
                  {
                    path: 'infoChangeList',
                    name: '信息变更',
                    component: './InfoChange/List',
                    hideInMenu: true,
                    hideInBreadcrumb: true,
                  },
                  {
                    path: 'infoChangeDetail/:id',
                    name: '信息变更详情',
                    component: './InfoChange/Detail',
                    hideInMenu: true,
                  }
                ]
              }
            ]
          },
          {
            name: 'VIP管理',
            icon: 'https://electric.sxwinstar.net/plateSale/bagl.png',
            path: '/vipManage',
            component: './VipManage',
            authority: ['admin'],
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
