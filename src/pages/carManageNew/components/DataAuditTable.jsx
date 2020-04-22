import React from 'react';
import { connect, Link } from 'umi';
import { examineArr } from '@/globalData';
import { Table } from 'antd';

const scroll = { x: 1200 };

const columns = [
    {
        title: '申请日期',
        dataIndex: 'updatedAt',
        key: 'updatedAt'
    },
    {
        title: '次级经销商',
        dataIndex: 'agentOutletsName',
        key: 'agentOutletsName',
    },
    {
        title: '车辆品牌',
        dataIndex: 'brandName',
        key: 'brandName',
    },
    {
        title: '车辆型号',
        dataIndex: 'modelName',
        key: 'modelName',
    },
    {
        title: '整车编码SN',
        dataIndex: 'electrombileNumber',
        key: 'electrombileNumber',
        width: 180,
    },
    {
        title: 'ccc证书编码',
        dataIndex: 'cccCertificateNumber',
        key: 'cccCertificateNumber',
        width: 180,
    },
    {
        title: '审核状态',
        dataIndex: 'auditStatus',
        key: 'auditStatus',
        width: 80,
        render: auditStatus => {
            const active = examineArr.filter(item => item.key === auditStatus) || [];
            return <span className={`font-${active[0].color}`}>{active[0].val}</span>
        }
    },
    {
        title: '审核日期',
        dataIndex: 'auditedAt',
        key: 'auditedAt'
    },
    {
        title: '不通过原因',
        dataIndex: 'notPassReason',
        key: 'notPassReason',
    },
    {
        title: '操作',
        dataIndex: 'id',
        key: 'id',
        render: id => <Link to={`/carmanage/details/${id}`}>查看详情</Link>,
    },
];

const MeansTable = ({ dataAuditList, tableLoading, getList }) => {
    const { total, current, pageSize, list } = dataAuditList;

    const handlePaginationChange = (page) => {
        getList(page);
    }

    const tableProps = {
        rowKey: 'id',
        columns,
        pagination: { total, current, pageSize, onChange: handlePaginationChange },
        loading: tableLoading,
        scroll,
        dataSource: list
    }
    return (
        <div id="components-table-demo-basic">
            <Table {...tableProps} />
        </div>
    )
};

export default connect(({ dataAuditList, loading }) => ({
    dataAuditList,
    tableLoading: loading.effects['dataAuditList/getList']
}))(MeansTable)