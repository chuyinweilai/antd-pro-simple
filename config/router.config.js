export default [
  // user
  { path: '/', redirect: '/user' },
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      // { path: '/', redirect: '/user/login' },
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  {
    path: '/helloworld',
    icon: 'form',
    name: 'form',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/helloworld', component: './helloworld' }
    ]
  }
];
