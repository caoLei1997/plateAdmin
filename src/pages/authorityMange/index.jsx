import React, { useEffect,useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Filter from './components/Filter'
import AuthorityTable from './components/AuthorityTable'
import { connect } from 'umi'
import styles from './index.less';
const AuthorityManage = ({ authorityList, dispatch }) => {

    useEffect(() => {
        dispatch({
            type: 'authorityList/getList',
        })
    }, [])

    
    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <Filter></Filter>
                <AuthorityTable authorityList={authorityList}></AuthorityTable>
            </div>
        </PageHeaderWrapper>
    );
}

export default connect(({ authorityList }) => ({ authorityList: authorityList }))(AuthorityManage);
