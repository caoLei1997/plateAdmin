import React from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import { Redirect, connect } from 'umi';
import { stringify } from 'querystring';
import { getPageQuery } from '@/utils/utils';

class SecurityLayout extends React.Component {


  componentDidMount() {
  }

  render() {
    const { children, loading, currentUser } = this.props; // You can replace it to your authentication rule (such as check token exists)
    // 你可以把它替换成你自己的登录认证规则（比如判断 token 是否存在）

    const isLogin = currentUser && currentUser.token;
    const params = getPageQuery();
    const { redirect } = params;
    const queryString = stringify({
      redirect: window.location.href,
    });

    if (!isLogin && loading) {
      return <PageLoading />;
    }

    if (!isLogin && window.location.pathname !== '/user/login') {
      return <Redirect to={`/user/login?${redirect ? '' : queryString}`} />;
    }

    return children;
  }
}

export default connect(({ login, loading }) => ({
  currentUser: login,
  loading: loading.models.user,
}))(SecurityLayout);
