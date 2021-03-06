import React, { useState } from 'react';
import { connect, Link } from 'umi';
import { examineArr } from '@/globalData';
import { Table } from 'antd';
import styles from './index.less';

const scroll = { x: 1000 };

const columns = [
  {
    title: '申请日期',
    dataIndex: 'lastImageInputtedDate',
    key: 'lastImageInputtedDate'
  },
  {
    title: '经销商',
    dataIndex: 'agentOutletsName',
    key: 'agentOutletsName',
  },
  {
    title: '市区',
    dataIndex: 'agentOutletsCity',
    key: 'agentOutletsCity',
  },
  {
    title: '车辆品牌',
    dataIndex: 'brandName',
    key: 'brandName',
  },
  {
    title: '车辆型号',
    dataIndex: 'modelName',
    key: 'modelName',
  },
  {
    title: '整车编码SN',
    dataIndex: 'electrombileNumber',
    key: 'electrombileNumber'
  },
  {
    title: 'ccc证书编码',
    dataIndex: 'cccCertificateNumber',
    key: 'cccCertificateNumber'
  },
  {
    title: '审核状态',
    dataIndex: 'auditStatus',
    key: 'auditStatus',
    width: 80,
    render: auditStatus => {
      const active = examineArr.filter(item => item.key === auditStatus) || [];
      return active.length && <span className={`font-${active[0].color}`}>{active[0].val}</span>
    }
  },
  {
    title: '审核日期',
    dataIndex: 'auditedAt',
    key: 'auditedAt'
  },
  {
    title: '不通过原因',
    dataIndex: 'notPassReason',
    key: 'notPassReason'
  },
  {
    title: '操作',
    dataIndex: 'id',
    key: 'id',
    fixed: 'right',
    render: id => <Link to={`/carmanage/basic/details/${id}`}>查看详情</Link>,
  },
];

const MeansTable = ({ meansListState, tableLoading, paginationChange, getList }) => {
  const { total, current, pageSize, list } = meansListState;
  const [nowPageSize, setNowPageSize] = useState([pageSize]);
  console.log(pageSize);

  const handlePaginationChange = (page, size) => {
    paginationChange(page, false, { ...meansListState.filter, pageSize: size[0], pageIndex: page });
  }

  const tableProps = {
    rowKey: 'id',
    columns,
    scroll,
    pagination: {
      total,
      current,
      pageSize: nowPageSize,
      onChange: handlePaginationChange,
      showTotal: total => `共${total}条`,
      showSizeChanger: true,
      showQuickJumper: true,
    },
    dataSource: list
  }
  return (
    <div className={styles.container}>
      <div id="components-table-demo-basic">
        <Table key={new Date().getTime()} loading={tableLoading}  {...tableProps} />
      </div>
    </div>
  )
};

export default connect(({ meansList, loading }) => ({
  meansListState: meansList,
  tableLoading: loading.effects['meansList/getList']
}))(MeansTable)
