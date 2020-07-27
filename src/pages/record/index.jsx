import React, { Component } from 'react'
import { Table } from 'antd';
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
                render: applyTime => {
                    let time = new Date(applyTime);
                    return time.getFullYear() + '年' + time.getMonth() + '月' + time.getDate() + '日'
                },
                sorter: (a, b) => a.applyTime - b.applyTime,
            },
            {
                title: '归属地',
                dataIndex: 'city',
            },
            {
                title: '登记人',
                dataIndex: 'userName',
            },
            {
                title: '证件类型',
                dataIndex: 'certificateType',
                render: (certificateType) => {
                    <div>
                        {
                            certificateType === 0 ? '身份证' :
                                (certificateType === 1 ? '护照' :
                                    (certificateType === 2 ? '港澳通行证' :
                                        '军官证'))
                        }

                    </div>
                }
            },
            {
                title: '证件号码',
                dataIndex: 'certificateNumber',
            },
            {
                title: '车牌号',
                dataIndex: 'plateNumber',
            },
            {
                title: '车辆中文商标',
                dataIndex: 'electrombileChineseTradeMark',
            },
            {
                title: '车辆型号',
                dataIndex: 'modelName',
            },
            {
                title: '整车编码',
                dataIndex: 'electrombileNumber',
            },
            {
                title: '审核状态',
                dataIndex: 'recordStatus',
                render: (recordStatus) => (
                    <div size="middle">
                        {
                            recordStatus == 2 ?
                                <div className='font-pending'>待审核</div>
                                :
                                (
                                    recordStatus == 3 ?
                                        <div className='font-danger'>不通过</div>
                                        :
                                        <div className='font-green'>已通过</div>
                                )
                        }
                    </div>
                ),
            },
            {
                title: '审核日期',
                dataIndex: 'auditTime',
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
            },
            {
                title: '操作',
                dataIndex: 'plateNumberApplyId',
                render: (plateNumberApplyId) => (
                    <div size="middle">
                        <Link to={`/record/recordDetail/${plateNumberApplyId}`}>查看详情</Link>
                    </div>
                ),
            },
        ];

        const { recordList } = this.props

        return (
            <PageHeaderWrapper className={styles.main}>
                <div>
                    <FilterSearch></FilterSearch>
                    <Table rowKey={"id"} columns={columns} dataSource={recordList.content} />
                </div>
            </PageHeaderWrapper>

        )
    }
}

export default connect(({ recordList }) => ({ recordList }))(Record) 