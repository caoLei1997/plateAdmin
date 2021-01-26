import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import { connect } from 'umi';
import styles from './index.less';
const { RangePicker } = DatePicker;

const FilterSearch = ({ getList }) => {
    const [form] = Form.useForm();
    const onFinish = data => {
        console.log(data);
        getList({
            pageIndex: 1,
            filter: data,
        })
    };

    return (
        <div className={styles.filter} >
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
                initialValues={{
                    electrombileNumber: null,
                    modelName: null,
                    approvalStatus: ''
                }}
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='整车编码SN' name='electrombileNumber'>
                            <Input placeholder='整车编码SN'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='所属型号' name='modelName'>
                            <Input placeholder='批次名称'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='所属状态' name='approvalStatus'>
                            <Select placeholder='所属状态'>
                                <Select.Option value=''>全部</Select.Option>
                                <Select.Option value='1'>待审核</Select.Option>
                                <Select.Option value='2'>未通过</Select.Option>
                                <Select.Option value='3'>已通过</Select.Option>
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
        </div >

    );
};

export default connect(({ recordList, login }) => ({ recordList, login }))(FilterSearch) 
