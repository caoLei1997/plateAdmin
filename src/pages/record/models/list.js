import { requestRecordList, requestGetCity } from '@/services/record';
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    current: 1,
    content: [],
    ids: [],
    city: [],
    filter: {},
}
export default {
    namespace: 'recordList',
    state: { ...initialState },
    effects: {
        *getList({ payload }, { call, put }) {
            const { pageIndex, filter, pageSize } = payload;
            const response = yield call(requestRecordList, { pageIndex, pageSize, ...filter });

            yield put({
                type: 'changeFilter',
                payload: { filter, pageIndex, pageSize }
            })
            yield put({
                type: 'changeList',
                payload: response
            })
            if (response.retCode === RETCODESUCCESS) {
                localStorage.setItem('recordList', JSON.stringify(response))
            }
        },
        *requestGetCity({ payload }, { call, put }) {
            const response = yield call(requestGetCity, { ...payload });
            yield put({
                type: 'changeCity',
                payload: response
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            return { ...state, ...data };
        },

        changeCity(state, { payload }) {
            const { data } = payload;
            return { ...state, city: [...data] };
        },

        changeFilter(state, { payload }) {
            return {
                ...state,
                filter: payload.filter,
                current: payload.pageIndex,
                pageSize: payload.pageSize
            }
        }

    }

}