import {
    typeApproveList,
    typeApproveDetail,
    typeApprovalAgree,
    typeApprovalNo,
    typeApprovalModel,
    typeApproveAgent
} from '@/services/typeApproval';
import { PAGESIZE } from '@/globalConstant';

const initialState = {
    total: 0,
    pageIndex: 1,
    pageSize: PAGESIZE,
    content: [], //列表
    ids: [], // 当前页ID
    detailData: {},//详情信息
    detailModelList: [], //选择型号列表
    filter: {},//筛选信息
    agentList: [],//经销商列表

}

export default {
    namespace: 'typeApproval',
    state: { ...initialState },
    effects: {
        *reqList({ payload }, { call, put }) {
            const { pageIndex, pageSize, filter } = payload
            yield put({
                type: 'changeFilter',
                payload: { pageIndex, pageSize, filter }
            })
            const agentList = yield call(typeApproveAgent);
            yield put({
                type: 'changeAgentList',
                payload: agentList
            })
            const res = yield call(typeApproveList, { pageIndex, pageSize, ...filter })
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
            window.localStorage.setItem('ids', JSON.stringify(data.ids))
            return { ...state, ...data }
        },
        changeAgentList(state, { payload }) {
            const { data } = payload;
            return { ...state, agentList: data }
        },
        changeFilter(state, { payload }) {
            return { ...state, ...payload }
        },

        changeDetail(state, { payload }) {
            const { data } = payload
            return {
                ...state,
                detailData: data,
            }
        },
        changeDetailModel(state, { payload }) {
            const { data } = payload
            return { ...state, detailModelList: data }
        },

    }
}