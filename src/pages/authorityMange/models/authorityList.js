import { authorityList, getRoles, getAgent, reqModifyStatus } from '@/services/authority';
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    current: 1,

}

export default {
    namespace: 'authorityList',
    state: { ...initialState },
    effects: {
        *getList({ payload }, { call, put }) {
            const res = yield call(authorityList, { ...payload })
            yield put({
                type: 'changeList',
                payload: res
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
            yield put({
                type: 'changeListStatus',
                payload: payload
            })
        },

        *pageSizeAndCurrent({ payload, onSuccess }, { put }) {
            yield put({
                type: 'changePageSizeAndCurrent',
                payload: payload
            })
            onSuccess()
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload
            return { ...state, ...payload, total: payload.data.total }
        },
        changePageSizeAndCurrent(state, { payload }) {
            
            return { ...state, ...payload }
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