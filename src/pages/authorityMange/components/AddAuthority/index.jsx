import React, { useState, useEffect } from 'react'
import {
    Modal,
    Form,
    Input,
    Select,
    Checkbox,
    Message,
    Cascader
} from 'antd'
import { connect } from 'umi';
import { addAccount, getBrigadeByCityAndRegion } from '@/services/authority';
function AddAuthority({
    authorityList,
    isVisible = true,
    visibleFn = null,
    type,
    record = null,
    getList,
    userInfo
}) {
    const [rows, setRows] = useState(record ? { ...record } : null)
    const { Option } = Select
    const [form] = Form.useForm()
    let [authority, setAuthority] = useState(rows && rows.type)
    const [agentOutlesName, setAgentOutlesName] = useState(rows ? rows.agentOutlesName : undefined)
    const [isVIP, setIsVIP] = useState('');
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
        const formValue = form.getFieldsValue();
        let payload
        if (rows === null) {
            payload = {
                ...formValue,
                address: null,
                agentOutlesName
            }
        } else {
            payload = {
                ...rows,
                ...formValue,
                address: null,
                agentOutlesName
            }
        }
        addAccount(payload).then(({ retCode, retMsg }) => {
            if (retCode == '0000') {
                Message.success(retMsg)
                getList({})
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
        form.setFieldsValue({
            agentOutletsId: undefined,
            address: undefined,
            agentOutletsName: undefined
        })
        setRows(pre => ({ ...pre, agentOutletsId: null }))
    }
    // 权限展示
    const authorityArr = [
        { label: '人员管理', value: '人员管理' },
        { label: '经销商管理', value: '经销商管理' },
        { label: '目录管理', value: '目录管理' },
        { label: '车辆管理', value: '车辆管理' },
        { label: '备案管理', value: '备案管理' },
        { label: '权限管理', value: '权限管理' },
        { label: 'SN管理', value: 'SN管理' },
    ]


    const [defaultValue, setDefaultValue] = useState(['SN管理']);
    useEffect(() => {
        if (rows !== null && rows.versionType === 'vip') {
            setDefaultValue([...defaultValue, '车辆管理'])
        }
    },[])
    // 权限介绍
    const functionDisplay = (authority) => {
        if (authority == '0') return '拥有所有权限'
        if (authority == '1') {
            return <Checkbox.Group
                key='1'
                disabled
                options={authorityArr}
                value={defaultValue}
            />
        }
        if ((authority == '2' || authority == '3') && authority != null && authority != '超级管理员') {
            return <Checkbox.Group
                key='2'
                disabled
                options={authorityArr}
                defaultValue={['备案管理']}
            />
        }
        return '根据角色选择自动匹配'
    }
    // 选择品牌厂家
    const handleAgent = (value, { agentOutletsName, versionType }) => {
        if (versionType === 'vip' || versionType === 'general') {
            setDefaultValue([...defaultValue, '车辆管理'])
        } else {
            setDefaultValue(['SN管理'])
        }
        setAgentOutlesName(agentOutletsName)
    }
    // 选择地区
    const [brigadeList, setBrigadeList] = useState([]);
    function handleCityArea(value) {
        const [city, region] = value;
        form.setFieldsValue({ agentOutletsId: undefined })
        getBrigadeByCityAndRegion({ city, region }).then((res => {
            setBrigadeList(res.data)
        }))
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
                <Form
                    labelCol={{ span: 4 }}
                    form={form}
                    key={rows && rows.agentOutletsId}
                    initialValues={{
                        ...rows,
                        type: rows && rows.type,
                        address: rows && (rows.city && rows.region) ? [rows.city, rows.region] : undefined,
                        agentOutletsId: rows && rows.agentOutletsId
                    }}
                >
                    <Form.Item
                        rules={[{ required: true, message: '姓名不能为空' }]}
                        label='姓名'
                        name='name'
                    >
                        <Input placeholder='姓名' />
                    </Form.Item>

                    {/* <Form.Item
                        rules={[{ required: true, message: '账户名不能为空' }]}
                        label='账户名'
                        name='phoneNumber'
                    >
                        <Input placeholder='账户名' />
                    </Form.Item> */}
                    <Form.Item
                        rules={[{ required: true, len: 11, message: '手机号不能为空' }]}
                        label='手机号'
                        name='phoneNumber'
                    >
                        <Input placeholder='手机号' maxLength={11} />
                    </Form.Item>
                    <Form.Item
                        rules={[{ required: true, message: '角色不能为空' }]}
                        label='选择角色'
                        className='mt-8'
                        name='type'
                    >
                        <Select
                            getPopupContainer={triggerNode => triggerNode.parentNode}
                            placeholder='选择角色'
                            onChange={changeAuthority}
                        >
                            {
                                rolesList.map((item, index) =>
                                    <Option
                                        key={index}
                                        label={item.label}
                                        value={item.value}
                                    >
                                        {item.label}
                                    </Option>
                                )
                            }
                        </Select>
                    </Form.Item>
                    {
                        authority == '1' && (
                            <Form.Item
                                rules={[{ required: true, message: '品牌厂家不能为空' }]}
                                label='品牌厂家'
                                name='agentOutletsId'
                            >
                                <Select
                                    getPopupContainer={triggerNode => triggerNode.parentNode}
                                    placeholder='请选择品牌厂家'
                                    onChange={handleAgent}
                                >
                                    {
                                        authorityList.agentList &&
                                        authorityList.agentList.length &&
                                        authorityList.agentList.map(
                                            (item, index) =>
                                                <Option
                                                    key={index}
                                                    agentOutletsName={item.agentOutlesName}
                                                    value={item.agentOutlesId}
                                                    versionType={item.versionType}
                                                >
                                                    {item.agentOutlesName}
                                                </Option>
                                        )
                                    }
                                </Select>
                            </Form.Item>
                        )
                    }
                    {
                        authority == '2' && (
                            <Form.Item
                                label='所属支队'
                                rules={[{ required: true, message: '所属支队不能为空' }]}
                                name='agentOutletsId'
                            >
                                <Select
                                    placeholder='选择所属支队'
                                    onChange={handleAgent}
                                >
                                    {
                                        authorityList.detachment && authorityList.detachment.map((item, index) =>
                                            <Option
                                                key={index}
                                                agentOutletsName={item.agentOutlesName}
                                                value={item.agentOutlesId}
                                            >
                                                {item.agentOutlesName}
                                            </Option>
                                        )
                                    }
                                </Select>
                            </Form.Item>
                        )
                    }
                    {
                        authority == '3' && (
                            <div>
                                <Form.Item
                                    rules={[{ required: true, message: '市区不能为空' }]}
                                    name='address'
                                    label='所属大队'
                                >
                                    <Cascader
                                        options={authorityList.cityTree}
                                        expandTrigger="hover"
                                        displayRender={displayRender}
                                        onChange={handleCityArea}
                                        placeholder='选择市区'
                                    />
                                </Form.Item>
                                <Form.Item
                                    colon={false}
                                    label=' '
                                    rules={[{ required: true, message: '所属大队不能为空' }]}
                                    name='agentOutletsId'
                                >
                                    <Select
                                        placeholder='选择所属大队'
                                    >
                                        {
                                            brigadeList &&
                                            brigadeList.length &&
                                            brigadeList.map((item) => {
                                                return <Option
                                                    key={item.agentOutlesId}
                                                    value={item.agentOutlesId}
                                                >
                                                    {item.agentOutlesName}
                                                </Option>
                                            })
                                        }
                                    </Select>
                                </Form.Item>

                            </div>
                        )
                    }
                    <Form.Item label='功能权限'>
                        {
                            functionDisplay(authority)
                        }
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

const stateToProps = ({
    authorityList,
    login
}) => ({
    authorityList: authorityList,
    userInfo: login,
})
export default connect(stateToProps)(AddAuthority) 
