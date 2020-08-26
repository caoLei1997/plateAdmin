import request from '@/utils/request';

export async function requestSubDealerList(data) {
  return request(`/`, {
    method: POST
  });
}
