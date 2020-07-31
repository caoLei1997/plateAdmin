import React, { useState } from 'react';
import { Table, Row, Col, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddAuthority from '../AddAuthority'
const AuthorityTable = ({ authorityList }) => {
    const { confirm } = Modal;
    // table


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
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '功能权限',
            dataIndex: 'authority',
            key: 'authority',
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                return (<div>
                    {status == 1 ? <a className='font-success'>开启</a> : <a className='font-red'>关闭</a>}
                </div>)
            }
        },
        {
            title: '停用/启用日期',
            dataIndex: 'turnStopDate',
            key: 'turnStopDate',
        },
        {
            title: '操作',
            key: 'action',
            render: (row) => {
                return (
                    <div>
                        <a onClick={() => { handleAdd('edit', row) }} className='mr-8'>编辑</a>
                        {row.status == 1 ? <a onClick={handleStop} className='font-red'>停用</a> : <a onClick={handleStart}>启用</a>}
                    </div>
                )
            }
        }
    ];
    // 操作 关闭
    const handleStop = () => {
        confirm({
            title: '停用',
            content: '停用会导致该管理员不能在登录后台管理系统进行任何管理操作，确认要停用么？',
            okText: '确认',
            cancelText: '取消',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    // 操作 开启
    const handleStart = () => {
        confirm({
            title: '启用',
            content: '启用后该管理员将恢复账号角色对应管理权限，确认要启用吗？',
            cancelText: '取消',
            okText: '确认',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    // 分页
    const handlePaginationChange = (pages) => {

    }

    // 条数
    const [pageSize, setPageSize] = useState(10)
    const [current, setCurrent] = useState(1)

    const pagination = {
        total: 10,
        current: current,
        pageSize: pageSize,

        onChange: handlePaginationChange,
        showTotal: total => `共${total}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        onShowSizeChange: (current, size) => {
            setCurrent(current)
            setPageSize(size)
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
        <div className='mt-32'>
            <Row justify='end'>
                <Col>
                    <Button onClick={() => { handleAdd('add') }} className='btn-green' icon={<PlusOutlined />} type='primary'>新增</Button>
                </Col>
            </Row>
            <div className='mt-16'>
                <Table rowKey='id' dataSource={authorityList.data} columns={columns} pagination={pagination}></Table>
            </div>
            <AddAuthority type={type} isVisible={isVisible} visibleFn={visibleFn} rows={rows}></AddAuthority>
        </div>
    );
}

export default AuthorityTable;
