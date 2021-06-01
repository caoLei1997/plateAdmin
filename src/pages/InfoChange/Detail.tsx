import React, { useEffect, useState } from 'react';
import styles from './style.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import moment from 'moment';
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { connect } from 'dva';
import { Link } from 'umi';
import AuditPass from './components/AuditPass'
import AuditBy from './components/AuditBy'
import {
  Descriptions,
  Divider,
  Table,
  Row,
  Col,
  Typography,
  Image,
  Button,
  Collapse,
} from 'antd';

import {
  DetailDateType,
  DetailChangeDataType
} from './data';
import { vehicleUse } from '@/globalConstant';
import { typeCertificate } from '@/utils';
import CarChange from '@/components/CarChange/CarChange';

const { Text } = Typography;

const changeColumns = [
  {
    title: '变更字段',
    dataIndex: 'fieldChinese'
  },
  {
    title: '变更前',
    render: (item) => {
      if (item.fieldChinese === '带牌照片') {
        return <Image src={item.oldValue} width={200} />
      } else if (item.fieldChinese === '证件类型' || item.fieldChinese === '法人证件类型') {
        return typeCertificate(item.oldValue)
      } else {
        return item.oldValue
      }
    }
  },
  {
    title: '变更后',
    render: (item) => {
      if (item.fieldChinese === '带牌照片') {
        return <Image src={item.newValue} width={200} />
      } else if (item.fieldChinese === '证件类型' || item.fieldChinese === '法人证件类型') {
        return typeCertificate(item.newValue)
      } else {
        return item.newValue
      }
    }
  },
]
const columns = [
  {
    title: '审核人',
    dataIndex: 'auditName',
    key: 'auditName',
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
const { Panel } = Collapse;
const Detail = (props) => {
  const { match, infoChangeList, getInfo, history } = props;
  const { info } = infoChangeList;
  //审核状态 0-待审核 1-审核通过 2审核不通过
  const writeStatus = () => {
    switch (info.auditStatus) {
      case '0':
        return <div className='font-pending'>待审核</div>
      case '1':
        return <div className='font-success'>已通过</div>
      case '2':
        return <div className='font-red'>未通过</div>
    }
  }
  // 车辆用途
  const writeUse = (key: string) => {
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
  // 上下页是否禁用
  const getPagePrev = (type = 'first') => {
    let ids = JSON.parse(window.localStorage.getItem('carIds'))
    const activeIdIndex = ids?.findIndex(item => item === match.params.id);
    if (type === 'last') {
      if (activeIdIndex === (ids.length - 1)) return false;
      return true;
    }
    if (activeIdIndex === 0) return false;
    return true;
  }
  // 获取上下页ID
  const getId = (type) => {
    let ids = JSON.parse(window.localStorage.getItem('carIds'))
    const activeIdIndex = ids?.findIndex(item => item === match.params.id);
    if (type === 'first') {
      return activeIdIndex == 0 ? ids[activeIdIndex] : ids[activeIdIndex - 1]
    } else if (type === 'last') {
      return activeIdIndex == ids.length - 1 ? ids[activeIdIndex] : ids[activeIdIndex + 1]
    }
  }

  // 判断个人0 企业1 营运2
  const isType = () => {
    let type;
    if (info?.isServiceCar == 2) {
      type = info?.isServiceCar
    } else {
      if (info.enterpriseOrPersonalPurview == 1) {
        type = info.enterpriseOrPersonalPurview
      } else {
        type = 0;
      }
    }
    return type
  }

  const isServer = () => {
    const type = isType();
    if (type == 0) {
      return (
        <>
          {
            info?.idCardFrontImageBase64 &&
            <div className={styles.item}>
              <Image
                src={info?.idCardFrontImageBase64}
                alt='身份证正面'
                width={200}
                height={165}
              />
              <p>身份证正面</p>
            </div>
          }
          {
            info?.idCardEndImageBase64 &&
            <div className={styles.item}>
              <Image
                src={info?.idCardEndImageBase64}
                alt='身份证反面'
                width={200}
                height={165}
              />
              <p>身份证反面</p>
            </div>
          }
        </>
      )
    } else if (type == 1) {
      return (
        <>
          {
            info?.registrantIdCardFrontImageBase64 &&
            <div className={styles.item}>
              <Image
                src={info?.registrantIdCardFrontImageBase64}
                alt='登记人身份证正面'
                width={200}
                height={165}
              />
              <p>登记人身份证正面</p>
            </div>
          }
          {
            info?.registrantIdCardEndImageBase64 &&
            <div className={styles.item}>
              <Image
                src={info?.registrantIdCardEndImageBase64}
                alt='登记人身份证反面'
                width={200}
                height={165}
              />
              <p>登记人身份证反面</p>
            </div>
          }
        </>
      )
    } else {
      return (
        <>
          {
            info?.idCardFrontImageBase64 &&
            <div className={styles.item}>
              <Image
                src={info?.idCardFrontImageBase64}
                alt='法人身份证正面'
                width={200}
                height={165}
              />
              <p>法人身份证正面</p>
            </div>
          }
          {
            info?.idCardEndImageBase64 &&
            <div className={styles.item}>
              <Image
                src={info?.idCardEndImageBase64}
                alt='法人身份证反面'
                width={200}
                height={165}
              />
              <p>法人身份证反面</p>
            </div>
          }
          {
            info?.registrantIdCardFrontImageBase64 &&
            <div className={styles.item}>
              <Image
                src={info?.registrantIdCardFrontImageBase64}
                alt='登记人身份证正面'
                width={200}
                height={165}
              />
              <p>登记人身份证正面</p>
            </div>
          }
          {
            info?.registrantIdCardEndImageBase64 &&
            <div className={styles.item}>
              <Image
                src={info?.registrantIdCardEndImageBase64}
                alt='登记人身份证反面'
                width={200}
                height={165}
              />
              <p>登记人身份证反面</p>
            </div>
          }
        </>
      )
    }
  }
  useEffect(() => {
    getInfo(match.params.id)
  }, [match.params.id])
  return (
    <div>
      <PageHeaderWrapper
        className={styles.main}
      >
        <div className={styles.container}>
          <div className={styles.status}>
            <span>审核状态：</span>
            {writeStatus()}
          </div>
          <Collapse
            accordion={true}
            expandIconPosition='right'
            ghost
            defaultActiveKey='0'
          >
            <Panel className='collapse' header={
              <>
                <h3>变更明细</h3>
              </>
            } key="0">
              <Table
                rowKey='fieldName'
                columns={changeColumns}
                dataSource={info.vehicleInfoDiffResults || []}
                pagination={false}
                bordered={true}
              />
            </Panel>
          </Collapse>
          <Divider></Divider>
          <div className='mb-16'></div>
          <h3>车辆信息</h3>
          <Divider></Divider>
          <Descriptions title="" column={2}>
            <Descriptions.Item label="登记序号">
              {info?.number || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车辆品牌">
              {info?.brandName || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="整车编码">
              {info?.electrombileNumber || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车身颜色">
              {info?.electrombileColor || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车辆型号">
              {info?.modelName || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="电机编码">
              {info?.electricNumber || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车辆合格证">
              {info?.electrombileCertificate || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车牌号">
              {info?.plateNumber || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="登记日期">
              {info?.appliedAt || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="登记省份">
              陕西省
            </Descriptions.Item>
            <Descriptions.Item label="发证机关">
              {info?.licenselssueAgencyName || '--'}
            </Descriptions.Item>
            <Descriptions.Item label="车辆用途">
              {writeUse(info?.electrombileUsage)}
            </Descriptions.Item>
          </Descriptions>
          {
            info?.type == 1 ? <CarChange content={info} /> : ''
          }
          <Descriptions title="" column={1}>
            <Descriptions.Item label="车辆照片">
              <div className={styles.photoContainer}>
                {
                  isServer()
                }


                {
                  info?.electrombileImageBase64 &&
                  <div className={styles.item}>
                    <Image
                      src={info?.electrombileImageBase64}
                      alt='右后方45度整车照片'
                      width={200}
                      height={165}
                    />
                    <p>右后方45度整车照片</p>
                  </div>
                }
                {
                  info?.electrombileNumberImageBase64 &&
                  <div className={styles.item}>
                    <Image
                      src={info?.electrombileNumberImageBase64}
                      alt='整车编码'
                      width={200}
                      height={165}
                    />
                    <p>整车编码</p>
                  </div>
                }
                {
                  info?.electricNumberImageBase64 &&
                  <div className={styles.item}>
                    <Image
                      src={info?.electricNumberImageBase64}
                      alt='电机编码'
                      width={200}
                      height={165}
                    />
                    <p>电机编码</p>
                  </div>
                }

                {
                  info?.otherImage1Base64 &&
                  <div className={styles.item}>
                    <Image
                      src={info?.otherImage1Base64}
                      alt='其它1'
                      width={200}
                      height={165}
                    />
                    <p>其它1</p>
                  </div>
                }

                {
                  info?.otherImage2Base64 &&
                  <div className={styles.item}>
                    <Image
                      src={info?.otherImage2Base64}
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
              info?.invoiceImageBase64 &&
              <Descriptions.Item label="购车凭证">
                <div className={styles.photoContainer}>
                  <div className={styles.item}>
                    <Image
                      src={info?.invoiceImageBase64}
                      alt='购车凭证'
                      width={200}
                      height={165}
                    />
                  </div>
                </div>
              </Descriptions.Item>
            }
            <Descriptions.Item label="带牌车辆照片">
              <div className={styles.photoContainer}>
                <div className={styles.item}>
                  <Image
                    src={info?.licensePlatePhotoBase64}
                    alt='带牌车辆照片'
                    width={200}
                    height={165}
                  />
                </div>
              </div>
            </Descriptions.Item>
          </Descriptions>
          {
            isType() != 0 && (
              <Descriptions title='企业信息'>
                {
                  info?.enterpriseName && <Descriptions.Item label='企业名称'>
                    {info?.enterpriseName}
                  </Descriptions.Item>
                }

                {
                  info?.organizationCode && <Descriptions.Item label='统一社会信用代码'>
                    {info?.organizationCode}
                  </Descriptions.Item>
                }
                {
                  info?.legalPersonName && <Descriptions.Item label='法人姓名'>
                    {info?.legalPersonName}
                  </Descriptions.Item>
                }
                {
                  info?.legalCertificateType &&
                  <Descriptions.Item label='证件类型'>
                    {typeCertificate(info?.legalCertificateType)}
                  </Descriptions.Item>
                }
                {
                  info?.legalCertificateNumber &&
                  <Descriptions.Item label='证件号码'>
                    {info?.legalCertificateNumber}
                  </Descriptions.Item>
                }
                {
                  isType() == 1 && (
                    info?.residentialAddress &&
                    <Descriptions.Item label="企业地址">
                      {info?.residentialAddress + ',' + info?.detailAddress}
                    </Descriptions.Item>
                  )
                }

              </Descriptions>
            )
          }
          <h3>车主信息</h3>
          <Divider></Divider>
          <Descriptions title="" column={2}>
            <Descriptions.Item label="姓名">{info?.userName || '--'}</Descriptions.Item>
            <Descriptions.Item label="证件类型">{info?.certificateType == 0 ? '身份证' : (1 == 1 ? '护照' : (info?.certificateType == 2 ? '港澳通行证' : '军官证')) || '--'}</Descriptions.Item>
            <Descriptions.Item label="证件号码">{info?.certificateNumber || '--'}</Descriptions.Item>
            <Descriptions.Item label="手机号码">{info?.phoneNumber || '--'}</Descriptions.Item>

            {
              isType() == 0 &&
              <Descriptions.Item label="家庭住址">{info?.residentialAddress + ',' + info?.detailAddress}</Descriptions.Item>
            }
          </Descriptions>
          <Divider></Divider>
          {
            info?.auditStatus != '0' &&
            (
              <>
                <h3 className='mt-32'>审核记录</h3>
                <Divider></Divider>
                <Table
                  rowKey="id"
                  columns={columns}
                  dataSource={info?.vehicleAuditRecordLists}
                  pagination={false}
                >
                </Table>
              </>
            )
          }
        </div>


      </PageHeaderWrapper>

      <Row
        justify="space-between"
        align="middle"
        className='mt-32'
      >
        <Col span={3}>
          {
            getPagePrev('first') ?
              <Link
                to={`/approveManage/infoChange/infoChangeDetail/${getId('first')}`
                }>
                <LeftOutlined />
              上一条
              </Link>
              :
              <Text className='font-size-16 cur-not' disabled><LeftOutlined />上一条</Text>
          }
        </Col>
        {
          info?.auditStatus === '0' &&
          <Col span={12}>
            <div className='inline text-center'>
              <AuditPass
                getPagePrev={getPagePrev}
                getId={getId}
                getInfo={getInfo}
                id={match.params.id}
                changeId={info?.changeId}
                history={history}
              />
              <AuditBy
                id={match.params.id}
                getInfo={getInfo}
                getPagePrev={getPagePrev}
                getId={getId}
                history={history}
                changeId={info?.changeId}
              />
            </div>
          </Col>
        }
        <Col span={3} style={{ textAlign: 'right' }}>
          {getPagePrev('last')
            ? <Link to={`/approveManage/infoChange/infoChangeDetail/${getId('last')}`}> 下一条 <RightOutlined /> </Link>
            : <Text className='font-size-16 cur-not' disabled>下一条 <RightOutlined /></Text>
          }
        </Col>
      </Row>
    </div >

  );
}

const stateToProps = (state) => ({
  infoChangeList: state.infoChangeList
})
const dispatchToProps = {
  getInfo: (payload) => ({
    type: 'infoChangeList/getInfo',
    payload: payload
  })
}
export default connect(
  stateToProps,
  dispatchToProps,
)(Detail);
