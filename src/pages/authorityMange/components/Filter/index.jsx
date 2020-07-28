import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const Filter = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const onFinish = () => {

    }
    return (
        <div>
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item label='姓名'>
                    <Input placeholder='姓名'></Input>
                </Form.Item>
                <Form.Item label='手机号'>
                    <Input placeholder='手机号' maxLength={11}></Input>
                </Form.Item>
                <Form.Item label='角色'>
                    <Select placeholder='全部角色'>
                        <Option value="超级管理员">超级管理员</Option>
                        <Option value="品牌厂家">品牌厂家</Option>
                        <Option value="支队管理员">支队管理员</Option>
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">查询</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Filter;
