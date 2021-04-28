import request from '@/utils/request';
import {API} from '@/globalConstant';

export async function requestPicCode() {
    return request(`${API}/manager/v1/verify/getImageCodeBase64`, {
        method: 'GET',
        isToken: false
    });
}

export async function requestMessageCode(data) {
    return request(`${API}/manager/v1/verify/sendMobileCode`, {
        method: 'POST',
        isToken: false,
        data
    });
}