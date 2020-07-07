import { Menu, Breadcrumb,Alert } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { connect } from 'umi';
import styles from './index.less';

import AgentLevelOne from "./agentLevelOne"
import AgentLevelTwo from "./agentLevelTwo"

class agentManage extends React.Component {
  constructor(props){
    super(props)
    this.state={
      level_current:'level_one'
    }
  }
  handleClick = (e)=>{
    this.setState({
      level_current:e.key
    })
  }

  render(){
    let {level_current,cItyRegion} = this.state
   return (
      <div className={styles.agentManageMain}>
        <Breadcrumb>
          <Breadcrumb.Item>带牌销售</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="javascript:;">商户管理</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.level_current]} mode="horizontal">
          <Menu.Item key="level_one" >
            品牌厂家
          </Menu.Item>
          <Menu.Item key="level_tow">
            经销商
          </Menu.Item>
        </Menu>
        {
          level_current === 'level_one'?<AgentLevelOne onSubmit={this.getCItyRegion.bind(this)}></AgentLevelOne>:<AgentLevelTwo cityData={cItyRegion}></AgentLevelTwo>
        }
      </div>
    );
  }
  getCItyRegion(data){
    console.log('data:',data);
    this.setState({
      cItyRegion:data
    })
  }
};

export default connect(({ login, loading, code }) => ({
  userLogin: login,
}))(agentManage);
