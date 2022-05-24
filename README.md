# Dokemon

> 当前游戏完善程度极低，仅供测试和相关贡献提交，正在开发中，因为这是作者第一次用 React 开发，边学边做可能会经常性重构代码~

这是一个类 `Pokemon` 的在线网页MUD `修仙` 游戏

# Idea

我想的是在一个充满豆可梦的世界里，玩家以训练师的身份进行修仙  
没错，就是修仙，时代变了，豆可梦的养成可以赋予主角特殊技能和属性加成

### 开发环境配置

#### 安装 FastApi 环境

`pip install -r ./requirements.txt`

#### 安装 React 环境

进入`./view`目录下,执行：

`npm install`

修改 `/view/src/config.js`的服务器地址配置

#### 数据库

导入根目录下的 `dokemon.sql` 数据库配置项：`./data/mysql.py`

### 测试运行

#### 启动服务端


在根目录执行 `uvicorn main:app --reload`  
默认地址：http://127.0.0.1:8000

#### 启动React

在view目录执行 `npm start`  
默认地址: http://localhost:3000

### 部署上线

暂未完成

