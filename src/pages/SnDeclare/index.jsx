import React, { useState } from 'react';
import { Table, Row, Col, Button, Modal, List, Input, Form, Upload, Select, Alert, Tree, Empty } from 'antd';
import { Link, connect } from 'umi';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './index.less';
import SnFilter from './components/SnFilter';
import { PlusOutlined, SearchOutlined, LoadingOutlined, DownOutlined } from '@ant-design/icons';
const SnApprove = () => {
    const { TextArea } = Input;
    const [batchVisible, setBatchVisible] = useState(false)
    const [addSnVisible, setAddSnVisible] = useState(true);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [snType, setSnType] = useState('0')
    const [fileList, setFileList] = useState(null);
    const [form] = Form.useForm();
    const { TreeNode } = Tree;


    // tab data
    const columns = [
        {
            title: '申报日期',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: '品牌厂家',
            dataIndex: 'brandManufacturer',
            key: 'brandManufacturer',
        },
        {
            title: '批次名称',
            dataIndex: 'batchName',
            key: 'batchName',
        },
        {
            title: '关联型号数',
            dataIndex: 'relatedNumber',
            key: 'relatedNumber',
        },
        {
            title: '批次SN数',
            dataIndex: 'batchSnNumber',
            key: 'batchSnNumber',
            render: (batchSnNumber, row) => {
                return <div className='font-pending cur' onClick={() => { handleBatchNumber(row) }}>{batchSnNumber}</div>
            }
        },
        {
            title: '审核状态',
            dataIndex: 'reviewStatus',
            key: 'reviewStatus',
            render: (reviewStatus) => {
                if (reviewStatus == 0) return <div className='font-danger'>不通过</div>
                else if (reviewStatus == 1) return <div className='font-pending'>审核</div>
                else return <div className='font-green'>通过</div>
            }
        },
        {
            title: '审核日期',
            dataIndex: 'reviewTime',
            key: 'reviewTime',
        },
        {
            title: '不通过原因',
            dataIndex: 'reasonFail',
            key: 'reasonFail',
        },
        {
            title: '操作',
            render: () => (<a>重新提交</a>)
        },
    ];
    const dataSource = [
        {
            key: '1',
            createTime: '2020/12/12',
            brandManufacturer: "小牛",
            batchName: '',
            batchSnNumber: 5,
        },
        {
            key: '2',
            createTime: '2020/12/12',
        },
    ];

    const pagination = {
        total: 2,
        current: 1,
        pageSize: '10',
        // onChange: this.handlePaginationChange,
        showTotal: total => `共${total}条`,
        showSizeChanger: true,
        showQuickJumper: true,
        // onShowSizeChange: (current, size) => {
        //     _this.setState({
        //         pageIndex: current,
        //         pageSize: size
        //     })
        // }t
    }

    const handleBatchNumber = (row) => {
        setBatchVisible(true)
    }

    const handleBatchVisible = () => {
        setBatchVisible(false)
    }
    // tab data结束

    // 批次SN数弹出层
    const data = [
        '202890111',
        '202890111',
        '202890111',
        '202890111',
    ];

    const handleBatchSearch = () => {

    }
    // 批次SN数弹出层结束

    // add 弹出层
    const handleAddSnVisible = () => {
        setAddSnVisible(true)
    }

    const handleType = e => {
        setSnType(e)
    }
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    const beforeUpload = (file) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                setImageUrl(imageUrl)
                setLoading(false)
            });
        }
    };

    const uploadExcelAttr = {
        accept: '.xls',
        showUploadList: false,
        onRemove: () => {
            setFileList([]);
        },
        beforeUpload: file => {
            setFileList([file]);
            form.setFieldsValue({ snFile: file.name })
            return false;
        }
    }

    // 树
    const treeData = [
        {
            title: 'parent 1',
            key: '0-0',
            children: [
                {
                    title: 'parent 1-0',
                    key: '0-0-0',
                    edit: true
                },
                {
                    title: 'parent 1-1',
                    key: '0-0-1',
                    edit: true
                },
            ],
        },
    ];


    const treeNodeRender = (data) => {
        if (data.length === 0 || data === undefined) return
        return data.map(item => {
            if (!item.children) {
                return (
                        <TreeNode
                            title={
                                <div className={styles.snTreeContainer}>
                                    {item.title}
                                    {item.edit && <span className={styles.snTreeEdit}>编辑</span>}
                                </div>
                            }
                            key={item.key}
                        />

                )
            } else {
                return (
                    <TreeNode title={item.title} key={item.key}>
                        {treeNodeRender(item.children)}
                    </TreeNode>
                )
            }
        })
    }

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };
    // add 弹出层 结束
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div className="ant-upload-text"></div>
        </div>
    );
    return (
        <PageHeaderWrapper className={styles.main}>
            <div>
                <SnFilter></SnFilter>
                <Row>
                    <Col
                        span={24}
                        style={{ textAlign: 'right', marginBottom: '16px' }}
                    >
                        <Button icon={<PlusOutlined />}>新增SN申报</Button>
                    </Col>
                </Row>
                <Modal
                    title="新增SN申报"
                    visible={addSnVisible}
                    onOk={handleAddSnVisible}
                    onCancel={() => { setAddSnVisible(false) }}

                >
                    <Form
                        labelCol={{ span: 5, }}
                        form={form}
                        initialValues={
                            {
                                snType: snType,
                                snFile: fileList !== null ? fileList[0].name : ''
                            }
                        }
                    >
                        <Form.Item label='批次名称' name='snName'>
                            <Input placeholder='请输入该批次名称'></Input>
                        </Form.Item>

                        <Form.Item label='查验方式' name='snType'>
                            <Select placeholder='请选择查验方式' onChange={(e) => { handleType(e) }}>
                                <Select.Option value='0'>现场查验</Select.Option>
                                <Select.Option value='1'>视频查验</Select.Option>
                            </Select>
                        </Form.Item>
                        {
                            snType == '0'
                                ?
                                <Form.Item label='查验审批单' name='approveForm'>
                                    <Upload
                                        name="avatar"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={beforeUpload}
                                        onChange={handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                    </Upload>
                                </Form.Item>
                                :
                                <Form.Item label='视频名称' name='snVideo'>
                                    <TextArea
                                        placeholder='请输入查验视频名称，多段视频以","分隔'
                                        autoSize={{ minRows: 3, maxRows: 5 }}
                                    />
                                </Form.Item>
                        }
                        {/* {JSON.stringify(fileList)} */}
                        <Alert className='mb-16' message="请先下载模版，按照模版要求填写完成后在下方上传" type="warning" />
                        <div className={styles.formAddEls} >
                            <Form.Item label='上传excel' name='snFile'>
                                <Input allowClear placeholder='请选择文件' style={{ width: '270px' }} />
                            </Form.Item>
                            <div className={styles.uploadFile}>
                                <Upload {...uploadExcelAttr}>
                                    <Button>选择文件</Button>
                                </Upload>
                            </div>
                        </div>

                        <div className={styles.treeContainer}>
                            <div className={styles.treeTitle}>
                                整车编码SN
                            </div>
                            <div className={styles.treeContent}>
                                {
                                    treeData.length
                                        ?
                                        <Tree
                                            checkable
                                            switcherIcon={<DownOutlined />}
                                            onSelect={onSelect}
                                            onCheck={onCheck}
                                        >
                                            {
                                                treeNodeRender(treeData)
                                            }
                                        </Tree>
                                        :
                                        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                }
                            </div>
                        </div>
                    </Form>
                </Modal>
                <Table dataSource={dataSource} columns={columns} pagination={pagination} />
                <Modal
                    title="整车编码SN"
                    visible={batchVisible}
                    onOk={handleBatchVisible}
                    onCancel={() => { setBatchVisible(false) }}
                >
                    <p>批次SN数：128</p>
                    <Input placeholder='搜索SN' onPressEnter={(e) => { handleBatchSearch(e) }} prefix={<SearchOutlined />}></Input>
                    <List
                        className='mt-16'
                        size="small"
                        pagination={{
                            onChange: page => {
                                console.log(page)
                            },
                            pageSize: 10,
                        }}
                        dataSource={data}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </Modal>
            </div>
        </PageHeaderWrapper>
    );
}

export default SnApprove;
