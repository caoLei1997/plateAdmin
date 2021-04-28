import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant';
export async function requestRecordDetail(data) {
    return request(`${API}/manager/v1.1/LicensedSalesRecordApplyRecord/getDetail?${queryJsonToString(data)}`, {
        method: 'GET',
    });
}

export async function requestAudit(data) {
    return request(`${API}/manager/v1.1/LicensedSalesRecordApplyRecord/auditNotPass`, {
        method: 'POST',
        data
    });
}

export async function requestAuditBy(data) {
    return request(`${API}/manager/v1.1/LicensedSalesRecordApplyRecord/auditPass`, {
        method: 'POST',
        data
    });
}

