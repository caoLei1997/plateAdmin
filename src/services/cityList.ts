import request from '@/utils/request'
export async function requestCityRegion() {
  return request('/manager/v1.1/DealerPersonnel/getCityTree', {
    method: 'GET',
  });
}
export async function requestAllBrands() {
  return request(`/manager/v1.1/RelAgentOutletsBrand/getAllBrands`, {
    method: 'GET',
  });
}
export async function requestBrands() {
  return request(`/manager/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets`, {
    method: 'GET',
  });
}

