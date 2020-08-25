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
                        <Form.Item label='整车编码SN' name=''>
                            <Input placeholder='整车编码SN'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='所属型号' name=''>
                            <Input placeholder='批次名称'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='所属状态' name='city'>
                            <Select placeholder='所属状态'>
                                <Select.Option>123</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
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
