import { requestGetCity,getBrigadeByCityAndRegion } from '@/services'
const initialState = {
  trafficList: [],
  brigadeList:[]
}
export default {
  namespace: 'traffic',
  state: { ...initialState },
  effects: {
    *getList(action, effects) {
      const { payload } = action
      const { call, put, select } = effects;
      const login = yield select(state => state.login);
      const params = {
        agentOutletsId: login.id
      }
      const response = yield call(requestGetCity, params)
      yield put({
        type: 'modifyList',
        payload: response.data
      })
    },
    *getBrigade(action, effects) {
      const { payload } = action
      const { call, put, select } = effects;
      const response = yield call(getBrigadeByCityAndRegion, { ...payload })
      yield put({
        type: 'modifyBrigadeList',
        payload: response.data
      })
    },
  },
  reducers: {
    modifyList(state, action) {
      const { payload } = action;
      return {
        ...state,
        trafficList: [...payload]
      };
    },
    modifyBrigadeList(state,action){
      const { payload } = action;
      console.log('payload: ', payload)
      return {
        ...state,
        brigadeList: [...payload]
      };
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((pathname) => {
        switch (pathname.pathname) {
          case '/approveManage/carCancel/carCancelList':
            dispatch({
              type: 'getList'
            })
            break;
          case '/approveManage/infoChange/infoChangeList':
            dispatch({
              type: 'getList'
            })
            break;
          default:
            break;
        }

      })
    }
  }
}