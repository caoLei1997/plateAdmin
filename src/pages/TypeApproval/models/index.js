import { typeApproveList, typeApproveDetail } from '@/services/typeApproval';
import { PAGESIZE } from '@/globalConstant';

const initialState = {
    total: 0,
    pageIndex: 1,
    pageSize: PAGESIZE,
    content: [], //列表
    detailData: {}
}

export default {
    namespace: 'typeApproval',
    state: { ...initialState },
    effects: {
        *reqList({ payload }, { call, put }) {
            const res = yield call(typeApproveList, { ...payload })
            yield put({
                type: 'changeList',
                payload: res
            })
        },
        *reqDetail({ payload }, { call, put }) {
            const res = yield call(typeApproveDetail, { ...payload })
            yield put({
                type: 'changeDetail',
                payload: res
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload
            return { ...state, ...data }
        },
        changeDetail(state, { payload }) {
            const { data } = payload
            return {
                ...state,
                detailData: data
            }
        }
    }
}