import React from 'react';
import {
    Button,
    Modal,
    message,
    Checkbox,
} from 'antd'
import { connect } from 'umi'
const AuditBy = ({ dispatch, id, getPagePrev, getId,history }) => {
    const confirmOnOK = () => {
        dispatch({
            type: 'CarCancel/auditPass',
            payload: {
                id: id
            },
            onSuccess: handleSuccess
        })
    }
    const handleSuccess = (data) => {
        message.success(data.retMsg);
        const isNextPage = getPagePrev('last')
        if(isNextPage){
            history.push(`/approveManage/carCancel/carCancelDetail/${getId('last')}`)
            window.scrollTo(0, 0);
        }
    }
    const handleBy = () => {
        Modal.confirm({
            title: '审核通过',
            content: <div>
                <p>审核通过后该车将立即完成注销，确认要审核通过吗？</p>
            </div>
            ,
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
