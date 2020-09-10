import React, { useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Filter from './components/Filter'
import AuthorityTable from './components/AuthorityTable'
import { connect } from 'umi'
import styles from './index.less';
import login from '../user/login';
const AuthorityManage = ({ authorityList, dispatch }) => {
    const getList = ({
        filterValue = authorityList.filterValue,
        pageIndex = authorityList.pageIndex,
        pageSize = authorityList.pageSize
    }) => {
        dispatch({
            type: 'authorityList/getList',
            payload: {
                pageIndex,
                pageSize,
                filterValue,
            }
        })
    }
    const getRoles = () => {
        dispatch({
            type: 'authorityList/getRoles'
        })
    }
    useEffect(() => {
        getList({pageIndex:1})
        getRoles()
      
    }, [])
    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <Filter getList={getList}></Filter>
                <AuthorityTable getList={getList}></AuthorityTable>
            </div>
        </PageHeaderWrapper>
    );
}

export default connect(({ authorityList }) => ({ authorityList }))(AuthorityManage);
