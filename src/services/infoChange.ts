import request from '@/utils/request'
import { NEW_API } from '@/globalConstant';

export const reqList = async (data: any) => {
  return request(`${NEW_API}/manager/v1/vehicleChange/change/list`, {
    method: 'POST',
    data
  });
}

export async function getInfo(id) {
  return request(`${NEW_API}/manager/v1/vehicleChange/change/info/${id}`, {
    method: 'GET',
  });
  
}

export async function getAuditPass(data: any) {
  return request(`${NEW_API}/manager/v1/vehicleChange/change/auditPass`, {
    method: 'POST',
    data
  });
}

export async function getNoPass(data: any) {
  return request(`${NEW_API}/manager/v1/vehicleChange/change/auditNotPass`, {
    method: 'POST',
    data
  });
}
