import { PAGESIZE } from "@/globalConstant"
import {
    snApproveList,
    snApproveDetail,
    snApproveAgree,
    snApproveNo
} from '@/services/snApprove';

import {
    typeApproveAgent
} from '@/services/typeApproval';

const initialState = {
    pageIndex: 1,
    total: 0,
    pageSize: PAGESIZE,
    content: [],//列表
    filter: {},//过滤条件
    agentList: [],//经销商列表
    detail: {}, //详情数据
}
export default {
    namespace: 'snApprove',
    state: { ...initialState },
    effects: {

        *reqList({ payload }, { call, put }) {
            const { pageIndex, pageSize, filter } = payload;
            yield put({
                type: 'changeFilter',
                payload: { pageIndex, pageSize, filter }
            })
            const res = yield call(snApproveList, { pageIndex, pageSize, ...filter })
            yield put({
                type: 'changeList',
                payload: res
            })

            const agentList = yield call(typeApproveAgent);
            yield put({
                type: 'changeAgentList',
                payload: agentList
            })
        },
        *reqDetail({ payload }, { call, put }) {
            const res = yield call(snApproveDetail, { ...payload })

            yield put({
                type: 'changeDetail',
                payload: res
            })
        },
        *reqApproveAgree({ payload, onSuccess }, { call }) {
            const res = yield call(snApproveAgree, { ...payload })
            console.log(res);
            
            if (res.retCode == '0000') {
                onSuccess(res)
            }
        },
        *reqApproveNo({ payload, onSuccess }, { call }) {
            const res = yield call(snApproveNo, { ...payload })
            if (res.retCode == '0000') {
                onSuccess(res)
            }
        },
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload
            window.localStorage.setItem('snApprove', JSON.stringify(data.ids))
            return {
                ...state,
                ...data
            }
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
            return { ...state, detail: data }
        }
    }
}