import React, { useState } from 'react';
import { connect } from 'umi';
import { Input, Table, Button, Typography, Modal, message } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

const { Text, Title } = Typography;
const { Search } = Input;


const ModalPlateSN = (props) => {
    const { dispatch, listState, tableLoading, count, brandId, modelId = '' } = props;
    const { current, pageSize, total, list } = listState;
    const [modalVisible, setModalVisible] = useState(false);
    const [rowKeys, setRowKeys] = useState([]);
    const [keywords, setKeywords] = useState('');

    const rowSelection = {
        onChange: value => {
            setRowKeys(value);
        }
    }

    const getList = (pageIndex, electrombileNumber = '') => {
        dispatch({
            type: 'catalogSNList/getList',
            payload: {
                "pageIndex": pageIndex,
                "pageSize": pageSize,
                "brandId": brandId,
                "modelId": modelId,
                electrombileNumber
            }
        });
    }

    const toggleModalVisible = visible => {
        setModalVisible(visible);
        if (visible) getList(1);
    }

    const handlePaginationChange = (page) => {
        getList(page);
    }

    const batchDel = () => {
        dispatch({
            type: 'catalogSNList/batchDel',
            payload: { idsStr: rowKeys.join(',') },
            onSuccess: () => {
                let pageIndex = current;
                if (current > (total / pageSize)) pageIndex = (total / pageSize);
                getList(pageIndex, keywords);
                message.success(`批量删除成功`);
            }
        })
    }

    const singleDel = (id) => {
        dispatch({
            type: 'catalogSNList/singleDel',
            payload: { id },
            onSuccess: () => {
                let pageIndex = current;
                if (current > (total / pageSize)) pageIndex = Math.ceil(total / pageSize);
                getList(pageIndex, keywords);
                message.success(`删除成功`);
            }
        })
    }


    const columns = [
        { title: '整车编码SN', dataIndex: 'electrombileNumber', key: 'electrombileNumber' },
        {
            title: '操作', dataIndex: 'id', key: 'id', render: (item) => <DeleteFilled onClick={() => { singleDel(item) }} />
        }
    ];

    const tableProps = {
        columns,
        rowSelection,
        dataSource: list,
        rowKey: 'id',
        pagination: { total, current, pageSize, onChange: handlePaginationChange },
        loading: tableLoading
    }

    const handleSearch = value => {
        setKeywords(value);
        getList(1, value);
    }

    return (<div>
        <Text underline><a onClick={() => toggleModalVisible(true)}>{count}</a></Text>
        <Modal destroyOnClose title='整车编码SN' visible={modalVisible} footer={null} onCancel={() => toggleModalVisible(false)}>
            <Title level={4}>SN数：{count}</Title>
            <Search className='mb-16' placeholder='搜索SN' onSearch={handleSearch} enterButton />
            <Button className='mb-16' onClick={batchDel} disabled={rowKeys.length === 0} type="primary" icon={<DeleteFilled />}>批量删除</Button>
            <Table {...tableProps} />
        </Modal>
    </div>)
}

export default connect(({ catalogSNList, loading }) => ({
    listState: catalogSNList,
    tableLoading: loading.effects['catalogSNList/getList'],
}))(ModalPlateSN);