import { requestCarMeansDetailPass, requestCarMeansDetailNotPass, requestCarPlateAndName } from '@/services/car';
import { RETCODESUCCESS } from '@/globalConstant';
import { message } from 'antd';

export default {
    namespace: 'meansDetailAuditVip',
    state: {
        data: {},
        plateAndName: {}
    },
    effects: {
        *notPass({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestCarMeansDetailNotPass, payload);
            yield put({
                type: 'changeData',
                payload: response
            })

            if (response.retCode === RETCODESUCCESS) {
                onSuccess();
                message.success('操作成功');
            }
        },
        *pass({ payload, onSuccess }, { call, put }) {
            const response = yield call(requestCarMeansDetailPass, payload);
            yield put({
                type: 'changeData',
                payload: response
            })

            if (response.retCode === RETCODESUCCESS) {
                onSuccess();
                message.success('操作成功');
            }
        },
        *getPlateAndName({ payload }, { call, put }) {
            const response = yield call(requestCarPlateAndName, payload);
            yield put({
                type: 'changePlateAndName',
                payload: response
            })
        }
    },
    reducers: {
        changeData(state, { payload }) {
            const { data } = payload;
            return { ...state, data: data || {} };
        },
        changePlateAndName(state, { payload }) {
            return { ...state, plateAndName: payload.data }
        }
    }
}
