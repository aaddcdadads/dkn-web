<template>
  <!-- 基础仪表盘 -->
  <ECharts ref="chart" :option="coption" @setOption="setOption" />
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmGauge",
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
          series: [
            {
              type: "gauge",
              axisLine: {
                lineStyle: {
                  width: 30,
                  color: [
                    [0.3, "#67e0e3"],
                    [0.7, "#37a2da"],
                    [1, "#fd666d"],
                  ],
                },
              },
              pointer: {
                itemStyle: {
                  color: "auto",
                },
              },
              axisTick: {
                distance: -30,
                length: 8,
                lineStyle: {
                  color: "#fff",
                  width: 2,
                },
              },
              splitLine: {
                distance: -30,
                length: 30,
                lineStyle: {
                  color: "#fff",
                  width: 4,
                },
              },
              axisLabel: {
                color: "auto",
                distance: 40,
                fontSize: 20,
              },
              detail: {
                valueAnimation: true,
                formatter: "{value} km/h",
                color: "auto",
              },
              data: [
                {
                  value: 70,
                },
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
    setInterval(function () {
      option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
      myChart.setOption(option, true);
    }, 2000);
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