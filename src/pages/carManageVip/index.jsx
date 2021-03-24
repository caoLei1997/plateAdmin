import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect,useLayoutEffect, useState } from 'react';
import { connect } from 'umi';
import DealerSelect from '@/components/DealerSelect';

import MeansTable from './components/MeansTable';

import MeansFormSearch from './components/MeansFormSearch';

import CardCensusBasic from './components/cardCensusBasic';
import styles from './index.less';

import TabsBasic from './components/TabsBasic';

import { PAGESIZE, LOCAL_MEANS_IDS_KEY, RETCODESUCCESS, LOCAL_MEANS_FILTER } from '@/globalConstant';
const tabMenu = ({ getMeansList }) => [
  {
    title: '资料审核',
    id: 1,
    component: (
      <MeansFormSearch>
        <MeansTable paginationChange={getMeansList} />
      </MeansFormSearch>
    ),
  },
];
const CarManage = (props) => {
  const { dispatch, means, meansListState, userInfo, distributeListState } = props;
  const [tabKey, setTabKey] = useState('1');
  const getMeansList = (current, firstId, config = { ...meansListState.filter }) => {
    dispatch({
      type: 'meansList/getList',
      payload: {
        agentOutletsId: firstId || userInfo.firstId,
        account: userInfo.phone,
        pageIndex: current,
        pageSize: meansListState.pageSize,
        versionType:'vip',
        secondaryAgentOutletsId: [],
        ...config
      }
    })
    dispatch({
      type: 'subDealer/getList',
      payload: {
        agentOutletsId: firstId || userInfo.firstId
      }
    })
  }

  useLayoutEffect(() => {
    console.log(111);
    
    getMeansList(1, false, {});
  }, []);

  const tabKeyChange = (key, agentOutletsId) => {
    switch (key) {
      case '1':
        getMeansList(meansListState.current, agentOutletsId);
        break;
      default:
        return false;
    }
  }

  const tabsChange = (key) => {
    setTabKey(key);
    tabKeyChange(key);
  }

  const dealerChange = (agentOutletsId) => {
    tabKeyChange(tabKey, agentOutletsId);
  }

  return (
    <PageHeaderWrapper className={styles.main}>
      <DealerSelect changeCallBack={dealerChange} />
      <TabsBasic
        tabData={tabMenu({
          means,
          getMeansList,
        })}
        tabsChange={tabsChange}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({ login, meansList, distributeList }) => ({
  userInfo: login,
  meansListState: meansList,
  distributeListState: distributeList,
}))(CarManage);
