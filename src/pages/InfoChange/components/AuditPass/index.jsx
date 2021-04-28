import React, { useState } from 'react';
import { connect } from 'umi'
import {
    Button,
    Modal,
    Form,
    Input,
    message,
    Checkbox,
} from 'antd'
const { TextArea } = Input;

const AuditPass = ({ dispatch, id, getInfo, getPagePrev,getId,history,changeId }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [passValue, setPassValue] = useState(0);
    const [form] = Form.useForm();
    const toggleModalVisible = visible => {
        setModalVisible(visible);
    }
    const handlePass = (visible) => {
        // form.resetFields();
        setModalVisible(visible);
    }
    const onFinish = async values => {
        dispatch({
            type: 'infoChangeList/noPass',
            payload: {
                ...values,
                id: changeId,
                isUpdate: values.isUpdate ? 'NO' : undefined,

            },
            onSuccess: handleSuccess
        })
    };
    const handleSuccess = (data) => {
        message.success(data.retMsg);
        const isNextPage = getPagePrev('last')
        if (isNextPage) {
            history.push(`/approveManage/infoChange/infoChangeDetail/${getId('last')}`)
            window.scrollTo(0, 0);
        }else{
            getInfo(id)
            window.scrollTo(0, 0);
        }

    }
    const handleChange = e => {
        if (e.hasOwnProperty("notPassReason")) {
            setPassValue(e.notPassReason)
        }
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
                    initialValues={{
                        notPassReason: '',
                        isUpdate: false,
                    }}
                    onValuesChange={(e) => { handleChange(e) }}
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
                    <div style={{ "textAlign": "right", 'margin': '-10px 0 10px' }}>
                        {passValue.length || 0}/50
                    </div>
                    <Form.Item
                        name='isUpdate'
                        valuePropName="checked"
                    >
                        <Checkbox>屏蔽该申请</Checkbox>
                    </Form.Item>

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

export default connect()(AuditPass);
