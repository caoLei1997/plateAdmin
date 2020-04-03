import React, { useState } from 'react';
import { Table, Popconfirm, Modal, Typography } from 'antd';
import WrappedFormAddBrand from '../FormModalBrand';
import WrappedFormAddBrandModel from '../FormModalBrandModel';
import WrappedTableSearchSN from '../TableSearchSN';
import styles from './index.less';

const { Text, Title } = Typography;

const OperaBrandDel = () => (
  <div>
    <Popconfirm title={<p>删除品牌会导致该品牌、型号及下属SN号全部删除，<br />但不影响已创建的车辆资料，确定删除吗?</p>} >
      <a href="#"><Text type='danger'>删除</Text></a>
    </Popconfirm>
  </div>
)

const OperaBrandEdit = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }

  return (
    <div>
      <a href="#" onClick={() => toggleModalVisible(true)}>编辑</a>
      <Modal title='编辑品牌' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
        <WrappedFormAddBrand toggleVisible={toggleModalVisible} />
      </Modal>
    </div>
  )
}

const OperaBrandAddModel = ({ id }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }

  return (
    <div>
      <a href="#" onClick={() => toggleModalVisible(true)}>新增型号</a>
      <Modal title='新增型号' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
        <WrappedFormAddBrandModel toggleVisible={toggleModalVisible} unique={id} />
      </Modal>
    </div>
  )
}

const OperaModelEdit = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }

  return (
    <div>
      <a href="#" onClick={() => toggleModalVisible(true)}>编辑</a>
      <Modal title='编辑型号' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
        <WrappedFormAddBrand toggleVisible={toggleModalVisible} />
      </Modal>
    </div>
  )
}

const OperaModelDel = () => (
  <div>
    <Popconfirm title={<p>删除型号会导致该型号及下属SN号全部删除，<br />但不影响已创建的车辆资料，确定删除吗?</p>} >
      <a href="#" className='font-red'>删除</a>
    </Popconfirm>
  </div>
)

const ModalPlateSN = ({ SN }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }
  return (<div>
    <Text underline><a onClick={() => toggleModalVisible(true)}>{SN}</a></Text>
    <Modal title='整车编码SN' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
      <Title level={4}>SN数：128</Title>
      <WrappedTableSearchSN />
    </Modal>
  </div>)
}

const NestedTable = ({ data }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  const columns = [
    {
      title: '品牌/型号',
      dataIndex: 'brandName',
      key: 'brandName',
      editable: true,
    },
    {
      title: '一级经销商',
      dataIndex: 'dealerName',
      key: 'dealerName',
    },
    {
      title: '整车编码SN',
      dataIndex: 'codeSN',
      key: 'codeSN',
      render: (input, item) => <ModalPlateSN SN={item.codeSN} />
    },
    {
      title: '操作',
      dataIndex: 'opera',
      key: 'opera',
      render: (input, item) => {
        if (item.children) {
          return (<div className='inline'>
            <OperaBrandEdit />
            <OperaBrandDel />
            <OperaBrandAddModel id={item.id} />
          </div>)
        }

        return (<div className='inline'>
          <OperaModelEdit />
          <OperaModelDel />
        </div>)
      }
    }
  ];

  const expandable = expandedRows => {
    setExpandedRowKeys([expandedRows[expandedRows.length - 1]]);
  }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      dataSource={data.list}
      rowKey='id'
      onExpandedRowsChange={expandable}
      expandedRowKeys={expandedRowKeys}
    />
  );
}

export default ({ data }) => (
  <div className={styles.container}>
    <div id="components-catalog-table-wrap">
      <NestedTable data={data} />
    </div>
  </div>
);
