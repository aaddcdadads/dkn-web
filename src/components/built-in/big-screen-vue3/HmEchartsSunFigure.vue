<template>
  <!-- 旭日图 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { getAction } from "/@/request/http";
import { createComponent } from "echarts-for-vue";
var data = [
  {
    value: 8,
    children: [
      {
        value: 4,
        children: [
          {
            value: 2,
          },
          {
            value: 1,
          },
          {
            value: 1,
          },
          {
            value: 0.5,
          },
        ],
      },
      {
        value: 2,
      },
    ],
  },
  {
    value: 4,
    children: [
      {
        children: [
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    value: 4,
    children: [
      {
        children: [
          {
            value: 2,
          },
        ],
      },
    ],
  },
  {
    value: 3,
    children: [
      {
        children: [
          {
            value: 1,
          },
        ],
      },
    ],
  },
];
export default {
  name: "HmEchartsSunFigure",
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
            text: "ECharts 旭日图",
          },
          dataset: {
            dimensions: ["value"],
          },
          silent: true,
          series: [
            {
              radius: ["15%", "80%"],
              type: "sunburst",
              sort: null,
              emphasis: {
                focus: "ancestor",
              },
              data: data,
              label: {
                color: "#000",
                textBorderColor: "#fff",
                textBorderWidth: 2,
                formatter: function (param) {
                  var depth = param.treePathInfo.length;
                  if (depth === 2) {
                    return "radial";
                  } else if (depth === 3) {
                    return "tangential";
                  } else if (depth === 4) {
                    return "0";
                  }
                },
              },
              levels: [
                {},
                {
                  itemStyle: {
                    color: "#CD4949",
                  },
                  label: {
                    rotate: "radial",
                  },
                },
                {
                  itemStyle: {
                    color: "#F47251",
                  },
                  label: {
                    rotate: "tangential",
                  },
                },
                {
                  itemStyle: {
                    color: "#FFC75F",
                  },
                  label: {
                    rotate: 0,
                  },
                },
              ],
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