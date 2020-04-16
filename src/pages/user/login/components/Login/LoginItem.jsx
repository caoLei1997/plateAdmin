import { Button, Col, Input, Row, Form, message, notification } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import omit from 'omit.js';
import { requestMessageCode } from '@/services/code';
import ItemMap from './map';
import LoginContext from './LoginContext';
import { RETCODESUCCESS } from '@/globalConstant'
import styles from './index.less';

const FormItem = Form.Item;

const getFormItemOptions = ({ onChange, defaultValue, customProps = {}, rules }) => {
  const options = {
    rules: rules || customProps.rules,
  };

  if (onChange) {
    options.onChange = onChange;
  }

  if (defaultValue) {
    options.initialValue = defaultValue;
  }

  return options;
};

const LoginItem = props => {
  const [count, setCount] = useState(props.countDown || 0);
  const [timing, setTiming] = useState(false); // 这么写是为了防止restProps中 带入 onChange, defaultValue, rules props tabUtil
  const [captchaLoading, setCaptchaLoading] = useState(false);

  const {
    onChange,
    customProps,
    defaultValue,
    rules,
    name,
    getCaptchaButtonText,
    getCaptchaSecondText,
    updateActive,
    type,
    tabUtil,
    ...restProps
  } = props;

  const otherProps = restProps ? { ...restProps, children: null } : {};

  const onGetCaptcha = useCallback(async values => {
    setCaptchaLoading(true);
    const result = await requestMessageCode({
      phoneNumber: values.mobile,
      checkId: values.checkId,
      imgContent: values.picCode,
      types: 7
    });

    if (result.retCode !== RETCODESUCCESS) {
      notification.error({
        description: result.retMsg || '您的网络发生异常，无法连接服务器',
        message: result.retMsg ? '请求错误' : '网络异常',
      });
      setCaptchaLoading(false);
      otherProps.getPicCode();
      return;
    }
    setCaptchaLoading(false);
    values.onSuccess(result.data);
    message.success('获取验证码成功！');
    setTiming(true);
  }, []);

  useEffect(() => {
    let interval = 0;
    const { countDown } = props;

    if (timing) {
      interval = window.setInterval(() => {
        setCount(preSecond => {
          if (preSecond <= 1) {
            setTiming(false);
            clearInterval(interval); // 重置秒数

            return countDown || 60;
          }

          return preSecond - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timing]);

  if (!name) {
    return null;
  } // get getFieldDecorator props

  const options = getFormItemOptions(props);

  if (type === 'Captcha') {
    const inputProps = omit(otherProps, ['onGetCaptcha', 'countDown']);
    return (
      <FormItem shouldUpdate noStyle>
        {({ validateFields, setFieldsValue }) => (
          <Row gutter={8}>
            <Col span={16}>
              <FormItem name={name} {...options}>
                <Input {...customProps} {...inputProps} />
              </FormItem>
              <FormItem name='serialNumber' style={{ display: 'none' }}>
                <Input />
              </FormItem>
            </Col>
            <Col span={8}>
              <Button
                disabled={timing}
                loading={captchaLoading}
                className={styles.getCaptcha}
                size="large"
                onClick={() => {
                  validateFields(['mobile', 'picCode']).then(values => {
                    onGetCaptcha({
                      ...values, checkId: otherProps.checkId, onSuccess: (serialNumber) => {
                        setFieldsValue({ serialNumber })
                      }
                    });
                  })
                }}
              >
                {timing ? `${count} 秒` : '获取验证码'}
              </Button>
            </Col>
          </Row>
        )}
      </FormItem>
    );
  }

  if (type === 'PicCode') {
    const inputProps = omit(otherProps, ['onGetCaptcha', 'countDown']);
    return (<Form.Item>
      <Row gutter={8}>
        <Col span={16}>
          <Form.Item className='mb-0' name={name} {...options}>
            <Input  {...customProps} {...inputProps} />
          </Form.Item>
        </Col>
        <Col span={8} className='pic-code-box'>
          {props.children}
        </Col>
      </Row>
    </Form.Item>
    )
  }

  return (
    <FormItem name={name} {...options}>
      <Input {...customProps} {...otherProps} />
    </FormItem>
  );
};

const LoginItems = {};
Object.keys(ItemMap).forEach(key => {
  const item = ItemMap[key];

  LoginItems[key] = props => {
    return (
      <LoginContext.Consumer>
        {context => (
          <LoginItem
            customProps={item.props}
            rules={item.rules}
            {...props}
            type={key}
            {...context}
            updateActive={context.updateActive}
          />
        )}
      </LoginContext.Consumer>
    )
  };
});
export default LoginItems;
