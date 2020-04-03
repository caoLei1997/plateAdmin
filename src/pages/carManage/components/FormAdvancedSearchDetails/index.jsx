import React from 'react';
import { examineArr } from '@/globalData';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import styles from './index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const AdvancedSearchForm = () => {
  const [form] = Form.useForm();

  const getFields = () => (<Row gutter={24}>
    <Col span={8}>
      <Form.Item label='次级经销商' name='secondDealer'>
        <Select placeholder="次级经销商">
          {examineArr.map(item => <Option key={item.key} value={item.key}>{item.val}</Option>)}
        </Select>
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='整车编码SN' name='SNCode'>
        <Input placeholder="整车编码SN" />
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='车牌序号' name='plateNumber'>
        <Select placeholder="车牌序号">
          {examineArr.map(item => <Option key={item.key} value={item.key}>{item.val}</Option>)}
        </Select>
      </Form.Item>
    </Col>

    <Col span={8}>
      <Form.Item label='车辆号' name='carNumber'>
        <Input placeholder="车辆号" />
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='用途' name='use'>
        <Select placeholder="用途">
          {examineArr.map(item => <Option key={item.key} value={item.key}>{item.val}</Option>)}
        </Select>
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='分配日期' name='applyDate'>
        <RangePicker />
      </Form.Item>
    </Col>
  </Row>)

  const handleFinish = values => {
    console.log('Success:', values);
  };

  const handleFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Form className="ant-advanced-search-form" name='car-manage-details-search' onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      {getFields()}
      <Row>
        <Col span={24} style={{ textAlign: 'right', }}>
          <Button type="primary" htmlType="submit">查询</Button>
          <Button style={{ marginLeft: 8 }} onClick={handleReset}>重置</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default ({ children }) => (
  <div className={styles.container}>
    <div id="components-form-demo-advanced-search-details">
      <div>
        <AdvancedSearchForm />
        <div className="search-result-list">{children}</div>
      </div>
    </div>
  </div>
);
