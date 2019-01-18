export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // authority: ['admin', 'user'],
    routes: [
      { path: '/', redirect: '/helloworld' },
      {
        path: '/helloworld', 
        name: '首页', 
        component: './helloworld',
      },
      {
        path: '/furnitures',
        name: '电商管理',
        routes: [
          { path: '/furnitures', redirect: '/furnitures/list' },
          {
            path: '/furnitures/list', 
            name: '商品列表', 
            component: './furnitures/list',
          }
        ],
      },
      {
        path: '/design', 
        name: '设计工具页面', 
        component: './design/designTools',
      },
    ]
  },
  // design tool
  {
    path: '/design/tools', 
    name: '设计工具页面', 
    component: '../layouts/UserLayout',
    // authority: ['admin', 'user'],
    routes: [
      { path: '/design/tools', component: './design/designTools',},
    ],
  },
];
