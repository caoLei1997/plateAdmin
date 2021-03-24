import React from 'react';
import {
  Row,
  Col,
  Form,
  Table,
  Input,
  Button,
  Select,
  DatePicker,
} from 'antd'
import {
  connect,
  Link,
} from 'umi'
import {
  GUTTER,
  LABELCOL,
} from '@/globalConstant';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { TableDataType, PaginationType } from './data';
const { Option } = Select;
const { Item } = Form;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: "申请日期",
    dataIndex: 'dateOfApplication'
  },
  {
    title: '登记人',
    dataIndex: 'registerPerson'
  },
  {
    title: '手机号码',
    dataIndex: 'phoneNumber'
  },
  {
    title: '注销原因',
    dataIndex: 'logout'
  },
  {
    title: '车牌号',
    dataIndex: 'licensePlate'
  },
  {
    title: '车辆品牌',
    dataIndex: 'vehicleBrands'
  },
  {
    title: '车辆型号',
    dataIndex: 'vehicleModel'
  },
  {
    title: '整车编码',
    dataIndex: 'vehicleCode'
  },
  {
    title: '审核状态',
    dataIndex: 'status',
    render: (status: number = 0) => {
      switch (status) {
        case 0:
          return <span className='font-red'>不通过</span>
        case 1:
          return <span className='font-blue'>待审核</span>
        case 2:
          return <span className='font-success'>已通过</span>
      }
    }
  },
  {
    title: '审核日期',
    dataIndex: 'reviewDate'
  },
  {
    title: '不通过原因',
    dataIndex: 'fail'
  },
  {
    title: '操作',
    dataIndex: 'id',
    render: (id: number) => {
      return <Link to={`carCancelDetail/${id}`}>查看详情</Link>
    }
  },
]

const dataSource: Array<TableDataType> = [
  {
    dateOfApplication: '2019-12-13',
    registerPerson: '曹某某',
    phoneNumber: 15619270901,
    logout: '车辆报废',
    licensePlate: 15611122,
    vehicleBrands: '小刀电动车',
    vehicleModel: '小刀-CT5',
    vehicleCode: '15619270901',
    status: 0,
    reviewDate: '2019-12-14',
    fail: '错误错误',
    id: 0,
  }
]


const List = () => {
  const [form] = Form.useForm();
  const pagination: PaginationType = {
    current: 1,
    pageSize: 10,
  }
  return (
    <PageHeaderWrapper
      className='mains'
    >
      <Form
        form={form}
        labelCol={LABELCOL}
      >
        <Row gutter={GUTTER}>
          <Col span={6}>
            <Item label='交警大队' name='city'>
              <Select placeholder='市区'>
                <Option value='1'>全部市区</Option>
              </Select>
            </Item>
          </Col>
          <Col span={6}>
            <Item name=''>
              <Select placeholder='大队'>
                <Option value='1'>全部大队</Option>
              </Select>
            </Item>
          </Col>
        </Row>
        <Row gutter={GUTTER}>
          <Col span={6}>
            <Item label='登记人' name=''>
              <Input placeholder='登记人' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='手机号码' name=''>
              <Input placeholder='手机号码' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='注销原因' name=''>
              <Select placeholder='注销原因'>
                <Option value='1'>全部</Option>
              </Select>
            </Item>
          </Col>
          <Col span={6}>
            <Item label='车牌号' name=''>
              <Input placeholder='车牌号' />
            </Item>
          </Col>
        </Row>
        <Row gutter={GUTTER}>
          <Col span={6}>
            <Item label='整车编码' name=''>
              <Input placeholder='整车编码' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='审核状态' name=''>
              <Select placeholder='审核状态'>
                <Option value='1'>全部</Option>
              </Select>
            </Item>
          </Col>
          <Col span={6}>
            <Item label='申请日期' name=''>
              <RangePicker placeholder={['日期起', '日期止']} />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='审核日期' name=''>
              <RangePicker placeholder={['日期起', '日期止']} />
            </Item>
          </Col>
        </Row>
        <Row gutter={GUTTER} justify='end'>
          <Col>
            <Button type='primary' htmlType='submit'>查询</Button>
          </Col>
        </Row>
      </Form>
      <div className='mt-16'></div>
      <Table
        columns={columns}
        rowKey='id'
        dataSource={dataSource}
        pagination={pagination}
      />
    </PageHeaderWrapper >
  );
}

const stateToProps = (state: any) => ({

})
const dispatchToProps = {

}
export default connect(
  stateToProps,
  dispatchToProps
)(List);
