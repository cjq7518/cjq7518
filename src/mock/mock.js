import Mock from "mockjs"
const menuList = [
    {
        name: "首页",
        icon: "el-icon-s-home",
        url: "/index",
    },
    {
        name: "账户管理",
        icon: "el-icon-coin",
        url: "/account",
        children: [
            {
                name: "所有人员",
                icon: "el-icon-user",
                url: "/account/all",
            },
            {
                name: "业务人员",
                icon: "el-icon-phone-outline",
                url: "/account/business",
            },
            {
                name: "审核人员",
                icon: "el-icon-s-check",
                url: "/account/audit",
            },
            {
                name: "风控经理",
                icon: "el-icon-s-finance",
                url: "/account/risk",
            },
            {
                name: "管理员",
                icon: "el-icon-s-custom",
                url: "/account/admin",
            }
        ]
    },
    {
        name: "产品管理",
        icon: "el-icon-menu",
        url: "/product",
        children: [
            {
                name: "全部产品",
                icon: "el-icon-notebook-2",
                url: "/product/all",
            },
            {
                name: "汽车消费",
                icon: "el-icon-truck",
                url: "/product/carConsumption",
            },
            {
                name: "房产消费",
                icon: "el-icon-office-building",
                url: "/product/estate",
            },
            {
                name: "抵押贷款",
                icon: "el-icon-money",
                url: "/product/mortgage",
            },
        ]
    },
    {
        name: "订单管理",
        icon: "el-icon-s-order",
        url: "/order",
        children: [
            {
                name: "所有订单",
                icon: "el-icon-tickets",
                url: "/orders/all",
            },
            {
                name: "新建订单",
                icon: "el-icon-document",
                url: "/orders/create",
            },
        ]
    },
    {
        name: "客户管理",
        icon: "el-icon-user",
        url: "/customer",
        children: [
            {
                name: "基本信息",
                icon: "el-icon-chat-square",
                url: "/customer/info",
            },
            {
                name: "资金记录",
                icon: "el-icon-bank-card",
                url: "/record",
            },
        ]
    },
    {
        name: "待办事项",
        icon: "el-icon-chat-dot-square",
        url: "/todo",
    },
    {
        name: "个人中心",
        icon: "el-icon-user",
        url: "/my",
    }
]
//登录接口
Mock.mock("localhost:8080/login","post",(req)=>{
    const {username,password}=JSON.parse(req.body);
    if(username=="admin"&&password=="abc123"){
        return{
            code:200,
            success:true,
            nickname:"亲爱的竹竹均均",
            token:"6arc9h0vhcr0f8iprpnscmf08s",
            message:"登录成功"
        }
    }
    if(username=="login"&&password=="abc123"){
        return{
            code:200,
            success:true,
            nickname:"陈星宇",
            token:"6arc9h0vhcr0f8iprpnscmf08s",
            message:"登录成功"
        }
    }
    else{
        return{
            code:100,
            success:false,
            message:"用户名或密码有误"
        }
    }
})
//左侧菜单接口
Mock.mock('localhost:8080/menu', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "成功",
        data: menuList
    }
});
//记录入职时间
Mock.mock('localhost:8080/in', 'get', () => {
    return {
        code: 200,
        success: true,
        message: "操作成功",
        time: "2020-07-01 00:00:00"
    }
})
//所有人员
Mock.mock('localhost:8080/all', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'character|1': ["业务人员", "审核人员", "销售经理", "管理员"],
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进货进行需求审核", "对销售进行利润审核"],
                'status|1': [1, 2],
               
            }],
            "total|1":[10,20,30,40,50]
        })
    }
}),
//业务人员
Mock.mock('localhost:8080/business', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'character|1': ["业务人员"],
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进货进行需求审核", "对销售进行利润审核"],
                'status|1': [1, 2],
               
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
//审核人员
Mock.mock('localhost:8080/audit', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'character|1': ["审核人员"],
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进货进行需求审核", "对销售进行利润审核"],
                'status|1': [1, 2],
               
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
//风控经理
Mock.mock('localhost:8080/risk', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'character|1': ["风控经理"],
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进货进行需求审核", "对销售进行利润审核"],
                'status|1': [1, 2],
               
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
//管理员
Mock.mock('localhost:8080/admin', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|20-40": [{
                'account|100000-999999': 1,
                'id|+1': 1,
                'name': "@cname",
                'character|1': ["管理员"],
                'remark|5-20': '@cword',
                'reason|1': ["需要进系统录入进件补充资料", "对进货进行需求审核", "对销售进行利润审核"],
                'status|1': [1, 2],
               
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
//产品管理--全部产品   
Mock.mock('localhost:8080/productList', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'type|1': ["汽车消费","房产消费","抵押贷款"],
                'name|1':["巴贝拉贷款","麦穗金融","日借款","爱猫借贷","樱花分期","小熊金融","借乐花","星星钱袋"],
                'limit|1': [100,200,300],
                'rate|1':[4.1,4.3,3.8,3.9,5,3] ,
                'number':Mock.Random.integer(30,200),
                'total': Mock.Random.integer(10000000,500000000),
                'average': Mock.Random.integer(10000000,250000000),
                'status|1':[1,2],
                'highest|1':[36,60,24,360],
                'date':Mock.Random.date()
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
//产品管理--汽车消费 
Mock.mock('localhost:8080/carConsumption', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'type|1': ["汽车消费"],
                'name|1':["巴贝拉贷款","麦穗金融","日借款","爱猫借贷","樱花分期","小熊金融","借乐花","星星钱袋"],
                'limit|1': [100,200,300],
                'rate|1':[4.1,4.3,3.8,3.9,5,3] ,
                'number':Mock.Random.integer(30,200),
                'total': Mock.Random.integer(10000000,500000000),
                'average': Mock.Random.integer(10000000,250000000),
                'status|1':[1,2],
                'highest|1':[36,60,24,360],
                'date':Mock.Random.date()
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
//产品管理--房产消费 
Mock.mock('localhost:8080/estate', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'type|1': ["房产消费"],
                'name|1':["巴贝拉贷款","麦穗金融","日借款","爱猫借贷","樱花分期","小熊金融","借乐花","星星钱袋"],
                'limit|1': [100,200,300],
                'rate|1':[4.1,4.3,3.8,3.9,5,3] ,
                'number':Mock.Random.integer(30,200),
                'total': Mock.Random.integer(10000000,500000000),
                'average': Mock.Random.integer(10000000,250000000),
                'status|1':[1,2],
                'highest|1':[36,60,24,360],
                'date':Mock.Random.date()
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})
//产品管理--房产消费 
Mock.mock('localhost:8080/mortgage', 'get', () => {
    // const { password, username } = JSON.parse(req.body)
    return {
        code: 200,
        success: true,
        message: "成功",
        data: Mock.mock({
            "list|8-20": [{
                'id|+1': 10000,
                'type|1': ["抵押贷款"],
                'name|1':["巴贝拉贷款","麦穗金融","日借款","爱猫借贷","樱花分期","小熊金融","借乐花","星星钱袋"],
                'limit|1': [100,200,300],
                'rate|1':[4.1,4.3,3.8,3.9,5,3] ,
                'number':Mock.Random.integer(30,200),
                'total': Mock.Random.integer(10000000,500000000),
                'average': Mock.Random.integer(10000000,250000000),
                'status|1':[1,2],
                'highest|1':[36,60,24,360],
                'date':Mock.Random.date()
            }],
            "total|1":[10,20,30,40,50]
        })
    }
})

