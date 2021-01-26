import React, { FC } from 'react'
import {
  Form,
  Input,
  Select,
  Button,
  Cascader as Cascade
} from 'antd';
import { statusList } from '@/common/constants';

const { Item, useForm } = Form;
const { Option } = Select;

const BranFilter: FC<{}> = (props) => {
  const [form] = useForm();
  const initialValues = {
    status: '',
    brandId: ''
  }
  const filterOnFinish = (file:any) => {
    console.log('file: ', file)
  }
  return (
    <Form
      layout='inline'
      form={form}
      initialValues={initialValues}
      onFinish={filterOnFinish}
    >
      <Item label='商户名称' name='agentOutletsName'>
        <Input placeholder='商户名称' />
      </Item>
      <Item label='代理品牌' name='brandId'>
        <Select>
          <Option value=''>全部</Option>
        </Select>
      </Item>
      <Item label='市区' name='urbanDistrict'>
        <Cascade />
      </Item>
      <Item label='状态' name='status'>
        <Select>
          {
            statusList.map(({ value, label }, index) => (
              <Option key={index} value={value}>{label}</Option>
            ))
          }
        </Select>
      </Item>
      <Item>
        <Button htmlType='submit' type='primary'>查询</Button>
      </Item>
    </Form>
  )
}

export default BranFilter