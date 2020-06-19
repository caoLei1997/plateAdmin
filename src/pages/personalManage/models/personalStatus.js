import { requestUpdatePersonalStatus,requestEditPersonal } from '@/services/personal'
import { RETCODESUCCESS } from '@/globalConstant';

export default {
    namespace: 'personalStatus',
    state: {},
    effects: {
        *update({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestUpdatePersonalStatus, payload);

            yield put({
                type: 'changeState',
                payload: response
            })

            if (response.retCode === RETCODESUCCESS) {
                onSuccess();
            }
        },
        *edit({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestEditPersonal, payload);

            yield put({
                type: 'changeState',
                payload: response
            })

            if (response.retCode === RETCODESUCCESS) {
                onSuccess();
            }
        },
    },
    reducers: {
        changeState(state, { payload }) {
            return { ...state };
        }
    }
}