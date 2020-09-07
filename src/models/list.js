import { requestRecordList, requestGetCity } from '@/services/record';
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

import {
    getBrigadeByCityAndRegion
} from '@/services/authority';

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    current: 1,
    content: [],
    ids: [],
    city: [],
    brigadeList: []
}
export default {
    namespace: 'recordList',
    state: { ...initialState },
    effects: {
        *getList({ payload }, { call, put }) {
            const response = yield call(requestRecordList, { ...payload, pageIndex: payload.pageIndex  });
            yield put({
                type: 'changeList',
                payload: response
            })
            if (response.retCode === RETCODESUCCESS) {
                // onSuccess(response.data.total);
                localStorage.setItem('recordList', JSON.stringify(response))

            }
        },
        *requestGetCity({ payload }, { call, put }) {
            const response = yield call(requestGetCity, { ...payload });
            yield put({
                type: 'changeCity',
                payload: response
            })

        },
        *getCityAndRegion({ payload }, { put, call }) {
            const res = yield call(getBrigadeByCityAndRegion, { ...payload })
            yield put({
                type: 'changeBrigade',
                payload: res.data
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
        changeBrigade(status, { payload }) {
            console.log(payload);
            
            return {
                ...status,
                brigadeList: payload
            }
        }

    }

}