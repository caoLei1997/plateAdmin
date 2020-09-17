import React, { useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import FilterSearch from './components/FilterSearch'
import styles from './index.less'
import { Table } from 'antd';
import { Link, connect } from 'umi';
const TypeApproval = ({ dispatch, typeApproval }) => {
    // 获取列表数据
    const getList = ({
        pageIndex = typeApproval.pageIndex,
        pageSize = typeApproval.pageSize,
        filter = typeApproval.filter
    }) => {
        dispatch({
            type: 'typeApproval/reqList',
            payload: {
                filter: { ...filter },
                pageIndex,
                pageSize
            }
        })
    }
    useEffect(() => {
        getList({})
        return () => {
            getList({ filter: {},pageIndex:1,pageSize:10 })
        }
    }, [])
    // tab 表头
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
            render: (approvalStatus) => {
                if (approvalStatus == 1) {
                    return <div className='font-pending'>待审核</div>
                } else if (approvalStatus == 2) {
                    return <div className='font-red'>未通过</div>
                } else if (approvalStatus == 3) {
                    return <div className='font-success'>已通过</div>
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
        },
        {
            title: '操作',
            render: ({ id }) => (<Link to={`/catalog/typeapproval/detail/${id}`}>查看详情</Link>)
        },
    ];
    // tab 分页
    const [size, setSize] = useState(typeApproval.pageSize);
    const pagination = {
        total: typeApproval.total,
        current: typeApproval.pageIndex,
        pageSize: size,
        onChange: (pageIndex) => { getList({ pageIndex, pageSize: size }) },
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
            <FilterSearch getList={getList}></FilterSearch>
            <Table
                dataSource={typeApproval.content}
                columns={columns}
                pagination={pagination}
                rowKey='id'
                loading={typeApproval.tableLoadings}
            />
        </PageHeaderWrapper>
    );
}

export default connect(
    ({ typeApproval, loading }) => ({
        typeApproval,
        tableLoading: loading.effects['typeApproval/reqList']
    })
)(TypeApproval);
