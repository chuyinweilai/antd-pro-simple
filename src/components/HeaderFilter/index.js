import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Row,
  Col,
  Select,
  Inpiut,
  DatePicker,
  Input,
  Button,
  // RangePicker,
  Form,
  Card,
  Icon,
} from 'antd';
import styles from './index.less';
const FormItem = Form.Item;
const Option = Select.Option;

@Form.create()
export default class HeaderFilter extends PureComponent {
  static propTypes = {
    filters: PropTypes.array,
    onSubmit: PropTypes.func,
    // className: PropTypes.string,
    // placeholder: PropTypes.string,
    // onChange: PropTypes.func,
    // onPressEnter: PropTypes.func,
    // defaultActiveFirstOption: PropTypes.bool,
    // dataSource: PropTypes.array,
    // defaultOpen: PropTypes.bool,
    // onVisibleChange: PropTypes.func,
  };

  static defaultProps = {
    filters: [],
    onSubmit: () => {},
    // defaultActiveFirstOption: false,
    // onPressEnter: () => {},
    // onChange: () => {},
    // className: '',
    // placeholder: '',
    // dataSource: [],
    // defaultOpen: false,
    // onVisibleChange: () => {},
  };

  constructor(props){
    super(props);
    this.state={

    }
    this.formLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 13 },
    };

  }

  formitems = (val , index) => {
    return val.type?(
      <Col md={8} sm={24} key={index}>
        {this.itemtype(val)}
      </Col>
    ): null
  }

  itemtype = ({ type, key, name, option = [], defaultValue = null }) => {
    const {
      form: { getFieldDecorator },
    } = this.props;
    switch (type) {
      case 'input':
        return (
          <FormItem {...this.formLayout} label={name}>
            {getFieldDecorator(key, {
              initialValue: defaultValue,
            })(<Input placeholder="搜索"/>)}
          </FormItem>
        )
        break;
      case 'select':
        return (
          <FormItem {...this.formLayout} label={name}>
          {getFieldDecorator(key, {
            initialValue: defaultValue,
          })(
            <Select style={{ width: '100%' }}>
            {
              option.map(({ key, value }) => <Option value={key} key={key}>{value}</Option>)
            }
            </Select>
          )}
        </FormItem>
        )
        break;
      case 'datePicker':
        return (
          <FormItem {...this.formLayout} label={name}>
            {getFieldDecorator(key, {
              initialValue: defaultValue,
            })(
              <DatePicker/>
            )}
          </FormItem>
        )
        break;
      default:
        break;
    }
  }

  handleSearch = (e) => {
    e.preventDefault();
    const { form, onSubmit } = this.props;
    form.validateFields((err, values = {}) => {
      if (err) return;
      let obj = {};
      for(let i in values){
        let val = values[i];
        val?obj[i]=val: null;
      }
      onSubmit(obj)
    });
  };

  handleFormReset = () => {
    const {
      onSubmit,
      form: { resetFields },
    } = this.props;
    resetFields();
    onSubmit()
  }

  render() {
    const { filters = [] } = this.props;
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div className={styles.tableListForm}>
        <Card bordered={false}>
          <Form onSubmit={this.handleSearch} layout="inline">
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              {filters.map(this.formitems)}
              {/* <Col md={8} sm={24}> */}
              <Col className={styles.ButtonsBox}>
                <span className={styles.submitButtons}>
                  <Button type="primary" htmlType="submit">
                    查询
                  </Button>
                  <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                    重置
                  </Button>
                </span>
              </Col>
            </Row>
          </Form>
        </Card>
      </div>
    )
  }
}
