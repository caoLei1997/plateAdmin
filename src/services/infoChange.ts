import request from '@/utils/request'

export const getList = async (params: any) => {
  return request('/api/infoChangeList', {
    method: 'POST',
    params
  });
}