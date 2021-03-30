import React, { useState, useEffect } from 'react';
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
import { Link } from 'umi'
import moment from 'moment'
import { connect } from 'dva'
import { formatData } from '@/commonFun'
import {
  GUTTER,
  LABEL_COL,
} from '@/globalConstant';
import { PAGESIZE, PAGE_INDEX } from '@/globalConstant'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import TrafficPolice from '@/components/TrafficPolice/TrafficPolice';
const { Option } = Select;
const { Item } = Form;
const { RangePicker } = DatePicker;

const columns = [
  {
    title: "申请日期",
    dataIndex: 'createdAt',
    render: (createdAt) => {
      return createdAt ? moment(createdAt).format('YYYY-MM-DD') : ''
    },
    sorter: (a, b) => a.createdAt - b.createdAt,
    filterMultiple: false,
  },
  {
    title: '登记人',
    dataIndex: 'applyUserName'
  },
  {
    title: '手机号码',
    dataIndex: 'applyPhone'
  },
  {
    title: '注销原因',
    dataIndex: 'applyReasonName'
  },
  {
    title: '车牌号',
    dataIndex: 'plateNumber'
  },
  {
    title: '车辆品牌',
    dataIndex: 'brandName'
  },
  {
    title: '车辆型号',
    dataIndex: 'modelName'
  },
  {
    title: '整车编码',
    dataIndex: 'electrombileNumber',
    width: 100,
    ellipsis: true,
  },
  {
    title: '审核状态',
    dataIndex: 'auditStatus',
    render: (auditStatus: string) => {
      switch (auditStatus) {
        case '0':
          return <span className='font-blue'>待审核</span>
        case '1':
          return <span className='font-success'>已通过</span>
        case '2':
          return <span className='font-red'>不通过</span>
      }
    }
  },
  {
    title: '审核日期',
    dataIndex: 'orgAuditAt',
    render: (orgAuditAt) => {
      return orgAuditAt ? moment(orgAuditAt).format('YYYY-MM-DD') : ''
    },
    sorter: (a, b) => a.orgAuditAt - b.orgAuditAt,
    filterMultiple: false,
  },
  {
    title: '不通过原因',
    dataIndex: 'notPassReason',
    ellipsis: true,
  },
  {
    title: '操作',
    dataIndex: 'id',
    render: (id: number) => {
      return <Link to={`carCancelDetail/${id}`}>查看详情</Link>
    }
  },
]

const List = (props: any) => {
  const { getList, carCancel, trafficList, getBrigade, login } = props;
  const [form] = Form.useForm();
  const tableChange = (pageIndex: number, pageSize: number) => {
    const params = {
      pageIndex: pageIndex - 1,
      pageSize: pageSize,
      filter: { ...carCancel.filter }
    }
    getList(params)
  }
  const pagination: any = {
    current: carCancel.pageIndex + 1,
    pageSize: carCancel.pageSize,
    total: carCancel.total,
    onChange: tableChange,
    showQuickJumper: true,
    showSizeChanger: true,
  }

  useEffect(() => {
    const params = {
      pageIndex: PAGE_INDEX,
      pageSize: PAGESIZE,
      filter: {}
    }
    getList(params)
  }, [])

  const search = (fields) => {
    const { city, createdAt, orgAuditAt } = fields;
    const [orgCity = '', orgRegion = ''] = city;
    const [createdAtStart = '', createdAtEnd = ''] = createdAt;
    const [orgAuditAtStart = '', orgAuditAtEnd = ''] = orgAuditAt;
    const filter = {
      ...fields,
      orgCity,
      orgRegion,
      createdAtStart: createdAtStart ? formatData(createdAtStart) : '',
      createdAtEnd: createdAtEnd ? formatData(createdAtEnd) : '',
      orgAuditAtStart: orgAuditAtStart ? formatData(orgAuditAtStart) : '',
      orgAuditAtEnd: orgAuditAtEnd ? formatData(orgAuditAtEnd) : '',
      city: undefined,
      createdAt: undefined,
      orgAuditAt: undefined
    }
    const params = {
      pageIndex: PAGE_INDEX,
      pageSize: PAGESIZE,
      filter
    }
    getList(params)
  }

  const initialValues = {
    city: login.channel == 14 ? [login.city, login.region] : [''],
    createdAt: [],
    orgAuditAt: [],
    auditStatus: '',
    applyReason: '',
    agentOutlesId: login.channel == 14 ? login.name : '',
  }
  return (
    <PageHeaderWrapper
      className='mains'
    >
      <Form
        form={form}
        labelCol={LABEL_COL}
        onFinish={search}
        initialValues={initialValues}
      >
        <TrafficPolice
          setFieldsValue={form.setFieldsValue}
          trafficList={trafficList}
          getBrigade={getBrigade}
          login={login}
        />
        <Row>
          <Col span={6}>
            <Item label='登记人' name='applyUserName'>
              <Input placeholder='登记人' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='手机号码' name='applyPhone'>
              <Input placeholder='手机号码' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='注销原因' name='applyReason'>
              <Select placeholder='注销原因'>
                <Option value=''>全部</Option>
                <Option value='scrap'>灭失或报废</Option>
                <Option value='stolen'>车辆失窃</Option>
                <Option value='newVehicleBack'>新车退车</Option>
                <Option value='otherPlace'>迁往外地</Option>
                <Option value='oldForNew'>以旧换新或不再使用</Option>
                <Option value='repeal'>依法撤销登记</Option>
              </Select>
            </Item>
          </Col>
          <Col span={6}>
            <Item label='车牌号' name='plateNumber'>
              <Input placeholder='车牌号' />
            </Item>
          </Col>
        </Row>
        <Row >
          <Col span={6}>
            <Item label='整车编码' name='electrombileNumber'>
              <Input placeholder='整车编码' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='审核状态' name='auditStatus'>
              <Select placeholder='审核状态'>
                <Option value=''>全部</Option>
                <Option value='0'>待审核</Option>
                <Option value='1'>已通过</Option>
                <Option value='2'>不通过</Option>
              </Select>
            </Item>
          </Col>
          <Col span={6}>
            <Item label='申请日期' name='createdAt'>
              <RangePicker placeholder={['日期起', '日期止']} />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='审核日期' name='orgAuditAt'>
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
        dataSource={carCancel.content}
        pagination={pagination}
      />
    </PageHeaderWrapper >
  );
}

const stateToProps = (state: any) => ({
  carCancel: state.CarCancel,
  trafficList: state.traffic,
  login: state.login
})
const dispatchToProps = {
  getList: (payload) => ({
    type: 'CarCancel/getList',
    payload: payload
  }),
  getBrigade: (payload) => ({
    type: 'traffic/getBrigade',
    payload: payload
  })
}
export default connect(
  stateToProps,
  dispatchToProps
)(List);
