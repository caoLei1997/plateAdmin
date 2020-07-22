import { requestRecordList } from '@/services/record';
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    current: 1,
    content: [],
    ids: []
}
export default {
    namespace: 'recordList',
    state: { ...initialState },
    effects: {
        *getList({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestRecordList, { ...payload, pageIndex: payload.pageIndex - 1 });
            yield put({
                type: 'changeList',
                payload: response
            })
            if (response.retCode === RETCODESUCCESS) {
                onSuccess(response.data.total);

                localStorage.setItem('recordList', JSON.stringify(response))

            }
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            if (!data) return { ...state, content: [], total: 0 };
            return { ...state, ...data };
        },

    }

}