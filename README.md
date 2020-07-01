# 陕西电动自行车-经销商管理后台(基于antd-pro)

### 部署
-   环境域名在 /src/utils/request.js 中区分
-   yarn build:test  测试环境，部署方式： 
        - 将打包好的项目部署到gogs;
        - 登录jenkins,http://113.142.56.124:20051/job/PlateAdmin/
        - build now成功以后测试环境更新成功
-   yarn build       正式环境, 地址： https://electric.sxwinstar.net/plateSale/

### 项目说明
#### 登录
- 开发环境和测试环境用 账号密码登录，密码 输在短信验证码栏，线上环境短信验证码登录
- 账号密码请找后台人员-陈姣姣

#### 路由
- /config/config.js

### 李姣姣-TODO
-    人员管理
-    登录
-    目录管理
-    车辆管理

    
