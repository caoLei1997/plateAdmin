import { Card, Descriptions, Divider, Table } from 'antd';
import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import fieldData from './data'
import styles from './style.less';

const progressColumns = [
  {
    title: '审核人',
    dataIndex: 'applyPersonal',
    key: 'applyPersonal'
  },
  {
    title: '审核日期',
    dataIndex: 'applyDate',
    key: 'applyDate'
  },
  {
    title: '审核结果',
    dataIndex: 'applyResult',
    key: 'applyResult'
  },
  {
    title: '不通过原因',
    dataIndex: 'applyReason',
    key: 'applyReason'
  }
];

class Details extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'carManageAnddetails/fetchBasic',
    });
  }

  render() {
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          {fieldData.map(item => (<div>
            <Descriptions title={item.title} key={item.id} style={{ marginBottom: 32 }}>
              {item.children.length > 0 && item.children.map(sItem => <Descriptions.Item key={sItem.id} label={sItem.label}>{sItem.key}</Descriptions.Item>)}
            </Descriptions>
            <Divider style={{ marginBottom: 32 }} />
          </div>))}
          <div className={styles.title}>审核记录</div>
          <Table
            style={{
              marginBottom: 24,
            }}
            pagination={false}
            // loading={loading}
            // dataSource={goodsData}
            columns={progressColumns}
            rowKey="id"
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default connect(({ carManageAnddetails, loading }) => ({
  carManageAnddetails,
  loading: loading.effects['carManageAnddetails/fetchBasic'],
}))(Details);
