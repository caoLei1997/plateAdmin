import React from 'react';
import { Button, Form, Input } from 'antd';

const FormAddOrEidtBrand = (props) => {
    const { toggleVisible, submitFun, submitLoading, initialValues, placeholder } = props;
    const cancel = () => {
        toggleVisible(false);
    }

    const handleFinish = values => {
        console.log('success', values);
        submitFun(values);
    }

    const handleFinishFailed = err => {
        console.log('fail', err);
    }

    return (<Form name='catalog-manage-modal-add' onFinish={handleFinish} onFinishFailed={handleFinishFailed} initialValues={initialValues}>
        <Form.Item name='brandName' rules={[{ required: true, message: `请输入${placeholder || '品牌名称'}！` }]}>
            <Input placeholder={placeholder || "品牌名称"} />
        </Form.Item>
        <div style={{ textAlign: 'right' }}>
            <Button loading={submitLoading} type="primary" htmlType="submit" style={{ marginRight: 16 }}>确定</Button>
            <Button onClick={cancel}>取消</Button>
        </div>
    </Form>)
}

export default FormAddOrEidtBrand;