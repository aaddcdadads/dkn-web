<template>
  <!-- 嵌套环形图 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { getAction } from "/@/request/http";
import { createComponent } from "echarts-for-vue";

var outer = [
  { value: 1048, name: "百度" },
  { value: 335, name: "直达" },
  { value: 310, name: "邮件营销" },
  { value: 251, name: "谷歌" },
  { value: 234, name: "联盟广告" },
  { value: 135, name: "视频广告" },
  { value: 102, name: "其他" },
];
var inner = [
  { value: 1548, name: "搜索引擎" },
  { value: 775, name: "直达" },
  { value: 679, name: "营销广告" },
];

export default {
  name: "HmEchartsNestedRing",
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
            text: "ECharts 嵌套环形图",
          },
          series: [
            {
              type: "pie",
              selectedMode: "single",
              radius: [0, "30%"],
              label: {
                position: "inner",
                fontSize: 11,
                formatter: "{b|{b}：}{c}\n  {per|{d}%}  ",
                color: "#000",
                rich: {
                  per: {
                    padding: [3, 4],
                  },
                },
              },
              data: inner,
            },

            {
              type: "pie",
              radius: ["45%", "60%"],
              labelLine: {
                length: 30,
              },

              label: {
                formatter: "{b|{b}：}{c}  {per|{d}%}  ",
                rich: {
                  per: {
                    color: "#fff",
                    backgroundColor: "#4C5058",
                    padding: [3, 4],

                    borderRadius: 4,
                  },
                },
              },
              data: outer,
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