import request from '@/utils/request'
import { queryJsonToString } from '@/commonFun';
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
export async function requestBrands(data) {
  console.log(data);

  // return request(`
  // /manager/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets
  // `, {
  //   method: 'GET',
  // });
  return request(`/manager/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets?${queryJsonToString(data)}`, {
    method: 'GET',
  });

}

