import { Card, Descriptions, Divider, Table, Typography, Row, Col, Skeleton } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Link } from 'umi';
import { examineArr } from '@/globalData';
import { LOCAL_MEANS_IDS_KEY } from '@/globalConstant';
import PicPreview from '@/components/PicPreview';
import AuditNotPass from '../components/AuditNotPass';
import AuditPass from '../components/AuditPass';
import fieldData from './data';
import styles from './style.less';

const { Text } = Typography;

const progressColumns = [
  {
    title: '审核人',
    dataIndex: 'auditName',
    key: 'auditName'
  },
  {
    title: '审核日期',
    dataIndex: 'auditedAt',
    key: 'auditedAt'
  },
  {
    title: '审核结果',
    dataIndex: 'auditStatus',
    key: 'auditStatus',
    render: auditStatus => {
      const active = examineArr.filter(item => item.key === auditStatus) || [];
      return <span className={`font-${active[0].color}`}>{active[0].val}</span>
    }
  },
  {
    title: '不通过原因',
    dataIndex: 'notPassReason',
    key: 'notPassReason',
    width: 500
  }
];

const MeansDetail = ({ dispatch, match, detailState, loading }) => {
  const listIds = JSON.parse(sessionStorage.getItem(LOCAL_MEANS_IDS_KEY));

  const getDetails = (id) => {
    dispatch({
      type: 'meansDetail/getDetail',
      payload: {
        id
      }
    })
  }

  useEffect(() => {
    getDetails(match.params.id);
  }, [match.params.id])

  const prevDetail = (type = 'prev') => {
    const activeIdIndex = listIds.findIndex(item => item === Number(match.params.id));
    if (type === 'next') {
      return listIds[activeIdIndex + 1];
    }
    return listIds[activeIdIndex - 1];
  }

  const judgeIdIsDisabled = (type = 'first') => {
    const activeIdIndex = listIds.findIndex(item => item === Number(match.params.id));
    if (type === 'last') {
      if (activeIdIndex === (listIds.length - 1)) return true;
      return false;
    }
    if (activeIdIndex === 0) return true;
    return false;
  }

  const passParams = {
    id: match.params.id,
    agentOutletsId: detailState.agentOutletsId,
    plateNumberType: detailState.plateNumberType,
    electrombileUsage: detailState.electrombileUsage,
    electrombileUsageStr: detailState.electrombileUsageStr,
    type: detailState.type,
    typeStr: detailState.typeStr
  }

  return (
    <PageHeaderWrapper>
      {loading ?
        <div style={{backgroundColor: '#ffffff', padding: 16}}><Skeleton active /></div>
        :
        <div>
          <Card bordered={false}>
            {fieldData.map(item => (<div>
              <Descriptions title={item.title}>
                {item.children.length > 0 && item.children.map(sItem => <Descriptions.Item key={sItem.id} label={sItem.label}>{detailState[sItem.key]}</Descriptions.Item>
                )}
              </Descriptions>
              <div style={{ marginBottom: 32 }}>
                <Text className='inline-block top mr-8' style={{ color: 'rgba(0,0,0,0.85)' }}>车辆照片:</Text>
                <div className='inline inline-block text-center' >
                  {detailState.carPic && detailState.carPic.map(sItem => <div className='mr-16'>
                    {sItem.url && <div>
                      <PicPreview layout='inline' src={sItem.url} />
                      <p className='mt-8 font-size-12'>{sItem.title}</p>
                    </div>}
                  </div>)}
                </div>
              </div>
              <Divider style={{ marginBottom: 32 }} />
            </div>))}
            <div className={styles.title}>审核记录</div>
            <Table
              style={{
                marginBottom: 24,
              }}
              pagination={false}
              // loading={loading}
              dataSource={detailState.managementPlatformAuditRecordsList}
              columns={progressColumns}
              rowKey="id"
            />
          </Card>
          <Row justify="space-between" align="middle" className='mt-32'>
            <Col span={4}>
              {judgeIdIsDisabled() ?
                <Text className='font-size-22' disabled><DoubleLeftOutlined />上一个</Text>
                :
                <Link className='font-size-22' to={`/carmanage/details/${prevDetail('prev')}`}>
                  <DoubleLeftOutlined />上一个
          </Link>
              }
            </Col>
            <Col span={16}>
              {detailState.auditStatus === '待审核' && <div className='inline text-center'>
                <AuditPass params={passParams} callBack={() => getDetails(match.params.id)} />
                <AuditNotPass id={match.params.id} callBack={() => getDetails(match.params.id)} />
              </div>}
            </Col>
            <Col span={4} style={{ textAlign: 'right' }}>
              {judgeIdIsDisabled('last') ?
                <Text className='font-size-22' disabled>下一个<DoubleRightOutlined /></Text>
                :
                <Link className='font-size-22' to={`/carmanage/details/${prevDetail('next')}`}>
                  <span>下一个</span><DoubleRightOutlined />
                </Link>
              }

            </Col>
          </Row>
        </div>
      }
    </PageHeaderWrapper>
  );
}

export default connect(({ meansDetail, loading, login }) => ({
  detailState: meansDetail.data,
  userInfo: login,
  loading: loading.effects['meansDetail/getDetail']
}))(MeansDetail);
