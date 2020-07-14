import React, { Component } from 'react'
import { Table, Space } from 'antd';

class Record extends Component {
    render() {
        const columns = [
            {
                title: '申请日期',
                dataIndex: 'createDate',
                key: 'createDate',
            },
            {
                title: '归属地',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: '登记人',
                dataIndex: 'regPerson',
                key: 'regPerson',
            },
            {
                title: '证件类型',
                dataIndex: 'IDType',
                key: 'IDType',
            },
            {
                title: '证件号码',
                dataIndex: 'IDNumber',
                key: 'IDNumber',
            },
            {
                title: '车牌号',
                dataIndex: 'carNumber',
                key: 'carNumber',
            },
            {
                title: '车辆中文商标',
                dataIndex: 'trademark',
                key: 'trademark',
            },
            {
                title: '车辆型号',
                dataIndex: 'carType',
                key: 'carType',
            },
            {
                title: '整车编码',
                dataIndex: 'carCode',
                key: 'carCode',
            },
            {
                title: '审核状态',
                dataIndex: 'status',
                key: 'status',
            },
            {
                title: '审核日趋',
                dataIndex: 'ReviewTrends',
                key: 'ReviewTrends',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a>查看详情</a>
                    </Space>
                ),
            },
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1',
            },
        ];

        return (
            <div className='record'>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default Record
