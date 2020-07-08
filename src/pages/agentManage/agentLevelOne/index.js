import React from 'react';
import style from './index.less';
import { Form, Input, Button, Cascader,Table,Modal,Select,notification} from 'antd';
import {requestAgentList,requestCityRegion,requestBrand,editFirstAgentSave} from "../../../services/agentManage"
import Add from "./add/add"
const { Option } = Select;
import { Link } from 'umi';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.selectChildren = [];
        this.brandsList = [];
        this.agentTableListParams = {};
      this.state={
          dropdownData:[],
          dropdownValue:'',
          tableDataSource: [],
          tableColumns:[
            {title: '品牌厂家ID', dataIndex: 'agentOutletsId', key: 'agentOutletsId',},
            {title: '品牌厂家名称', dataIndex: 'agentOutletsName', key: 'agentOutletsName',},
            {title: '级别', dataIndex: 'level', key: 'level',},
            {title: '市区', dataIndex: 'cityRegion', key: 'cityRegion',},
            {title: '地址', width:160,dataIndex: 'address', key: 'address',},
            {title: '代理品牌', dataIndex: 'brand', key: 'brand',},
            {title: '人员数', dataIndex: 'personNum', key: 'personNum',},
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
          pageIndex:0,
          onChange:(a,b)=>{
            console.log(a,b);
            let {pageSize,dropdownValue} = this.state;
            this.agentTableListParams = {
              pageIndex: a - 1,
              pageSize: pageSize,
              level: 11,
              brandName:this.state.agentBrand,
              agentOutletsName: this.state.agentName,
              city: dropdownValue&&dropdownValue[0],
              region: dropdownValue&&dropdownValue[1]
            };
            this.tableListReq(this.agentTableListParams)
          }

        }
    }

    componentDidMount() {
      this.agentTableListParams = {
        pageIndex: 0,
        pageSize: this.state.pageSize,
        level: 11,
        brandName:'',
        agentOutletsName: "",
        city: "",
        region: ""
      };
      console.log(process.env.REACT_APP_ENV);
      this.tableListReq(this.agentTableListParams);
      this.reqCityRegion();
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
      let {dropdownData,tableDataSource,paginationSeting,tableColumns,visible,editDataName,editDataCity,editDataAddress,editDataBrandId,total,pageSize,pageIndex,onChange,selectChildren} = this.state

        return (
        <div className={style.agentLevelOneMain}>
          <div className={style.searchBox}>
            <Input onChange={this.inpChange1} className={style.inp} placeholder='品牌厂家名称' size='small' />

            <Input onChange={this.inpChange2} className={style.inp} placeholder='品牌名称' size='small' />

            <Cascader
              options={dropdownData}
              expandTrigger="hover"
              displayRender={this.displayRender}
              onChange={this.dropDownChange}
              className={style.inp}
              placeholder='市区'
            />

            <Button className={style.sub} onClick={this.submitSearchData} type="primary" htmlType="submit">
              查询
            </Button>
          </div>

          <div className={style.addAgentBox}>
            <Button className={style.btn} icon='+ ' onClick={this.showModal}>新增品牌厂家</Button>
          </div>

          <div className={style.tableList}>
            <Table dataSource={tableDataSource} pagination={{
                total:total,
                pageSize:pageSize,
                pageIndex:pageIndex,
                onChange:onChange
              }} columns={tableColumns}/>
          </div>
          {/*添加弹框*/}
          {dropdownData.length>0&&<Add onRef={this.onRef} onAddOk={this.submitSearchData} brandChildren={selectChildren} cityRegion={dropdownData}></Add>}
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
                style={{ width: '100%' }}
                placeholder="选择代理品牌"
                onChange={this.editHandleChange}
                value={editDataBrandId}
              >
                {selectChildren}
              </Select>
            </div>
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
    arr.push(v2.value)
    this.setState({
      editDataBrandId:arr,
    })
  };
  editHandleCancel = ()=>{this.setState({editVisible:false})};
  editHandleOk = ()=>{
      let {editDataName,editDataCity,editDataAddress,editDataBrandId,editDataId} = this.state;
    editFirstAgentSave({
        id: editDataId,
        name: editDataName,
        city: editDataCity[0],
        region: editDataCity[1],
        address: editDataAddress,
        brandIds:editDataBrandId,
      }).then(res=>{
      this.setState({
        editVisible:false
      });
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

  submitSearchData = ()=>{
    let {agentName,agentBrand,dropdownValue} = this.state;
    this.agentTableListParams.brandName = agentBrand;
    this.agentTableListParams.agentOutletsName = agentName;
    this.agentTableListParams.city = dropdownValue&&dropdownValue[0];
    this.agentTableListParams.region = dropdownValue&&dropdownValue[1];
    this.agentTableListParams.pageIndex = 0;
    this.tableListReq(this.agentTableListParams)
  };

  tableListReq = (data)=>{
    requestAgentList(data).then(res=>{
      if(res&&res.data&&res.data.content){
        let list = res.data.content;
        list.forEach((v,k)=>{
          v.cityRegion = v.city + v.region;
          v.do = <p>
            <a href="javascript:;" key={k} onClick={this.editData.bind('',v,k,this)}>编辑</a>
            <p></p>
            <a href="javascript:;" key={k} onClick={this.editData.bind('',v,k,this)}>编辑</a>
          </p>
          v.employeesNumber = v.employeesNumber === null? 0 : v.employeesNumber;
          // v.personNum = <a href='javascript:;' key={k} onClick={this.personNumClick.bind('',v,k,this)}>{v.employeesNumber}</a>;
          v.personNum = <Link to={"/personal/"+v.agentOutletsId} key={k} onClick={this.personNumClick.bind('',v,k,this)}>{v.employeesNumber}</Link>;
          v.brand = [];
          v.brandList.forEach((i,j)=>{
            v.brand.push( i.brandName + '\n')
          })
        });
        this.setState({
          tableDataSource:list,
          pageIndex:data.pageIndex,
          total:res.data.total
        });
        this.reqBrand();
      }else{
        notification.info({
          description: "暂无数据",
          message:"暂无数据",
        });
      }
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
        opt = <Option key={v.id} disabled={true}>{v.brandName}</Option>
      }else{
        opt = <Option key={v.id} disabled={false}>{v.brandName}</Option>
      }
      this.selectChildren.push(opt);
    });
    this.setState({
      selectChildren:this.selectChildren
    });
    return data
  }

}

export default App;
