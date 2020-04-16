import { requestCarPlatePrefixList } from '@/services/car';

export default {
    namespace: 'platePrefix',
    state: {
        list: []
    },
    effects: {
        *getList(action, { call, put }) {
            const response = yield call(requestCarPlatePrefixList);
            yield put({
                type: 'changeList',
                payload: response
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            if (!data) return { ...state, list: [] };
            return { ...state, list: data || [] };
        }
    }
}