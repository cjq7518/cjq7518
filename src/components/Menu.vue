<template>
    <div>   
       <el-submenu v-if="menu.children" :index="menu.url" style="width:200px">
           <template slot="title">
               <i :class="menu.icon"></i>
               <span slot="title">{{menu.name}}</span>
           </template>
           <nav-menu v-for="(item,index) in menu.children" :menu="item" :key="index"></nav-menu>
       </el-submenu>
       <el-menu-item v-else :index="menu.url" style="width:200px">
          <i :class="menu.icon"></i>
          <span slot="title">{{menu.name}}</span>
       </el-menu-item>
    </div>
</template>

<script>
    export default {
        name:"NavMenu",
        props:{
            menu:{
                type:Object,
                required:true
            }
        }
    }
</script>

<style lang="less" scoped>

</style>