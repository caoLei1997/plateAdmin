import React, { useEffect, useState } from 'react';
import {
    Table,
    Divider,
    Descriptions,
    Select,
    Form,
    Typography,
    Row,
    Col
} from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less'
import defaultImg from '../../../assets/default.png'
import AuditPass from '../components/AuditPass'
import AuditBy from '../components/AuditBy'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Link, connect } from 'umi';
const Text = Typography;
const columns = [
    {
        title: '审核人',
        dataIndex: 'approvalPeople',
        key: 'approvalPeople',
    },
    {
        title: '审核日期',
        dataIndex: 'approvalAt',
        key: 'approvalAt',
    },
    {
        title: '审核结果',
        dataIndex: 'delStatus',
        key: 'delStatus',
        render: delStatus => delStatus == 3
            ? <div className='font-success'>通过</div>
            : (delStatus == 2
                ? <div div className='font-red' > 不通过</div>
                : null)
    },
    {
        title: '不通过原因',
        dataIndex: 'notPassReason',
        key: 'notPassReason',
    }
]

const TypeApprovalDetail = ({ dispatch, match, typeApproval }) => {
    const [modelName, setModelName] = useState(null);
    // 获取页面详情
    const reqDetail = (data) => {
        dispatch({
            type: 'typeApproval/reqDetail',
            payload: {
                ...data
            }
        })
    }
    // 获取型号
    const reqModel = () => {
        dispatch({
            type: 'typeApproval/reqApprovalModel',
            payload: {
                modelBatchId: match.params.id
            }
        })
    }
    useEffect(() => {
        reqDetail({ id: match.params.id, modelName })
        window.scrollTo(0, 0);
    }, [modelName, match.params.id])

    useEffect(() => {
        reqModel()
    }, [])

    const { detailData, detailModelList } = typeApproval;

    // 上下页是否禁用
    const getPagePrev = (type = 'first') => {
        let ids = JSON.parse(window.localStorage.getItem('ids'))
        const activeIdIndex = ids.findIndex(item => item === Number(match.params.id));
        if (type === 'last') {
            if (activeIdIndex === (ids.length - 1)) return false;
            return true;
        }
        if (activeIdIndex === 0) return false;
        return true;
    }

    // 获取上下页ID
    const getId = (type) => {
        let ids = JSON.parse(window.localStorage.getItem('ids'))
        const activeIdIndex = ids.findIndex(item => item === Number(match.params.id));
        if (type === 'first') {
            return activeIdIndex == 0 ? ids[activeIdIndex] : ids[activeIdIndex - 1]
        } else if (type === 'last') {
            return activeIdIndex == ids.length - 1 ? ids[activeIdIndex] : ids[activeIdIndex + 1]
        }
    }

    return (
        <div key={match.params.id}>
            <PageHeaderWrapper className={styles.main}>
                <Descriptions title="" column={1}>
                    <Descriptions.Item label="审核状态">
                        <div className="inline" style={{ display: 'inline-block' }}>
                            {
                                detailData.approvalStatus == 1
                                    ? <div className='font-pending'>待审核</div>
                                    : (detailData.approvalStatus == 2)
                                        ? <div className='font-red'>未通过</div>
                                        : <div className='font-success'>通过</div>
                            }
                        </div>
                    </Descriptions.Item>
                    <Descriptions.Item label="批次名称">{detailData.batchName}</Descriptions.Item>
                    <Descriptions.Item label="批次号数">{detailData.batchModelCount}</Descriptions.Item>
                </Descriptions>
                <h3>车辆信息</h3>
                <Divider></Divider>
                <Form.Item label="选择型号">
                    <Select
                        placeholder='请选择型号'
                        onChange={(val) => { setModelName(val) }}
                        style={{ width: '220px' }}
                    >
                        {
                            detailModelList.map(item => <Select.Option
                                key={item.id}
                                value={item.modelName}
                            >
                                {item.modelName}
                            </Select.Option>)
                        }

                    </Select>
                </Form.Item>
                <Descriptions title="" column={2}>
                    <Descriptions.Item label="车辆中文商标">{detailData.electrombileChineseTradeMark}</Descriptions.Item>
                    <Descriptions.Item label="车辆型号">{detailData.modelName}</Descriptions.Item>
                    <Descriptions.Item label="车身长度">{detailData.electrombileLength}</Descriptions.Item>
                    <Descriptions.Item label="车身宽度">{detailData.electrombileWidth}</Descriptions.Item>
                    <Descriptions.Item label="车身高度">{detailData.electrombileHeight}</Descriptions.Item>
                    <Descriptions.Item label="续航里程">{detailData.enduranceMileage}</Descriptions.Item>
                    <Descriptions.Item label="整车质量">{detailData.totalWeight}</Descriptions.Item>
                    <Descriptions.Item label="最高设设计时速">{detailData.maximumDesignedSpeed}</Descriptions.Item>
                    <Descriptions.Item label="整车编码">{detailData.codeOnFrame}</Descriptions.Item>
                    <Descriptions.Item label="铭牌固定位置">{detailData.fixedPositionName}</Descriptions.Item>
                </Descriptions>

                <Descriptions title="" column={1}>
                    <Descriptions.Item label="车辆照片">
                        <div className={styles.photoContainer}>
                            <div className={styles.item}>
                                <img src={detailData.frontElectricCarImage || defaultImg} alt="车辆正面照" />
                                <p>车辆正面照</p>
                            </div>
                            <div className={styles.item}>
                                <img src={detailData.leftElectricCarImage || defaultImg} alt="车辆左侧照片" />
                                <p>车辆左侧照片</p>
                            </div>
                            <div className={styles.item}>
                                <img src={detailData.rightRearElectricCarImage || defaultImg} alt="右后方45度整车照片" />
                                <p>右后方45度整车照片</p>
                            </div>
                            <div className={styles.item}>
                                <img src={detailData.certificateElectricCarImage || defaultImg} alt="车辆合格证" />
                                <p>车辆合格证</p>
                            </div>
                            <div className={styles.item}>
                                <img src={detailData.productCertificationImage || defaultImg} alt="产品认证证书" />
                                <p>产品认证证书</p>
                            </div>
                            <div className={styles.item}>
                                <img src={detailData.otherImage || defaultImg} alt="其他" />
                                <p>其他</p>
                            </div>
                        </div>
                    </Descriptions.Item>
                </Descriptions>
                {
                    detailData.approvalStatus != 1 &&
                    (
                        <>
                            <h3 className='mt-32'>审核记录</h3>
                            <Divider></Divider>
                            <Table rowKey={"id"} columns={columns} dataSource={detailData.logs}></Table>
                        </>
                    )
                }
            </PageHeaderWrapper>
            {/* {detailData.approvalStatus} */}
            <Row
                justify="space-between"
                align="middle"
                className='mt-32'
            >
                <Col span={3}>
                    {
                        getPagePrev('first')
                            ? <Link to={`/catalog/typeapproval/detail/${getId('first')}`}><LeftOutlined />上一条 </Link>
                            : <Text className='font-size-16 cur-not' disabled><LeftOutlined />上一条</Text>
                    }
                </Col>
                {
                    detailData.approvalStatus == 1 &&
                    <Col span={12}>
                        <div className='inline text-center'>
                            <AuditPass id={match.params.id} ></AuditPass>
                            <AuditBy id={match.params.id}></AuditBy>
                        </div>
                    </Col>
                }
                <Col span={3} style={{ textAlign: 'right' }}>
                    {getPagePrev('last')
                        ? <Link to={`/catalog/typeapproval/detail/${getId('last')}`}> 下一条 <RightOutlined /> </Link>
                        : <Text className='font-size-16 cur-not' disabled>下一条 <RightOutlined /></Text>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default connect(
    ({ typeApproval }) => ({ typeApproval })
)(TypeApprovalDetail);
