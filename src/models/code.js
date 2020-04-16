import { requestPicCode, requestMessageCode } from '@/services/code';
/*
 * @desc 经销商
 */
const DealerModel = {
    namespace: 'code',
    state: {
        picCode: { pic: '', checkId: '' },
        messageCode: {}
    },
    effects: {
        *getPicCode(action, { call, put }) {
            const response = yield call(requestPicCode);
            yield put({ type: 'changePicCode', payload: response });
        }
    },
    reducers: {
        changePicCode(state, { payload }) {
            return { ...state, picCode: payload.data || {} }
        }
    }
};
export default DealerModel;