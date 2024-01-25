<template>
  <!-- 柱状折线图 -->
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
  name: "HmEchartsColumnLineChart",
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
            text: "ECharts 柱状折线图",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              crossStyle: {
                color: "#999",
              },
            },
          },
          dataset: {
            dimensions: ["day", "代码一", "代码二", "代码三"],
          },
          legend: {
            bottom: "0%",
            data: ["代码一", "代码二", "代码三"],
          },
          xAxis: [
            {
              type: "category",
              data: ["2020-10", "2020-11", "2020-12", "2021-01", "2021-02"],
              axisPointer: {
                type: "shadow",
              },
            },
          ],
          yAxis: [
            {
              type: "value",
              min: 0,
              max: 250,
              interval: 50,
              axisLine: {
                show: true,
              },
              axisTick: {
                show: true,
              },
              axisLabel: {
                formatter: "{value}",
              },
            },
            {
              type: "value",
              min: 0,
              max: 25,
              interval: 5,
              axisLine: {
                show: true,
              },
              axisTick: {
                show: true,
              },
              axisLabel: {
                formatter: "{value}",
              },
            },
          ],
          series: [
            {
              name: "代码一",
              type: "bar",
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: [15, 15, 15, 15],
                },
              },
              smooth: true,
            },
            {
              name: "代码二",
              type: "bar",
              yAxisIndex: 0,
              itemStyle: {
                normal: {
                  barBorderRadius: [15, 15, 15, 15],
                },
              },
              smooth: true,
            },
            {
              name: "代码三",
              type: "line",
              yAxisIndex: 1,
              smooth: true,
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
          { day: "2020-10", 代码一: 120, 代码二: 120, 代码三: 14 },
          { day: "2020-11", 代码一: 140, 代码二: 160, 代码三: 11 },
          { day: "2020-12", 代码一: 160, 代码二: 180, 代码三: 24 },
          { day: "2021-01", 代码一: 200, 代码二: 220, 代码三: 16 },
          { day: "2021-02", 代码一: 240, 代码二: 160, 代码三: 21 },
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