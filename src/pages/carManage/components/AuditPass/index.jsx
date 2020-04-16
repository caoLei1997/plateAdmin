import { Modal, Button, Form, Input, Typography, Descriptions } from 'antd';
import React, { useState } from 'react';
import { connect } from 'umi';
import { toggleStatusKeyVal } from '@/commonFun';

const { TextArea } = Input;
const { Text, Title } = Typography;

const AuditNotPass = ({ dispatch, userInfo, loading, auditInfo, params, callBack }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModalVisible = visible => {
        setModalVisible(visible);
    }

    const handleBtnClick = () => {
        toggleModalVisible(true);
        dispatch({
            type: 'meansDetailAudit/getPlateAndName',
            payload: {
                id: params.id
            }
        })
    }

    const handleFinish = values => {
        dispatch({
            type: 'meansDetailAudit/pass',
            payload: {
                "id": params.id,
                "name": userInfo.name,
                "phone": userInfo.phone,
                "firstAgentOutletsId": auditInfo.firstAgentOutletsId,
                "firstAgentOutletsName": auditInfo.firstAgentOutletsName,
                "secondaryAgentOutletsId": params.agentOutletsId,
                "secondaryAgentOutletsName": auditInfo.secondaryAgentOutletsName,
                "prefix": auditInfo.plateNumberPrefix,
                "type": params.type,
                "electrombileUsage": params.electrombileUsage,
                "plateNumberCode": values.plateNumber,
                "plateNumber": auditInfo.plateNumberPrefix + values.plateNumber
            },
            onSuccess: () => {
                toggleModalVisible(false);
                callBack();
            }
        })
    }

    const PlateNumberProps = {
        label: '分配号牌：',
        name: 'plateNumber',
        rules: [{ required: true, message: '请输入车牌号' }]
    }

    return (
        <div>
            <Button onClick={handleBtnClick} type="primary" size='large'>审核通过</Button>
            <Modal title='审核通过' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
                <Form name='catalog-manage-modal-add' onFinish={handleFinish}>
                    <Text>{auditInfo.secondaryAgentOutletsName}</Text>
                    <Descriptions className='mt-16'>
                        <Descriptions.Item span={24} label="车牌序号">{auditInfo.plateNumberPrefix}</Descriptions.Item>
                        <Descriptions.Item span={24} label="号牌类型">{params.typeStr}</Descriptions.Item>
                        <Descriptions.Item span={24} label="号牌用途">{params.electrombileUsageStr}</Descriptions.Item>
                    </Descriptions>
                    <Form.Item>
                        <Form.Item name='brandName' {...PlateNumberProps}>
                            <Input placeholder="输入车牌号" />
                        </Form.Item>
                        <Text type="warning">仅输入数字部分</Text>
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

export default connect(({ meansDetailAudit, login, loading }) => ({
    auditInfo: meansDetailAudit.plateAndName,
    userInfo: login,
    loading: loading.effects['meansDetailAudit/pass']
}))(AuditNotPass);