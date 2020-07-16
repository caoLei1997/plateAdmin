import React, { useEffect, useState } from 'react';

import { Button, Modal, Form, Input } from 'antd'
const { TextArea } = Input;

const AuditPass = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const toggleModalVisible = visible => {
        setModalVisible(visible);
    }

    const handlePass = (visible) => {
        setModalVisible(visible);
    }
    return (
        
        <div>
            <Button type='danger' onClick={() => { handlePass(true) }}>审核不通过</Button>
            <Modal title='确认审核不通过吗' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
                <p>填写审核理由</p>
                <Form name='catalog-manage-modal-add'>
                    <Form.Item name='brandName' label='原因'>
                        <TextArea rows={4} placeholder="请填写审核不通过理由" maxLength={50} />
                    </Form.Item>
                    <div style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit" style={{ marginRight: 16 }}>确定</Button>
                        <Button onClick={() => toggleModalVisible(false)}>取消</Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
}

export default AuditPass;
