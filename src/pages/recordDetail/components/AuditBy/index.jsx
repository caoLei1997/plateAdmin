import React, { useState } from 'react';
import { Button, Modal } from 'antd'
const AuditBy = () => {

    const confirmOnOK = () => {

        // Modal.confirm({
        //     title: '审核冲突',
        //     content: '当前帐号已经被审核过，无法重复审核，是否审核下一个帐号？',
        //     okText: '确认',
        //     cancelText: '取消',
        //     onOk: confirmOnOK,
        // })
    }

    const handleBy = () => {
        Modal.confirm({
            title: '审核通过',
            content: '审核通过后该用户的电子行驶证将正式生效，确认要审核通过么',
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

export default AuditBy;
