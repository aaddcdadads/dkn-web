<template>
  <a-spin
    :delay="delay"
    :size="size"
    :spinning="spinning"
    :tip="tip"
    :wrapper-class-name="wrapperClassName"
    class="spin-class"
  >
    <!-- 加载指示符 -->
    <slot name="indicator"></slot>
  </a-spin>
</template>

<script>
export default {
  name: "HmAntSpin",
  props: {
    /**
     * 延迟显示加载
     */
    delay: {
      type: Number,
    },
    /**
     * 组件大小
     */
    size: {
      type: String,
      default: "default",
    },
    /**
     * 为加载中状态
     */
    spinning: {
      type: Boolean,
      default: true,
    },
    /**
     * 定义描述文案
     */
    tip: {
      type: String,
    },
    /**
     * 包装器的类名
     */
    wrapperClassName: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.spin-class {
  width: 100%;
  min-width: 40px;
}
</style>