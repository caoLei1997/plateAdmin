import React,{useState} from 'react';
import { Form, Row, Col, Input, Button, Select, DatePicker } from 'antd';
import SecondDealerList from '@/components/SecondDealerSelect';
import { examineArr } from '@/globalData';

const { Option } = Select;
const { RangePicker } = DatePicker;

const DataAuditSearch = (props) => {
    const { children, getList } = props;
    const [ secondDealerVal, setSecondDealerVal ] = useState(null);

    const handleFinish = values => {
        getList(1, { ...values, secondDealer: secondDealerVal });
    }

    const secondDealerChange = (val) => {
        setSecondDealerVal(val);
    }

    return (
        <div id="components-form-demo-advanced-search">
            <Form className="ant-advanced-search-form" name='car-manage-form-search' onFinish={handleFinish}>
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label='整车编码SN' name='SNCode'>
                            <Input placeholder="整车编码SN" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label='车辆品牌' name='carBrand'>
                            <Input placeholder="车辆品牌" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label='车辆型号' name='carModel'>
                            <Input placeholder="车辆型号" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label='审核状态' name='status'>
                            <Select placeholder="审核状态">
                                {examineArr.map(item => item.key !== '3' && <Option key={`examine-${item.key}`} value={item.key}>{item.val}</Option>)}
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <SecondDealerList change={secondDealerChange} />
                    </Col>
                    <Col span={8}>
                        <Form.Item label='申请日期' name='applyDate'>
                            <RangePicker />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label='审核日期' name='date'>
                            <RangePicker />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{ textAlign: 'right', }}>
                        <Button type="primary" htmlType="submit">查询</Button>
                    </Col>
                </Row>
            </Form>
            <div className="search-result-list">{children}</div>
        </div>
    )
}

export default DataAuditSearch;