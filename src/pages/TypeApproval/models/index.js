import {
    typeApproveList,
    typeApproveDetail,
    typeApprovalAgree,
    typeApprovalNo,
    typeApprovalModel
} from '@/services/typeApproval';
import { PAGESIZE } from '@/globalConstant';

const initialState = {
    total: 0,
    pageIndex: 1,
    pageSize: PAGESIZE,
    content: [], //列表
    detailData: {},//详情信息
    detailModelList: [] //选择型号列表
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
        },
        *reqApprovalAgree({ payload, onSuccess }, { call }) {
            const res = yield call(typeApprovalAgree, { ...payload })
            if (res.retCode == '0000') {
                onSuccess(res)
            }
        },
        *reqApprovalNo({ payload, onSuccess }, { call }) {
            const res = yield call(typeApprovalNo, { ...payload })
            if (res.retCode == '0000') {
                onSuccess(res)
            }
        },
        *reqApprovalModel({ payload }, { call, put }) {
            const res = yield call(typeApprovalModel, { ...payload })
            yield put({
                type: 'changeDetailModel',
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
        },
        changeDetailModel(state, { payload }) {
            const { data } = payload
            return { ...state, detailModelList: data }
        }
    }
}