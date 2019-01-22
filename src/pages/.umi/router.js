import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/Miku/Desktop/project/ant-design-pro-v1/src/pages/.umi/LocaleWrapper.jsx'
import _dvaDynamic from 'dva/dynamic'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__UserLayout" */'../../layouts/UserLayout'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/Miku/Desktop/project/ant-design-pro-v1/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Login" */'../User/Login'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/Miku/Desktop/project/ant-design-pro-v1/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__Register" */'../User/Register'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "component": _dvaDynamic({
  app: window.g_app,
models: () => [
  import(/* webpackChunkName: 'p__User__models__register.js' */'/Users/Miku/Desktop/project/ant-design-pro-v1/src/pages/User/models/register.js').then(m => { return { namespace: 'register',...m.default}})
],
  component: () => import(/* webpackChunkName: "p__User__RegisterResult" */'../User/RegisterResult'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/Miku/Desktop/project/ant-design-pro-v1/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/design/tools",
    "name": "设计工具页面",
    "authority": "design",
    "Routes": [require('../Authorized').default],
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__design__designTools" */'../design/designTools'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
    "exact": true
  },
  {
    "path": "/",
    "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../../layouts/BasicLayout'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
    "Routes": [require('../Authorized').default],
    "routes": [
      {
        "path": "/",
        "redirect": "/helloworld",
        "exact": true
      },
      {
        "path": "/helloworld",
        "name": "首页",
        "authority": [
          "admin",
          "user",
          "design"
        ],
        "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "p__helloworld" */'../helloworld'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
        "exact": true
      },
      {
        "path": "/furnitures",
        "name": "电商管理",
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/furnitures",
            "redirect": "/furnitures/list",
            "exact": true
          },
          {
            "path": "/furnitures/tags",
            "name": "商品标签",
            "authority": [
              "admin",
              "user"
            ],
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../furnitures/tags'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/furnitures/list",
            "name": "商品列表",
            "authority": [
              "admin",
              "user"
            ],
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../furnitures/list'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "path": "/furnitures/list/edit",
            "name": "商品列表编辑",
            "hideInMenu": true,
            "authority": [
              "admin",
              "user"
            ],
            "component": _dvaDynamic({
  
  component: () => import(/* webpackChunkName: "layouts__BasicLayout" */'../furnitures/list/edit'),
  LoadingComponent: require('/Users/Miku/Desktop/project/ant-design-pro-v1/src/components/PageLoading/index').default,
}),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/Miku/Desktop/project/ant-design-pro-v1/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": () => React.createElement(require('/Users/Miku/Desktop/project/ant-design-pro-v1/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/Miku/Desktop/project/ant-design-pro-v1/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_routes = routes;
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function RouterWrapper() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
