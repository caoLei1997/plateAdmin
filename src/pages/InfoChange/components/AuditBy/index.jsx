import React from 'react';
import {
    Button,
    Modal,
    message,
} from 'antd'
import { connect } from 'umi'
const AuditBy = (props) => {
    const {
        dispatch,
        id,
        getPagePrev,
        getId,
        history,
        getInfo,
        changeId
    } = props;
    console.log("changeId: ",  changeId )
    const confirmOnOK = () => {
        dispatch({
            type: 'infoChangeList/auditPass',
            payload: {
                id: changeId
            },
            onSuccess: handleSuccess
        })
    }
    const handleSuccess = (data) => {
        message.success(data.retMsg);
        const isNextPage = getPagePrev('last')
        if (isNextPage) {
            history.push(`/approveManage/infoChange/infoChangeDetail/${getId('last')}`)
            window.scrollTo(0, 0);
        } else {
            getInfo(id)
            window.scrollTo(0, 0);
        }
    }
    const handleBy = () => {
        Modal.confirm({
            title: '审核通过',
            content: <div>
                <p>审核通过后该车将立即完成信息变更，确认要审核通过吗？</p>
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
