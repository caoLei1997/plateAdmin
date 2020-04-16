import { LOCALUSERKEY, SUPER_UNIQUE } from '@/globalConstant';
import { reloadAuthorized } from './Authorized'; // use localStorage to store the authority info, which might be sent from server in actual project.

export function getAuthority(str) {
  const authorityString =
    typeof str === 'undefined' && localStorage ? localStorage.getItem('antd-pro-authority') : str; // authorityString could be admin, "admin", ["admin"]

  let authority;

  try {
    if (authorityString) {
      authority = JSON.parse(authorityString);
    }
  } catch (e) {
    authority = authorityString;
  }

  if (typeof authority === 'string') {
    return [authority];
  } // preview.pro.ant.design only do not use in your production.
  // preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

  if (!authority && ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
    return ['admin'];
  }

  return authority;
}

export function getAuthority2() {
  const userInfo = sessionStorage.getItem(LOCALUSERKEY);
  if (userInfo && userInfo !== "null") {
    const parseUserInfo = JSON.parse(userInfo) || {};
    if (parseUserInfo.id === SUPER_UNIQUE) {
      parseUserInfo.firstId = '';
      setAuthority(parseUserInfo);
    }
    return parseUserInfo;
  }
  return null;
}


export function setAuthority(authority) {
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  const val = authority ? JSON.stringify(proAuthority) : null;
  sessionStorage.setItem(LOCALUSERKEY, val)

  reloadAuthorized();
}
