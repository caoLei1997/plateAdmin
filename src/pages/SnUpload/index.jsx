import React, { useState, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
import styles from './index.less';
import { connect } from 'umi'

import { SnUploadBatch, SnUploadList } from './components'

const SnUpload = (props) => {
  const { dispatch, snUpload } = props;

  const [tbaCurrent, setTabCurrent] = useState('1');

  const reqSubUploadList = (
    pageIndex = snUpload.pageIndex,
    pageSize = snUpload.pageSize,
    rotation = false,
  ) => {
    dispatch({
      type: 'snUpload/reqSubUploadList',
      payload: {
        pageIndex,
        pageSize,
      },
      rotation: rotation
    })
  }

  useEffect(() => {
    return () => reqSubUploadList(1, 20)
  },[])





  const handleChange = (tabCurrent) => {
    setTabCurrent(tabCurrent)
    if (tabCurrent == 2) {
      reqSubUploadList(1, 20)
    }
  }

  const changeTbaCurrentsCB = () => {
    setTabCurrent('2');
    reqSubUploadList(1, 20);
  }
  return (
    <PageHeaderWrapper className={styles.main}>
      <Tabs
        activeKey={tbaCurrent}
        onChange={handleChange}
      >
        <TabPane tab='上传SN批次' key="1">
          <SnUploadBatch changeTbaCurrentsCB={changeTbaCurrentsCB} />
        </TabPane>
        <TabPane tab='上传列表' key="2">
          {/* <SnUploadList  /> */}
          <SnUploadList reqSubUploadList={reqSubUploadList} />
        </TabPane>
      </Tabs>
    </PageHeaderWrapper>
  );
}


const mapStateToProps = ({
  snUpload,
}) => ({
  snUpload,
})

export default connect(mapStateToProps)(SnUpload);
