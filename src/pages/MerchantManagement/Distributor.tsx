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
    getEditData,
    getBrandList
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
      filter: null
    }
    getList(payload)
  }

  useEffect(() => {
    requestGetList({ pageIndex: 0, pageSize: 10 })
    getEditData()
    // getBrandList()
  }, [])
  return (
    <div>
      <BranFilter
        brandLabel='品牌'
        cityList={cityList}
        requestGetList={requestGetList}
        brandList={cityList.brandList}
      />
      <DistributorAdd
        cityList={cityList}
        distributorState={distributorState}
      />
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
  getEditData: (id,callback) => ({
    type: 'Distributor/getEditData',
    payload: id,
    callback,
  }),
  getBrandList:()=>({
    type: 'Distributor/getBrandList',
  })
}
export default connect(
  stateToProps,
  dispatchToProps
)(Distributor);
