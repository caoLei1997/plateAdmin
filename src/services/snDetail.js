import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant';
export async function snDetailList(data) {
    return request(`${API}/manager/web/v1/batchSNWeb/snDetailList?${queryJsonToString(data)}`, {
        method: 'GET',
    })
}
