import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant';

export async function requestDealerCity() {
    return request(`${API}/manager/v1.1/DealerPersonnel/getCityTree`, {
        // isToken: false
    });
}

export async function requestDealerOutlets(data) {
    return request(`${API}/manager/v1.1/DealerPersonnel/getAllAgentOutletsList?${queryJsonToString(data)}`, {
        // isToken: false
    });
}