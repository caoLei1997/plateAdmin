import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker, Cascader } from 'antd';
import { connect } from 'umi';
import styles from './index.less';
const { RangePicker } = DatePicker;
import { formatData } from '@/commonFun'

const FilterSearch = ({ dispatch, recordList, login, getList }) => {
    const [form] = Form.useForm();
    const onFinish = data => {
        console.log(data);
        let { applyTimeStart, auditTimeStart, city } = data;
        let filter = {
            ...data,
            citys: city ? city[0] : '',
            region: city ? city[1] : '',
            applyTimeStart: applyTimeStart && formatData(applyTimeStart[0]),
            applyTimeEnd: applyTimeStart && formatData(applyTimeStart[1]),
            auditTimeStart: auditTimeStart && formatData(auditTimeStart[0]),
            auditTimeEnd: auditTimeStart && formatData(auditTimeStart[1]),
        }
        getList({ filter,pageIndex:1 })
    };
    useEffect(() => {
        dispatch({
            type: 'recordList/requestGetCity',
            payload: {
                agentOutletsId: login.id
            }
        })
    }, []);

    function displayRender(label) {
        return label.join('-');
    }
    function onChange(value) {
        const [city, region] = value;
        dispatch({
            type: 'recordList/getCityAndRegion',
            payload: {
                "city": city,
                "region": region
            },
        })
    }
    const dateFormat = 'YYYY/MM/DD';
    return (
        <div className={styles.filter} >
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >

                <Row gutter={24}>
                    <Col span={6}>

                        <Form.Item
                            name='city'
                            label='所属大队'
                        >
                            <Cascader
                                options={recordList.city}
                                expandTrigger="hover"
                                displayRender={displayRender}
                                onChange={onChange}
                                placeholder='选择市区'
                            />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item
                            colon={false}
                            label=' '
                            name='agentOutlesId'
                        >
                            <Select
                                placeholder='选择所属大队'
                            >
                                {
                                    recordList.brigadeList.length &&
                                    recordList.brigadeList.map((item, index) => {
                                        return <Option
                                            key={index}
                                            agentOutletsName={item.agentOutlesName}
                                            value={item.agentOutlesId}
                                        >
                                            {item.agentOutlesName}
                                        </Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='登记人' name='userName'>
                            <Input placeholder='登记人'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='证件号码' name='certificateNumber'>
                            <Input placeholder='证件号码'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='手机号码' name='phone'>
                            <Input placeholder='手机号码'></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='车牌号' name='plateNumber'>
                            <Input placeholder='车牌号'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='审核状态' name='recordStatus'>
                            <Select placeholder='审核状态'>
                                <Select.Option value="2">待审核</Select.Option>
                                <Select.Option value="3">不通过</Select.Option>
                                <Select.Option value="4">已通过</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='申请日期' name='applyTimeStart'>
                            <RangePicker format={dateFormat}></RangePicker>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='审核日期' name='auditTimeStart'>
                            <RangePicker format='YYYY/MM/DD'></RangePicker>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col
                        span={24}
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>

    );
};

export default connect(({ recordList, login }) => ({ recordList, login }))(FilterSearch) 
