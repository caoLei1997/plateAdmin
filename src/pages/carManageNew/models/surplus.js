import { requestCarDistributeSurplus } from '@/services/car';
import { PAGESIZE } from '@/globalConstant';

export default {
    namespace: 'modelSurplus',
    state: {
        total: 0,
        pageSize: PAGESIZE,
        current: 1,
        list: []
    },
    effects: {
        *getList({ payload }, { call, put }) {
            yield put({
                type: 'changeCurrent',
                payload: { current: payload.pageIndex }
            });

            const response = yield call(requestCarDistributeSurplus, { ...payload, pageIndex: payload.pageIndex - 1 });
            yield put({
                type: 'changeList',
                payload: response
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            if (!data) return { ...state, list: [], total: 0 };
            return { ...state, list: data.content, total: data.totalElements };
        },
        changeCurrent(state, { payload }) {
            return { ...state, current: payload.current }
        }
    }
}
