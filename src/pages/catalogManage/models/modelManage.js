import { RETCODESUCCESS } from '@/globalConstant';
import { requestCatalogAddModel, requestCatalogEditModel, requestCatalogDelModel } from '@/services/catalog';
import { message } from 'antd';

export default {
    namespace: 'catalogModel',
    state: {
        addStatus: null,
        editStatus: null,
        delStatus: null
    },
    effects: {
        *add({ payload, onSuccess }, { call, put }) {
            const reponse = yield call(requestCatalogAddModel, payload);
            yield put({
                type: 'changeAddStatus',
                payload: reponse
            })
            if (reponse.retCode === RETCODESUCCESS) {
                onSuccess();
                message.success(`新增型号成功`);
            }
        },
        *edit({ payload, onSuccess }, { call, put }) {
            const reponse = yield call(requestCatalogEditModel, payload);
            yield put({
                type: 'changeEditStatus',
                payload: reponse
            })
            if (reponse.retCode === RETCODESUCCESS) {
                onSuccess();
                message.success(`编辑型号【 ${payload.modelName} 】成功`);
            }
        },
        *del({ payload, onSuccess }, { call, put }) {
            const reponse = yield call(requestCatalogDelModel, payload);
            yield put({
                type: 'changeDelStatus',
                payload: reponse
            })
            if (reponse.retCode === RETCODESUCCESS) {
                onSuccess();
                message.success(`删除型号【 ${payload.modelName} 】成功`);
            }
        }
    },
    reducers: {
        changeAddStatus(state, { payload }) {
            if (!payload) return { ...state, addStatus: false }
            return { ...state, addStatus: true };
        },
        changeEditStatus(state, { payload }) {
            if (!payload) return { ...state, editStatus: false }
            return { ...state, editStatus: true };
        },
        changeDelStatus(state, { payload }) {
            if (!payload) return { ...state, delStatus: false }
            return { ...state, delStatus: true };
        }
    }
}