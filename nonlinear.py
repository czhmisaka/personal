import numpy as np

# init data_set
X = np.array([[2, 0],
              [0, 2],
              [-1, -1],
              [1, 1],
              [-2, 0],
              [0, -2]])
# init label
y = np.array([1, 1, 1, -1, -1, -1]).reshape(-1, 1)
# data dim upgrade
new_X = np.hstack((X,
                   # (X[:, 0] ** 3).reshape(-1, 1),   x_0 ^ 3
                   (X[:, 1] ** 3).reshape(-1, 1)))  # x_1 ^ 3

# init params
w = np.zeros((new_X.shape[1], 1))
b = 0
# set learning rate
lr = 1

no_error = False
for epoch in range(10):
    no_error = True
    for i in range(new_X.shape[0]):
        x = new_X[i, :].reshape(1, -1)

        # x @ w + b < 0 表示预测为负类, >0 表示预测为正类, 若与真实值相同，预测值与真实值相乘 > 0
        # >0 表示预测正确， <=0 表示预测错误，需要训练
        if y[i] * (x @ w + b) <= 0:
            no_error = False
            w += lr * y[i] * x.T        # w -= w的梯度 * 学习率 为什么这里是 ＋= 因为 y[i] 与梯度方向相反
            b += lr * y[i]              # b -= b的梯度 * 学习率

    # 全部分类正确返回
    if no_error:
        print('epoch:', epoch, 'no_error. \t w:', w.flatten(), '\t b:', b)
        break

if not no_error:
    print('failed,\tw:', w.flatten(), '\t b:', b)
