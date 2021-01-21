import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { Form, Select, Row, Col, Cascader } from 'antd';
import styles from './index.less';
import { filterCity } from '@/utils/utils';
const { Option, OptGroup } = Select;

const DealerSelect = (props) => {
  const {
    showAll,
    isAddPersonal,
    personalDealerState,
    dispatch,
    onCallBack,
    formProps = {},
    span = 8,
    selectLoading
  } = props;
  const [cityVal, setCityVal] = useState('');
  const [levelVal, setLevelVal] = useState('');
  const [outletsVal, setOutletsVal] = useState('6666666');




  const { city = {}, level = {}, dealer = {} } = formProps;

  const getCityList = () => {
    dispatch({
      type: 'personalDealer/getCityList'
    })
  }

  const getOutletsList = (paramsCity, paramsLevel) => {
    const params = {};
    if (paramsCity) {
      params.city = paramsCity.split('-')[0];
      params.region = paramsCity.split('-')[1];
    }
    dispatch({
      type: 'personalDealer/getOutletsList',
      payload: {
        city: params.city || '',
        region: params.region || '',
        level: paramsLevel || levelVal
      },
      onSuccess: () => {
        setOutletsVal('');
      }
    })
  }

  const handleSelect = (value, key) => {
    onCallBack(value, key);
    if (key === 'city') {
      const city = value.join('-');
      setCityVal(city);
      getOutletsList(city);
    }

    if (key === 'level') {
      setLevelVal(value);
      getOutletsList(cityVal, value);
    }
    if (key === 'outlets') setOutletsVal(value);
    if (key !== 'outlets') onCallBack('', 'outlets');
  }

  useEffect(() => {
    getCityList();
  }, [])

  useEffect(() => {
    getOutletsList();
  }, [])



  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }

  return (
    <div className={styles.container}>
      <Row gutter={12}>
        <Col span={12}>
          <Form.Item name='city' label={city.label || ''} className='mb-16'>
            <Cascader
              options={filterCity(personalDealerState.city)}
              onChange={(value) => { handleSelect(value, 'city') }}
            />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name='level' label={level.label || ''} className='mb-16'>
            <Select placeholder={level.placeholder || "选择商户级别"} onSelect={value => handleSelect(value, 'level')}>
              {showAll && <Option value="">全部级别</Option>}
              <Option value="11">品牌厂家</Option>
              <Option value="12">经销商</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Form.Item name='outlets' value={outletsVal} label={dealer.label || ''} className='mb-16'>
        {isAddPersonal ?
          <Select
            placeholder={dealer.placeholder || "选择所属商户"}
            onSelect={value => handleSelect(value, 'outlets')}
            showSearch
            loading={selectLoading}
            disabled={selectLoading}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
             <Option value="">全部网点</Option>
            {personalDealerState.outlets && personalDealerState.outlets.map(item => <Option value={`${item.id}-${item.name}`}>{item.name}</Option>)}
          </Select>
          :
          <Select
            loading={selectLoading}
            disabled={selectLoading}
            placeholder={dealer.placeholder || "选择所属商户"}
            onSelect={value => handleSelect(value, 'outlets')}
            showSearch
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="">全部网点</Option>
            {personalDealerState.outlets && personalDealerState.outlets.map(item => <Option value={item.id}>{item.name}</Option>)}
          </Select>
        }
      </Form.Item>
    </div>
  );
}

export default connect(({ personalDealer, loading }) => ({
  personalDealerState: personalDealer,
  selectLoading: loading.effects['personalDealer/getOutletsList']
}))(DealerSelect);