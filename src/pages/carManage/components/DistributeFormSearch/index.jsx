import React, { useEffect } from 'react';
import { connect } from 'umi';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import styles from './index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const DistributeFormSearch = (props) => {

  const { dispatch, distributeListState, userInfo, subDealerList, platePrefixList } = props;

  useEffect(() => {
    dispatch({
      type: 'platePrefix/getList'
    })
  }, [])

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
      <Form.Item label='经销商' name='secondDealer'>
        <Select placeholder="经销商">
          {subDealerList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
        </Select>
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='整车编码SN' name='SNCode'>
        <Input placeholder="整车编码SN" />
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='车牌序号' name='platePrefix'>
        <Select placeholder="车牌序号">
          {platePrefixList.map(item => <Option key={item} value={item}>{item}</Option>)}
        </Select>
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='车牌号' name='plateNumber'>
        <Input placeholder="车牌号" />
      </Form.Item>
    </Col>
    <Col span={8}>
      <Form.Item label='分配日期' name='date'>
        <RangePicker />
      </Form.Item>
    </Col>
  </Row>)

  const handleFinish = values => {
    dispatch({
      type: 'distributeList/getList',
      payload: {
        "agentOutletsId": userInfo.firstId,
        "account": userInfo.phone,
        "pageIndex": 1,
        "pageSize": distributeListState.pageSize,
        "secondaryAgentOutletsId": values.secondDealer,
        "electrombileNumber": values.SNCode,
        "prefix": values.platePrefix,
        "plateNumberCode": values.plateNumber,
        "startDistributionDate": values.date ? values.date[0].format('YYYY-MM-DD') : '',
        "endDistributionDate": values.date ? values.date[1].format('YYYY-MM-DD') : ''
      }
    })
  }

  return (
    <Form className="ant-advanced-search-form" name='car-manage-form-search' onFinish={handleFinish}>
      {getFields()}
      <Row>
        <Col span={24} style={{ textAlign: 'right', }}>
          <Button type="primary" htmlType="submit">查询</Button>
        </Col>
      </Row>
    </Form>
  )
}

const WrappedSearchForm = connect(({ distributeList, login, subDealer, platePrefix }) => ({
  distributeListState: distributeList,
  userInfo: login,
  subDealerList: subDealer.list,
  platePrefixList: platePrefix.list
}))(DistributeFormSearch)

export default ({ children }) => (
  <div className={styles.container}>
    <div id="components-form-demo-advanced-search">
      <div>
        <WrappedSearchForm />
        <div className="search-result-list mt-32">{children}</div>
      </div>
    </div>
  </div>
);
