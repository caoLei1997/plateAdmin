import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

const FormAddBrandModel = (props) => {
    const { toggleVisible, unique, submitFun, brandName } = props;
    const [brandModelName, setBrandModelName] = useState('');

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

    const handleValuesChange = changedValues => {
        setBrandModelName(changedValues.brandModelName);
    }

    const brandModelNameAttr = {
        label: '新增型号：',
        name: 'brandModelName',
        rules: [{ required: true, message: '请输入新增型号！' }, { max: 200, message: '新增型号内容不能超过200字' }]
    }

    return (<Form name={`catalog-manage-add-model${unique}`} onFinish={handleFinish} onFinishFailed={handleFinishFailed} onValuesChange={handleValuesChange}>
        <h4><span>品牌：</span><span>{brandName}</span></h4>
        <Form.Item>
            <Form.Item {...brandModelNameAttr}>
                <TextArea rows={4} placeholder="输入新增型号，以“，”分隔" maxLength={200} />
            </Form.Item>
            <p style={{ textAlign: 'right' }}>
                {brandModelName.length || 0}/200
            </p>
        </Form.Item>
        <div style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>添加</Button>
            <Button onClick={cancel}>取消</Button>
        </div>
    </Form>)
}

export default FormAddBrandModel;