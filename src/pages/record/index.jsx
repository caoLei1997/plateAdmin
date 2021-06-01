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
        this.state = {
            pageSize: recordList.pageSize,
            pageIndex: recordList.current,
            total: recordList.total,
        }
    }
    getList = ({
        pageIndex = this.props.recordList.pageIndex,
        pageSize = this.props.recordList.pageSize,
        filter = this.props.recordList.filter,
    }) => {
        let { dispatch } = this.props;
        dispatch({
            type: 'recordList/getList',
            payload: {
                pageIndex,
                pageSize,
                filter
            },
        })
    }
    handlePaginationChange = (pageIndex) => {
        const { pageSize } = this.state;
        this.getList({ pageIndex, pageSize })
    }
    componentDidMount() {
        this.getList({ filter: {},pageIndex:1,pageSize:10 })
    }

    render() {
        const columns = [
            {
                title: '申请日期',
                dataIndex: 'applyTime',
                render: applyTime => {
                    let time = new Date(applyTime);
                    return time.getFullYear() + '年' + Number(time.getMonth() + 1) + '月' + time.getDate() + '日'
                },
                sorter: (a, b) => a.applyTime - b.applyTime,
            },
           
            {
                title: '登记人',
                dataIndex: 'userName',
                width: 80
            },
            {
                title: '证件类型',
                dataIndex: 'certificateType',
                ellipsis: true,
                render: (certificateType) => {
                    return <div>
                        {
                            certificateType == 0 ? '身份证' :
                                (certificateType == 1 ? '护照' :
                                    (certificateType == 2 ? '港澳通行证' :
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
                render: auditTime => {
                    if (auditTime == '') return '-'
                    let time = new Date(auditTime);
                    return time.getFullYear() + '年' +  Number(time.getMonth() + 1) + '月' + time.getDate() + '日'
                },
                sorter: (a, b) => a.auditTime - b.auditTime,
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
                        <Link to={`recordDetail/${plateNumberApplyId}`}>查看详情</Link>
                    </div>
                ),
            },
        ];
        const { recordList, tableLoading,login } = this.props
        console.log(login);
        let _this = this;
        const pagination = {
            total: recordList.total,
            current: recordList.pageIndex,
            pageSize: recordList.pageSize,
            onChange: this.handlePaginationChange,
            showTotal: total => `共${total}条`,
            showSizeChanger: true,
            showQuickJumper: true,
            onShowSizeChange: (current, size) => {
                _this.setState({
                    pageSize: size
                })
            }
        }
        return (
            <PageHeaderWrapper className={styles.main}>
                <div>
                    <FilterSearch getList={this.getList}></FilterSearch>
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
        loading,
        login
    }) => ({
        recordList,
        login,
        tableLoading: loading.effects['recordList/getList']
    })
)(Record) 
