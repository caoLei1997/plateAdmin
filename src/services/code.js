import request from '@/utils/request';

export async function requestPicCode() {
    return request(`/agent/v1/verify/getImageCodeBase64`, {
        method: 'GET',
        isToken: false
    });
}

export async function requestMessageCode(data) {
    return request(`/agent/v1/verify/sendMobileCode`, {
        method: 'POST',
        isToken: false,
        data
    });
}