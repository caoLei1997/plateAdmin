import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';
import {API} from '@/globalConstant'
export async function requestCarMeansList(data) {
  return request(`${API}/manager/v1.1/VehicleManageController/vehicleManagePageList`, {
    method: 'POST',
    data
  });
}

export async function requestCarMeansDetail(data) {
  return request(`${API}/manager/v1.1/VehicleManageController/getVehicleDetail?${queryJsonToString(data)}`, {
    method: 'GET'
  });
}

export async function requestCarMeansDetailPass(data) {
  return request(`${API}/manager/v1.1/VehicleManageController/vehicleAuditPass/vip`, {
    method: 'POST',
    data
  });
}

export async function requestCarMeansDetailNotPass(data) {
  return request(`${API}/manager/v1.1/VehicleManageController/vehicleAuditFaildToPass`, {
    method: 'POST',
    data
  });
}

export async function requestCarPlateAndName(data) {
  return request(`${API}/manager/v1.1/VehicleManageController/getNumberByCityName?${queryJsonToString(data)}`, {
    method: 'GET'
  });
}

export async function requestCarDistributeList(data) {
  return request(`${API}/manager/v1.1/DistributePlateNumberRecordController/pageList`, {
    method: 'POST',
    data
  });
}

export async function requestCarDistributeCensus(data) {
  return request(`${API}/manager/v1.1/DistributePlateNumberRecordController/distributionInfo?${queryJsonToString(data)}`, {
    method: 'GET'
  });
}

export async function requestCarDistributeSurplus(data) {
  return request(`${API}/manager/v1.1/DistributePlateNumberRecordController/inventorPageListByPlateNumber`, {
    method: 'POST',
    data
  });
}

export async function requestCarPlatePrefixList() {
  return request(`${API}/manager/v1.1/DistributePlateNumberRecordController/getAllPrefix`, {
    method: 'GET'
  });
}