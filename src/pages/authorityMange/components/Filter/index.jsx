import React from 'react';
import { Form, Input, Button, Select, Row, Col } from 'antd';
import { connect } from 'umi'

const Filter = ({ dispatch, authorityList, getList }) => {
    const [form] = Form.useForm();
    const { Option } = Select;

    const onFinish = () => {
        const filterValue = form.getFieldsValue()
        getList(filterValue)
    }

    const handleRoleCode = (value) => {
    }
    return (
        <div>
            <Form form={form} name="horizontal_login" onFinish={onFinish}>
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
                        <Form.Item name='Integer role_code' label='角色'>
                            <Select placeholder='全部角色' onChange={handleRoleCode}>
                                {
                                    authorityList.rolesList && authorityList.rolesList.map(item =>
                                        <Option key={item.code} value={item.code + ',' + item.type}>{item.message}</Option>
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

export default connect(({ authorityList }) => ({ authorityList: authorityList }))(Filter);
