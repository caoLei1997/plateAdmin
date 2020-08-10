import React, { useEffect, useState } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import Filter from './components/Filter'
import AuthorityTable from './components/AuthorityTable'
import { connect } from 'umi'
import styles from './index.less';
const AuthorityManage = ({ authorityList, dispatch }) => {
    const getList = (filterValue = null) => {
        const { pageSize, current } = authorityList
        dispatch({
            type: 'authorityList/getList',
            payload: {
                pageSize:filterValue ? filterValue.pageSize :pageSize ,
                pageIndex: filterValue ? filterValue.current :current ,
                ...filterValue
            }
        })
    }
    const getRoles = () => {
        dispatch({
            type: 'authorityList/getRoles'
        })
    }

    useEffect(() => {
        getList()
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

export default connect(({ authorityList }) => ({ authorityList: authorityList }))(AuthorityManage);
