/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { LOCALUSERKEY, RETCODESUCCESS, RETCODE_TOKEN_ERR } from '@/globalConstant';
import { extend } from 'umi-request';
import { setAuthority, getAuthority2 } from '@/utils/authority';
import { notification } from 'antd';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};


/**
 * 异常处理程序
 */
const errorHandler = error => {
  const { response, message } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: message || '您的网络发生异常，无法连接服务器',
      message: message ? '请求错误' : '网络异常',
    });
  }

  return response || '';
};
/**
 * 配置request请求时的默认参数
 */

const request = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
});


request.interceptors.request.use((url, options = {}) => {
  const { isToken = true } = options;
  const headers = {};
  const sessionData = getAuthority2() || {};
  if (isToken) headers.token = sessionData.token;
  // if (isToken) headers.token = '07dc5aa9-8c43-4c8b-bae6-85081a3c1599';

  let queryUrl = url;
  if (process.env.NODE_ENV === 'development') {
    queryUrl = `/cjj-api${url}`;
    // queryUrl = `/cjj-api${url}`; // 开发环境
    // queryUrl = `/vehicle-pre${url}`;
    // queryUrl = `/vehicle/${url}`;
    // queryUrl = `/api${url}`;
  }
  if (process.env.NODE_ENV === 'production') {
    queryUrl = `/api${url}`;    // 正式环境
    if(process.env.REACT_APP_ENV === 'buildtest'){
       queryUrl = `/vehicle-pre${url}`;   // 测试环境
    //  queryUrl = `http://localhost${url}`;   // 测试环境
    }
  }
  return {
    url: queryUrl,
    options: {
      ...options,
      headers
    }
  }
})

request.interceptors.response.use((response) => {
  return response.json().then((data = {}) => {
    if (data.retCode !== RETCODESUCCESS) {
      if (data.retCode === RETCODE_TOKEN_ERR) {
        notification.error({
          description: '登录信息过期，请重新登录',
          message: '登录信息过期',
          onClose: () => {
            setAuthority(null);
            window.location.href = '/';
          }
        });
      } else {
        notification.error({
          description: data.retMsg || '您的网络发生异常，无法连接服务器',
          message: data.retMsg ? '请求错误' : '网络异常',
        });
      }
    }
    return data;
  });
})

export default request;
