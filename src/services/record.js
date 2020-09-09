import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
export async function requestRecordList(data) {
    return request(`/manager/v1.1/LicensedSalesRecordApplyRecord/pageList`, {
        method: 'POST',
        isToken:true,
        data
    });
}


export async function requestGetCity(data) {
    return request(`/manager/v1.1/LicensedSalesRecordApplyRecord/getCity?${queryJsonToString(data)}`, {
        method: 'GET',
        isToken:true,
    });
}

