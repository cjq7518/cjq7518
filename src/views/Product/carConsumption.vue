<template>
  <div>
    <el-breadcrumb separator="/" class="mt">
      <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row :gutter="24" class="mt">
        <el-col :span="6">
          <el-input placeholder="产品名称"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="利率"></el-input>
        </el-col>
        <el-col :span="6">
          <div class="block">
            <el-date-picker
              v-model="dateRange"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              style="width: 100%"
            >
            </el-date-picker>
          </div>
        </el-col>
        <el-col :span="6">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">重置</el-button>
          <span
            class="el-dropdown-link"
            v-if="show"
            style="color: #409eff"
            @click="open"
          >
            展开<i class="el-icon-arrow-down"></i>
          </span>
          <span
            class="el-dropdown-link"
            v-else
            style="color: #409eff"
            @click="open"
          >
            收起<i class="el-icon-arrow-up"></i>
          </span>
        </el-col>
      </el-row>
      <el-row :gutter="24" v-show="advanced">
        <el-col :span="6">
          <el-input placeholder="产品类别"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="最高分期数"></el-input>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="状态"></el-input>
        </el-col>
      </el-row>
    </el-card>
    <el-card>
      <el-table
        :data="list"
        style="width: 100%"
        @selection-change="handleCommand"
      >
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column prop="name" label="账户名称"> </el-table-column>
        <el-table-column prop="type" label="产品类别"> </el-table-column>
        <el-table-column prop="rate" label="利率"> </el-table-column>
        <el-table-column prop="date" label="开放日期"> </el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <div class="tag-group">
              <el-tag
                :type="scope.row.status == 1 ? 'success' : 'danger'"
                effect="dark"
              >
                {{ scope.row.status == 1 ? "已启用" : "已禁用" }}
              </el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="highest" label="最高分期数(月)">
        </el-table-column>
        <el-table-column prop="number" label="申请客户数量"> </el-table-column>
        <el-table-column prop="total" label="累计签约金额"> </el-table-column>
        <el-table-column prop="average" label="件均"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" v-if="scope.row.status==1">停用</el-button>
            <el-button size="mini" type="danger" v-else>启用</el-button>
            <el-button size="mini" type="primary">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import breadCrumb from "@/mixin/breadCrumb.js";
import { get } from "@/utils/http.js";
export default {
  mixins: [breadCrumb],
  data() {
    return {
      dateRage: "",
      show: true,
      advanced: false,
      list: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    open() {
      this.advanced = !this.advanced;
      this.show = !this.show;
    },
    getList() {
      get("/carConsumption").then((res) => {
        this.list = res.data.list;
      });
    },
  },
};
</script>

<style lang="less" scoped>
</style>