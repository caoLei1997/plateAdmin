import { requestCarMeansDetail } from '@/services/car';
import { toggleStatusKeyVal } from '@/commonFun';

const picArr = (data) => {
    return [
        { id: 1112, title: '右后方45度整车照片', url: data.electrombileImageBase64 },
        { id: 1113, title: '整车编码', url: data.electrombileNumberImageBase64 },
        { id: 1114, title: '电机编码', url: data.electricNumberImageBase64 },
        { id: 1115, title: '其他1', url: data.otherImage1Base64 },
        { id: 1116, title: '其他2', url: data.otherImage2Base64 }
    ]
}

export default {
    namespace: 'meansDetail',
    state: {
        data: {}
    },
    effects: {
        *getDetail({ payload }, { call, put }) {
            const response = yield call(requestCarMeansDetail, payload);
            yield put({
                type: 'changeData',
                payload: response
            })
        }
    },
    reducers: {
        changeData(state, { payload }) {
            const { data } = payload;
            if (!data) return { ...state };

            data.complianceVehicleTypeStr = toggleStatusKeyVal('standardsArr', data.standard) || '-';
            data.typeStr = toggleStatusKeyVal('plateTypeArr', data.type) || '-';
            data.auditStatus = toggleStatusKeyVal('examineArr', data.auditStatus) || '-';
            data.electrombileUsageStr = toggleStatusKeyVal('carUseArr', data.electrombileUsage) || '-';
            data.plateNumberTypeStr = toggleStatusKeyVal('plateClassArr', data.plateNumberType) || '-';
            data.carPic = picArr(data);
            data.electrombileLengthStr = `${data.electrombileLength}mm`;
            data.electrombileHeightStr = `${data.electrombileHeight}mm`;
            data.electrombileWidthStr = `${data.electrombileWidth}mm`;
            data.enduranceMileageStr = `${data.enduranceMileage}KM\\H`;
            console.log(data);
            return { ...state, data };
        }
    }
}
