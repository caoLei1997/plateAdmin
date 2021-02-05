
import request from '@/utils/request';
export async function requestList(data) {
  return request('/manager/v1.1/RelAgentOutletsBrand/pageList', {
    method: 'POST',
    data
  });
}

export async function requestEditData(data) {
  if (data) {
    return request(`/manager/v1.1/RelAgentOutletsBrand/getSecondAgentSellBrandAndModel?agentOutletsId=${data}`, {
      method: 'GET',
    });
  }else{
    return request(`/manager/v1.1/RelAgentOutletsBrand/getSecondAgentSellBrandAndModel`, {
      method: 'GET',
    });
  }
}
