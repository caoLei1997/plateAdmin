import request from '@/utils/request';

import {queryJsonToString} from '@/commonFun'

export async function typeApproveList(data) {
  return request(`/web/v1/batchModelWeb/modelAuditPageList`, {
    method: 'POST',
    data
  });
}
export async function typeApproveDetail(data) {
  return request(`/web/v1/batchModelWeb/modelAuditDetail?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}
