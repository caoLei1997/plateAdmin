import { requestCatalogUploadSN } from '@/services/catalog';
import { message } from 'antd';
import { RETCODESUCCESS } from '@/globalConstant';

export default {
    namespace: 'catalogImportSN',
    state: {
        uploadStatus: null,
        successTotal: 0,
        failTotal: 0,
        msg: []
    },
    effects: {
        *upload({ payload, onSuccess }, { call, put }) {
            const reponse = yield call(requestCatalogUploadSN, payload.formData);
            yield put({
                type: 'changeUpdateStatus',
                payload: reponse
            })

            if (reponse.retCode === RETCODESUCCESS && reponse.data && reponse.data.successTotal > 0) {
                message.success(`导入成功${reponse.data.successTotal}条`);
                onSuccess();
            }
        }
    },
    reducers: {
        changeUpdateStatus(state, { payload }) {
            const data = payload.data || {};
            return { ...state, ...data, uploadStatus: true, };
        },
        changeResetStatus(state) {
            return {
                ...state, uploadStatus: null,
                successTotal: 0,
                failTotal: 0,
                msg: []
            };
        },
    }
}