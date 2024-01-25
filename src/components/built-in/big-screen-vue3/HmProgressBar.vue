<template>
  <!-- 多行进度条 -->
  <div class="container">
    <ECharts ref="chart" :option="cOption" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmProgressBar",
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
          dataset: {
            dimensions: ["name", "value", "shadow"],
          },

          xAxis: {
            type: "value",
            splitLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            axisLine: { show: false },
          },

          yAxis: {
            type: "category",
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: {
              color: "black",
              fontSize: 36,
            },
          },

          series: [
            {
              name: "%", //系列名称
              type: "bar",
              barWidth: 19, //柱条的宽度,默认自适应
              label: {
                //图形上的文本标签
                show: true,
                position: "right", //标签的位置
                offset: [0, -30], //标签文字的偏移，此处表示向上偏移40
                formatter: function (value) {
                  console.log(value, "value");
                  return value.data.value + "%";
                },
                color: "bule", //标签字体颜色
                fontSize: 24, //标签字号
              },
              itemStyle: {
                normal: {
                  //柱体圆角
                  barBorderRadius: 15,
                  //渐变颜色
                  color: new echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    0,
                    [
                      {
                        offset: 0,
                        color: "#4e72b8", // 0% 处的颜色
                      },
                      {
                        offset: 0.6,
                        color: "#afdfe4", // 60% 处的颜色
                      },
                    ],
                    false
                  ),
                },
              },
              zlevel: 1, //柱状图所有图形的 zlevel 值,
              //zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
            },
            {
              name: "进度条背景",
              type: "bar",
              barGap: "-100%", //不同系列的柱间距离，为百分比。
              // 在同一坐标系上，此属性会被多个 'bar' 系列共享。
              // 此属性应设置于此坐标系中最后一个 'bar' 系列上才会生效，
              //并且是对此坐标系中所有 'bar' 系列生效。
              barWidth: 19,
              color: "#151B87", //柱条颜色
              itemStyle: {
                normal: {
                  barBorderRadius: 10,
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
      type: Array,
      default: function () {
        return [
          { name: "html", value: 80, shadow: "100" },
          { name: "css", value: 60, shadow: "100" },
          { name: "java", value: 40, shadow: "100" },
          { name: "vue", value: 20, shadow: "100" },
        ];
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
      let dataset = JSON.parse(JSON.stringify(this.cOption.dataset));
      this.cOption = value;
      this.cOption.dataset = dataset;
    },
    data(value) {
      this.cOption.dataset.source = value;
    },
  },
  mounted() {
    this.cOption = this.option;
    if (typeof this.cOption.dataset === "undefined") {
      this.cOption.dataset = {};
    }
    this.cOption.dataset.source = this.data;
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

<style scoped>
.container {
  width: 100%;
  height: 100%;
  height: 1px;
  min-width: 300px;
  min-height: 300px;
}
</style>