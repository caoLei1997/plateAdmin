import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function requestCarMeansList(data) {
  return request('/agent/v1.1/VehicleManageController/vehicleManagePageList', {
    method: 'POST',
    data
  });
}

export async function requestCarMeansDetail(data) {
  return request(`/agent/v1.1/VehicleManageController/getVehicleDetail?${queryJsonToString(data)}`, {
    method: 'GET'
  });
}

export async function requestAgentList(data) {
  return request('/agent/v1.1/RelAgentOutletsBrand/pageList', {
    method: 'POST',
    data
  });
}
