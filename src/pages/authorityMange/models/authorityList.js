import { getAuthorityList } from '@/services/authority';
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    current: 1,
}

export default {
    namespace: 'authorityList',
    state: { ...initialState },
    effects: {
        *getList({ payload }, { call, put }) {
            const res = yield call(getAuthorityList, { ...payload })
            yield put({
                type: 'changeList',
                payload: res
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload
            return { ...state, ...payload }
        }
    }
}