import React from 'react';
import style from './index.less';
import { Input, Button, Cascader,Table,Modal,Select,Tag ,Collapse ,Checkbox, Row, Col,notification,Spin,Space } from 'antd';
import Add from "./add/add"
import {requestAgentList,useOrStop,getSecondAgentBrand,editSecondAgent} from "@/services/agentManage";
const { Option } = Select;
const { Panel } = Collapse;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.collapseIndex = null;
      this.pageIndex = 0;
      this.pageSize = 10;
      this.data = {};
      this.allBrandData = [];
        this.state={
          cityDropdownData:this.props.cityData,
          statusDropdownData:[
            {
              value: '1',
              label: '停用',
            },
            {
              value: '0',
              label: '启用',
            },
          ],
          agentName:'',
          cityDropdownValue:[],
          statusDropdownValue:[],
          tableDataSource: [],
          tableColumns:[
            {title: '经销商ID', dataIndex: 'agentOutletsId', key: 'agentOutletsId',},
            {title: '经销商名称', dataIndex: 'agentOutletsName', key: 'agentOutletsName',width:150},
            {title: '级别', dataIndex: 'level', key: 'level',},
            {title: '市区', dataIndex: 'cityRegion', key: 'cityRegion',width:100},
            {title: '地址', dataIndex: 'address', key: 'address',width:200},
            {title: '销售品牌型号', dataIndex: 'brand', key: 'brand',width:150},
            {title: '人员数', dataIndex: 'personNum', key: 'personNum',},
            {title: '状态', dataIndex: 'statusTxt', key: 'statusTxt',},
            {title: '停用/启用日期', dataIndex: 'updateTime', key: 'updateTime',width:150},
            {title: '操作', dataIndex: 'do', key: 'do',width:100},
          ],
        // paginationSeting
          total:null,
          pageSize:10,
          pageIndex:0,
          onChange:(a,b)=>{
            console.log(a,b);
            let {pageSize,cityDropdownValue,statusDropdownValue} = this.state;
            this.data = {
              pageIndex: a - 1,
              pageSize: pageSize,
              level: 12,
              brandName:'',
              agentOutletsName: this.state.agentName,
              city: cityDropdownValue&&cityDropdownValue[0],
              region: cityDropdownValue&&cityDropdownValue[1],
              status:statusDropdownValue[0]
            };
            this.reqTableList(this.data)
          },
          useOrStopVisible:false,
          useOrStopTitle:'',
          useOrStopContent:null,
          useOrStopId:'',
          useOrStopStatus:'',
          allUseCheck:false,
          //brand list
          brandModalVisible:false,
          cBrandList:[],
          loadStatus:true,
          //edit
          editVisible:false,
          editDataId:null,
          editDataName:'',
          editDataCity:[],
          editDataAddress:'',
          editDataBrand:[],
          editAgentBrandObjArr:[],
          selectChildren:[]
        }
    }
    componentDidMount() {
      let {agentName, cityDropdownValue, statusDropdownValue,} = this.state;
      this.data = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        level: 12,
        brandName: "",
        agentOutletsName: this.state.agentName,
        city: cityDropdownValue[0],
        region:cityDropdownValue[1],
        status:statusDropdownValue[0]
      };
      this.reqTableList(this.data);
      this.getAllBrand();
    }

    componentWillUnmount() {

    }

  submitData = ()=>{
      let {agentName, cityDropdownValue, statusDropdownValue,} = this.state;
    this.data = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      level: 12,
      brandName: "",
      agentOutletsName: this.state.agentName,
      city: cityDropdownValue[0],
      region:cityDropdownValue[1],
      status:statusDropdownValue[0]
    };
    this.reqTableList(this.data)
  };

    reqTableList = (data)=>{
      requestAgentList(data).then(res=>{
        if(res&&res.data&&res.data.content){
          let list = res.data.content;
          list.forEach((v,k)=>{
            v.key = k;
            v.cityRegion = v.city + v.region;
            v.do = <div key={k}>
              <p><a href="javascript:;" onClick={this.editData.bind('',v,k,this)}>编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;</p>
              {v.status==='1'?<a href="javascript:;" onClick={this.doUse.bind('',v,k,this)}>启用</a>:<a href="javascript:;" onClick={this.doUse.bind('',v,k,this)}>停用</a>}
            </div>;
            v.employeesNumber = v.employeesNumber === null? 0 : v.employeesNumber;
            v.personNum = <a href="javascript:;" key={k} onClick={this.personNumClick.bind('',v,k,this)}>{v.employeesNumber}</a>;
            v.vityRegion = v.city+v.region;

            v.statusTxt = v.status === '0' ? <Tag color="orange">正常</Tag> : <Tag color="red">停用</Tag>;
            v.brand = <a href="javascript:;" onClick={this.showBrandList.bind('',v,k,this)}>点击查看</a>
          });
          this.setState({
            tableDataSource:list,
            pageIndex:data.pageIndex,
            total:res.data.total
          });
        }else{
          notification.info({
            description: "暂无数据",
            message:"暂无数据",
          });
        }
      });
    };
  showBrandList = (a,b)=>{
    this.setState({
      cBrandList:a.brandModelVos,
      loadStatus:false,
      brandModalVisible:true,
    });
  };
  editData = (a,b) =>{
    console.log(a);
    let brandData = this.allBrandData;
    console.log(this.allBrandData)
    let brandList = [];
    let allBrandList = [];
    a.brandModelVos&&a.brandModelVos.forEach(v=>{
      brandList.push(v.id);
      brandData.forEach((i,j)=>{
        if(v.id === i.id){
          i.allChild = i.children;
          i.children = v.children;
          i.checkedChild = [];
          i.children.forEach(a=>{
            i.checkedChild.push(a.id)
          });
          allBrandList.push(brandData[j])
        }
      })
    });
    console.log(allBrandList)
    this.setState({
      editDataId:a.agentOutletsId,
      editDataName:a.agentOutletsName,
      editDataCity:[a.city,a.region],
      editDataAddress:a.address,
      editDataBrand:brandList||[],
      editAgentBrandObjArr:allBrandList||[],
      editVisible:true,
    });
    this.currentEditData = a;
  };
  doUse = (a,b)=>{
    console.log(a,b);
    let title = a.status === '0'? "停用":"启用";
    let content = a.status === '0'? "停用会导致该经销商相关所有业务人员账号停用，不能再处理代牌销售业务，确认要停用吗？":"启用后该经销商将恢复代牌销售业务相关办理权限，确认要启用吗？";
    let isUse =  a.status === '1'&&<p>
      <Checkbox onChange={this.onUseOrStopCheck}>同时启用该经销商所有人员账号</Checkbox>
    </p>
    this.setState({
      allUseCheck:false,
      useOrStopId:a.agentOutletsId,
      useOrStopVisible:true,
      useOrStopTitle:title,
      useOrStopContent:content,
      useOrStopIsUse:isUse,
      useOrStopStatus:a.status === '0'?'1':'0'
    })
  };

  personNumClick(a,b){
    console.log(a,b)
  }


  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  onFinish = values => {
    console.log('Success:', values);
  };
    render() {
      let {cityDropdownData,statusDropdownData,tableDataSource,tableColumns,visible,editDataName,editDataCity,editDataAddress,editDataBrand,total,pageSize,pageIndex,onChange,useOrStopVisible,useOrStopTitle,useOrStopContent,useOrStopIsUse,selectChildren} = this.state;

        return (
        <div className={style.agentLevelOneMain}>
          <div className={style.searchBox}>
            <Input onChange={this.inpChange1} className={style.inp} placeholder='经销商名称' size='small' />
            <Cascader
              options={cityDropdownData}
              expandTrigger="hover"
              displayRender={this.displayRender}
              onChange={this.cityDropDownChange}
              className={style.inp}
              placeholder='市区'
            />
            <Cascader
              options={statusDropdownData}
              expandTrigger="hover"
              onChange={this.statusDropDownChange}
              className={style.inp}
              placeholder='状态'
            />

            <Button className={style.sub} onClick={this.submitData} type="primary" htmlType="submit">
              查询
            </Button>
          </div>

          <div className={style.addAgentBox}>
            <Button className={style.btn} icon='+ ' onClick={this.showModal}>新增次级经销商</Button>
          </div>

          <div className={style.tableList}>
            <Table width='100%' dataSource={tableDataSource} pagination={{
              total:total,
              pageSize:pageSize,
              pageIndex:pageIndex,
              onChange:onChange
            }} columns={tableColumns}/>
          </div>
          {/*添加弹框*/}
          <Add onRef={this.onRef} cityDropdownData={cityDropdownData}></Add>
          {/*编辑弹框*/}
          <Modal
            title="编辑经销商"
            visible={this.state.editVisible}
            onOk={this.editHandleOk}
            onCancel={this.editHandleCancel}
            maskClosable={false}
          >
            <div className={style.editInp}>
              <Input className={style.editInp} value={editDataName} onChange={this.editAgentNameInp} placeholder="经销商名称" />
            </div>
            <div className={style.editInp}>
              <Cascader
                options={cityDropdownData}
                expandTrigger="hover"
                onChange={this.editDropDownChange}
                className={style.editInp}
                placeholder='选择市区'
                value={editDataCity}
              />
            </div>
            <div className={style.editInp}>
              <Input className={style.editInp} value={editDataAddress} onChange={this.editAgentAddressInp} placeholder="经销商地址" />
            </div>
            <div className={style.editInp}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="选择代理品牌"
                onChange={this.editHandleChange}
                value={editDataBrand}
              >
                {selectChildren}
              </Select>
              {
                this.editAgentBrandClassRender()
              }
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
          {
            this.brandModal()
          }
        </div>
        );
    }
  onUseOrStopCheck = (a,b)=>{
      console.log(a.target.checked)
    this.setState({
      allUseCheck:true
    })
  };
  useOrStopHandleOk = ()=>{
    let {useOrStopId,useOrStopStatus,allUseCheck} = this.state;
    useOrStop({
      agentOutletsId:useOrStopId ,
      status: useOrStopStatus,
      isEnableAccount: allUseCheck
    }).then(res=>{
      console.log(res);
      this.reqTableList(this.data);
      this.setState({
        useOrStopVisible:false
      });
      notification.info({
        description: "提示",
        message:"状态更新成功",
      });
    });

  };
  useOrStopHandleCancel = (a)=>{
    this.setState({
      useOrStopVisible:false
    });
  };

  editAgentNameInp = (e)=>{this.setState({editDataName:e.target.value})};
  editDropDownChange = (e)=>{this.setState({editDataCity:e})};
  editAgentAddressInp = (e)=>{this.setState({editDataAddress:e.target.value})};
  editHandleChange = (value1,value2)=> {
    let arr =[];
    let arr2 = [];
    let {editDataBrand , editAgentBrandObjArr} = this.state;
    console.log(value1,value2,editDataBrand,editAgentBrandObjArr);
    let brandData = this.allBrandData;
    value2.forEach((v,k)=>{
      brandData.forEach((i,j)=>{
        if(i.id === v.key){
          v.value = i.name;
          v.allChild = i.children;
          v.children = [];
        }
      });
      if(editDataBrand.indexOf(v.key) !== -1){
        v.children = editAgentBrandObjArr[editDataBrand.indexOf(v.key)].children;
      }

      let checkedChild = [];
      v.children.forEach(v=>{
        checkedChild.push(v.id)
      });
      arr.push(v.key||v.id);
      arr2.push({id:v.key||v.id,name:v.value||v.name,children:v.children||[],allChild:[...v.allChild],checkedChild:checkedChild})
    });
    console.log(arr,arr2)
    this.setState({
      editDataBrand:arr,
      editAgentBrandObjArr:arr2
    })
  };
  editHandleCancel = ()=>{
    this.allBrandData = JSON.parse(sessionStorage.getItem('allBrandData')).list;
    this.setState({editVisible:false})
  };
  editHandleOk = ()=>{
    this.allBrandData = JSON.parse(sessionStorage.getItem('allBrandData')).list;
    let {editAgentBrandObjArr,editDataId,editDataName,editDataCity,editDataAddress} = this.state;
    let data = {
      id: editDataId,
      name: editDataName,
      city: editDataCity[0],
      region: editDataCity[1],
      address: editDataAddress,
      brandModelVoList:editAgentBrandObjArr
    };
    console.log(data)
    editSecondAgent(data).then(res=>{
      if(res.retCode === '0000'){
        this.setState({editVisible:false})
        notification.success({
          description: "提示",
          message:'数据保存成功',
        });
        this.reqTableList(this.data)
      }
    })
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
  cityDropDownChange = (a)=>{
    this.setState({
      cityDropdownValue:a
    })
  };
  statusDropDownChange = (a)=>{
    this.setState({
      statusDropdownValue:a
    })
  };

  agentBrandCollapseChange = (a)=>{
    if(a === undefined){return}
    console.log(a)
    this.collapseIndex = a;
  };
  editAgentBrandClassRender = ()=>{
    let {editAgentBrandObjArr} = this.state;
    return <Collapse onChange={this.agentBrandCollapseChange} accordion>
      {
        editAgentBrandObjArr&&editAgentBrandObjArr.map((v,k)=>{
          return <Panel header={
            <div>
              <Tag color="blue" key={v.id}>{v.name}</Tag>
              {
                v.children.map((i,j)=>{
                  return <Tag key={i.id}>{i.name}</Tag>
                })
              }
              <a href="javascript:;" onClick={(e)=>{e.stopPropagation();}} onMouseDown={this.agentBrandDelete.bind(this,v,k)}>x</a>
            </div>
          } key={k}>
            {/*<Tag closable onClose={this.deleteBrandClass}>*/}
            {/*  Tag 2*/}
            {/*</Tag>*/}
            <Checkbox.Group style={{ width: '100%' }} value={v.checkedChild&&v.checkedChild} onChange={this.checkboxChange}>
              <Row>
                {
                  v.allChild.map((a,b)=>{
                    return <Col span={8} key={b}>
                      <Checkbox value={a.id} key={a.id}>{a.name}</Checkbox>
                    </Col>
                  })
                }
              </Row>
            </Checkbox.Group>

          </Panel>
        })
      }
    </Collapse>

  };
  agentBrandDelete = (a,b,c)=>{
    console.log(a,b,c);
    let {editAgentBrandObjArr,editDataBrand} = this.state;
    editAgentBrandObjArr.splice(b,1);
    // editDataBrand.splice(b,1);
    console.log(editDataBrand,editAgentBrandObjArr);
    this.setState({
      agentBrand:editDataBrand,
      agentBrandObjArr:editAgentBrandObjArr
    },()=> {
      this.editHandleChange(editDataBrand,editAgentBrandObjArr)
    })
  };
  checkboxChange = (checkedValues)=> {
    console.log('checked = ', checkedValues);
    let arr = this.state.editAgentBrandObjArr;
    let arr2 = [];
    let arr3 = [];
    console.log(arr[this.collapseIndex].children);
    arr[this.collapseIndex].allChild.forEach(v=>{
      if(checkedValues.indexOf(v.id) !== -1){
        arr2.push(v)
        arr3.push(v.id)
      }
    });
    arr[this.collapseIndex].children=[...arr2];
    arr[this.collapseIndex].checkedChild=[...arr3];
    this.setState({
      editAgentBrandObjArr:arr
    })
  };

  brandModal = ()=> {
    let {cBrandList,loadStatus} = this.state;
    return <Modal
      title="销售品牌型号"
      closable
      visible={this.state.brandModalVisible}
      footer={null}
      onCancel={this.brandModalClose}
    >

      <Collapse onChange={this.lookBrandList} accordion>
        {
          cBrandList&&cBrandList.map((v,k)=>{
            return <Panel header={v.name} key={v.id}>
              {
                v.children&&v.children.map((i,j)=>{
                  return <p key={i.id}>{i.name}</p>
                })
              }
            </Panel>
          })
        }
      </Collapse>
      {loadStatus&&<Spin size="large" />}
    </Modal>
  };
  brandModalClose = ()=>{
    this.setState({
      brandModalVisible:false
    })
  };

  getAllBrand = ()=>{
    getSecondAgentBrand().then(res=>{
        console.log(res);
        if(res&&res.data){
          let {selectChildren} = this.state;
          this.allBrandData = res.data;
          sessionStorage.setItem("allBrandData",JSON.stringify({list:res.data}));
          let list = res.data;
          list.forEach((v,k)=>{
            selectChildren.push(<Option key={v.id} children={v.children}>{v.name}</Option>);
          });
          this.setState({
            selectChildren:selectChildren
          })
        }else{
          notification.error({
            description: "提示",
            message:"获取所有品牌型号数据失败",
          });
        }
    })
  }
}

export default App;
