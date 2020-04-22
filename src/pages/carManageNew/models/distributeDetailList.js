import { requestCarDistributeList, requestCarDistributeCensus } from '@/services/car';
import { PAGESIZE, LOCAL_MEANS_IDS_KEY, RETCODESUCCESS } from '@/globalConstant';

const getIdsArr = arr => {
    const newArr = [];
    arr.map(item => newArr.push(item.id));
    return newArr;
}

export default {
    namespace: 'distributeDetailList',
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
            if (response.retCode === RETCODESUCCESS && response.data) {
                sessionStorage.setItem(LOCAL_MEANS_IDS_KEY, JSON.stringify(getIdsArr(response.data.content)));
            }
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
            return { ...state, list: data.content || [], total: data.total };
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
