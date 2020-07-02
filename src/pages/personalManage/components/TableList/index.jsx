import React, { useState } from 'react';
import { connect } from 'umi';
import { Form, Table, Popconfirm, Modal, Typography, Input, Button, message } from 'antd';
import DealerLinkage from '@/components/DealerLinkage'
import { toggleStatusKeyVal } from '@/commonFun'
import { PERSONAL_STATUS, PAGESIZE } from '@/globalConstant'
import styles from './index.less';

const { Text } = Typography;

const OperaUpdateStatus = ({ dispatch, id, status = PERSONAL_STATUS.OPEN, getList }) => {
  const handleConfirm = () => {
    let payloadStatus = '';
    if (status === PERSONAL_STATUS.OPEN) {
      payloadStatus = PERSONAL_STATUS.CLOSE;
    }

    if (status === PERSONAL_STATUS.CLOSE) {
      payloadStatus = PERSONAL_STATUS.OPEN;
    }

    dispatch({
      type: 'personalStatus/update',
      payload: {
        status: payloadStatus,
        id
      },
      onSuccess: () => {
        getList();
      }
    })
  }

  const tips = status === PERSONAL_STATUS.OPEN ? '停用会导致该业务人员无法再登录查验小程序办理业务，确认要停用吗？' : '启用后该业务人员将可以使用账号登录查验小程序并获得相应的业务办理权限，确认要启用吗？'

  const statusText = status === PERSONAL_STATUS.OPEN ? '停用' : '启用';

  return (
    <div>
      <Popconfirm okText='是' cancelText='否' title={<p>{tips}</p>} onConfirm={handleConfirm}>
        <a>{statusText}</a>
      </Popconfirm>
    </div>
  )
}

const OperaBrandEdit = ({ dispatch, item, getList }) => {
  const [selectVal, setSelectVal] = useState({ city: item.region, level: item.level, outlets: `${item.agentOutletsId}-${item.agentOutletsName}` });
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }

  const selectChange = (val, key) => {
    setSelectVal({ ...selectVal, [key]: val });
  }

  const checkSelect = () => {
    if (selectVal.city && selectVal.level && selectVal.outlets) return true;
    const errorTips = { city: '请选择市区！', level: '请选择经销商级别！', outlets: '请选择所属经销商！' };
    const keys = Object.keys(selectVal);
    for (let i = 0; i < keys.length; i++) {
      if (!selectVal[keys[i]]) {
        message.error(errorTips[keys[i]]);
        return false;
      }
    }
    return false;
  }

  const handleFinish = (values) => {
    if (!checkSelect()) return false;
    const data = {
      "id": item.id,
      "agentOutletsId": values.outlets.split('-')[0],
      "agentOutletsName": values.outlets.split('-')[1],
      "name": values.name,
      "phoneNumber": values.phoneNumber,
      "level": Number(values.level)
    }
    console.log(`${item.agentOutletsId}-${item.agentOutletsName}`)
    dispatch({
      type: 'personalStatus/edit',
      payload: data,
      onSuccess: () => {
        toggleModalVisible(false);
        message.success('编辑成功');
        getList();
      }
    })
  }

  const formProps = {
    city: { placeholder: '全部市区' },
    level: { placeholder: '全部级别' },
    dealer: { placeholder: '全部网点' },
  }

  return (
    <div>
      <a onClick={() => toggleModalVisible(true)}>编辑</a>
      <Modal title='编辑业务人员' destroyOnClose visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
        <Form initialValues={{ name: item.name, phoneNumber: item.phoneNumber, city: item.region, level: String(item.level) }} fields={[{ name: ['outlets'], value: selectVal.outlets }]} className="personal-edit-form" name='catalog-manage-table-search' onFinish={handleFinish} >
          <Form.Item label='姓名' name='name' rules={[{ required: true, message: '请输入姓名!' }]}>
            <Input placeholder="姓名" />
          </Form.Item>
          <Form.Item label='手机号' name='phoneNumber' rules={[{ required: true, len: 11, message: '请输入正确的手机号!' }]}>
            <Input placeholder="手机号" />
          </Form.Item>
          <Form.Item label='所属经销商' name='name'>
            <DealerLinkage isAddPersonal formProps={formProps} span={8} onCallBack={selectChange} defaultLevel={item.level} />
          </Form.Item>
          <div className='text-right'>
            <Button type="primary" htmlType="submit" className='search-button mr-8'>保存</Button>
            <Button className='search-button' onClick={() => toggleModalVisible(false)}>取消</Button>
          </div>
        </Form>
      </Modal>
    </div>
  )
}

const TableList = (props) => {
  const { dispatch, getList, list } = props;

  const handlePaginationChange = (page) => {
    getList(page);
  }

  const columns = [
    {
      title: '人员ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '所属经销商',
      dataIndex: 'agentOutletsName',
      key: 'agentOutletsName',
    },
    {
      title: '创建日期',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (item) => item === PERSONAL_STATUS.OPEN ? <span className='font-green'>{toggleStatusKeyVal('personalStatus', item)}</span> : <Text type='danger'>{toggleStatusKeyVal('personalStatus', item)}</Text>
    },
    {
      title: '停用/启用日期',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: '操作',
      dataIndex: 'opera',
      key: 'opera',
      fixed: 'right',
      render: (input, item) => {
        return (<div className='inline'>
          <OperaBrandEdit item={item} dispatch={dispatch} getList={getList} />
          <OperaUpdateStatus id={item.id} status={item.status} dispatch={dispatch} getList={getList} />
        </div>)
      }
    }
  ];

  const pagination = {
    onChange: handlePaginationChange,
    showTotal: total => `共${total}条`,
    showSizeChanger: true,
    showQuickJumper: true,
    defaultPageSize: PAGESIZE,
    onShowSizeChange: (current, size) => {
      getList(current, { pageSize: size });
    }
  }

  return (
    <div className={styles.container}>
      <div id='components-catalog-table-wrap'>
        <Table
          className="components-table-demo-nested"
          columns={columns}
          dataSource={list}
          rowKey='id'
          pagination={pagination}
        /></div>
    </div>);
}

export default connect(({ personalList }) => ({
  list: personalList.list
}))(TableList);
