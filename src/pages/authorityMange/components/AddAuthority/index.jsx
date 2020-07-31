import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Select, Checkbox } from 'antd'
function AddAuthority({ isVisible = true, visibleFn = null, type, rows = {} }) {
    const { Option } = Select
    const [form] = Form.useForm()
    const [authority, setAuthority] = useState(null)

    // 弹窗确认
    const handleOk = () => {

        form.validateFields()
        const formValue = form.getFieldsValue()
        console.log(formValue);
        // visibleFn()
    }
    // 弹窗关闭
    const handleCancel = () => {
        visibleFn()
        setAuthority(null)
    }

    // 副作用
    useEffect(() => {
        if (isVisible) {
            if (rows != null) {
                setAuthority(rows.role)
            }
        }
        if (!isVisible) {
            return () => {
                form.resetFields()
            }
        }
    },[rows])
    //选择权限
    const changeAuthority = (value) => {
        setAuthority(value)
    }
    // 权限展示
    const authorityArr = [
        { label: '人员管理', value: '人员管理' },
        { label: '经销商管理', value: '经销商管理' },
        { label: '目录管理', value: '目录管理' },
        { label: '车辆管理', value: '车辆管理' },
        { label: '备案管理', value: '备案管理' },
        { label: '权限管理', value: '权限管理' },
    ]
    const functionDisplay = (authority) => {
        if (authority === '超级管理员') return '拥有所有权限'
        if (authority === '品牌厂家') return <Checkbox.Group key='1' disabled options={authorityArr} defaultValue={['经销商管理']} />
        if (authority === '支队管理员') return <Checkbox.Group key='2' disabled options={authorityArr} defaultValue={['备案管理']} />
        return '根据角色选择自动匹配'
    }
    return (
        <div>
            <Modal
                title={type === 'add' ? '新增管理员' : '编辑'}
                visible={isVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                getContainer={false}
            >
                <Form
                    labelCol={{ span: 4 }}
                    form={form}
                    initialValues={rows}
                >
                    <Form.Item rules={[{ required: true }]} label='姓名' name='name'>
                        <Input placeholder='姓名' />
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]} label='手机号' name='phoneNumber' >
                        <Input placeholder='手机号' />
                    </Form.Item>
                    <Form.Item rules={[{ required: true }]} label='角色权限' className='mt-8' name='role'>
                        <Select placeholder='权限选择' onChange={changeAuthority}>
                            <Option value='超级管理员'>超级管理员</Option>
                            <Option value='品牌厂家'>品牌厂家</Option>
                            <Option value='支队管理员'>支队管理员</Option>
                        </Select>
                    </Form.Item>
                    {
                        authority === '支队管理员' && (
                            <Form.Item rules={[{ required: true }]} label='所选支队' name='detachment'>
                                <Select placeholder='所选支队'>
                                    <Option value='西安支队'>西安支队</Option>
                                    <Option value='咸阳支队'>咸阳支队</Option>
                                    <Option value='渭南支队'>渭南支队</Option>
                                </Select>
                            </Form.Item>
                        )
                    }
                    <Form.Item label='功能权限'>
                        {
                            functionDisplay(authority)
                        }
                        <div></div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddAuthority
