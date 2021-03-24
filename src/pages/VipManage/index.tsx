interface VipMangeProps {
  brandList: any,
  add: Function,
  vipDelete: Function,
  vipList: Function,
  vipState: any,
}
import React, { useState, useEffect } from 'react';
import { connect } from 'umi'
import moment from 'moment';
import {
  Form,
  Input,
  Table,
  Select,
  Button,
  message,
  DatePicker,
  Popconfirm as PopupConfirm,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const {
  Item,
  useForm
} = Form;
const { RangePicker } = DatePicker;
const { Option } = Select

const VipManage = (props: VipMangeProps) => {
  const {
    add,
    vipDelete,
    vipList,
    brandList,
    vipState,
  } = props;
  const [form] = useForm();
  const columns = [
    {
      title: '商户名称',
      dataIndex: 'agentOutletsName',
      key: 'agentOutletsName',
    },
    {
      title: '代理品牌',
      dataIndex: 'brandName',
      key: 'brandName',
    },
    {
      title: '添加日期',
      dataIndex: 'createdAt',
      key: 'createdAt',
    },
    {
      title: '操作',
      render: ({ id }) => {
        return (
          <PopupConfirm
            placement="top"
            title={'移除后该品牌厂家将不在有VIP通道权限'}
            onConfirm={() => vipDeletes(id)}
            okText="确定"
            cancelText="取消"
          >
            <Button type='link'>移除</Button>
          </PopupConfirm>
        )
      }
    },
  ]
  const paginationChange = (pageIndex: number, pageSize: number) => {
    getList(pageIndex - 1, pageSize)
  }
  const { total, list, pageIndex, pageSize } = vipState;
  const pagination = {
    total,
    pageSize,
    showSizeChanger: true,
    showQuickJumper: true,
    current: pageIndex + 1,
    onChange: paginationChange,
    showTotal: (total: number) => `共${total}条`,
  }

  const getList = async (pageIndex = 0, pageSize = 10) => {
    const filter = await form.getFieldsValue();
    const createdAtStart = filter.time && moment(filter.time[0]).format('YYYY-MM-DD');
    const createdAtEnd = filter.time && moment(filter.time[1]).format('YYYY-MM-DD');
    const params = {
      pageIndex,
      pageSize,
      createdAtStart,
      createdAtEnd,
      agentOutletsName: filter.agentOutletsName
    }
    vipList(params)
  }
  useEffect(() => {
    getList()
  }, [])

  const searchVip = () => {
    getList()
  }
  const vipDeletes = (id: number) => {
    const callback = () => {
      getList(pageIndex, pageSize)
    }
    vipDelete(id, callback)
  }
  const [createVipVisible, setCreateVipVisible] = useState<boolean>(false);
  const [vipBrandId, setVipBrandId] = useState(null);

  const clearCreateData = () => {
    setCreateVipVisible(false);
    setVipBrandId(null);
  }
  const submitCreateVip = () => {
    if (
      vipBrandId === null ||
      vipBrandId === undefined ||
      vipBrandId === false
    ) {
      message.error('请选择商户')
      return
    } else {
      const callback = () => {
        clearCreateData()
        getList()
      }
      const params = {
        "agentOutletsId": vipBrandId,
        "versionType": "vip"
      }
      add(params, callback)
    }

  }

  return (
    <PageHeaderWrapper
      className='mains'
      title='VIP管理'
      breadcrumb={{}}
    >
      <Form
        layout='inline'
        form={form}
        onFinish={searchVip}
      >
        <Item label='商户名称' name='agentOutletsName'>
          <Input placeholder='商户名称' />
        </Item>
        <Item label='选择日期' name='time'>
          <RangePicker placeholder={['开始日期', '结束日期']} />
        </Item>
        <Item>
          <Button   type='primary' htmlType='submit'>查询</Button>
        </Item>
      </Form>
      <div className='mt-16'></div>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={list}
        pagination={pagination}
      />
      <div className='mt-16'></div>
      {
        createVipVisible === false &&
        <Button
          block
          icon={<PlusOutlined />}
          style={{
            textAlign: 'left',
            marginBottom: 32
          }}
        
          onClick={() => setCreateVipVisible(true)}
        >
          添加
      </Button>
      }
      {
        createVipVisible &&
        <div style={{
          paddingBottom: 32
        }}>
          <Select
            showSearch
            style={{ width: '100%' }}
            placeholder="输入商户名称检索"
            optionFilterProp="children"
            onSelect={(id) => setVipBrandId(id)}
          >
            {
              brandList && brandList.map((item: any) => (
                <Option
                  key={item.id}
                  value={item.id}
                >
                  {item.name}
                </Option>
              ))
            }
          </Select>
          <div className='mt-16'></div>
          <div style={{
            textAlign: 'right',
          }}>
            <Button onClick={clearCreateData} className='mr-8'>取消</Button>
            <PopupConfirm
              placement="top"
              title={'保存后该品牌厂家将拥有使用VIP通道的权限,确定要添加么?'}
              onConfirm={submitCreateVip}
              okText="确定"
              cancelText="取消"
            >
              <Button>保存</Button>
            </PopupConfirm>

          </div>
        </div>
      }
    </PageHeaderWrapper>
  );
}

const stateToProps = (state: any) => ({
  brandList: state.cityList.brands,
  vipState: state.vipState,
})
const dispatchToProps = {
  add: (data, callback) => ({
    type: 'vipState/add',
    payload: data,
    callback,
  }),
  vipDelete: (data, callback) => ({
    type: 'vipState/delete',
    payload: data,
    callback
  }),
  vipList: (data) => ({
    type: 'vipState/vipList',
    payload: data
  })
}
export default connect(
  stateToProps,
  dispatchToProps
)(VipManage);
