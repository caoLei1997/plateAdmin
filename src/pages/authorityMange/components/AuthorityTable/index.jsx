import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddAuthority from '../AddAuthority'
import { connect } from 'umi'
import { INIT_ADMIN } from '../../../../globalConstant';
const AuthorityTable = ({
    authorityList,
    dispatch,
    getList,
    tableLoading,
}) => {
    const { confirm } = Modal;
    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',

        },
        {
            title: '手机号',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',

        },
        {
            title: '角色',
            dataIndex: 'type',
            key: 'type',
            render: (type, recode) => {
                // 0：超级管理员 1：品牌厂家 2：支队管理员 3：大队管理员
                function translation(type) {
                    if (type == 0) return '超级管理员'
                    if (type == 1) return '品牌厂家'
                    if (type == 2) return '支队管理员'
                    if (type == 3) return '大队管理员'
                }
                return (
                    <div>
                        {translation(type)}
                        <p>
                            {recode.agentOutletsName && `(${recode.agentOutletsName})`}
                        </p>
                    </div>
                )
            }
        },
        {
            title: '功能权限',
            render: (record) => {
                if (record.versionType === 'free') return record.power.split(',')[1]
                else return record.power
            }
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                return (
                    <div>
                        {status == 1
                            ? <a className='font-red'>停用</a>
                            : <a className='font-success'>正常</a>
                        }
                    </div>
                )
            }
        },
        {
            title: '停用/启用日期',
            dataIndex: 'updateTime',
            key: 'updateTime',
        },
        {
            title: '操作',
            key: 'action',
            render: (row) => {
                if (row.phoneNumber == INIT_ADMIN) {
                    return (
                        <div>
                            <a onClick={() => { handleAdd('edit', row) }} className='mr-8'>编辑</a>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <a onClick={() => { handleAdd('edit', row) }} className='mr-8'>编辑</a>
                            {
                                row.status == 1
                                    ? <a onClick={() => { handleStart(row) }}>启用</a>
                                    : <a onClick={() => { handleStop(row) }} className='font-red'>停用</a>
                            }
                        </div>
                    )
                }
            }
        }
    ];
    // 操作 关闭
    const handleStop = ({ id }) => {
        confirm({
            title: '停用',
            content: '停用会导致该管理员不能在登录后台管理系统进行任何管理操作，确认要停用吗？',
            okText: '确认',
            cancelText: '取消',
            onOk() {
                dispatch({
                    type: 'authorityList/modifyStatus',
                    payload: { status: 1, id },
                    onSuccess: () => {
                        getList({})
                    }
                })
            },
        });
    }
    // 操作 开启
    const handleStart = ({ id }) => {
        confirm({
            title: '启用',
            content: '启用后该管理员将恢复账号角色对应管理权限，确认要启用吗？',
            cancelText: '取消',
            okText: '确认',
            onOk: () => {
                dispatch({
                    type: 'authorityList/modifyStatus',
                    payload: { status: 0, id },
                    onSuccess: () => {
                        getList({})
                    }
                })

                // setId(id + new Date().getTime())
            },
        });
    }
    // 条数
    // console.log('page', authorityList);
    const handlePaginationChange = (pageIndex) => {
        getList({
            pageIndex,
            pageSize: size
        })
    }
    const [size, setSize] = useState(authorityList.pageSize);


    // 分页
    const pagination = {
        total: authorityList.total,
        current: authorityList.pageIndex,
        onChange: handlePaginationChange,
        showTotal: total => `共${total}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        pageSize: size,
        onShowSizeChange: (pageIndex, pageSize) => {
            setSize(pageSize)
            getList({
                pageIndex,
                pageSize
            })
        }
    }
    // 弹窗prop
    const [isVisible, setIsVisible] = useState(false);
    const [type, setType] = useState('add');
    const [rows, setRows] = useState(null)
    const visibleFn = () => {
        setIsVisible(false)
    }
    // 新增编辑
    const handleAdd = (type, row = null) => {
        setRows(row)
        setType(type)
        setIsVisible(true)
    }
    return (
        // <div className='mt-32' key={id}>
        <div className='mt-32'>
            <Row justify='end'>
                <Col>
                    <Button
                        onClick={() => { handleAdd('add') }}
                        className='btn-green'
                        icon={<PlusOutlined />}
                        type='primary'
                    >
                        新增
                    </Button>
                </Col>
            </Row>
            <div className='mt-16'>
                <Table
                    loading={tableLoading}
                    rowKey={(record) => record.id}
                    dataSource={authorityList.content}
                    columns={columns}
                    pagination={pagination}>
                </Table>
            </div>
            <AddAuthority
                key={rows ? rows.id + new Date().getTime() : ''}
                type={type}
                isVisible={isVisible}
                visibleFn={visibleFn}
                record={rows}
                getList={getList}
            >
            </AddAuthority>
        </div>
    );
}

export default connect(
    ({
        loading,
        authorityList

    }) => ({
        authorityList,
        tableLoading: loading.effects['authorityList/getList'],
    })
)(AuthorityTable);
