## nginx 学习&使用记录

### 查看当前运行的nginx服务
```cmd
tasklist /fi "imagename eq nginx.exe"
```

### 目前的配置文档


```conf

worker_processes  1;
events {
    worker_connections  1024;
}
http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;
    # gzip  on;
    server {
        listen       80;
        server_name  localhost;
        location /map {
            proxy_pass http://127.0.0.1:8080;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
    include servers/*;
}
```

1. 监听80 端口
2. 捕获 */map* 路径
3. 跳转到本地8080端口继续访问