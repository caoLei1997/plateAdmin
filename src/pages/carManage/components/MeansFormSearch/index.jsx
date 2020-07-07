import React, { useEffect } from 'react';
import { connect } from 'umi';
import { examineArr } from '@/globalData';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import styles from './index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const MeansFormSearch = ({ dispatch, meansListState, userInfo, subDealerList }) => {
  useEffect(() => {
    dispatch({
      type: 'subDealer/getList',
      payload: {
        "agentOutletsId": userInfo.firstId
      }
    })
  }, [])

  const getFields = () => (<Row gutter={24}>
    <Col span={8}>
      <Form.Item label='整车编码SN' name='SNCode'>
        <Input placeholder="整车编码SN" />
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='车辆品牌' name='carBrand'>
        <Input placeholder="车辆品牌" />
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='车辆型号' name='carModel'>
        <Input placeholder="车辆型号" />
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='审核状态' name='status'>
        <Select placeholder="审核状态">
          {examineArr.map(item => item.key !== '3' && <Option key={item.key} value={item.key}>{item.val}</Option>)}
        </Select>
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='经销商' name='secondDealer'>
        <Select placeholder="经销商">
          {subDealerList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
        </Select>
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='申请日期' name='applyDate'>
        <RangePicker />
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='审核日期' name='date'>
        <RangePicker />
      </Form.Item>
    </Col>
  </Row>)

  const handleFinish = values => {
    dispatch({
      type: 'meansList/getList',
      payload: {
        "agentOutletsId": userInfo.firstId,
        "account": userInfo.phone,
        "pageIndex": 1,
        "pageSize": meansListState.pageSize,
        "electrombileNumber": values.SNCode,
        "brandName": values.carBrand,
        modelName: values.carModel,
        auditStatus: values.status,
        secondaryAgentOutletsId: values.secondDealer,
        startApplicationDate: values.applyDate ? values.applyDate[0].format('YYYY-MM-DD') : '',
        endApplicationDate: values.applyDate ? values.applyDate[1].format('YYYY-MM-DD') : '',
        startAuditedAt: values.date ? values.date[0].format('YYYY-MM-DD') : '',
        endAuditedAt: values.date ? values.date[1].format('YYYY-MM-DD') : '',
      }
    })
  }

  const handleFinishFailed = errorInfo => {
    console.log('fail', errorInfo);
  }

  return (
    <Form className="ant-advanced-search-form" name='car-manage-form-search' onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
      {getFields()}
      <Row>
        <Col span={24} style={{ textAlign: 'right', }}>
          <Button type="primary" htmlType="submit">查询</Button>
        </Col>
      </Row>
    </Form>
  )
}

const WrappedSearchForm = connect(({ meansList, login, subDealer }) => ({
  meansListState: meansList,
  userInfo: login,
  subDealerList: subDealer.list
}))(MeansFormSearch)

export default ({ children }) => (
  <div className={styles.container}>
    <div id="components-form-demo-advanced-search">
      <div>
        <WrappedSearchForm />
        <div className="search-result-list">{children}</div>
      </div>
    </div>
  </div>
);
