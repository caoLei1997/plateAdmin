import React from 'react';
import { Button, Form, Typography, Upload } from 'antd';

const { Text } = Typography;

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

    const uploadExcelAttr = {
        name: 'updateExcel',
        valuePropName: "fileList",
        rules: [{ required: true, message: '请选择文件' }],
        labelCol: { span: 6 },
        wrapperCol: { span: 18 },
        noStyle: true
    }

    return (<Form name='catalog-manage-form-import-SN' onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
        <Form.Item label='上传excel'>
            <Form.Item {...uploadExcelAttr} >
                <Upload className='inline-block mr-16'>
                    <Button>选择文件</Button>
                </Upload>
            </Form.Item>
            <a href="#" className='font-underline'>模板下载</a>
        </Form.Item>
        <div>
            <Text>导入成功339条</Text><br />
            <h3 className='mt-8 mb-24'><Text type="danger">导入失败339条，<Text underline><a href='#'>下载查看</a></Text>&nbsp;&nbsp;查看失败原因</Text></h3>
        </div>
        <div style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>导入</Button>
            <Button onClick={cancel}>取消</Button>
        </div>
    </Form>)
}

export default FormAddOrEidtBrand;