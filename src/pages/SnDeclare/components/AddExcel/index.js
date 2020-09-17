import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Modal, Form, Upload, Alert, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from '../../index.less';
import ExcelUtil from '@/utils/excel';
import { connect } from 'umi'

const { Text } = Typography;

function AddExcel({ snDeclare, dispatch, getList }) {
    const [addSnVisible, setAddSnVisible] = useState(false);
    const [fileList, setFileList] = useState(null);
    const [form] = Form.useForm();
    const handleCancel = () => {
        setFileList([]);
        setAddSnVisible(false)
        dispatch({
            type: "snDeclare/clearExcelData"
        })
    }
    const uploadExcelAttr = {
        accept: '.xls',
        showUploadList: true,
        onRemove: (file) => {
            setFileList([]);
            dispatch({
                type: 'snDeclare/clearExcelData'
            })
        },
        beforeUpload: file => {
            setFileList([file]);
            return false;
        },
        fileList
    }
    const uploadSnExcel = (file) => {
        const formData = new FormData();
        formData.append('file', file);
        dispatch({
            type: 'snDeclare/reqUpload',
            payload: { formData },
            onSuccess: () => {
                setAddSnVisible(false)
                setFileList([]);
                getList({});
            }
        })
    }
    useEffect(() => {
        return () => {
            dispatch({
                type: "snDeclare/clearExcelData"
            })
        }
    }, [])

    const handleAddSnVisible =  () => {
        if (!fileList || fileList.length === 0) {
            setFileList([]);
            return;
        }
         uploadSnExcel(fileList[0])
    }


    const { errorData, errorNum, uploadStatus } = snDeclare
    const excelColumns = [
        {
            title: '整车编码SN',
            dataIndex: 'electrombileNumber',
            key: 'electrombileNumber'
        }, {
            title: '错误原因',
            dataIndex: 'errorMsg',
            key: 'errorMsg',
        },
        {
            title: '示例',
            dataIndex: 'modelName',
            key: 'modelName',
        }
    ]
    const exportExcel = () => {
        ExcelUtil.exportExcel(excelColumns, errorData, '品牌厂家SN申报模板-报错表.xlsx')
    }
    return (
        <div>
            <Row>
                <Col
                    span={24}
                    style={{ textAlign: 'right', marginBottom: '16px' }}
                >
                    <Button onClick={() => { setAddSnVisible(true) }} icon={<PlusOutlined />}>新增SN申报</Button>
                </Col>
            </Row>
            <Modal
                title="新增SN申报"
                visible={addSnVisible}
                onOk={handleAddSnVisible}
                onCancel={handleCancel}
                okText='导入'
            >
                <Form
                    labelCol={{ span: 5, }}
                    form={form}
                    initialValues={{
                        snFile: null
                    }}
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
                            {(fileList && fileList.length === 0) && <Text type="danger">请选择excel文件！</Text>}
                        </Form.Item>
                        <div className={styles.uploadFile}>
                            <p className='mt-8'>
                                <a href='./snDeclare.xls' download='品牌厂家SN申报模板' className='font-underline'>模板下载</a>
                            </p>
                        </div>
                    </div>
                    {
                        errorNum >= 1 && (
                            <>
                                <Alert
                                    message="提交失败"
                                    type="error"
                                    showIcon
                                />
                                <h3 className='mt-8 mb-24'>
                                    <Text type="danger">导入失败{errorNum}条，
                                         <Text underline>
                                            <a onClick={exportExcel}>下载查看</a>
                                        </Text>
                                         &nbsp;&nbsp;查看失败原因
                                    </Text>
                                </h3>
                            </>
                        )
                    }
                </Form>
            </Modal>
        </div>
    )
}

export default connect(
    ({ snDeclare, loading }) => ({
        snDeclare,
    })
)(AddExcel)
