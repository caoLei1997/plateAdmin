import React, { useState } from 'react';
import { connect } from 'umi';
import { Button, Modal, Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FormModalImportSN from '../FormModalImportSN';
import styles from './index.less';

const ImportSN = (props) => {
    const { dispatch, submitLoading, userInfo, getList } = props;
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = visible => {
        setModalVisible(visible);
        if (!visible) {
            dispatch({
                type: 'catalogImportSN/changeResetStatus'
            })
        }
    }

    const handleUpload = (file) => {
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('account', userInfo.phone);

        dispatch({
            type: 'catalogImportSN/upload',
            payload: {
                formData,
                fileName: file.name
            },
            onSuccess: () => {
                getList();
            }
        })
    }

    return (<div className={styles.container}><div id='catalog-import-SN-container'>
        <div className='add-btn-wrap'>
            <Button type="primary" className='btn-green mb-24' icon={<PlusOutlined />} onClick={() => toggleModalVisible(true)}>导入SN</Button>
        </div>
        <Modal destroyOnClose forceRender visible={modalVisible} footer={null} title='导入SN' onCancel={() => toggleModalVisible(false)}>
            <Alert className='mb-24' message="请先下载模板，按照模板要求填写完成后在下方上传" type="warning" />
            <FormModalImportSN toggleVisible={toggleModalVisible} submitFun={handleUpload} loading={submitLoading} />
        </Modal>
    </div></div>)
}

export default connect(({ login, loading, catalogList }) => ({
    userInfo: login,
    catalogListParams: catalogList,
    submitLoading: loading.effects['catalogImportSN/upload']
}))(ImportSN);