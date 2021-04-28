import { requestCarDistributeList, requestCarDistributeCensus } from '@/services/car';
import { toggleStatusKeyVal } from '@/commonFun';
import { PAGESIZE } from '@/globalConstant';
import { requestGetCarCity } from '@/services/record';

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
        census: {},
        city: [],
        filter: {},
    },
    effects: {
        *requestGetCity({ payload }, { call, put }) {
            const response = yield call(requestGetCarCity, { ...payload });
            const { data } = response;
            data.map(item => {
                if (item.children && item.children.length) {
                    item.children.unshift({ label: '全部', value: undefined })
                }
            })
            yield put({
                type: 'changeCity',
                payload: response
            })
        },
        *getList({ payload }, { call, put }) {
            yield put({
                type: 'changeCurrent',
                payload: { current: payload.pageIndex }
            });
            yield put({
                type: 'changeFilter',
                payload: { ...payload }
            })

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
            return { ...state, list: resetList(data.content), total: data.totalElements };
        },
        changeCurrent(state, { payload }) {
            return { ...state, current: payload.current }
        },
        changeCensus(state, { payload }) {
            const { data } = payload;
            return { ...state, census: data || {} };
        },
        changeCity(state, { payload }) {
            const { data } = payload;
            return { ...state, city: [...data] };
        },

        changeFilter(state, { payload }) {
            console.log(payload);
            
            return {
                ...state,
                filter: { ...payload }
            }
        }
    }
}
