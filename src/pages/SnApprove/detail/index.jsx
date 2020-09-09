import React, { useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less'
import {
    Descriptions,
    Divider,
    Collapse,
    Row,
    Col,
    Typography,
    Table,
    List,
    Image
} from 'antd';
import AuditPass from '../components/AuditPass'
import AuditBy from '../components/AuditBy'
import { connect, Link } from 'umi';
const { Panel } = Collapse;

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
        dataIndex: 'approvalResult',
        key: 'approvalResult',
        render: approvalResult => approvalResult != '不通过' ? <div className='font-success'>{approvalResult}</div> : <div className='font-red'>{approvalResult}</div>,
    },
    {
        title: '不通过原因',
        dataIndex: 'notPassReason',
        key: 'notPassReason',
    }
]

const SnApproveDetail = ({ dispatch, match, snApprove }) => {
    const id = match.params.id
    const ids = JSON.parse(window.localStorage.getItem('snApprove'))
    const getDetail = () => {
        dispatch({
            type: 'snApprove/reqDetail',
            payload: { id }
        })
    }
    useEffect(() => {
        getDetail()
    }, [id])
    const { detail } = snApprove;
    // 上下页是否禁用
    const getPagePrev = (type = 'first') => {
        let ids = JSON.parse(window.localStorage.getItem('snApprove'))
        const activeIdIndex = ids.findIndex(item => item === Number(id));
        if (type === 'last') {
            if (activeIdIndex === (ids.length - 1)) return false;
            return true;
        }
        if (activeIdIndex === 0) return false;
        return true;
    }

    // 获取上下页ID
    const getId = (type) => {
        let ids = JSON.parse(window.localStorage.getItem('snApprove'))
        const activeIdIndex = ids.findIndex(item => item === Number(id));
        if (type === 'first') {
            return activeIdIndex == 0 ? ids[activeIdIndex] : ids[activeIdIndex - 1]
        } else if (type === 'last') {
            return activeIdIndex == ids.length - 1 ? ids[activeIdIndex] : ids[activeIdIndex + 1]
        }
    }

    return (
        <div key={id}>
            <PageHeaderWrapper className='mains' style={{ paddingBottom: '20px' }}>
                <div className='descriptions-layout'>
                    <Descriptions title="" column={1}>
                        <Descriptions.Item label="审核状态">
                            <div className="inline" style={{ display: 'inline-block' }}>
                                {
                                    detail.approvalStatus == 1
                                        ? <div className='font-pending'>待审核</div>
                                        : (detail.approvalStatus == 2)
                                            ? <div className='font-red'>未通过</div>
                                            : <div className='font-success'>通过</div>
                                }
                            </div>
                        </Descriptions.Item>
                        <Descriptions.Item label="批次名称">{detail.batchName}</Descriptions.Item>

                        <Descriptions.Item label="查验方式">{detail.inspectionType == 1 ? '现场检查' : '视频检查'}</Descriptions.Item>
                        {
                            detail.inspectionType == 1
                                ? (<Descriptions.Item label="查验审批单">
                                    <div className={styles.photoContainer}>
                                        <div className={styles.item}>
                                            {
                                                <Image
                                                    width={200}
                                                    src={detail.inspectionValue}
                                                    fallback="data:image/png;base64,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"

                                                />
                                            }
                                            <p>审批单照片</p>
                                        </div>
                                    </div>
                                </Descriptions.Item>)
                                :
                                <Descriptions.Item label="视频名称">
                                    {
                                        detail.inspectionType == 2 &&
                                        (detail.inspectionValue.split(',').map((item, index) => <div key={index}>{item}</div>))
                                    }
                                </Descriptions.Item>

                        }
                    </Descriptions>
                </div>

                <div>整车编码SN信息</div>
                <Divider></Divider>
                <div className={styles.title}>
                    <span>
                        关联型号:{detail.batchModelCount}
                    </span>
                    <span>
                        批次SN数:{detail.batchSNCount}
                    </span>
                </div>
                {
                    detail.modelSnList &&
                    <div className={`${styles.collapse} mb-16`}>
                        <div className={styles.collapseTitle}>
                            品牌/型号
                         </div>
                        <Collapse>
                            {
                                detail.modelSnList &&
                                detail.modelSnList.length &&
                                detail.modelSnList.map((item, index) =>
                                    (
                                        <Panel
                                            header={`${item.modelName} (${item.electrombileNumberList.length})`}
                                            key={index}
                                        >
                                            <List
                                                size="large"
                                                dataSource={item.electrombileNumberList}
                                                renderItem={item => <List.Item>{item}</List.Item>}
                                            />
                                        </Panel>
                                    )
                                )
                            }
                        </Collapse>
                    </div>
                }
                {
                    detail.approvalStatus != 1 &&
                    (
                        <>
                            <h3 className='mt-32'>审核记录</h3>
                            <Divider></Divider>
                            <Table rowKey={"id"} columns={columns} dataSource={detail.logs}></Table>
                        </>
                    )
                }
            </PageHeaderWrapper>
            <Row
                justify="space-between"
                align="middle"
                className='mt-32'
            >
                <Col span={3}>
                    {
                        getPagePrev('first')
                            ? <Link to={`/catalog/snapprove/detail/${getId('first')}`}><LeftOutlined />上一条 </Link>
                            : <Text className='font-size-16 cur-not' disabled><LeftOutlined />上一条</Text>
                    }
                </Col>
                {
                    detail.approvalStatus == 1 &&
                    <Col span={12}>
                        <div className='inline text-center'>
                            <AuditPass id={id} ></AuditPass>
                            <AuditBy id={id}></AuditBy>
                        </div>
                    </Col>
                }
                <Col span={3} style={{ textAlign: 'right' }}>
                    {getPagePrev('last')
                        ? <Link to={`/catalog/snapprove/detail/${getId('last')}`}> 下一条 <RightOutlined /> </Link>
                        : <Text className='font-size-16 cur-not' disabled>下一条 <RightOutlined /></Text>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default connect(
    ({ snApprove }) => ({ snApprove })
)(SnApproveDetail);
