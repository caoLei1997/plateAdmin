import React, { useEffect } from 'react';
import { Table } from 'antd';
import { connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import SnFilter from './components/SnFilter';
const SnDetail = ({ dispatch, snDetail, tableLoading }) => {
    const columns = [
        {
            title: '整车编码',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: '所属型号',
            dataIndex: 'brandManufacturer',
            key: 'brandManufacturer',
        },
        {
            title: '审核状态',
            dataIndex: 'batchName',
            key: 'batchName',
        },

    ];

    const getList = ({
        pageIndex = snDetail.pageIndex,
        pageSize = snDetail.pageSize,
        filter = snDetail.filter
    }) => {
        dispatch({
            type: 'snDetail/reqList',
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

    const dataSource = [
        {
            key: '1',
            createTime: '2020/12/12',

        },
        {
            key: '2',
            createTime: '2020/12/12',
        },
    ];

    const pagination = {
        total: snDetail.total,
        current: snDetail.pageIndex,
        pageSize: snDetail.pageSize,
        onChange: (pageIndex) => { getList({ pageIndex }) },
        showTotal: total => `共${total}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        onShowSizeChange: (pageIndex, pageSize) => {
            getList({ pageIndex, pageSize })
        }
    }


    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <SnFilter getList={getList}></SnFilter>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    pagination={pagination}
                    loading={tableLoading}
                />
            </div>
        </PageHeaderWrapper>
    );


}

export default connect(
    ({ snDetail,
        loading
    }) => ({
        snDetail,
        tableLoading: loading.effects['snDetail/reqList']
    })
)(SnDetail);
