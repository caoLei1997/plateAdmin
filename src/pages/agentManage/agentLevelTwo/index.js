import React from 'react';
import style from './index.less';
<<<<<<< HEAD
import {
  Input,
  Form,
  Button,
  Cascader as Cascade,
  Table,
  Modal,
  Select,
  Tag,
  Collapse,
  Checkbox,
  Row,
  Col,
  notification,
  Spin,
  Space
} from 'antd';
import Add from "./add/add"
import {
  relAgentOutletsBrandList,
  useOrStop,
  getSecondAgentBrand,
  editSecondAgent,
  typeApproveAgent,
  getBrandAndModel

} from "@/services/agentManage";
=======
import { Input, Button, Cascader, Table, Modal, Select, Tag, Collapse, Checkbox, Row, Col, notification, Spin, Space } from 'antd';
import Add from "./add/add"
import { requestAgentList, useOrStop, getSecondAgentBrand, editSecondAgent } from "@/services/agentManage";
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
const { Option } = Select;
const { Panel } = Collapse;
import { Link } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
<<<<<<< HEAD
import { filterCity } from '@/utils/utils'
import { connect } from 'umi';
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7

class App extends React.Component {
  constructor(props) {
    super(props);
    this.collapseIndex = null;
<<<<<<< HEAD
    this.pageIndex = 0;
=======
    this.pageIndex = 1;
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
    this.pageSize = 10;
    this.data = {};
    this.allBrandData = [];
    this.state = {
      cityDropdownData: this.props.cityData,
      statusDropdownData: [
        {
<<<<<<< HEAD
          value: '',
          label: '全部',
        },
        {
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
          value: '1',
          label: '停用',
        },
        {
          value: '0',
          label: '启用',
        },
      ],
      agentName: '',
      cityDropdownValue: [],
      statusDropdownValue: [],
      tableDataSource: [],
      tableColumns: [
<<<<<<< HEAD
        { title: '商户ID', dataIndex: 'id', key: 'id', },
        { title: '商户名称', dataIndex: 'name', key: 'name' },
=======
        { title: '商户ID', dataIndex: 'agentOutletsId', key: 'agentOutletsId', },
        { title: '商户名称', dataIndex: 'agentOutletsName', key: 'agentOutletsName' },
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
        { title: '级别', dataIndex: 'level', key: 'level', },
        { title: '市区', dataIndex: 'cityRegion', key: 'cityRegion', width: 100 },
        { title: '地址', dataIndex: 'address', key: 'address', width: 200 },
        { title: '销售品牌型号', dataIndex: 'brand', key: 'brand', width: 150 },
        { title: '人员数', dataIndex: 'personNum', key: 'personNum', },
        { title: '状态', dataIndex: 'statusTxt', key: 'statusTxt', },
        { title: '停用/启用日期', dataIndex: 'updateTime', key: 'updateTime', width: 150 },
        { title: '操作', dataIndex: 'do', key: 'do', width: 120 },
      ],
      // paginationSeting
      total: null,
      pageSize: 10,
<<<<<<< HEAD
      pageIndex: 0,
=======
      pageIndex: 1,
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      onChange: (a, b) => {
        console.log(a, b);
        let { pageSize, cityDropdownValue, statusDropdownValue } = this.state;
        this.data = {
<<<<<<< HEAD
          pageIndex: a - 1,
=======
          pageIndex: a,
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
          pageSize: pageSize,
          level: 12,
          brandName: '',
          agentOutletsName: this.state.agentName,
          city: cityDropdownValue && cityDropdownValue[0],
          region: cityDropdownValue && cityDropdownValue[1],
          status: statusDropdownValue[0]
        };
        this.reqTableList(this.data)
      },
      useOrStopVisible: false,
      useOrStopTitle: '',
      useOrStopContent: null,
      useOrStopId: '',
      useOrStopStatus: '',
      allUseCheck: false,
      //brand list
      brandModalVisible: false,
      cBrandList: [],
      loadStatus: true,
      //edit
      editVisible: false,
      editDataId: null,
      editDataName: '',
      editDataCity: [],
      editDataAddress: '',
      editDataBrand: [],
      editAgentBrandObjArr: [],
      selectChildren: [],
      spinningStatus: true,
<<<<<<< HEAD
      agentList: [],
      brandIdValue: '',
    }
  }
  componentDidMount() {
    let { agentName, cityDropdownValue, statusDropdownValue } = this.state;
=======
    }
  }
  componentDidMount() {
    let { agentName, cityDropdownValue, statusDropdownValue, } = this.state;
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
    this.data = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      level: 12,
      brandName: "",
      agentOutletsName: this.state.agentName,
      city: cityDropdownValue[0],
      region: cityDropdownValue[1],
      status: statusDropdownValue[0]
    };
    this.reqTableList(this.data);
    this.getAllBrand();
<<<<<<< HEAD

    typeApproveAgent().then((res) => {
      this.setState({
        agentList: [...res.data]
      })
    })
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
  }

  componentWillUnmount() {

  }

  submitData = () => {
<<<<<<< HEAD
    let { agentName, cityDropdownValue, statusDropdownValue, brandIdValue, typeValue } = this.state;
    this.data = {
      pageIndex: 0,
=======
    let { agentName, cityDropdownValue, statusDropdownValue, } = this.state;
    this.data = {
      pageIndex: 1,
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      pageSize: this.pageSize,
      level: 12,
      brandName: "",
      agentOutletsName: this.state.agentName,
      city: cityDropdownValue[0],
      region: cityDropdownValue[1],
<<<<<<< HEAD
      status: statusDropdownValue[0],
      brandId: brandIdValue,

=======
      status: statusDropdownValue[0]
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
    };
    this.reqTableList(this.data)
  };

  reqTableList = (data) => {
    this.setState({
      spinningStatus: true
    });
<<<<<<< HEAD
    relAgentOutletsBrandList(data).then(res => {
=======
    requestAgentList(data).then(res => {
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      if (res && res.data && res.data.content) {
        let list = res.data.content;
        list.forEach((v, k) => {
          v.key = k;
          v.cityRegion = v.city + v.region;
          v.do = <div key={k}>
            <a href="javascript:;" onClick={this.editData.bind('', v, k, this)}>编辑</a>&nbsp;&nbsp;
            {v.status === '1' ? <a href="javascript:;" onClick={this.doUse.bind('', v, k, this)}>启用</a> : <a href="javascript:;" onClick={this.doUse.bind('', v, k, this)}>停用</a>}
          </div>;
          v.level = v.level === 12 ? '经销商' : '--';
          v.employeesNumber = v.employeesNumber === null ? 0 : v.employeesNumber;
<<<<<<< HEAD
          v.personNum = <Link to={"/personal/" + v.id} key={k} onClick={this.personNumClick.bind('', v, k, this)}>{v.employeesNumber}</Link>;
          v.vityRegion = v.city + v.region;
          v.statusTxt = v.status === '0' ? <Tag color="orange">启用</Tag> : <Tag color="red">停用</Tag>;
=======
          v.personNum = <Link to={"/personal/" + v.agentOutletsId} key={k} onClick={this.personNumClick.bind('', v, k, this)}>{v.employeesNumber}</Link>;
          v.vityRegion = v.city + v.region;

          v.statusTxt = v.status === '0' ? <Tag color="orange">正常</Tag> : <Tag color="red">停用</Tag>;
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
          v.brand = <a href="javascript:;" onClick={this.showBrandList.bind('', v, k, this)}>点击查看</a>
        });
        this.setState({
          tableDataSource: list,
          pageIndex: data.pageIndex,
          total: res.data.total,
          spinningStatus: false
        });
      } else {
        notification.info({
          description: "暂无数据",
          message: "暂无数据",
        });
      }
    });
  };
<<<<<<< HEAD

  showBrandList = (a, b) => {
    getBrandAndModel(a.id).then(res => {
      this.setState({
        cBrandList: res.data.list,
        loadStatus: false,
        brandModalVisible: true,
      });
    })
  };

  editData = (a, b) => {
    console.log('a', a);
    let brandData = this.allBrandData;
    console.log('brandData', this.allBrandData)
=======
  showBrandList = (a, b) => {
    this.setState({
      cBrandList: a.brandModelVos,
      loadStatus: false,
      brandModalVisible: true,
    });
  };
  editData = (a, b) => {
    console.log(a);
    let brandData = this.allBrandData;
    console.log(this.allBrandData)
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
    let brandList = [];
    let allBrandList = [];
    a.brandModelVos && a.brandModelVos.forEach(v => {
      brandList.push(v.id);
      brandData.forEach((i, j) => {
        if (v.id === i.id) {
          i.allChild = i.children;
          i.children = v.children;
          i.checkedChild = [];
          i.children.forEach(a => {
            i.checkedChild.push(a.id)
          });
          allBrandList.push(brandData[j])
        }
      })
    });
<<<<<<< HEAD
    getBrandAndModel(a.id).then(({ data }) => {
      console.log('res', data);
      this.setState({
        editDataBrand: data.list ? data.list.map(item => item.id) : [],
        editAgentBrandObjArr: data.list ? data.list.map(item => ({
          ...item,
          allChild: item.children,
          checkedChild: [...item.children.map(childrenItem => childrenItem.id)]
        })) : []
      });
      console.log('editDataBrand: ', this.state.editDataBrand)
    })
    this.setState({
      editDataId: a.id,
      editDataName: a.name,
      editDataCity: [a.city, a.region],
      editDataAddress: a.address,
      // editDataBrand: brandList || [],
=======
    console.log(allBrandList)
    this.setState({
      editDataId: a.agentOutletsId,
      editDataName: a.agentOutletsName,
      editDataCity: [a.city, a.region],
      editDataAddress: a.address,
      editDataBrand: brandList || [],
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      editAgentBrandObjArr: allBrandList || [],
      editVisible: true,
    });
    this.currentEditData = a;
  };
<<<<<<< HEAD

  doUse = (a, b) => {
    let title = a.status === '0' ? "停用" : "启用";
    let content = a.status === '0' ? "停用会导致该商户相关所有业务人员账号停用，不能再处理代牌销售业务，确认要停用吗？" :
      <>
        启用后该商户将恢复代牌销售业务相关办理权限，确认要启用吗?
        <p className='mt-8'> {<Checkbox Checkbox onChange={this.onUseOrStopCheck} id={a.id} > 同时启用该商户所有人员账号</Checkbox>}</p>
      </>
=======
  doUse = (a, b) => {
    console.log(a, b);
    let title = a.status === '0' ? "停用" : "启用";
    let content = a.status === '0' ? "停用会导致该商户相关所有业务人员账号停用，不能再处理代牌销售业务，确认要停用吗？" : "启用后该商户将恢复代牌销售业务相关办理权限，确认要启用吗？";
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
    let isUse;
    // =  a.status === '1'&&<p>
    //   <Checkbox onChange={this.onUseOrStopCheck} id={a.id}>同时启用该商户所有人员账号</Checkbox>
    // </p>
    this.setState({
<<<<<<< HEAD
      useOrStopId: a.id,
=======
      useOrStopId: a.agentOutletsId,
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
      useOrStopVisible: true,
      useOrStopTitle: title,
      useOrStopContent: content,
      useOrStopIsUse: isUse,
      useOrStopStatus: a.status === '0' ? '1' : '0'
    })
  };

  personNumClick(a, b) {
    console.log(a, b);
  }


  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  onFinish = values => {
    console.log('Success:', values);
  };
<<<<<<< HEAD

  handleChangeType = (value) => {
    this.setState({
      brandIdValue: value
    })
  }

  render() {
    let {
      cityDropdownData,
      statusDropdownData,
      tableDataSource,
      tableColumns,
      visible,
      editDataName,
      editDataCity,
      editDataAddress,
      editDataBrand,
      total,
      pageSize,
      pageIndex,
      onChange,
      useOrStopVisible,
      useOrStopTitle,
      useOrStopContent,
      useOrStopIsUse,
      selectChildren,
      spinningStatus,
      agentList,
    } = this.state;
=======
  render() {
    let { cityDropdownData, statusDropdownData, tableDataSource, tableColumns, visible, editDataName, editDataCity, editDataAddress, editDataBrand, total, pageSize, pageIndex, onChange, useOrStopVisible, useOrStopTitle, useOrStopContent, useOrStopIsUse, selectChildren, spinningStatus } = this.state;
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7

    return (
      <div className={style.agentLevelOneMain}>
        <div className={style.searchBox}>
          <div className={style.searchBoxItem}>
            <span>商户名称：</span>
            <Input onChange={this.inpChange1} className={style.inp} placeholder='姓名' size='middle' />
          </div>
          <div className={style.searchBoxItem}>
            <span>市区：</span>
<<<<<<< HEAD
            <Cascade
              options={filterCity(cityDropdownData)}
=======
            <Cascader
              options={cityDropdownData}
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
              expandTrigger="hover"
              displayRender={this.displayRender}
              onChange={this.cityDropDownChange}
              className={style.inp}
              placeholder='全部'
<<<<<<< HEAD
              defaultValue={['']}
=======
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
            />
          </div>
          <div className={style.searchBoxItem}>
            <span>状态：</span>
<<<<<<< HEAD
            <Cascade
=======
            <Cascader
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
              options={statusDropdownData}
              expandTrigger="hover"
              onChange={this.statusDropDownChange}
              className={style.inp}
              placeholder='全部'
<<<<<<< HEAD
              defaultValue={['']}
            />
          </div>

          <div style={{ width: '200px', display: "inline-block" }} >
            <Form.Item label='品牌'>
              <Select
                placeholder='品牌'
                defaultValue=''
                onChange={this.handleChangeType}
              // dropdownClassName='w-150'
              >

                <Select.Option value=''>全部</Select.Option>
                {
                  agentList &&
                  agentList.length &&
                  agentList.map(item => <Select.Option
                    key={item.id}
                    value={item.id}
                  >
                    {item.brandName}
                  </Select.Option>)
                }
              </Select>
            </Form.Item>

          </div>


=======
            />
          </div>

>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
          <Button className={style.sub} onClick={this.submitData} type="primary" htmlType="submit">
            查询
            </Button>
        </div>

        <div className={style.addAgentBox}>
          <Button style={{ backgroundColor: '#52c41a', color: '#fff' }} className={style.btn} icon={<PlusOutlined />} onClick={this.showModal}>新增经销商</Button>
        </div>
        <Spin spinning={spinningStatus}>
          <div className={style.tableList}>
<<<<<<< HEAD
            <Table
              width='100%'
              rowKey={'agentOutletsId'}
              dataSource={tableDataSource}
              pagination={{
                total: total,
                pageSize: pageSize,
                current: pageIndex + 1,
                onChange: onChange,
                showTotal: total => `共${total}条`,
                showSizeChanger: true,
                showQuickJumper: true,
                onShowSizeChange: (current, size) => {
                  this.setState({
                    pageIndex: current,
                    pageSize: size
                  })
                }
              }}
              columns={tableColumns}
            />
=======
            <Table width='100%' rowKey={'agentOutletsId'} dataSource={tableDataSource} pagination={{
              total: total,
              pageSize: pageSize,
              current: pageIndex,
              onChange: onChange,
              showTotal: total => `共${total}条`,
              showSizeChanger: true,
              showQuickJumper: true,
              onShowSizeChange: (current, size) => {
                this.setState({
                  pageIndex: current,
                  pageSize: size
                })
              }
            }} columns={tableColumns} />
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
          </div>
        </Spin>
        {/*添加弹框*/}
        {
          selectChildren.length > 0 && <Add onRef={this.onRef} onChangePLoad={this.childChangeState} tableReqData={this.data} onRefresh={this.reqTableList} cityDropdownData={cityDropdownData}></Add>
        }

        {/*编辑弹框*/}
        <Modal
          title="编辑经销商"
          visible={this.state.editVisible}
          onOk={this.editHandleOk}
          onCancel={this.editHandleCancel}
          maskClosable={false}
        >
          <div className={style.editInp}>
            <Input className={style.editInp} value={editDataName} onChange={this.editAgentNameInp} placeholder="商户名称" />
          </div>
          <div className={style.editInp}>
<<<<<<< HEAD
            <Cascade
=======
            <Cascader
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
              options={cityDropdownData}
              expandTrigger="hover"
              onChange={this.editDropDownChange}
              className={style.editInp}
              placeholder='选择市区'
              value={editDataCity}
            />
          </div>
          <div className={style.editInp}>
            <Input className={style.editInp} value={editDataAddress} onChange={this.editAgentAddressInp} placeholder="商户地址" />
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
  onUseOrStopCheck = (a, b) => {
    console.log(a.target.checked)
    this.setState({
      allUseCheck: a.target.checked
    })
  };
  useOrStopHandleOk = () => {
    let { useOrStopId, useOrStopStatus, allUseCheck } = this.state;
    this.setState({
      useOrStopVisible: false,
      spinningStatus: true,
    });
    useOrStop({
      agentOutletsId: useOrStopId,
      status: useOrStopStatus,
      isEnableAccount: allUseCheck,
      level: '12'
    }).then(res => {
      console.log(res);
      this.reqTableList(this.data);
      if (res.retCode === '0000') {
        notification.info({
          description: "提示",
          message: "状态更新成功",
        });
      }
    });

  };
  useOrStopHandleCancel = (a) => {
    this.setState({
      useOrStopVisible: false,
    });
  };

  editAgentNameInp = (e) => { this.setState({ editDataName: e.target.value }) };
  editDropDownChange = (e) => { this.setState({ editDataCity: e }) };
  editAgentAddressInp = (e) => { this.setState({ editDataAddress: e.target.value }) };
  editHandleChange = (value1, value2) => {
    let arr = [];
    let arr2 = [];
    let { editDataBrand, editAgentBrandObjArr } = this.state;
    console.log(value1, value2, editDataBrand, editAgentBrandObjArr);
    let brandData = this.allBrandData;
    value2.forEach((v, k) => {
      brandData.forEach((i, j) => {
        if (i.id === v.key) {
          v.value = i.name;
          v.allChild = i.children;
          v.children = [];
        }
      });
<<<<<<< HEAD
      // if (editDataBrand.indexOf(v.key) !== -1) {
      //   v.children = editAgentBrandObjArr[editDataBrand.indexOf(v.key)].children;
      // }
=======
      if (editDataBrand.indexOf(v.key) !== -1) {
        v.children = editAgentBrandObjArr[editDataBrand.indexOf(v.key)].children;
      }
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7

      let checkedChild = [];
      v.children.forEach(v => {
        checkedChild.push(v.id)
      });
      arr.push(v.key || v.id);
<<<<<<< HEAD
      arr2.push({
        id: v.key || v.id,
        name: v.value || v.name,
        children: v.allChild || [],
        allChild: [...v.allChild],
        checkedChild: [...v.allChild.map(item => item.id)]
      })
=======
      arr2.push({ id: v.key || v.id, name: v.value || v.name, children: v.children || [], allChild: [...v.allChild], checkedChild: checkedChild })
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
    });
    console.log(arr, arr2)
    this.setState({
      editDataBrand: arr,
      editAgentBrandObjArr: arr2
    })
  };
  editHandleCancel = () => {
    this.allBrandData = JSON.parse(sessionStorage.getItem('allBrandData')).list;
    this.setState({ editVisible: false })
  };
  editHandleOk = () => {
    this.allBrandData = JSON.parse(sessionStorage.getItem('allBrandData')).list;
    let { editAgentBrandObjArr, editDataId, editDataName, editDataCity, editDataAddress } = this.state;
    if (!editDataName) { alert('请输入商户名称'); return }
    if (!editDataCity) { alert('请选择市区'); return }
    if (!editDataAddress) { alert('请填写地址'); return }
    let data = {
      id: editDataId,
      name: editDataName,
      city: editDataCity[0],
      region: editDataCity[1],
      address: editDataAddress,
      brandModelVoList: editAgentBrandObjArr
    };
    this.setState({ editVisible: false, spinningStatus: true });
    editSecondAgent(data).then(res => {
      if (res.retCode === '0000') {
        notification.success({
          description: "提示",
          message: '数据保存成功',
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

  inpChange1 = (e) => {
    this.setState({
      agentName: e.target.value
    })
  };
  inpChange2 = (e) => {
    this.setState({
      agentBrand: e.target.value
    })
  };
  // Just show the latest item.
  displayRender(label) {
    return label[label.length - 1];
  }
  cityDropDownChange = (a) => {
    this.setState({
      cityDropdownValue: a
    })
  };
  statusDropDownChange = (a) => {
    this.setState({
      statusDropdownValue: a
    })
  };

  agentBrandCollapseChange = (a) => {
    if (a === undefined) { return }
    console.log(a)
    this.collapseIndex = a;
  };
  editAgentBrandClassRender = () => {
    let { editAgentBrandObjArr } = this.state;
    return <Collapse onChange={this.agentBrandCollapseChange} accordion>
      {
        editAgentBrandObjArr && editAgentBrandObjArr.map((v, k) => {
          return <Panel header={
            <div>
              <Tag color="blue" key={v.id}>{v.name}</Tag>
              {
                v.children.map((i, j) => {
                  return <Tag key={i.id}>{i.name}</Tag>
                })
              }
              <a href="javascript:;" onClick={(e) => { e.stopPropagation(); }} onMouseDown={this.agentBrandDelete.bind(this, v, k)}>x</a>
            </div>
          } key={k}>
            {/*<Tag closable onClose={this.deleteBrandClass}>*/}
            {/*  Tag 2*/}
            {/*</Tag>*/}
            <Checkbox.Group style={{ width: '100%' }} value={v.checkedChild && v.checkedChild} onChange={this.checkboxChange}>
              <Row>
                {
                  v.allChild.map((a, b) => {
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
  agentBrandDelete = (a, b, c) => {
    console.log(a, b, c);
    let { editAgentBrandObjArr, editDataBrand } = this.state;
    editAgentBrandObjArr.splice(b, 1);
    // editDataBrand.splice(b,1);
    console.log(editDataBrand, editAgentBrandObjArr);
    this.setState({
      agentBrand: editDataBrand,
      agentBrandObjArr: editAgentBrandObjArr
    }, () => {
      this.editHandleChange(editDataBrand, editAgentBrandObjArr)
    })
  };
  checkboxChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
    let arr = this.state.editAgentBrandObjArr;
    let arr2 = [];
    let arr3 = [];
    console.log(arr[this.collapseIndex].children);
    arr[this.collapseIndex].allChild.forEach(v => {
      if (checkedValues.indexOf(v.id) !== -1) {
        arr2.push(v)
        arr3.push(v.id)
      }
    });
    arr[this.collapseIndex].children = [...arr2];
    arr[this.collapseIndex].checkedChild = [...arr3];
    this.setState({
      editAgentBrandObjArr: arr
    })
  };

  brandModal = () => {
    let { cBrandList, loadStatus } = this.state;
    return <Modal
      title="销售品牌型号"
      closable
      visible={this.state.brandModalVisible}
      footer={null}
      onCancel={this.brandModalClose}
    >

      <Collapse onChange={this.lookBrandList} accordion>
        {
          cBrandList && cBrandList.map((v, k) => {
            return <Panel header={v.name} key={v.id}>
              {
                v.children && v.children.map((i, j) => {
                  return <p key={i.id}>{i.name}</p>
                })
              }
            </Panel>
          })
        }
      </Collapse>
      {loadStatus && <Spin size="large" />}
    </Modal>
  };
  brandModalClose = () => {
    this.setState({
      brandModalVisible: false
    })
  };

  getAllBrand = () => {
    getSecondAgentBrand().then(res => {
      console.log(res);
      if (res && res.data) {
        let { selectChildren } = this.state;
        this.allBrandData = res.data;
        sessionStorage.setItem("allBrandData", JSON.stringify({ list: res.data }));
        let list = res.data;
        list.forEach((v, k) => {
          selectChildren.push(<Option key={v.id} children={v.children}>{v.name}</Option>);
        });
        this.setState({
          selectChildren: selectChildren
        })
      } else {
        notification.error({
          description: "提示",
          message: "获取所有品牌型号数据失败",
        });
      }
    })
  };
  childChangeState = () => {
    this.setState({
      spinningStatus: true
    })
  }
}
<<<<<<< HEAD
const mapStateToProps = ({ snApprove }) => ({ snApprove })
export default connect(mapStateToProps)(App);
=======

export default App;
>>>>>>> 41356f35b7e943121f346e96c7f658b71a23b8f7
