import React from 'react';
import { Table, Row, Col, Button } from 'antd';
import { Link, connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import SnFilter from './components/SnFilter';
import { PlusOutlined } from '@ant-design/icons';
const SnApprove = () => {
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
