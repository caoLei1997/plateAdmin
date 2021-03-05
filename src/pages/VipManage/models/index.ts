import {
  addVip,
  deleteVip,
  getVipList,
} from '@/services/vipManage'
import { message } from 'antd'
interface vipInitStateType {
  pageIndex: number,
  pageSize: number,
  filter: any,
  list: any,
  total: number,
}
const vipInitState: vipInitStateType = {
  pageIndex: 0,
  pageSize: 10,
  filter: {},
  list: [],
  total: 0,
}
export default {
  namespace: 'vipState',
  state: { ...vipInitState },
  effects: {
    *add({ payload, callback }, { put, call }) {
      const res = yield call(addVip, payload);
      yield put({
        type: 'modifyAdd',
        payload: {
          ...res
        }
      })
      if (res.retCode === '0000') {
        message.success(res.retMsg)
        yield callback()
      }
    },
    *delete({ payload, callback }, { put, call }) {
      const res = yield call(deleteVip, payload);
      if (res.retCode === '0000') {
        message.success(res.retMsg)
        yield callback()
      }
    },
    *vipList({ payload }, { put, call, select }) {
      yield put({
        type: 'modifyEle',
        payload: payload
      })
      const res = yield call(getVipList, payload);
      yield put({
        type: 'modifyList',
        payload: { ...res }
      })
    }
  },
  reducers: {
    modifyAdd(state, { payload }) {
      return {};
    },
    modifyDelete(state: any,) {
      return {};
    },
    modifyList(state: any, { payload }) {
      const { data } = payload;
      return {
        ...state,
        list: data.content,
        total: data.total,
      };
    },
    modifyEle(state: any, { payload }) {
      return {
        ...state,
        pageIndex: payload.pageIndex,
        pageSize: payload.pageSize,
      }
    }
  },
}