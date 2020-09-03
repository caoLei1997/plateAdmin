import { PAGESIZE } from "@/globalConstant"
import {
    snDeclareList,
    snBatchList,
    snUpload
} from '@/services/snDeclare';

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
    batchList: [],// 批次SN列表,
    batchPageIndex: 1, //批次SN列表页数，
    batchSearch: '',// 批次SN搜索
    batchPageSize: PAGESIZE,
    batchTotal: 0,//总条数
    errorData: [], // 错误excelData
    errorNum: 0, //错误条数
    uploadStatus: 0,//成功
}
export default {
    namespace: 'snDeclare',
    state: { ...initialState },
    effects: {
        *reqList({ payload }, { call, put }) {
            const { pageIndex, pageSize, filter } = payload;
            yield put({
                type: 'changeFilter',
                payload: { pageIndex, pageSize, filter }
            })
            const res = yield call(snDeclareList, { pageIndex, pageSize, ...filter })
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

        *reqBatch({ payload }, { call, put }) {
            const { pageIndex, electrombileNumber } = payload;
            yield put({
                type: 'changeBatch',
                payload: {
                    batchPageIndex: pageIndex,
                    batchSearch: electrombileNumber
                }
            })
            const res = yield call(snBatchList, { ...payload })
            yield put({
                type: 'changeBatchList',
                payload: res
            })
        },
        *reqUpload({ payload }, { call, put }) {
            const res = yield call(snUpload, payload.formData)
            yield put({
                type: 'changeUpload',
                payload: res
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload
            return {
                ...state,
                ...data
            }
        },
        changeAgentList(state, { payload }) {
            const { data } = payload;
            return {
                ...state,
                agentList: data
            }
        },
        changeFilter(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        },

        changeBatch(state, { payload }) {
            return {
                ...state,
                ...payload
            }

        },
        changeBatchList(state, { payload }) {
            const { data } = payload
            return {
                ...state,
                batchList: data.content,
                batchTotal: data.totalElements
            }
        },

        changeUpload(state, { payload }) {
            const data = payload;
            return {
                ...state,
                ...data.data,
                uploadStatus: data.retCode == '0000' ? 1 : 0
            }
        },
        clearExcelData(state) {
            return {
                ...state,
                errorData: [],
                errorNum: 0,
                uploadStatus: 0
            }

        }
    }
} 