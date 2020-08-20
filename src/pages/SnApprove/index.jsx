import React from 'react';
import { Table } from 'antd';
import { Link, connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import SnFilter from './components/SnFilter';
const SnApprove = () => {

    //      
    // 

    // 

    // 

    // 

    // 

    // 

    // 

    // 

    const columns = [
        {
            title: '申报日期',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: '品牌厂家',
            dataIndex: 'brandManufacturer',
            key: 'brandManufacturer',
        },
        {
            title: '批次名称',
            dataIndex: 'batchName',
            key: 'batchName',
        },
        {
            title: '关联型号数',
            dataIndex: 'relatedNumber',
            key: 'relatedNumber',
        },
        {
            title: '批次SN数',
            dataIndex: 'batchSnNumber',
            key: 'batchSnNumber',
        },
        {
            title: '审核状态',
            dataIndex: 'reviewStatus',
            key: 'reviewStatus',
        },
        {
            title: '审核日期',
            dataIndex: 'reviewTime',
            key: 'reviewTime',
        },
        {
            title: '不通过原因',
            dataIndex: 'reasonFail',
            key: 'reasonFail',
        },
        {
            title: '操作',
            render: () => (<Link to="/catalog/snapprove/detail">查看详情</Link>)
        },
    ];

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
        total: 2,
        current: 1,
        pageSize: '10',
        // onChange: this.handlePaginationChange,
        showTotal: total => `共${total}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        // onShowSizeChange: (current, size) => {
        //     _this.setState({
        //         pageIndex: current,
        //         pageSize: size
        //     })
        // }
    }


    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <SnFilter></SnFilter>
                <Table dataSource={dataSource} columns={columns} pagination={pagination} />
            </div>
        </PageHeaderWrapper>

    );


}

export default SnApprove;
