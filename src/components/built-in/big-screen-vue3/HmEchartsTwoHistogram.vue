<template>
  <!-- 双向柱形图 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { getAction } from "/@/request/http";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmEchartsTwoHistogram",
  components: {
    ECharts: createComponent({ echarts, h }), // 作为组件使用
  },
  props: {
    /**
     * 配置项
     */
    option: {
      type: Object,
      default: function () {
        return {
          title: {
            text: "ECharts 双向柱形图",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          dataset: {
            dimensions: ["day", "收入", "支出"],
          },
          legend: {
            bottom: "0%",
            data: ["支出", "收入"],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "8%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "value",
              axisLine: {
                show: true,
              },
              axisTick: {
                show: true,
              },
              axisLabel: {
                formatter: function (value, index) {
                  if (value >= 100000000) {
                    return value / 100000000 + "亿";
                  } else if (value >= 10000) {
                    return value / 10000 + "万";
                  } else if (value >= 1000) {
                    return value / 1000 + "k";
                  } else {
                    return value;
                  }
                },
              },
            },
          ],
          yAxis: [
            {
              axisTick: {
                show: false,
              },
              type: "category",
              data: ["企业A", "企业B", "企业C", "企业D", "企业E"],
            },
          ],
          series: [
            {
              name: "收入",
              type: "bar",
              stack: "总量",
              label: {
                show: false,
              },

              itemStyle: {
                normal: {
                  barBorderRadius: [0, 15, 15, 0],
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                      {
                        offset: 0,
                        color: "#4e72b8", // 0% 处的颜色
                      },
                      {
                        offset: 0.6,
                        color: "#afdfe4", // 60% 处的颜色
                      },
                    ],
                    false
                  ),
                },
              },
            },
            {
              name: "支出",
              type: "bar",
              stack: "总量",
              label: {
                show: false,
                position: "left",
              },
              itemStyle: {
                emphasis: {
                  barBorderRadius: [5, 5, 0, 0],
                },
              },
              emphasis: {
                focus: "series",
              },
              itemStyle: {
                normal: {
                  barBorderRadius: [15, 0, 0, 15],
                  color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    1,
                    0,
                    [
                      {
                        offset: 0,
                        color: "#594c6d", // 0% 处的颜色
                      },
                      {
                        offset: 0.6,
                        color: "#4e72b8", // 60% 处的颜色
                      },
                    ],
                    false
                  ),
                },
              },
            },
          ],
        };
      },
    },
    /**
     * 数据项
     */
    data: {
      type: Object,
      default: function () {
        return [
          { day: "企业A", 支出: -18000, 收入: 18000 },
          { day: "企业B", 支出: -16000, 收入: 16000 },
          { day: "企业C", 支出: -14000, 收入: 14000 },
          { day: "企业D", 支出: -12000, 收入: 12000 },
          { day: "企业E", 支出: -10000, 收入: 10000 },
        ];
      },
    },
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "300",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "300",
    },
  },
  data() {
    return {
      cOption: {},
      cWidth: "300px",
      cHeight: "300px",
    };
  },
  watch: {
    option(value) {
      let dataset = JSON.parse(JSON.stringify(this.cOption.dataset));
      this.cOption = value;
      this.cOption.dataset = dataset;
    },
    data: {
      handler: function (value, oldValue) {
        this.cOption.dataset.source = value;
        this.$refs.chart.setOption(this.cOption, true);
        console.log(`setOption:`, this.cOption);
      },
      deep: true,
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value, oldValue) {
        this.getData(this.url, value);
      },
      deep: true,
    },
    width(value) {
      this.cWidth = this.$getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.$getCssUnit(value);
    },
  },
  mounted() {
    this.cWidth = this.$getCssUnit(this.width);
    this.cHeight = this.$getCssUnit(this.height);

    this.cOption = this.option;
    if (typeof this.cOption.dataset === "undefined") {
      this.cOption.dataset = {};
    }
    this.cOption.dataset.source = this.data;
    this.getData();
    let self = this;
    this.$refs.chart.inst.on("click", function (params) {
      self.onClick(params);
    });
  },
  methods: {
    onClick(params) {
      this.$emit("onClick", params);
    },
    getData(url, params) {
      url = url || this.url;
      params = params || this.params;
      if (!url) return;
      getAction(url, params).then((resp) => {
        this.cOption.dataset.source = resp.result.records
          ? resp.result.records
          : resp.result;
        this.$refs.chart.setOption(this.cOption, true);
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}
</style>