import request from '@/utils/request';

export async function requestSubDealerList(data) {
<<<<<<< HEAD
  return request(
    `/manager/v1.1/VehicleManageController/getSecondaryAgentOutletsList?agentOutletsId=${encodeURI(data.agentOutletsId)}&city=${data.city ? encodeURI(data.city) : ''}&region=${data.region ? encodeURI(data.region) : ''}`, {
=======
  return request(`/manager/v1.1/VehicleManageController/getSecondaryAgentOutletsList?agentOutletsId=${data.agentOutletsId}`, {
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
    method: 'GET'
  });
}

export async function requestDealerList(data) {
  return request(`/manager/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets`, {
    method: 'GET'
  });
}