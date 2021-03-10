@[TOC](czh的开发笔记 - Java - 学习笔记)

## 前言
之前java基础就是0
所以总是遇到奇怪的问题

## 环境

1. JDK 1.8.0
2. Maven
配置path的时候要注意 jdk安装完成后会有一个jre的文件夹和一个jdk的文件夹。
开发记得要使用 jdk的路径,否则找不到javac,会导致无法编译

## 编译注意
当文件格式不对的时候可以用这个

```java
 javac -encoding UTF-8 EmployeeTest.java
```

## springframework

## 一些奇奇怪怪的问题和记录（maven）
1. 用idea打开项目时要选中项目根目录的pom.xml文件
2. 如何读取静态文件的部署配置 -- (最后发现是直接访问静态文件的路径)
3. @scheduled(cron='') 定时任务的装饰器


## 一些莫名其妙的尝试
1. router管理？或者应该说api管理
2. 
## 需要学习的项目 
1. 启动java环境后的调试方案
2. 开发流程和自我测试流程
3. java 常用库和工具的使用

## 小技巧
### win10 查看端口占用
先查看端口，此处用9097举例
```sh
netstat -ano|findstr "9097"
```
在查看到对应进程的pid（一般就是显示的最后一列）后，使用taskkill关闭进程
```sh
taskkill  -F -PID 6832
```
