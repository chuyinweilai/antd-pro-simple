import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {
  Row,
  Col,
  Icon,
  Button,
  Card,
  Form,
  Input,
  Select,
  Radio,
  Upload,
  Modal,
  DatePicker
} from 'antd';
import router from 'umi/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { furnitures } from '@/services/furniture';
import { furn_status } from '@/assets/global';

const FormItem = Form.Item;
const Option = Select.Option;

@Form.create()
export default class furnituresList extends PureComponent {
  constructor(props){
    super(props)
    this.state={
      record:{},
      previewVisible: false,
      previewImage: '',
      fileList: [{
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
      fileList2: [{
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }],
    }
  }

  componentWillMount(){
    const { location:{ state }, } = this.props;
    this.setState({
      record: state || {},
    })
  }

  // 预览图片
  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  // 预览图片关闭
  handleCancel = () => this.setState({ previewVisible: false })

  handleChange = (type, val) => {
    console.log("fileList----->", val)
    if(type="color"){
      this.setState({ fileList: val.fileList })
    } else if (type = "main"){
      this.setState({ fileList2: val.fileList})
    };
    // this.setState({ fileList })
  };

  handleSearch = (values = {}) => {
  };

  handleBack = () => {
    router.goBack()
  }

  addgoods = () => {
    console.log('add')
  }

  render() {
    const { previewVisible, previewImage, fileList=[], fileList2=[], record } = this.state;
    const { getFieldDecorator } = this.props.form;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <PageHeaderWrapper title="修改商品">
        <Card bordered={false}>
          <Form>
            <Row>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品类型"
                >
                  {getFieldDecorator('type', {})(
                    <Select>
                      <Option value={1}>1</Option>
                      <Option value={2}>1</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="业务子类目"
                >
                  {getFieldDecorator('Childtype', {})(
                    <Select>
                      <Option value={1}>1</Option>
                      <Option value={2}>1</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="颜色图片"
                >
                  {getFieldDecorator('colorPic', {})(
                    <Upload
                      action="//jsonplaceholder.typicode.com/posts/"
                      listType="picture-card"
                      defaultFileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange.bind(this, 'color')}
                    >
                      {fileList.length >= 3 ? null : uploadButton}
                    </Upload>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品主图"
                >
                  {getFieldDecorator('furnPic', {})(
                    <Upload
                      action="//jsonplaceholder.typicode.com/posts/"
                      listType="picture-card"
                      defaultFileList={fileList2}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange.bind(this, 'main')}
                    >
                      {fileList2.length >= 3 ? null : uploadButton}
                    </Upload>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品名称"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品sku"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品spu"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品辅名称"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="长"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="高"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="宽"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品价值"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品价格，到分"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品单位"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="状态"
                >
                  {getFieldDecorator('type', {})(
                    <Select>
                      <Option value={1}>1</Option>
                      <Option value={2}>1</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="涂层"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="颜色"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="运输方式"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品条码"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="执行标准"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="是否线下商品"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="是否线上商品"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="灯泡属性"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="主体ID"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="主体名称"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="主体类型"
                >
                  {getFieldDecorator('type', {})(
                    <Select>
                      <Option value={1}>1</Option>
                      <Option value={2}>1</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="材料"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="短信，邮件等消息内容"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="上架日期"
                >
                  {getFieldDecorator('type', {})(
                    <DatePicker/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="下架日期"
                >
                  {getFieldDecorator('type', {})(
                    <DatePicker/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="发源地"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="功率(w)"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="工艺"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品类型，目前只有furniture"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="商品二维码"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="备注"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="安全级别"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>
              <Col span={20}>
                <FormItem
                  {...formItemLayout}
                  label="风格"
                >
                  {getFieldDecorator('type', {})(
                    <Input/>
                  )}
                </FormItem>
              </Col>


              <Col span={20}>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">提交</Button>
                  <Button onClick={this.handleBack}>返回</Button>
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </PageHeaderWrapper>
    )
  }
}
