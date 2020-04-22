import React from 'react';
import { connect } from 'umi';
import { Form, Row, Col, Input, Button } from 'antd';
import styles from './index.less';

const AdvancedSearchForm = ({ btnLoading, getList, children }) => {

  const handleFinish = values => {
    getList(1, values);
  }

  return (
    <div className={styles.container}>
      <div id="catalog-list-search-form">
        <Form className="ant-advanced-search-form" name='catalog-manage-table-search' onFinish={handleFinish} >
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
              <Button loading={btnLoading} type="primary" htmlType="submit" className='search-button'>查询</Button>
            </Col>
          </Row>
        </Form>
        <div className="search-result-list">{children}</div>
      </div>
    </div>
  )
}

export default connect(({ loading }) => ({
  btnLoading: loading.effects['catalogList/getList']
}))(AdvancedSearchForm)
