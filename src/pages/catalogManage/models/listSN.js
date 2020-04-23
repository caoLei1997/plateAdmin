import { requestCatalogSNList, requestBatchDelSN, requestSingleDelSN } from '@/services/catalog';
import { MODAL_PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

export default {
    namespace: 'catalogSNList',
    state: {
        total: 0,
        pageSize: MODAL_PAGESIZE,
        current: 1,
        list: [],
        singleDelStatus: '',
        batchDelStatus: ''
    },
    effects: {
        *getList({ payload, onSuccess }, { call, put }) {
            yield put({
                type: 'changeCurrent',
                payload: { current: payload.pageIndex }
            });

            const response = yield call(requestCatalogSNList, { ...payload, pageIndex: payload.pageIndex - 1 });
            yield put({
                type: 'changeList',
                payload: response
            })

            if (response.retCode === RETCODESUCCESS) {
                onSuccess(response.data.totalElements);
            }
        },
        *batchDel({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestBatchDelSN, payload);
            yield put({
                type: 'changeBatchDel',
                payload: response
            })

            if (response.retCode === RETCODESUCCESS) {
                onSuccess();
            }
        },
        *singleDel({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestSingleDelSN, payload);
            yield put({
                type: 'changeSingleDel',
                payload: response
            })

            if (response.retCode === RETCODESUCCESS) {
                onSuccess();
            }
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            return { ...state, list: data.content, total: data.totalElements };
        },
        changeCurrent(state, { payload }) {
            return { ...state, current: payload.current }
        },
        changeBatchDel(state, { payload }) {
            return { ...state, batchDelStatus: payload.retCode }
        },
        changeSingleDel(state, { payload }) {
            return { ...state, singleDelStatus: payload.retCode }
        }
    }
}