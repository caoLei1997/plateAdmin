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
        let { current, pageSize } = recordList;
        dispatch({
            type: 'recordList/getList',
            payload: {
                "pageIndex": current,
                "pageSize": pageSize,
            },
            onSuccess: (total) => {
                console.log(12);
            }
        })
        // console.log(list);
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
                render: applyTime => {
                    let time = new Date(applyTime);
                    return time.getFullYear() + '年' + time.getMonth() + '月' + time.getDate() + '日'
                },
                sorter: (a, b) => a.applyTime - b.applyTime,
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
                sorter: (a, b) => a.auditTime - b.auditTime,
                render: auditTime => {
                    let time = new Date(auditTime);
                    return time.getFullYear() + '年' + time.getMonth() + '月' + time.getDate() + '日'
                },
                filterMultiple: false,
            },
            {
                title: '不通过原因',
                dataIndex: 'notPassReason',
                key: 'notPassReason',
            },
            {
                title: '操作',
                dataIndex: 'plateNumberApplyId',
                key: 'plateNumberApplyId',
                render: (plateNumberApplyId) => (
                    <Space size="middle">
                        <Link to={`/record/recordDetail/${plateNumberApplyId}`}>查看详情</Link>
                    </Space>
                ),
            },
        ];

        const { recordList } = this.props

        return (
            <PageHeaderWrapper className={styles.main}>
                <div>
                    <FilterSearch></FilterSearch>
                    <Table columns={columns} dataSource={recordList.content} />
                </div>
            </PageHeaderWrapper>

        )
    }
}

export default connect(({ recordList }) => ({ recordList }))(Record) 
