import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  let url = '/agent/v1/agentOutlets/loginByVerify';
  let data = {
    'serialNumber': params.serialNumber,
    'phoneNumber': params.mobile,
    'verifyCode': params.captcha,
    'types': params.type
  }

  if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'buildtest') {
    url = '/agent/v1/agentOutlets/login';
    data = {
      userName: params.mobile,
      password: params.captcha,
      types: params.type
    }
  }

  return request(url, {
    method: 'POST',
    data,
    isToken: false
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
