/*
 * @Author: caolei 
 * @Date: 2021-04-25 16:03:10 
 * @Last Modified by: caolei
 * @Last Modified time: 2021-04-25 17:14:57
 */

import { certificate, vehicleUse } from "@/globalConstant"

export const typeCertificate = (key: string) => {
  switch (key) {
    case '0':
      return certificate.IDCare
    case '1':
      return certificate.passport
    case '2':
      return certificate.HongKong
    case '3':
      return certificate.officerID
    default:
      return ''
  }
}

export const writeUse = (key: string) => {
  switch (key) {
    case '0':
      return vehicleUse.SelfUse
    case '1':
      return vehicleUse.ExpressDelivery
    case '2':
      return vehicleUse.Takeaway
    case '3':
      return vehicleUse.Other
    default:
      return ''
  }
}