@[TOC](czh的开发笔记 - leaflet - 地图操作)

## 前言
这个只是个人对该js库的学习文档，介绍一般不会全，详情可查看官方文档。

## leaflet是什么
是一个轻量化的地图显示组件
可以在地图中显示标记和其他绘图等
官方文档:<https://leafletjs.com/reference-1.7.1.html>

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
#### 函数示例
示例:

```javascript
this.map = L.map("map", {
    center: [40, 116],
    zoom: 14,
    zoomControl: false,
    doubleClickZoom: false,
    attributionControl: false,    
    preferCanvas: true
});
L.tileLayer(
    "http://mt0.google.cn/vt/lyrs=y@160000000&hl=zh-CN&gl=CN&src=app&y={y}&x={x}&z={z}&s=Ga",
).addTo(this.map);
```
1. L即为上文所引入的leaflet对象
2. center参数中为 **[经度，纬度]**
3. **tileLayer** 叠加了一层数据层（也就是地图数据）
4. 建议加入 **preferCanvas** 这个有效提升性能，但是不支持ie9以下的ie浏览器（就是放弃用svg渲染，改用 canvas 渲染【好像是调用了webgl】）

### 设立marker
#### 函数示例
示例:
```javascript
let marker_name = L.marker([51.5, -0.09],{
    icon:'url', // 图片链接
    title:'String', // 标签文字
    alt:'String', // 一般是对icon的注解 
    keyboard:'Boolean', // 设置为true时，冒泡事件正常。设置为false则阻止事件传递到画布对象
}).addTo(this.map)

```
1. 向地图中的 **[经度，纬度]** 中插入一个标签

**示例2：如何添加自定义图标文件**

```javascript
let img = require('@/assets/marker.png')
let myIcon = L.icon({
    iconUrl: img,
    // iconUrl:'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
    iconSize: [80,80 ],
    iconAnchor: [40, 80],
    popupAnchor: [-3, -76],
});
L.marker([lat, lng], {
    title: JSON.stringify({
    ...e.latlng
    }),
    name:'Are u sure?',
    icon: myIcon,
    alt: 'linkPoint'
}).addTo(this.map)
```
1. 使用本地文件需要注意路径引入的问题

### 绘制圆点 **.circle()**
#### 函数示例
示例：

```javascript
L.circle([40, 116], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 1
}).addTo(this.map);
```
1. 位置点数组 **[经度，纬度]**
2. 半径 **500**
3. 样式对象 **Json**

### 遍历图层
#### 函数示例
示例 - 普通
```javascript
this.map.eachLayer((layer)=>{
    console.log(layer)
})
```
**layer即为图层对象，注意如果之后使用了canvasMarker做性能优化的话，可能无法识别marker图层**

示例2 - 与删除图层同用

```javascript
 clearLayer(name = '') {
    this.map.eachLayer((layer) => {
        if (layer.options.name == name)
        this.map.removeLayer(layer)
    })
},
```
这个就是一个很典型的通过name来删除图层的方式，实际使用的时候可以通过很多方案，非常自由


### 绑定鼠标事件(点击/滑动/滚轮)
#### 函数示例
**示例**:

```javascript
this.map.on('mousemove', this.mousemove)
```
**这个应该啥也不用讲了，注意一下在对应的div上加上一个事件捕捉反防止事件穿透**
```javascript
@mousemove.stop=""
```
事件列表我就不列了，网上一堆

### 多边形绘制
#### 函数示例
示例:

```javascript
L.polygon(pointList).addTo(this.map)
```
**pointList** 就是一个点的数组

### 绘制点对点线
#### 函数示例
*PS:其实使用多边形绘制的那个函数（**polygon**），然后只穿入两个点就可以*
示例:
```javascript
```

### 主动刷新/屏幕自适应/数据更新事件
#### 函数示例
示例:

```javascript
```

## 一些可能没那么重要但是也有用的东西
### 阻止冒泡
一般在js中使用 
```javascript
e.stopPropagation(); 
```
即可阻止继续向上一层节点冒泡，并开始返回事件
如果时ie环境则需要使用
```javascript
window.event.cancelBubble = true; 
```
在元素中用@或者v-on时使用
```html
@mousemove.stop=""
v-on:mousemove.stop=""
```
即可

### 经纬度和公里的换算
可能需要前后端核验操作


## 性能优化相关

## 最后修改时间 
2021年1月27日 20点44分
