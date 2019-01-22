import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Icon,
  Button,
  Card,
  Table,
} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import HeaderFilter from '@/components/HeaderFilter';
import { furnitures } from '@/services/furniture';
import { furn_status } from '@/assets/global'

export default class furnituresTags extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      data:{}
    }

    this.columns = [
      {
        width: 150, 
        title: '商品IDS',
        dataIndex: 'productId',
        key: 'productId',
      },
      {
        width: 150, 
        title: '商品SPU',
        dataIndex: 'spu',
        key: 'spu',
      },
      {
        width: 150, 
        title: '商品SKU',
        dataIndex: 'sku',
        key: 'sku',
      },
      {
        width: 150, 
        title: '商品的类目',
        dataIndex: 'catalogName',
        key: 'catalogName',
      },
      // {
      //   width: 100, 
      //   title: '商品的标签',
      //   dataIndex: 'title',
      //   key: 'title',
      // },
      {
        width: 150, 
        title: '商品名称',
        dataIndex: 'title',
        key: 'title',
      },
      {
        width: 150, 
        title: '商品价格',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: '商品状态',
        dataIndex: 'status',
        key: 'status',
        render:(text='-1') => furn_status[text]
      },
      // {
      //   width: 100, 
      //   title: '预设场景',
      //   dataIndex: 'title',
      //   key: 'title',
      // },
      {
        title: '操作',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: (text, record) => {
          return (
            <Row>
              <a href="javascript:;" onClick={() => this.actions('edit', record)}>编辑</a>|
              <a href="javascript:;">查看详情</a> 
            </Row>
          )
        }
      },
    ]
  }

  componentWillMount(){
    this.fetchData()
  }

  fetchData = () => {
    furnitures()
    .then((res = {})=>{
      let { data = {}, message = "" } = res;
      this.setState({data})
    })
  }

  actions = (type, record) => {
    console.log(type, record)
    switch (type) {
      case 'edit':
        break;
    
      default:
        break;
    }
  }

  handleSearch = (values = {}) => {
  };

  addgoods = () => {
    console.log('add')
  }

  render() {
    const { data } = this.state;
    const filters = [
      {
        type: 'input',
        key: 'productId',
        name: '商品IDs'
      },
      {
        type: 'input',
        key: 'spu',
        name: '商品spu'
      },
      {
        type: 'input',
        key: 'sku',
        name: '商品sku'
      },
      {
        type: 'select',
        key: 'catalogName',
        name: '商品的类目',
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
        type: 'input',
        key: 'title',
        name: '产品名称'
      },
      {
        type: 'datePicker',
        key: 'datePicker',
        name: '日期'
      }
    ]
    return (
      <PageHeaderWrapper content={
        <Row type="flex" justify="end"><Button type="primary" onClick={this.addgoods}><Icon type="plus" />新增商品</Button></Row>
      }>
        <HeaderFilter filters={filters} onSubmit={this.handleSearch}/>
        <Card bordered={false}>
          <Table rowKey="productId" scroll={{ x: 1200, y: 500 }} dataSource={data.results || []} columns={this.columns} />
        </Card>
      </PageHeaderWrapper>
    )
  }
}
