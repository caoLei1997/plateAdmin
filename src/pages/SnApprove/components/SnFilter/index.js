import React from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import { connect } from 'umi';
import styles from './index.less';
const { RangePicker } = DatePicker;
import { formatData } from '@/commonFun'
const FilterSearch = ({ snApprove, getList }) => {
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
        if (filter === undefined || filter === null) return
        getList({ pageIndex: 1, filter })
    };
    const { agentList } = snApprove;
    return (
        <div className={styles.filter} >
            <Form
                form={form}
                name="advanced_search"
                className="ant-advanced-search-form"
                onFinish={onFinish}
            >
                <Row gutter={24}>
                    <Col span={6}>
                        <Form.Item label='品牌厂家' name='agentOutletsId'>
                            <Select placeholder='品牌厂家'>
                                {
                                    agentList.map(item => <Select.Option
                                        key={item.id}
                                        value={item.id}
                                    >
                                        {item.name}
                                    </Select.Option>)
                                }
                            </Select>
                        </Form.Item>
                    </Col>
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
                                <Select.Option>123</Select.Option>
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
    ({ snApprove }) => ({ snApprove })
)(FilterSearch) 
