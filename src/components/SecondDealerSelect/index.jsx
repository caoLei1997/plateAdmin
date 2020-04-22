import React from 'react';
import { connect } from 'umi';
import { Select, Form } from 'antd';
import styles from './index.less';

const { Option } = Select;

const SecondDealerSelect = (props) => {
  const { dispatch, userInfo, selectLoading, subDealerList, change = null, firstId } = props;

  const handleDropdown = () => {
    if (subDealerList.length === 0) {
      dispatch({
        type: 'subDealer/getList',
        payload: {
          "agentOutletsId": firstId || userInfo.firstId
        }
      })
    }
  }

  const handleChange = value => {
    if (change) { change(value); }
  }

  return (
    <div className={styles.container}>
      <Form.Item label='次级经销商' name='secondDealer'>
        <Select placeholder="次级经销商" loading={selectLoading} onDropdownVisibleChange={handleDropdown} onChange={handleChange}>
          {subDealerList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
        </Select>
      </Form.Item>
    </div>
  );
}

export default connect(({ login, loading, subDealer }) => ({
  userInfo: login,
  subDealerList: subDealer.list,
  selectLoading: loading.effects['subDealer/getList']
}))(SecondDealerSelect);