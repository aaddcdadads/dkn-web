<template>
  <!-- 多环饼图 -->
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
  name: "HmEchartsRotatingChart",
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
            text: "ECharts 多环饼图",
          },
          dataset: {
            dimensions: ["product", "sales"],
          },

          angleAxis: {
            show: false,
          },

          radiusAxis: {
            type: "category",
            //data: ["周一", "周二", "周三", "周四"],
            z: 90,
            axisTick: {
              //x轴刻度线
              show: false,
            },
            axisLine: {
              //x轴刻度线
              show: false,
            },
          },

          polar: {},
          series: [
            {
              type: "bar",

              coordinateSystem: "polar",
              emphasis: {
                focus: "series",
              },
              barWidth: 30,
              itemStyle: {
                normal: {
                  //这里是重点
                  color: "#00FFFF",
                },
              },
            },
            {
              type: "bar",
              data: [100],
              coordinateSystem: "polar",
              emphasis: {
                focus: "series",
              },
              barWidth: 1,
              itemStyle: {
                normal: {
                  //这里是重点
                  color: "RGBA(0,186,255,0)",
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
          { product: "小米", sales: 40 },
          { product: "vivo", sales: 50 },
          { product: "oppo", sales: 45 },
          { product: "华为", sales: 75 },
          { product: "三星", sales: 60 },
          { product: "苹果", sales: 90 },
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

