import React, {
  useEffect,
  useState,
  FC,
} from 'react';
import { GUTTER, LABEL_COL, PAGE_INDEX, PAGESIZE, } from '@/globalConstant';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Link, } from 'umi'
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
import moment from 'moment'
import TrafficPolice from '@/components/TrafficPolice/TrafficPolice';
import { formatData } from '@/commonFun';
const { Option } = Select;
const { Item } = Form;
const { RangePicker } = DatePicker;
const columns = [
  {
    title: "申请日期",
    dataIndex: 'appliedAt',
    render: (appliedAt) => {
      return appliedAt ? moment(appliedAt).format('YYYY-MM-DD') : ''
    },
    sorter: (a, b) => a.appliedAt - b.appliedAt,
    filterMultiple: false,
    fixed: 'left',
  },
  {
    title: '证件号码',
    dataIndex: 'oldCertificateNumber',
    fixed: 'left',
    width: 200,
  },
  {
    title: '登记人',
    dataIndex: 'oldUserName',
  },
  {
    title: '证件类型',
    dataIndex: 'oldCertificateType',
    render: (oldCertificateType) => {
      // 身份证 0 护照 1 港澳 2 军官 3
      switch (oldCertificateType) {
        case '0':
          return '身份证'
        case '1':
          return '护照'
        case '2':
          return '港澳'
        case '3':
          return '军官'
        default:
          return ''
      }
    }
  },
  {
    title: '手机号码',
    dataIndex: 'oldPhoneNumber'
  },
  {
    title: '变更字段',
    dataIndex: 'changeCount',
  },
  // {
  //   title: '变更字段',
  //   dataIndex: 'vehicleInfoDiffResults',
  //   render: (vehicleInfoDiffResults) => {
  //     if (vehicleInfoDiffResults && vehicleInfoDiffResults.length) {
  //       return (
  //         vehicleInfoDiffResults.map(item =>
  //           (<div>{item.fieldChinese}</div>)
  //         )
  //       )
  //     } else {
  //       return ''
  //     }
  //   }
  // },
  {
    title: '审核状态',
    dataIndex: 'auditStatus',
    render: (auditStatus) => {
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
    dataIndex: 'notPassReason'
  },
  {
    title: '操作',
    dataIndex: 'id',
    render: (id: number) => {
      return <Link to={`infoChangeDetail/${id}`}>查看详情</Link>
    },
    fixed: 'right',
  },
]
const List: FC<any> = (props) => {
  const {
    infoChangeList,
    getList,
    trafficList,
    getBrigade,
    login
  } = props; console.log("infoChangeList: ", infoChangeList)
  const [form] = Form.useForm();
  const tableChange = (pageIndex: number, pageSize: number) => {
    const params = {
      pageIndex: pageIndex - 1,
      pageSize: pageSize,
      filter: { ...infoChangeList.filter }
    }
    getList(params)
  }
  const pagination: any = {
    current: infoChangeList.pageIndex + 1,
    pageSize: infoChangeList.pageSize,
    total: infoChangeList.total,
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
            <Item label='登记人' name='userName'>
              <Input placeholder='登记人' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='证件号码' name='certificateNumber'>
              <Input placeholder='证件号码' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='手机号码' name='phoneNumber'>
              <Input placeholder='手机号码' />
            </Item>
          </Col>
          <Col span={6}>
            <Item label='审核状态' name='auditStatus'>
              <Select placeholder='审核状态'>
                <Option value=''>全部</Option>
                <Option value='0'>待审核</Option>
                <Option value='1'>审核通过</Option>
                <Option value='2'>审核不通过</Option>
              </Select>
            </Item>
          </Col>
        </Row>
        <Row >
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
        <Row justify='end'>
          <Col>
            <Button type='primary' htmlType='submit'>查询</Button>
          </Col>
        </Row>
      </Form>
      <div className='mt-16'></div>
      <Table
        columns={columns}
        rowKey='id'
        dataSource={infoChangeList?.content}
        pagination={pagination}
        scroll={{ x: 1500 }}
      />
    </PageHeaderWrapper >
  );
}

const stateToProps = (state: any) => ({
  infoChangeList: state.infoChangeList,
  trafficList: state.traffic,
  login: state.login
})
const dispatchToProps = {
  getList: (params) => ({
    type: 'infoChangeList/getList',
    payload: params,
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
