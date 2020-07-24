import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import FormSearch from './components/FormAdvancedSearch/index';
import AddPersonal from './components/Add/index';
import TableList from './components/TableList';
import styles from './index.less';

const PersonalIndex = (props) => {
  const { dispatch, listStore: { current, pageSize, filter }, userInfo, match: { params = {} } } = props;

  const getList = (pageIndex = current, listParams = filter) => {

    console.log(111111,pageIndex,listParams);
    
    dispatch({
      type: 'personalList/getList',
      payload: {
        "agentOutletsId": listParams.outlets || userInfo.firstId,
        "pageIndex": pageIndex,
        "pageSize": listParams.pageSize || pageSize,
        "name": listParams.name || "",
        "phoneNumber": listParams.phone || "",
        "city": listParams.city || "",
        "region": listParams.region || "",
        "level": listParams.level || ''
      }
    })
  }

  useEffect(() => {
    if (params.index) {
      getList(current, { outlets: Number(params.index) });
      return;
    }
    getList();
  }, [])

  return (
    <PageHeaderWrapper className={styles.main}>
      <FormSearch getList={getList} defaultOutlets={Number(params.index)}>
        <div
          className="inline"
          style={{
            textAlign: 'right',
          }}
        >
          <AddPersonal onGetList={getList} />
        </div>
        <TableList getList={getList} />
      </FormSearch>
    </PageHeaderWrapper>
  );
};


export default connect(({ login, personalList }) => ({
  listStore: personalList,
  userInfo: login,
}))(PersonalIndex)