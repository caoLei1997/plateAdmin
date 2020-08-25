import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styles from './index.less'
import { Descriptions, Divider, Collapse, Row, Col, Typography, Table, List } from 'antd';
import AuditPass from '../components/AuditPass'
import AuditBy from '../components/AuditBy'
import defaultImg from '../../../assets/default.png'
const { Panel } = Collapse;

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

const data = [
    '202028908190',
    '202028908191',
    '202028908192',
    '202028908193',
    '202028908194',
    '202028908194',
    '202028908194',
];
const SnApproveDetail = () => {
    return (
        <div>
            <PageHeaderWrapper className='mains'>
                <div className='descriptions-layout'>
                    <Descriptions title="" column={1}>
                        <Descriptions.Item label="审核状态">
                            <div className="inline" style={{ display: 'inline-block' }}>
                                <div>待审核</div> <div className='font-success'>通过</div><div className='font-red'>未通过</div>
                            </div>
                        </Descriptions.Item>
                        <Descriptions.Item label="批次名称">xxxxxxxxx</Descriptions.Item>
                        <Descriptions.Item label="查验方式">视频查验</Descriptions.Item>
                        <Descriptions.Item label="视频名称">
                            <div>xxxxxxxxxxxxxxxxxxxxx</div>
                            <div>xxxxxxxxxxxxxxxxxxxxx</div>
                            <div>xxxxxxxxxxxxxxxxxxxxx</div>
                            <div>xxxxxxxxxxxxxxxxxxxxx</div>
                        </Descriptions.Item>
                        <Descriptions.Item label="查验审批单">
                            <div className={styles.photoContainer}>
                                <div className={styles.item}>
                                    <img src={defaultImg} alt="审批单照片" />
                                    <p>审批单照片</p>
                                </div>
                            </div>
                        </Descriptions.Item>
                    </Descriptions>
                </div>
                <div>整车编码SN信息</div>
                <Divider></Divider>
                <div className={styles.title}>
                    <span>
                        关联型号:5
                    </span>
                    <span>
                        批次SN数:512
                    </span>
                </div>
                <div className={styles.collapse}>
                    <div className={styles.collapseTitle}>
                        品牌/型号
                    </div>
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header="TZ1336(143)" key="1">
                            <List
                                size="large"
                                dataSource={data}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />
                        </Panel>
                        <Panel header="TZ1336(143)" key="2">
                            <List
                                size="large"
                                dataSource={data}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />
                        </Panel>
                    </Collapse>
                </div>

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

export default SnApproveDetail;
