import React from 'react';
import { Button, Modal, message } from 'antd'
import { connect } from 'umi'
import router from 'umi';
const AuditBy = ({ dispatch, id }) => {
    const confirmOnOK = () => {
        dispatch({
            type: 'snApprove/reqApproveAgree',
            payload: {
                snBatchId: id
            },
            onSuccess: handleSuccess
        })
    }
    const handleSuccess = (data) => {
        message.success(data.retMsg);
        dispatch({
            type: 'snApprove/reqDetail',
            payload: {
                id
            }
        })
    }


    const handleBy = () => {
        Modal.confirm({
            title: '审核通过',
            content: '审核通过后批次申报所有整车编码SN将可用与带牌销售，确认要审核通过吗？',
            okText: '确认',
            cancelText: '取消',
            onOk: confirmOnOK,
        })
    }
    return (
        <div>
            <Button type='primary' onClick={handleBy}>审核通过</Button>
        </div>
    );
}

export default connect()(AuditBy);
