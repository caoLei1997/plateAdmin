import React, { useState } from 'react';
import { connect } from 'umi';
import { Table, Popconfirm, Modal, Typography } from 'antd';
import { SUPER_UNIQUE } from '@/globalConstant';
import WrappedFormAddBrand from '../FormModalBrand';
import WrappedFormAddBrandModel from '../FormModalBrandModel';
import ModalPlateSN from '../TableSearchSN';
import styles from './index.less';
import { get } from 'http';

const { Text } = Typography;

const OperaBrandDel = ({ dispatch, id, successFun, val, loading }) => {
  const handleConfirm = () => {
    dispatch({
      type: 'catalogBrand/del',
      payload: { brandId: id, brandName: val },
      onSuccess: () => {
        successFun();
      }
    })
  }
  return (
    <div>
      <Popconfirm okText='是' cancelText='否' title={<p>删除品牌会导致该品牌、型号及下属SN号全部删除，<br />但不影响已创建的车辆资料，确定删除吗?</p>} onConfirm={handleConfirm}>
        <a><Text type='danger' disabled={loading}>删除</Text></a>
      </Popconfirm>
    </div>
  )
}

const OperaBrandEdit = ({ dispatch, id, val, successFun, account }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }

  const handleEditBrand = (values) => {
    dispatch({
      type: 'catalogBrand/edit',
      payload: {
        brandName: values.brandName,
        brandId: id,
        account
      },
      onSuccess: () => {
        setModalVisible(false);
        successFun();
      }
    })
  }

  return (
    <div>
      <a onClick={() => toggleModalVisible(true)}>编辑</a>
      <Modal title='编辑品牌' destroyOnClose visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
        <WrappedFormAddBrand toggleVisible={toggleModalVisible} submitFun={handleEditBrand} initialValues={{ brandName: val }} />
      </Modal>
    </div>
  )
}

const OperaBrandAddModel = (props) => {
  const { dispatch, id, successFun, account, brandName } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }

  const handleSubmitFun = (values) => {
    dispatch({
      type: 'catalogModel/add',
      payload: {
        modelName: values.brandModelName,
        brandId: id,
        account
      },
      onSuccess: () => {
        setModalVisible(false);
        successFun();
      }
    })
  }

  return (
    <div>
      <a onClick={() => toggleModalVisible(true)}>新增型号</a>
      <Modal title='新增型号' destroyOnClose visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
        <WrappedFormAddBrandModel brandName={brandName} toggleVisible={toggleModalVisible} unique={id} submitFun={handleSubmitFun} />
      </Modal>
    </div>
  )
}
const OperaModelEdit = ({ dispatch, id, successFun, val, brandId }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }

  const handleSubmitFun = (values) => {
    dispatch({
      type: 'catalogModel/edit',
      payload: {
        modelName: values.brandName,
        modelId: id,
        brandId
      },
      onSuccess: () => {
        setModalVisible(false);
        successFun();
      }
    })
  }

  return (
    <div>
      <a onClick={() => toggleModalVisible(true)}>编辑</a>
      <Modal title='编辑型号' destroyOnClose visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
        <WrappedFormAddBrand toggleVisible={toggleModalVisible} initialValues={{ brandName: val }} submitFun={handleSubmitFun} placeholder='型号名称' />
      </Modal>
    </div>
  )
}

const OperaModelDel = ({ dispatch, id, brandId, successFun, val, loading }) => {
  const handleConfirm = () => {
    dispatch({
      type: 'catalogModel/del',
      payload: { modelId: id, brandId, modelName: val },
      onSuccess: () => {
        successFun();
      }
    })
  }
  return (
    <div>
      <Popconfirm okText='是' cancelText='否' title={<p>删除型号会导致该型号及下属SN号全部删除，<br />但不影响已创建的车辆资料，确定删除吗?</p>} onConfirm={handleConfirm}>
        <a className='font-red' disabled={loading}>删除</a>
      </Popconfirm>
    </div>
  )
}



const NestedTable = (props) => {
  const { dispatch, listState, userInfo, tableLoading, delModelLoading, delBrandLoading, getList } = props;
  const { current, pageSize, total, list } = listState;
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);
  const [nowPageSize, setNowPageSize] = useState([pageSize]);

  const expandable = expandedRows => {
    setExpandedRowKeys([expandedRows[expandedRows.length - 1]]);
  }

  const handlePaginationChange = (page) => {
    getList(page);
  }

  const columns = [
    {
      title: '品牌/型号',
      dataIndex: 'name',
      key: 'name',
      editable: true,
    },
    {
      title: '品牌厂家',
      dataIndex: 'agentOutletsName',
      key: 'agentOutletsName',
    },
    {
      title: '整车编码SN数',
      dataIndex: 'electrombileNumberCount',
      key: 'electrombileNumberCount',
      render: (input, item) => {
        if (item.pid) {
          return (<ModalPlateSN brandId={item.pid} modelId={item.id} count={item.electrombileNumberCount} resetTable={() => getList(current)} />);
        }
        return (<ModalPlateSN brandId={item.id} count={item.electrombileNumberCount} resetTable={() => getList(current)} />)
      }
    },
    {
      title: '操作',
      dataIndex: 'opera',
      key: 'opera',
      fixed: 'right',
      render: (input, item) => {
        if (item.children) {
          return (<div className='inline'>
            {userInfo.id === SUPER_UNIQUE && <OperaBrandEdit dispatch={dispatch} id={item.id} val={item.name} successFun={() => { handlePaginationChange(current) }} account={userInfo.phone} />}
            {userInfo.id === SUPER_UNIQUE && <OperaBrandDel loading={delBrandLoading} dispatch={dispatch} id={item.id} val={item.name} successFun={() => { handlePaginationChange(current) }} />}
            <OperaBrandAddModel dispatch={dispatch} id={item.id} brandName={item.name} successFun={() => { handlePaginationChange(current) }} account={userInfo.phone} />
          </div>)
        }

        return (<div className='inline'>
          --
          {/* <OperaModelEdit dispatch={dispatch} id={item.id} brandId={item.pid} val={item.name} successFun={() => { handlePaginationChange(current) }} /> */}
          {/* <OperaModelDel loading={delModelLoading} dispatch={dispatch} id={item.id} brandId={item.pid} val={item.name} successFun={() => { handlePaginationChange(current) }} /> */}
        </div>)
      }
    }
  ];

  const pagination = {
    total,
    current,
    pageSize: nowPageSize,
    onChange: handlePaginationChange,
    showTotal: total => `共${total}条`,
    showSizeChanger: true,
    showQuickJumper: true,
    onShowSizeChange: (current, size) => {
      setNowPageSize(size);
      getList(current, false, { pageSize: size });
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
          onExpandedRowsChange={expandable}
          expandedRowKeys={expandedRowKeys}
          pagination={pagination} loading={tableLoading}
        /></div>
    </div>);
}

export default connect(({ catalogList, login, loading }) => ({
  listState: catalogList,
  userInfo: login,
  tableLoading: loading.effects['catalogList/getList'],
  delModelLoading: loading.effects['catalogModel/del'],
  delBrandLoading: loading.effects['catalogBrand/del']
}))(NestedTable);
