import {
    authorityList,
    getRoles,
    getAgent,
    reqModifyStatus,
    reqDetachment,
    getCityTree,
    getBrigadeByCityAndRegion
} from '@/services/authority';
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    pageIndex: 1,
    filterValue: {},
    brigadeList: []
}

export default {
    namespace: 'authorityList',
    state: { ...initialState },
    effects: {
        *getList({ payload }, { call, put }) {
            let { pageSize, pageIndex, filterValue } = payload;
            const res = yield call(authorityList, { pageSize, pageIndex, ...filterValue })
            yield put({
                type: 'changeList',
                payload: {
                    filterValue: filterValue,
                    pageIndex,
                    pageSize,
                    ...res
                }
            })
        },
        *getRoles({ payload }, { call, put }) {
            const res = yield call(getRoles)
            const agent = yield call(getAgent)
            const detachment = yield call(reqDetachment)
            const cityTree = yield call(getCityTree)
            yield put({
                type: 'changeFRoles',
                payload: { res, agent, detachment, cityTree }
            })
        },
        *modifyStatus({ payload }, { put, call }) {
            const res = yield call(reqModifyStatus, { ...payload })
            if (res.retCode == '0000') {
                yield put({
                    type: 'changeListStatus',
                    payload: payload
                })
            }
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
            let filter = payload.filterValue;
            return {
                ...state,
                ...payload,
                pageIndex: filter.pageIndex ? filter.pageIndex : payload.pageIndex,
                total: payload.data.total
            }
        },
        changeFRoles(state, { payload: { agent, res, detachment, cityTree } }) {
            return {
                ...state,
                rolesList: res.data,
                agentList: agent.data,
                detachment: detachment.data,
                cityTree: cityTree.data
            }
        },
        changeListStatus(state, { payload }) {
            const { data } = state;
            data.content.map(item => {
                if (item.id == payload.id) {
                    item.status = payload.status
                }
                return item
            })
            return { ...state, }
        },
        changeBrigade(status, { payload }) {
            return {
                ...status,
                brigadeList: payload
            }

        }
    }
}