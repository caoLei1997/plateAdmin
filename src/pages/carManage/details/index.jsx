import { Card, Descriptions, Divider, Table, Typography, Row, Col, Skeleton } from 'antd';
import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect, Link } from 'umi';
import { examineArr } from '@/globalData';
import { LOCAL_MEANS_IDS_KEY, LOCAL_MEANS_FILTER } from '@/globalConstant';
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
    key: 'notPassReason'
  }
];

const MeansDetail = ({ dispatch, match, detailState, loading, meansListState,history }) => {
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
    getMeansList();
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

  const judgePageIsDisabled = (type = 'first') => {
    if (type === 'last') {
      const totalPage = Math.ceil(meansListState.total / 10);
      if (meansListState.current >= totalPage) return true;
      return false;
    }
    if (meansListState.current === 1) return true;
    return false;
  }

  const getMeansList = (type) => {
    const pageParam = JSON.parse(sessionStorage.getItem(LOCAL_MEANS_FILTER));

    let { pageIndex } = pageParam;

    if (type === 'first') { pageIndex = pageParam.pageIndex - 1; }
    if (type === 'last') { pageIndex = pageParam.pageIndex + 1; }

    dispatch({
      type: 'meansList/getList',
      payload: { ...pageParam, pageIndex },
      onSuccess: id => {
        if(type){
          history.replace(`/carmanage/details/${id}`);
        }
      }
    })
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
        <div style={{ backgroundColor: '#ffffff', padding: 16 }}><Skeleton active /></div>
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
            {/* <Col span={3}>
              {
                judgePageIsDisabled() ?
                  <Text className='font-size-20' disabled><DoubleLeftOutlined />上一页</Text>
                  :
                  <div className='font-size-20 pointer font-blue' onClick={() => getMeansList('first')}>
                    <DoubleLeftOutlined />上一页</div>
              }
            </Col> */}
            <Col span={3}>
              {judgeIdIsDisabled() ?
                <Text className='font-size-20' disabled><LeftOutlined />上一个</Text>
                :
                <Link className='font-size-20' to={`/carmanage/details/${prevDetail('prev')}`}>
                  <LeftOutlined />上一个
          </Link>
              }
            </Col>
            <Col span={12}>
              {detailState.auditStatus === '待审核' && <div className='inline text-center'>
                <AuditPass params={passParams} callBack={() => getDetails(match.params.id)} />
                <AuditNotPass id={match.params.id} callBack={() => getDetails(match.params.id)} />
              </div>}
            </Col>
            <Col span={3} style={{ textAlign: 'right' }}>
              {judgeIdIsDisabled('last') ?
                <Text className='font-size-20' disabled>下一个<RightOutlined /></Text>
                :
                <Link className='font-size-20' to={`/carmanage/details/${prevDetail('next')}`}>
                  <span>下一个</span><RightOutlined />
                </Link>
              }
            </Col>
            {/* <Col span={3} style={{ textAlign: 'right' }}>
              {judgePageIsDisabled('last') ?
                <Text className='font-size-20' disabled>下一页<DoubleRightOutlined /></Text>
                :
                <div className='font-size-20 pointer font-blue' onClick={() => getMeansList('last')}>
                  <span>下一页</span><DoubleRightOutlined />
                </div>
              }
            </Col> */}
          </Row>
        </div>
      }
    </PageHeaderWrapper>
  );
}

export default connect(({ meansList, meansDetail, loading, login }) => ({
  detailState: meansDetail.data,
  userInfo: login,
  meansListState: meansList,
  loading: loading.effects['meansDetail/getDetail']
}))(MeansDetail);
