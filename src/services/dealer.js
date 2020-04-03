import request from '@/utils/request';

export async function requestDealerList() {
  return request('/api/car/dealerList', {
    method: 'GET'
  });
}