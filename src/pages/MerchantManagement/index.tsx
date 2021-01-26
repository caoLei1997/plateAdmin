import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
const MerchantManagement = (props) => {
  const { children } = props;
  return (
    <PageHeaderWrapper>
      <Tabs>
        <TabPane tab='品牌厂家' />
        <TabPane tab='经销商' />
      </Tabs>
      {children}
    </PageHeaderWrapper>
  );
}

export default MerchantManagement;
