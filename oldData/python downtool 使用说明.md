@[TOC](Python downtool 使用说明)

# 前言
这是一个多线程下载器，目前功能还在完善中
主要用于爬虫爬取网站时相关数据/文件/图片的下载
https://github.com/czhmisaka/downTool
# downtool 环境需求
downtool 当前版本0.1.4
在python 3.6 与 python 3.7版本中使用。
前置环境有：requests/datetime/fake_useragent
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200205163629816.png)
# 安装方式
pip install downtool
## 安装成功后的测试
在python中输入以下代码

>import downtool
>a = downtool.down()
>a.start()

出现界面

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200205164618851.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM4MTE5MjM5,size_16,color_FFFFFF,t_70)
可视为安装成功
# downtool 的设置

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200223205043786.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L20wXzM4MTE5MjM5,size_16,color_FFFFFF,t_70)