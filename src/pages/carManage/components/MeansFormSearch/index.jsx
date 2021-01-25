import React, { useEffect } from 'react';
import { connect } from 'umi';
import { examineArr } from '@/globalData';
<<<<<<< HEAD
import { Form, Row, Col, Input, Button, Select, DatePicker, Cascader as Cascade } from 'antd';
import styles from './index.less';

import { filterCity } from '@/utils/utils'
const { Option } = Select;
const { RangePicker } = DatePicker;

const MeansFormSearch = ({
  dispatch,
  meansListState,
  userInfo,
  subDealerList,
  distributeList,
  subDealerListLoading
}) => {

  const [form] = Form.useForm();
=======
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import styles from './index.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const MeansFormSearch = ({ dispatch, meansListState, userInfo, subDealerList }) => {
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
  useEffect(() => {
    dispatch({
      type: 'subDealer/getList',
      payload: {
<<<<<<< HEAD
        "agentOutletsId": userInfo.firstId,
        city: '',
        region: '',
=======
        "agentOutletsId": userInfo.firstId
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      }
    })
  }, [])

<<<<<<< HEAD
  useEffect(() => {
    dispatch({
      type: 'distributeList/requestGetCity',
      payload: {
        agentOutletsId: userInfo.id
      }
    })
  }, []);


  function onChange(value) {
    const [city = '', region = ''] = value;


    dispatch({
      type: 'subDealer/getList',
      payload: {
        "agentOutletsId": userInfo.firstId,
        city: city ? city : '',
        region: region ? region : ''
      }
    })
    form.setFieldsValue({
      secondDealer: ""
    })
  }

  console.log(distributeList);

  const getFields = () => (

    <Row gutter={24}>
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
            <Option value="">全部</Option>
            <Option value="2">不通过</Option>
            <Option value="1">已完成</Option>
            <Option value="0">待审核</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label='市区' name='address'>
          <Cascade
            options={filterCity(distributeList.city)}
            onChange={onChange}
            placeholder="请选择市区"
            expandTrigger="hover"
          />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item label='经销商' name='secondDealer'>
          <Select placeholder="经销商" loading={subDealerListLoading} disabled={subDealerListLoading}>
            <Option value=''>全部</Option>
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
=======
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
          {examineArr.map(item => item.key !== '3' && <Option key={item.key + new Date().getTime()} value={item.key}>{item.val}</Option>)}
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
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7

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
<<<<<<< HEAD
        secondaryAgentOutletsId: values.secondDealer ? [values.secondDealer] : [],
=======
        secondaryAgentOutletsId: values.secondDealer,
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
        startApplicationDate: values.applyDate ? values.applyDate[0].format('YYYY-MM-DD') : '',
        endApplicationDate: values.applyDate ? values.applyDate[1].format('YYYY-MM-DD') : '',
        startAuditedAt: values.date ? values.date[0].format('YYYY-MM-DD') : '',
        endAuditedAt: values.date ? values.date[1].format('YYYY-MM-DD') : '',
<<<<<<< HEAD
        city: values.address ? values.address[0] : '',
        region: values.address ? (values.address[1] ? values.address[1] : '') : ''
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      }
    })
  }

  const handleFinishFailed = errorInfo => {
    console.log('fail', errorInfo);
  }

<<<<<<< HEAD
  const initialValues = {
    secondDealer: '',
    address:[''],
    status:''
  }

  return (
    <Form
      className="ant-advanced-search-form"
      name='car-manage-form-search'
      form={form}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
      initialValues={initialValues}
    >
=======
  return (
    <Form className="ant-advanced-search-form" name='car-manage-form-search' onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      {getFields()}
      <Row>
        <Col span={24} style={{ textAlign: 'right', }}>
          <Button type="primary" htmlType="submit">查询</Button>
        </Col>
      </Row>
    </Form>
  )
}

<<<<<<< HEAD
const WrappedSearchForm = connect(({ meansList, login, subDealer, distributeList, loading }) => ({
  meansListState: meansList,
  userInfo: login,
  subDealerList: subDealer.list,
  distributeList: distributeList,
  subDealerListLoading: loading.effects['subDealer/getList']
=======
const WrappedSearchForm = connect(({ meansList, login, subDealer }) => ({
  meansListState: meansList,
  userInfo: login,
  subDealerList: subDealer.list
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
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
