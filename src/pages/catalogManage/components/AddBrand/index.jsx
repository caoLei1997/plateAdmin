import React, { useState } from 'react';
import { Button, Modal                                                                               } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import WrappedFormAddBrand from '../FormModalBrand';
import styles from './index.less';

const AddBrand = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = visible => {
        setModalVisible(visible);
    }

    return (<div className={styles.container}><div id='catalog-add-brand-container'>
        <div className='add-btn-wrap'>
<Button type="primary" className='btn-green mb-24' icon={<PlusOutlined />} onClick={() => toggleModalVisible(true)}>
    新增品牌
    </Button>
        </div>
        <Modal forceRender visible={modalVisible} footer={null} title='新增品牌' onCancel={() => toggleModalVisible(false)}>
            <WrappedFormAddBrand toggleVisible={toggleModalVisible} />
        </Modal>
    </div></div>)
}

export default AddBrand;