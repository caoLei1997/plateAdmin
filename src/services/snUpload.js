import request from '@/utils/request';
import {API} from '@/globalConstant';
export async function getSubUploadList(data) {
  return request(
    `${API}/manager/web/v1/batchSNWeb/snUpload/pageList`, {
    method: 'POST',
    isToken: true,
    data
  });
}

export async function deleteSubUploadList(data) {
  return request(
    `${API}/manager/web/v1/batchSNWeb/deleteSn/${data}`, {
    method: 'POST',
  });
}



export async function getQueryCount() {
  return request(
    `${API}/manager/web/v1/batchSNWeb/queryCount`, {
    method: 'GET',
  });
}