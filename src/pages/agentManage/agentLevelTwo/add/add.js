import React from 'react';
import style from './add.less';
import { Modal, Button, Table ,Input,Select,Cascader ,Tag ,Collapse ,Checkbox, Row, Col ,notification,Spin} from 'antd';
const { Option } = Select;
const { Panel } = Collapse;
import {addSecondAgent} from "../../../../services/agentManage"


import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  CloseOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.collapseIndex = null;
        this.state = {
          visible: false,
          dataSource:[],
          columns: [
            {title: '商户名称', dataIndex: 'agentName', key: 'agentName',width: 100,},
            {title: '市区', dataIndex: 'cityRegion', key: 'cityRegion',width: 100,},
            {title: '地址', dataIndex: 'address', key: 'address',width: 200,},
            {title: '销售品牌型号', dataIndex: 'agentBrand', key: 'agentBrand',width: 200,},
            {
              title: '',
              key: 'do',
              fixed: 'right',
              width: 100,
              render: (a,b) => <a onClick={this.deleteAgent.bind(a,b)}><CloseOutlined/></a>,
            },
          ],

          dropdownData:this.props.cityDropdownData,
          dropdownValue:[],

          agentName:'',
          agentAddress:'',
          agentBrand:[],
          agentBrandObjArr:[],
        };
    }

    componentDidMount() {
      this.props.onRef(this);
      this.allBrandData = JSON.parse(sessionStorage.getItem('allBrandData')).list||[];
      console.log( this.allBrandData)
      let children = [];
      this.allBrandData.forEach((v,k)=>{
        children.push(<Option key={v.id}>{v.name}</Option>);
      })
      this.selectChildren = children
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
    console.log(value1);
    console.log(value2);
    let arr =[];
    let arr2 = [];
    let {agentBrand , agentBrandObjArr} = this.state;
    let brandData = JSON.parse(sessionStorage.getItem('allBrandData')).list;

    value2.forEach((v,k)=>{
      // v.name = v.children;
      if(!v.id){v.id = v.value}
      if(!v.name){v.name = v.children}
      brandData.forEach(i=>{
        if(v.value === i.id){
          v.allChild = i.children;
        }
      });
      agentBrandObjArr.forEach(b=>{
        if(v.value === b.id ){
            v.checkChildName = b.checkChildName;
            v.checkChildId = b.checkChildId;
        }
      });
        arr.push(v.id);
        arr2.push({id:v.id,name:v.name,checkChildName:v.checkChildName||[],checkChildId:v.checkChildId||[],allChild:v.allChild||[]})
    });

    this.setState({
      agentBrand:arr,
      agentBrandObjArr:arr2
    })
  };

  handleOk = e => {
    let {dataSource} = this.state;
    let data = [];
    dataSource.forEach((v,k)=>{
      let obj = {
        name:v.name,
        city:v.city,
        region:v.region,
        address:v.address,
        brandModelVoList:[]
      };
      v.brandModelVoList.forEach((i,j)=>{
        let xHData = [];
        i.allChild.forEach((a,b)=>{
          if(i.checkChildId.indexOf(a.id)){
            xHData.push(a)
          }
        });
        obj.brandModelVoList.push({
          id:i.id,
          name:i.name,
          children:xHData,
        });
      });
      data.push(obj)
    });
    console.log(dataSource)
    this.initAddPopup();
    this.props.onChangePLoad()
    addSecondAgent({list:data}).then(res=>{
      if(res.retCode === '0000'){
        notification.success({
          description: "提示",
          message:"添加成功",
        });
      }
      this.props.onRefresh(this.props.tableReqData)
    })
  };

  handleCancel = e => {
    this.initAddPopup()
  };

  initAddPopup = ()=>{
    this.setState({
      visible: false,
      dataSource:[],
      agentName:'',
      dropdownValue:[],
      agentAddress:'',
      agentBrand:[],
      agentBrandObjArr:[]
    });
  };

    render() {
      let {dataSource,columns,dropdownData,agentName,agentAddress,dropdownValue,agentBrand} = this.state;
        return (
          <div>
            <Modal
              title="新增经销商"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              maskClosable={false}
              width="60%"
            >
              <Table scroll={{ x: 600 }} dataSource={this.state.dataSource} columns={columns} pagination={false} />
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
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="选择代理品牌"
                  onChange={this.handleChange}
                  className={style.addInpAgentBrand}
                  value={agentBrand}
                >
                  {this.selectChildren}
                </Select>
                {
                  this.agentBrandClassRender()
                }
              </div>
              <Button className={style.addSubBtn} onClick={this.addAgentData} type="primary" block color='#ccc'>+ 添加</Button>
            </Modal>
          </div>
        );
    }

    agentBrandClassRender = ()=>{
      console.log(this.state.agentBrandObjArr);
      return <Collapse size='small' onChange={this.agentBrandCollapseChange} accordion>
        {
          this.state.agentBrandObjArr.map((v,k)=>{
            return <Panel size='small' header={
              <div>
                <Tag size='small' color="blue" key={k}>{v.name}</Tag>
                {
                  v.checkChildName.map((i,j)=>{
                    return <Tag key={j}>{i}</Tag>
                  })
                }
                <a href="javascript:;" onClick={(e)=>{e.stopPropagation();}} onMouseDown={this.agentBrandDelete.bind(this,v,k)}>x</a>
              </div>
            } key={k}>
              {/*<Tag closable onClose={this.deleteBrandClass}>*/}
              {/*  Tag 2*/}
              {/*</Tag>*/}
              <Checkbox.Group value={v.checkChildId&&v.checkChildId} style={{ width: '100%' }} onChange={this.checkboxChange}>
                <Row>
                  {
                    v.allChild.map((a,b)=>{
                     return <Col span={8} key={a.id}>
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
    let {agentBrandObjArr,agentBrand} = this.state;
    agentBrandObjArr.splice(b,1);
    agentBrand.splice(b,1);
    console.log(agentBrandObjArr);
    this.setState({
      agentBrand:agentBrand,
      agentBrandObjArr:agentBrandObjArr
    },()=> {
      this.handleChange(agentBrand,agentBrandObjArr)
    })
  };
  agentBrandCollapseChange = (a)=>{
    if(a === undefined){return}
    console.log(a);
    this.collapseIndex = a;
  };
  checkboxChange = (checkedValues)=> {
    console.log('checked = ', checkedValues);
    console.log('checked = ', this.collapseIndex);
    let arr = this.state.agentBrandObjArr;
    arr[this.collapseIndex].checkChildName=[];
    arr[this.collapseIndex].checkChildId=[];
    checkedValues.forEach(v=>{
      arr[this.collapseIndex].allChild.forEach(a=>{
        if(a.id === v){
          v = a;
        }
      });
      if( arr[this.collapseIndex].checkChildId.indexOf(v.id) === -1){
        arr[this.collapseIndex].checkChildName.push(v.name);
        arr[this.collapseIndex].checkChildId.push(v.id);
      }
    });
    console.log(arr)
    this.setState({
      agentBrandObjArr:arr
    })
  };
  deleteBrandClass = (e)=> {
    console.log(e);
  };
  addAgentData = ()=>{
    if(!this.state.agentName){alert('请输入商户名称');return}
    if(!this.state.dropdownValue.join('')){alert('请选择市区');return}
    if(!this.state.agentAddress){alert('请输入地址');return}
    if(this.state.agentBrandObjArr.length === 0){alert('请选择品牌');return}
    // dataSource
    let str = '';
    let submitStatus = true;
    this.state.agentBrandObjArr.forEach(v=>{
      if(v.checkChildName.length === 0){
        submitStatus = false;
        notification.error({
          description: "提示",
          message:'当前'+v.name+'品牌未选择代理型号',
        });
        return false;
      }
      v.children = v.allChild;
      str+=`${v.name}：`;
      v.checkChildName.forEach((i,j)=>{
        if(j!==v.checkChildName.length-1){
          str+=i+'，';
        }else{
          str+=i+'；\n';
        }
      });
    });
    if(!submitStatus){return false}
    let obj = {
      key:'3',
      agentName: this.state.agentName,
      cityRegion: this.state.dropdownValue.join(''),
      address: this.state.agentAddress,
      agentBrand: str,
      // submitData
      name:this.state.agentName,
      city:this.state.dropdownValue[0],
      region:this.state.dropdownValue[1],
      brandModelVoList:this.state.agentBrandObjArr
    };
    let listData = this.state.dataSource;
    listData.push(obj);
    console.log(listData);
    this.setState({
      dataSource:[...listData],
      agentName:'',
      dropdownValue:[],
      agentAddress:'',
      agentBrand:[],
      agentBrandObjArr:[]
    })
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
    this.setState({
      dropdownValue:a
    })
  };
}

export default App;
