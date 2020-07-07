import { requestPersonalList, requestAddPersonal } from '@/services/personal'
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    current: 1,
    list: [],
    filter: {
        name: '',
        phone: '',
        city: '',
        region: '',
        level: '',
        dealer: ''
    }
}

export default {
    namespace: 'personalList',
    state: { ...initialState },
    effects: {
        *add({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestAddPersonal, payload);

            if (response.retCode === RETCODESUCCESS) {
                onSuccess();
            }
        },
        *updateStatus({ payload }, { call, put }) {
            yield put({
                type: 'changeStatus',
                payload
            })
        },
        *getList({ payload }, { call, put }) {
            yield put({
                type: 'changeFilter',
                payload: {
                    current: payload.pageIndex,
                    pageSize: payload.pageSize,
                    filter: {
                        "name": payload.name,
                        "phoneNumber": payload.phoneNumber,
                        "city": payload.city,
                        "region": payload.region,
                        "level": payload.level
                    }
                }
            });

            const response = yield call(requestPersonalList, { ...payload, pageIndex: payload.pageIndex - 1 });

            yield put({
                type: 'changePersonalList',
                payload: response
            })
        }
    },
    reducers: {
        changePersonalList(state, { payload }) {
            return { ...state, list: payload.data.content, total: payload.data.totalElements };
        },
        changeFilter(state, { payload }) {
            return { ...state, ...payload }
        },
        changeStatus(state, { payload }) {
            const activeList = state.list;
            const active = activeList.findIndex(item => item.id === payload.id);
            if (payload.status === 'open') {
                activeList[active].status = 'close';
            }
            if (payload.status === 'close') {
                activeList[active].status = 'open';
            }
            return { ...state, activeList };
        }

    }
}