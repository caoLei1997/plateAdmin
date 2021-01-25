import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function snDeclareList(data) {
    return request(`/manager/web/v1/batchSNWeb/pageList`, {
        method: 'POST',
        data
    })
}

export async function snBatchList(data) {
    return request(`/manager/web/v1/batchSNWeb/batchSnList?${queryJsonToString(data)}`, {
        method: 'GET',
    })
}

export async function snUpload(data) {
    return request(`/manager/web/v1/batchSNWeb/snExcelUpload/new`, {
        method: 'POST',
        requestType: 'form',
        data
    })
}
