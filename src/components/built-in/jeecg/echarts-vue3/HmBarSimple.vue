<template>
  <!-- 基础柱状图 -->
  <ECharts ref="chart" :option="cOption" />
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmBarSimple",
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
            text: "ECharts 基础折线图",
          },
          tooltip: {},
          xAxis: {
            type: "category",
          },
          yAxis: {},
          series: [
            {
              type: "bar",
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
        return {
          dimensions: ["product", "sales"],
          source: [
            { product: "衬衫", sales: 5 },
            { product: "羊毛衫", sales: 20 },
            { product: "雪纺衫", sales: 36 },
            { product: "裤子", sales: 10 },
            { product: "高跟鞋", sales: 10 },
            { product: "袜子", sales: 20 },
          ],
        };
      },
    },
  },
  data() {
    return {
      cOption: {},
    };
  },
  watch: {
    option(value) {
      this.cOption = value;
      this.cOption.dataset = this.data;
    },
    data(value) {
      this.cOption.dataset = value;
    },
  },
  mounted() {
    this.cOption = this.option;
    this.cOption.dataset = this.data;
    let self = this;
    this.$refs.chart.inst.on("click", function (params) {
      self.onClick(params);
    });
  },
  methods: {
    onClick(params) {
      this.$emit("onClick", params);
    },
  },
};
</script>