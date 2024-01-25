<template>
  <!-- 环形饼图 -->
  <ECharts ref="chart" :option="coption" @setOption="setOption" />
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmPieDoughnut",
  components: {
    ECharts: createComponent({ echarts, h }), // 作为组件使用
  },
  props: {
    /**
     * 属性
     */
    option: {
      type: Object,
      default: function () {
        return {
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "40",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1048, name: "搜索引擎" },
                { value: 735, name: "直接访问" },
                { value: 580, name: "邮件营销" },
                { value: 484, name: "联盟广告" },
                { value: 300, name: "视频广告" },
              ],
            },
          ],
        };
      },
    },
  },
  data() {
    return {
      coption: {},
    };
  },
  watch: {
    option(value) {
      this.coption = value;
    },
  },
  mounted() {
    this.coption = this.option;
    let self = this;
    this.$refs.chart.inst.on("click", function (params) {
      self.onClick(params);
    });
  },
  methods: {
    onClick(params) {
      this.$emit("onClick", params);
    },
    doSomething() {
      this.$refs.chart.inst.getWidth(); // 调用 ECharts 实例的方法
    },
    setOption: function (e) {
      this.$emit("setOption", e);
    },
  },
};
</script>