<template>
  <a-result :title="title" :sub-title="subTitle" :status="status">
    <slot />
    <!-- title 文字 -->
    <slot name="title"></slot>
    <!-- subTitle 文字 -->
    <slot name="subTitle"></slot>
    <!-- 自定义 icon -->
    <slot name="icon"></slot>
    <!-- 操作区 -->
    <template #extra>
      <a-button type="primary"> Go Console </a-button>
    </template>
    {{ value }}
  </a-result>
</template>

<script>
export default {
  name: "HmAntResult",
  props: {
    /**
     * 结果的状态
     */
    status: {
      type: String,
      default: "info",
    },
    /**
     * 内容区域
     */
    value: {
      type: String,
      default: "123456",
    },
    /**
     * 主标题文字
     */
    title: {
      type: String,
      default: "主标题",
    },
    /**
     * 副标题文字
     */
    subTitle: {
      type: String,
      default: "副标题subTitle 文字",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
</style>
