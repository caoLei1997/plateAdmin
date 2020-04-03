import React from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import styles from './index.less';

export default () => (
  <div className={styles.container}>
    <Card>
      <Row>
        <Col span={4} className='total item-wrap'>
          <Statistic title="已分配总数" value={59876} />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={8} className='item-wrap'><Statistic title="自用号牌" value={112893} /></Col>
            <Col span={8} className='item-wrap'><Statistic title="快递号牌" value={112893} /></Col>
            <Col span={8} className='item-wrap'><Statistic title="外卖号牌" value={112893} /></Col>
          </Row>
        </Col>
      </Row>
    </Card>
    <Card>
      <Row>
        <Col span={4} className='total item-wrap'>
          <Statistic title="剩余库存总数" value={112893} />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={8} className='item-wrap'><Statistic title="自用号牌" value={112893} /></Col>
            <Col span={8} className='item-wrap'><Statistic title="快递号牌" value={112893} /></Col>
            <Col span={8} className='item-wrap'><Statistic title="外卖号牌" value={112893} /></Col>
          </Row>
        </Col>
      </Row>
    </Card>
  </div>
);
