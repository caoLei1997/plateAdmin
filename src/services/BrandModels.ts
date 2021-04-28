import request from '@/utils/request';
import { API } from '@/globalConstant';

export async function requestAgentList(data) {
  return request(`${API}/manager/v1.1/RelAgentOutletsBrand/pageList/brand`, {
    method: 'POST',
    data
  });
}

export async function editBrand(data) {
  return request(`${API}/manager/v1.1/RelAgentOutletsBrand/editFirstAgent`, {
    method: 'POST',
    data
  });
}


export async function requestStopAndStartBrand(data) {
  return request(`${API}/manager/v1.1/RelAgentOutletsBrand/enableAgentAndAccount`, {
    method: 'POST',
    data
  });
}


export async function addBrandList(data) {
  return request(`${API}/manager/v1.1/RelAgentOutletsBrand/addFirstAgent`, {
    method: 'POST',
    data
  });
}

