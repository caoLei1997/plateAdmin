import { requestDealerList } from '@/services/dealer';
/*
 * @desc 经销商
 */
const DealerModel = {
    namespace: 'dealer',
    state: {
        list: [],
        isFail: false,
        isLoading: false,
        status: null
    },
    effects: {
        *getList(action, { call, put }) {
            yield put({
                type: 'changeList',
                payload: { status: 'loading' }
            })
            const response = yield call(requestDealerList);
            yield put({ type: 'changeList', payload: { ...response, status: 'done' } });
        }
    },
    reducers: {
        changeList(state, { payload }) {
            switch (payload.status) {
                case 'loading':
                    return { ...state, isFail: false, isLoading: true, status: payload.status };
                case 'done':
                    return { ...state, list: [{ id: 'all', val: '全部' }, ...payload.data], status: 'done' };
                default:
                    return { ...state };
            }
        }
    }
};
export default DealerModel;