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