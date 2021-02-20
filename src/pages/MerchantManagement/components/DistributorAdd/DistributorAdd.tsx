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
import { zip } from '@/utils/utils'
import brand from '@/pages/catalogManage/models/brand';
const { Item, useForm } = Form;
const { SHOW_CHILD, } = TreeSelect;
const DistributorAdd = (props: any) => {
  const { cityList, distributorState } = props;
  const [createModal, setCreateModal] = useState<boolean>(false)
  const [formVisible, setFormVisible] = useState<boolean>(false)
  const [createDistributorList, setCreateDistributorList] = useState([])
  const [selectBrand, setSelectBrand] = useState([])
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
      render: (agentBrand) => {
        let brandString: string = '';
        agentBrand.forEach(item => {
          brandList.forEach(brand => {
            if (brand.id === item) {
              brandString += brand.name + ' '
            }
          })
        })
        console.log('brandString: ', brandString)
        return brandString
      }
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
    labelCol: {
      span: 3
    }
  }
  const initialValues = {
    name: null,
    city: null,
    address: null,
    agentBrand: []
  }
  const submitDistributorList = (file: CreateBrandList) => {
    const { name, city, address, agentBrand } = file;
    const params = {
      name,
      city,
      address,
      agentBrand,
      id: createDistributorList.length + 1
    }
    setCreateDistributorList([
      ...createDistributorList,
      { ...params },
    ]);
    form.setFieldsValue({
      ...initialValues
    })
    setSelectBrand([])
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
    setSelectBrand([])
  }
  const { brandList } = distributorState;
  const treeData = [
    {
      title: '全部品牌',
      key: '0-0',
      value: '0-0',
      children: brandList.map(item => ({
        key: item.id,
        value: item.id,
        title: item.name
      }))
    },
  ];
  const treeSelectChange = (values, titles) => {
    let newValue: any = [];
    if (titles[0] !== '全部品牌') {
      newValue = zip(values, titles).map(
        ([value, title], index) => {
          const currentList = brandList.filter(item => item.id === value);
          return {
            value,
            title,
            children: currentList[0].children && currentList[0].children.map((item, key) => ({
              title: item.name,
              key: index + '-' + key,
              value: index + '-' + key
            }))
          }
        }
      )
    } else {
      // 如果全部 titles 和values 则只有一个 需要手动便利
      let allTitles = brandList.map(item => item.name)
      let allValues = brandList.map(item => item.id)
      newValue = zip(allValues, allTitles).map(
        ([value, title], index) => {
          const currentList = brandList.filter(item => item.id === value);
          return {
            value,
            title,
            children: currentList[0].children && currentList[0].children.map((item, key) => ({
              title: item.name,
              key: index + '-' + key,
              value: index + '-' + key
            }))
          }
        }
      )
    }
    setSelectBrand([...newValue])
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
    getPopupContainer: triggerNode => triggerNode.parentNode
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
                    <Cascade
                      options={cityList.cityList}
                      placeholder='选择地区'
                    />
                  </Item>
                </Col>
              </Row>
              <Item name='address'>
                <Input placeholder='商户地址' />
              </Item>
              <Item name='agentBrand'>
                <TreeSelect {...tProps} />
              </Item>
              {
                selectBrand && selectBrand.map(item => (
                  <div key={item.value} style={{
                    marginBottom: 15,
                  }}>
                    <div style={{
                      color: '#1890ff'
                    }}>
                      {item.title}
                    </div>
                    <TreeSelect
                      style={{
                        width: '100%',
                      }}
                      treeData={item.children}
                      defaultValue={
                        item.children ? item.children.map(item => item.value) : []
                      }
                      treeCheckable={true}
                      treeDefaultExpandAll={true}
                      showCheckedStrategy={SHOW_CHILD}
                      getPopupContainer={triggerNode => triggerNode.parentNode}
                    />
                  </div>
                ))
              }
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
