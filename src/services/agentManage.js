import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function requestAgentList(data) {
<<<<<<< HEAD
  return request('/manager/v1.1/RelAgentOutletsBrand/pageList/brand', {
    method: 'POST',
    data
  });
}

export async function relAgentOutletsBrandList(data) {
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
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
<<<<<<< HEAD
export async function requestDicModelsByBrandId(data) {
  return request(`/manager/v1.1/DirectoryManageController/dicModelsByBrandId?brandId=${data}`, {
    method: 'GET',
  });
}
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7

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
<<<<<<< HEAD
  return request(`/manager/v1.1/RelAgentOutletsBrand/getSecondAgentSellBrandAndModel?${data && queryJsonToString(data)}`, {
=======
  return request(`/manager/v1.1/RelAgentOutletsBrand/getSecondAgentSellBrandAndModel?${data&&queryJsonToString(data)}`, {
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
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
<<<<<<< HEAD

export async function typeApproveAgent() {
  return request(`/manager/v1.1/RelAgentOutletsBrand/getAllBrands`, {
    method: 'GET',
  });
}

export async function getBrandAndModel(data) {
  if (data) {
    return request(`/manager/v1.1/RelAgentOutletsBrand/getSecondAgentSellBrandAndModel?agentOutletsId=${data}`, {
      method: 'GET',
    });
  };
}
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
