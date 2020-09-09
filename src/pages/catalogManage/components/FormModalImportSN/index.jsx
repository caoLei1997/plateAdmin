import React, { useState } from 'react';
import { connect } from 'umi';
import { Button, Form, Typography, Upload } from 'antd';
import ExcelUtil from '@/utils/excel';

const excelColumns = [
    {
        title: '车辆品牌',
        dataIndex: 'brandName',
        key: 'brandName'
    }, {
        title: '车辆型号',
        dataIndex: 'modelName',
        key: 'modelName',
    },{
        title: '整车编码SN',
        dataIndex: 'electrombileNumber',
        key: 'electrombileNumber',
    },{
        title: '错误原因',
        dataIndex: 'msg',
        key: 'msg',
        className: 'font-red'
    }
]

const { Text } = Typography;

const FormAddOrEidtBrand = ({ toggleVisible, submitFun, loading, snData }) => {
    const [fileList, setFileList] = useState(null);

    const cancel = () => {
        toggleVisible(false);
    }

    const handleFinish = () => {
        if (!fileList || fileList.length === 0) {
            setFileList([]);
            return;
        }
        submitFun(fileList[0]);
    }

    const handleFinishFailed = err => {
        console.log('fail', err);
    }

    const uploadExcelAttr = {
        accept: '.xls',
        onRemove: () => {
            setFileList([]);
        },
        beforeUpload: file => {
            setFileList([file]);
            return false;
        },
        fileList
    }

    const exportExcel = () => {
        ExcelUtil.exportExcel(excelColumns, snData.msg, '经销商SN导入报错表.xlsx')
    }

    return (<Form name='catalog-manage-form-import-SN' onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
        <Form.Item label='上传excel'>
            <Upload {...uploadExcelAttr}>
                <Button>选择文件</Button>
            </Upload>
            {(fileList && fileList.length === 0) && <Text type="danger">请选择excel文件！</Text>}
            <p className='mt-8'><a href='./excelTemplate.xls' download='经销商SN导入模板' className='font-underline'>模板下载</a></p>
        </Form.Item>
        {snData.uploadStatus &&
            <div>
                <Text>导入成功{snData.successTotal}条</Text><br />
                {snData.failTotal > 0 && <h3 className='mt-8 mb-24'><Text type="danger">导入失败{snData.failTotal}条，<Text underline><a onClick={exportExcel}>下载查看</a></Text>&nbsp;&nbsp;查看失败原因</Text></h3>}
            </div>
        }
        <div style={{ textAlign: 'right' }}>
            <Button loading={loading} type="primary" htmlType="submit" style={{ marginRight: 16 }}>导入</Button>
            <Button onClick={cancel}>取消</Button>
        </div>
    </Form>)
}

export default connect(({ catalogImportSN }) => ({ snData: catalogImportSN }))(FormAddOrEidtBrand);