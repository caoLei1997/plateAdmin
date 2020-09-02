import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function snDeclareList(data) {
    return request(`/web/v1/batchSNWeb/pageList`, {
        method: 'POST',
        data
    })
}

export async function snBatchList(data) {
    return request(`/web/v1/batchSNWeb/batchSnList`, {
        method: 'POST',
        data
    })
}
