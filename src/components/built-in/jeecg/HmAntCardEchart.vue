<template>
  <a-card
    :loading="loading"
    :body-style="{ padding: '20px 24px 8px' }"
    :bordered="false"
    style="width: 100%"
  >
    <div class="chart-card-header">
      <div class="meta">
        <span class="chart-card-title">{{ title }}</span>
        <span class="chart-card-action">
          <slot name="action"></slot>
        </span>
      </div>
      <div class="total">
        <span>{{ total }}</span>
      </div>
    </div>
    <div class="chart-card-content">
      <div class="content-fix">
        <!-- <trend flag="up" style="margin-right: 16px">
          <span>周同比</span>
          12%
        </trend>
        <trend flag="down">
          <span>日同比</span>
          11%
        </trend> -->
        <img :src="imgUrl" style="height: 46px; width: 100%" />
      </div>
    </div>
    <div class="chart-card-footer">
      <div class="field">
        <slot name="footer">日均销售额￥ 234.56</slot>
      </div>
    </div>
  </a-card>
</template>

<script>
export default {
  name: "ChartCard",
  props: {
    title: {
      type: String,
      default: "总销售额",
    },
    total: {
      type: String,
      default: "￥126,560",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    imgUrl: {
      type: String,
      default: "https://www.itying.com/images/flutter/2.png",
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
</style>