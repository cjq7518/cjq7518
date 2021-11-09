<template>
<div>
  <div class="head">
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        欢迎您，{{ nickname }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">个人中心</el-dropdown-item>
        <el-dropdown-item command="b">修改密码</el-dropdown-item>
        <el-dropdown-item command="c">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  <p class="data">今天是你在蚂蚁的第
    <span class="tip">{{days}}</span>天
  </p>
  <div class="clear"></div>
</div>

</template>

<script>
import{get} from "../utils/http"
import {removeToken} from "../utils/auth"
export default {
  data() {
    return {
      nickname: sessionStorage.getItem("nickname"),
      date:""
    };
  },
  methods: {
    handleCommand(command) {
      if(command==="c"){
        removeToken(),
        this.$router.push("./login")
      }
    },
  },
  created(){
    get('/in').then((res)=>{
      this.date=res.time

    })
  },
  computed:{
    days(){
      let target=new Date(this.date)
      let now=new Date()
      let gap=now-target
      return Math.floor(gap/1000/60/60/24)
    }
  }
};
</script>

<style lang="less" scoped>
.head {
  line-height: 60px;
  float: right;
}
.data{
   float: right;
   margin-right: 20px;
   line-height: 60px;
   .tip{
     font-size: 24px;
     color: #40a9ff;
     line-height: 60px;
   }
}
</style>