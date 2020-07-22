import request from '@/utils/request';

export async function requestRecordList(data) {
    return request(`/agent/v1.1/LicensedSalesRecordApplyRecord/pageList`, {
        method: 'POST',
        isToken:true,
        data
    });
}
