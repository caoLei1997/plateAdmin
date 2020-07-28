import React from 'react';
import { Table, Row, Col, Button } from 'antd';
const AuthorityTable = () => {
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
            dataIndex: 'role',
            key: 'role',
        },
    ];


    const handlePaginationChange = (pages) => {

    }


    const pagination = {
        total: 10,
        current: 1,
        pageSize: 10,
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
                    <Button type='primary'>新增</Button>
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
