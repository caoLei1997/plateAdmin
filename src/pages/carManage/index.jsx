import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import DealerSelect from '@/components/DealerSelect';
import TabsBasic from './components/TabsBasic';
import MeansTable from './components/MeansTable';
import DistributeTable from './components/DistributeTable';
import MeansFormSearch from './components/MeansFormSearch';
import DistributeFormSearch from './components/DistributeFormSearch';
import CardCensusBasic from './components/cardCensusBasic';
import styles from './index.less';
<<<<<<< HEAD
import { PAGESIZE, LOCAL_MEANS_IDS_KEY, RETCODESUCCESS, LOCAL_MEANS_FILTER } from '@/globalConstant';
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7

const tabCensus = [
  {
    title: '分配统计',
    id: 2,
    component: <CardCensusBasic />
  }
];

const tabMenu = ({ getMeansList, getDistributeList }) => [
  {
    title: '资料审核',
    id: 1,
    component: (
      <MeansFormSearch>
        <MeansTable paginationChange={getMeansList} />
      </MeansFormSearch>
    ),
  },
  {
    title: '分配明细',
    id: 2,
    component: (<div>
      <TabsBasic size='large' tabData={tabCensus} />
      <TabsBasic size='large' tabData={[{
        title: '号牌分配',
        id: 2,
        component: (<DistributeFormSearch>
          <DistributeTable paginationChange={getDistributeList} />
        </DistributeFormSearch>)
      }]} />
    </div>
    ),
  },
];
<<<<<<< HEAD
const CarManage = (props) => {
  const { dispatch, means, meansListState, userInfo, distributeListState } = props;
  const [tabKey, setTabKey] = useState('1');
  const getMeansList = (current, firstId, config = {...meansListState.filter}) => {

=======

const CarManage = (props) => {
  const { dispatch, means, meansListState, userInfo, distributeListState } = props;
  const [tabKey, setTabKey] = useState('1');

  console.log(userInfo);


  const getMeansList = (current, firstId, config = {}) => {
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
    dispatch({
      type: 'meansList/getList',
      payload: {
        "agentOutletsId": firstId || userInfo.firstId,
        "account": userInfo.phone,
        "pageIndex": current,
        "pageSize": meansListState.pageSize,
<<<<<<< HEAD
        secondaryAgentOutletsId: [],
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
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

<<<<<<< HEAD


=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
  const getDistributeList = (current, firstId, config = {}) => {
    dispatch({
      type: 'distributeList/getList',
      payload: {
        "agentOutletsId": firstId || userInfo.firstId,
        "account": userInfo.phone,
        "pageIndex": current,
        "pageSize": distributeListState.pageSize,
        "secondaryAgentOutletsId": "",
        "electrombileNumber": "",
        "prefix": "",
        "plateNumberCode": "",
        "startDistributionDate": '',
        "endDistributionDate": '',
<<<<<<< HEAD
        ...distributeListState.filter,
        ...config,
=======
        ...config
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      }
    })

    dispatch({
      type: 'distributeList/getCensus',
      payload: {
        account: userInfo.phone,
        agentOutletsId: firstId || userInfo.firstId
      }
    })

    dispatch({
      type: 'subDealer/getList',
      payload: {
        agentOutletsId: firstId || userInfo.firstId
      }
    })
  }

  useEffect(() => {
<<<<<<< HEAD
    getMeansList(1,false,{});

=======
    getMeansList(1);
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
  }, []);

  const tabKeyChange = (key, agentOutletsId) => {
    switch (key) {
      case '1':
        getMeansList(meansListState.current, agentOutletsId);
        break;
      case '2':
        getDistributeList(distributeListState.current, agentOutletsId);
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
<<<<<<< HEAD
          getDistributeList,

=======
          getDistributeList
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
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
