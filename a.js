
let activityData = (key) => {
    const FullData = {
        uid_activity_status: '预报名',
        activity: {
            activity_id: '测试活动id',
            activity_title: '测试活动title',
            slogan: '测试活动slogan',
            activity_image: '测试活动images',
            activity_end: '测试用活动截止时间',
            explain: '测试用描述1;测试用描述2',
            is_enroll: false,
            place: '测试用地址'
        },
        activity_id: '测试活动',
        hasEnroll: false,
        cid: "",
        uid: '',
        userList: [{
            "uid": "86cf628e-6fce-11ea-9234-0123456789ab",
            "avatarUrl": "https://zh-prod-1252378533.cos.ap-shanghai.myqcloud.com/zaihuwang/profiles/86cf628e-6fce-11ea-9234-0123456789ab/album/e8970160-7026-11ea-9234-a95ff3d8e57b.png",
            "nickName": "等待爱情"
        }, {
            "uid": "db1ddb6e-6eec-11ea-9234-0123456789ab",
            "avatarUrl": "https://zh-prod-1252378533.cos.ap-shanghai.myqcloud.com/zaihuwang/profiles/db1ddb6e-6eec-11ea-9234-0123456789ab/album/9cd1a850-7028-11ea-9234-cb9501a00550.png",
            "nickName": "望你"
        }, {
            "uid": "dc194fce-6f57-11ea-9234-0123456789ab",
            "avatarUrl": "https://zh-prod-1252378533.cos.ap-shanghai.myqcloud.com/zaihuwang/profiles/dc194fce-6f57-11ea-9234-0123456789ab/album/4bb51ba0-70a0-11ea-9234-11ad25d3f71d.png",
            "nickName": "守护者"
        }, {
            "uid": "c532527e-6ef8-11ea-9234-0123456789ab",
            "avatarUrl": "https://zh-prod-1252378533.cos.ap-shanghai.myqcloud.com/zaihuwang/profiles/c532527e-6ef8-11ea-9234-0123456789ab/album/5e1b14d0-7027-11ea-9234-a95ff3d8e57b.png",
            "nickName": "天份"
        }, {
            "uid": "cd8badae-6ef2-11ea-9234-0123456789ab",
            "avatarUrl": "https://zh-prod-1252378533.cos.ap-shanghai.myqcloud.com/zaihuwang/profiles/cd8badae-6ef2-11ea-9234-0123456789ab/album/2d1d3b20-7026-11ea-9234-a95ff3d8e57b.png",
            "nickName": "相约爱情"
        }],
        userBasic: {
            "workarea": ["浙江省", "杭州市", "上城区"],
            "carreer": ["客户服务", "客服"],
            "home_town": ["浙江省", "杭州市", "上城区"],
            "from": "本人",
            "uid": "50c06bee-637f-11ea-9234-0123456789ab",
            "mphone": "13906600323",
            "gender": "男",
            "birthday": "1997-09-01",
            "income": "3-5千",
            "edu": "博士",
            "married": "未婚",
            "children": "有孩子且住一起",
            "wanted_children": "视情况而定",
            "when_married": "二年内结婚",
            "weight": 43,
            "height": 141,
            "shape": "丰满",
            "age": "23",
            'say_something': "你好，世界。",
            "nickName": "阿斯顿的的",
            "cid": "6729cdee823f8d6f30fe0290201a1766",
            'createdAt': "2020-03-27T12:31:18.569Z",
            "star": "金牛座(04.21-05.20)",
            '__v': 0,
            '_id': "5e7df2162ade0a001a36856e",
            '__proto__': Object
        },
        matchCondition: {
            "age": [18, 51],
            "workarea": ["浙江省", "杭州市", "上城区"],
            "cid": "6729cdee823f8d6f30fe0290201a1766",
            'updatedAt': "2020-04-09T01:42:10.029Z",
            'createdAt': "2020-03-27T12:31:18.576Z",
            "uid": "50c06bee-637f-11ea-9234-0123456789ab",
            "children": "没有小孩",
            "edu": "小学",
            "height": 140,
            "income": "5-8千",
            "married": "未婚",
            "wanted_children": "想要孩子",
            '__v ': 0,
            '_id': "5e7df2169d47f60013670981",
            '__proto__': Object
        }
    }
    switch (key) {
        case 'FullData':
            return FullData
        case 'FullData_hasEnroll':
            FullData.hasEnroll = true
            FullData.activity.is_enroll = true
            FullData.uid_activity_status = '已报名'
            for (let x in FullData.userList) {
                FullData.userList.push(FullData.userList[x])
            }
            return FullData
        case 'lessBasic':
            FullData.matchCondition = {
                "workarea": ["浙江省", "杭州市", "上城区"]
            }
            FullData.userBasic = {
                "age": [18, 51]
            }
            return FullData;
        case "lessMatchCondition":
            FullData.matchCondition = {
                "age": [18, 51]
            }
            return FullData
        case 'lessUserBasic':
            FullData.userBasic = {
                "workarea": ["浙江省", "杭州市", "上城区"]
            }
            return FullData;
        case 'hasKeyWithNoUserBasicData':
            Object.keys(FullData.userBasic).forEach(function (k) {
                FullData.userBasic[k] = null
            })
            return FullData
        case 'hasKeyWithNoUserMatchData':
            Object.keys(FullData.matchCondition).forEach(function (k) {
                FullData.matchCondition[k] = null
            })
            return FullData

    }
}



let properties = activityData('FullData_hasEnroll')
console.log(properties.userList)