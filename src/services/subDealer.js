import request from '@/utils/request';
import {API} from '@/globalConstant';
export async function requestSubDealerList(data) {
  return request(
    `${API}/manager/v1.1/VehicleManageController/getSecondaryAgentOutletsList?agentOutletsId=${encodeURI(data.agentOutletsId)}&city=${data.city ? encodeURI(data.city) : ''}&region=${data.region ? encodeURI(data.region) : ''}`, {
    method: 'GET'
  });
}

export async function requestDealerList(data) {
  return request(`${API}/manager/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets`, {
    method: 'GET'
  });
}