<template>
<!-- 下降率 -->
  <a-card
    :loading="loading"
    :body-style="{ padding: '20px 24px 8px' }"
    :bordered="false"
    class="card"
  >
    <div class="chart-card-header">
      <div class="meta">
        <span class="chart-card-action">
          <slot name="action"></slot>
        </span>
      </div>
      <div class="total">
          <span class="a">{{ prefix }}</span> 
          <span>{{ total }}</span> {{company}}
          <!-- <i class="fa fa-camera-retro "></i> -->
          <i :class="icon"></i>
          <span class="a">{{suffix}}</span>
      </div>
    </div>
    
  </a-card>
</template>

<script>
import Icon from '@ant-design/icons-vue';
export default {
  name: "HmDeclineRate",
  props: {
    /**
     * 前缀
     */
    prefix: {
      type: String,
      default: "[",
    },
    /**
     * 数值
     */
    total: {
      type: String,
      default: "-13.14",
    },
    /**
     * 单位
     */
    company: {
      type: String,
      default: "%",
    },
    /**
     * 后缀
     */
    suffix: {
      type: String,
      default: "]",
    },
    /**
     * 
     * 图标
     * @ Icon
     */
    icon: {
      type:String,
      default:'fa fa-arrow-down'
    }
  },
};
</script>

<style scoped>
.total {
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  color: #000;
  margin-top: 4px;
  margin-bottom: 0;
  font-size: 30px;
}
.a {
  color: aqua;
  font-size: 45px;
}
.card {
  width: 100%;
  height: 100%;
  height: 1px;
  min-width: 300px;
  min-height: 300px;
}
</style>
