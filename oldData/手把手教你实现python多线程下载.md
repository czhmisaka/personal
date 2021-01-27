# 手把手教你 实现 python 多线程下载
### 长话短说：使用downtool模块
downtool 的下载参考文章 [点这里看](https://blog.csdn.net/m0_38119239/article/details/104184871)

```
#python3.7
import downtool
a = downtool.down()
a.start()
a.addMission(url,path)
a.stop()
```
如此，你便创建了一个多线程的下载器，并添加了一个下载任务。
stop()用于控制终止，当然你也可以让他一直运行着，等待后续添加的任务。

### 深入理解：
多线程下载可以分为多文件多线程下载和单文件多线程下载。在具体实现的过程中，单文件的多线程下载所需的知识储备应该是要多于前者的。

先看多文件多线程的下载执行函数：

```python
    def downLoad(self,url,path,tag):
        '''
        下载一个大文件/需要对应路径
        多线程下载
        超时控制 
        按照区块下载并给出进度
        '''
        try:
            self.logTag("正在下载 "+url+" 为 "+path)
            count = 0
            count_tmp = 0
            time1 = time.time()
            header = {'Proxy-Connection':'keep-alive'}
            length = float(r.headers['content-length'])
            r = requests.get(url, stream=True, headers= header)
            f = open(path, 'wb')
            for chunk in r.iter_content(chunk_size = 2048):
                if chunk:
                    f.write(chunk)
                    count += len(chunk)
                    if time.time()-time1 > 0.25:
                        p = count / length * 100
                        speed = self.__formatFloat((count - count_tmp) / 1024 / 1024 / 0.25)
                        count_tmp = count
                        self.__changeStatusByTag(tag,'正在下载',path,str(speed)+'MB/s',str(int(count/length*100))+'%')
                        time1 = time.time()
                if not self.key_Keep:
                    '''
                    stop函数执行,下载终止。
                    '''
                    break
            f.close()
            return True
        except TimeoutError:
            self.__changeStatusByTag(tag,'超时',path)
            self.logTag("Error<<downLoad()>> -path:"+path+"-url:"+url)  
            return False
        except:
            self.__changeStatusByTag(tag,'其他错误',path)
            self.logTag("Error<<downLoad()>> -path:"+path+"-url:"+url)  
            return False
        
```



```python


```
