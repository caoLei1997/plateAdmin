import React from 'react';
import { Form, Row, Col, Input, Button } from 'antd';
import styles from './index.less';

const AdvancedSearchForm = () => {

  const handleFinish = values => {
    console.log('success', values);
  }

  const handleFinishFailed = err => {
    console.log('fail', err);
  }

  return (
    <Form className="ant-advanced-search-form" name='catalog-manage-table-search' onFinish={handleFinish} onFinishFailed={handleFinishFailed} >
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item label='品牌名称' name='brandName'>
            <Input placeholder="品牌名称" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label='型号名称' name='modelName'>
            <Input placeholder="型号名称" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Button type="primary" htmlType="submit" className='search-button'>查询</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default ({ children }) => (
  <div className={styles.container}>
    <div id="catalog-list-search-form">
      <div>
        <AdvancedSearchForm />
        <div className="search-result-list">{children}</div>
      </div>
    </div>
  </div>
);
