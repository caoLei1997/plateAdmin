import { requestDealerCity, requestDealerOutlets } from '@/services/personalDealer';
import { RETCODESUCCESS } from '@/globalConstant';
/*
 * @desc 经销商
 */
const personalDealerModel = {
    namespace: 'personalDealer',
    state: {
        city: [],
        level: [],
        outlets: []
    },
    effects: {
        *getCityList(action, { call, put }) {
            const response = yield call(requestDealerCity);
            yield put({ type: 'changeCityState', payload: { ...response } });
        },
        *getLevelList(action, { call, put }) {
            const response = yield call(requestDealerCity);
            yield put({ type: 'changeLevelState', payload: { ...response } });
        },
        *getOutletsList({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestDealerOutlets, payload);
            yield put({ type: 'changeOutletsState', payload: { ...response } });
            if (response.retCode === RETCODESUCCESS) {
                onSuccess();
            }
        }
    },
    reducers: {
        changeCityState(state, { payload }) {
            return { ...state, city: payload.data || [] };
        },
        changeLevelState(state, { payload }) {
            return { ...state, level: payload };
        },
        changeOutletsState(state, { payload }) {
            return { ...state, outlets: payload.data || [] };
        }
    }
};
export default personalDealerModel;