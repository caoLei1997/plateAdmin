import request from '@/utils/request';
import { queryJsonToString } from '@/commonFun';

export async function getDealerList() {
  return request('/api/car/dealerList', {
    method: 'GET'
  });
}

export async function getMeansList() {
  return request('/api/car/meansList', {
    method: 'GET'
  });
}


export async function requestCarMeansList(data) {
  return request('/manager/v1.1/VehicleManageController/vehicleManagePageList', {
    method: 'POST',
    data
  });
}

export async function requestCarMeansDetail(data) {
  return request(`/manager/v1.1/VehicleManageController/getVehicleDetail?${queryJsonToString(data)}`, {
    method: 'GET'
  });
}

export async function requestCarMeansDetailPass(data) {
  return request(`/manager/v1.1/VehicleManageController/vehicleAuditPass`, {
    method: 'POST',
    data
  });
}

export async function requestCarMeansDetailNotPass(data) {
  return request(`/manager/v1.1/VehicleManageController/vehicleAuditFaildToPass`, {
    method: 'POST',
    data
  });
}

export async function requestCarPlateAndName(data) {
  return request(`/manager/v1.1/VehicleManageController/getNumberByCityName?${queryJsonToString(data)}`, {
    method: 'GET'
  });
}

export async function requestCarDistributeList(data) {
  return request('/manager/v1.1/DistributePlateNumberRecordController/pageList', {
    method: 'POST',
    data
  });
}

export async function requestCarDistributeCensus(data) {
  return request(`/manager/v1.1/DistributePlateNumberRecordController/distributionInfo?${queryJsonToString(data)}`, {
    method: 'GET'
  });
}

export async function requestCarDistributeSurplus(data) {
  return request(`/manager/v1.1/DistributePlateNumberRecordController/inventorPageListByPlateNumber`, {
    method: 'POST',
    data
  });
}

export async function requestCarPlatePrefixList() {
  return request(`/manager/v1.1/DistributePlateNumberRecordController/getAllPrefix`, {
    method: 'GET'
  });
}