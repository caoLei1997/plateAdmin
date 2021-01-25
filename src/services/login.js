import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  let url = '/manager/v1/agentOutlets/loginByVerify';
  let data = {
    'serialNumber': params.serialNumber,
    'phoneNumber': params.mobile,
    'verifyCode': params.captcha,
<<<<<<< HEAD
    'types': params.type,
    'applyType': params.applyType
=======
    'types': params.type
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
  }

  if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_ENV === 'buildtest') {
    url = '/manager/v1/agentOutlets/login';
    data = {
      userName: params.mobile,
      password: params.captcha,
<<<<<<< HEAD
      types: params.type,
      'applyType': params.applyType

=======
      types: params.type
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
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
