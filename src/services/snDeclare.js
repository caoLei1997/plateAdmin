import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function snDeclareList(data) {
    return request(`/web/v1/batchSNWeb/pageList`, {
        method: 'POST',
        data
    })
}

export async function snBatchList(data) {
    return request(`/web/v1/batchSNWeb/batchSnList?${queryJsonToString(data)}`, {
        method: 'GET',
    })
}

export async function snUpload(data) {
    console.log(data);
    
    return request(`/web/v1/batchSNWeb/snExcelUpload`, {
        method: 'POST',
        requestType: 'form',
        data
    })
}
