import { Dispatch } from 'umi'
export interface ListPropsType {
  infoChangeList: InitialStateType,
  getList: Dispatch
}

export interface TableDataType {
  dateOfApplication: string,
  registerPerson: string,
  IDType: number,
  IDNumber: number,
  phoneNumber: number,
  changeField: number,
  status: number,
  reviewDate: string,
  fail: string,
  id: number,
}

export interface PaginationType {
  current: number,
  pageSize: number
}

export interface DetailDateType {
  id: number,
  audit: string,
  auditedAt: string,
  auditStatus: number,
  notPassReason: string,
}


export interface DetailChangeDataType {
  id: number,
  type: number,
  changeField: string,
  changeBefore: string,
  changeAfter: string,
}

export interface DetailPropsType {

}


