import React, { useEffect, useState } from 'react';
import { connect } from 'umi'
import { Button, Modal, Form, Input } from 'antd'
const { TextArea } = Input;
import { requestAudit } from '@/services/recordDetail'
import { router } from 'umi';
import { notification } from 'antd';
const AuditPass = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { recordDetail, login, dispatch } = props
    const recordList = JSON.parse(localStorage.getItem('recordList'));
    const [form] = Form.useForm();
    const toggleModalVisible = visible => {
        setModalVisible(visible);
    }
    const handlePass = (visible) => {
        // form.resetFields();
        setModalVisible(visible);
    }
    const onFinish = async values => {
        const payload = {
            "id": recordDetail.content.licensedSalesRecordApplyRecordId,
            "plateNumberApplyId": recordDetail.content.id,
            "driverLicenseId": recordDetail.content.driverLicense,
            "notPassReason": values.notPassReason,
            "auditName": login.name,
            "auditPhone": login.phone
        }
        let data = await requestAudit(payload)
        if (data.retCode === '0000') {
            dispatch({
                type: 'recordDetail/getDetail',
                payload: {
                    id: props.recordId
                }
            })




            handlePass()
        } else {
            notification.error(data.retMsg)
        }
    };
    return (
        <div>
            <Button type='danger' onClick={() => { handlePass(true) }}>审核不通过</Button>
            <Modal title='确认审核不通过吗' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
                <p>填写审核理由</p>
                <Form
                    name='catalog-manage-modal-add'
                    onFinish={onFinish}
                    form={form}
                    initialValues={
                        { notPassReason: '' }
                    }
                // onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="notPassReason"
                        rules={[
                            {
                                required: true,
                                message: '请填写审核不通过理由!',
                            },
                        ]}
                        label='原因'
                    >
                        <TextArea
                            rows={4}
                            placeholder="请填写审核不通过理由"
                            maxLength={50}
                        />
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

export default connect(({ recordDetail, login }) => ({ recordDetail, login }))(AuditPass);
