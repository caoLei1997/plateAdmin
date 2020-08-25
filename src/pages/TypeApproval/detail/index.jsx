import React from 'react';
import { Table, Divider, Descriptions, Select, Form ,Typography,Row,Col } from 'antd'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less'
import defaultImg from '../../../assets/default.png'
import AuditPass from '../components/AuditPass'
import AuditBy from '../components/AuditBy'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
const Text = Typography;

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


const dataTable = [
    {
        auditName: '张三',
        auditedAt: '2020-10-15',
        auditStatus: 1,
        notPassReason: '12321',
        id: 0
    }
]
const TypeApprovalDetail = () => {
    return (
        <div>
            <PageHeaderWrapper className={styles.main}>
                <Descriptions title="" column={1}>
                    <Descriptions.Item label="审核状态">
                        <div className="inline" style={{ display: 'inline-block' }}>
                            <div>待审核</div> <div className='font-success'>通过</div><div className='font-red'>未通过</div>
                        </div>
                    </Descriptions.Item>
                    <Descriptions.Item label="批次名称">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="批次号数">11137</Descriptions.Item>
                </Descriptions>
                <h3>车辆信息</h3>
                <Divider></Divider>
                <Form.Item label="选择型号">
                    <Select defaultValue="TD1033TH" style={{ width: '220px' }}>
                        <Select.Option value="TD1033TH">TD1033TH</Select.Option>
                    </Select>
                </Form.Item>
                <Descriptions title="" column={2}>
                    <Descriptions.Item label="车辆中文商标">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="车辆型号">TD1033TH</Descriptions.Item>
                    <Descriptions.Item label="车身长度">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="车身宽度">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="车身高度">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="续航里程">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="整车质量">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="最高设设计时速">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="整车编码位置">xxxxxxxxx</Descriptions.Item>
                    <Descriptions.Item label="铭牌固定位置">xxxxxxxxx</Descriptions.Item>
                </Descriptions>

                <Descriptions title="" column={1}>
                    <Descriptions.Item label="车辆照片">
                        <div className={styles.photoContainer}>

                            <div className={styles.item}>
                                <img src={defaultImg} alt="车辆正面照" />
                                <p>车辆正面照</p>
                            </div>
                            <div className={styles.item}>
                                <img src={defaultImg} alt="车辆左侧照片" />
                                <p>车辆左侧照片</p>
                            </div>
                            <div className={styles.item}>
                                <img src={defaultImg} alt="右后方45度整车照片" />
                                <p>右后方45度整车照片</p>
                            </div>
                            <div className={styles.item}>
                                <img src={defaultImg} alt="车辆合格证" />
                                <p>车辆合格证</p>
                            </div>
                            <div className={styles.item}>
                                <img src={defaultImg} alt="产品认证证书" />
                                <p>产品认证证书</p>
                            </div>
                            <div className={styles.item}>
                                <img src={defaultImg} alt="其他" />
                                <p>其他</p>
                            </div>
                        </div>
                    </Descriptions.Item>
                </Descriptions>

                <h3 className='mt-32'>审核记录</h3>
                <Divider></Divider>
                <Table rowKey={"id"} columns={columns} dataSource={dataTable}></Table>
            </PageHeaderWrapper>
            <Row justify="space-between" align="middle" className='mt-32'>
                <Col span={3}>
                    {
                        false
                            ? <Text className='link-a'> <LeftOutlined />上一条 </Text>
                            : <Text className='font-size-16' disabled><LeftOutlined />上一条</Text>
                    }
                </Col>
                <Col span={12}>
                    <div className='inline text-center'>
                        <AuditPass recordId={1} ></AuditPass>
                        <AuditBy recordId={1}></AuditBy>
                    </div>
                </Col>
                <Col span={3} style={{ textAlign: 'right' }}>
                    {false
                        ? <Text className='link-a'> 下一条 <RightOutlined /> </Text>
                        : <Text className='font-size-16' disabled>下一条 <RightOutlined /></Text>
                    }
                </Col>
            </Row>
        </div>
    );
}

export default TypeApprovalDetail;
