import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component:()=>import("../views/Layout"),
    redirect:"/index",
    children:[
      {
        path:"/index",
        name:"Index",
        component:()=>import("../views/Index/Index.vue")
      },
      {
        path:"/account/all",
        name:"All",
        component:()=>import("../views/Account/All.vue"),
        meta:{bread:["账户管理","所有人员"]}
      },
      {
        path:"/account/business",
        name:"Business",
        component:()=>import("../views/Account/Business.vue"),
        meta:{bread:["账户管理","业务人员"]}
      },
      {
        path:"/account/audit",
        name:"Audit",
        component:()=>import("../views/Account/Audit.vue"),
        meta:{bread:["账户管理","审核人员"]}
      },
      {
        path:"/account/risk",
        name:"Risk",
        component:()=>import("../views/Account/Risk.vue"),
        meta:{bread:["账户管理","风控经理"]}
      },
      {
        path:"/account/admin",
        name:"Admin",
        component:()=>import("../views/Account/Admin.vue"),
        meta:{bread:["账户管理","管理员"]}
      },
      {
        path:"/product/all",
        name:"ProductList",
        component:()=>import("../views/Product/All.vue"),
        meta:{bread:["产品管理","全部产品"]}
      },
      {
        path:"/product/carConsumption",
        name:"carConsumption",
        component:()=>import("../views/Product/carConsumption.vue"),
        meta:{bread:["产品管理","汽车消费"]}
      },
      {
        path:"/product/estate",
        name:"estate",
        component:()=>import("../views/Product/estate.vue"),
        meta:{bread:["产品管理","房产消费"]}
      },
      {
        path:"/product/mortgage",
        name:"mortgage",
        component:()=>import("../views/Product/mortgage.vue"),
        meta:{bread:["产品管理","抵押贷款"]}
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component:()=>import("../views/Login")
  }
]

const router = new VueRouter({
  routes
})

export default router
