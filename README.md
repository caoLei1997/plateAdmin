# 陕西电动自行车-经销商管理后台(基于antd-pro)

### 部署
-   环境域名在 /src/utils/request.js 中区分
-   yarn build:test  测试环境，部署方式： 
    - 将打包好的项目部署到gogs，直接git提交;
    - 登录jenkins,http://113.142.56.124:20051/job/PlateAdmin/
    - build now成功以后测试环境更新成功
-   yarn build       正式环境, 地址： https://electric.sxwinstar.net/plateSale/

### 项目说明
#### 登录
- 开发环境和测试环境用 账号密码登录，密码 输在短信验证码栏，线上环境短信验证码登录
- 账号密码请找后台人员-陈姣姣，目前可用账号：15266666666   123456

#### 路由
- /config/config.js


#### 目录
- ├── config 
- &nbsp; &nbsp; └── config.js &nbsp; &nbsp;  // 路由配置等
- ├── mock &nbsp; &nbsp; // mock数据
- ├── plateSale  &nbsp; &nbsp; // 打包文件，在/config/config.js中修改publicPath和outputPath
- ├── models &nbsp; &nbsp;  // 数据访问
- ├── pages
- &nbsp; &nbsp; └── carManage &nbsp; &nbsp; // 车辆管理
- &nbsp; &nbsp; └── catalogManage &nbsp; &nbsp; // 目录管理
- &nbsp; &nbsp; └── personalManage &nbsp; &nbsp; // 人员管理，正在测试......
- &nbsp; &nbsp; └── agentManage &nbsp; &nbsp; // 经销商管理，正在测试......
- ├── services   &nbsp; &nbsp; // 接口访问地址
- ├── utils   
- &nbsp; &nbsp; └── authority.js &nbsp; &nbsp; // 处理用户菜单权限
- &nbsp; &nbsp; └── excel.js &nbsp; &nbsp; // excel导出js
- &nbsp; &nbsp; └── request.js &nbsp; &nbsp; // 拦截器
- ├── commonFun.js   &nbsp; &nbsp; // 公共方法
- ├── globalConstant.js   &nbsp; &nbsp; // 
- ├── globalData.js   &nbsp; &nbsp; // 

### 李姣姣-TODO
- [x] 人员管理
- [x] 登录
- [x] 目录管理
- [x] 车辆管理

    
