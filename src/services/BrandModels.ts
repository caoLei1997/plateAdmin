import request from '@/utils/request';

export async function requestAgentList(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/pageList/brand', {
    method: 'POST',
    data
  });
}

export async function editBrand(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/editFirstAgent', {
    method: 'POST',
    data
  });
}


export async function requestStopAndStartBrand(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/enableAgentAndAccount', {
    method: 'POST',
    data
  });
}


export async function addBrandList(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/addFirstAgent', {
    method: 'POST',
    data
  });
}

