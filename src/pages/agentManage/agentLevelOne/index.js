import React from 'react';
import style from './index.less';
import { Form, Input, Button, Cascader as Cascade, Table, Modal, Select, notification, Spin, Checkbox, Tag } from 'antd';
import { requestAgentList, requestCityRegion, requestBrand, editFirstAgentSave, useOrStop } from "../../../services/agentManage"
import Add from "./add/add"
const { Option } = Select;
import { Link } from 'umi';
import { PlusOutlined } from '@ant-design/icons';
import { filterCity } from '@/utils/utils'
import { typeApproveAgent } from '@/services/typeApproval'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.selectChildren = [];
    this.brandsList = [];
    this.agentTableListParams = {};
    this.state = {
      dropdownData: [],
      dropdownValue: '',
      statusDropdownValue: '',
      tableDataSource: [],
      consTrCt: false,
      selectChildren: [],
      editVisible: false,
      editDataName: '',
      editDataCity: [],
      editDataAddress: '',
      editDataBrandId: [],
      agentName: '',
      agentBrand: '',
      // paginationSeting
      total: null,
      pageSize: 10,
      pageIndex: 0,
      onChange: (a, b) => {
        console.log(a, b);
        let { pageSize, dropdownValue } = this.state;
        this.agentTableListParams = {
          pageIndex: a - 1,
          pageSize: pageSize,
          level: 11,
          brandNameId: this.state.brandNameId,
          agentOutletsName: this.state.agentName,
          status: this.state.statusDropdownValue,
          city: dropdownValue && dropdownValue[0],
          region: dropdownValue && dropdownValue[1]
        };
        this.tableListReq(this.agentTableListParams)
      },
      spinningStatus: true,
      allList: [],
      editSelectList: [],
    }
  }

  componentDidMount() {
    this.agentTableListParams = {
      pageIndex: 0,
      pageSize: this.state.pageSize,
      level: 11,
      brandId: '',
      agentOutletsName: "",
      status: this.state.statusDropdownValue,
      city: "",
      region: ""
    };
    console.log(process.env.REACT_APP_ENV);
    this.tableListReq(this.agentTableListParams);
    this.reqCityRegion();
    this.reqBrand();

    typeApproveAgent().then(res => {
      this.setState({
        allList: [...res.data]
      })
    })
  }

  componentWillUnmount() {

  }

  editData = (a, b) => {

    let brandId = [];
    let brandsList = this.brandsList;
    let editDataBrandId = a.brandList[0].id;
    
    this.selectChildrenRender(brandsList, a);
    this.setState({
      editVisible: true,
      editDataName: a.name,
      editDataCity: [a.city, a.region],
      editDataAddress: a.address,
      editDataBrandId:[editDataBrandId] ,
      editDataId: a.id,
      selectChildren: this.selectChildren.filter(item => item.agented === 1)
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

  editAgentNameInp = (e) => { this.setState({ editDataName: e.target.value }) };

  editDropDownChange = (e) => { this.setState({ editDataCity: e }) };

  editAgentAddressInp = (e) => { this.setState({ editDataAddress: e.target.value }) };

  editHandleChange = (v1, v2) => {
    console.log(v1, v2);
    // sendDataBrand
    let arr = [];
    let arr1 = [];
    arr.push(v2 && v2.value)
    this.setState({
      editDataBrandId: arr,
    })
  };

  editHandleCancel = () => { this.setState({ editVisible: false }) };

  editHandleOk = () => {
    let { editDataName, editDataCity, editDataAddress, editDataBrandId, editDataId } = this.state;
    if (!editDataName) { alert('请输入商户名称'); return }
    if (!editDataCity) { alert('请选择市区'); return }
    if (!editDataAddress) { alert('请填写地址'); return }
    this.setState({ spinningStatus: true, editVisible: false });
    editFirstAgentSave({
      id: editDataId,
      name: editDataName,
      city: editDataCity[0],
      region: editDataCity[1],
      address: editDataAddress,
      brandIds: editDataBrandId,
    }).then(res => {
      this.tableListReq(this.agentTableListParams)
    });

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
      agentBrand: e
    })
  };
  // Just show the latest item.
  displayRender(label) {
    return label[label.length - 1];
  }
  dropDownChange = (a) => {
    this.setState({
      dropdownValue: a
    })
  };
  statusDropDownChange = (a) => {
    console.log(a.join(''))
    this.setState({
      statusDropdownValue: a.join('')
    })
  };

  submitSearchData = () => {
    let { agentName, agentBrand, dropdownValue, statusDropdownValue } = this.state;
    this.agentTableListParams.brandId = agentBrand;
    this.agentTableListParams.agentOutletsName = agentName;
    this.agentTableListParams.status = statusDropdownValue;
    this.agentTableListParams.city = dropdownValue && dropdownValue[0];
    this.agentTableListParams.region = dropdownValue && dropdownValue[1];
    this.agentTableListParams.pageIndex = 0;
    this.tableListReq(this.agentTableListParams)
  };

  tableListReq = (data) => {
    this.setState({
      spinningStatus: true,
      consTrCt: false
    });
    requestAgentList(data).then(res => {
      if (res && res.data && res.data.content) {
        let list = res.data.content;
        list.forEach((v, k) => {
          v.key = 'list' + k
          v.cityRegion = v.city + v.region;
          v.do = <p>
            <a href="javascript:;" key={k} onClick={this.editData.bind('', v, k, this)}>编辑</a>&nbsp;&nbsp;
            {v.status === '1' ? <a href="javascript:;" key={k} onClick={this.doUse.bind('', v, k, this)}>启用</a> : <a href="javascript:;" key={k} onClick={this.doUse.bind('', v, k, this)}>停用</a>}

          </p>
          v.statusTxt = v.status === '0' ? <Tag color="orange">启用</Tag> : <Tag color="red">停用</Tag>;
          v.level = v.level === 11 ? '品牌厂家' : '--';
          v.employeesNumber = v.employeesNumber === null ? 0 : v.employeesNumber;
          // v.personNum = <a href='javascript:;' key={k} onClick={this.personNumClick.bind('',v,k,this)}>{v.employeesNumber}</a>;
          v.personNum = <Link to={"/personal/" + v.id} key={k} onClick={this.personNumClick.bind('', v, k, this)}>{v.employeesNumber}</Link>;
          v.brand = [];
          v.brandList.forEach((i, j) => {
            v.brand.push(i.brandName + '\n')
          })
        });
        this.setState({
          consTrCt: true,
          tableDataSource: [...list],
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

  doUse = (a, b) => {
    console.log(a, b);
    let title = a.status === '0' ? "停用" : "启用";
    let content = a.status === '0' ? "停用会导致该商户相关所有业务人员账号停用，不能再处理代牌销售业务，确认要停用吗？" :
      <>
        启用后该商户将恢复代牌销售业务相关办理权限，确认要启用吗？
        <p>
          <Checkbox onChange={this.onUseOrStopCheck}>同时启用该商户所有人员账号</Checkbox>
        </p>
      </>
    let isUse;

    this.setState({
      useOrStopId: a.id,
      useOrStopVisible: true,
      useOrStopTitle: title,
      useOrStopContent: content,
      useOrStopIsUse: isUse,
      useOrStopStatus: a.status === '0' ? '1' : '0'
    })
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
      level: '11'
    }).then(res => {
      console.log(res);
      this.tableListReq(this.agentTableListParams);
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
  reqCityRegion = () => {
    requestCityRegion().then(res => {
      console.log(res)
      if (res && res.data) {
        this.setState({
          dropdownData: res.data
        });
        this.props.onSubmit(res.data)
      } else {
        notification.error({
          description: "暂无数据",
          message: "获取地区数据失败",
        });
      }
    })
  };

  reqBrand = () => {
    requestBrand().then(res => {
      console.log(res)
      if (res && res.data) {
        this.brandsList = res.data;
      }
    })
  };

  selectChildrenRender = (data, listItem) => {
    const newData = [...data];
    let arr = [
      ...newData.filter(item => item.agented === 1),
      ...newData.filter(item => item.brandName === listItem.brandList[0].brandName),
    ]
    this.setState({
      editSelectList: arr
    }, () => {
      console.log(this.state.editSelectList);
    });
  };

  childChangeState = () => {
    this.setState({
      spinningStatus: true
    })
  }

  render() {
    let {
      dropdownData,
      tableDataSource,
      paginationSeting,
      visible,
      editDataName,
      editDataCity,
      editDataAddress,
      editDataBrandId,
      total,
      pageSize,
      pageIndex,
      onChange,
      selectChildren,
      spinningStatus,
      useOrStopTitle,
      useOrStopVisible,
      useOrStopContent,
      useOrStopIsUse,
      consTrCt,
      allList,
      brandsList
    } = this.state;

    const tableColumns = [
      {
        title: '商户ID',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '商户名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '级别',
        dataIndex: 'level',
        key: 'level',
      },
      {
        title: '市区',
        dataIndex: 'cityRegion',
        key: 'cityRegion',
      },
      {
        title: '地址',
        width: 160,
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '代理品牌',
        dataIndex: 'brand',
        key: 'brand',
      },
      {
        title: '人员数',
        dataIndex: 'personNum',
        key: 'personNum',
      },
      {
        title: '状态',
        dataIndex: 'statusTxt',
        key: 'statusTxt',
      },
      {
        title: '停用/启用日期',
        dataIndex: 'updateTime',
        key: 'updateTime',
        width: 150
      },
      {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
        width: 120
      },
    ]

    return (
      <div className={style.agentLevelOneMain}>
        <div className={style.searchBox}>
          <div className={style.searchBoxItem}>
            <span>商户名称：</span>
            <Input
              onChange={this.inpChange1}
              className={style.inp}
              placeholder='姓名'
              size='middle'
            />
          </div>
          {/* <div className={style.searchBoxItem}>
            <span>代理品牌：</span>
            <Input
              onChange={this.inpChange2}
              className={style.inp}
              placeholder='品牌名称'
              size='middle'
            />
          </div> */}
          <div style={{ width: '200px', display: "inline-block", marginRight: '20px' }}>
            <Form.Item label='代理品牌'>
              <Select
                placeholder='品牌名称'
                defaultValue=''
                onChange={this.inpChange2}
              >
                <Option value=''>全部</Option>
                {
                  this.brandsList &&
                  this.brandsList.length &&
                  this.brandsList.map(item => <Option
                    key={item.id}
                    value={item.id}
                  >
                    {item.brandName}
                  </Option>)
                }
              </Select>
            </Form.Item>
          </div>
          <div className={style.searchBoxItem}>
            <span>市区：</span>
            <Cascade
              options={filterCity(dropdownData)}
              expandTrigger="hover"
              displayRender={this.displayRender}
              onChange={this.dropDownChange}
              className={style.inp}
              placeholder='全部'
              defaultValue={['']}
            />
          </div>
          <div className={style.searchBoxItem}>
            <span>状态：</span>
            <Cascade
              options={[
                { label: '全部', value: '' },
                { label: '启用', value: '0' },
                { label: '停用', value: '1' }
              ]}
              expandTrigger="hover"
              displayRender={this.displayRender}
              onChange={this.statusDropDownChange}
              className={style.inp}
              placeholder='全部'
              defaultValue={['']}
            />
          </div>

          <Button className={style.sub} onClick={this.submitSearchData} type="primary" htmlType="submit">
            查询
            </Button>
        </div>

        <div className={style.addAgentBox}>
          <Button
            style={{ backgroundColor: '#52c41a', color: '#fff' }}
            className={style.btn}
            icon={<PlusOutlined />}
            onClick={this.showModal}
          >
            新增品牌厂家
          </Button>
        </div>
        <Spin spinning={spinningStatus}>
          <div className={style.tableList}>
            {/* <AgentList data={tableDataSource} /> */}
            <Table
              dataSource={tableDataSource}
              pagination={consTrCt && {
                total: total,
                pageSize: pageSize,
                current: pageIndex + 1,
                onChange: onChange,
                showTotal: total => `共${total}条`,
                showSizeChanger: true,
                showQuickJumper: true,
                onShowSizeChange: (current, size) => {
                  this.setState({
                    pageIndex: current - 1,
                    pageSize: size
                  })
                }
              }}
              columns={tableColumns}
            />
          </div>
        </Spin>
        {/*添加弹框*/}
        {
          dropdownData.length > 0 && <Add
            onRef={this.onRef}
            onChangePLoad={this.childChangeState}
            onAddOk={this.submitSearchData}
            brandChildren={selectChildren}
            cityRegion={dropdownData}
          />
        }
        {/*编辑弹框*/}
        <Modal
          title="编辑品牌厂家"
          visible={this.state.editVisible}
          onOk={this.editHandleOk}
          onCancel={this.editHandleCancel}
          maskClosable={false}
        >
          <div className={style.editInp}>
            <Input
              className={style.editInp}
              value={editDataName}
              onChange={this.editAgentNameInp}
              placeholder="品牌厂家名称"

            />
          </div>
          <div className={style.editInp}>
            <Cascade
              options={dropdownData}
              expandTrigger="hover"
              onChange={this.editDropDownChange}
              className={style.editInp}
              placeholder='选择市区'
              value={editDataCity}
            />
          </div>
          <div className={style.editInp}>
            <Input
              className={style.editInp}
              value={editDataAddress}
              onChange={this.editAgentAddressInp}
              placeholder="品牌厂家地址"
            />
          </div>
          <div className={style.editInp}>
            <Select
              allowClear={true}
              style={{ width: '100%' }}
              placeholder="选择代理品牌"
              onChange={this.editHandleChange}
              value={editDataBrandId}
            >
              {
                this.state.editSelectList.map(ele => <Option key={ele.id} disabled={false}>{ele.brandName}</Option>)
              }
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

}

export default App;
