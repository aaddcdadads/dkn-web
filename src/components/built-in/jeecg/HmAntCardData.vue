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
        {{ element }}
        <span>{{ cDatas.total }}</span>
      </div>
    </div>
    <div class="chart-card-content">
      <div class="content-fix">
        <trend flag="up" style="margin-right: 16px">
          <span>{{ week }}</span>
          {{ cDatas.weekVal }} {{ company }}
        </trend>
        <trend flag="down">
          <span>{{ day }}</span>
          {{ cDatas.dayVal }} {{ company }}
        </trend>
      </div>
    </div>
    <div class="chart-card-footer">
      <div class="field">
        <slot name="footer">{{ salesVolume }}</slot>
        {{ element }}
        {{ cDatas.amount }}
      </div>
    </div>
  </a-card>
</template>

<script>
import { getAction } from "/@/request/http";
export default {
  name: "HmAntCardData",
  props: {
    /**
     * 标题1
     */
    title: {
      type: String,
      default: "总销售额",
    },
    /**
     * 单位1
     */
    element: {
      type: String,
      default: "￥",
    },
    /**
     * 总数1
     */
    total: {
      type: String,
      default: "126,560",
    },
    /**
     * 周同比
     */
    week: {
      type: String,
      default: "周同比",
    },
    /**
     * 周同比-值
     */
    weekVal: {
      type: String,
      default: "11",
    },
    /**
     * 单位2
     */
    company: {
      type: String,
      default: "%",
    },

    /**
     * 日同比
     */
    day: {
      type: String,
      default: "日同比",
    },
    /**
     * 日同比-值
     */
    dayVal: {
      type: String,
      default: "22",
    },
    /**
     * 标题2
     */
    salesVolume: {
      type: String,
      default: "日均销售额",
    },
    /**
     * 总数2
     */
    amount: {
      type: String,
      default: "234.56",
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
      cDatas: {
        total: "",
        weekVal: "",
        dayVal: "",
        amount: "",
      },
    };
  },

  watch: {
    total(value) {
      this.cDatas.total = value;
    },
    weekVal(value) {
      this.cDatas.weekVal = value;
    },
    dayVal(value) {
      this.cDatas.dayVal = value;
    },
    amount(value) {
      this.cDatas.amount = value;
    },
    url(value) {
      this.getData(value);
    },
    params(value) {
      this.getData(this.url, value);
    },
  },
  mounted() {
    (this.cDatas = {
      total: this.total,
      weekVal: this.weekVal,
      dayVal: this.dayVal,
      amount: this.amount,
    }),
      this.getData();
  },

  methods: {
    getData(url, params) {
      url = url || this.url;
      params = params || this.params;
      if (!url) return;
      getAction(url, params).then((resp) => {
        if (resp.result) {
          this.cDatas = resp.result;
        }
        if (resp.data) {
          this.cDatas = resp.data;
        }
      });
    },
    onClick() {
      //console.log("onClick");
      this.$emit("click");
    },
  },
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
  left: 0;
  bottom: 0;
  width: 100%;
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
  min-width: 300px;
}
</style>