import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import { connect } from 'umi';
import styles from './index.less';
const { RangePicker } = DatePicker;

const FilterSearch = ({ dispatch, recordList, login }) => {
    const [form] = Form.useForm();
    const onFinish = data => {

    };

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
                        <Form.Item label='品牌厂家' name='city'>
                            <Select placeholder='品牌厂家'>
                                <Select.Option>123</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='批次名称' name='userName'>
                            <Input placeholder='批次名称'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='申请日期' name='applyTimeStart'>
                            <RangePicker></RangePicker>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='审核状态' name='city'>
                            <Select placeholder='审核状态'>
                                <Select.Option>123</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='审核日期' name='auditTimeStart'>
                            <RangePicker></RangePicker>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Form>
        </div>

    );
};

export default connect(({ recordList, login }) => ({ recordList, login }))(FilterSearch) 
