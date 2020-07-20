import React, { Component } from 'react';
import styles from './index.less'
import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Descriptions, Divider, Table, Button, Row, Col } from 'antd';
import AuditPass from './components/AuditPass'
import AuditBy from './components/AuditBy'
import defaultImg from '../../assets/default.png'


class index extends Component {
    render() {

        const columns = [
            {
                title: '审核人',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '审核日期',
                dataIndex: 'timer',
                key: 'name',
            },
            {
                title: '审核结果',
                dataIndex: 'result',
                key: 'name',
                render: text => text.result ? <div className='font-success'>通过</div> : <div className='font-red'>不通过</div>,
            },
            {
                title: '不通过原因',
                dataIndex: 'theReason',
                key: 'name',
            }
        ]

        const data = [
            {
                name: '张三',
                timer: '2020-10-12',
                result: 0,
                theReason: '照片不清晰'
            }
        ]
        return (
            <div>
                <PageHeaderWrapper className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.status}>
                            <span>审核状态： </span>
                            <div className="inline" style={{display:'inline-block'}}>
                                <div>待审核</div>
                                <div className='font-success'>通过</div>
                                <div className='font-red'>未通过</div>
                            </div>
                        </div>
                        <h3>车辆信息</h3>
                        <Divider></Divider>
                        <Descriptions title="" column={2}>
                            <Descriptions.Item label="登记序号">Zhou Maomao</Descriptions.Item>
                            <Descriptions.Item label="依据标准">1810000000</Descriptions.Item>
                            <Descriptions.Item label="车辆制造商">Hangzhou, Zhejiang</Descriptions.Item>
                            <Descriptions.Item label="车辆中文商标">empty</Descriptions.Item>
                            <Descriptions.Item label="整车编码"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="车辆型号"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="产品合格证"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="车身长度"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="车身宽度"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="车身高度"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="续航里程"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="整车质量"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="最高设计时速"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="整车编码"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="铭牌固定位置"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="制造日期"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="销售企业名称"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="生产企业名称"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="电机编码"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="车身颜色"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="车辆用途"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="车牌号"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="车牌种类"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="登记日期"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="登记省份"> No. 18</Descriptions.Item>
                            <Descriptions.Item label="发证机关"> No. 18</Descriptions.Item>
                        </Descriptions>

                        {/* 车辆照片 */}
                        <Descriptions title="" column={1}>
                            <Descriptions.Item label="车辆照片">
                                <div className={styles.photoContainer}>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="身份证正面" />
                                        <p>身份证正面</p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="身份证反面" />
                                        <p>身份证反面</p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="右后方45度整车照片" />
                                        <p>右后方45度整车照片</p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="整车编码" />
                                        <p>整车编码</p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="电机编码" />
                                        <p>电机编码</p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="其它1" />
                                        <p>其它1</p>
                                    </div>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="其它2" />
                                        <p>其它2</p>
                                    </div>
                                </div>
                            </Descriptions.Item>

                            <Descriptions.Item label="购车凭证">

                                <div className={styles.photoContainer}>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="身份证正面" />
                                        <p>身份证正面</p>
                                    </div>
                                </div>

                            </Descriptions.Item>

                            <Descriptions.Item label="带牌车辆照片">
                                <div className={styles.photoContainer}>
                                    <div className={styles.item}>
                                        <img src={defaultImg} alt="身份证正面" />
                                        <p>身份证正面</p>
                                    </div>
                                </div>
                            </Descriptions.Item>
                        </Descriptions>
                        <h3>车主信息</h3>
                        <Divider></Divider>
                        <Descriptions title="" column={2}>
                            <Descriptions.Item label="姓名">姓名</Descriptions.Item>
                            <Descriptions.Item label="证件类型">证件类型</Descriptions.Item>
                            <Descriptions.Item label="证件类型">证件号码</Descriptions.Item>
                            <Descriptions.Item label="手机号码">手机号码</Descriptions.Item>
                            <Descriptions.Item label="家庭住址">家庭住址</Descriptions.Item>
                        </Descriptions>

                        <h3>审核记录</h3>
                        <Divider></Divider>
                        <Table columns={columns} dataSource={data}></Table>

                    </div>
                </PageHeaderWrapper>

                <Row justify="space-between" align="middle" className='mt-32'>
                    {/* <Col span={3}>
                        <div> <DoubleLeftOutlined />上一页</div>

                    </Col> */}
                    <Col span={3}>
                        <div>  <LeftOutlined />上一条</div>
                    </Col>

                    <Col span={12}>
                        <div className='inline text-center'>
                            <AuditPass></AuditPass>
                            <AuditBy></AuditBy>
                        </div>
                    </Col>

                    <Col span={3} style={{ textAlign: 'right' }}>
                        <div>下一条 <RightOutlined /></div>
                    </Col>
                    {/* <Col span={3} style={{ textAlign: 'right' }}>
                        <div>下一页<DoubleRightOutlined /></div>
                    </Col> */}
                </Row>
            </div>

        );
    }
}

export default index;
