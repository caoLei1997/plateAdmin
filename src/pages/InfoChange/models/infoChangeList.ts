import { getList } from '@/services/infoChange'
import { DetailDateType } from '../data'
import { Action } from 'umi'
export interface InitialStateType {
  content: Array<DetailDateType>
}

const initialState: InitialStateType = {
  content: []
}
export default {
  namespace: 'infoChangeList',
  state: {
    ...initialState
  },
  effects: {
    *getList(action: Action, { put, call }) {
      const { payload } = action;
      const response = yield call(getList);
      console.info(response)
      yield put({
        type:'modifyContent',
        payload:response,
      })
    },
  },
  reducers: {
    modifyContent(state: InitialStateType, { payload }) {
      console.info("payload: ",  payload )
      return {
        ...state,
      };
    },
  },
}