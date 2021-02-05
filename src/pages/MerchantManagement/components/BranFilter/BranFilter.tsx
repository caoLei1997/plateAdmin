import React, { FC } from 'react'
import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Cascader as Cascade
} from 'antd';
import { statusList } from '@/common/constants';

const { Item, useForm } = Form;
const { Option } = Select;

const BranFilter: FC<any> = (props) => {
  const {
    requestGetList,
    brandLabel = '代理品牌',
    cityList,
    brandList
  } = props;


  const [form] = useForm();
  const initialValues = {
    status: '',
    brandId: '',
    urbanDistrict: [''],
    name: '',
  }
  const filterOnFinish = (file: any) => {
    requestGetList({
      filter: file,
      pageIndex: 0,
    })
  }
  return (
    <Form
      form={form}
      initialValues={initialValues}
      onFinish={filterOnFinish}
    >
      <Row gutter={20}>
        <Col span={4}>
          <Item label='商户名称' name='agentOutletsName'>
            <Input placeholder='商户名称' />
          </Item>
        </Col>
        <Col span={4}>
          <Item label={brandLabel} name='brandId'>
            <Select>
              <Option value=''>全部</Option>
              {
                brandList && brandList.map((item: any) => (
                  <Option
                    key={item.id}
                    value={item.id}
                  >
                    {item.brandName}
                  </Option>
                )
                )
              }
            </Select>
          </Item>
        </Col>
        <Col span={4}>
          <Item label='市区' name='urbanDistrict'>
            <Cascade
              options={cityList.cityList}
              expandTrigger='hover'
            />
          </Item>
        </Col>
        <Col span={4}>
          <Item label='状态' name='status'>
            <Select>
              {
                statusList.map(({ value, label }, index) => (
                  <Option key={index} value={value}>{label}</Option>
                ))
              }
            </Select>
          </Item>
        </Col>
        <Item>
          <Button htmlType='submit' type='primary'>查询</Button>
        </Item>
      </Row>

    </Form>
  )
}

export default BranFilter