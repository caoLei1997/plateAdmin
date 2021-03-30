import { getLogoutList, getInfo, getAuditPass, getNoPass } from '@/services'
import { EffectsCommandMap } from 'dva'

interface initialStateType {
  pageIndex: number,
  pageSize: number,
  total: number,
  filter: any,
  content: any,
  info: any
}
const initialState: initialStateType = {
  pageIndex: 0,
  pageSize: 10,
  total: 0,
  filter: {},
  content: [],
  info: {}
}
export default {
  namespace: 'CarCancel',
  state: { ...initialState },
  effects: {
    *getList(action: any, effects: EffectsCommandMap) {
      const { payload } = action;
      const { call, put } = effects;
      yield put({
        type: 'modifyEle',
        payload: { ...payload }
      })
      const params = {
        pageIndex: payload.pageIndex,
        pageSize: payload.pageSize,
        ...payload.filter
      }
      const response = yield call(getLogoutList, params);
      const { data } = response;
      const ids = data.content.map(item => item.id)
      const carIds = JSON.stringify(ids);
      localStorage.setItem('carIds', carIds)
      yield put({
        type: 'modifyContent',
        payload: { ...response }
      })
    },
    *getInfo(action: any, effects: EffectsCommandMap) {
      const { payload } = action;
      const { call, put } = effects;
      const response = yield call(getInfo, payload);
      yield put({
        type: 'modifyInfo',
        payload: { ...response }
      })
    },
    *auditPass(action: any, effects: EffectsCommandMap) {
      const { payload, onSuccess } = action;
      const { call, put } = effects;
      const response = yield call(getAuditPass, payload);
      onSuccess(response)
    },
    *noPass(action: any, effects: EffectsCommandMap) {
      const { payload, onSuccess } = action;
      const { call, put } = effects;
      const response = yield call(getNoPass, payload);
      onSuccess(response)
    },
  },
  reducers: {
    modifyContent(state: initialStateType, action: any) {
      const { payload } = action;
      const { data } = payload;
      return {
        ...state,
        content: [...data.content],
        total: data.total
      };
    },
    modifyEle(state: initialStateType, action: any) {
      const { payload } = action
      return {
        ...state,
        ...payload,
      };
    },
    modifyInfo(state, action) {
      const { payload } = action
      console.log('payload: ', payload)
      return {
        ...state,
        info: { ...payload.data }
      }
    }
  },

}