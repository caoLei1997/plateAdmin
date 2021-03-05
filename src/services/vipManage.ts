
import request from '@/utils/request';
export async function addVip(data) {
  return request('/manager/web/v1/brandFactory/add/versionType', {
    method: 'POST',
    data
  });
}
export async function deleteVip (data) {
  return request(`/manager/web/v1/brandFactory/delete/versionType/${data}`, {
    method: 'POST',
  });
}
export async function getVipList (data) {
  return request(`/manager/web/v1/brandFactory/page`, {
    method: 'POST',
    data
  });
}