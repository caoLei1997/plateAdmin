import React from 'react';
import { Table } from 'antd';
import styles from './index.less';

const scroll = { x: 1200 };

export default ({ data, columns, loading, rowKey }) => (
  <div className={styles.container}>
    <div id="components-table-demo-basic">
      <Table rowKey={rowKey} columns={columns} loading={loading} scroll={scroll} dataSource={data} />
    </div>
  </div>
);
