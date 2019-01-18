import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Card,
  Button
} from 'antd';
import router from 'umi/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


export default class HelloWorld extends PureComponent {

  routers = () => {
    router.push({
      pathname: '/helloworld',
      state: { },
    });
  }

  render() {

    return (
      <PageHeaderWrapper title="设计工具页面" >
        <Card bordered={false}>
          <Button onClick={this.routers} type="primary">Router design tools</Button>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
