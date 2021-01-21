import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function requestAgentList(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/pageList/brand', {
    method: 'POST',
    data
  });
}

export async function relAgentOutletsBrandList(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/pageList', {
    method: 'POST',
    data
  });
}

export async function requestCityRegion(data) {
  return request('/manager/v1.1/DealerPersonnel/getCityTree', {
    method: 'GET',
  });
}
export async function requestDicModelsByBrandId(data) {
  return request(`/manager/v1.1/DirectoryManageController/dicModelsByBrandId?brandId=${data}`, {
    method: 'GET',
  });
}

export async function requestBrand(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/getAllBrands', {
    method: 'GET',
    data
  });
}

export async function editFirstAgentSave(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/editFirstAgent', {
    method: 'POST',
    data
  });
}

export async function addFirstAgent(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/addFirstAgent', {
    method: 'POST',
    data
  });
}

export async function useOrStop(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/enableAgentAndAccount', {
    method: 'POST',
    data
  });
}

export async function getSecondAgentBrand(data) {
  return request(`/manager/v1.1/RelAgentOutletsBrand/getSecondAgentSellBrandAndModel?${data&&queryJsonToString(data)}`, {
    method: 'GET',
  });
}

export async function editSecondAgent(data) {
  return request(`/manager/v1.1/RelAgentOutletsBrand/updateSecondAgent`, {
    method: 'POST',
    data
  });
}

export async function addSecondAgent(data) {
  return request(`/manager/v1.1/RelAgentOutletsBrand/addSecondAgent`, {
    method: 'POST',
    data
  });
}

export async function typeApproveAgent() {
  return request(`/manager/v1.1/RelAgentOutletsBrand/getAllBrands`, {
    method: 'GET',
  });
}
