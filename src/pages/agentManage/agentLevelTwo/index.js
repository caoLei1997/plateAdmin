import React from 'react';
import style from './index.less';
import { Form, Input, Button, Cascader,Table,Modal,Select} from 'antd';
import Add from "./add/add"
const { Option } = Select;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.selectChildren = [];
        this.state={
          cityDropdownData:[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',}]
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
            },
          ],
          statusDropdownData:[
            {
              value: '0',
              label: '停用',
            },
            {
              value: '1',
              label: '启用',
            },
          ],
          dropdownValue:'',
          tableDataSource: [],
          tableColumns:[
            {title: '经销商ID', dataIndex: 'id', key: 'id',},
            {title: '经销商名称', dataIndex: 'name', key: 'name',},
            {title: '级别', dataIndex: 'level', key: 'level',},
            {title: '市区', dataIndex: 'city', key: 'city',},
            {title: '地址', dataIndex: 'address', key: 'address',},
            {title: '销售品牌型号', dataIndex: 'brand', key: 'brand',width:200},
            {title: '人员数', dataIndex: 'personNum', key: 'personNum',},
            {title: '状态', dataIndex: 'status', key: 'status',},
            {title: '停用/启用日期', dataIndex: 'useDate', key: 'useDate',},
            {title: '操作', dataIndex: 'do', key: 'do',width:100},
          ],

          editVisible:false,
          editDataName:'',
          editDataCity:[],
          editDataAddress:'',
          editDataBrand:[],
        }
    }

    componentDidMount() {
      let datas =  [
        {key: '1', name: '胡彦斌',level:1,city:['西安市'], id: 32, address: '西湖区湖底公园1号',brand:['a10'],personNum:5,status:1,useDate:'2019-01-19',do:null},
        {key: '2', name: '胡彦祖',level:1,city:['西安市'], id: 42, address: '西湖区湖底公园1号',brand:['a10'],personNum:5,status:1,useDate:'2019-01-19',do:null},
      ];
      datas.forEach((v,k)=>{
        v.do = <div>
          <a href="javascript:;" onClick={this.editData.bind('',v,k,this)}>编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="javascript:;" onClick={this.doUse.bind('',v,k,this)}>启用</a>
        </div>;
        v.personNum = <a href="javascript:;" onClick={this.personNumClick.bind('',v,k,this)}>{v.personNum}</a>;
      });
      this.setState({
        tableDataSource:datas
      });

      for (let i = 10; i < 36; i++) {
        this.selectChildren.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
      }
    }

    componentWillUnmount() {

    }


  editData = (a,b) =>{
    console.log(a)
      this.setState({
        editVisible:true,
        editDataName:a.name,
        editDataCity:a.city,
        editDataAddress:a.address,
        editDataBrand:a.brand,
      });
    this.currentEditData = a;
  };
  doUse = (a,b)=>{
    console.log(a,b)
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
      let {cityDropdownData,statusDropdownData,tableDataSource,tableColumns,visible,editDataName,editDataCity,editDataAddress,editDataBrand} = this.state;

        return (
        <div className={style.agentLevelOneMain}>
          <div className={style.searchBox}>
            <Input onChange={this.inpChange1} className={style.inp} placeholder='姓名' size='small' />
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
            <Table width='100%' dataSource={tableDataSource} columns={tableColumns}/>
          </div>
          {/*添加弹框*/}
          <Add onRef={this.onRef}></Add>
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
                {this.selectChildren}
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
    let arr = [];
    v2.forEach(v=>{arr.push(v.value)});
    this.setState({editDataBrand:arr})
  };
  editHandleCancel = ()=>{this.setState({editVisible:false})};
  editHandleOk = ()=>{this.setState({editVisible:false})};


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
  submitData = ()=>{
     console.log(this.state)
  }
}

export default App;
