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
<<<<<<< HEAD
        isLoaded: false,
        filter: {},
    },
    effects: {
        *getList({ payload, onSuccess }, { call, put, select }) {
            // const filter = yield select(state => state.meansList.filter)
            console.log(payload);

            console.log('pageIndex: ', payload.pageIndex)
=======
        isLoaded: false
    },
    effects: {
        *getList({ payload, onSuccess }, { call, put }) {
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
            yield put({
                type: 'changeCurrent',
                payload: { current: payload.pageIndex }
            });

<<<<<<< HEAD
            yield put({
                type: 'changeFilter',
                payload: payload.filter ? { ...payload.filter } : { ...payload }
            })
            const response = yield call(requestCarMeansList, {
                ...payload,
                current: payload.pageIndex - 1,
                pageIndex: payload.pageIndex - 1,
            });
=======
            const response = yield call(requestCarMeansList, { ...payload, pageIndex: payload.pageIndex - 1 });

>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
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
<<<<<<< HEAD
        },
        changeFilter(state, { payload }) {
            return { ...state, filter: { ...payload } }
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
        }
    }
}
