import React from 'react';
import { connect } from 'umi';
import { Form, Row, Col, Input, Button } from 'antd';
import styles from './index.less';

const AdvancedSearchForm = ({ dispatch, catalogListState, userInfo, btnLoading }) => {
  const { pageSize } = catalogListState;

  const handleFinish = values => {
    dispatch({
      type: 'catalogList/getList',
      payload: {
        "agentOutletsId": userInfo.firstId,
        "account": userInfo.phone,
        "pageIndex": 1,
        "pageSize": pageSize,
        "brandName": values.brandName || '',
        "modelName": values.modelName || ''
      }
    })
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
          <Button loading={btnLoading} type="primary" htmlType="submit" className='search-button'>查询</Button>
        </Col>
      </Row>
    </Form>
  )
}

const WrappedSearchForm = connect(({ catalogList, login, loading }) => ({
  catalogListState: catalogList,
  userInfo: login,
  btnLoading: loading.effects['catalogList/getList']
}))(AdvancedSearchForm)

export default ({ children }) => (
  <div className={styles.container}>
    <div id="catalog-list-search-form">
      <div>
        <WrappedSearchForm />
        <div className="search-result-list">{children}</div>
      </div>
    </div>
  </div>
);
