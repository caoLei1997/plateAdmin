import React, { useState } from 'react';
import { connect } from 'umi';
import ExcelUtil from '@/utils/excel';
import { Table, Button, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

const scroll = { x: 1000 };

const columns = [
  {
    title: '序号',
    dataIndex: 'plateNumberApplyId',
    key: 'plateNumberApplyId'
  },
  {
    title: '次级经销商',
    dataIndex: 'secondaryAgentOutletsName',
    key: 'secondaryAgentOutletsName',
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
    key: 'electrombileNumber',
  },
  {
    title: '车牌序号',
    dataIndex: 'prefix',
    key: 'prefix',
  },
  {
    title: '车牌号',
    dataIndex: 'plateNumberCode',
    key: 'plateNumberCode',
  },
  {
    title: '用途',
    dataIndex: 'electrombileUsageStr',
    key: 'electrombileUsageStr'
  },
  {
    title: '分配日期',
    dataIndex: 'distributionDate',
    key: 'distributionDate'
  }
];

const MeansTable = ({ distributeListState, tableLoading, paginationChange }) => {
  const { total, current, pageSize, list } = distributeListState;
  const [nowPageSize, setNowPageSize] = useState([pageSize]);

  const handlePaginationChange = (page) => {
    paginationChange(page);
  }

  const exportExcel = () => {
    if (!list || list.length === 0) {
      message.warning('没有号牌分配数据可以导出');
      return false;
    }
    ExcelUtil.exportExcel(columns, list, '号牌分配表.xlsx');
  }

  const tableProps = {
    rowKey: 'id',
    columns,
    pagination: {
      total, current,
      pageSize: nowPageSize, onChange: handlePaginationChange,
      showTotal: total => `共${total}条`,
      showSizeChanger: true,
      showQuickJumper: true,
      onShowSizeChange: (current, size) => {
        setNowPageSize(size);
        paginationChange(current, false, { pageSize: size });
      }
    },
    loading: tableLoading,
    scroll,
    dataSource: list
  }
  return (
    <div className={styles.container}>
      <div id="components-table-demo-basic">
        <div style={{ textAlign: 'right' }}>
          <Button type="primary" className='btn-green mb-24' icon={<PlusOutlined />} onClick={exportExcel}>导出分配表</Button>
        </div>
        <Table {...tableProps} />
      </div>
    </div>
  )
};

export default connect(({ distributeList, loading }) => ({
  distributeListState: distributeList,
  tableLoading: loading.effects['carMeansList/getList']
}))(MeansTable)
