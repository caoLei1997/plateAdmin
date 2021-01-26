import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import {
  Row,
  Col,
  Form,
  Table,
  Input,
  Select,
  Button,
  Cascader as Cascade
} from 'antd'

const { Item, useForm } = Form;
const { Option } = Select

const BrandAdd = () => {

  const [createModal, setCreateModal] = useState<boolean>(true)

  const createModalVisible = () => {
    setCreateModal(true)
  }

  const createBrandOk = () => {

  }

  const createBrandCancel = () => {
    setCreateModal(false)
  }

  const [form] = useForm()

  const onFinish = (file: any) => {
    

  }

  const createBranList = () => {

  }

  return (
    <div className='mt-32 context-end'>
      <Button
        icon={<PlusOutlined />}
        type="primary"
        color='#ccc'
        onClick={createModalVisible}
      >
        新增品牌厂家
      </Button>
      <Modal
        title='新增品牌厂家'
        visible={createModal}
        onOk={createBrandOk}
        onCancel={createBrandCancel}
        width='50%'
      >
        <Table />
        <div className='mt-16'></div>
        <Form
          form={form}
          onFinish={onFinish}
        >
          <Row gutter={20}>
            <Col span={12}>
              <Item>
                <Input placeholder='商户名称' />
              </Item>
            </Col>
            <Col span={12}>
              <Item>
                <Cascade placeholder='选择地区' />
              </Item>
            </Col>
          </Row>
          <Item>
            <Input placeholder='商户地址' />
          </Item>
          <Item>
            <Select placeholder='选择代理品牌'>
              <Option value='1'>1</Option>
            </Select>
          </Item>
          <Item>
            <Button
              block
              type='primary'
              htmlType='submit'
              onClick={createBranList}
            >
              新增
            </Button>
          </Item>
        </Form>
      </Modal>
    </div>
  )
}

export default BrandAdd
