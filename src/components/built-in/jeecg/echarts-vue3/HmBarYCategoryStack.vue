<template>
  <!-- 堆叠条形图 -->
  <ECharts ref="chart" :option="coption" @setOption="setOption" />
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmBarYCategoryStack",
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
            trigger: "axis",
            axisPointer: {
              // Use axis to trigger tooltip
              type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
            },
          },
          legend: {
            data: [
              "Direct",
              "Mail Ad",
              "Affiliate Ad",
              "Video Ad",
              "Search Engine",
            ],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
          },
          yAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          series: [
            {
              name: "Direct",
              type: "bar",
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
              data: [320, 302, 301, 334, 390, 330, 320],
            },
            {
              name: "Mail Ad",
              type: "bar",
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "Affiliate Ad",
              type: "bar",
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "Video Ad",
              type: "bar",
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
              data: [150, 212, 201, 154, 190, 330, 410],
            },
            {
              name: "Search Engine",
              type: "bar",
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
              data: [820, 832, 901, 934, 1290, 1330, 1320],
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