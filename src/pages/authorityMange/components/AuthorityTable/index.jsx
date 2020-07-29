import React from 'react';
import { Table, Row, Col, Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const AuthorityTable = () => {
    const { error,info } = Modal;
    const dataSource = [
        {
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        },
        {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        },
    ];

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '角色',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '功能权限',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '状态',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '停用/启用日期',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '操作',
            key: 'action',
            render: () => (
                <div>
                    <a className='mr-8'>编辑</a>
                    <a onClick={handleStop} className='font-red'>停用</a>
                    <a onClick={handleStart}>启用</a>
                </div>
            )
        },
    ];

    const handleStop = () => {
        error({
            title: '停用',
            content: '停用会导致该管理员不能在登录后台管理系统进行任何管理操作，确认要停用么？',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    const handleStart = () => {
        info({
            title: '启用',
            content: '启用后该管理员将恢复账号角色对应管理权限，确认要启用吗？',
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }


    const handlePaginationChange = (pages) => {

    }


    const pagination = {
        total: 10,
        current: 1,
        pageSize: 10,
        // rowKey:'id',
        onChange: handlePaginationChange,
        showTotal: total => `共${total}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        onShowSizeChange: (current, size) => {
        }
    }
    return (
        <div className='mt-32'>
            <Row justify='end'>
                <Col>
                    <Button className='btn-green' icon={<PlusOutlined />} type='primary'>新增</Button>
                </Col>
            </Row>

            <Row justify='end'>
                <Col span={24}>
                    <div className='mt-32'>
                        <Table dataSource={dataSource} columns={columns} pagination={pagination}></Table>
                    </div>
                </Col>
            </Row>

        </div>
    );
}

export default AuthorityTable;
