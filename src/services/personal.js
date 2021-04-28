import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant';

export async function requestPersonalList(data) {
    return request(`${API}/manager/v1.1/DealerPersonnel/dealerPersonnelPageList`, {
        method: 'POST',
        // isToken: false,
        data
    });
}

export async function requestUpdatePersonalStatus(data) {
    return request(`${API}/manager/v1.1/DealerPersonnel/enableOrdisable?${queryJsonToString(data)}`, {
        method: 'POST',
        // isToken: false
    });
}

export async function requestEditPersonal(data) {
    return request(`${API}/manager/v1.1/DealerPersonnel/editAccount`, {
        method: 'POST',
        // isToken: false,
        data
    });
}

export async function requestAddPersonal(data) {
    return request(`${API}/manager/v1.1/DealerPersonnel/addAccount`, {
        method: 'POST',
        // isToken: false,
        data
    });
}