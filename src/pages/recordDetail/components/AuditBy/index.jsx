import React, { useState } from 'react';
import { Button, Modal } from 'antd'
import { requestAuditBy } from '@/services/recordDetail'
import { connect } from 'umi'
// import router from 'umi/router';
const AuditBy = (props) => {
    const confirmOnOK = () => {
        const { recordDetail, login, dispatch } = props
        const recordList = JSON.parse(localStorage.getItem('recordList'));
        const payload = {
            "id": recordDetail.content.licensedSalesRecordApplyRecordId,
            "plateNumberApplyId": recordDetail.content.id,
            "driverLicenseId": recordDetail.content.driverLicense,
            "auditName": login.name,
            "auditPhone": login.phone
        }
        requestAuditBy(payload).then(res => {
            if (res.retCode === '0000') {
                dispatch({
                    type: 'recordDetail/getDetail',
                    payload: {
                        id: props.recordId
                    }
                })
            }
        })
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

export default connect(({ recordDetail, login }) => ({ recordDetail, login }))(AuditBy);
