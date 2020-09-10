import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { Link, connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import SnFilter from './components/SnFilter';
const SnApprove = ({ dispatch, snApprove, tableLoading }) => {
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
            title: '关联型号数',
            dataIndex: 'batchModelCount',
            key: 'batchModelCount',
        },
        {
            title: '批次SN数',
            dataIndex: 'batchSNCount',
            key: 'batchSNCount',
        },
        {
            title: '审核状态',
            dataIndex: 'approvalStatus',
            key: 'approvalStatus',
            render: (approvalStatus) => {
                if (approvalStatus == 1) {
                    return <div className='font-pending'>待审核</div>
                } else if (approvalStatus == 2) {
                    return <div className='font-red'>未通过</div>
                } else {
                    return <div className='font-success'>通过</div>
                }
            }
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
            width: 300,
        },
        {
            title: '操作',
            render: ({ id }) => (<Link to={`/catalog/snapprove/detail/${id}`}>查看详情</Link>)
        },
    ];

    const getList = ({
        pageIndex = snApprove.pageIndex,
        pageSize = snApprove.pageSize,
        filter = snApprove.filter
    }) => {
        dispatch({
            type: 'snApprove/reqList',
            payload: {
                filter: { ...filter },
                pageIndex,
                pageSize
            }
        })
    }
    useEffect(() => {
        getList({})
    }, [])

    const { content } = snApprove;
    const [size, setSize] = useState(snApprove.pageSize);
    const pagination = {
        total: snApprove.total,
        current: snApprove.pageIndex,
        pageSize: size,
        onChange: (pageIndex) => {
            getList({ pageIndex, pageSize: size })
        },
        showTotal: total => `共${total}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        onShowSizeChange: (pageIndex, pageSize) => {
            setSize(pageSize)
            getList({ pageIndex, pageSize })
        }
    }
    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <SnFilter getList={getList}></SnFilter>
                <Table
                    rowKey='id'
                    dataSource={content}
                    columns={columns}
                    pagination={pagination}
                    loading={tableLoading}
                />
            </div>
        </PageHeaderWrapper>
    );
}

export default connect(
    ({ snApprove, loading }) => ({
        snApprove,
        tableLoading: loading.effects['snApprove/reqList']
    })
)(SnApprove);
