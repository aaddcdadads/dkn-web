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
      <div class="percent">
        <span>{{ cDatas.percent }}</span>
        {{company}}
      </div>
    </div>
    <div class="chart-card-content">
      <div class="content-fix">
        <a-progress
          :percent="cDatas.percent"
          :stroke-color="strokeColor"
          :stroke-width="strokeWidth"
          :show-info="false"
          class="ant-class"
        ></a-progress>
      </div>
    </div>
    <div class="chart-card-footer">
      <div class="field">
        <trend flag="up" style="margin-right: 16px">
          <span>{{week}}</span>
          {{cDatas.weekVal}} {{company}}
        </trend>
        <trend flag="down">
          <span>{{day}}</span>
          {{cDatas.dayVal}} {{company}}
        </trend>
      </div>
    </div>
  </a-card>
</template>

<script>
import {
  getAction
} from "/@/request/http";
export default {
  name: "HmAntCardDataProgress",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "运营活动效果"
    },
    /**
     * 当前值
     * @model
     */
    percent: {
      type: Number,
      default: 78
    },
    /**
     * 单位
     */
    company: {
      type: String,
      default: "%"
    },
    /**
     *线宽
     */
    strokeWidth: {
      type: Number,
      default: 10
    },
    /**
     * 颜色
     * @type Color
     */
    strokeColor: {
      type: String,
      default: "#13c2c2"
    },
    /**
     * 同周比
     */
    week: {
      type: String,
      default: "同周比"
    },
    /**
     * 同周比-值
     */
    weekVal: {
      type: String,
      default: "12"
    },
    /**
     * 日环比
     */
    day: {
      type: String,
      default: "日环比"
    },
    /**
     * 日环比-值
     */
    dayVal: {
      type: String,
      default: "80"
    },
    /**
    * GET URL
    */
    url: {
      type: String
    },
		/**
		 * GET Params
		 */
    params: {
      type: Object
    },
  },
  data() {
    return {
      cDatas: {},
    }
  },
  watch: {
    percent(value) {
      this.cDatas.percent = value
    },
    weekVal(value) {
      this.cDatas.weekVal = value
    },
    dayVal(value) {
      this.cDatas.dayVal = value
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
      percent: this.percent,
      weekVal: this.weekVal,
      dayVal: this.dayVal,
    },
      this.getData()
  },

  methods: {
    getData(url, params) {
      url = url || this.url;
      params = params || this.params;
      if (!url) return;
      getAction(url, params).then((resp) => {
        // console.log("resp", resp)
        this.cDatas = resp.data;
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
  left: 0;
  bottom: 0;
  width: 100%;
}

.percent {
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