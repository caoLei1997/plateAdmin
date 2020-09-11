import React from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { connect } from 'umi'

const Filter = ({ getList }) => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const onFinish = () => {
        const filterValue = form.getFieldsValue()
        getList({ filterValue, pageIndex: 1 })
    }
    const rolesList = [
        { label: "全部", value: '' },
        { label: "超级管理员", value: '0' },
        { label: "品牌厂家", value: '1' },
        { label: "支队管理员", value: '2' },
        { label: "大队管理员", value: '3' }
    ]
    return (
        <div>
            <Form
                form={form}
                name="horizontal_login"
                onFinish={onFinish}
            >
                <Row gutter={20}>
                    <Col span={6}>
                        <Form.Item name='name' label='姓名'>
                            <Input placeholder='姓名'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name='phoneNumber' label='手机号'>
                            <Input placeholder='手机号' maxLength={11}></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item name='type' label='角色'>
                            <Select placeholder='全部角色'>
                                {
                                    rolesList.map(item =>
                                        <Option key={item.value} value={item.value}>{item.label}</Option>
                                    )
                                }
                            </Select>
                        </Form.Item>
                    </Col>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">查询</Button>
                    </Form.Item>
                </Row>
            </Form>
        </div>
    );
}

export default Filter;
