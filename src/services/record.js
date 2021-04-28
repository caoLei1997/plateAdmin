import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant';
export async function requestRecordList(data) {
    return request(`${API}/manager/v1.1/LicensedSalesRecordApplyRecord/pageList`, {
        method: 'POST',
        isToken:true,
        data
    });
}


export async function requestGetCity(data) {
    return request(`${API}/manager/v1.1/LicensedSalesRecordApplyRecord/getCity?${queryJsonToString(data)}`, {
        method: 'GET',
        isToken:true,
    });
}


export async function requestGetCarCity(data) {
    return request(`${API}/manager/v1.1/LicensedSalesRecordApplyRecord/getCity/brand?${queryJsonToString(data)}`, {
        method: 'GET',
        isToken:true,
    });
}

