import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import { connect } from 'umi';
import DealerSelect from '@/components/DealerSelect';
import FormSearch from './components/FormAdvancedSearch';
import styles from './index.less';
import TableNestedTable from './components/TableNestedTable';
import AddBrand from './components/AddBrand';
import ImportSN from './components/ImportSN';

const catalogIndex = (props) => {
  const { dispatch, userInfo, catalogList } = props;
  const [firstDealerId, setFirstDealerId] = useState(userInfo.firstId);
  const [tableFilter, setTableFilter] = useState({});

  const firstDealerChange = (val) => {
    setFirstDealerId(val);
  }

  const getCatalogList = (current = catalogList.current, params, config = {}) => {
    if (params) setTableFilter(params);
    const searchParams = params || tableFilter;

    dispatch({
      type: 'catalogList/getList',
      payload: {
        "agentOutletsId": firstDealerId,
        "account": userInfo.phone,
        "pageIndex": current,
        "pageSize": catalogList.pageSize,
        "brandName": searchParams.brandName || '',
        "modelName": searchParams.modelName || '',
        ...config
      },
      onSuccess: (total) => {
        if (total < 1) return;
        const maxCurrent = Math.ceil(total / catalogList.pageSize);
        if (current > maxCurrent) {
          getCatalogList(maxCurrent > 1 ? maxCurrent : 1);
        }
      }
    })
  }

  useEffect(() => {
    getCatalogList(1);

    return () => {
      dispatch({ type: 'catalogList/resetState' });
    }
  }, [])

  return (
    <PageHeaderWrapper className={styles.main}>
      {/* <DealerSelect changeCallBack={firstDealerChange} /> */}
      <FormSearch getList={getCatalogList}>
        <div
          className="inline"
          style={{
            textAlign: 'right',
          }}
        >
          <AddBrand getList={getCatalogList} />
          <ImportSN getList={getCatalogList} />
        </div>
        <TableNestedTable getList={getCatalogList} />
      </FormSearch>
    </PageHeaderWrapper>
  );
}
export default connect(({ login, catalogList }) => ({
  userInfo: login,
  catalogList
}))(catalogIndex);
