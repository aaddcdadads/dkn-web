<template>
  <a-anchor
    :affix="affix"
    :bounds="bounds"
    :get-container="getContainer"
    :offset-bottom="offsetBottom"
    :offset-top="offsetTop"
    :show-ink-in-fixed="showInkInFixed"
    :wrapper-class="wrapperClass"
    :wrapper-style="wrapperStyle"
    :get-current-anchor="getCurrentAnchor"
    :target-offset="targetOffset"
    @click="onClick"
    @change="onChange"
  >
    <a-anchor-link
      :href="item.href"
      v-for="item in title"
      :key="item.id"
      :title="item.text"
    >
    </a-anchor-link>
  </a-anchor>
</template>

<script>
export default {
  name: "HmAntAnchor",
  props: {
    /**
     * 内容
     */
    title: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            href: "#1",
            text: "Basic demo",
          },
          {
            id: 2,
            href: "#2",
            text: "Static demo",
          },
          {
            id: 3,
            href: "#3",
            text: "Basic demo with Target",
          },
        ];
      },
    },
    /**
     * 固定模式开关
     */
    affix: {
      type: Boolean,
      default: true,
    },
    /**
     * 锚点边界
     */
    bounds: {
      type: Number,
      default: 500,
    },
    /**
     * 指定滚动容器
     */
    getContainer: {
      type: Function,
      default: () => window,
    },
    /**
     * 底部触发偏移量
     */
    bouoffsetBottomnds: {
      type: Number,
    },
    /**
     * 顶部触发偏移量
     */
    offsetTop: {
      type: Number,
    },
    /**
     * 原点显示开关
     */
    showInkInFixed: {
      type: Boolean,
      default: true,
    },
    /**
     * 容器类名
     */
    wrapperClass: {
      type: String,
    },
    /**
     * 容器样式
     */
    wrapperStyle: {
      type: Object,
    },
    /**
     * 高亮锚点
     */
    getCurrentAnchor: {
      type: Function,
    },
    /**
     * 锚点滚动偏移量
     */
    targetOffset: {
      type: Number,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick: function (e) {
      this.$emit("click", e);
    },
    onChange: function (e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style scoped>
</style>