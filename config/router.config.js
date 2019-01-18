export default [
  // login
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },

  // design tool， 跳转的页面必须写在之前，否则无法从helloworld跳至此处
  {
    path: '/design/tools', 
    name: '设计工具页面', 
    authority: 'design',                // 设置访问本页面的权限
    Routes: ['src/pages/Authorized'],               // 调用权限检查工具
    component: './design/designTools',
  },

  //all
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      { path: '/', redirect: '/helloworld' },
      {
        path: '/helloworld', 
        name: '首页', 
        authority: ['admin', 'user', 'design'],     // 多权限实用数组格式
        component: './helloworld',
      },
      {
        path: '/furnitures',
        authority: 'user',
        name: '电商管理',
        routes: [
          { path: '/furnitures', redirect: '/furnitures/list' },
          {
            path: '/furnitures/list', 
            name: '商品列表', 
            authority: 'user',
            component: './furnitures/list',
          }
        ],
      },
    ]
  },
];
