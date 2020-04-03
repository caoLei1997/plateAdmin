import React from 'react';
import { Button, Form, Input } from 'antd';

const FormAddOrEidtBrand = ({ toggleVisible }) => {

    const cancel = () => {
        toggleVisible(false);
    }

    const handleFinish = values => {
        console.log('success', values);
    }

    const handleFinishFailed = err => {
        console.log('fail', err);
    }

    return (<Form name='catalog-manage-modal-add' onFinish={handleFinish} onFinishFailed={handleFinishFailed} >
        <Form.Item name='brandName' rules={[{ required: true, message: '请输入品牌名称！' }]}>
            <Input placeholder="品牌名称" />
        </Form.Item>
        <div style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>添加</Button>
            <Button onClick={cancel}>取消</Button>
        </div>
    </Form>)
}

export default FormAddOrEidtBrand;