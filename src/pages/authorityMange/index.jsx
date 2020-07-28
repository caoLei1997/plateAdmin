import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Filter from './components/Filter'
import AuthorityTable from './components/AuthorityTable'

import styles from './index.less';
const authorityManage = () => {


  

    return (
        <PageHeaderWrapper className={styles.main}>
            <div className='mt-top_15'>
               <Filter></Filter>
                
               <AuthorityTable></AuthorityTable>
            </div>
        </PageHeaderWrapper>

    );
}

export default authorityManage;
