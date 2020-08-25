import React, { useState, useEffect } from 'react'
import { Modal, Form, Input, Select, Checkbox, Message, Cascader } from 'antd'
import { connect } from 'umi';
import { addAccount } from '@/services/authority';
function AddAuthority({ authorityList, dispatch, isVisible = true, visibleFn = null, type, rows = null, getList }) {
    const { Option } = Select
    const [form] = Form.useForm()
    let [authority, setAuthority] = useState(rows && rows.type)
    const [agent, setAgent] = useState({})


    // 选择角色
    const rolesList = [
        { label: "超级管理员", value: '0' },
        { label: "品牌厂家", value: '1' },
        { label: "支队管理员", value: '2' },
        { label: "大队管理员", value: '3' }
    ]

    // 弹窗确定
    const handleOk = async () => {
        const values = await form.validateFields();
        const formValue = form.getFieldsValue()
        let payload
        if (rows === null) {
            payload = {
                ...formValue,
            }
        } else {
            payload = {
                ...formValue,
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
    const changeAuthority = (value, { label }) => {
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
    // 权限介绍
    const functionDisplay = (authority) => {
        if (authority == '0') return '拥有所有权限'
        if (authority == '1') return <Checkbox.Group key='1' disabled options={authorityArr} defaultValue={['车辆管理']} />
        if (authority == '2' && authority != null && authority != '超级管理员') return <Checkbox.Group key='2' disabled options={authorityArr} defaultValue={['备案管理']} />
        return '根据角色选择自动匹配'
    }
    // 选择品牌厂家
    const handleAgent = (value) => {
        setAgent(value)
    }
    // 选择地区
    function onChange(value) {
        const [city, region] = value;
        dispatch({
            type: 'authorityList/getCityAndRegion',
            payload: {
                city,
                region
            }
        })

        dispatch({
            type: 'authorityList/getCityAndRegion',
            payload: {
                "city": city,
                "region": region
            },

        })
    }
    function displayRender(label) {
        return label.join('-');
    }
    return (
        <div>
            <Modal
                title={type === 'add' ? '新增管理员' : '编辑'}
                visible={isVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {/* { authorityList.rolesList } */}

                <Form
                    labelCol={{ span: 4 }}
                    form={form}
                    initialValues={{ ...rows, type: rows && rows.type }}
                >
                    <Form.Item rules={[{ required: true, message: '姓名不能为空' }]} label='姓名' name='name'>
                        <Input placeholder='姓名' />
                    </Form.Item>
                    <Form.Item rules={[{ required: true, len: 11, message: '手机号不能为空' }]} label='手机号' name='phoneNumber' >
                        <Input placeholder='手机号' maxLength={11} />
                    </Form.Item>
                    <Form.Item rules={[{ required: true, message: '角色不能为空' }]} label='选择角色' className='mt-8' name='type'>
                        <Select getPopupContainer={triggerNode => triggerNode.parentNode} placeholder='选择角色' onChange={changeAuthority}>
                            {
                                rolesList.map(item =>
                                    <Option key={item.value} label={item.label} value={item.value}>{item.label}</Option>
                                )
                            }
                        </Select>
                    </Form.Item>
                    {
                        authority == '1' && (
                            <Form.Item rules={[{ required: true, message: '品牌厂家不能为空' }]} label='品牌厂家' name='agentOutletsId'>
                                <Select getPopupContainer={triggerNode => triggerNode.parentNode} placeholder='请选择品牌厂家' onChange={handleAgent} >
                                    {
                                        authorityList.agentList
                                        &&
                                        authorityList.agentList.map(
                                            (item, index) => <Option key={index} value={item.agentOutletId}>{item.agentOutlessName}</Option>
                                        )
                                    }
                                </Select>
                            </Form.Item>
                        )
                    }
                    {
                        authority == '2' && (
                            <Form.Item label='所属支队' rules={[{ required: true, message: '所属支队不能为空' }]} name='detachment'>
                                <Select placeholder='选择所属支队'>
                                    {
                                        authorityList.detachment && authorityList.detachment.map((item, index) =>
                                            <Option key={index} value={item.agentOutletId}>{item.agentOutlessName}</Option>
                                        )
                                    }
                                </Select>
                            </Form.Item>
                        )
                    }
                    {
                        authority == '3' && (
                            <div>
                                <Form.Item label='所属大队'>
                                    <div>
                                        <Cascader
                                            options={authorityList.cityTree}
                                            expandTrigger="hover"
                                            displayRender={displayRender}
                                            onChange={onChange}
                                            plplaceholder='选择市区'
                                        />
                                    </div>
                                </Form.Item>
                                <Form.Item colon={false} label=' '>
                                    <div>
                                        <Select placeholder='选择所属大队'>
                                            {
                                                authorityList.brigadeList &&
                                                authorityList.brigadeList.map((item, index) => {
                                                    <Option key={index} value={item.agentOutlessId}>{item.agentOutlessName}</Option>
                                                })
                                            }
                                        </Select>
                                    </div>
                                </Form.Item>
                            </div>
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
        </div >
    )
}

export default connect(({ authorityList }) => ({ authorityList: authorityList }))(AddAuthority) 
