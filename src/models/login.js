import { RETCODESUCCESS, SUPER_UNIQUE, PoliceChannel, agentChannel, BrigadeChannel } from '@/globalConstant';
import { stringify } from 'querystring';
import { history } from 'umi';
import { fakeAccountLogin } from '@/services/login';
import { setAuthority, getAuthority2 } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { log } from 'util';

const initialUser = getAuthority2() || {};

const Model = {
  namespace: 'login',
  state: {
    ...initialUser,
    status: undefined
  },
  effects: {
    *login({ payload, onFail }, { call, put }) {
      const response = yield call(fakeAccountLogin, payload);

      yield put({
        type: 'changeLoginStatus',
        payload: response,
      }); // Login successfully

      if (response.retCode === RETCODESUCCESS) {
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        console.log(redirect);


        // if (redirect) {
        //   const redirectUrlParams = new URL(redirect);
        //
        //   if (redirectUrlParams.origin === urlParams.origin) {
        //     redirect = redirect.substr(urlParams.origin.length);
        //
        //     if (redirect.match(/^\/.*#/)) {
        //       redirect = redirect.substr(redirect.indexOf('#') + 1);
        //     }
        //   } else {
        //     window.location.href = '/';
        //     return;
        //   }
        // } else
        if (response.data.id === SUPER_UNIQUE) {
          history.replace('/personal');
          return;
        } else if (response.data.channel === PoliceChannel) {
          history.replace('/record');
          return;
        } else if (response.data.channel == agentChannel) {
          history.replace('/carmanage');
          return;
        } else if (response.data.channel == BrigadeChannel)
          history.replace('/record');

      } else {
        onFail();
      }
    },

    *logout(action, { put }) {
      yield put({
        type: 'changeLoginStatus'
      });
    },
  },
  reducers: {
    changeLoginStatus(state, { payload }) {
      if (!payload) { setAuthority(null); return { status: 'fail' } }
      const userInfo = {
        ...payload.data,
        phone: payload.data.account,
        firstId: payload.data.id === SUPER_UNIQUE ? '' : payload.data.id,
        'antd-pro-authority': authorityFn(payload.data),
        // antdProAuthority: authorityFn(payload.data),
      };
      setAuthority(userInfo);

      return {
        ...state,
        ...userInfo,
        status: payload.retCode,
        type: payload.type
      };
    },
    setFirstId(state, { payload }) {
      return { ...state, firstId: payload.value }
    }
  },
};
export default Model;

function authorityFn(data) {
  console.log('data: ', data)
  if (data.id === SUPER_UNIQUE) {
    return 'admin'
  } else if (data.channel === PoliceChannel) {
    return 'police'
  } else if (data.channel === agentChannel) {
    return 'agent'
  } else if (data.channel === BrigadeChannel) {
    return 'brigade'
  }
    

  
}
