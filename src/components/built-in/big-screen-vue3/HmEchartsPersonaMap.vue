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
  name: "HmEchartsPersonaMap",
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
          dataset: {
            dimensions: ["name", "x", "y", "symbol"],
          },
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: "quinticInOut",
          series: [
            {
              type: "graph",
              layout: "none",
              symbolSize: 50,
              roam: true,
              label: {
                show: true,
              },
              edgeSymbol: ["circle", "circle"],
              edgeSymbolSize: [4, 4],
              edgeLabel: {
                fontSize: 20,
              },
              data: [
                {
                  name: "第三方服务",
                  x: 300,
                  y: 200,
                  symbol: "rect",
                  symbolSize: [65, 20],
                },
                {
                  name: "第三方服务 ",
                  x: 300,
                  y: 300,
                  symbol: "rect",
                  symbolSize: [65, 20],
                },
                {
                  name: " 第三方服务",
                  x: 300,
                  y: 350,
                  symbol: "rect",
                  symbolSize: [65, 20],
                },
                {
                  name: "1",
                  x: 400,
                  y: 250,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/ren.png",
                  label: {
                    show: false,
                  },
                },
                {
                  name: "2",
                  x: 420,
                  y: 350,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/ren.png",
                  label: {
                    show: false,
                  },
                },
                {
                  name: "3",
                  x: 450,
                  y: 300,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/ren.png",
                  label: {
                    show: false,
                  },
                },
                {
                  name: "交互服务",
                  x: 500,
                  y: 200,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/yun.png",
                  label: {
                    position: "bottom",
                  },
                },
                {
                  name: "第二方服务",
                  x: 500,
                  y: 250,
                  symbol: "rect",
                  symbolSize: [65, 20],
                },
                {
                  name: "5",
                  x: 530,
                  y: 280,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/ren.png",
                  label: {
                    show: false,
                  },
                },
                {
                  name: "6",
                  x: 520,
                  y: 350,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/ren.png",
                  label: {
                    show: false,
                  },
                },
                {
                  name: "7",
                  x: 570,
                  y: 300,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/ren.png",
                  label: {
                    show: false,
                  },
                },
                {
                  name: "SQL",
                  x: 480,
                  y: 370,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/sql.png",
                  label: {
                    position: "bottom",
                  },
                },
                {
                  name: "第二方服务 ",
                  x: 630,
                  y: 220,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/sql.png",
                  label: {
                    position: "bottom",
                  },
                },
                {
                  name: "MySQL",
                  x: 630,
                  y: 300,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/sql.png",
                  label: {
                    position: "bottom",
                  },
                },
                {
                  name: "Crches",
                  x: 600,
                  y: 370,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/sql.png",
                  label: {
                    position: "bottom",
                  },
                },
                {
                  name: "交互服务 ",
                  x: 600,
                  y: 330,
                  symbol:
                    "image://src/components/built-in/big-screen-vue3/img/icon/yun.png",
                  label: {
                    position: "bottom",
                  },
                },
              ],
              links: [
                {
                  source: "交互服务 ",
                  target: "6",
                },
                {
                  source: "Crches",
                  target: "6",
                },
                {
                  source: "MySQL",
                  target: "7",
                },
                {
                  source: "第二方服务 ",
                  target: "5",
                },
                {
                  source: "第二方服务",
                  target: "5",
                },
                {
                  source: "SQL",
                  target: "2",
                },
                {
                  source: "3",
                  target: "5",
                },
                {
                  source: "3",
                  target: "7",
                },
                {
                  source: "3",
                  target: "6",
                },
                {
                  source: "第二方服务",
                  target: "1",
                },
                {
                  source: "第三方服务",
                  target: "1",
                },
                {
                  source: "第三方服务 ",
                  target: "1",
                },
                {
                  source: " 第三方服务",
                  target: "1",
                },
                {
                  source: "1",
                  target: "3",
                },
                {
                  source: "2",
                  target: "3",
                },
                {
                  source: "1",
                  target: "交互服务",
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
        return [];
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

