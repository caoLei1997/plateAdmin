import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import FilterSearch from './components/FilterSearch'
import styles from './index.less'
import { Table } from 'antd';
import { Link, connect } from 'umi';
const columns = [
    {
        title: '申报日期',
        dataIndex: 'applyAt',
        key: 'applyAt',
    },
    {
        title: '品牌厂家',
        dataIndex: 'agentOutletsName',
        key: 'agentOutletsName',
    },
    {
        title: '批次名称',
        dataIndex: 'batchName',
        key: 'batchName',
    },
    {
        title: '批次型号数',
        dataIndex: 'batchModelCount',
        key: 'batchModelCount',
    },
    {
        title: '审核状态',
        dataIndex: 'approvalStatus',
        key: 'approvalStatus',
    },
    {
        title: '审核日期',
        dataIndex: 'approvalAt',
        key: 'approvalAt',
    },
    {
        title: '不通过原因',
        dataIndex: 'notPassReason',
        key: 'notPassReason',
    },
    {
        title: '操作',
        render: () => (<Link to="/catalog/TypeApproval/detail">查看详情</Link>)
    },
];

const dataSource = [
    {
        key: '1',
        createTime: '2020/12/12',

    },
    {
        key: '2',
        createTime: '2020/12/12',
    },
];

const pagination = {
    total: 2,
    current: 1,
    pageSize: '10',
    // onChange: this.handlePaginationChange,
    showTotal: total => `共${total}条`,
    showSizeChanger: true,
    showQuickJumper: true,
    // onShowSizeChange: (current, size) => {
    //     _this.setState({
    //         pageIndex: current,
    //         pageSize: size
    //     })
    // }
}
const TypeApproval = () => {
    return (
        <PageHeaderWrapper className={styles.main}>
            <FilterSearch></FilterSearch>
            <Table
                dataSource={dataSource}
                columns={columns}
                pagination={pagination}
            />
        </PageHeaderWrapper>
    );
}

export default connect(() => { })(TypeApproval);
