import React, { useState, useEffect } from 'react';
import { Table, Modal, List, Input, } from 'antd';
import { connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import SnFilter from './components/SnFilter';
import AddExcel from './components/AddExcel'
const SnDeclare = ({ snDeclare, tableLoading, dispatch }) => {
    const [batchVisible, setBatchVisible] = useState(false)
    const [search, setSearch] = useState('');
    const [id, setId] = useState(null);
    const { Search } = Input;

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
            render: (batchSNCount, row) => {
                return <div className='font-pending cur' onClick={() => { handleBatchNumber(row) }}>{batchSNCount}</div>
            }
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
        },
        // {
        //     title: '操作',
        //     render: () => (<a>重新提交</a>)
        // },
    ];
    // tab data
    const getList = ({
        pageIndex = snDeclare.pageIndex,
        pageSize = snDeclare.pageSize,
        filter = snDeclare.filter
    }) => {
        dispatch({
            type: 'snDeclare/reqList',
            payload: {
                pageIndex,
                pageSize,
                filter
            }
        })

    }

    useEffect(() => {
        getList({})
    }, [])

    const pagination = {
        total: snDeclare.total,
        current: snDeclare.pageIndex,
        pageSize: snDeclare.pageSize,
        onChange: (pageIndex) => { getList({ pageIndex }) },
        showTotal: total => `共${total}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        onShowSizeChange: (pageIndex, pageSize) => {
            getList({ pageIndex, pageSize })
        }
    }

    const handleBatchNumber = ({ id }) => {
        setId(id)
        setBatchVisible(true)
    }


    useEffect(() => {
        if (batchVisible) {
            getBatch({})

        }
    }, [batchVisible])


    const getBatch = ({
        electrombileNumber = snDeclare.batchSearch,
        pageIndex = snDeclare.batchPageIndex,
        pageSize = snDeclare.batchPageSizes,
        snBatchId = id
    }) => {
        dispatch({
            type: 'snDeclare/reqBatch',
            payload: {
                snBatchId,
                electrombileNumber,
                pageIndex,
                pageSize
            }
        })
    }

    const handleBatchVisible = () => {
        setBatchVisible(false)
    }
    // tab data结束

    // 批次SN数弹出层
    const data = [
        '202890111',
        '202890111',
        '202890111',
        '202890111',
    ];

    const handleBatchSearch = (e) => {
        console.log(e);
    }
    // 批次SN数弹出层结束

    const { content } = snDeclare;

    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <SnFilter getList={getList}></SnFilter>
                <AddExcel></AddExcel>
                <Table
                    rowKey='id'
                    dataSource={content}
                    columns={columns}
                    pagination={pagination}
                    tableLoading={tableLoading}
                />
                <Modal
                    title="整车编码SN"
                    visible={batchVisible}
                    onOk={handleBatchVisible}
                    onCancel={() => { setBatchVisible(false) }}
                >
                    <p>批次SN数：128</p>
                    <Search
                        placeholder="input search text"
                        onSearch={
                            value => {
                                getBatch({ electrombileNumber: value, pageIndex: 1 })
                            }
                        }
                    />
                    <List
                        className='mt-16'
                        size="small"
                        pagination={{
                            onChange: page => {
                                console.log(page)
                            },
                            pageSize: 10,
                        }}
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Modal>
            </div>
        </PageHeaderWrapper>
    );
}

export default connect(
    ({ snDeclare, loading }) => ({
        snDeclare,
        tableLoading: loading.effects['snDeclare/reqList']
    })
)(SnDeclare);
