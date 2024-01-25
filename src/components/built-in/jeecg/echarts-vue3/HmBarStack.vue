<template>
  <!-- 堆叠柱状图 -->
  <ECharts ref="chart" :option="coption" @setOption="setOption" />
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";

export default {
  name: "HmBasicBar",
  components: {
    ECharts: createComponent({ echarts, h }), // 作为组件使用
  },
  props: {
    /**
     * 属性
     */
    option: {
      type: Object,
      default: function () {
        return {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
            },
          },
          legend: {
            data: [
              "直接访问",
              "邮件营销",
              "联盟广告",
              "视频广告",
              "搜索引擎",
              "百度",
              "谷歌",
              "必应",
              "其他",
            ],
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              name: "直接访问",
              type: "bar",
              emphasis: {
                focus: "series",
              },
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: "邮件营销",
              type: "bar",
              stack: "广告",
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "联盟广告",
              type: "bar",
              stack: "广告",
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "视频广告",
              type: "bar",
              stack: "广告",
              emphasis: {
                focus: "series",
              },
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: "搜索引擎",
              type: "bar",
              data: [862, 1018, 964, 1026, 1679, 1600, 1570],
              emphasis: {
                focus: "series",
              },
              markLine: {
                lineStyle: {
                  type: "dashed",
                },
                data: [[{ type: "min" }, { type: "max" }]],
              },
            },
            {
              name: "百度",
              type: "bar",
              barWidth: 5,
              stack: "搜索引擎",
              emphasis: {
                focus: "series",
              },
              data: [620, 732, 701, 734, 1090, 1130, 1120],
            },
            {
              name: "谷歌",
              type: "bar",
              stack: "搜索引擎",
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 290, 230, 220],
            },
            {
              name: "必应",
              type: "bar",
              stack: "搜索引擎",
              emphasis: {
                focus: "series",
              },
              data: [60, 72, 71, 74, 190, 130, 110],
            },
            {
              name: "其他",
              type: "bar",
              stack: "搜索引擎",
              emphasis: {
                focus: "series",
              },
              data: [62, 82, 91, 84, 109, 110, 120],
            },
          ],
        };
      },
    },
  },
  data() {
    return {
      coption: {},
    };
  },
  watch: {
    option(value) {
      this.coption = value;
    },
  },
  mounted() {
    this.coption = this.option;
    let self = this;
    this.$refs.chart.inst.on("click", function (params) {
      self.onClick(params);
    });
  },
  methods: {
    onClick(params) {
      this.$emit("onClick", params);
    },
    doSomething() {
      this.$refs.chart.inst.getWidth(); // 调用 ECharts 实例的方法
    },
    setOption: function (e) {
      this.$emit("setOption", e);
    },
  },
};
</script>