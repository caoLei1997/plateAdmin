import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Select, Checkbox, Message } from 'antd'
import { connect } from 'umi';
import { addAccount } from '@/services/authority';
function AddAuthority({ authorityList, dispatch, isVisible = true, visibleFn = null, type, rows = null, getList }) {
    const { Option } = Select
    const [form] = Form.useForm()
    const role = rows ? rows.role : null


    let [authority, setAuthority] = useState(role)
    const [agent, setAgent] = useState({})
    // 弹窗确认
    const handleOk = () => {
        form.validateFields()
        const { brandid = '', brandname = '' } = agent
        const formValue = form.getFieldsValue()
        let payload

        if (rows === null) {
            payload = {
                ...formValue,
                brandId: brandid,
                brandName: brandname,
            }
        } else {
            payload = {
                ...formValue,
                agentOutletsId: rows.agentOutletsId,
                type: rows.type,
                brandId: rows.brandId,
                brandName: rows.brandName,
                id: rows && rows.id
            }
        }

        addAccount(payload).then(({ retCode, retMsg }) => {
            if (retCode == '0000') {
                Message.success(retMsg)
                getList()
                visibleFn()
                form.resetFields()
            }
        })

    }
    // 弹窗关闭
    const handleCancel = () => {
        visibleFn()
        form.resetFields()
        setAuthority(null)
    }

    //选择权限
    const changeAuthority = (value, { key }) => {
        setAuthority(key)
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
        if (authority != '品牌厂家' && authority != null && authority != '超级管理员') return <Checkbox.Group key='2' disabled options={authorityArr} defaultValue={['备案管理']} />

        return '根据角色选择自动匹配'
    }

    const handleAgent = (value, options) => {
        setAgent(options)
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
                    initialValues={{ ...rows, type: rows && rows.role, agentOutletsId: rows && rows.brandName }}
                >
                    <Form.Item rules={[{ required: true, message: '姓名不能为空' }]} label='姓名' name='name'>
                        <Input placeholder='姓名' />
                    </Form.Item>
                    <Form.Item rules={[{ required: true, message: '手机号不能为空' }]} label='手机号' name='phoneNumber' >
                        <Input placeholder='手机号' />
                    </Form.Item>
                    <Form.Item rules={[{ required: true, message: '角色不能为空' }]} label='角色选择' className='mt-8' name='type'>
                        <Select getPopupContainer={triggerNode => triggerNode.parentNode} placeholder='权限选择' onChange={changeAuthority}>
                            {
                                authorityList.rolesList && authorityList.rolesList.map(item =>
                                    <Option key={item.message} value={item.code + ',' + item.type}>{item.message}</Option>
                                )
                            }
                        </Select>
                    </Form.Item>
                    {
                        authority === '品牌厂家' && (
                            <Form.Item rules={[{ required: true, message:'经销商不能为空' }]} label='经销商' name='agentOutletsId'>
                                <Select getPopupContainer={triggerNode => triggerNode.parentNode} placeholder='经销商' onChange={handleAgent} >
                                    {
                                        authorityList.agentList && authorityList.agentList.map((item, index) =>
                                            <Option brandid={item.brandId} brandname={item.brandName} key={index} value={item.agentOutletId}>{item.brandName}</Option>
                                        )
                                    }
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

export default connect(({ authorityList }) => ({ authorityList: authorityList }))(AddAuthority) 
