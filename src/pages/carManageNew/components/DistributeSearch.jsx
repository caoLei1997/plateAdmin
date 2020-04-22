import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, DatePicker } from 'antd';
import SecondDealerList from '@/components/SecondDealerSelect';

const { RangePicker } = DatePicker;

const DistributeFormSearch = (props) => {

    const { getList } = props;
    const [ secondDealerVal, setSecondDealerVal ] = useState('');
    const [ platePrefixVal, setPlatePrefixVal ] = useState('');

    const secondDealerChange = (val) => {
        setSecondDealerVal(val);
    }

    const platePrefixChange = (val) => {
        setPlatePrefixVal(val);
    }

    const getFields = () => (<Row gutter={24}>
        <Col span={8}>
            <SecondDealerList change={secondDealerChange} />
        </Col>
        <Col span={8}>
            <Form.Item label='整车编码SN' name='SNCode'>
                <Input placeholder="整车编码SN" />
            </Form.Item>
        </Col>
        <Col span={8}>
            <SecondDealerList change={platePrefixChange} />
        </Col>
        <Col span={8}>
            <Form.Item label='车牌号' name='plateNumber'>
                <Input placeholder="车牌号" />
            </Form.Item>
        </Col>
        <Col span={8}>
            <Form.Item label='分配日期' name='date'>
                <RangePicker />
            </Form.Item>
        </Col>
    </Row>)

    const handleFinish = values => {
        getList(1, { ...values, secondDealer: secondDealerVal, platePrefix: platePrefixVal });
    }

    return (
        <Form className="ant-advanced-search-form" name='car-manage-form-search' onFinish={handleFinish}>
            {getFields()}
            <Row>
                <Col span={24} style={{ textAlign: 'right', }}>
                    <Button type="primary" htmlType="submit">查询</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default ({ children }) => (
    <div>
        <DistributeFormSearch />
        <div className="search-result-list mt-32">{children}</div>
    </div>
);
