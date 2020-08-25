import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
export async function authorityList(data) {
  return request('/agent/v1.1/DealerPersonnel/accountList', {
    method: 'POST',
    data
  });
}

export async function addAccount(data) {
  return request('/agent/v1.1/DealerPersonnel/addLicenseSalesManagementAccount', {
    method: 'POST',
    data
  });
}



export async function getRoles() {
  return request('/agent/v1.1/DealerPersonnel/getRoles', {
    method: 'GET',
  });
}



export async function getAgent() {
  return request('/agent/v1.1/DealerPersonnel/getAgentOutletsByType?type=1', {
    method: 'GET',
  });
}


export async function reqModifyStatus(data) {
  return request(`/agent/v1.1/DealerPersonnel/enableOrDisableAccount?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}


export async function reqDetachment() {
  return request(`/agent/v1.1/DealerPersonnel/getAgentOutletsByType?type=2`, {
    method: 'GET',
  });
}



export async function getCityTree() {
  return request(`/agent/v1.1/DealerPersonnel/getCityTree`, {
    method: 'GET',
  });
}

export async function getBrigadeByCityAndRegion(data) {
  return request(`/web/v1/batchModelWeb/getBrigadeBycityAndRegion?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}



