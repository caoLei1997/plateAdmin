import React, { useState } from 'react';
import { connect } from 'umi';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import DealerLinkage from '@/components/DealerLinkage'
import styles from './index.less';

const AdvancedSearchForm = ({ btnLoading, getList, children, defaultOutlets }) => {
  const [selectVal, setSelectVal] = useState({ city: null, level: '', outlets: defaultOutlets || '' });

  const handleFinish = values => {
    console.log(values);
    
    const params = { city: '', region: '', level: values.level, agentOutletsId: selectVal.outlets };
    if (values.city) {
      params.city = values.city.split('-')[0];
      params.region = values.city.split('-')[1];
    }
    console.log({ ...values, ...params })
    getList(1, { ...values, ...params });
  }

  const selectChange = (val, key) => {
    setSelectVal({ ...selectVal, [key]: val });
  }

  const formProps = {
    city: { placeholder: '全部市区' },
    level: { placeholder: '全部级别' },
    dealer: { placeholder: '全部网点' },
  }

  return (
    <div className={styles.container}>
      <div id="catalog-list-search-form">
        <Form  className="ant-advanced-search-form" name='catalog-manage-table-search' onFinish={handleFinish} >
          <div gutter={24}>
            <Form.Item label='所属商户'>
              <DealerLinkage showAll formProps={formProps} span={6} onCallBack={selectChange} />
            </Form.Item>
          </div>
          <Row gutter={24}>
            <Col span={8}>
              <Form.Item label='姓名' name='name'>
                <Input placeholder="姓名" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label='手机号' name='phone'>
                <Input placeholder="手机号" />
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
