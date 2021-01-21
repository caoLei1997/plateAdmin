import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  let url = '/manager/v1/agentOutlets/loginByVerify';
  let data = {
    'serialNumber': params.serialNumber,
    'phoneNumber': params.mobile,
    'verifyCode': params.captcha,
    'types': params.type,
    'applyType': params.applyType
  }

  if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'buildtest') {
    url = '/manager/v1/agentOutlets/login';
    data = {
      userName: params.mobile,
      password: params.captcha,
      types: params.type,
      'applyType': params.applyType

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
