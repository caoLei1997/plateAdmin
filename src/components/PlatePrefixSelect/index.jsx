import React from 'react';
import { connect } from 'umi';
import { Select, Form } from 'antd';
import styles from './index.less';

const { Option } = Select;

const SecondDealerSelect = (props) => {
  const { dispatch, selectLoading, platePrefixList, change = null } = props;

  const handleDropdown = () => {
    if (platePrefixList.length === 0) {
      dispatch({
        type: 'platePrefix/getList'
      })
    }
  }

  const handleChange = value => {
    if (change) { change(value); }
  }

  return (
    <div className={styles.container}>
      <Form.Item label='车牌序号' name='platePrefix'>
        <Select placeholder="车牌序号" loading={selectLoading} onDropdownVisibleChange={handleDropdown} onChange={handleChange}>
          {platePrefixList.map(item => <Option key={item} value={item}>{item}</Option>)}
        </Select>
      </Form.Item>
    </div>
  );
}

export default connect(({ login, loading, platePrefix }) => ({
  userInfo: login,
  platePrefixList: platePrefix.list,
  selectLoading: loading.effects['platePrefix/getList']
}))(SecondDealerSelect);