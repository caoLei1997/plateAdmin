import { RETCODESUCCESS } from '@/globalConstant';
import { requestCatalogAddBrand, requestCatalogEditBrand, requestCatalogDelBrand } from '@/services/catalog';
import { message } from 'antd';

export default {
    namespace: 'catalogBrand',
    state: {
        addStatus: null,
        editStatus: null,
        delStatus: null
    },
    effects: {
        *add({ payload, onSuccess }, { call, put }) {
            const reponse = yield call(requestCatalogAddBrand, payload);
            yield put({
                type: 'changeAddStatus',
                payload: reponse
            })
            if (reponse.retCode === RETCODESUCCESS) {
                message.success(`新增品牌【 ${payload.brandName} 】成功`);
                onSuccess();
            }
        },
        *edit({ payload, onSuccess }, { call, put }) {
            const reponse = yield call(requestCatalogEditBrand, payload);
            yield put({
                type: 'changeEditStatus',
                payload: reponse
            })
            if (reponse.retCode === RETCODESUCCESS) {
                onSuccess();
                message.success(`编辑品牌【 ${payload.brandName} 】成功`);
            }
        },
        *del({ payload, onSuccess }, { call, put }) {
            const reponse = yield call(requestCatalogDelBrand, payload);
            yield put({
                type: 'changeDelStatus',
                payload: reponse
            })
            if (reponse.retCode === RETCODESUCCESS) {
                onSuccess();
                message.success(`删除品牌【 ${payload.brandName} 】成功`);
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