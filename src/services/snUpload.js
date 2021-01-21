import request from '@/utils/request';

export async function getSubUploadList(data) {
  return request(
    `/manager/web/v1/batchSNWeb/snUpload/pageList`, {
    method: 'POST',
    isToken: true,
    data
  });
}

export async function deleteSubUploadList(data) {
  return request(
    `/manager/web/v1/batchSNWeb/deleteSn/${data}`, {
    method: 'POST',
  });
}



export async function getQueryCount() {
  return request(
    `/manager/web/v1/batchSNWeb/queryCount`, {
    method: 'GET',
  });
}