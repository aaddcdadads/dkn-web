<template>
  <!-- 数据卡片 -->
  <a-card
    :loading="loading"
    :body-style="{ padding: '20px 24px 8px' }"
    :bordered="false"
    class="card"
  >
    <div class="meta">
      <div class="chart-card-title">{{ title }}</div>
      <trend flag="up" style="margin-right: 16px">
        <span class="total">{{ week }}</span>{{ element }}
      </trend>
      <trend flag="down">
        <i :class="icon"></i>
        <span class="s">{{ day }}</span>{{ element }}
      </trend>
    </div>
  </a-card>
</template>

<script>
export default {
  name: "HmDataCard",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "数据数量",
    },
    /**
     * 单位
     */
    element: {
      type: String,
      default: "人",
    },
    /**
     * 数据总量
     */
    week: {
      type: String,
      default: "823",
    },
    /**
     * 平均数据量
     */
    day: {
      type: String,
      default: "123",
    },
    /**
     * 图标
     * @type Icon
     */
    icon: {
      type: String,
      default: "fa fa-arrow-up",
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
  width: 95%;
  color: #76becc;
  font-size: 14px;
  line-height: 22px;
}
.total {
  color: #28a3f5;
  margin-top: 4px;
  margin-right: 4px;
  margin-bottom: 0;
  font-size: 30px;
  line-height: 38px;
  height: 38px;
}
.a {
  color: #28a3f5;
  position: relative;
  overflow: hidden;
  margin-top: -25px;
  margin-left: 52px;
}
.s {
  color: #28a3f5;
  margin-right: 4px;
}
.card {
  width: 100%;
  height: 100%;
  height: 1px;
  min-width: 300px;
  min-height: 300px;
}
</style>