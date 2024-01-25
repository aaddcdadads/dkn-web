<template>
  <!-- 计数器 -->
  <a-card
    :loading="loading"
    :body-style="{ padding: '20px 24px 8px' }"
    :bordered="false"
    class="card"
  >
    <div class="chart-card-header">
      <div class="brackets">{{ prefix }}</div>
      <div class="meta">
        <div class="order1">
          <span class="chart-card-title">{{ data1 }}</span>
          <div class="a">
            <span class="total">{{ amount }}</span>
          </div>
        </div>
        <div class="order2">
          <span class="chart-card-title-brother">{{ data2 }}</span>
          <div class="c">
            <span class="sum">{{ man }}</span>
          </div>
        </div>
      </div>
      <div class="brackets">{{ suffix }}</div>
    </div>
  </a-card>
</template>

<script>
export default {
  name: "HmCounter",
  props: {
    /**
     * 前缀
     */
    prefix: {
      type: String,
      default: "[",
    },
    /**
     * 数据1
     */
    data1: {
      type: String,
      default: "123,456,789",
    },
    /**
     * 数据2
     */
    data2: {
      type: String,
      default: "123,456,789",
    },
    /**
     * 访问量
     */
    amount: {
      type: String,
      default: "访问量",
    },
    /**
     * 访问人数
     */
    man: {
      type: String,
      default: "访问人数",
    },
    /**
     * 后缀
     */
    suffix: {
      type: String,
      default: "]",
    },
  },
};
</script>

<style scoped>
.order1 {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 30px;
  border: 1px solid cornflowerblue;
  margin-right: 20px;
  height: 66px;
}
.order2 {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 30px;
  border: 1px solid rgb(38, 230, 198);
  height: 66px;
}
.a {
  position: relative;
  margin-left: 10px;
}
.c {
  position: relative;
  margin-left: 10px;
}
.chart-card-header {
  position: relative;
  display: flex;
  justify-content: center;
}
.meta {
  display: flex;
  justify-content: center;
  padding-top: 32px;
}
.chart-card-title {
  color: #2570a1;
  font-size: 24px;
}
.chart-card-title-brother {
  color: #2570a1;
  font-size: 24px;
}
.total {
  color: #76becc;
  font-size: 16px;
  line-height: 15px;
}
.sum {
  color: #76becc;
  font-size: 16px;
  line-height: 15px;
}
.brackets {
  color: aqua;
  font-size: 80px;
  width: 30px;
}
.card {
  width: 100%;
  height: 100%;
  height: 1px;
  min-width: 300px;
  min-height: 300px;
}
</style>