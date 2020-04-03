import React, { useState } from 'react';
import { Input, Table, Button } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const { Search } = Input;

const columns = [
    { title: '型号', dataIndex: 'model', key: 'model' },
    { title: '操作', dataIndex: 'opera', key: 'opera', render: (input, item) => <DeleteFilled /> }
];

const dataSource = [
    { id: 1, model: 'T1235d' },
    { id: 2, model: 'T1235d' },
    { id: 3, model: 'T1235d' },
    { id: 4, model: 'T1235d' },
    { id: 5, model: 'T1235d' },
    { id: 6, model: 'T1235d' },
]

const TableSearchSN = () => {
    const [rowKeys, setRowKeys] = useState([]);

    const handleSearch = value => {
        console.log(value);
    }

    const rowSelection = {
        onChange: value => { setRowKeys(value); }
    }

    return (
        <div>
            <Search className='mb-16' placeholder='搜索SN' onSearch={handleSearch} enterButton />
            <Button className='mb-16' disabled={rowKeys.length === 0} type="primary" icon={<DeleteFilled />}>批量删除</Button>
            <Table columns={columns} rowSelection={rowSelection} dataSource={dataSource} rowKey='id' />
        </div>
    );
};

export default TableSearchSN;