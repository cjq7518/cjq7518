<template>
  <div>
    <el-breadcrumb separator="/" class="mt">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row>
        <el-col :span="8">
          <el-input placeholder="手机号、姓名、角色类型">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="8" :offset="8" style="text-align: right">
          <el-button type="primary" @click="add">新建角色</el-button>
          <el-button :disabled="!selection.length" @click="operate('启动')">启动</el-button>
          <el-button :disabled="!selection.length" @click="operate('冻结')">冻结</el-button>
          <el-button :disabled="!selection.length" @click="operate('删除')">删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table :data="list" style="width: 100%" @selection-change="handleCommand">
        <el-table-column type="selection"> </el-table-column>
        <el-table-column type="index" width="50" label="序号"></el-table-column>
        <el-table-column prop="account" label="账户"> </el-table-column>
        <el-table-column prop="name" label="用户名"> </el-table-column>
        <el-table-column prop="character" label="角色"> </el-table-column>
        <el-table-column prop="remark" label="备注"> </el-table-column>
        <el-table-column prop="reason" label="创建原因"> </el-table-column>
        <el-table-column prop="status" label="状态">
            <template slot-scope="scope">
             {{scope.row.status==1?"已启用":"未启用"}}
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
             <el-button size="mini" @click="edit(scope.row)">编辑</el-button>
             <el-button size="mini" type="danger" >删除</el-button>
             <el-button size="mini" >{{scope.row.status==1?"禁用":"启用"}}</el-button>
            </template>
        </el-table-column>
      </el-table>
    </el-card>
    <char-model :visible="dialogVisible" @close="close"></char-model>
  </div>
</template>

<script>
import breadCrumb from "@/mixin/breadCrumb.js";
import {get} from "@/utils/http.js"
import charModel from './char-Model.vue';
import{mapMutations}from "vuex"


export default {
  components: { charModel },
  mixins: [breadCrumb],
  data() {
    return {
      list: [],
      selection:[],
      accountList:[],
      dialogVisible:false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      get("/business").then((res) => {
        this.list = res.data.list;
      });
    },
    handleCommand(selection){
        this.selection=selection
        this.accountList=selection.map(item=>item.account)
    },
    operate(type){ 
          this.$notify({
          title: '操作提示',
          message: JSON.stringify(this.accountList)+type+"成功",
          type: 'success'
        });
    },
    add(){
      this.saveData({})
      this.dialogVisible=true
    },
    close(){
      this.dialogVisible=false
    },
    ...mapMutations(["saveData"]),
    edit(rowData){
      this.dialogVisible=true
      this.saveData(rowData)
    }
  },
};
</script>

<style lang="less" scoped>
</style>