import React, { Component } from 'react'
import { Table, Space } from 'antd';
import { Link } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import FilterSearch from './components/Filter';
import styles from './index.less';

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
                key: 'status',
                render: (text, record) => (
                    <Space size="middle">
                        {
                            text.status == 2 ?
                                <div className='font-green'>已通过</div> :
                                (
                                    text.status == 1 ?
                                        <div className='font-pending'>待审核</div> :
                                        <div className='font-danger'>不通过</div>
                                )
                        }
                    </Space>
                ),
            },
            {
                title: '审核日期',
                dataIndex: 'ReviewTrends',
                key: 'ReviewTrends',
            },
            {
                title: '不通过原因',
                dataIndex: 'fail',
                key: 'fail',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <Link to={`/record/recordDetail`}>查看详情</Link>
                    </Space>
                ),
            },
        ];

        const data = [
            {
                key: '1',
                createDate: '2020-10-12',
                address: '西安市',
                regPerson: '张三',
                IDType: '身份证',
                IDNumber: '2121931988101',
                carNumber: '陕A38668',
                trademark: '吉利',
                carType: '轿车',
                carCode: '123321',
                status: 0, // 0 不通过 1待审核 2已经通过
                ReviewTrends: '2020-10-13',
                fail: '资料不全'
            },

        ];

        return (
            <PageHeaderWrapper className={styles.main}>
                <div>
                    <FilterSearch></FilterSearch>
                    <Table columns={columns} dataSource={data} />
                </div>
            </PageHeaderWrapper>

        )
    }
}

export default Record
