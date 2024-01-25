<template>
  <!-- 漏斗图 -->
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
  name: "HmEchartsFunnelChart",
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
            text: "ECharts 漏斗图",
          },
          color: ["#2fe3d8", "#3324fb", "#1754c5", "#3e1b8b", "#05377c"],
          tooltip: {
            trigger: "axis",
          },
          dataset: {
            dimensions: ["value", "name"],
          },

          legend: {
            bottom: "4%",
            data: ["展现", "点击", "访问", "咨询", "订单"],
          },
          series: [
            {
              name: "漏斗图",
              type: "funnel",
              left: "10%",
              top: 60,
              //x2: 80,
              bottom: 60,
              width: "80%",
              // height: {totalHeight} - y - y2,
              min: 0,
              max: 100,
              minSize: "0%",
              maxSize: "100%",
              sort: "descending",
              gap: 2,
              label: {
                show: true,
                position: "inside",
              },
              labelLine: {
                length: 10,
                lineStyle: {
                  width: 1,
                  type: "solid",
                },
              },
              itemStyle: {
                borderColor: "#fff",
                borderWidth: 1,
              },

              label: {
                fontSize: 15,
                formatter: "{b}:{d}%",
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
          { value: 50, name: "访问" },
          { value: 30, name: "咨询" },
          { value: 10, name: "订单" },
          { value: 80, name: "点击" },
          { value: 100, name: "展现" },
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