import React from 'react';
import style from './add.less';
import { Modal, Button, Table ,Input,Select,Cascader  } from 'antd';
const { Option } = Select;
const children = [];
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
        this.state = {
          visible: false,
          dataSource:[
            {agentName: '胡彦斌', city: 'xianshi', address: '西湖区湖底公园1号',agentBrand:'niu',},
            {agentName: '胡彦祖', city: 'xianshi', address: '西湖区湖底公园1号',agentBrand:'aima',},
          ],
          columns: [
            {title: '经销商名称', dataIndex: 'agentName', key: 'agentName',width: 100,},
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

          dropdownData:[
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
          dropdownValue:[],

          agentName:'',
          agentAddress:'',
          agentBrand:[],
        };
    }

    componentDidMount() {
      this.props.onRef(this);

      for (let i = 10; i < 36; i++) {
        children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
      }
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
    value2.forEach(v=>{
      arr.push(v.value)
    });
    this.setState({
      agentBrand:arr
    })
  };

  handleOk = e => {
    console.log(this.state.dataSource);
    this.initAddPopup()

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
    });
  };

    render() {
      let {dataSource,columns,dropdownData,agentName,agentAddress,dropdownValue,agentBrand} = this.state;
        return (
          <div>
            <Modal
              title="新增一级经销商"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              maskClosable={false}
              width="60%"
            >
              <Table scroll={{ x: 600 }} dataSource={this.state.dataSource} columns={columns} pagination={false} />
              <div>
                <div className={style.addInpInLine}>
                  <Input className={style.addInp} value={agentName} onChange={this.agentNameInp} placeholder="经销商名称" />
                  <Cascader
                    options={dropdownData}
                    expandTrigger="hover"
                    onChange={this.dropDownChange}
                    className={style.addInp2}
                    placeholder='选择市区'
                    value={dropdownValue}
                  />
                </div>
                <Input className={style.addInpAddress} value={agentAddress} onChange={this.agentAddressInp} placeholder="经销商地址" />
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="选择代理品牌"
                  onChange={this.handleChange}
                  className={style.addInpAgentBrand}
                  value={agentBrand}
                >
                  {children}
                </Select>
              </div>
              <Button className={style.addSubBtn} onClick={this.addAgentData} type="primary" block color='#ccc'>+ 添加</Button>
            </Modal>
          </div>
        );
    }
  addAgentData = ()=>{
    if(!this.state.agentName){alert('请输入经销商名称');return}
    if(!this.state.dropdownValue.join('')){alert('请选择市区');return}
    if(!this.state.agentAddress){alert('请输入地址');return}
    if(this.state.agentBrand.length === 0){alert('请选择品牌');return}
    // dataSource
    let obj = {
      key:'3',
      agentName: this.state.agentName,
      city: this.state.dropdownValue.join(''),
      address: this.state.agentAddress,
      agentBrand: this.state.agentBrand.join(',')
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
