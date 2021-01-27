import socket
import threading
import time
import os

# 创建接收路由列表
routers = []

# 创建互斥锁
lock = threading.Lock()

# 设置需要扫描的端口号列表
port_list = [3389,2425,139,135,137,138,139,445]


# 清空输出函数
def clear():
    os.system('cls')

# 列表展示
def printList(a):
    for x in a :
        print(x)

# 定义查询路由函数
def search_routers(ips = ''):
    # 获取本地ip地址列表
    local_ips = socket.gethostbyname_ex(socket.gethostname())[2]
    if ips!='':
        local_ips.append(ips)
    # print(local_ips)
    # 存放线程列表池
    all_threads = []
    # 循环本地网卡IP列表
    for ip2 in range(1,255):
        for ip in local_ips:
            for i in range(1, 255):
                # clear()
                # printList(routers)
                array = ip.split('.')
                array[2] = str(10)
                array[3] = str(i)
                new_ip = '.'.join(array)
                for port in port_list:
                    # clear()
                    dst_port = int(port)
                    # printList(routers)
                    # print('正在扫描：'+str(new_ip)+':'+str(dst_port))
                    # 循环创建线程去链接该地址
                    t = threading.Thread(target=check_ip, args=(new_ip, dst_port))
                    t.start()
                    # 把新建的线程放到线程池
                    all_threads.append(t)
    # 循环阻塞主线程，等待每一字子线程执行完，程序再退出
    for t in all_threads:
        t.join()
    # printList(routers)
    
    
    
# 定义查询路由函数
def search_routers_all():
    
    all_threads = []
    for ip3 in range(1,255):
        for ip2 in range(1,255):
            for ip in range(1,255):
                for i in range(1, 255):
                    # clear()
                    # printList(routers)
                    array = [ 0,0 ,0 ,0]
                    
                    array[0] = str(ip3)
                    array[1] = str(ip2)
                    array[2] = str(ip)
                    array[3] = str(i)
                    new_ip = '.'.join(array)
                    for port in port_list:
                        # clear()
                        dst_port = int(port)
                        # printList(routers)
                        # print('正在扫描：'+str(new_ip)+':'+str(dst_port))
                        # 循环创建线程去链接该地址
                        t = threading.Thread(target=check_ip, args=(new_ip, dst_port))
                        t.start()
                        # 把新建的线程放到线程池
                        all_threads.append(t)
                        
        # 循环阻塞主线程，等待每一字子线程执行完，程序再退出
        for t in all_threads:
            t.join()
        # printList(routers)
        

# 定义查询路由函数
def search_routers_ip(ips = ''):
    # 获取本地ip地址列表
    local_ips = socket.gethostbyname_ex(socket.gethostname())[2]
    if ips!='':
        local_ips.append(ips)
    # print(local_ips)
    # 存放线程列表池
    all_threads = []
    for port in range(65535):
        time.sleep(0.05)
        # clear()
        dst_port = int(port)
        # printList(routers)
        print('正在扫描：'+str(ips)+':'+str(dst_port))
        # 循环创建线程去链接该地址
        t = threading.Thread(target=check_ip, args=(ips, dst_port))
        t.start()
        # 把新建的线程放到线程池
        all_threads.append(t)
    # 循环阻塞主线程，等待每一字子线程执行完，程序再退出
    for t in all_threads:
        t.join()
    printList(routers)
    



# 创建访问IP列表方法
def check_ip(new_ip, port):
    print('扫描端口'+str(new_ip)+':'+str(port))
    # 创建TCP套接字，链接新的ip列表
    scan_link = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # 设置链接超时时间
    scan_link.settimeout(1)
    # 链接地址(通过指定我们 构造的主机地址，和扫描指定端口)
    result = scan_link.connect_ex((new_ip, port))
    #
    scan_link.close()
    # print(result)
    # 判断链接结果
    if result == 0:
        # 加锁
        lock.acquire()

        print(new_ip, '\t\t端口号%s开放' % port)

        routers.append((new_ip, port))
        # 释放锁
        lock.release()
    # print(routers)



# 启动程序入口
# if __name__ == '__main__':
#     # 启动扫描程序

# search_routers(input('>'))
# search_routers()

# ip = '114.116.234.77'
# search_routers_ip(ip)


search_routers_all()