# 个人工作范围简述


1. 用户数据中心模块
   1. 主面板            （/#/userDataCenter/main）
   2. 用户列表          （/#/userDataCenter/userListTable）
      1. 用户详情面板   （/#/userDataCenter/userListTable/userDetail/）
   3. 商品数据          （/#/userDataCenter/goodsListTable）
2. 订单详情模块 -- 修改
   1. 样式修改
   2. 部分跳转功能修改与重构
   3. 添加扫码输入模块
3. 快递单列表模块 -- 修改
   1. 添加打印功能，修改快递单页面显示
4. 库存管理模块 -- 修改
   1. 商品码生成模块
      1. 搜索商品码列表模块
   2. 生成新码

#### 用户数据中心模块——主面板
**页面框架**
1. 使用antd-vue框架，并且页面主体功能使用table组件构建
2. 
**一般使用函数简述**

```javascript
getUserListToday(startTime = "", endTime = "")
```
其函数参数*startTime*,*endTime*
