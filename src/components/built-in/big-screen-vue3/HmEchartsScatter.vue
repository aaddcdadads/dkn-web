<template>
  <!-- 关系图 -->
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
  name: "HmEchartsScatter",
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
            text: "ECharts 关系图",
          },
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: "quinticInOut",
          series: [
            {
              type: "graph",
              layout: "none",
              roam: false,

              label: {
                show: true,
              },
              edgeSymbol: ["circle", "arrow"],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                fontSize: 20,
              },
              data: [
                {
                  name: "series",
                  x: 650,
                  y: 280,
                  symbolSize: 150,
                  itemStyle: {
                    normal: {
                      color: "#1E90FF",
                    },
                  },
                  label: {
                    fontSize: 40,
                  },
                },
                {
                  name: "yAxis",
                  x: 654,
                  y: 283,
                  symbolSize: 55,
                  itemStyle: {
                    normal: {
                      color: "#1E90FF",
                    },
                  },
                },
                {
                  name: "pie",
                  x: 655,
                  y: 277,
                  symbolSize: 45,
                  itemStyle: {
                    normal: {
                      color: "#87CEEB",
                    },
                  },
                },
                {
                  name: "textStyle",
                  x: 646,
                  y: 276,
                  symbolSize: 50,
                  itemStyle: {
                    normal: {
                      color: "#1E90FF",
                    },
                  },
                },
                {
                  name: "normal",
                  x: 643,
                  y: 277,
                  symbolSize: 70,
                  itemStyle: {
                    normal: {
                      color: "#8470FF",
                    },
                  },
                },
                {
                  name: "label",
                  x: 645,
                  y: 279,
                  symbolSize: 45,
                  itemStyle: {
                    normal: {
                      color: "#AFEEEE",
                    },
                  },
                },
                {
                  name: "line",
                  x: 645,
                  y: 283,
                  symbolSize: 80,
                  itemStyle: {
                    normal: {
                      color: "#AFEEEE",
                    },
                  },
                },
                {
                  name: "data",
                  x: 652,
                  y: 285,
                  symbolSize: 65,
                  itemStyle: {
                    normal: {
                      color: "#778899",
                    },
                  },
                },

                {
                  x: 645,
                  y: 300,
                  symbolSize: 50,
                  symbolSize: 50,
                  itemStyle: {
                    normal: {
                      color: "RGBA(0,186,255,0)", //柱图透明色
                    },
                  },
                },
                {
                  x: 650,
                  y: 270,
                  symbolSize: 50,
                  itemStyle: {
                    normal: {
                      color: "RGBA(0,186,255,0)",
                    },
                  },
                },
              ],

              lineStyle: {
                opacity: 0.9,
                width: 2,
                curveness: 0,
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
          { value: 1048, name: "搜索引擎" },
          { value: 735, name: "直接访问" },
          { value: 580, name: "邮件营销" },
          { value: 484, name: "Android" },
          { value: 300, name: "视频广告" },
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