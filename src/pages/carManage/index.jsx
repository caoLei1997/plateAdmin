import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import DealerSelect from '@/components/DealerSelect';
import { SUPER_UNIQUE } from '@/globalConstant';
import TabsBasic from './components/TabsBasic';
import MeansTable from './components/MeansTable';
import DistributeTable from './components/DistributeTable';
import MeansFormSearch from './components/MeansFormSearch';
import DistributeFormSearch from './components/DistributeFormSearch';
import CardCensusBasic from './components/cardCensusBasic';
import styles from './index.less';

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

const CarManage = (props) => {
  const { dispatch, means, meansListState, userInfo, distributeListState } = props;

  const getMeansList = (current, firstId) => {
    dispatch({
      type: 'meansList/getList',
      payload: {
        "agentOutletsId": firstId ? '' : userInfo.firstId,
        "account": userInfo.phone,
        "pageIndex": current,
        "pageSize": meansListState.pageSize
      }
    })
  }

  const getDistributeList = (current) => {
    dispatch({
      type: 'distributeList/getList',
      payload: {
        "agentOutletsId": userInfo.firstId,
        "account": userInfo.phone,
        "pageIndex": current,
        "pageSize": distributeListState.pageSize,
        "secondaryAgentOutletsId": "",
        "electrombileNumber": "",
        "prefix": "",
        "plateNumberCode": "",
        "startDistributionDate": '',
        "endDistributionDate": ''
      }
    })

    dispatch({
      type: 'distributeList/getCensus',
      payload: {
        account: userInfo.phone,
        agentOutletsId: userInfo.firstId
      }
    })
  }

  useEffect(() => {
    if (userInfo.id === SUPER_UNIQUE) {
      getMeansList(1, 'all');
    } else {
      getMeansList(1);
    }

  }, []);

  const tabsChange = (key) => {
    switch (key) {
      case '1':
        getMeansList(meansListState.current);
        break;
      case '2':
        getDistributeList(distributeListState.current);
        break;
      default:
        return false;
    }
  }

  return (
    <PageHeaderWrapper className={styles.main}>
      <DealerSelect />
      <TabsBasic
        tabData={tabMenu({
          means,
          getMeansList,
          getDistributeList
        })}
        tabsChange={tabsChange}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({ login, meansList, distributeList }) => ({
  userInfo: login,
  meansListState: meansList,
  distributeListState: distributeList
}))(CarManage);
