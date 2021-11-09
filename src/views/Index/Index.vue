<template>
  <div>
    <el-row :gutter="24" style="margin-bottom: 20px" class="title">
      <el-col :span="6">
        <el-card class="in" shadow="always">
          <div style="float: left">
            <p>本月销售(件)</p>
            <p style="font-weight: bold">6588</p>
            <p>
              +20.12%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-tickets ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="out" shadow="always">
          <div style="float: left">
            <p>本月销售额(元)</p>
            <p style="font-weight: bold">121000000</p>
            <p>
              +1.25%
              <span style="font-size: 12px">与上月同比</span>
            </p>
          </div>
          <i class="el-icon-money ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="allin" shadow="always">
          <div style="float: left">
            <p>累计销售(件)</p>
            <p style="font-weight: bold">128700</p>
            <p>
              +11.48%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-date ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="allout" shadow="always">
          <div style="float: left">
            <p>累计销售额(元)</p>
            <p style="font-weight: bold">923380079</p>
            <p>
              +2.06%
              <span style="font-size: 12px">与去年同比</span>
            </p>
          </div>
          <i class="el-icon-coin ico"></i>
          <div class="clear"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24" style="margin-bottom: 10px">
      <el-col :span="18">
        <el-card>
          <div slot="header" style="line-height: 50px">
            <span>进件统计分析</span>
          </div>
          <div ref="analysis" style="height: 240px"></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div slot="header" style="line-height: 50px">
            <span>售出产品占比</span>
          </div>
          <div ref="acount" style="height: 240px"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card style="height:700px">
          <div class="block">
            <el-timeline>
              <el-timeline-item timestamp="2018/4/12" placement="top">
                <el-card>
                  <h4>提交订单数据</h4>
                  <p>王小虎 提交于 2018/4/12 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/3" placement="top">
                <el-card>
                  <h4>提交订单数据</h4>
                  <p>王小虎 提交于 2018/4/3 20:46</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item timestamp="2018/4/2" placement="top">
                <el-card>
                  <h4>提交订单数据</h4>
                  <p>王小虎 提交于 2018/4/2 20:46</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card style="height:700px">
          <el-calendar v-model="value"> </el-calendar>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawChart(), this.drawPie();
  },
  methods: {
    drawChart() {
      var myChart = this.$echarts.init(this.$refs["analysis"]);
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["21-01", "21-02", "21-03", "21-04", "21-05", "21-06", "21-07"],
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#4f88ff", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "white", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
          },
        ],
      });
    },
    drawPie() {
      var myPie = this.$echarts.init(this.$refs["acount"]);
      myPie.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a}<br/>{b}:{d}%",
        },
        series: [
          {
            name: "数据来源",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "京东" },
              { value: 735, name: "天猫" },
              { value: 580, name: "淘宝" },
              { value: 484, name: "苏宁" },
              { value: 300, name: "拼多多" },
            ],
          },
        ],
      });
    },
  },
  data() {
      return {
        value: new Date()
      }
    }
};
</script>

<style lang="less" scoped>
.ico {
  float: right;
  font-size: 90px;
  color: rgba(255, 255, 255, 0.3);
}
.title p {
  line-height: 30px;
  font-size: 16px;
  color: #fff;
}
.in {
  background: #4f88ff;
}
.allin {
  background: #5050ff;
}
.out {
  background: #f26075;
}
.allout {
  background: #f49b3b;
}
</style>