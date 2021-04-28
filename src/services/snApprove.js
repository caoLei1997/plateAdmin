import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant';
export async function snApproveList(data) {
    return request(`${API}/manager/web/v1/batchSNWeb/pageList`, {
        method: 'POST',
        data
    })
}

export async function snApproveDetail(data) {
    return request(`${API}/manager/web/v1/batchSNWeb/getSnDetail?${queryJsonToString(data)}`, {
        method: 'GET'
    })
}

export async function snApproveAgree(data) {
    return request(`${API}/manager/web/v1/batchSNWeb/auditPass?${queryJsonToString(data)}`, {
        method: 'GET',
    });
}

export async function snApproveNo(data) {
    return request(`${API}/manager/web/v1/batchSNWeb/auditNoPass?${queryJsonToString(data)}`, {
        method: 'GET',
    });
}
