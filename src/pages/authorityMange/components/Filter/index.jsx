import React from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';

const Filter = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const onFinish = () => {

    }
    return (
        <div>
            <Form form={form} name="horizontal_login"  onFinish={onFinish}>
                <Row gutter={20}>
                    <Col span={6}>
                        <Form.Item label='姓名'>
                            <Input placeholder='姓名'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='手机号'>
                            <Input placeholder='手机号' maxLength={11}></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='角色'>
                            <Select placeholder='全部角色'>
                                <Option value="超级管理员">超级管理员</Option>
                                <Option value="品牌厂家">品牌厂家</Option>
                                <Option value="支队管理员">支队管理员</Option>
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
