import request from '@/utils/request';

export async function getDealerList() {
  return request('/api/car/dealerList', {
    method: 'GET'
  });
}

export async function getMeansList() {
  return request('/api/car/meansList', {
    method: 'GET'
  });
}