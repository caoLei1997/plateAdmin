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
<<<<<<< HEAD
    return request(`/manager/web/v1/batchSNWeb/snExcelUpload/new`, {
=======
    console.log(data);
    
    return request(`/manager/web/v1/batchSNWeb/snExcelUpload`, {
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
        method: 'POST',
        requestType: 'form',
        data
    })
}
