@[TOC](czh的开发笔记 - leaflet - 地图操作)

## leaflet是什么

是一个轻量化的地图显示组件
可以在地图中显示标记和其他绘图等

## 如何引入使用 leatflet
啥也不说了，那个页面要用的直接copy
```javascript
  import * as L from 'leaflet'
```
当然如果可以配置到Vue对象中，做全局使用也可以，看需求。

## api记录
本文内环境皆为**vue2.6.11+leaflet**
示例函数与数据皆为测试数据，仅供参考使用
**this.map为map对象**

### 初始化地图对象
#### 函数
示例:

```javascript
this.map = L.map("map", {
    center: [40, 116],
    zoom: 14,
    zoomControl: false,
    doubleClickZoom: false,
    attributionControl: false
});
```
1. L即为上文所引入的leaflet对象
2. center参数中为 **[纬度，经度]**



### 设立marker
#### 函数
示例:

```javascript

```


### 绘制圆点 **.circle()**
#### 函数
示例：

```javascript
L.circle([40, 116], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1
}).addTo(this.map);
```
1. 位置点数组 **[纬度，经度]**
2. 半径 **500**
3. 样式对象 **Json**

### 绑定鼠标事件(点击/滑动/滚轮)
#### 函数
**示例**:

```javascript
this.map.on('mousemove', this.mousemove)
```
**这个应该啥也不用讲了，注意一下在对应的div上加上一个事件捕捉反防止事件穿透**
```javascript
@mousemove.stop=""
```

### 多边形绘制
#### 函数
示例:

```javascript
```

### 绘制点对点线
#### 函数
示例:

```javascript
```

### 主动刷新/屏幕自适应/数据更新事件
#### 函数
示例:

```javascript
```


