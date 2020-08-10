import React, { useState } from 'react';
import { Button, Modal, Table, Form, Row, Col, Input, message, Checkbox } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import DealerLinkage from '@/components/DealerLinkage1/index';
import { connect } from 'umi';
import { RETCODESUCCESS } from '@/globalConstant';
import styles from './index.less';

const AddPersonal = ({ dispatch, onGetList, addLoading }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(false);
    const [selectVal, setSelectVal] = useState({ city: null, level: '', outlets: '' });
    const [list, setList] = useState([]);
    const [form] = Form.useForm();

    console.log(form.getFieldsValue());

    const toggleModalVisible = visible => {
        form.resetFields();
        setModalVisible(visible);
    }

    const selectChange = (val, key) => {
        setSelectVal({ ...selectVal, [key]: val });
    }

    const toggleShowForm = (bool) => {
        form.resetFields();
        setFormVisible(bool);
    }

    const checkSelect = (values) => {
        if (values.city && values.level && values.outlets) return true;
        const errorTips = { city: '请选择市区！', level: '请选择商家级别！', outlets: '请选择所属商户！' };
        const keys = Object.keys(values);
        for (let i = 0; i < keys.length; i++) {
            if (!values[keys[i]]) {
                message.error(errorTips[keys[i]]);
                return false;
            }
        }
        return false;
    }

    const add = (values) => {
        if (!checkSelect(values)) return false;
        toggleShowForm(true);
        setList([...list, {
            ...values,
            agentOutletsId: values.outlets.split('-')[0],
            dealer: values.outlets.split('-')[1],
            id: new Date().getTime(),
            status: '01'
        }]);
    }

    const modalOk = () => {
        if (list.length === 0) {
            message.error('请先添加人员');
            return;
        };
        const data = [];
        list.forEach((item) => {
            data.push({
                "agentOutletsId": item.agentOutletsId,
                "agentOutletsName": item.dealer,
                "name": item.name,
                "phoneNumber": item.phone,
                "level": Number(item.level)
            })
        })
        dispatch({
            type: 'personalList/add',
            payload: { list: data },
            onSuccess: (res) => {
                let { data } = res;
                console.log(res);
                if (res.retCode === RETCODESUCCESS) {
                    message.success('添加成功');
                    onGetList();
                    toggleModalVisible(false);
                    setList([]);
                } else {
                    const newList = list.map((item, index) => {
                        data.forEach((filterItem, filterIndex) => {
                            if (item.phone === filterItem) {
                                item['repeatStatus'] = 1
                            } else {
                                item['repeatStatus'] = 0
                            }
                        })
                        return item
                    })
                    console.log(newList);
                }
            }
        })

    }

    const del = (id) => {
        setList(list.filter(item => item.id !== id));
    }

    const columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '手机',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: '所属商户',
            dataIndex: 'dealer',
            key: 'name'
        },
        {
            title: '操作',
            dataIndex: 'id',
            key: 'id',
            render: (item) => <div className="pointer font-blue" onClick={() => del(item)} key={item.id}>删除</div>
        }

    ];

    const tableProps = {
        columns,
        dataSource: list,
        rowKey: 'id',
        pagination: false,


    }

    const filterRepeat = (record) => {
        let className = record.repeatStatus ? styles.red : '';
        return className
    }


    return (<div className={styles.container}>
        <div id='add-personal-container'>
            <div className='add-btn-wrap'>
                <Button type="primary" className='btn-green mb-24' icon={<PlusOutlined />} onClick={() => toggleModalVisible(true)}>新增人员</Button>
            </div>
            <Modal className='add-personal-modal' forceRender destroyOnClose visible={modalVisible} title='新增人员' onCancel={() => toggleModalVisible(false)} onOk={() => modalOk()}>
                <Table {...tableProps} rowClassName={filterRepeat} />
                {formVisible ?
                    <Form
                        className='mt-16'
                        name='add-personal-form'
                        onFinish={add}
                        form={form}
                        initialValues={
                            { outletsVal: '' }
                        }
                    >
                        <Row gutter={12}>
                            <Col span={12}>
                                <Form.Item name='name' className='mb-16' rules={[{ required: true, message: '请输入姓名!' }]}>
                                    <Input placeholder="姓名" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name='phone' className='mb-16' rules={[{ required: true, len: 11, message: '请输入正确的手机号!' }]}>
                                    <Input placeholder="手机号" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div>
                            <DealerLinkage isAddPersonal onCallBack={selectChange} />
                        </div>
                        <div className='text-right'>
                            <Button loading={addLoading} type="primary" htmlType="submit" className='search-button mr-8'>添加</Button>
                            <Button className='search-button' onClick={() => toggleShowForm(false)}>取消</Button>
                        </div>
                        <div>
                            <Form.Item name='allRun'>
                                <Checkbox value='全部启用' >全部启用</Checkbox>
                            </Form.Item>
                        </div>
                    </Form>
                    :
                    <p className={styles.add_text} onClick={() => toggleShowForm(true)}>
                        <PlusOutlined />&nbsp;&nbsp;添加
                    </p>
                }
            </Modal>
        </div>
    </div>)
}

export default connect(({ loading }) => ({
    addLoading: loading.effects['personalList/add'],
}))(AddPersonal);