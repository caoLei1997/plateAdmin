import { requestSubDealerList } from '@/services/subDealer';

export default {
    namespace: 'subDealer',
    state: {
        list: []
    },
    effects: {
        *getList({ payload }, { call, put }) {
            const response = yield call(requestSubDealerList, payload);
            yield put({
                type: 'changeList',
                payload: response
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            if (!data) return { ...state, list: []};
            return { ...state, list: data || []};
        }
    }
}