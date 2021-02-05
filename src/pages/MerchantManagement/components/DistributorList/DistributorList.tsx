import React, {
  useState
} from 'react';
import { statusBrandModalType } from '@/models/exports'
import {
  Tag,
  Form,
  Input,
  Table,
  Modal,
  Button,
  Checkbox,
  TreeSelect,
  Cascader as Cascade
} from 'antd'

const { Item, useForm } = Form;
const { SHOW_CHILD, SHOW_ALL, SHOW_PARENT } = TreeSelect; // 选中后效果 全部子节点显示 全部显示 父节点显示
const DistributorList = (props: any) => {
  const {
    requestGetList,
    distributorState,
    getEditData,
    cityList,
  } = props;
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
      render: (brandList: any) => (
        brandList ? brandList[0].brandName : '--'
      )
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
        status === '1' ?
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
      render: (record: any) => {
        const { id, status } = record;
        return (
          <>
            <Button
              type='link'
              onClick={() => editBrand(id, record)}
            >
              编辑
            </Button>
            {
              status === '1' ?
                <Button type='link' onClick={() => startBrand(id)}>启用</Button>
                :
                <Button type='link' onClick={() => stopBrand(id)}>停用</Button>
            }

          </>
        )
      }
    },
  ];

  const {
    total,
    pageIndex,
    pageSize,
    list,
  } = distributorState
  const paginationChange = (pageIndex: number, pageSize: number) => {
    requestGetList({ pageIndex: pageIndex - 1, pageSize })
  }

  const pagination = {
    total: total,
    current: pageIndex + 1,
    pageSize: pageSize,
    onChange: paginationChange,
    showTotal: total => `共${total}条`,
    showSizeChanger: true,
    showQuickJumper: true,
  }

  const [editRecord, setEditRecord] = useState({

  });
  // const [statusBrandModal, setStatusBrandModal] = useState<statusBrandModalType>({})
  const [editBrandModal, setEditBrandModal] = useState<boolean>(false)
  const editBrand = (id: number, record: any) => {
    form.setFieldsValue({
      name: record.name,
      city: [record.city, record.region],
      address: record.address,
      // brandIds: []
    })
    setEditRecord({
      address: record.address,
      city: record.city,
      name: record.name,
      region: record.region,
      id: record.id,
    })
    setEditBrandModal(true)
    // 获取经销商绑定的品牌信息
    getEditData(id)
  }
  const [form] = useForm();
  const formLayout = {
    labelCol: {
      span: 5
    }
  }
  const initialValues = {
    name: null,
    city: null,
    address: null,
    brandIds: []
  }
  const submitEditBrand = () => {

  }

  const closeEditBrand = () => {
    setEditBrandModal(false)
    form.setFieldsValue({ ...initialValues })
  }

  const [statusBrandModal, setStatusBrandModal] = useState<statusBrandModalType>({
    isVisible: false,
    title: null,
    context: '',
    allCheck: false,
  });
  const startBrand = (id: number) => {
    setStatusBrandModal({
      isVisible: true,
      title: '启用',
      context: '启用后该商户将恢复代牌销售业务相关办理权限，确认要启用吗?',
      allCheck: true,
    })
  }

  const stopBrand = (id: number) => {
    setStatusBrandModal({
      isVisible: true,
      title: '停用',
      context: '停用会导致该商户相关所有业务人员账号停用，不能再处理代牌销售业务，确认要停用吗？',
      allCheck: false,
    })
  }

  const submitStopBrand = () => {

  }

  const closeStopModal = () => {
    setStatusBrandModal(
      {
        isVisible: false,
        title: null,
        context: '',
        allCheck: false,
      }
    )
  }

  // 测试 select +tree

  const treeDataChildren: Array<any> = distributorState.brandList.map(item => {
    return {
      value: item.id,
      title: item.name,
      key: item.id,
    }
  })
  const treeData = [
    {
      title: '全部品牌',
      key: '',
      value: '',
      children: treeDataChildren,
    },
  ];
  const treeSelectChange = () => {

  }

  const tProps = {
    treeData,
    treeCheckable: true,
    treeDefaultExpandAll: true,
    placeholder: '请选择品牌型号',
    onChange: treeSelectChange,
    showCheckedStrategy: SHOW_PARENT,
    style: {
      width: '100%',
    },
  };

  return (
    <div className='mt-32'>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={list}
        pagination={pagination}
      />
      <Modal
        title='编辑商户信息'
        visible={editBrandModal}
        onOk={submitEditBrand}
        onCancel={closeEditBrand}
      >
        <h3>基本信息</h3>
        <Form
          form={form}
          initialValues={initialValues}
          {...formLayout}
        >
          <Item label='商户名称' name='name'>
            <Input placeholder='商户名称' />
          </Item>
          <Item label='市区' name='city'>
            <Cascade options={cityList.cityList} placeholder='选择市区' />
          </Item>
          <Item label='地址' name='address'>
            <Input.TextArea placeholder='品牌厂家地址' />
          </Item>
          <Item label='代理品牌型号' name='brandIds'>
            <TreeSelect {...tProps} />
          </Item>
        </Form>
      </Modal>
      <Modal
        title={statusBrandModal.title}
        visible={statusBrandModal.isVisible}
        onOk={submitStopBrand}
        onCancel={closeStopModal}
      >
        <p>{statusBrandModal.context}</p>

        {
          statusBrandModal.allCheck && <Checkbox>全部启用</Checkbox>
        }
      </Modal>
    </div >
  );
}

export default DistributorList;
