

import {
  getSubUploadList,
  deleteSubUploadList,
  getQueryCount
} from '@/services/snUpload'
const initialState = {
  list: [],
  total: 0,
  pageIndex: 1,
  pageSize: 20,
  uploaded: {}
}
import { delay } from 'redux-saga';
export default {
  namespace: 'snUpload',
  state: { ...initialState },
  effects: {
    *reqSubUploadList({ payload, rotation = false }, { put, call, select }) {
      const { login } = yield select();
      yield put({
        type: 'changePage',
        payload: { ...payload }
      })
      const res = yield call(getSubUploadList, {
        ...payload,
        agentOutletsId: login.id,
        pageIndex: payload.pageIndex - 1,
      });
      yield put({
        type: 'changeList',
        payload: res.data
      })

      console.log(rotation);
      
      if (res.retCode && rotation) {
        yield call(delay, 10000);
        yield put({
          type: 'reqSubUploadList',
          payload: { ...payload },
        });
      }

    },

    *reqSubUploadListDelete({ payload }, { put, call }) {
      const res = yield call(deleteSubUploadList,
        payload
      )
      yield put({
        type: 'deleteList',
        payload: payload
      })
    },

    *reqQueryCount(action, { put, call }) {
      const res = yield call(getQueryCount)
      yield put({
        type: 'changeUploaded',
        payload: { ...res }
      })
    }
  },
  reducers: {
    changePage(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
    changeList(state, { payload }) {
      return {
        ...state,
        total: payload.total,
        list: payload.content
      }
    },
    deleteList(state, { payload }) {
      return {
        ...state,
        list: state.list.filter(item => item.id !== payload)
      }
    },
    changeUploaded(state, { payload }) {
      return {
        ...state,
        uploaded: payload.data
      }
    }
  }
}