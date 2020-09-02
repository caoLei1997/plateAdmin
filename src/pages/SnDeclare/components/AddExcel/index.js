import React, { useState,useEffect } from 'react'
import { Row, Col, Button, Modal, Form, Upload, Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../../index.less';
export default function AddExcel() {
    const [addSnVisible, setAddSnVisible] = useState(false);
    const [fileList, setFileList] = useState(null);
    const [form] = Form.useForm();
    const uploadExcelAttr = {
        accept: '.xls',
        showUploadList: true,
        onRemove: () => {
            setFileList(null);
        },
        beforeUpload: file => {
            setFileList([file]);
            form.setFieldsValue({ snFile: file.name })
            return false;
        }
    }

    const handleAddSnVisible = () => {
        form.validateFields()
        const formValue = form.getFieldsValue();
    }
    return (
        <div>
            <Row>
                <Col
                    span={24}
                    style={{ textAlign: 'right', marginBottom: '16px' }}
                >
                    <Button icon={<PlusOutlined />}>新增SN申报</Button>
                </Col>
            </Row>
            <Modal
                title="新增SN申报"
                visible={addSnVisible}
                onOk={handleAddSnVisible}
                onCancel={() => { setAddSnVisible(false) }}
                okText='导入'
            >
                <Form
                    labelCol={{ span: 5, }}
                    form={form}
                >
                    <Alert className='mb-16' message="请先下载模版，按照模版要求填写完成后在下方上传" type="warning" />
                    <div className={styles.formAddEls} >
                        <Form.Item
                            label='上传excel'
                            name='snFile'
                            rules={[{ required: true, message: '请选择上传文件' }]}
                        >
                            <Upload {...uploadExcelAttr}>
                                <Button>上传文件</Button>
                            </Upload>
                        </Form.Item>
                        <div className={styles.uploadFile}>
                            <p className='mt-8'>
                                <a href='/plateSale/snDeclare.xls' download='SN申报导入模板' className='font-underline'>模板下载</a>
                            </p>
                        </div>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}
