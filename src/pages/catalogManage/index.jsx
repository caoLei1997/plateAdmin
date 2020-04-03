import { Row, Col } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useEffect } from 'react';
import { connect } from 'umi';
import DealerSelect from '@/components/DealerSelect';
import FormSearch from './components/FormAdvancedSearch';
import styles from './index.less';
import TableNestedTable from './components/TableNestedTable';
import AddBrand from './components/AddBrand';
import ImportSN from './components/ImportSN';

const catalogIndex = ({ catalogList, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'catalogList/getList',
    });
  }, []);
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
        <TableNestedTable data={catalogList} />
      </FormSearch>
      {/* <Row>
        <Col
          span={12}
          style={{
            minHeight: 400,
            padding: 16,
            borderRight: '1px solid #DDD',
          }}
        >
          INSERT_BLOCK_PLACEHOLDER:Col 12
        </Col>
        <Col
          span={12}
          style={{
            minHeight: 400,
            padding: 16,
          }}
        >
          INSERT_BLOCK_PLACEHOLDER:Col 12
        </Col>
      </Row> */}
    </PageHeaderWrapper>
  );
};

export default connect(({ catalogList }) => ({
  catalogList,
}))(catalogIndex);
