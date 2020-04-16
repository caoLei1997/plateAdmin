import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import DealerSelect from '@/components/DealerSelect';
import FormSearch from './components/FormAdvancedSearch';
import styles from './index.less';
import TableNestedTable from './components/TableNestedTable';
import AddBrand from './components/AddBrand';
import ImportSN from './components/ImportSN';

const catalogIndex = ({ dispatch }) => {

  useEffect(() => {
    return () => {
      dispatch({ type: 'catalogList/resetState' });
    }
  }, [])

  return (
    <PageHeaderWrapper className={styles.main}>
      <DealerSelect />
      <FormSearch>
        <div
          className="inline"
          style={{
            textAlign: 'right',
          }}
        >
          <AddBrand />
          <ImportSN />
        </div>
        <TableNestedTable />
      </FormSearch>
    </PageHeaderWrapper>
  );
}
export default connect()(catalogIndex);
