<template>
  <!-- 主题河流图 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { getAction } from "/@/request/http";
import { createComponent } from "echarts-for-vue";
var test = [
  ["2015/11/08", 10, "华为"],
  ["2015/11/09", 15, "华为"],
  ["2015/11/10", 35, "华为"],
  ["2015/11/11", 38, "华为"],
  ["2015/11/12", 22, "华为"],
  ["2015/11/13", 16, "华为"],
  ["2015/11/14", 7, "华为"],
  ["2015/11/15", 2, "华为"],
  ["2015/11/16", 17, "华为"],
  ["2015/11/17", 33, "华为"],
  ["2015/11/18", 40, "华为"],
  ["2015/11/19", 32, "华为"],
  ["2015/11/20", 26, "华为"],
  ["2015/11/21", 35, "华为"],
  ["2015/11/22", 40, "华为"],
  ["2015/11/23", 32, "华为"],
  ["2015/11/24", 26, "华为"],
  ["2015/11/25", 22, "华为"],
  ["2015/11/26", 16, "华为"],
  ["2015/11/27", 22, "华为"],
  ["2015/11/28", 10, "华为"],
  ["2015/11/08", 35, "联想"],
  ["2015/11/09", 36, "联想"],
  ["2015/11/10", 37, "联想"],
  ["2015/11/11", 22, "联想"],
  ["2015/11/12", 24, "联想"],
  ["2015/11/13", 26, "联想"],
  ["2015/11/14", 34, "联想"],
  ["2015/11/15", 21, "联想"],
  ["2015/11/16", 18, "联想"],
  ["2015/11/17", 45, "联想"],
  ["2015/11/18", 32, "联想"],
  ["2015/11/19", 35, "联想"],
  ["2015/11/20", 30, "联想"],
  ["2015/11/21", 28, "联想"],
  ["2015/11/22", 27, "联想"],
  ["2015/11/23", 26, "联想"],
  ["2015/11/24", 15, "联想"],
  ["2015/11/25", 30, "联想"],
  ["2015/11/26", 35, "联想"],
  ["2015/11/27", 42, "联想"],
  ["2015/11/28", 42, "联想"],
  ["2015/11/08", 21, "惠普"],
  ["2015/11/09", 25, "惠普"],
  ["2015/11/10", 27, "惠普"],
  ["2015/11/11", 23, "惠普"],
  ["2015/11/12", 24, "惠普"],
  ["2015/11/13", 21, "惠普"],
  ["2015/11/14", 35, "惠普"],
  ["2015/11/15", 39, "惠普"],
  ["2015/11/16", 40, "惠普"],
  ["2015/11/17", 36, "惠普"],
  ["2015/11/18", 33, "惠普"],
  ["2015/11/19", 43, "惠普"],
  ["2015/11/20", 40, "惠普"],
  ["2015/11/21", 34, "惠普"],
  ["2015/11/22", 28, "惠普"],
  ["2015/11/23", 26, "惠普"],
  ["2015/11/24", 37, "惠普"],
  ["2015/11/25", 41, "惠普"],
  ["2015/11/26", 46, "惠普"],
  ["2015/11/27", 47, "惠普"],
  ["2015/11/28", 41, "惠普"],
  ["2015/11/08", 10, "微星"],
  ["2015/11/09", 15, "微星"],
  ["2015/11/10", 35, "微星"],
  ["2015/11/11", 38, "微星"],
  ["2015/11/12", 22, "微星"],
  ["2015/11/13", 16, "微星"],
  ["2015/11/14", 7, "微星"],
  ["2015/11/15", 2, "微星"],
  ["2015/11/16", 17, "微星"],
  ["2015/11/17", 33, "微星"],
  ["2015/11/18", 40, "微星"],
  ["2015/11/19", 32, "微星"],
  ["2015/11/20", 26, "微星"],
  ["2015/11/21", 35, "微星"],
  ["2015/11/22", 40, "微星"],
  ["2015/11/23", 32, "微星"],
  ["2015/11/24", 26, "微星"],
  ["2015/11/25", 22, "微星"],
  ["2015/11/26", 16, "微星"],
  ["2015/11/27", 22, "微星"],
  ["2015/11/28", 10, "微星"],
  ["2015/11/08", 10, "宏基"],
  ["2015/11/09", 15, "宏基"],
  ["2015/11/10", 35, "宏基"],
  ["2015/11/11", 38, "宏基"],
  ["2015/11/12", 22, "宏基"],
  ["2015/11/13", 16, "宏基"],
  ["2015/11/14", 7, "宏基"],
  ["2015/11/15", 2, "宏基"],
  ["2015/11/16", 17, "宏基"],
  ["2015/11/17", 33, "宏基"],
  ["2015/11/18", 40, "宏基"],
  ["2015/11/19", 32, "宏基"],
  ["2015/11/20", 26, "宏基"],
  ["2015/11/21", 35, "宏基"],
  ["2015/11/22", 4, "宏基"],
  ["2015/11/23", 32, "宏基"],
  ["2015/11/24", 26, "宏基"],
  ["2015/11/25", 22, "宏基"],
  ["2015/11/26", 16, "宏基"],
  ["2015/11/27", 22, "宏基"],
  ["2015/11/28", 10, "宏基"],
  ["2015/11/08", 10, "戴尔"],
  ["2015/11/09", 15, "戴尔"],
  ["2015/11/10", 35, "戴尔"],
  ["2015/11/11", 38, "戴尔"],
  ["2015/11/12", 22, "戴尔"],
  ["2015/11/13", 16, "戴尔"],
  ["2015/11/14", 7, "戴尔"],
  ["2015/11/15", 2, "戴尔"],
  ["2015/11/16", 17, "戴尔"],
  ["2015/11/17", 33, "戴尔"],
  ["2015/11/18", 4, "戴尔"],
  ["2015/11/19", 32, "戴尔"],
  ["2015/11/20", 26, "戴尔"],
  ["2015/11/21", 35, "戴尔"],
  ["2015/11/22", 40, "戴尔"],
  ["2015/11/23", 32, "戴尔"],
  ["2015/11/24", 26, "戴尔"],
  ["2015/11/25", 22, "戴尔"],
  ["2015/11/26", 16, "戴尔"],
  ["2015/11/27", 22, "戴尔"],
  ["2015/11/28", 10, "戴尔"],
];
export default {
  name: "HmEchartsRiver",
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
            text: "ECharts 主题河流图",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "line",
              lineStyle: {
                color: "rgba(0,0,0,0.2)",
                width: 1,
                type: "solid",
              },
            },
          },

          legend: {
            bottom: "0%",
            data: ["华为", "联想", "惠普", "微星", "宏基", "戴尔"],
          },

          singleAxis: {
            type: "time",
            axisPointer: {
              animation: true,
              label: {
                show: true,
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "dashed",
                opacity: 0.2,
              },
            },
          },

          series: [
            {
              type: "themeRiver",
              emphasis: {
                itemStyle: {
                  shadowBlur: 20,
                  shadowColor: "rgba(0, 0, 0, 0.8)",
                },
              },
              data: test,
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