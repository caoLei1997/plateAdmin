import React, { Component } from 'react';
import styles from './index.less'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Descriptions, Divider, Table, Button, Row, Col, Typography, Collapse } from 'antd';
import AuditPass from './components/AuditPass'
import AuditBy from './components/AuditBy'
import defaultImg from '../../assets/default.png'

import { connect, Link } from 'umi'

const { Panel } = Collapse;

const Text = Typography


class index extends Component {
    componentDidMount() {
        this.getDetail(this.props.match.params.id)
    }
    getDetail = (id) => {
        let { dispatch, history } = this.props;
        dispatch({
            type: 'recordDetail/getDetail',
            payload: {
                id
            }
        })
        history.replace(`/record/recordDetail/${id}`);
        window.scrollTo(0, 0);

    }
    getPagePrev = (type = 'first') => {
        let { match } = this.props;
        const recordList = JSON.parse(localStorage.getItem('recordList')).data.ids;
        const activeIdIndex = recordList.findIndex(item => item === Number(match.params.id));
        if (type === 'last') {
            if (activeIdIndex === (recordList.length - 1)) return false;
            return true;
        }
        if (activeIdIndex === 0) return false;
        return true;
    }

    toDetail = (type = 'prev') => {
        let { match, dispatch } = this.props;
        const recordList = JSON.parse(localStorage.getItem('recordList')).data.ids;
        const activeIdIndex = recordList.findIndex(item => item === Number(match.params.id));
        let { id } = match.params
        // dispatch({
        //     type: 'recordDetail/getDetail',
        //     payload: {
        //         id
        //     }
        // })
        if (type === 'next') {
            return recordList[activeIdIndex + 1];
        }
        return recordList[activeIdIndex - 1];
    }
    render() {
        const { content, retMsg } = this.props.recordDetail
        const { id } = this.props.match.params

        const filter = val => {
            if (val == 0) return '自用'
            if (val == 1) return '快递'
            if (val == 2) return '外卖'
            if (val == 3) return '其它'
            return ''
        }

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



        if (content) {
            return (
                <div>
                    <PageHeaderWrapper className={styles.main}>
                        <div className={styles.container}>
                            <div className={styles.status}>
                                <span>审核状态： </span>
                                <div className="inline" style={{ display: 'inline-block' }}>
                                    {
                                        content.recordStatus == 2 ? <div>待审核</div> : (content.recordStatus == 4 ? <div className='font-success'>通过</div> : <div className='font-red'>未通过</div>)
                                    }
                                </div>
                            </div>
                            <div className='record-collapse'>
                                <Collapse
                                    accordion={true}
                                    expandIconPosition='right'
                                    ghost
                                >
                                    <Panel className='collapse' header="厂家型号信息" key="1">
                                        <Descriptions title="" column={2}>
                                            <Descriptions.Item label="车辆中文商标"></Descriptions.Item>
                                            <Descriptions.Item label="登记车辆型号序号"></Descriptions.Item>
                                            <Descriptions.Item label="车身长度"></Descriptions.Item>
                                            <Descriptions.Item label="车身宽度"></Descriptions.Item>
                                            <Descriptions.Item label="车身高度"></Descriptions.Item>
                                            <Descriptions.Item label="续航里程"></Descriptions.Item>
                                            <Descriptions.Item label="整车质量"></Descriptions.Item>
                                            <Descriptions.Item label="最高设计时速"></Descriptions.Item>
                                            <Descriptions.Item label="整车编码位置"></Descriptions.Item>
                                            <Descriptions.Item label="铭牌固定位置"></Descriptions.Item>
                                        </Descriptions>
                                        <Descriptions title="" column={1}>
                                            <Descriptions.Item label="车辆照片">
                                                <div className={styles.photoContainer}>
                                                    <div className={styles.item}>
                                                        <img src={content.idCardFrontImageBase64 || defaultImg} alt="身份证正面" />
                                                        <p>身份证正面</p>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <img src={content.idCardEndImageBase64 || defaultImg} alt="身份证反面" />
                                                        <p>身份证反面</p>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <img src={content.electrombileImageBase64 || defaultImg} alt="右后方45度整车照片" />
                                                        <p>右后方45度整车照片</p>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <img src={content.electrombileNumberImageBase64 || defaultImg} alt="整车编码" />
                                                        <p>整车编码</p>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <img src={content.electricNumberImageBase64 || defaultImg} alt="电机编码" />
                                                        <p>电机编码</p>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <img src={content.otherImage1Base64 || defaultImg} alt="其它1" />
                                                        <p>其它1</p>
                                                    </div>
                                                    <div className={styles.item}>
                                                        <img src={content.otherImage2Base64 || defaultImg} alt="其它2" />
                                                        <p>其它2</p>
                                                    </div>
                                                </div>
                                            </Descriptions.Item>
                                        </Descriptions>
                                    </Panel>
                                </Collapse>
                            </div>
                            <Divider></Divider>
                            <h3>车辆信息</h3>
                            <Divider></Divider>
                            <Descriptions title="" column={2}>
                                <Descriptions.Item label="登记序号">{content.number || '--'}</Descriptions.Item>
                                <Descriptions.Item label="依据标准">{(content.standard == 1 ? '符合新标准' : (content.standard == 2 ? '符合旧标准' : '都不符合')) || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车辆制造商">{content.electrombileManufacturer || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车辆中文商标">{content.electrombileChineseTradeMark || '--'}</Descriptions.Item>
                                <Descriptions.Item label="整车编码"> {content.electrombileNumber || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车辆型号"> {content.modelName || '--'}</Descriptions.Item>
                                <Descriptions.Item label="产品合格证"> {content.electrombileCertificate || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车身长度"> {content.electrombileLength || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车身宽度"> {content.electrombileWidth || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车身高度"> {content.electrombileHeight || '--'}</Descriptions.Item>
                                <Descriptions.Item label="续航里程"> {content.enduranceMileage || '--'}</Descriptions.Item>
                                {/* <Descriptions.Item label="整车质量"> {content.codeOnFrame}</Descriptions.Item> */}
                                <Descriptions.Item label="最高设计时速"> {content.maximumDesignedSpeed || '--'}</Descriptions.Item>
                                <Descriptions.Item label="整车编码"> {content.codeOnFrame || '--'}</Descriptions.Item>
                                <Descriptions.Item label="铭牌固定位置"> {content.fixedPositionName || '--'}</Descriptions.Item>
                                <Descriptions.Item label="制造日期"> {content.manufactureDate || '--'}</Descriptions.Item>
                                <Descriptions.Item label="销售企业名称"> {content.saleEnterpriseName || '--'}</Descriptions.Item>
                                <Descriptions.Item label="生产企业名称"> {content.factoryName || '--'}</Descriptions.Item>
                                <Descriptions.Item label="电机编码"> {content.electricNumber || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车身颜色"> {content.electrombileColor || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车辆用途"> {filter(content.electrombileUsage) || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车牌号"> {content.plateNumber || '--'}</Descriptions.Item>
                                <Descriptions.Item label="车牌种类"> {content.plateNumberType == '01' ? '普通电动自行车号牌' : '其他电动车号牌）' || '--'}</Descriptions.Item>
                                <Descriptions.Item label="登记日期"> {content.createAt || '--'}</Descriptions.Item>
                                <Descriptions.Item label="登记省份"> {content.registeredRegionName || '--'}</Descriptions.Item>
                                <Descriptions.Item label="发证机关"> {content.licenselssueAgencyName || '--'}</Descriptions.Item>
                            </Descriptions>

                            {/* 车辆照片 */}
                            <Descriptions title="" column={1}>
                                <Descriptions.Item label="车辆照片">
                                    <div className={styles.photoContainer}>
                                        <div className={styles.item}>
                                            <img src={content.idCardFrontImageBase64 || defaultImg} alt="身份证正面" />
                                            <p>身份证正面</p>
                                        </div>
                                        <div className={styles.item}>
                                            <img src={content.idCardEndImageBase64 || defaultImg} alt="身份证反面" />
                                            <p>身份证反面</p>
                                        </div>
                                        <div className={styles.item}>
                                            <img src={content.electrombileImageBase64 || defaultImg} alt="右后方45度整车照片" />
                                            <p>右后方45度整车照片</p>
                                        </div>
                                        <div className={styles.item}>
                                            <img src={content.electrombileNumberImageBase64 || defaultImg} alt="整车编码" />
                                            <p>整车编码</p>
                                        </div>
                                        <div className={styles.item}>
                                            <img src={content.electricNumberImageBase64 || defaultImg} alt="电机编码" />
                                            <p>电机编码</p>
                                        </div>
                                        <div className={styles.item}>
                                            <img src={content.otherImage1Base64 || defaultImg} alt="其它1" />
                                            <p>其它1</p>
                                        </div>
                                        <div className={styles.item}>
                                            <img src={content.otherImage2Base64 || defaultImg} alt="其它2" />
                                            <p>其它2</p>
                                        </div>
                                    </div>
                                </Descriptions.Item>

                                <Descriptions.Item label="购车凭证">
                                    <div className={styles.photoContainer}>
                                        <div className={styles.item}>
                                            <img src={content.invoiceImageBase64 || defaultImg} alt="购车凭证" />
                                        </div>
                                    </div>
                                </Descriptions.Item>

                                <Descriptions.Item label="带牌车辆照片">
                                    <div className={styles.photoContainer}>
                                        <div className={styles.item}>
                                            <img src={content.licensePlatePhotoBase64 || defaultImg} alt="带牌车辆照片" />
                                        </div>
                                    </div>
                                </Descriptions.Item>
                            </Descriptions>
                            <h3>车主信息</h3>
                            <Divider></Divider>
                            <Descriptions title="" column={2}>
                                <Descriptions.Item label="姓名">{content.userName || '--'}</Descriptions.Item>
                                <Descriptions.Item label="证件类型">{content.certificateType == 0 ? '身份证' : (content.certificateType == 1 ? '护照' : (content.certificateType == 2 ? '港澳通行证' : '军官证')) || '--'}</Descriptions.Item>
                                <Descriptions.Item label="证件号码">{content.certificateNumber || '--'}</Descriptions.Item>
                                <Descriptions.Item label="手机号码">{content.phoneNumber || '--'}</Descriptions.Item>
                                <Descriptions.Item label="家庭住址">{content.detailAddress || '--'}</Descriptions.Item>
                            </Descriptions>
                            <h3>审核记录</h3>
                            <Divider></Divider>
                            <Table rowKey={"id"} columns={columns} dataSource={content.managementPlatformAuditRecordsList}></Table>
                        </div>
                    </PageHeaderWrapper>

                    <Row justify="space-between" align="middle" className='mt-32'>
                        {/* <Text to={`/record/recordDetail/${this.toDetail('prev')}`}> <LeftOutlined />上一条</Text> : */}

                        <Col span={3}>
                            {
                                this.getPagePrev('first') ?
                                    <Text className='link-a' onClick={() => (this.getDetail(this.toDetail('prev')))}> <LeftOutlined />上一条 </Text> :
                                    <Text className='font-size-16' disabled={true}><LeftOutlined />上一条</Text>
                            }
                        </Col>
                        <Col span={12}>
                            {
                                content.recordStatus == 2 && (
                                    <div className='inline text-center'>
                                        <AuditPass recordId={id} ></AuditPass>
                                        <AuditBy recordId={id}></AuditBy>
                                    </div>
                                )
                            }
                        </Col>
                        {/* <Text to={`/record/recordDetail/${this.toDetail('next')}`}>下一条 <RightOutlined /></Text> : */}
                        <Col span={3} style={{ textAlign: 'right' }}>
                            {
                                this.getPagePrev('last') ?
                                    <Text className='link-a' onClick={() => (this.getDetail(this.toDetail('next')))}> 下一条 <RightOutlined /> </Text> :
                                    <Text className='font-size-16' disabled={true}>下一条 <RightOutlined /></Text>
                            }
                        </Col>
                    </Row>
                </div>

            );
        } else {
            return (<div>暂无数据</div>)
        }

    }
}

export default connect(({ recordDetail }) => ({ recordDetail }))(index);
