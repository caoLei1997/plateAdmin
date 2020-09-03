import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function snDetailList(data) {
    return request(`/web/v1/batchSNWeb/snDetailList?${queryJsonToString(data)}`, {
        method: 'GET',
    })
}
