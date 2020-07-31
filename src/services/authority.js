import request from '@/utils/request';

export async function getAuthorityList() {
    return request('/authority/authorityList', {
      method: 'POST'
    });
  }
  