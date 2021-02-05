import React, { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import {
  Row,
  Col,
  Form,
  Modal,
  Table,
  Input,
  Select,
  Button,
  message,
  Checkbox,
  Cascader as Cascade,
} from 'antd'
import { fromReset } from '@/commonFun'
import { CreateBrandList } from '@/models/exports';

const { Item, useForm } = Form;
const { Option } = Select

const BrandAdd = (props: any) => {
  const {
    cityList,
    addBrandList,
    requestGetList
  } = props;
  const [brandList, setBrandList] = useState(
    [...cityList.brandList.filter(item => item.agented === 1)]
  );
  const [createModal, setCreateModal] = useState<boolean>(false);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [createBrandList, setCreateBrandList] = useState<CreateBrandList[]>([])
  const createModalVisible = () => {
    setCreateModal(true)
  }

  const createBrandOk = () => {
    if (createBrandList.length < 1) {
      message.error('请添加品牌后保存')
    } else {
      const newList = createBrandList.map(item => {
        return {
          address:item.address,
          brandIds:[item.agentBrand],
          agentBrand:[item.brandName],
          city:item.city,
          name:item.name,
          region:item.region,
        }
      })
      const params = {
        list: [...newList]
      }
      const callback = () => {
        setCreateModal(false)
        setFormVisible(false);
        setCreateBrandList([]);
        requestGetList()
      }
      addBrandList(params, callback)
    }
  }

  const createBrandCancel = () => {
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
      render: ({ city, region }) => `${city}${region}`
    },
    {
      title: '地址',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '代理品牌',
      dataIndex: 'brandName',
      key: 'brandName',
    },
    {
      title: '操作',
      render: (record: any) => (
        <Button
          danger
          type='link'
          onClick={() => createBrandListDelete(record)}
        >
          删除
        </Button>
      ),
    },
  ]

  const [form] = useForm()
  const initialValues = {
    name: null,
    city: null,
    address: null,
    agentBrand: null
  }

  const createBranList = (file: CreateBrandList) => {
    const { name, city, address, agentBrand } = file
    // 获取代理品牌名称
    const selectItem = brandList.filter(item => item.id === agentBrand);
    // 判断是否已存在
    const itemNameIsRepeat: boolean = createBrandList.some((item) => item.name === name);
    if (itemNameIsRepeat) {
      message.error('已新增此商户！');
    } else {
      const params = {
        name,
        agentBrand,
        city: city[0],
        region: city[1],
        address: address,
        brandName: selectItem[0].brandName,
        id: createBrandList.length + 1
      }
      // 新建品牌厂家列表
      setCreateBrandList([...createBrandList, params])
      // 删除当前品牌
      const newBrandList = brandList.filter(item => item.id !== agentBrand)
      setBrandList([...newBrandList])
      // 清除form表单
      fromReset(form, initialValues)
    }
  }

  const createBrandListDelete = (record: any) => {
    const { id, agentBrand } = record;
    // 恢复已经被占用的品牌
    const recoveryBrandList = cityList.brandList.filter(item => item.id === agentBrand)
    setBrandList([
      ...brandList,
      ...recoveryBrandList,
    ])
    // 删除创建的品牌厂家
    setCreateBrandList([
      ...createBrandList.filter(
        (item: CreateBrandList) => item.id !== id
      )
    ])
  }

  // 取消创建商户
  const cancelCreateBrandList = () => {
    setFormVisible(false)
    fromReset(form, initialValues)
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
        okText='保存'
      >
        <Table
          rowKey='id'
          columns={columns}
          dataSource={createBrandList}
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
              onFinish={createBranList}
              initialValues={initialValues}
            >
              <Row gutter={20}>
                <Col span={8}>
                  <Item name='name'>
                    <Input placeholder='商户名称' />
                  </Item>
                </Col>
                <Col span={16}>
                  <Item name='agentBrand'>
                    <Select placeholder='选择代理品牌'>
                      {
                        brandList.length && brandList.map(item => (
                          <Option
                            key={item.id}
                            value={item.id}
                            name={item.brandName}
                          >
                            {item.brandName}
                          </Option>
                        ))
                      }
                    </Select>
                  </Item>
                </Col>
              </Row>
              <Row gutter={20}>
                <Col span={8}>
                  <Item name='city'>
                    <Cascade options={cityList.cityList} placeholder='选择地区' />
                  </Item>
                </Col>
                <Col span={16}>
                  <Item name='address'>
                    <Input placeholder='商户地址' />
                  </Item>
                </Col>
              </Row>
              <Item>
                <Row gutter={20}>
                  <Col span={12}>
                    <Button
                      block
                      onClick={cancelCreateBrandList}
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
        {/* <Item>
          <Checkbox >启用该批次商户</Checkbox>
        </Item> */}
      </Modal>
    </div>
  )
}

export default BrandAdd
