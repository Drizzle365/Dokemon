# Dokemon

这是一个类 `Pokemon` 的在线网页MUD游戏

### 开发环境配置

#### 安装 FastApi 环境

`pip install -r ./requirements.txt`

#### 安装 React 环境

进入`./view`目录下,执行：

`npm install`

#### 数据库

导入根目录下的 `dokemon.sql` 数据库配置项：`./data/mysql.sql`

### 测试运行

#### 启动服务端

在根目录执行 `uvicorn main:app --reload`  
默认地址：http://127.0.0.1:8000

#### 启动React

在view目录执行 `npm start`  
默认地址: http://localhost:3000