import {
  editBrand,
  requestAgentList,
  requestStopAndStartBrand,
  addBrandList,
} from '@/services/BrandModels'
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant'
import { message } from 'antd'
interface BrandModelsStateType {
  pageIndex: number,
  pageSize: number,
  level: number,
  total: number,
  list: Array<any>,
  filter: object
}
const BrandModelsState: BrandModelsStateType = {
  pageIndex: 0,
  pageSize: PAGESIZE,
  level: 11,
  total: 0,
  list: [],
  filter: {}
}
export default {
  namespace: 'BrandModels',
  state: { ...BrandModelsState },
  effects: {
    *getList(action, { put, call }) {
      const { payload } = action;
      yield put({
        type: 'pageElement',
        payload,
      })
      const response = yield call(requestAgentList, payload)
      yield put({
        type: 'requestData',
        payload: response.data,
      })
    },
    *requestEditBrand(action, { put, call, select }) {
      const { BrandModels } = yield select();
      const { payload, callback } = action;
      const response = yield call(editBrand, payload)
      if (response.retCode === RETCODESUCCESS) {
        yield message.success(response.retMsg)
        yield put({
          type: 'modifyList',
          payload: {
            current: payload,
            list: [...BrandModels.list]
          },
        })
        yield callback()
      }
    },
    *stopAndStartBrand(action, { put, call, select }) {
      const { BrandModels } = yield select();
      // 0启用 1停用
      const { payload, callback } = action
      const response = yield call(requestStopAndStartBrand, payload)
      if (response.retCode === RETCODESUCCESS) {
        yield message.info(response.retMsg)
        yield put({
          type: 'modifyItemStatus',
          payload: {
            params: payload,
            list: [...BrandModels.list],
          }
        })
        yield callback()
      }
    },
    *addBrandList(action,{call}){
      const {payload,callback} = action
      const response = yield call(addBrandList,payload)
      if (response.retCode === RETCODESUCCESS) {
        yield message.info(response.retMsg)
        yield callback()
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
    requestData(state, { payload }) {
      const { content, total } = payload;
      return {
        ...state,
        list: content,
        total: total,
      };
    },
    modifyList(state, { payload }) {
      const { current, list } = payload;
      const newList = list.map(item => {
        if (item.id === current.id) {
          return {
            ...item,
            ...current
          }
        } else {
          return { ...item }
        }
      })
      return {
        ...state,
        list: newList
      }
    },
    modifyItemStatus(state, { payload }) {
      const { list, params } = payload;
      const newList = list.map(item => {
        if (item.id === params.agentOutletsId) {
          return {
            ...item,
            status: params.status
          }
        } else {
          return { ...item }
        }
      })
      return {
        ...state,
        list: [...newList]
      }
    }
  },
}