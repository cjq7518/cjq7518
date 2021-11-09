<template>
  <div>
    <el-container>
      <el-aside style="width:200px">
        <nav-left/>
      </el-aside>
      <el-container>
        <el-header>
          <headers/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Headers from"@/components/Headers.vue"
import NavLeft from '../components/NavLeft.vue';
export default {
    components:{
        Headers:Headers,
        NavLeft:NavLeft
    }
};
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #001529;
  color: #333;
  line-height: 200px;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 72vh;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>