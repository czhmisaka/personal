let config = {
    projectName: 'cngpp-op-fe',
    list_modules: [{
        moduleName: 'pickUpPoint',
        api: {
            root: 'pickUpControlHistory',
            data: {
                // 获取自提点操作历史记录
                queryPointOptRecord: API_HOST + "/queryPointOptRecord",
                // 带有_dataTempate的是用于线上快速调用接口用的【一般都是post才会加】，路由 /mapTest
                queryPointOptRecord_dataTemplate: {
                    "data": {
                        "partnerId": 28004,
                        "pointIds": [],
                        "pageNum": 0,
                        "pageSize": 100
                    }
                },
                // 获取自提点合作伙伴列表
                getPickupPartnerList: API_HOST + "getPickupPartnerList",
                // 获取操作类型
                getOperateType: API_HOST + "getOperateType"
            }
        },
        configTemplate: {
            
        },
        router: {
            functionName: 'routerFormat',
            baseRouter: 'PickUpPoint',
            // 函数引用备注
            // function routerFormat(componentName, otherPath = "", name = "", meta = {})
            args: ['list', 'list', '自提点操作历史记录']
        }
    }]
}