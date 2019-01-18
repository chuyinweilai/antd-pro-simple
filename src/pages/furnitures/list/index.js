import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Card,
  Table,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import HeaderFilter from '@/components/HeaderFilter';
import { furnitures } from '@/services/furniture';

export default class furnituresList extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      data:{}
    }
    this.columns = [
      {
        width: 100, 
        title: '标签ID',
        dataIndex: 'catalogId',
        key: 'catalogId',
      },
      {
        width: 100, 
        title: '标签名',
        dataIndex: 'catalogName',
        key: 'catalogName',
      },
      {
        width: 100, 
        title: '业务类型',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '编辑',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <a href="javascript:;">action</a>
      },
    ]
  }

  componentWillMount(){
    this.fetchData()
  }

  fetchData(){
    furnitures()
    .then((res = {})=>{
      let { data = {}, message = "" } = res;
      this.setState({data})
    })
  }

  handleSearch = (values = {}) => {
  };

  render() {
    const { data } = this.state;
    const filters = [
      {
        type: 'input',
        key: 'input',
        name: '输入框'
      },
      {
        type: 'select',
        key: 'select',
        name: '下拉框',
        option:[
          {
            key: 1, 
            value: 'test1'
          },
          {
            key: 2, 
            value: 'test2'
          }
        ]
      },
      {
        type: 'datePicker',
        key: 'datePicker',
        name: '日期'
      }
    ]
    return (
      <PageHeaderWrapper title='商家列表' >
        <HeaderFilter filters={filters} onSubmit={this.handleSearch}/>
        <Card bordered={false}>
          <Table scroll={{ x: 1500, y: 300 }} dataSource={data.results || []} columns={this.columns} />
        </Card>
      </PageHeaderWrapper>
    )
  }
}
