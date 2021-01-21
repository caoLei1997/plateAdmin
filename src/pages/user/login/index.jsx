import { Alert } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import LoginFrom from './components/Login';
import styles from './style.less';

const { Tab, Mobile, Submit, Captcha, PicCode } = LoginFrom;

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = props => {
  const { userLogin = {}, submitting, picCode, dispatch, picCodeLoading } = props;
  const { status, type: loginType } = userLogin;
  const [type, setType] = useState('mobile');

  const getPicCode = () => {
    dispatch({
      type: 'code/getPicCode'
    });
  }

  useEffect(() => {
    getPicCode();
  }, []);

  const handleSubmit = values => {
    dispatch({
      type: 'login/login',
      payload: { ...values, type: 7,applyType:1 },
      onFail: () => {
        getPicCode();
      }
    });
  };

  return (
    <div className={styles.main}>
      <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
        <Tab key="mobile" tab="用户登录">
          {status === 'error' && loginType === 'mobile' && !submitting && (
            <LoginMessage content="验证码错误" />
          )}
          <Mobile
            name="mobile"
            placeholder="手机号"
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1\d{10}$/,
                message: '手机号格式错误！',
              },
            ]}
          />
          <PicCode name="picCode">
            <div className='inline'>
              {picCodeLoading
                ?
                <SyncOutlined spin />
                :
                <img src={picCode.pic} alt='' onClick={getPicCode} style={{cursor: 'pointer'}} />
              }
            </div>
          </PicCode>
          <Captcha
            name="captcha"
            placeholder="验证码"
            countDown={120}
            getCaptchaButtonText=""
            getCaptchaSecondText="秒"
            checkId={picCode.checkId}
            getPicCode={() => { getPicCode() }}
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
          />
        </Tab>
        <Submit loading={submitting}>登录</Submit>
      </LoginFrom>
    </div>
  );
};

export default connect(({ login, loading, code }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
  picCode: code.picCode,
  picCodeLoading: loading.effects['code/getPicCode']
}))(Login);
