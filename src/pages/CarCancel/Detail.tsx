import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Link } from 'umi';
import { connect } from 'dva'
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
import moment from 'moment';
import styles from './style.less';
import AuditPass from './components/AuditPass'
import AuditBy from './components/AuditBy'
import { VehicleReasonStatus, VehicleReason } from '@/globalConstant';

const { Text } = Typography;
const Detail = (props: any) => {
  const { match, carCancel, getInfo, history } = props;
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
      render: approvalResult => approvalResult !== '2'
        ? <div className='font-success'>通过</div>
        : <div className='font-red' > 不通过</div>
    },
    {
      title: '不通过原因',
      dataIndex: 'notPassReason',
      key: 'notPassReason',
    }
  ]
  const { info } = carCancel;
  useEffect(() => {
    getInfo(match.params.id)
  }, [match.params.id])


  const content = {};
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

  const writeReason = (reason?: string) => {
    switch (reason) {
      case VehicleReasonStatus.Scrap:
        return VehicleReason.Scrap
      case VehicleReasonStatus.Stolen:
        return VehicleReason.Stolen
      case VehicleReasonStatus.NewVehicleBack:
        return VehicleReason.NewVehicleBack
      case VehicleReasonStatus.OtherPlace:
        return VehicleReason.OtherPlace
      case VehicleReasonStatus.OldForNew:
        return VehicleReason.OldForNew
      case VehicleReasonStatus.Repeal:
        return VehicleReason.Repeal
      default:
        return ''
    }
  }

  const writeUse = () => {
    switch (info.electrombileUsage) {
      case '0':
        return '自用'
      case '1':
        return '快递'
      case '2':
        return '外卖'
      case '3':
        return '3：其他'
    }
  }

  const reasonImg = (reason) => {
    console.log('reason: ', reason)
    if (reason === VehicleReasonStatus.OtherPlace || reason === VehicleReasonStatus.OldForNew) {
      return <></>
    } else {
      return (
        <Descriptions title="" column={1}>
          <Descriptions.Item label={writeReason(info?.applyReason) + '证明'}>
            <div className={styles.photoContainer}>
              {
                <div className={styles.item}>
                  <Image
                    src={info?.announcementUrl}
                    width={200}
                    height={165}
                  />
                </div>
              }
            </div>
          </Descriptions.Item>
        </Descriptions>
      )
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
          <h3>申请信息</h3>
          <Divider></Divider>
          <Descriptions title="" column={2}>
            <Descriptions.Item label="车牌号">
              {info?.plateNumber}
            </Descriptions.Item>
            <Descriptions.Item label="车辆品牌">
              {info?.brandName}
            </Descriptions.Item>
            <Descriptions.Item label="车辆型号">
              {info?.modelName}
            </Descriptions.Item>
            <Descriptions.Item label="车身颜色">
              {info?.electrombileColor}
            </Descriptions.Item>
            <Descriptions.Item label="整车编码">
              {info?.electrombileNumber}
            </Descriptions.Item>
            <Descriptions.Item label="车辆用途">
              {writeUse()}
            </Descriptions.Item>
            <Descriptions.Item label="姓名">
              {info?.applyUserName}
            </Descriptions.Item>
            <Descriptions.Item label="手机号码">
              {info?.applyPhone}
            </Descriptions.Item>
            <Descriptions.Item label="注销原因">
              {writeReason(info?.applyReason)}
            </Descriptions.Item>
            <Descriptions.Item label="申请日期">
              {moment(info.createdAt).format('YYYY-MM-DD')}
            </Descriptions.Item>
          </Descriptions>
          {/* 车辆照片 */}
          {
            reasonImg(info?.applyReason)
          }
          {
            info?.auditStatus != '0' &&
            (
              <>
                <h3 className='mt-32'>审核记录</h3>
                <Divider></Divider>
                <Table
                  rowKey={"id"}
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
                to={`/approveManage/carCancel/carCancelDetail/${getId('first')}`
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
                id={match.params.id}
                history={history}
              />
              <AuditBy
                id={match.params.id}
                getInfo={getInfo}
                getPagePrev={getPagePrev}
                getId={getId}
                history={history}
              />
            </div>
          </Col>
        }
        <Col span={3} style={{ textAlign: 'right' }}>
          {getPagePrev('last')
            ? <Link to={`/approveManage/carCancel/carCancelDetail/${getId('last')}`}> 下一条 <RightOutlined /> </Link>
            : <Text className='font-size-16 cur-not' disabled>下一条 <RightOutlined /></Text>
          }
        </Col>
      </Row>
    </div>

  );
}
const stateToProps = (state) => ({
  carCancel: state.CarCancel
})
const dispatchToProps = {
  getInfo: (payload) => ({
    type: 'CarCancel/getInfo',
    payload: payload
  })
}
export default connect(
  stateToProps,
  dispatchToProps,
)(Detail);
