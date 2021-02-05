import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import {
  Row,
  Col,
  Form,
  Table,
  Input,
  Button,
  Checkbox,
  TreeSelect,
  Cascader as Cascade
} from 'antd'
import { fromReset } from '@/commonFun'
import { CreateBrandList } from '@/models/exports';
const { Item, useForm } = Form;
const { SHOW_CHILD } = TreeSelect;
const DistributorAdd = () => {

  const [createModal, setCreateModal] = useState<boolean>(false)
  const [formVisible, setFormVisible] = useState<boolean>(false)
  const [createDistributorList, setCreateDistributorList] = useState<CreateBrandList[]>([])

  const createModalVisible = () => {
    setCreateModal(true)
  }

  const createDistributorOk = () => {

  }

  const createDistributorCancel = () => {
    setCreateModal(false)
    setFormVisible(false)
  }

  const columns = [
    {
      title: '商户名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '市区',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '代理品牌型号',
      dataIndex: 'agentBrand',
      key: 'agentBrand',
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (id: any) => (
        <Button
          danger
          type='link'
          onClick={() => createDistributorListDelete(id)}
        >
          删除
        </Button>
      ),
    },
  ]

  const [form] = useForm();
  const formLayout = {
    labelCol:{
      span:3
    }
  }
  const initialValues = {
    name: null,
    city: null,
    address: null,
    agentBrand: undefined
  }

  const submitDistributorList = (file: CreateBrandList) => {
    const { name, city, address, agentBrand } = file
    const params = {
      name,
      city,
      address,
      agentBrand,
      id: createDistributorList.length + 1
    }
    setCreateDistributorList([...createDistributorList, params])
    form.setFieldsValue({
      ...initialValues
    })
  }

  const createDistributorListDelete = (id: number) => {
    setCreateDistributorList([
      ...createDistributorList.filter((item: CreateBrandList) => item.id !== id)
    ])
  }

  // 取消创建商户
  const cancelCreateDistributorList = () => {
    setFormVisible(false)
    fromReset(form, initialValues)
  }


  const treeData = [
    {
      title: '全部品牌',
      key: '0-0',
      children: [
        {
          title: '爱马',
          key: '0-0-0',
        },
        {
          title: '小刀',
          key: '0-0-1',
        },
      ],
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
    showCheckedStrategy: SHOW_CHILD,
    style: {
      width: '100%',
    },
  };
  return (
    <div className='mt-32 context-end'>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        color='#ccc'
        onClick={createModalVisible}
      >
        新增经销商
      </Button>
      <Modal
        title='新增经销商'
        visible={createModal}
        onOk={createDistributorOk}
        onCancel={createDistributorCancel}
        width='50%'
        okText='保存'
      >
        <Table
          rowKey='id'
          columns={columns}
          dataSource={createDistributorList}
        />
        <div className='mt-16'></div>
        {
          formVisible === false && (
            <Button
              block
              icon={<PlusOutlined />}
              onClick={() => setFormVisible(!formVisible)}
            >
              添加
            </Button>
          )
        }
        {
          formVisible === true && (
            <Form
              form={form}
              onFinish={submitDistributorList}
              initialValues={initialValues}
              {...formLayout}
            >
              <Row gutter={20}>
                <Col span={12}>
                  <Item name='name'>
                    <Input placeholder='商户名称' />
                  </Item>
                </Col>
                <Col span={12}>
                  <Item name='city'>
                    <Cascade placeholder='选择地区' />
                  </Item>
                </Col>
              </Row>
              <Item name='address'>
                <Input placeholder='商户地址' />
              </Item>
              <Item name='agentBrand'>
                <TreeSelect {...tProps} />;
              </Item>
              <Item>
                <Row gutter={20}>
                  <Col span={12}>
                    <Button
                      block
                      onClick={cancelCreateDistributorList}
                    >
                      取消
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button
                      block
                      type='primary'
                      htmlType='submit'
                    >
                      新增
                    </Button>
                  </Col>
                </Row>
              </Item>
            </Form>
          )
        }
        <Item>
          <Checkbox>启用该批次商户</Checkbox>
        </Item>
      </Modal>
    </div>
  )
}

export default DistributorAdd
