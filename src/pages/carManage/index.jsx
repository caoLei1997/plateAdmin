import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { connect, Link } from 'umi';
import { examineArr } from '@/globalData';
// import SelectSearch from '@/components/DealerSelect';
import TabsBasic from './components/TabsBasic';
import TableBasic from './components/TableBasic';
import FormAdvancedSearch from './components/FormAdvancedSearch';
import FormAdvancedSearchDetails from './components/FormAdvancedSearchDetails';
import CardCensusBasic from './components/cardCensusBasic';
import styles from './index.less';

const meansColumns = [
  {
    title: '申请日期',
    dataIndex: 'applyDate',
    key: 'applyDate',
    width: 120,
  },
  {
    title: '次级经销商',
    dataIndex: 'secondDealer',
    key: 'secondDealer',
  },
  {
    title: '车辆品牌',
    dataIndex: 'carBrand',
    key: 'carBrand',
  },
  {
    title: '车辆型号',
    dataIndex: 'carModel',
    key: 'carModel',
  },
  {
    title: '整车编码SN',
    dataIndex: 'SNCode',
    key: 'SNCode',
    width: 180,
  },
  {
    title: 'ccc证书编码',
    dataIndex: 'cccIdCode',
    key: 'cccIdCode',
    width: 180,
  },
  {
    title: '审核状态',
    dataIndex: 'status',
    key: 'status',
    width: 80,
    render: status => {
      const active = examineArr.filter(item => item.key === status) || [];
      return <span className={`font-${active[0].color}`}>{active[0].val}</span>
    }
  },
  {
    title: '审核日期',
    dataIndex: 'date',
    key: 'date',
    width: 120
  },
  {
    title: '不通过原因',
    dataIndex: 'reason',
    key: 'reason',
  },
  {
    title: '操作',
    dataIndex: 'opera',
    key: 'opera',
    render: () => <Link to="/carmanage/details">查看详情</Link>,
  },
];

const tabCensus = [
  {
    title: '分配统计',
    id: 2,
    component: <CardCensusBasic />
  }
];

const tabMenu = ({ means }) => [
  {
    title: '资料审核',
    id: 1,
    component: (
      <FormAdvancedSearch>
        <TableBasic
          rowKey="id"
          columns={meansColumns}
          loading={means.isLoading}
          data={means.list}
        />
      </FormAdvancedSearch>
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
        component: (<FormAdvancedSearchDetails>
          <TableBasic rowKey="id" columns={meansColumns} loading={means.isLoading} data={means.list} />
        </FormAdvancedSearchDetails>)
      }]} />
    </div>
    ),
  },
];

const CarManage = ({ dispatch, means }) => {

  useEffect(() => {
    dispatch({
      type: 'car/getMeans',
    });
  }, []);

  return (
    <PageHeaderWrapper className={styles.main}>
      {/* <SelectSearch /> */}
      <TabsBasic
        tabData={tabMenu({
          means,
        })}
      />
    </PageHeaderWrapper>
  );
};

export default connect(({ car }) => ({
  means: car.means,
}))(CarManage);
