<template>
  <a-card
    :loading="loading"
    :body-style="{ padding: '20px 24px 8px' }"
    :bordered="false"
    class="card"
  >
    <div class="chart-card-header">
      <div class="meta">
        <span class="chart-card-title">{{ title }}</span>
        <span class="chart-card-action">
          <slot name="action"></slot>
        </span>
      </div>
      <div class="total">
        <span>{{ cDatas.total }}</span>
      </div>
    </div>
    <div class="chart-card-content">
      <div class="content-fix">
        <ECharts ref="chart" :option="cOption" />
      </div>
    </div>
    <div class="chart-card-footer">
      <div class="field">
        <span>{{salesVolume}}</span>
        {{cDatas.amount}}{{company}}
      </div>
    </div>
  </a-card>
</template>

<script>
import * as echarts from "echarts";
import { h } from "vue";
import { createComponent } from "echarts-for-vue";
import {
  getAction
} from "/@/request/http";
export default {
  name: "HmAntCardEchartsSimple",
  components: {
    ECharts: createComponent({ echarts, h }) // 作为组件使用
  },
  props: {
    /**
     * 标题1
     */
    title: {
      type: String,
      default: "支付笔数"
    },
    /**
     * 总数
     */
    total: {
      type: String,
      default: "6,560"
    },
    /**
     * 标题2
     */
    salesVolume: {
      type: String,
      default: "转化率"
    },
    /**
     * 转化率-值
     */
    amount: {
      type: String,
      default: "60"
    },
    /**
     * 单位
     */
    company: {
      type: String,
      default: "%"
    },
    /**
     * 配置项
     */
    option: {
      type: Object,
      default: function() {
        return {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              // 坐标轴指示器，坐标轴触发有效
              type: "shadow"  // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          dataset: {
            dimensions: ["product", "sales"]
          },
          xAxis: {
            type: "category",
            show: false
          },
          yAxis: { show: false },
          series: [
            {
              name: "y",
              type: "bar"
            }
          ]
        };
      }
    },
    /**
     * 数据项
     */
    data: {
      type: Object,
      default: function() {
        return [
          { product: "2021-04-20", sales: 9 },
          { product: "2021-04-21", sales: 8 },
          { product: "2021-04-22", sales: 5 },
          { product: "2021-04-23", sales: 6 },
          { product: "2021-04-24", sales: 7 },
          { product: "2021-04-25", sales: 8 },
          { product: "2021-04-26", sales: 7 },
          { product: "2021-04-27", sales: 2 },
          { product: "2021-04-28", sales: 10 },
          { product: "2021-04-29", sales: 4 }
        ];
      }
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
  },
  data() {
    return {
      cOption: {},
      cDatas: {}
    };
  },
  watch: {
    total(value) {
      this.cDatas.total = value
    },
    amount(value) {
      this.cDatas.amount = value
    },
    option(value) {
      let dataset = JSON.parse(JSON.stringify(this.cOption.dataset));
      this.cOption = value;
      this.cOption.dataset = dataset;
    },
    data(value) {
      this.cOption.dataset.source = value;
    },
    url(value) {
      this.getData(value);
    },
    params(value) {
      this.getData(this.url, value);
    },
  },
  mounted() {
    this.cDatas = {
      total: this.total,
      amount: this.amount
    };
    this.cOption = this.option;
    if (typeof this.cOption.dataset === "undefined") {
      this.cOption.dataset = {};
    }
    this.cOption.dataset.source = this.data;
    this.getData();
  },
  methods: {
    getData(url, params) {
      url = url || this.url;
      params = params || this.params;
      if (!url) return;
      getAction(url, params).then((resp) => {
        this.cDatas = {
          total: resp.data.total,
          amount: resp.data.amount,
        }
        this.cOption.dataset.source = resp.data.echartsData
        this.$refs.chart.setOption(this.cOption, true)
      });
    },
  }
};
</script>

<style scoped>
.chart-card-header {
  position: relative;
  overflow: hidden;
  width: 100%;
}
.meta {
  position: relative;
  overflow: hidden;
  width: 100%;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  line-height: 22px;
}
.chart-card-action {
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}
.chart-card-footer {
  border-top: 1px solid #e8e8e8;
  padding-top: 9px;
  margin-top: 8px;
}
.field {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
}
.chart-card-content {
  margin-bottom: 12px;
  position: relative;
  height: 46px;
  width: 100%;
}
.content-fix {
  position: absolute;
  left: -14%;
  bottom: -27px;
  width: 128%;
  height: 80px;
}

.total {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  color: #000;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 30px;
  line-height: 38px;
  height: 38px;
}

.card {
  width: 100%;
  height: 100%;
  height: 1px;
  min-width: 300px;
  min-height: 181px;
}
</style>