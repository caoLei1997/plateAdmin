import React, { Component } from 'react'
import { Table, Space } from 'antd';
import { Link } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import FilterSearch from './components/Filter';
import styles from './index.less';
import { connect } from 'umi';
class Record extends Component {

    constructor(props) {
        super(props)
    }

    getList = () => {
        let { dispatch, recordList } = this.props;
        let { current, pageSize, list } = recordList;
        console.log(1);



        dispatch({
            type: 'recordList/getList',
            payload: {
                "pageIndex": current,
                "pageSize": pageSize,
            },
            onSuccess: (total) => {
                console.log(12);
                
                console.log(total);
                if (total < 1) return;
                const maxCurrent = Math.ceil(total / catalogList.pageSize);
                if (current > maxCurrent) {
                    getList(maxCurrent > 1 ? maxCurrent : 1);
                }
            }
        })

        console.log(list);

    }

    componentDidMount() {
        this.getList()
    }

    render() {
        const columns = [
            {
                title: '申请日期',
                dataIndex: 'applyTime',
                key: 'applyTime',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.createDate - b.createDate,
            },
            {
                title: '归属地',
                dataIndex: 'city',
                key: 'city',
            },
            {
                title: '登记人',
                dataIndex: 'userName',
                key: 'userName',
            },
            {
                title: '证件类型',
                key: 'certificateType',
                render: (data) => {
                    <Space>
                        {
                            data.certificateType === 0 ? '身份证' :
                                (data.certificateType === 1 ? '护照' :
                                    (data.certificateType === 2 ? '港澳通行证' :
                                        '军官证'))
                        }

                    </Space>
                }
            },
            {
                title: '证件号码',
                dataIndex: 'certificateNumber',
                key: 'certificateNumber',
            },
            {
                title: '车牌号',
                dataIndex: 'plateNumber',
                key: 'plateNumber',
            },
            {
                title: '车辆中文商标',
                dataIndex: 'electrombileChineseTradeMark',
                key: 'electrombileChineseTradeMark',
            },
            {
                title: '车辆型号',
                dataIndex: 'modelName',
                key: 'modelName',
            },
            {
                title: '整车编码',
                dataIndex: 'electrombileNumber',
                key: 'electrombileNumber',
            },
            {
                title: '审核状态',
                key: 'recordStatus',
                render: (text, record) => (
                    <Space size="middle">
                        {
                            text.status == 2 ?

                                <div className='font-pending'>待审核</div>
                                :
                                (
                                    text.status == 3 ?
                                        <div className='font-danger'>不通过</div>
                                        :
                                        <div className='font-green'>已通过</div>
                                )
                        }
                    </Space>
                ),
            },
            {
                title: '审核日期',
                dataIndex: 'auditTime',
                key: 'auditTime',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.ReviewTrends - b.ReviewTrends,
            },
            {
                title: '不通过原因',
                dataIndex: 'notPassReason',
                key: 'notPassReason',
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
                id: '1',
                applyTime: '2020-10-12',
                city: '西安市',
                userName: '张三',
                certificateType: 0, // 0身份证 1护照 2港澳通行证 3军官证
                certificateNumber: '2121931988101',
                plateNumber: '陕A38668',
                electrombileChineseTradeMark: '吉利',
                modelName: '轿车',
                electrombileNumber: '123321',
                recordStatus: 0, // 2待审核  3不通过 4已经通过
                auditTime: '2020-10-13',
                notPassReason: '资料不全'
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

export default connect(({ recordList }) => ({ recordList }))(Record) 
