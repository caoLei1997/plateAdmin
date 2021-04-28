import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant';
export async function requestCatalogList(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/directoryManagePageList`, {
        method: 'POST',
        data
    });
}

// 新增品牌
export async function requestCatalogAddBrand(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/saveBrand?${queryJsonToString(data)}`, {
        method: 'POST'
    });
}

// 修改品牌
export async function requestCatalogEditBrand(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/updateBrand?${queryJsonToString(data)}`, {
        method: 'POST'
    });
}

// 删除品牌
export async function requestCatalogDelBrand(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/deleteBrand?${queryJsonToString(data)}`, {
        method: 'POST'
    });
}

// 新增型号
export async function requestCatalogAddModel(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/saveModel`, {
        method: 'POST',
        requestType: 'json',
        data
    });
}

// 编辑型号
export async function requestCatalogEditModel(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/updateModel?${queryJsonToString(data)}`, {
        method: 'POST'
    });
}

// 删除型号
export async function requestCatalogDelModel(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/deleteModel?${queryJsonToString(data)}`, {
        method: 'POST'
    });
}

// 整车编码列表
export async function requestCatalogSNList(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/getSnPageList?${queryJsonToString(data)}`, {
        method: 'POST'
    });
}

// 导入SN列表
export async function requestCatalogUploadSN(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/importSN`, {
        method: 'POST',
        requestType: 'form',
        data
    });
}

// 批量删除sn
export async function requestBatchDelSN(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/deleteSnBatch?${queryJsonToString(data)}`);
}

// 单个删除sn
export async function requestSingleDelSN(data) {
    return request(`${API}/manager/v1.1/DirectoryManageController/deleteSnById?${queryJsonToString(data)}`);
}
