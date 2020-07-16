import React from 'react';
import style from './add.less';
import { Modal, Button, Table ,Input,Select,Cascader,notification  } from 'antd';
const { Option } = Select;
const children = [];
import {CloseOutlined} from '@ant-design/icons';
import {requestBrand,addFirstAgent} from "../../../../services/agentManage"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.brandsList = [];
        this.key = 0;
        this.state = {
          visible: false,
          dataSource:[],
          columns: [
            {title: '商户名称', dataIndex: 'name', key: 'name',width: 100,},
            {title: '市区', dataIndex: 'city', key: 'city',width: 100,},
            {title: '地址', dataIndex: 'address', key: 'address',width: 200,},
            {title: '代理品牌', dataIndex: 'agentBrand', key: 'agentBrand',width: 200,},
            {
              title: '',
              key: 'do',
              fixed: 'right',
              width: 100,
              render: (a,b) => <a onClick={this.deleteAgent.bind(a,b)}><CloseOutlined/></a>,
            },
          ],

          dropdownData:this.props.cityRegion,
          dropdownValue:[],

          agentName:'',
          agentAddress:'',
          agentBrand:[],
          brandChildren:[],
          brandIds:[],
        };
    }

    componentDidMount() {
      console.log(this.props);
      this.props.onRef(this);
      this.reqBrand()
    }

    componentWillUnmount() {

    }
  deleteAgent = (a)=>{
      let nArr=[], data = this.state.dataSource;
      data.forEach(v=>{
        if(v!== a){
          nArr.push(v)
        }
      });
      this.setState({
        dataSource:nArr
      })
  };
  handleChange = (value1,value2)=> {
    console.log(value2);
    let arr = [];
    let arr2 = [];
    arr.push(value2.children);
    arr2.push(value2.value);
    this.setState({
      agentBrand:arr,
      brandIds:arr2
    })
  };

  handleOk = e => {
    this.initAddPopup();
    this.props.onChangePLoad();
    addFirstAgent({list:this.state.dataSource}).then(res=>{
      console.log(res);
      if(res&&res.data){
        notification.success({
          description: "提示",
          message:"添加成功",
        });
        this.props.onAddOk()
      }
    });
  };

  handleCancel = e => {
    this.initAddPopup()
  };

  initAddPopup = ()=>{
    this.setState({
      visible: false,
      dataSource:[],
      agentName:'',
      // dropdownValue:[],
      agentAddress:'',
      agentBrand:[],
      brandIds:[],
    });
  };

    render() {
      let {dataSource,columns,dropdownData,agentName,agentAddress,dropdownValue,agentBrand,brandChildren,brandIds} = this.state;
        return (
          <div>
            <Modal
              title="新增商户"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              maskClosable={false}
              width="60%"
            >
              <Table scroll={{ x: 600 }} dataSource={dataSource} columns={columns} pagination={false} />
              <div>
                <div className={style.addInpInLine}>
                  <Input className={style.addInp} value={agentName} onChange={this.agentNameInp} placeholder="商户名称" />
                  <Cascader
                    options={dropdownData}
                    expandTrigger="hover"
                    onChange={this.dropDownChange}
                    className={style.addInp2}
                    placeholder='选择市区'
                    value={dropdownValue}
                  />
                </div>
                <Input className={style.addInpAddress} value={agentAddress} onChange={this.agentAddressInp} placeholder="商户地址" />
                <Select
                    style={{ width: '100%' }}
                    placeholder="选择代理品牌"
                    onChange={this.handleChange}
                    className={style.addInpAgentBrand}
                    value={brandIds}
                  >
                    {brandChildren}
                  </Select>
              </div>
              <Button className={style.addSubBtn} onClick={this.checkAddData} type="primary" block color='#ccc'>+ 添加</Button>
            </Modal>
          </div>
        );
    }
  checkAddData = ()=>{
    if(!this.state.agentName){alert('请输入商户名称');return}
    if(!this.state.dropdownValue.join('')){alert('请选择市区');return}
    if(!this.state.agentAddress){alert('请输入地址');return}
    if(this.state.agentBrand.length === 0){alert('请选择品牌');return}
    this.updateAddList()
  };
  updateAddList = ()=>{
    let data = {
      key: this.key,
      name: this.state.agentName,
      city: this.state.dropdownValue[0],
      region: this.state.dropdownValue[1],
      address: this.state.agentAddress,
      agentBrand: this.state.agentBrand,
      brandIds:this.state.brandIds
    };
    let listData = this.state.dataSource;
    listData.push(data);
    this.setState({
      dataSource:[...listData],
      agentName:'',
      dropdownValue:[],
      agentAddress:'',
      agentBrand:[],
      brandIds:[],
    },this.brandsListSet);
    this.key++;
  };
  brandsListSet = ()=>{
    let {dataSource} = this.state;
    let arr = [];
    dataSource.forEach((v,k)=>{
      arr = arr.concat(v.brandIds)
    });
    let brandsListArr = []
    this.brandsList.forEach((v,k)=>{
      if(arr.indexOf(v.id) !== -1){
        v.agented = 2
      }
      brandsListArr.push(v)
    });
    this.selectChildrenRender(brandsListArr)
  };

  agentNameInp = (e)=>{
    this.setState({
      agentName:e.target.value
    })
  };
  agentAddressInp = (e)=>{
    this.setState({
      agentAddress:e.target.value
    })
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
    console.log(this.state.visible)
  };

  displayRender(label) {
    return label[label.length - 1];
  }
  dropDownChange = (a)=>{
    console.log(a);
    this.setState({
      dropdownValue:a
    })
  };

  reqBrand = ()=>{
    requestBrand().then(res=>{
      console.log(res);
      if(res&&res.data){
        this.brandsList = res.data;
        this.selectChildrenRender(res.data)
      }else{
        alert('品牌信息获取失败')
      }
    })
  };
  selectChildrenRender = (data)=>{
    console.log(data)
    let brandChildren = [];
    data.forEach((v,k)=>{
      let opt ;
      // if(v.agented === 2){
      //   opt = <Option key={v.id} disabled={true}>{v.brandName}</Option>
      // }else{
        opt = <Option key={v.id} disabled={false}>{v.brandName}</Option>
      // }
      brandChildren.push(opt);
    });
    this.setState({
      brandChildren:brandChildren
    });
  }
}

export default App;
