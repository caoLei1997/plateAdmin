import request from '@/utils/request'
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant'
export async function requestCityRegion() {
  return request(`${API}/manager/v1.1/DealerPersonnel/getCityTree`, {
    method: 'GET',
  });
}
export async function requestAllBrands() {
  return request(`${API}/manager/v1.1/RelAgentOutletsBrand/getAllBrands`, {
    method: 'GET',
  });
}
export async function requestBrands(data) {
  return request(`${API}/manager/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}

