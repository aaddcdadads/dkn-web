<template>
  <a-skeleton
    :active="active"
    :avatar="avatar"
    :loading="loading"
    :paragraph="paragraph"
    :title="title"
  >
    <slot />
    <!--  -->
    <slot name="header"></slot>
    <!--  -->
    <slot name="extra"></slot>
  </a-skeleton>
</template>

<script>
// import { Skeleton } from "ant-design-vue";

export default {
  name: "HmAntSkeleton",

  props: {
    /**
     * 是否展示动画效果
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否显示头像占位图
     */
    avatar: {
      type: [Object, Number],
      default: function () {
        return { size: "large", shape: "square" };
      },
    },

    /**
     * 为 true 时，显示占位图。反之则直接展示子组件
     */
    loading: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否显示段落占位图
     */
    paragraph: {
      type: [Object, Boolean],
      default: function () {
        return {
          rows: 5,
          width: 500,
        };
      },
    },
    /**
     * 是否显示标题占位图
     */
    title: {
      type: [Object, Boolean],
      default: function () {
        return { width: 500 };
      },
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
