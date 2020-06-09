import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function requestAgentList(data) {
  return request('/agent/v1.1/RelAgentOutletsBrand/pageList', {
    method: 'POST',
    data
  });
}

export async function requestCityRegion(data) {
  return request('/agent/v1.1/DealerPersonnel/getCityTree', {
    method: 'GET',
  });
}

export async function requestBrand(data) {
  return request('/agent/v1.1/RelAgentOutletsBrand/getAllBrands', {
    method: 'GET',
    data
  });
}

export async function editFirstAgentSave(data) {
  return request('/agent/v1.1/RelAgentOutletsBrand/editFirstAgent', {
    method: 'POST',
    data
  });
}

export async function addFirstAgent(data) {
  return request('/agent/v1.1/RelAgentOutletsBrand/addFirstAgent', {
    method: 'POST',
    data
  });
}

export async function useOrStop(data) {
  return request('/agent/v1.1/RelAgentOutletsBrand/enableSecondAgent', {
    method: 'POST',
    data
  });
}

export async function getSecondAgentBrand(data) {
  return request(`/agent/v1.1/RelAgentOutletsBrand/getSecondAgentSellBrandAndModel?${data&&queryJsonToString(data)}`, {
    method: 'GET',
  });
}
