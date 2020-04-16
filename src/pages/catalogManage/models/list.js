import { requestCatalogList } from '@/services/catalog';
import { PAGESIZE } from '@/globalConstant';

const resetList = arr => {
    if (arr && arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].children && arr[i].children.length > 0) {
                const { children } = arr[i];
                for (let j = 0; j < children.length; j++) {
                    children[j].pid = arr[i].id;
                }
            }
        }
    }
    return arr;
}

const initialState = {
    total: 0,
    pageSize: PAGESIZE,
    current: 1,
    list: [],
    brandName: '',
    modelName: ''
}

export default {
    namespace: 'catalogList',
    state: { ...initialState },
    effects: {
        *getList({ payload }, { call, put }) {
            yield put({
                type: 'changeFilter',
                payload: {
                    current: payload.pageIndex,
                    brandName: payload.brandName,
                    modelName: payload.modelName
                }
            });

            const response = yield call(requestCatalogList, { ...payload, pageIndex: payload.pageIndex - 1 });
            yield put({
                type: 'changeList',
                payload: response
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            if (!data) return { ...state, list: [], total: 0 };
            return { ...state, list: resetList(data.content) || [], total: data.total || 0 };
        },
        changeFilter(state, { payload }) {
            return { ...state, ...payload }
        },
        resetState() {
            return { ...initialState }
        }
    }
}