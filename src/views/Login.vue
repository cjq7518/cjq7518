<template>
  <div>
    <div>
      <el-card class="wrap">
        <div slot="header">
          <h2 class="title">蚂蚁金融后台管理系统</h2>
        </div>
        <div>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style=width:100% @click="login">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {post} from "../utils/http.js"
import {setToken} from "../utils/auth"
export default {
  data() {
    return {
      ruleForm: {
        username:"",
        password:"",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, message: "长度大于5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度大于6个字符", trigger: "blur" },
          {pattern:/[a-z]+\d+/,message:"密码需要包含数字和字母",trigger:"blur"}
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs["ruleForm"].validate((valid) => {
        if (valid){
          post("/login",this.ruleForm
          ).then((res)=>{
              if(res.code==200){
                  setToken(res.token)
                  this.$router.push("/")
                  sessionStorage.setItem("nickname",res.nickname)
              }
          }).catch((error)=>{console.log(error)})
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.wrap {
  width: 500px;
  margin: auto;
  margin-top: 100px;
  div {
    .title {
      text-align: center;
    }
  }
}
</style>