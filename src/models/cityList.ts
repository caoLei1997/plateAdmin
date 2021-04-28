

import {
  requestCityRegion,
  requestAllBrands,
  requestBrands
} from '@/services/cityList'
import { filterCity } from '@/utils/utils'
interface cityListStateType {
  cityList: Array<any>,
  brandList: Array<any>,
  brands: any
}
const cityListState: cityListStateType = {
  cityList: [],
  brandList: [],
  brands: [],
}
export default {
  namespace: 'cityList',
  state: { ...cityListState },
  effects: {
    *getCity(action: any, { put, call }) {
      const response = yield call(requestCityRegion)
      yield put({
        type: 'modifyCityList',
        payload: { ...response }
      })
    },
    
    *getAllBrands(action: any, { put, call }) {
      const response = yield call(requestAllBrands)
      yield put({
        type: 'modifyBrandList',
        payload: { ...response }
      })
    },
    *getBrands(action, { put, call }) {
      const response = yield call(requestBrands, { ...action.payload });
      console.log(response);
      yield put({
        type: 'modifyBrands',
        payload: { ...response }
      })
    }
  },
  reducers: {
    modifyCityList(state, { payload }) {
      const { data } = payload;
      return {
        ...state,
        cityList: filterCity([...data])
      };
    },
    modifyBrandList(state: any, { payload }) {
      const { data } = payload;
      return {
        ...state,
        brandList: [...data]
      }
    },
    modifyBrands(state: any, { payload }) {
      const { data } = payload;
      return {
        ...state,
        brands: [...data]
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        switch (pathname) {
          case '/merchant/brand':
            dispatch({
              type: 'getCity',
            })
            dispatch({
              type: 'getAllBrands'
            })
            break;
          case '/vipManage':
            dispatch({
              type: 'getBrands',
              payload: {
                versionType: 'vip'
              }
            })
            break;
          case '/merchant/distributor':
            dispatch({
              type: 'getCity',
            })
            break;
        }
      });
    },
  },

}