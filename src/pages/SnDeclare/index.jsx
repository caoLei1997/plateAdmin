import React, { useState, useEffect } from 'react';
import { Table, Modal, List, Input, Form } from 'antd';
import { connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import SnFilter from './components/SnFilter';
import AddExcel from './components/AddExcel'
const SnDeclare = ({ snDeclare, tableLoading, dispatch, listLoading }) => {
    const [batchVisible, setBatchVisible] = useState(false)
    const [id, setId] = useState(null);
    const { Search } = Input;
    const [form] = Form.useForm()

    const columns = [
        {
            title: '申报日期',
            dataIndex: 'applyAt',
            key: 'applyAt',
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
            width: 300
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
        getList({ filter: {} })
    }, [])
    const [size, setSize] = useState(snDeclare.pageSize);
    const pagination = {
        total: snDeclare.total,
        current: snDeclare.pageIndex,
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
        electrombileNumber = '',
        pageIndex = snDeclare.batchPageIndex,
        pageSize = snDeclare.batchPageSize,
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

    // 批次SN数弹出层结束

    // 上传SN申报


    const { content, batchTotal, batchList } = snDeclare;

    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <SnFilter getList={getList}></SnFilter>
                <AddExcel getList={getList}></AddExcel>
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
                    onCancel={() => {
                        setBatchVisible(false)
                        form.resetFields()
                    }}
                    key={id}
                    footer={false}
                >
                    <p>批次SN数：{JSON.stringify(batchTotal)}</p>
                    <Form
                        initialValues={
                            {
                                search: ''
                            }
                        }
                        form={form}
                    >
                        <Form.Item name='search'>
                            <Search
                                placeholder="请输入查询SN数"
                                onSearch={
                                    value => {
                                        console.log(value)
                                        getBatch({ electrombileNumber: value, pageIndex: 1 })
                                    }
                                }
                            />
                        </Form.Item>
                    </Form>

                    {}
                    <List
                        className='mt-16'
                        size="small"
                        pagination={{
                            onChange: pageIndex => {
                                getBatch({ pageIndex })
                            },
                            pageSize: 10,
                            total: JSON.stringify(batchTotal)
                        }}
                        dataSource={batchList}
                        loading={listLoading}
                        renderItem={item => <List.Item>{item.electrombileNumber}</List.Item>}
                    />
                </Modal>
            </div>
        </PageHeaderWrapper>
    );
}

export default connect(
    ({ snDeclare, loading }) => ({
        snDeclare,
        tableLoading: loading.effects['snDeclare/reqList'],
        listLoading: loading.effects['snDeclare/reqBatch']
    })
)(SnDeclare);
