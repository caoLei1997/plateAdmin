import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import { Form, Select, Row, Col, Cascader } from 'antd';
import styles from './index.less';

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
      setCityVal(value);
      getOutletsList(value);
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

  const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  function onChange(value) {
    console.log(value);
  }

  return (
    <div className={styles.container}>
      <Row gutter={12}>
        <Col span={12}>
          <Form.Item name='city' label={city.label || ''} className='mb-16'>
          <Cascader
              options={personalDealerState.city}
              onChange={onChange}
              placeholder='选择市区'
              expandTrigger="hover"
              value={city.placeholder}
            />
            {/* <Cascader
              options={personalDealerState.city}
              onChange={onChange}
              placeholder={city.placeholder || "选择市区"}
              value={city.placeholder}
              expandTrigger="hover"
            /> */}
            {/* {JSON.stringify(personalDealerState) } */}
            {/* <Select placeholder={city.placeholder || "选择市区"} onSelect={value => handleSelect(value, 'city')}>
              {showAll && <Option value="">全部市区</Option>}
              {personalDealerState.city && personalDealerState.city.map(item => (
                <OptGroup label={item.value}>
                  {item.children.length > 0 && item.children.map(sItem => <Option value={`${item.value}-${sItem.value}`}>{sItem.value}</Option>)}
                </OptGroup>
              ))}
            </Select> */}
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
          <Select placeholder={dealer.placeholder || "选择所属商户"} onSelect={value => handleSelect(value, 'outlets')}>
            {showAll && <Option value="">全部网点</Option>}
            {personalDealerState.outlets && personalDealerState.outlets.map(item => <Option value={`${item.id}-${item.name}`}>{item.name}</Option>)}
          </Select>
          :
          <Select placeholder={dealer.placeholder || "选择所属商户"} onSelect={value => handleSelect(value, 'outlets')}>
            {showAll && <Option value="">全部网点</Option>}
            {personalDealerState.outlets && personalDealerState.outlets.map(item => <Option value={item.id}>{item.name}</Option>)}
          </Select>
        }
      </Form.Item>
    </div>
  );
}

export default connect(({ personalDealer }) => ({
  personalDealerState: personalDealer
}))(DealerSelect);