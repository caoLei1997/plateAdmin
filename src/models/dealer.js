import { requestDealerList } from '@/services/subDealer';
import { setAuthority, getAuthority2 } from '@/utils/authority';
/*
 * @desc 经销商
 */
const DealerModel = {
    namespace: 'dealer',
    state: {
        list: [],
        choiceVal: ''
    },
    effects: {
        *getList(action, { call, put }) {
            const response = yield call(requestDealerList);
            yield put({ type: 'changeList', payload: { ...response, status: 'done' } });
        }
    },
    reducers: {
        changeList(state, { payload }) {
            return { ...state, list: [{ id: ' ', name: '全部' }, ...payload.data] || [], choiceVal: '' }
        },
        setChoiceVal(state, { payload }) {
            const userInfo = getAuthority2();
            if (userInfo) userInfo.firstId = payload.value;
            setAuthority(userInfo);
            return { ...state, choiceVal: payload.value }
        }
    }
};
export default DealerModel;