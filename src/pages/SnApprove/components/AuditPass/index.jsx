import React, { useEffect, useState } from 'react';
import { connect } from 'umi'
import { Button, Modal, Form, Input } from 'antd'
const { TextArea } = Input;
import { requestAudit } from '@/services/recordDetail'
import { router } from 'umi';
import { notification } from 'antd';
const AuditPass = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [passValue, setPassValue] = useState(0);
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

    const handleChange = e => {
        console.log(e);
        setPassValue(e.notPassReason)

    }
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

                    onValuesChange={(e) => { handleChange(e) }}
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
                            maxLength={30}

                        />
                    </Form.Item>
                    <div style={{ "textAlign": "right", 'margin': '-10px 0 10px' }}>
                        {passValue.length || 0}/30
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <Button
                            onClick={() => toggleModalVisible(false)}
                            style={{ marginRight: 16 }}>
                            取消
                        </Button>
                        <Button type="primary" htmlType="submit" >确定</Button>
                    </div>
                </Form>
            </Modal>
        </div>
    );
}

export default connect(({ recordDetail, login }) => ({ recordDetail, login }))(AuditPass);
