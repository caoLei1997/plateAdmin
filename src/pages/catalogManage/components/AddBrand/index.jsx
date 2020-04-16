import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { connect } from 'umi';
import { SUPER_UNIQUE } from '@/globalConstant';
import WrappedFormAddBrand from '../FormModalBrand';
import styles from './index.less';

const AddBrand = ({ dispatch, submitting, userInfo }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = visible => {
        setModalVisible(visible);
    }

    const addBrandSubmit = params => {
        const { brandName } = params;
        dispatch({
            type: 'catalogBrand/add',
            payload: { brandName, account: userInfo.phone },
            onSuccess: () => { toggleModalVisible(false) }
        })
    }

    return (<div className={styles.container}>
        {userInfo.id === SUPER_UNIQUE && <div id='catalog-add-brand-container'>
            <div className='add-btn-wrap'>
                <Button type="primary" className='btn-green mb-24' icon={<PlusOutlined />} onClick={() => toggleModalVisible(true)}>新增品牌</Button>
            </div>
            <Modal forceRender destroyOnClose visible={modalVisible} footer={null} title='新增品牌' onCancel={() => toggleModalVisible(false)}>
                <WrappedFormAddBrand toggleVisible={toggleModalVisible} submitFun={addBrandSubmit} submitLoading={submitting} />
            </Modal>
        </div>}
    </div>)
}

export default connect(({ catalogBrand, loading, login }) => ({
    bransState: catalogBrand,
    userInfo: login,
    submitting: loading.effects['catalogBrand/add']
}))(AddBrand);