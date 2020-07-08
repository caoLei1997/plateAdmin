import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function requestDealerCity() {
    return request(`/agent/v1.1/DealerPersonnel/getCityTree`, {
        isToken: false
    });
}

export async function requestDealerOutlets(data) {
    return request(`/agent/v1.1/DealerPersonnel/getAllAgentOutletsList?${queryJsonToString(data)}`, {
        isToken: false
    });
}