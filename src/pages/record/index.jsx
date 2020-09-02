import React, { Component } from 'react'
import { Table } from 'antd';
import { Link } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import FilterSearch from './components/Filter';
import styles from './index.less';
import { connect } from 'umi';
class Record extends Component {

    constructor(props) {
        super(props);
        let { recordList } = this.props;
        console.log(recordList);
        this.state = {
            pageSize: recordList.pageSize,
            pageIndex: recordList.current,
            total: recordList.total
        }
    }

    getList = () => {
        let { dispatch } = this.props;
        dispatch({
            type: 'recordList/getList',
            payload: {
                "pageIndex": this.state.pageIndex,
                "pageSize": this.state.pageSize
            },
            onSuccess: (total) => {
                this.setState({
                    total: total,
                })
            }
        })
    }

    handlePaginationChange = (pages) => {
        this.setState({
            pageIndex: pages
        }, () => {
            this.getList()
        })
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
                ellipsis: true,
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
                ellipsis: true,
            },
            {
                title: '车牌号',
                dataIndex: 'plateNumber',
                ellipsis: true,
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
                ellipsis: true,
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
                ellipsis: true,
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
        const { recordList, tableLoading } = this.props
        let _this = this;
        const pagination = {
            total: recordList.total,
            current: this.state.pageIndex,
            pageSize: this.state.pageSize,
            onChange: this.handlePaginationChange,
            showTotal: total => `共${total}条`,
            showSizeChanger: true,
            showQuickJumper: true,
            onShowSizeChange: (current, size) => {
                _this.setState({
                    pageIndex: current,
                    pageSize: size
                })
            }
        }
        return (
            <PageHeaderWrapper className={styles.main}>
                <div>
                    <FilterSearch></FilterSearch>
                    {this.state.current}
                    <Table
                        rowKey={"id"}
                        columns={columns}
                        dataSource={recordList.content}
                        pagination={pagination}
                        loading={tableLoading}
                    />
                </div>
            </PageHeaderWrapper>

        )
    }
}

export default connect(
    ({
        recordList,
        loading
    }) => ({
        recordList,
        tableLoading: loading.effects['recordList/getList']
    })
)(Record) 
