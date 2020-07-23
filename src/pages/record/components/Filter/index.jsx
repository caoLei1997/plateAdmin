import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import { connect } from 'umi';
import styles from './index.less';
const { RangePicker } = DatePicker;

const FilterSearch = ({ dispatch, recordList, login }) => {
    const [form] = Form.useForm();

    const onFinish = data => {
        dispatch({
            type: 'recordList/getList',
            payload: {
                ...data,
                "pageIndex": recordList.current,
                "pageSize": recordList.pageSize,
            },
            onSuccess: () => {
                console.log(1);

            }
        })
    };

    useEffect(() => {
        dispatch({
            type: 'recordList/requestGetCity',
            payload: {
                agentOutletsId: login.id
            }
        })
    }, []);

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
                        <Form.Item label='归属地' name='city'>
                            <Select placeholder='归属地'>
                                {recordList.city.map(item=> <Select.Option key={item.cityId} value={item.label}>{item.value}</Select.Option>)}
                            </Select>
                        </Form.Item>
                    </Col>
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
                                <Select.Option value="2">已审核</Select.Option>
                                <Select.Option value="4">待审核</Select.Option>
                                <Select.Option value="3">不通过</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='申请日期' name='applyTimeStart'>
                            <RangePicker></RangePicker>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='审核日期' name='auditTimeStart'>
                            <RangePicker></RangePicker>
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
