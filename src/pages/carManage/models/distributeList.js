import { requestCarDistributeList, requestCarDistributeCensus } from '@/services/car';
import { toggleStatusKeyVal } from '@/commonFun';
import { PAGESIZE } from '@/globalConstant';

const resetList = arr => {
    if (!arr) return [];
    arr.map(item => item.electrombileUsageStr = toggleStatusKeyVal('carUseArr', item.electrombileUsage));
    return arr;
}

export default {
    namespace: 'distributeList',
    state: {
        total: 0,
        pageSize: PAGESIZE,
        current: 1,
        list: [],
        census: {}
    },
    effects: {
        *getList({ payload }, { call, put }) {
            yield put({
                type: 'changeCurrent',
                payload: { current: payload.pageIndex }
            });

            const response = yield call(requestCarDistributeList, { ...payload, pageIndex: payload.pageIndex - 1 });
            yield put({
                type: 'changeList',
                payload: response
            })
        },
        *getCensus({ payload }, { call, put }) {
            const response = yield call(requestCarDistributeCensus, payload);
            yield put({
                type: 'changeCensus',
                payload: response
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            if (!data) return { ...state, list: [], total: 0 };
            return { ...state, list: resetList(data.content), total: data.total };
        },
        changeCurrent(state, { payload }) {
            return { ...state, current: payload.current }
        },
        changeCensus(state, { payload }) {
            const { data } = payload;
            return { ...state, census: data || {} };
        }
    }
}
