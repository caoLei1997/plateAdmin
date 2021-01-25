import { requestRecordList, requestGetCity } from '@/services/record';
import { PAGESIZE, RETCODESUCCESS } from '@/globalConstant';

import {
    getBrigadeByCityAndRegion
} from '@/services/authority';

const initialState = {
    total: 0,
    pageSize: '10',
    pageIndex: 1,
    content: [],
    ids: [],
    city: [],
    brigadeList: [],
    filter: {}
}
export default {
    namespace: 'recordList',
    state: { ...initialState },
    effects: {
<<<<<<< HEAD
        *getList({ payload }, { call, put }) {
            const { pageIndex, filter, pageSize } = payload;
            console.log(pageIndex);

=======

        *getList({ payload }, { call, put }) {
            const { pageIndex, filter, pageSize } = payload;
            console.log(pageIndex);
            
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
            yield put({
                type: 'changeFilter',
                payload: { filter, pageIndex, pageSize }
            })
            const response = yield call(requestRecordList, { pageIndex, pageSize, ...filter });
            yield put({
                type: 'changeList',
                payload: response
            })
            if (response.retCode === RETCODESUCCESS) {
                localStorage.setItem('recordList', JSON.stringify(response))
            }
        },

        *requestGetCity({ payload }, { call, put }) {
            const response = yield call(requestGetCity, { ...payload });
<<<<<<< HEAD
            const { data } = response;
             data.map(item => {
                if(item.children&& item.children.length){
                    item.children.unshift({label:'全部',value:undefined})
                }
            })
            console.log(response);
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
            yield put({
                type: 'changeCity',
                payload: response
            })

        },
        *getCityAndRegion({ payload }, { put, call }) {
            const res = yield call(getBrigadeByCityAndRegion, { ...payload })
            yield put({
                type: 'changeBrigade',
                payload: res.data
            })
        }
    },
    reducers: {
        changeList(state, { payload }) {
            const { data } = payload;
            return { ...state, ...data };
        },

        changeCity(state, { payload }) {
            const { data } = payload;
            return { ...state, city: [...data] };
        },
        changeBrigade(state, { payload }) {
            console.log(payload);

            return {
                ...state,
                brigadeList: payload
            }
        },
        changeFilter(state, { payload }) {
            console.log(payload);
<<<<<<< HEAD

=======
            
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
            return {
                ...state,
                ...payload
            }
        }
    }

}