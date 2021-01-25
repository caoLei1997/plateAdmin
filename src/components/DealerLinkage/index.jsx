import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
<<<<<<< HEAD
import { Form, Select, Row, Col, Cascader as Cascade } from 'antd';
import styles from './index.less';
import { filterCity } from '@/utils/utils'
=======
import { Form, Select, Row, Col } from 'antd';
import styles from './index.less';

>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
const { Option, OptGroup } = Select;

const DealerSelect = (props) => {
  const { showAll, isAddPersonal, personalDealerState, dispatch, onCallBack, formProps = {}, span = 8 } = props;
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
<<<<<<< HEAD
      const city = value.join('-');
      setCityVal(city);
      getOutletsList(city);
=======
      setCityVal(value);
      getOutletsList(value);
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
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

<<<<<<< HEAD



=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
  return (
    <div className={styles.container}>
      <Row gutter={12}>
        <Col span={span}>
          <Form.Item name='city' label={city.label || ''} className='mb-16'>
<<<<<<< HEAD
            <Cascade
              options={filterCity(personalDealerState.city)}
              onChange={(value) => { handleSelect(value, 'city') }}
            />
=======
            <Select placeholder={city.placeholder || "选择市区"} onSelect={value => handleSelect(value, 'city')}>
              {showAll && <Option value="">全部市区</Option>}
              {personalDealerState.city && personalDealerState.city.map((item, index) => (
                <OptGroup label={item.value}>
                  {item.children.length > 0 && item.children.map((sItem, sIndex) => <Option key={index + '-' + sIndex} value={`${item.value}-${sItem.value}`}>{sItem.value}</Option>)}
                </OptGroup>
              ))}
            </Select>
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
          </Form.Item>
        </Col>
        <Col span={span}>
          <Form.Item name='level' label={level.label || ''} className='mb-16'>
<<<<<<< HEAD
            <Select
              placeholder={level.placeholder || "选择商户级别"}
              onSelect={value => handleSelect(value, 'level')}
            >
=======
            <Select placeholder={level.placeholder || "选择商户级别"} onSelect={value => handleSelect(value, 'level')}>
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
              {showAll && <Option value="">全部级别</Option>}
              <Option value="11">品牌厂家</Option>
              <Option value="12">经销商</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={span}>
          <Form.Item name='outlets' value={outletsVal} label={dealer.label || ''} className='mb-16'>
            {isAddPersonal ?
              <Select placeholder={dealer.placeholder || "选择所属商户"} onSelect={value => handleSelect(value, 'outlets')}>
                {showAll && <Option value="">全部网点</Option>}
<<<<<<< HEAD
                {personalDealerState.outlets && personalDealerState.outlets.map((item, index) => <Option key={index} value={`${item.id}-${item.name}`}>{item.name}</Option>)}
=======
                {personalDealerState.outlets && personalDealerState.outlets.map((item,index) => <Option key={index} value={`${item.id}-${item.name}`}>{item.name}</Option>)}
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
              </Select>
              :
              <Select placeholder={dealer.placeholder || "选择所属商户"} onSelect={value => handleSelect(value, 'outlets')}>
                {showAll && <Option value="">全部网点</Option>}
<<<<<<< HEAD
                {personalDealerState.outlets && personalDealerState.outlets.map((item, index) => <Option key={index} value={item.id}>{item.name}</Option>)}
=======
                {personalDealerState.outlets && personalDealerState.outlets.map((item,index) => <Option key={index} value={item.id}>{item.name}</Option>)}
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
              </Select>
            }
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default connect(({ personalDealer }) => ({
  personalDealerState: personalDealer
}))(DealerSelect);