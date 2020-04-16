import request from '@/utils/request';

export async function requestSubDealerList(data) {
  return request(`/agent/v1.1/VehicleManageController/getSecondaryAgentOutletsList?agentOutletsId=${data.agentOutletsId}`, {
    method: 'GET'
  });
}

export async function requestDealerList(data) {
  return request(`/agent/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets`, {
    method: 'GET'
  });
}