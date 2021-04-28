/*
 * @Author: caolei 
 * @Date: 2021-04-25 17:10:55 
 * @Last Modified by: caolei
 * @Last Modified time: 2021-04-25 17:17:50
 */


import React from 'react';
import { Descriptions } from 'antd';
import { writeUse } from '@/utils';

const CarChange = ({ content }) => {
  return (
    <div>
      <Descriptions title='' column={2} >
        <Descriptions.Item label='车辆制造商'>
          <div >{content?.electrombileManufacturer}</div>
        </Descriptions.Item>
        <Descriptions.Item label='车辆中文商标'>
          <div >{content?.electrombileChineseTradeMark}</div>
        </Descriptions.Item>
        <Descriptions.Item label='产品合格证'>
          <div >{content?.electrombileCertificate}</div>
        </Descriptions.Item>
        <Descriptions.Item label='依据标准'>
          <div >{content?.standard == '01' ? '符合新国标' : '符合旧国标'}</div>
        </Descriptions.Item>
        {
          content?.standard == '01'
            ? (<>
              <Descriptions.Item label='ccc证书编码'>
                <div >{content?.cccCertificateNumber}</div>
              </Descriptions.Item>
              <Descriptions.Item label='ccc证书状态'>
                <div >{content?.cccCertificateStatus}</div>
              </Descriptions.Item>
              <Descriptions.Item label='ccc证书有效截止期'>
                <div >{content?.cccCertificateDate}</div>
              </Descriptions.Item>
            </>)
            : <></>
        }
        <Descriptions.Item label='车身长度'>
          <div >{content?.electrombileLength}</div>
        </Descriptions.Item>
        <Descriptions.Item label='车身宽度'>
          <div >{content?.electrombileWidth}</div>
        </Descriptions.Item>
        <Descriptions.Item label='车身高度'>
          <div >{content?.electrombileHeight}</div>
        </Descriptions.Item>
        <Descriptions.Item label='续航里程'>
          <div >{content?.enduranceMileage}</div>
        </Descriptions.Item>
        <Descriptions.Item label='整车质量'>
          <div >{content?.totalWeight}</div>
        </Descriptions.Item>
        <Descriptions.Item label='最高设计时速'>
          <div >{content?.maximumDesignedSpeed}</div>
        </Descriptions.Item>
        <Descriptions.Item label='整车编码位置'>
          <div >{content?.codeOnFrame}</div>
        </Descriptions.Item>
        <Descriptions.Item label='名牌固定位置'>
          <div >{content?.fixedPositionName}</div>
        </Descriptions.Item>
        <Descriptions.Item label='制造日期'>
          <div >{content?.manufactureDate}</div>
        </Descriptions.Item>
        <Descriptions.Item label='销售企业名称'>
          <div >{content?.saleEnterpriseName}</div>
        </Descriptions.Item>
        <Descriptions.Item label='生产企业名称'>
          <div >{content?.factoryName}</div>
        </Descriptions.Item>
        <Descriptions.Item label='车辆用途'>
          <div >{writeUse(content?.electrombileUsage)}</div>
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default CarChange;
