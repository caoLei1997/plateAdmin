import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';

import {
  Descriptions,
  Divider,
  Table,
  Row,
  Col,
  Typography,
  Collapse,
  Image
} from 'antd';

import styles from './style.less';

const Detail = () => {
  const content = {};
  return (
    <PageHeaderWrapper
      className={styles.main}
    >
      <div className={styles.container}>
        <div className={styles.status}>
          <span>审核状态：</span>
          <div className='font-pending'>待审核</div>
          <div className='font-success'>通过</div>
          <div className='font-red'>未通过</div>
        </div>
        <h3>申请信息</h3>
        <Divider></Divider>
        <Descriptions title="" column={2}>
          <Descriptions.Item label="车牌号">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="车辆品牌">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="车辆型号">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="车身颜色">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="整车编码">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="车辆用途">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="姓名">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="手机号码">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="注销原因">
            {1 || '--'}
          </Descriptions.Item>
          <Descriptions.Item label="申请日期">
            {1 || '--'}
          </Descriptions.Item>
        </Descriptions>

        {/* 车辆照片 */}
        <Descriptions title="" column={1}>
          <Descriptions.Item label='灭失/报废证明'>
            <div className={styles.photoContainer}>
              {
                0 &&
                <div className={styles.item}>
                  <Image
                    // src={}
                    alt='身份证正面'
                    width={200}
                    height={165}
                  />
                  <p>身份证正面</p>
                </div>
              }
            </div>
          </Descriptions.Item>
        </Descriptions>
      </div>
    </PageHeaderWrapper>
  );
}

export default Detail;
