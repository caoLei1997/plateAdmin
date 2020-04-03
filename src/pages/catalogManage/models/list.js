import { requestCatalogList } from '@/services/catalog';

export default {
    namespace: 'catalogList',
    state: { list: [], status: 'initial' },
    effects: {
        *getList(action, { call, put }) {
            // yield put({
            //     type: 'changeList',
            //     payload: { status: 'loading' }
            // })
            const response = yield call(requestCatalogList);
            yield put({
                type: 'changeList',
                payload: { ...response, status: 'done' }
            })
        }
    },
    reducers: {
        changeList(state, action) {
            const { payload } = action;
            switch (payload.status) {
                case 'loading':
                    return { ...state, status: payload.status };
                case 'done':
                    return { ...state, list: payload.list, status: payload.status };
                default:
                    return { ...state };
            }
        }
    }
}