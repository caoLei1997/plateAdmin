import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun'
import {API} from '@/globalConstant';
export async function typeApproveList(data) {
  return request(`${API}/manager/web/v1/batchModelWeb/modelAuditPageList`, {
    method: 'POST',
    data
  });
}

export async function typeApproveDetail(data) {
  return request(`${API}/manager/web/v1/batchModelWeb/modelAuditDetail?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}

export async function typeApprovalAgree(data) {
  return request(`${API}/manager/web/v1/batchModelWeb/auditPass?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}

export async function typeApprovalNo(data) {
  return request(`${API}/manager/web/v1/batchModelWeb/auditNoPass?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}


export async function typeApprovalModel(data) {
  return request(`${API}/manager/web/v1/batchModelWeb/getModelListByBatchId?${queryJsonToString(data)}`, {
    method: 'GET',
  });
}
export async function typeApproveAgent() {
  return request(`${API}/manager/v1.1/DistributePlateNumberRecordController/getAllFirstAgentOutlets`, {
    method: 'GET',
  });
}
