import React, { useState } from 'react';
import { Button, Modal, Alert } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import FormModalImportSN from '../FormModalImportSN';
import styles from './index.less';

const AddBrand = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = visible => {
        setModalVisible(visible);
    }

    return (<div className={styles.container}><div id='catalog-import-SN-container'>
        <div className='add-btn-wrap'>
            <Button type="primary" className='btn-green mb-24' icon={<PlusOutlined />} onClick={() => toggleModalVisible(true)}>导入SN</Button>
        </div>
        <Modal forceRender visible={modalVisible} footer={null} title='导入SN' onCancel={() => toggleModalVisible(false)}>
            <Alert className='mb-24' message="请先下载模板，按照模板要求填写完成后在下方上传" type="warning" />
            <FormModalImportSN toggleVisible={toggleModalVisible} />
        </Modal>
    </div></div>)
}

export default AddBrand;