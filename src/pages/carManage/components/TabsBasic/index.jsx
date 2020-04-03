import React from 'react';
import { Tabs } from 'antd';
import styles from './index.less';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default ({ tabData = [], size = 'default' }) => (
  <div className={styles.container}>
    <div id="components-tabs-demo-basic">
      <Tabs defaultActiveKey="1" onChange={callback} size={size}>
        {tabData.map(item => <TabPane tab={item.title} key={item.id}>{item.component}</TabPane>)}
      </Tabs>
    </div>
  </div>
);
