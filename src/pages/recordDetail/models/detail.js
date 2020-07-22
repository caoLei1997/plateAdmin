import { requestRecordDetail } from '@/services/recordDetail'
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

const initialState = {
    content: {}
}

export default {
    namespace: 'recordDetail',
    state: { ...initialState },
    effects: {
        *getDetail({ payload, onSuccess }, { call, put }) {
            const res = yield call(requestRecordDetail, { ...payload })
            yield put({
                type: 'changeDetail',
                payload: res
            })
        }
    },
    reducers: {
        changeDetail(state, { payload }) {
            const { data } = payload
            return { ...state, content: data }
        }

    }
}

