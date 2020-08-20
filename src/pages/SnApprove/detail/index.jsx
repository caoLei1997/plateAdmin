import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less'
import { Descriptions, Divider, Collapse } from 'antd';
import defaultImg from '../../../assets/default.png'
const { Panel } = Collapse;
const SnApproveDetail = () => {
    return (
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
                        <div>xxxxxxxxxx</div>
                        <div>xxxxxxxxxx</div>
                        <div>xxxxxxxxxx</div>
                        <div>xxxxxxxxxx</div>
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
                    <Panel header="This is panel header 1" key="1">
                        <p>1</p>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>2</p>
                    </Panel>
                </Collapse>
            </div>


        </PageHeaderWrapper>
    );
}

export default SnApproveDetail;
