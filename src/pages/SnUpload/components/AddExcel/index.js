import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Modal, Form, Upload, Alert, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';
import ExcelUtil from '@/utils/excel';
import { connect } from 'umi'

const { Text } = Typography;

function AddExcel({
    snDeclare,
    dispatch,
    changeTbaCurrentsCB
}) {
    const [addSnVisible, setAddSnVisible] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [form] = Form.useForm();
    const handleCancel = () => {
        setFileList([]);
        setAddSnVisible(false)
        dispatch({
            type: "snDeclare/clearExcelData"
        })
    }
    const uploadExcelAttr = {
        accept: '.xls,.xlsx',
        showUploadList: true,
        onRemove: (file) => {
            setFileList([]);
            dispatch({
                type: 'snDeclare/clearExcelData'
            })
        },
        beforeUpload: file => {
            setFileList([file]);
            dispatch({
                type: "snDeclare/clearExcelData"
            })
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
                changeTbaCurrentsCB()
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

    const handleAddSnVisible = () => {
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
        <>
            <Button
                type='primary'
                onClick={() => { setAddSnVisible(true) }}
                icon={<PlusOutlined />}
            >
                上传SN批次
            </Button>
            <Modal
                title="上传SN批次"
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
        </>

    )
}

export default connect(
    ({ snDeclare, loading }) => ({
        snDeclare,
    })
)(AddExcel)
