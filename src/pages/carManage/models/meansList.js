import { requestCarMeansList } from '@/services/car';
import { PAGESIZE, LOCAL_MEANS_IDS_KEY, RETCODESUCCESS, LOCAL_MEANS_FILTER } from '@/globalConstant';

const getIdsArr = arr => {
    const newArr = [];
    arr.map(item => newArr.push(item.id));
    return newArr;
}

export default {
    namespace: 'meansList',
    state: {
        total: 0,
        pageSize: PAGESIZE,
        current: 1,
        list: [],
        isLoaded: false
    },
    effects: {
        *getList({ payload, onSuccess }, { call, put }) {
            yield put({
                type: 'changeCurrent',
                payload: { current: payload.pageIndex }
            });

            const response = yield call(requestCarMeansList, { ...payload, pageIndex: payload.pageIndex - 1 });

            yield put({
                type: 'changeList',
                payload: response
            })
            if (response.retCode === RETCODESUCCESS && response.data) {
                sessionStorage.setItem(LOCAL_MEANS_FILTER, JSON.stringify({ ...payload, totalPage: Math.ceil(response.data.total / Number(payload.pageSize)) }));
                sessionStorage.setItem(LOCAL_MEANS_IDS_KEY, JSON.stringify(getIdsArr(response.data.content)));

                if (onSuccess) { onSuccess(getIdsArr(response.data.content)[0]); }
            }
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            if (!data) return { ...state, list: [], total: 0 };
            return { ...state, list: data.content || [], total: data.total, isLoaded: true };
        },
        changeCurrent(state, { payload }) {
            return { ...state, current: payload.current }
        }
    }
}
