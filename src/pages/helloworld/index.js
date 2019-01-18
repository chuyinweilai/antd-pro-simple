import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Card,
  Button
} from 'antd';
import { routerRedux } from 'dva/router';
import router from 'umi/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


export default class HelloWorld extends PureComponent {

  router = () => {
    router.push({
      pathname: '/design/tools',
      // pathname: '/furnitures/list',
    });
  }

  render() {

    return (
      <PageHeaderWrapper title="首页" >
        <Card bordered={false}>
        HelloWorld
        <Button onClick={this.router} type="primary">Router Button</Button>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
