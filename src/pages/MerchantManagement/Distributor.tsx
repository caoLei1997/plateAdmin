import React, { FC, useEffect } from 'react';
import BranFilter from './components/BranFilter/BranFilter';
import DistributorList from './components/DistributorList/DistributorList';
import DistributorAdd from './components/DistributorAdd/DistributorAdd';
import { connect } from 'umi';
const Distributor: FC<any> = (props) => {
  const {
    cityList,
    distributorState,
    getList,
    getEditData
  } = props;

  const {
    pageIndex,
    pageSize,
    level,
    filter,
  } = distributorState

  const requestGetList = (params: any = {}) => {
    const payload = {
      level,
      pageSize,
      pageIndex,
      ...filter,
      ...params,
      ...params?.filter,
      filter:null
    }
    getList(payload)
  }

  useEffect(()=>{
    requestGetList({pageIndex:0,pageSize:10})
    getEditData()
  },[])
  return (
    <div>
      <BranFilter
        brandLabel='品牌'
        cityList={cityList}
        requestGetList={requestGetList}
        brandList={cityList.brandList}
      />
      <DistributorAdd />
      <DistributorList
        cityList={cityList}
        requestGetList={requestGetList}
        distributorState={distributorState}
        getEditData={getEditData}
      />
    </div>
  );
}

const stateToProps = ({
  cityList,
  Distributor
}) => ({
  cityList,
  distributorState: Distributor
})
const dispatchToProps = {
  getList: (payload: any) => ({
    type: 'Distributor/getList',
    payload: payload
  }),
  getEditData:(id)=>({
    type:'Distributor/getEditData',
    payload:id
  })
}
export default connect(
  stateToProps,
  dispatchToProps
)(Distributor);
