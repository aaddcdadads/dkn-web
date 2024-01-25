<template>
  <!-- 堆叠面积图 -->
  <ECharts ref="chart" :option="coption" @setOption="setOption" />
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmAreaStack",
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
            text: "堆叠区域图",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985",
              },
            },
          },
          legend: {
            data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              name: "邮件营销",
              type: "line",
              stack: "总量",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "联盟广告",
              type: "line",
              stack: "总量",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "视频广告",
              type: "line",
              stack: "总量",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: "直接访问",
              type: "line",
              stack: "总量",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: "搜索引擎",
              type: "line",
              stack: "总量",
              label: {
                show: true,
                position: "top",
              },
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320],
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