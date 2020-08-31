import request from '@/utils/request';

import { queryJsonToString } from '@/commonFun'

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

export async function typeApprovalAgree(data) {
  return request(`/web/v1/batchModelWeb/auditPass?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}

export async function typeApprovalNo(data) {
  return request(`/web/v1/batchModelWeb/auditNoPass?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}


export async function typeApprovalModel(data) {
  return request(`/web/v1/batchModelWeb/getModelListByBatchId?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}
export async function typeApproveAgent() {
  return request(`/agent/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets`, {
    method: 'GET',
  });
}
