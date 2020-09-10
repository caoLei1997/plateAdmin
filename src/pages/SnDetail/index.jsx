import React, { useEffect,useState } from 'react';
import { Table } from 'antd';
import { connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import SnFilter from './components/SnFilter';
const SnDetail = ({ dispatch, snDetail, tableLoading }) => {
    const columns = [
        {
            title: '整车编码',
            dataIndex: 'electrombileNumber',
            key: 'electrombileNumber',
        },
        {
            title: '所属型号',
            dataIndex: 'modelName',
            key: 'modelName',
        },
        {
            title: '审核状态',
            dataIndex: 'approvalStatus',
            key: 'approvalStatus',
            render: (approvalStatus) => {
                if (approvalStatus == 1) return <div className='font-pending'>待审核</div>
                if (approvalStatus == 2) return <div className='font-danger'>未通过</div>
                if (approvalStatus == 3) return <div className='font-success'>已通过</div>
            }
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

    const [size, setSize] = useState(snDetail.pageSize);
    const pagination = {
        total: snDetail.total,
        current: snDetail.pageIndex,
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

    const { content } = snDetail;

    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <SnFilter getList={getList}></SnFilter>
                <Table
                    dataSource={content}
                    columns={columns}
                    pagination={pagination}
                    loading={tableLoading}
                    rowKey='id'
                />
            </div>
        </PageHeaderWrapper>
    );


}

export default connect(
    ({
        snDetail,
        loading
    }) => ({
        snDetail,
        tableLoading: loading.effects['snDetail/reqList']
    })
)(SnDetail);
