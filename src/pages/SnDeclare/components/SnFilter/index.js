import React from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import { connect } from 'umi';
import styles from './index.less';
const { RangePicker } = DatePicker;
import { formatData } from '@/commonFun'
const FilterSearch = ({ snDeclare, getList }) => {
    const [form] = Form.useForm();
    const onFinish = data => {
        let { applyTimeStart, auditTimeStart } = data
        const filter = {
            ...data,
            applyTimeStart: applyTimeStart && formatData(applyTimeStart[0]),
            applyTimeEnd: applyTimeStart && formatData(applyTimeStart[1]),
            auditTimeStart: auditTimeStart && formatData(auditTimeStart[0]),
            auditTimeEnd: auditTimeStart && formatData(auditTimeStart[1]),
        }

        getList({ pageIndex: 1, filter })
    };
    const { agentList } = snDeclare;
    return (
        <div className={styles.filter} >
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
<<<<<<< HEAD
                initialValues={{
                    approvalStatus:''
                }}
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='批次名称' name='batchName'>
                            <Input placeholder='批次名称'></Input>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='申请日期' name='applyTimeStart'>
                            <RangePicker></RangePicker>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Form.Item label='审核状态' name='approvalStatus'>
                            <Select placeholder='审核状态'>
                                <Select.Option value=''>全部</Select.Option>
                                <Select.Option value='1'>待审核</Select.Option>
                                <Select.Option value='2'>未通过</Select.Option>
                                <Select.Option value='3'>已通过</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='审核日期' name='auditTimeStart'>
                            <RangePicker></RangePicker>
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" htmlType="submit">
                            查询
                        </Button>
                    </Col>
                </Row>
                <Row>

                </Row>
            </Form>
        </div>

    );
};
export default connect(
    ({ snDeclare }) => ({ snDeclare })
)(FilterSearch) 
