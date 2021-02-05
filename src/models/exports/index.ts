import { History } from 'umi';
export interface MerchantManagementProp {
  children: any,
  history: History
}

export interface CreateBrandList {
  name:string,
  city:string,
  region:string,
  address:string,
  brandName:string,
  agentBrand:string,
  id:number
}

export interface statusBrandModalType {
  isVisible:boolean,
  title:string | null,
  context:string,
  allCheck:boolean,
}