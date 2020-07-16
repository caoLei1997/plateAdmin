import React, { Component } from 'react';
import styles from './index.less'
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Descriptions } from 'antd';

class index extends Component {
    render() {
        return (
            <PageHeaderWrapper className={styles.main}>
                <div className='record-container'>
                    <div className="record-status">
                        <em>审核状态：</em>
                        待审核
                    </div>
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

                    {/* 图片 */}
                    <div className='record-focus-map'>

                    </div>
                </div>



            </PageHeaderWrapper>
        );
    }
}

export default index;
