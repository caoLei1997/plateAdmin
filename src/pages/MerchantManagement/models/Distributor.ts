import {
  requestList,
  requestEditData
} from '@/services/Distributor'
import {
  RETCODESUCCESS,
  PAGESIZE,
} from '@/globalConstant'

interface DistributorStateType {
  pageIndex: number,
  pageSize: number,
  level: number,
  total: number,
  list: Array<any>,
  filter: object,
  proxyBrandList: Array<any>,
  brandList: Array<any>,
}
const DistributorState: DistributorStateType = {
  pageIndex: 0,
  pageSize: PAGESIZE,
  level: 12,
  total: 0,
  list: [],
  filter: {},
  proxyBrandList: [],
  brandList: [],
}
export default {
  namespace: 'Distributor',
  state: { ...DistributorState },
  effects: {
    *getList(action, { put, call, select }) {
      const { payload } = action;
      yield put({
        type: 'pageElement',
        payload,
      })
      const response = yield call(requestList, payload)
      if (response.retCode === RETCODESUCCESS) {
        yield put({
          type: 'modifyList',
          payload: response
        })
      }
    },
    *getEditData(action, { put, call }) {
      const { payload } = action;
      const response = yield call(requestEditData, payload)
      if (response.retCode === RETCODESUCCESS) {
        if (payload) {
          yield put({
            type: 'modifyEditData',
            payload: response
          })
        } else {
          yield put({
            type: 'modifyBrandList',
            payload: response,
          })
        }
      }
    },
  },
  reducers: {
    pageElement(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
    modifyList(state, { payload }) {
      const { data } = payload
      return {
        ...state,
        list: [...data.content],
        total: data.total
      };
    },
    modifyEditData(state, { payload }) {
      const { data } = payload;
      return {
        ...state,
        proxyBrandList: data.list
      };
    },
    modifyBrandList(state, { payload }) {
      const { data } = payload;
      

      return {
        ...state,
        brandList: [...data]
      }
    }
  },
}