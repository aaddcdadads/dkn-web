<template>
  <!-- 基础饼图 -->
  <ECharts ref="chart" :option="coption" @setOption="setOption" />
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmBasicBar",
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
          title: {
            text: "某站点用户访问来源",
            subtext: "纯属虚构",
            left: "center",
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: "50%",
              data: [
                { value: 1048, name: "搜索引擎" },
                { value: 735, name: "直接访问" },
                { value: 580, name: "邮件营销" },
                { value: 484, name: "联盟广告" },
                { value: 300, name: "视频广告" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
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