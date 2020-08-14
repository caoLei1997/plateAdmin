import { authorityList, getRoles, getAgent, reqModifyStatus } from '@/services/authority';
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    pageIndex: 1,
    filterValue: {}
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
            yield put({
                type: 'changeFRoles',
                payload: { res, agent }
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
    },
    reducers: {
        changeList(state, { payload }) {
        
            let filter = payload.filterValue;
            console.log('payload',payload);
            console.log('filter',filter);

            return {
                ...state,
                ...payload,
                pageIndex: filter.pageIndex ? filter.pageIndex : payload.pageIndex,
                total: payload.data.total
            }
        },
        changeFRoles(state, { payload: { agent, res } }) {
            return { ...state, rolesList: res.data, agentList: agent.data }
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
        }
    }
}