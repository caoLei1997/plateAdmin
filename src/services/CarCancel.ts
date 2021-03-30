import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
export async function getLogoutList(data: any) {
  return request('/manager/v1/vehicleChange/logout/list', {
    method: 'POST',
    data
  });
}
export async function getAuditPass(data: any) {
  return request('/manager/v1/vehicleChange/logout/auditPass', {
    method: 'POST',
    data
  });
}
export async function getNoPass(data: any) {
  return request('/manager/v1/vehicleChange/logout/auditNotPass', {
    method: 'POST',
    data
  });
}


export async function requestGetCity(data) {
  return request(`/manager/v1.1/LicensedSalesRecordApplyRecord/getCity?${queryJsonToString(data)}`, {
    method: 'GET',
    isToken: true,
  });
}

export async function getBrigadeByCityAndRegion(data) {
  return request(`/manager/web/v1/batchModelWeb/getBrigadeBycityAndRegion?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}


export async function getInfo(id) {
  return request(`/manager/v1/vehicleChange/logout/info/${id}`, {
    method: 'GET',
  });
}





