import { Modal, Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { connect } from 'umi';

const { TextArea } = Input;

const AuditNotPass = ({ dispatch, userInfo, id, loading, callBack }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = visible => {
        setModalVisible(visible);
    }

    const handleFinish = values => {
        dispatch({
            type: 'meansDetailAudit/notPass',
            payload: {
                id,
                name: userInfo.employeeName,
                phone: userInfo.phone,
                notPassReason: values.reason
            },
            onSuccess: () => {
                toggleModalVisible(false);
                callBack();
            }
        })
    }

    const reasonProps = {
        label: '原因：',
        name: 'reason',
        rules: [{ required: true, message: '请填写审核不通过理由' },{ max: 50, message: '审核不通过理由不能超过50字' }]
    }

    return (
        <div>
            <Button onClick={() => toggleModalVisible(true)} type="primary" danger size='large'>审核不通过</Button>
            <Modal title='确认审核不通过吗' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
                <Form name='catalog-manage-modal-add' onFinish={handleFinish}>
                    <Form.Item name='brandName' {...reasonProps}>
                        <TextArea rows={4} placeholder="请填写审核不通过理由" maxLength={50} />
                    </Form.Item>
                    <div style={{ textAlign: 'right' }}>
                        <Button loading={loading} type="primary" htmlType="submit" style={{ marginRight: 16 }}>确定</Button>
                        <Button onClick={() => toggleModalVisible(false)}>取消</Button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}

export default connect(({ login, loading }) => ({
    userInfo: login,
    loading: loading.effects['meansDetailAudit/notPass']
}))(AuditNotPass);