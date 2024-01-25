<template>
  <!-- 象形柱形图 -->
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
  name: "HmEchartsPictographicColumn",
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
            text: "ECharts 象形柱形图",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "none",
            },
          },
          dataset: {
            dimensions: ["name", "value"],
          },
          label: {
            show: true,
            position: "top",
            color: "#000000",
          },
          xAxis: {
            type: "category",
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
              color: "#6495ED",
            },
          },
          yAxis: {
            splitLine: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { show: false },
          },
          color: ["#6495ED"],
          series: [
            {
              type: "pictorialBar",
              barCategoryGap: "-130%",
              // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
              symbol:
                "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
              itemStyle: {
                opacity: 0.5,
              },
              emphasis: {
                itemStyle: {
                  opacity: 1,
                },
              },
              //data: [123, 60, 25, 18, 12, 9, 2, 1],
              z: 10,
            },
            {
              name: "glyph",
              //type: "pictorialBar",
              barGap: "-100%",
              symbolPosition: "end",
              symbolSize: 50,
              symbolOffset: [0, "-120%"],
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
          { name: "苹果", value: 8187 },
          { name: "三星", value: 7738 },
          { name: "华为", value: 8904 },
          { name: "oppo", value: 7704 },
          { name: "vivo", value: 6850 },
          { name: "小米60", value: 6399 },
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