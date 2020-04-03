import React from 'react';
import { connect } from 'umi';
import { Select } from 'antd';
import styles from './index.less';

const { Option } = Select;

const DealerSelect = ({ list = [], isLoading, dispatch, status, getVal }) => {

  const handleDropdown = () => {
    if (status !== 'done') {
      dispatch({
        type: 'dealer/getList'
      })
    }
  }

  const handleChange = value => {
    getVal(value);
  }

  return (
    <div className={styles.container}>
      <div id="components-select-demo-search">
        <dl className="inline">
          <dt>经销商：</dt>
          <dd>
            <Select style={{width: 220}} showSearch loading={isLoading} placeholder="请选择" optionFilterProp="children" onDropdownVisibleChange={handleDropdown} onChange={handleChange} >
              {list.map(item => <Option key={item.id} value={item.id}>{item.val}</Option>)}
            </Select>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default connect(({ dealer }) => (dealer))(DealerSelect);