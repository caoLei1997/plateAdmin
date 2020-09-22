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
    brigadeList: [],
    content: []
}

export default {
    namespace: 'authorityList',
    state: { ...initialState },
    effects: {
        *getList({ payload }, { call, put }) {
            let { pageSize, pageIndex, filterValue } = payload;
            yield put({
                type: 'changeFilter',
                payload: {
                    filterValue,
                    pageIndex,
                    pageSize,
                }
            })
            const res = yield call(authorityList, { pageSize, pageIndex, ...filterValue })
            yield put({
                type: 'changeList',
                payload: res
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
        *modifyStatus({ payload, onSuccess }, { put, call }) {
            const res = yield call(reqModifyStatus, { ...payload })
            if (res.retCode == '0000') {
                yield put({
                    type: 'changeListStatus',
                    payload: payload
                })
                onSuccess()
            }
        },

        // *getCityAndRegion({ payload }, { put, call }) {
        //     const res = yield call(getBrigadeByCityAndRegion, { ...payload })
        //     yield put({
        //         type: 'changeBrigade',
        //         payload: res.data
        //     })
        // }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            console.log(data.content);
            return {
                ...state,
                ...data,
                content: data ? data.content : [],
                total: data ? data.total : 0
            }
        },

        changeFilter(state, { payload }) {
            console.log(payload);
            return {
                ...state,
                ...payload,
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
            const { content } = state;
            content.map(item => {
                if (item.id == payload.id) {
                    item.status = payload.status
                }
                return item
            })
            return { ...state, }
        },
        // changeBrigade(state, { payload }) {
        //     console.log('222',state,payload);
        //     return {
        //         ...state,
        //         // brigadeList: payload
        //     }


        // }
    }
}