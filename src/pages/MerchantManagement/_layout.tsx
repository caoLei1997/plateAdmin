import React, { FC, useLayoutEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import { MerchantManagementProp } from 'umi';


const MerchantManagement: FC<MerchantManagementProp> = (props) => {
  const { children, history } = props;
  useLayoutEffect(() => {
    history.push('brand')
  }, [])

  const tabsChangeRoutes = (key: string): void => {
    if (key === '1') {
      history.push('brand')
    } else if (key === '2') {
      history.push('distributor')
    }
  }
  return (
    <PageHeaderWrapper
      className='mains'
      title='商户管理'
      breadcrumb={{}}
    >
      <Tabs
        onChange={tabsChangeRoutes}
        defaultActiveKey='1'
      >
        <TabPane tab='品牌厂家' key='1' />
        <TabPane tab='经销商' key='2' />
      </Tabs>
      <div className='mt-16'>
        {children}
      </div>
    </PageHeaderWrapper>
  );
}

export default MerchantManagement;
