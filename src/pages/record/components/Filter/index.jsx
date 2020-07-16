import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';


import styles from './index.less';
const { RangePicker } = DatePicker;

const FilterSearch = () => {
    const [form] = Form.useForm();
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={styles.filter}>
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='归属地'>
                            <Select defaultValue="全部">
                                <Option value="全部">全部</Option>
                                <Option value="西安市">西安市</Option>
                                <Option value="咸阳">咸阳</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='登记人'>
                            <Input placeholder='登记人'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='证件号码'>
                            <Input placeholder='证件号码'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='手机号码'>
                            <Input placeholder='手机号码'></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='车牌号'>
                            <Input placeholder='车牌号'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='审核状态'>
                            <Select defaultValue="已审核">
                                <Option value="已审核">已审核</Option>
                                <Option value="待审核">待审核</Option>
                                <Option value="不通过">不通过</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='申请日期'>
                            <RangePicker></RangePicker>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='审核日期'>
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

export default FilterSearch
