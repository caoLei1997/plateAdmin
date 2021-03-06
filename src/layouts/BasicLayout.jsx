/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 * You can view component api by:
 * https://github.com/ant-design/ant-design-pro-layout
 */
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React from 'react';
import { Link, connect } from 'umi';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { getAuthorityFromRouter } from '@/utils/utils';
import { SUPER_UNIQUE } from '@/globalConstant'
import styles from './BasicLayout.less';
import login from '@/pages/user/login';

const noMatch = (
  <Result
    status={403}
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);


const defaultFooterDom = (
  <DefaultFooter
    copyright="陕西万盛达信息科技有限公司"
    links={[]}
  />
);

const BasicLayout = props => {
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
    loginState
  } = props;



  /**
   * constructor
   */

  // useEffect(() => {
  //   if (dispatch) {
  //     dispatch({
  //       type: 'user/fetchCurrent',
  //     });
  //   }
  // }, []);
  /**
   * init variables
   */
  /**
   * use Authorized check all menu item
   */

  const menuDataRender = menuList =>
    menuList.map(item => {
      const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
      return Authorized.check(item.authority, localItem, null);
    });

  const handleMenuCollapse = payload => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };

  return (
    <ProLayout
      menuHeaderRender={(logoDom, titleDom) => (
        <Link to="/" className={styles.menuTitle}>
          {titleDom}
        </Link>
      )}
      onCollapse={handleMenuCollapse}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || !menuItemProps.path) {
          return defaultDom;
        }
        return (
            <Link to={menuItemProps.path}>{defaultDom}</Link>
        );
      }}
      breadcrumbRender={(routers = []) => {
        return [
          ...routers,
        ]
      }}
      itemRender={(route, params, routes, paths) => {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
          <span>{route.breadcrumbName}</span>
        ) : (
            <Link to={`/${paths[paths.length - 1]}`}> {route.breadcrumbName}</Link>
          );
      }}
      footerRender={() => defaultFooterDom}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
      {...props}
      {...settings}
    >
      <Authorized authority={authorized.authority} noMatch={noMatch}>
        {children}
      </Authorized>
    </ProLayout>
  );
};

export default connect(({ login, global, settings }) => ({
  collapsed: global.collapsed,
  settings,
  loginState: login
}))(BasicLayout);
