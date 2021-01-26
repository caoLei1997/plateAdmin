import React from 'react';
import { Table, Tag, Button } from 'antd'
const BrandList = () => {

  const columns = [
    {
      title: '商户ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '商户名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '级别',
      dataIndex: 'level',
      key: 'level',
      render: (level: number) => '品牌厂家'
    },
    {
      title: '市区',
      render: ({ city, region }: any) => `${city} ${region}`
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '代理品牌',
      dataIndex: 'brandList',
      key: 'brandList',
      render: (brandList: any) => brandList[0].brandName
    },
    {
      title: '人员数',
      dataIndex: 'employeesNumber',
      key: 'employeesNumber',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        status ?
          <Tag color="red">停用</Tag>
          :
          <Tag color="blue">启用</Tag>
      )
    },
    {
      title: '停用/启用日期',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: '操作',
      render: (record: any) => (
        <>
          <Button type='link'>编辑</Button>
          <Button type='link'>停用</Button>
        </>
      )
    },
  ];

  const data = [{
    address: "灞桥区红旗街办高桥村星星仓库",
    brandList: [{ id: "1", brandName: "小刀" }],
    brandModelVos: null,
    city: "西安市",
    employeesNumber: 6,
    id: 9001,
    level: 11,
    name: "小刀电动车",
    region: "灞桥区",
    status: "0",
    updateTime: "2021-01-26 11:23:54",
  }]

  const paginationChange = (pageIndex: number, pageSize: number) => {

  }

  const pagination = {
    total: 10,
    current: 1,
    pageSize: 20,
    onChange: paginationChange,
    showTotal: total => `共${total}条`,
    showSizeChanger: true,
    showQuickJumper: true,
  }

  return (
    <div className='mt-32'>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={data}
        pagination={pagination}
      />
    </div>
  );
}

export default BrandList;
