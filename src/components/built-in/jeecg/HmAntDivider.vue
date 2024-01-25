<template>
  <a-divider
    :dashed="dashed"
    :orientation="orientation"
    :type="type"
    class="divider-class"
  >
    {{ title }}
  </a-divider>
</template>

<script>
export default {
  name: "HmAntDivider",
  props: {
    /**
     * 是否虚线
     */
    dashed: {
      type: Boolean,
    },
    /**
     * 分割线标题的位置
     */
    orientation: {
      type: String,
      default: "center",
    },
    /**
     * 水平还是垂直类型
     */
    type: {
      type: String,
      default: "horizontal",
    },
    /**
     * 内容
     */
    title: {
      type: String,
      default: "分割线",
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>>