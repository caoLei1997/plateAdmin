import React, {
  useState
} from 'react';
import {
  Tag,
  Form,
  Input,
  Table,
  Modal,
  Select,
  Button,
  Checkbox,
  Cascader as Cascade
} from 'antd'
import { Link } from 'umi'

const { Item, useForm } = Form;
const { Option } = Select;
const BrandList = (props) => {
  const {
    cityList,
    editBrandItem,
    requestGetList,
    brandModelsState,
    stopAndStartBrand
  } = props;
  const {
    pageIndex,
    pageSize,
    list,
    total
  } = brandModelsState;

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
      width: 140
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
      width: 120
    },
    {
      title: '代理品牌',
      dataIndex: 'brandList',
      key: 'brandList',
      render: (brandList: any) => {
        if (brandList.length) {
          return brandList[0].brandName
        }
      }
    },
    {
      title: '人员数',
      render: (record: any) => {
        const { id, employeesNumber } = record;
        return (
          <Link to={`/personal/${id}`}>{employeesNumber}</Link>
        )
      }
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

  const paginationChange = (pageIndex: number, pageSize: number) => {
    requestGetList({
      pageIndex: pageIndex - 1,
      pageSize,
    })
  }
  const pagination = {
    total,
    pageSize,
    showSizeChanger: true,
    showQuickJumper: true,
    current: pageIndex + 1,
    onChange: paginationChange,
    showTotal: (total: number) => `共${total}条`,
  }
  const [editBrandId, setEditBrandId] = useState<number>(0)
  const [editBrandModal, setEditBrandModal] = useState<boolean>(false)
  const [editNewBrandList, setEditNewBrandList] = useState([]) // 品牌列表
  const editBrand = (id: number, record: any) => {
    const { brandList } = record;
    const newBrandList = [
      ...brandList,
      ...cityList.brandList.filter(item => item.agented === 1)
    ]
    setEditBrandId(id)
    setEditBrandModal(true);
    setEditNewBrandList(newBrandList)
    const brandIds = record.brandList ? record.brandList.map((item: any) => item.id) : [];
    const setFieldsParams = {
      name: record.name,
      brandIds: brandIds,
      address: record.address,
      city: [record.city, record.region],
    }
    form.setFieldsValue({ ...setFieldsParams })
  }
  const [form] = useForm();
  const initialValues = {
    name: null,
    city: null,
    address: null,
    brandIds: []
  }
  const fromLayout = {
    labelCol: {
      span: 4,
    }
  }

  const submitEditBrand = async () => {
    const fields = await form.validateFields();
    const [city, region] = fields.city
    try {
      const payload = {
        city,
        region,
        id: editBrandId,
        name: fields.name,
        address: fields.address,
        brandIds: Array.isArray(fields.brandIds) ? fields.brandIds : [fields.brandIds],
      }
      const callback = () => {
        setEditBrandId(0)
        setEditBrandModal(false)
        setEditNewBrandList([])
      }
      editBrandItem(payload, callback)
    } catch (error) {
      console.log('error,', error);
    }
  }

  const closeEditBrand = () => {
    setEditBrandModal(false)
    form.setFieldsValue({ ...initialValues })
  }

  const [statusBrandModal, setStatusBrandModal] = useState({
    isVisible: false,
    title: null,
    context: '',
    allCheck: false,
    id: null,
  });
  const startBrand = (id: number) => {
    setStatusBrandModal({
      isVisible: true,
      title: '启用',
      context: '启用后该商户将恢复代牌销售业务相关办理权限，确认要启用吗?',
      allCheck: true,
      id,
    })
  }

  const stopBrand = (id: number) => {
    setStatusBrandModal({
      isVisible: true,
      title: '停用',
      context: '停用会导致该商户相关所有业务人员账号停用，不能再处理代牌销售业务，确认要停用吗？',
      allCheck: false,
      id,
    })
  }


  const submitStopBrand = () => {
    // 0启用 1停用
    const { title, id, allCheck } = statusBrandModal;
    let status: string = (title === '停用' ? '1' : '0');
    const params = {
      status,
      level: '11', //品牌厂家等级
      agentOutletsId: id,
      isEnableAccount: allCheck,
    }

    stopAndStartBrand(params, closeStopModal)
  }

  const closeStopModal = () => {
    setStatusBrandModal(
      {
        isVisible: false,
        title: null,
        context: '',
        allCheck: false,
        id: null
      }
    )
  }

  return (
    <div className='mt-32'>
      <Table
        rowKey='id'
        columns={columns}
        dataSource={list}
        pagination={pagination}
      />
      <Modal
        title='编辑品牌厂家'
        visible={editBrandModal}
        onOk={submitEditBrand}
        onCancel={closeEditBrand}
        okText='保存'
      >
        <h3>基本信息：</h3>
        <Form
          form={form}
          initialValues={initialValues}
          {...fromLayout}
        >
          <Item
            label='商户名称'
            name='name'
            rules={[{
              required: true,
              message: '请输入商户名称',
            }]}
          >
            <Input placeholder='品牌厂家名称' />
          </Item>
          <Item
            label='代理品牌'
            name='brandIds'
            rules={[{
              required: true,
              message: '请选择代理品牌',
            }]}
          >
            <Select placeholder='代理品牌'>
              {
                editNewBrandList && editNewBrandList.map(item => (
                  <Option key={item.id} value={item.id}>
                    {item.brandName}
                  </Option>
                ))
              }
            </Select>
          </Item>
          <Item
            label='市区'
            name='city'
            rules={[{
              required: true,
              message: '请选择市区',
            }]}
          >
            <Cascade options={cityList.cityList} placeholder='选择市区' />
          </Item>
          <Item
            label='地址'
            name='address'
            rules={[{
              required: true,
              message: '请输入地址',
            }]}
          >
            <Input placeholder='品牌厂家地址' />
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

export default BrandList;
