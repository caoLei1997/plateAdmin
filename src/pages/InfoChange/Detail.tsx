import React from 'react';
import styles from './style.less';
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
  Image,
  Button,
} from 'antd';

import {
  DetailDateType,
  DetailChangeDataType
} from './data';

const { Text } = Typography;

const changeColumns = [
  {
    title: '变更字段',
    dataIndex: 'changeField'
  },
  {
    title: '变更前',
    dataIndex: 'changeBefore'
  },
  {
    title: '变更后',
    dataIndex: 'changeAfter'
  },
]

let changeDataSource: Array<DetailChangeDataType> = [{
  id: 0,
  type: 1,
  changeField: '整车编码',
  changeBefore: '11000222',
  changeAfter: '11000333'
}]

const columns = [
  {
    title: '审核人',
    dataIndex: 'audit',
    key: 'audit',
  },
  {
    title: '审核日期',
    dataIndex: 'auditedAt',
    key: 'auditedAt',
  },
  {
    title: '审核结果',
    dataIndex: 'auditStatus',
    key: 'auditStatus',
    render: auditStatus => auditStatus == 1 ? <div className='font-success'>通过</div> : <div className='font-red'>不通过</div>,
  },
  {
    title: '不通过原因',
    dataIndex: 'notPassReason',
    key: 'notPassReason',
  }
]

let dataSource: Array<DetailDateType> = [
  {
    id: 0,
    audit: '张三',
    auditedAt: '2020-10-10',
    auditStatus: 0,
    notPassReason: '不想通过呗'
  }
]
const Detail = () => {
  const content = {};
  return (

    <div>
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
          <h3>变更明细</h3>
          <Divider></Divider>
          <Table
            rowKey='id'
            columns={changeColumns}
            dataSource={changeDataSource}
            pagination={false}
            bordered={true}
          />
          <div className='mb-16'></div>
          <h3>车辆信息</h3>
          <Divider></Divider>
          <Descriptions title="" column={2}>
            <Descriptions.Item label="登记序号">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车辆品牌">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="整车编码">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车身颜色">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车辆型号">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="电机编码">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车辆合格证">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车牌号">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="登记日期">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="登记身份">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="发证机关">
              {1 || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车辆用途">
              {1 || '--'}
            </Descriptions.Item>
          </Descriptions>

          {/* 车辆照片 */}
          <Descriptions title="" column={1}>
            <Descriptions.Item label="车辆照片">

              <div className={styles.photoContainer}>
                {
                  0 &&
                  <div className={styles.item}>
                    <Image
                      src={content.idCardFrontImageBase64}
                      alt='身份证正面'
                      width={200}
                      height={165}
                    />
                    <p>身份证正面</p>
                  </div>
                }

                {
                  0 &&
                  <div className={styles.item}>
                    <Image
                      src={content.idCardEndImageBase64}
                      alt='身份证反面'
                      width={200}
                      height={165}
                    />
                    <p>身份证反面</p>
                  </div>
                }
                {
                  0 &&
                  <div className={styles.item}>
                    <Image
                      src={content.electrombileImageBase64}
                      alt='右后方45度整车照片'
                      width={200}
                      height={165}
                    />
                    <p>右后方45度整车照片</p>
                  </div>
                }
                {
                  0 &&
                  <div className={styles.item}>
                    <Image
                      src={content.electrombileNumberImageBase64}
                      alt='整车编码'
                      width={200}
                      height={165}
                    />
                    <p>整车编码</p>
                  </div>
                }
                {
                  0 &&
                  <div className={styles.item}>
                    <Image
                      src={content.electricNumberImageBase64}
                      alt='电机编码'
                      width={200}
                      height={165}
                    />
                    <p>电机编码</p>
                  </div>
                }

                {
                  0 &&
                  <div className={styles.item}>
                    <Image
                      src={content.otherImage1Base64}
                      alt='其它1'
                      width={200}
                      height={165}
                    />
                    <p>其它1</p>
                  </div>
                }

                {
                  0 &&
                  <div className={styles.item}>
                    <Image
                      src={content.otherImage2Base64}
                      alt='其它2'
                      width={200}
                      height={165}
                    />
                    <p>其它2</p>
                  </div>
                }
              </div>

            </Descriptions.Item>
            {
              0 &&
              <Descriptions.Item label="购车凭证">
                <div className={styles.photoContainer}>
                  <div className={styles.item}>
                    <Image
                      src={content.invoiceImageBase64}
                      alt='购车凭证'
                      width={200}
                      height={165}
                    />
                  </div>
                </div>
              </Descriptions.Item>
            }

            {
              0 &&
              <Descriptions.Item label="带牌车辆照片">
                <div className={styles.photoContainer}>
                  <div className={styles.item}>
                    <Image
                      src={content.licensePlatePhotoBase64}
                      alt='带牌车辆照片'
                      width={200}
                      height={165}
                    />
                  </div>
                </div>
              </Descriptions.Item>
            }

          </Descriptions>
          <h3>车主信息</h3>
          <Divider></Divider>
          <Descriptions title="" column={2}>
            <Descriptions.Item label="姓名">{0 || '--'}</Descriptions.Item>
            <Descriptions.Item label="证件类型">{0 == 0 ? '身份证' : (1 == 1 ? '护照' : (content.certificateType == 2 ? '港澳通行证' : '军官证')) || '--'}</Descriptions.Item>
            <Descriptions.Item label="证件号码">{0 || '--'}</Descriptions.Item>
            <Descriptions.Item label="手机号码">{1 || '--'}</Descriptions.Item>
            <Descriptions.Item label="家庭住址">{1 || '--'}</Descriptions.Item>
          </Descriptions>
          <h3>审核记录</h3>
          <Divider></Divider>
          <Table
            rowKey="id"
            columns={columns}
            dataSource={dataSource}
          />

        </div>


      </PageHeaderWrapper>

      <Row justify="center" align="middle" className='mt-32'>
        <Col span={3}>
          {
            1 ?
              <Text className='link-a'>
                <LeftOutlined />
                上一条
              </Text> :
              <Text
                className='font-size-16'
                disabled={true}
              >
                <LeftOutlined />
                上一条
            </Text>
          }
        </Col>
        <Col span={18} >
          <div className='ele-center'>
            <Button type='primary' danger>审核不通过</Button>
            <Button type='primary'>审核通过</Button>
          </div>
        </Col>
        <Col span={3} style={{ textAlign: 'right' }}>
          {
            1 ?
              <Text className='link-a' >
                下一条
                <RightOutlined />
              </Text> :
              <Text
                className='font-size-16'
                disabled={true}
              >
                下一条
                <RightOutlined />
              </Text>
          }
        </Col>
      </Row>
    </div >

  );
}

export default Detail;
