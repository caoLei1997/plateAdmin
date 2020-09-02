import { PAGESIZE } from "@/globalConstant";

const initialState = {
    total: 0,
    pageIndex: 1,
    pageSize: PAGESIZE,
    content: [],
    filter: {}
}

import { snDetailList } from '@/services/snDetail'

export default {
    namespace: 'snDetail',
    state: { ...initialState },
    effects: {
        *reqList({ payload }, { put, call }) {

            const { pageIndex, pageSize, filter } = payload;
            yield put({
                type: 'changeFilter',
                payload: { ...filter }
            })
            const res = yield call(snDetailList, { ...filter, pageIndex, pageSize });
            yield put({
                type: 'changeList',
                payload: res
            })

        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload
            return { ...state, ...data }

        },
        changeFilter(state, { payload }) {
            return { ...state, payload }
        }
    }
}