<template>
  <a-avatar
    class="avatar"
    :icon="icon"
    :shape="shape"
    :size="size"
    :src="src"
    :srcSet="srcSet"
    :alt="alt"
    @loadError="onLoadError"
  >
    <slot />
    <slot name="icon"></slot>
  </a-avatar>
</template>

<script>
export default {
  name: "HmAntAvatar",
  data() {
    return {
      cBackground: "#ccc"
    }
  },
  props: {
    /**
     * 图标
     */
    icon: {
      type: String,
      default: "user",
    },
    /**
     * 指定头像形状
     */
    shape: {
      type: String,
    },
    /**
     * 头像的大小
     */
    size: {
      type: [Number, String],
      default: "large",
    },
    /**
    * 背景颜色
    * @type Color
    */
    background: {
      type: String,
      default: "#ccc"
    },
    /**
     * 资源地址
     */
    src: {
      type: String,
    },
    /**
     * 资源地址
     */
    srcSet: {
      type: String,
    },
    /**
     * 替代文本
     */
    alt: {
      type: String,
    },
    /**
     * 图片加载事件
     */
  },
  watch: {
    background(value) {
      this.cBackground = value;
    },
  },
  mounted() {
    this.cBackground = this.background;
  },
  methods: {
    onLoadError: function(e) {
      this.$emit("loadError", e);
    },
  },
};
</script>

<style scoped>
.avatar {
  background: v-bind(cBackground);
}
</style>