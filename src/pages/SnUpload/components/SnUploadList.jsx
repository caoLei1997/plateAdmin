import React, { useEffect } from 'react';
import {
  Button,
  Table,
  Modal,
  Tooltip,
  Alert
} from 'antd'
import { connect } from 'umi'
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { Column } = Table;
const { confirm } = Modal
import ExcelUtil from '@/utils/excel';

const SnUploadList = (props) => {
  const {
    snUpload,
    reqSubUploadList,
    tableLoading,
    uploadDelete,
    deleteConfirmLoading,
    queryCount
  } = props
  const { uploaded } = snUpload;

  useEffect(() => {
    queryCount()
    reqSubUploadList(1,20,true)
  }, []);
  const paginationChange = (pageIndex, pageSize) => {
    reqSubUploadList(pageIndex, pageSize)
  }

  const pagination = {
    total: snUpload.total,
    current: snUpload.pageIndex,
    pageSize: snUpload.pageSize,
    onChange: paginationChange,
    showTotal: total => `共${total}条`,
    showSizeChanger: true,
    showQuickJumper: true,
  }

  const uploadStatus = (status) => {
    switch (status) {
      case 'SUCCESS':
        return <a className='font-success mr-8'>上传成功</a>
      case 'PENDING':
        return <a className='font-yellow mr-8'>上传中</a>
      case 'FAIL':
        return <a className='font-red mr-8'>上传失败</a>
    }
  }

  const uploadListDelete = (id) => {
    confirm({
      title: '删除',
      icon: <ExclamationCircleOutlined />,
      content: '您确定要删除这条数据么？',
      confirmLoading: deleteConfirmLoading,
      onOk() {
        uploadDelete(id)
      },
    });
  }
  const excelColumns = [
    {
      title: '整车编码SN',
      dataIndex: 'electrombileNumber',
      key: 'electrombileNumber'
    }, {
      title: '错误原因',
      dataIndex: 'errorMsg',
      key: 'errorMsg',
    },
    {
      title: '示例',
      dataIndex: 'modelName',
      key: 'modelName',
    }
  ]
  const exportExcel = (errorData) => {
    const data = JSON.parse(errorData)
    console.log(data);
    ExcelUtil.exportExcel(excelColumns, data.errorData, '品牌厂家SN申报模板-报错表.xlsx')
  }

  const uploadOperation = (item) => {
    const data = JSON.parse(item.failReason);
    switch (item.status) {
      case 'PENDING':
        return (
          <Button
            type='link'
            onClick={() => uploadListDelete(item.id)}
          >
            删除
          </Button>
        )
      case 'FAIL':
        return <>
          <Tooltip
            arrowPointAtCenter
            trigger='click'
            color={'#FFF'}
            title={
              <p style={{ color: '#000' }}>
                有{data.errorNum}条错误数据导致上传失败，
                <a onClick={() => exportExcel(item.failReason)}>下载查看</a>
                失败原因后重新上传
              </p>
            }
          >
            <Button type='link'>查看原因</Button>
          </Tooltip>

          <Button
            type='link'
            onClick={() => uploadListDelete(item.id)}
          >
            删除
          </Button>
        </>
    }
  }


  return (
    <>
      <Alert message="正在上传的SN批次是可通过点击【删除】终止上传，上传失败的记录可点击【查看原因】查看失败原因" type="warning" />

      {
        uploaded && (
          <div className='mb-16 mt-16'>
            <span className='mr-8'>
              未完成（批次：{uploaded.failCounts || 0}
            </span>
            <span className='mr-8'>
              SN：{uploaded.failBatchsncounts || 0}）
            </span>
            <span className='mr-8'>
              已完成（批次：{uploaded.successCounts || 0}
            </span>
            <span className='mr-8'>
              SN：{uploaded.successBatchsncounts || 0}）
            </span>
          </div>
        )
      }

      <Table
        rowKey='id'
        dataSource={snUpload.list}
        pagination={pagination}
        loading={tableLoading}
      >
        <Column title='批次名称' dataIndex='batchName' />
        <Column
          title='状态'
          dataIndex='status'
          render={
            (status) => uploadStatus(status)
          }
        />
        <Column
          title='操作'
          render={
            (item) => uploadOperation(item)
          }
        />
      </Table>

    </>
  );
};
const mapStateToProps = ({
  snUpload,
  loading,
}) => ({
  snUpload,
  tableLoading: loading.effects['snUpload/reqSubUploadList'],
  deleteConfirmLoading: loading.effects['snUpload/reqSubUploadListDelete']
})

const mapDispatchToProps = {
  uploadDelete: (payload) => ({
    type: "snUpload/reqSubUploadListDelete",
    payload: payload
  }),
  queryCount: () => ({
    type: "snUpload/reqQueryCount"
  })
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnUploadList);
