import React from 'react';
import style from './index.less';
import { Form, Input, Button, Cascader,Table,Modal,Select,notification,Spin, Checkbox,Tag} from 'antd';
import {requestAgentList, requestCityRegion, requestBrand, editFirstAgentSave, useOrStop} from "../../../services/agentManage"
import Add from "./add/add"
const { Option } = Select;
import { Link } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.selectChildren = [];
        this.brandsList = [];
        this.agentTableListParams = {};
      this.state={
          dropdownData:[],
          dropdownValue:'',
        statusDropdownValue:'',
          tableDataSource: [],
        consTrCt:false,
          tableColumns:[
            {title: '商户ID', dataIndex: 'agentOutletsId', key: 'agentOutletsId',},
            {title: '商户名称', dataIndex: 'agentOutletsName', key: 'agentOutletsName',},
            {title: '级别', dataIndex: 'level', key: 'level',},
            {title: '市区', dataIndex: 'cityRegion', key: 'cityRegion',},
            {title: '地址', width:160,dataIndex: 'address', key: 'address',},
            {title: '代理品牌', dataIndex: 'brand', key: 'brand',},
            {title: '人员数', dataIndex: 'personNum', key: 'personNum',},
            {title: '状态', dataIndex: 'statusTxt', key: 'statusTxt',},
            {title: '停用/启用日期', dataIndex: 'updateTime', key: 'updateTime',width:150},
            {title: '操作', dataIndex: 'do', key: 'do',width:60},
          ],
          selectChildren:[],
          editVisible:false,
          editDataName:'',
          editDataCity:[],
          editDataAddress:'',
          editDataBrandId:[],
          agentName:'',
          agentBrand:'',
        // paginationSeting
          total:null,
          pageSize:10,
          pageIndex:1,
          onChange:(a,b)=>{
            console.log(a,b);
            let {pageSize,dropdownValue} = this.state;
            this.agentTableListParams = {
              pageIndex: a,
              pageSize: pageSize,
              level: 11,
              brandName:this.state.agentBrand,
              agentOutletsName: this.state.agentName,
              status:this.state.statusDropdownValue,
              city: dropdownValue&&dropdownValue[0],
              region: dropdownValue&&dropdownValue[1]
            };
            this.tableListReq(this.agentTableListParams)
          },
        spinningStatus:true
        }
    }

    componentDidMount() {
      this.agentTableListParams = {
        pageIndex: 1,
        pageSize: this.state.pageSize,
        level: 11,
        brandName:'',
        agentOutletsName: "",
        status:this.state.statusDropdownValue,
        city: "",
        region: ""
      };
      console.log(process.env.REACT_APP_ENV);
      this.tableListReq(this.agentTableListParams);
      this.reqCityRegion();
      this.reqBrand();
    }

    componentWillUnmount() {

    }


  editData = (a,b) =>{
    console.log(a,b);
    let brandId = [];
    let brandsList = this.brandsList;
    a.brandList.forEach((v,k)=>{
      brandId.push(v.id);
      brandsList.forEach((i,j)=>{
        if(v.id === i.id){
          i.agented = 1
        }
      })
    });
    console.log(brandsList);
    this.selectChildrenRender(brandsList);
    this.setState({
        editVisible:true,
        editDataName:a.agentOutletsName,
        editDataCity:[a.city,a.region],
        editDataAddress:a.address,
        editDataBrandId:brandId,
        editDataId:a.agentOutletsId,
        selectChildren:this.selectChildren
      })
  };
  personNumClick(a,b){
    console.log(a,b);
  }


  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  onFinish = values => {
    console.log('Success:', values);
  };
    render() {
      let {dropdownData,tableDataSource,paginationSeting,tableColumns,visible,editDataName,editDataCity,editDataAddress,editDataBrandId,total,pageSize,pageIndex,onChange,selectChildren,spinningStatus,useOrStopTitle,useOrStopVisible,useOrStopContent,useOrStopIsUse,consTrCt} = this.state

        return (
        <div className={style.agentLevelOneMain}>
          <div className={style.searchBox}>
            <div className={style.searchBoxItem}>
              <span>商户名称：</span>
              <Input onChange={this.inpChange1} className={style.inp} placeholder='姓名' size='middle' />
            </div>
            <div className={style.searchBoxItem}>
              <span>代理品牌：</span>
              <Input onChange={this.inpChange2} className={style.inp} placeholder='品牌名称' size='middle'/>
            </div>
            <div className={style.searchBoxItem}>
              <span>市区：</span>
              <Cascader
                options={dropdownData}
                expandTrigger="hover"
                displayRender={this.displayRender}
                onChange={this.dropDownChange}
                className={style.inp}
                placeholder='全部'
              />
            </div>
              <div className={style.searchBoxItem}>
                <span>状态：</span>
                <Cascader
                  options={[{label:'全部',value:''},{label:'启用',value:'0'},{label:'停用',value:'1'}]}
                  expandTrigger="hover"
                  displayRender={this.displayRender}
                  onChange={this.statusDropDownChange}
                  className={style.inp}
                  placeholder='全部'
                />
              </div>

            <Button className={style.sub} onClick={this.submitSearchData} type="primary" htmlType="submit">
              查询
            </Button>
          </div>

          <div className={style.addAgentBox}>
            <Button style={{backgroundColor:'#52c41a',color:'#fff'}} className={style.btn} icon={<PlusOutlined />} onClick={this.showModal}>新增品牌厂家</Button>
          </div>
          <Spin spinning={spinningStatus}>
            <div className={style.tableList}>
              <Table dataSource={tableDataSource} pagination={consTrCt&&{
                total:total,
                pageSize:pageSize,
                current:pageIndex,
                onChange:onChange,
              }} columns={tableColumns}/>
            </div>
          </Spin>
          {/*添加弹框*/}
          {dropdownData.length>0&&<Add onRef={this.onRef}  onChangePLoad={this.childChangeState}  onAddOk={this.submitSearchData} brandChildren={selectChildren} cityRegion={dropdownData}></Add>}
          {/*编辑弹框*/}
          <Modal
            title="编辑品牌厂家"
            visible={this.state.editVisible}
            onOk={this.editHandleOk}
            onCancel={this.editHandleCancel}
            maskClosable={false}
          >
            <div className={style.editInp}>
              <Input className={style.editInp} value={editDataName} onChange={this.editAgentNameInp} placeholder="品牌厂家名称" />
            </div>
            <div className={style.editInp}>
              <Cascader
                options={dropdownData}
                expandTrigger="hover"
                onChange={this.editDropDownChange}
                className={style.editInp}
                placeholder='选择市区'
                value={editDataCity}
              />
            </div>
            <div className={style.editInp}>
              <Input className={style.editInp} value={editDataAddress} onChange={this.editAgentAddressInp} placeholder="品牌厂家地址" />
            </div>
            <div className={style.editInp}>
              <Select
                allowClear={true}
                style={{ width: '100%' }}
                placeholder="选择代理品牌"
                onChange={this.editHandleChange}
                value={editDataBrandId}
              >
                {selectChildren}
              </Select>
            </div>
          </Modal>
          {/*停用启用弹窗*/}
          <Modal
            title={useOrStopTitle}
            visible={useOrStopVisible}
            onOk={this.useOrStopHandleOk}
            onCancel={this.useOrStopHandleCancel}
          >
            <p>{useOrStopContent}</p>
            {
              useOrStopIsUse
            }
          </Modal>
        </div>
        );
    }
  editAgentNameInp = (e)=>{this.setState({editDataName:e.target.value})};
  editDropDownChange = (e)=>{this.setState({editDataCity:e})};
  editAgentAddressInp = (e)=>{this.setState({editDataAddress:e.target.value})};
  editHandleChange = (v1,v2)=>{
    console.log(v1,v2);
    // sendDataBrand
    let arr = [];
    let arr1 = [];
    arr.push(v2&&v2.value)
    this.setState({
      editDataBrandId:arr,
    })
  };
  editHandleCancel = ()=>{this.setState({editVisible:false})};
  editHandleOk = ()=>{
    let {editDataName,editDataCity,editDataAddress,editDataBrandId,editDataId} = this.state;
    if(!editDataName){alert('请输入商户名称'); return}
    if(!editDataCity){alert('请选择市区');return}
    if(!editDataAddress){alert('请填写地址');return}
    this.setState({spinningStatus:true,editVisible:false});
    editFirstAgentSave({
        id: editDataId,
        name: editDataName,
        city: editDataCity[0],
        region: editDataCity[1],
        address: editDataAddress,
        brandIds:editDataBrandId,
      }).then(res=>{
      this.tableListReq(this.agentTableListParams)
    });

  };


  onRef = (ref) => {
    this.child = ref
  };

  showModal = () => {
    this.child.showModal();
  };

  inpChange1 = (e)=>{
    this.setState({
      agentName:e.target.value
    })
  };
  inpChange2 = (e)=>{
    this.setState({
      agentBrand:e.target.value
    })
  };
// Just show the latest item.
   displayRender(label) {
    return label[label.length - 1];
  }
  dropDownChange = (a)=>{
    this.setState({
      dropdownValue:a
    })
  };
  statusDropDownChange = (a)=>{
    console.log(a.join(''))
    this.setState({
      statusDropdownValue:a.join('')
    })
  };

  submitSearchData = ()=>{
    let {agentName,agentBrand,dropdownValue,statusDropdownValue} = this.state;
    this.agentTableListParams.brandName = agentBrand;
    this.agentTableListParams.agentOutletsName = agentName;
    this.agentTableListParams.status = statusDropdownValue;
    this.agentTableListParams.city = dropdownValue&&dropdownValue[0];
    this.agentTableListParams.region = dropdownValue&&dropdownValue[1];
    this.agentTableListParams.pageIndex = 1;
    this.tableListReq(this.agentTableListParams)
  };

  tableListReq = (data)=>{
    this.setState({
      spinningStatus:true,
      consTrCt:false
    });
    requestAgentList(data).then(res=>{
      if(res&&res.data&&res.data.content){
        let list = res.data.content;
        list.forEach((v,k)=>{
          v.cityRegion = v.city + v.region;
          v.do = <p>
            <a href="javascript:;" key={k} onClick={this.editData.bind('',v,k,this)}>编辑</a>
            <p></p>
            {v.status==='1'?<a href="javascript:;" key={k} onClick={this.doUse.bind('',v,k,this)}>启用</a>:<a href="javascript:;" key={k} onClick={this.doUse.bind('',v,k,this)}>停用</a>}

          </p>
          v.statusTxt =  v.status === '0' ? <Tag color="orange">正常</Tag> : <Tag color="red">停用</Tag>;
          v.level = v.level===11?'品牌厂家':'--';
          v.employeesNumber = v.employeesNumber === null? 0 : v.employeesNumber;
          // v.personNum = <a href='javascript:;' key={k} onClick={this.personNumClick.bind('',v,k,this)}>{v.employeesNumber}</a>;
          v.personNum = <Link to={"/personal/"+v.agentOutletsId} key={k} onClick={this.personNumClick.bind('',v,k,this)}>{v.employeesNumber}</Link>;
          v.brand = [];
          v.brandList.forEach((i,j)=>{
            v.brand.push( i.brandName + '\n')
          })
        });
        console.log(data)
        this.setState({
          consTrCt:true,
          tableDataSource:list,
          pageIndex:data.pageIndex,
          total:res.data.total,
          spinningStatus:false
        });
      }else{
        notification.info({
          description: "暂无数据",
          message:"暂无数据",
        });
      }
    });
  };
  doUse = (a,b)=>{
    console.log(a,b);
    let title = a.status === '0'? "停用":"启用";
    let content = a.status === '0'? "停用会导致该商户相关所有业务人员账号停用，不能再处理代牌销售业务，确认要停用吗？":"启用后该商户将恢复代牌销售业务相关办理权限，确认要启用吗？";
    let isUse =  a.status === '1'&&<p>
      <Checkbox onChange={this.onUseOrStopCheck}>同时启用该商户所有人员账号</Checkbox>
    </p>;
    this.setState({
      useOrStopId:a.agentOutletsId,
      useOrStopVisible:true,
      useOrStopTitle:title,
      useOrStopContent:content,
      useOrStopIsUse:isUse,
      useOrStopStatus:a.status === '0'?'1':'0'
    })
  }
  onUseOrStopCheck = (a,b)=>{
    console.log(a.target.checked)
    this.setState({
      allUseCheck:a.target.checked
    })
  };
  useOrStopHandleOk = ()=>{
    let {useOrStopId,useOrStopStatus,allUseCheck} = this.state;
    this.setState({
      useOrStopVisible:false,
      spinningStatus:true,
    });
    useOrStop({
      agentOutletsId:useOrStopId ,
      status: useOrStopStatus,
      isEnableAccount: allUseCheck,
      level:'11'
    }).then(res=>{
      console.log(res);
      this.tableListReq(this.agentTableListParams);
      if(res.retCode === '0000'){
        notification.info({
          description: "提示",
          message:"状态更新成功",
        });
      }
    });

  };
  useOrStopHandleCancel = (a)=>{
    this.setState({
      useOrStopVisible:false,
    });
  };
  reqCityRegion = ()=>{
    requestCityRegion().then(res=>{
      console.log(res)
      if(res&&res.data){
        this.setState({
          dropdownData:res.data
        });
        this.props.onSubmit(res.data)
      }else{
        notification.error({
          description: "暂无数据",
          message:"获取地区数据失败",
        });
      }
    })
  };

  reqBrand = ()=>{
    requestBrand().then(res=>{
      console.log(res)
      if(res&&res.data){
        this.brandsList = res.data;
        this.selectChildrenRender(this.brandsList)
      }
    })
  };
  selectChildrenRender = (data)=>{
    this.selectChildren = [];
    data.forEach((v,k)=>{
      let opt ;
      if(v.agented === 2){
        // opt = <Option key={v.id} disabled={true}>{v.brandName}</Option>
      }else{
        opt = <Option key={v.id} disabled={false}>{v.brandName}</Option>
      }
      this.selectChildren.push(opt);
    });
    this.setState({
      selectChildren:this.selectChildren
    });
    return data
  };
  childChangeState = ()=>{
    this.setState({
      spinningStatus:true
    })
  }
}

export default App;
