<template>
  <!-- 图行柱状图 -->
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
  name: "HmEchartsRoundColumnar",
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
            text: "ECharts 图行柱状图",
          },
          dataset: {
            dimensions: ["price", "brand"],
          },

          legend: {
            bottom: "0%",
            data: ["手机品牌"],
          },

          xAxis: {
            type: "category",
          },

          yAxis: {
            type: "value",
            axisLine: {
              show: true,
            },
            axisLabel: {
              formatter: function (value, index) {
                if (value >= 100000000) {
                  return value / 100000000 + "亿";
                } else if (value >= 10000) {
                  return value / 10000 + "万";
                } else {
                  return value;
                }
              },
            },
          },

          series: [
            {
              name: "手机品牌",
              type: "bar",
              showBackground: true,
              backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)",
                barBorderRadius: [15, 15, 15, 15],
              },
              itemStyle: {
                normal: {
                  barBorderRadius: [15, 15, 15, 15],
                  color: new echarts.graphic.LinearGradient(
                    0,
                    1,
                    0,
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
              barWidth: 30, //柱图宽度
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
          { price: "苹果", brand: 9000 },
          { price: "三星", brand: 9500 },
          { price: "华为", brand: 8300 },
          { price: "OPPO", brand: 8500 },
          { price: "vivo", brand: 9900 },
          { price: "小米", brand: 8000 },
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

