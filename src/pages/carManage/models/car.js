import { getMeansList } from '@/services/car';

const Model = {
    namespace: 'car',
    state: {
        means: {
            list: null,
            status: 'initial',
            isLoading: false,
            total: 10
        }
    },
    effects: {
        *getMeans(action, { call, put }) {
            yield put({
                type: 'changeMeansList',
                payload: { status: 'loading' }
            })
            const response = yield call(getMeansList);
            yield put({
                type: 'changeMeansList',
                payload: { ...response, status: 'done' }
            })
        }
    },
    reducers: {
        changeMeansList(state, { payload }) {
            switch (payload.status) {
                case 'loading':
                    return { ...state, means: { ...state.means, isLoading: true } };
                case 'done':
                    return { ...state, means: { ...state.means, isLoading: false, list: payload.data, status: 'done' } };
                default:
                    return state;
            }
        }
    },
};
export default Model;
