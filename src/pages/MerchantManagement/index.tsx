import React, {
  FC,
  useEffect,
} from 'react';
import BranFilter from './components/BranFilter/BranFilter';
import BrandAdd from './components/BrandAdd/BrandAdd';
import BrandList from './components/BrandList/BrandList';
import { connect } from 'umi';

const index: FC<any> = (props) => {
  const {
    getList,
    cityList,
    brandModelsState,
    requestEditBrand,
    stopAndStartBrand,
    addBrandList,
  } = props;

  const {
    pageIndex,
    pageSize,
    level,
    filter,
  } = brandModelsState
  const requestGetList = (params: any = {}) => {
    const payload = {
      level,
      pageSize,
      pageIndex,
      ...filter,
      ...params,
      ...params?.filter
    }
    getList(payload)
  }
  useEffect(() => {
    requestGetList({
      pageIndex: 0,
      pageSize: 10,
    })
  }, [])


  const editBrandItem = (payload, callback) => {
    requestEditBrand(payload, callback)
  }


  return (
    <div>
      <BranFilter
        requestGetList={requestGetList}
        cityList={cityList}
        brandList={cityList.brandList}
      />
      <BrandAdd
        cityList={cityList}
        addBrandList={addBrandList}
        requestGetList={requestGetList}
      />
      <BrandList
        requestGetList={requestGetList}
        brandModelsState={brandModelsState}
        cityList={cityList}
        editBrandItem={editBrandItem}
        stopAndStartBrand={stopAndStartBrand}
      />
    </div>
  );
}

const stateToProps = ({
  BrandModels,
  cityList
}) => ({
  cityList,
  brandModelsState: BrandModels,
})
const dispatchToProps = {
  getList: (payload: any) => ({
    type: 'BrandModels/getList',
    payload,
  }),
  requestEditBrand: (payload: any, callback: Function) => ({
    type: 'BrandModels/requestEditBrand',
    payload,
    callback,
  }),
  stopAndStartBrand: (payload: any, callback: Function) => ({
    type: 'BrandModels/stopAndStartBrand',
    payload,
    callback
  }),
  addBrandList: (payload: any, callback: Function) => ({
    type: "BrandModels/addBrandList",
    payload,
    callback,
  })

}
export default connect(
  stateToProps,
  dispatchToProps
)(index);
