import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import DealerSelect from '@/components/DealerSelect';
import TabsWrap from './components/TabsWrap';
import DistributeTable from './components/Distribute';
import DistributeSearch from './components/DistributeSearch';
import DataAuditTable from './components/DataAuditTable';
import DataAuditSearch from './components/DataAuditSearch';

import styles from './index.less';

const carManageIndex = (props) => {
    const { dispatch, userInfo, dataAuditList, distributeDetailList } = props;
    const [firstDealerId, setFirstDealerId] = useState(userInfo.firstId);
    const [dataAuditSearchParams, setDataAuditSearchParams] = useState({});
    const [distributeSearchParams, setDistributeSearchParams] = useState({});

    const firstDealerChange = (val) => {
        setFirstDealerId(val);
    }

    const getDataAuditList = (pageIndex, params) => {
        if (params) setDataAuditSearchParams(params);
        const searchParams = params || dataAuditSearchParams;

        dispatch({
            type: 'dataAuditList/getList',
            payload: {
                agentOutletsId: firstDealerId,
                account: userInfo.phone,
                pageIndex,
                pageSize: dataAuditList.pageSize,
                electrombileNumber: searchParams.SNCode || '',
                brandName: searchParams.carBrand || '',
                modelName: searchParams.carModel || '',
                auditStatus: searchParams.status || '',
                secondaryAgentOutletsId: searchParams.secondDealer || '',
                startApplicationDate: searchParams.applyDate ? searchParams.applyDate[0].format('YYYY-MM-DD') : '',
                endApplicationDate: searchParams.applyDate ? searchParams.applyDate[1].format('YYYY-MM-DD') : '',
                startAuditedAt: searchParams.date ? searchParams.date[0].format('YYYY-MM-DD') : '',
                endAuditedAt: searchParams.date ? searchParams.date[1].format('YYYY-MM-DD') : '',
            }
        })
    }

    const getCensusData = () => {
        dispatch({
            type: 'distributeDetailList/getCensus',
            payload: {
                account: userInfo.phone,
                agentOutletsId: firstDealerId,
            }
        })
    }

    const getDistributeList = (pageIndex, params) => {
        if (params) setDistributeSearchParams(params);
        const searchParams = params || distributeSearchParams;

        dispatch({
            type: 'distributeDetailList/getList',
            payload: {
                agentOutletsId: firstDealerId,
                account: userInfo.phone,
                pageIndex,
                pageSize: distributeDetailList.pageSize,
                secondaryAgentOutletsId: searchParams.secondDealer || '',
                electrombileNumber: searchParams.SNCode || '',
                prefix: searchParams.platePrefix || '',
                plateNumberCode:searchParams.plateNumber || '',
                startDistributionDate: searchParams.date ? searchParams.date[0].format('YYYY-MM-DD') : '',
                endDistributionDate: searchParams.date ? searchParams.date[1].format('YYYY-MM-DD') : ''
            }
        })
        getCensusData();
    }

    useEffect(() => {
        getDataAuditList(1);
    }, []);

    const tabKeyChange = (key) => {
        switch (key) {
            case 'tab-pane-1':
                getDataAuditList(dataAuditList.current);
                break;
            case 'tab-pane-2':
                getDistributeList(distributeDetailList.current);
                break;
            default:
                return false;
        }
    }

    const tabData = [
        {
            id: 1,
            title: '资料审核',
            components: (<DataAuditSearch getList={getDataAuditList}>
                <DataAuditTable getList={getDataAuditList} />
            </DataAuditSearch>)
        },
        {
            id: 2, title: '分配明细', components: <DistributeSearch getList={getDistributeList}>
                <DistributeTable />
            </DistributeSearch>
        }
    ];

    return (
        <PageHeaderWrapper className={styles.main}>
            <DealerSelect changeCallBack={firstDealerChange} />
            <TabsWrap tabData={tabData} change={tabKeyChange} />
        </PageHeaderWrapper>
    )
}

export default connect(({ login, dataAuditList, distributeDetailList }) => ({
    userInfo: login,
    dataAuditList,
    distributeDetailList
}))(carManageIndex);