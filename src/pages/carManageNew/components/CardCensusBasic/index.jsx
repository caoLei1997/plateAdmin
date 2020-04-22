import React, { useState } from 'react';
import { connect } from 'umi';
import { Card, Row, Col, Statistic, Modal, Table, Typography, Input } from 'antd';
import styles from './index.less';

const { Title } = Typography;
const { Search } = Input;

const columns = [
  {
    title: '车牌号',
    dataIndex: 'plateNumber',
    key: 'plateNumber'
  }
]

const cardComponents = (props) => {
  const { census, dispatch, userInfo, surplus, tableLoading } = props;
  const { total, list, current, pageSize } = surplus;
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModalVisible = visible => {
    setModalVisible(visible);
  }

  const getSurplus = (pageIndex, plateNumber = '') => {
    dispatch({
      type: 'surplus/getList',
      payload: {
        "agentOutletsId": userInfo.firstId,
        "pageIndex": pageIndex,
        "pageSize": surplus.pageSize,
        plateNumber
      }
    })
  }

  const btnClick = () => {
    getSurplus(1);
    toggleModalVisible(true);
  }

  const handlePaginationChange = (page) => {
    getSurplus(page);
  }

  const tableProps = {
    columns,
    dataSource: list,
    rowKey: 'id',
    pagination: { total, current, pageSize, onChange: handlePaginationChange },
    loading: tableLoading
  }

  const handleSearch = value => {
    getSurplus(1, value)
  }

  return (
    <div className={styles.container}>
      <Card style={{ width: 600 }}>
        <Row>
          <Col span={12} className='total item-wrap'>
            <Statistic title="已分配总数" value={census.distributionNumber} />
          </Col>
          <Col span={12} className='total item-wrap'>
            <span onClick={btnClick}><Statistic title="剩余库存总数" value={census.residualInventoryNumber} valueStyle={{ textDecoration: 'underline', color: '#1890ff' }} /></span>
          </Col>
        </Row>
      </Card>
      <Modal title='号牌库存' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
        <Title level={4} className='mb-16'>剩余库存总数：{census.residualInventoryNumber}</Title>
        <Search className='mb-16' placeholder='搜索车牌号' onSearch={handleSearch} enterButton />
        <Table {...tableProps} />
      </Modal>
    </div>
  )
}

export default connect(({ distributeDetailList, login, modelSurplus, loading }) => ({
  census: distributeDetailList.census,
  userInfo: login,
  modelSurplus,
  tableLoading: loading.effects['modelSurplus/getList']
}))(cardComponents)
