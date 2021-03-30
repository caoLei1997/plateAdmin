import React, { useEffect } from 'react';
import {
  Row,
  Col,
  Form,
  Select,
  Cascader as Cascade
} from 'antd'
import { GUTTER } from '@/globalConstant'
import { filterCity } from '@/utils/utils';
const TrafficPolice = (props: any) => {
  const { trafficList, getBrigade, setFieldsValue, login } = props;
  console.log('trafficList: ', trafficList)

  setFieldsValue({

  })

  const { Item } = Form;
  const { Option } = Select;
  const onChange = (value) => {
    const [city = '', region = ''] = value;
    const payload = {
      city,
      region,
    }
    getBrigade(payload);
    if (city === '' && region === '') {
      setFieldsValue({ agentOutlesId: undefined });
    }
  }
  return (
    <div>
      <Row gutter={GUTTER}>
        <Col span={6}>
          <Item label='交警大队' name='city'>
            <Cascade
              options={filterCity(trafficList.trafficList)}
              expandTrigger="hover"
              displayRender={(label) => label.join('-')}
              onChange={onChange}
              placeholder='选择市区'
              disabled={login.channel == 14 ? true : false}
            />
          </Item>
        </Col>
        <Col span={6}>
          <Item name='agentOutlesId'>
            <Select
              disabled={login.channel == 14 ? true : false}
              placeholder='大队'
            >
              <Option  value='' >
                全部
              </Option>
              {
                trafficList.brigadeList.map(item => (
                  <Option key={item.agentOutlesId} value={item.agentOutlesId} >
                    {item.agentOutlesName}
                  </Option>
                ))
              }
            </Select>
          </Item>
        </Col>
      </Row>
    </div >
  );
}

export default TrafficPolice;
