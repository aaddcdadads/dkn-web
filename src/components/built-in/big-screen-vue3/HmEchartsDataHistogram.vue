<template>
  <!-- 数据柱状图 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
    <span class="v">{{ value }}</span>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { getAction } from "/@/request/http";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmEchartsDataHistogram",
  components: {
    ECharts: createComponent({ echarts, h }), // 作为组件使用
  },
  props: {
    /**
     * 值
     */
    value: {
      type: String,
      default: "7362",
    },
    /**
     * 配置项
     */
    option: {
      type: Object,
      default: function () {
        return {
          title: {
            text: "ECharts 数据柱状图",
          },
          dataset: {
            dimensions: ["name", "brand"],
          },

          xAxis: {
            type: "category",
            show: false,
          },

          yAxis: {
            type: "value",
            // data:['1','2','3','4','5','6','7'],
            show: false,
          },
          itemStyle: {
            //通常情况下：
            normal: {
              label: {
                show: true,
                position: "top",
                formatter: 123, //这是关键，在需要的地方加上就行了
              },
            },
          },
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
        return [
          { name: " ", brand: 9000 },
          { name: "2", brand: 9500 },
          { name: "3", brand: 8300 },
          { name: "4", brand: 8500 },
          { name: "5", brand: 9900 },
          { name: "6", brand: 8000 },
          { name: "7", brand: 8000 },
          { name: "8", brand: 8000 },
          { name: "9", brand: 8000 },
          { name: "0", brand: 8000 },
          { name: "11", brand: 8000 },
          { name: "12", brand: 8000 },
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
.v {
  width: 30%;
  color: aqua;
  font-size: 36px;
  float: left;
}
</style>

