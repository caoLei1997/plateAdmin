import React, { useEffect } from 'react';
import { connect } from 'umi';
import { Select } from 'antd';
import { SUPER_UNIQUE } from '@/globalConstant';
import styles from './index.less';

const { Option } = Select;

const DealerSelect = ({ dispatch, userInfo, selectLoading, dealerList }) => {

  useEffect(() => {
    if (userInfo.id === SUPER_UNIQUE) {
      return () => {
        dispatch({
          type: 'login/setFirstId',
          payload: { value: '' }
        })
      }
    }
  }, [])

  const handleDropdown = () => {
    if (dealerList.length === 0) {
      dispatch({
        type: 'dealer/getList'
      })
    }
  }

  const handleChange = value => {
    // getVal(value);
    dispatch({
      type: 'dealer/setChoiceVal',
      payload: { value }
    })

    dispatch({
      type: 'login/setFirstId',
      payload: { value }
    })
  }

  return (
    <div className={styles.container}>
      <div id="components-select-demo-search">
        <dl className="inline">
          <dt>经销商：</dt>
          <dd>
            {userInfo.id === SUPER_UNIQUE ?
              <Select style={{ width: 220 }} showSearch loading={selectLoading} placeholder="请选择" optionFilterProp="children" onDropdownVisibleChange={handleDropdown} onChange={handleChange} >
                {dealerList.map(item => <Option key={item.id} value={item.id}>{item.name}</Option>)}
              </Select>
              : userInfo.name
            }
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default connect(({ login, loading, dealer }) => ({
  userInfo: login,
  dealerList: dealer.list,
  selectLoading: loading.effects['dealer/getList']
}))(DealerSelect);