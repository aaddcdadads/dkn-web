<template>
  <img :width="cWidth" :height="cHeight" :src="cSrc" :alt="cAlt" :loading="cLoading" />
</template>

<script>
export default {
  props: {
    /**
     * 宽度
     */
    width: {
      type: [String, Number],
      default: "300",
    },
    /**
     * 高度
     */
    height: {
      type: [String, Number],
      default: "300",
    },
    /**
     * 图像替代文本
     */
    alt: {
      type: String,
      default: "默认",
    },
    /**
     * 图像地址
     */
    src: {
      type: String,
      default: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/shangxian/1.png",
    },
    /**
     * 图像加载方式
     * @type Enum
     * @options ["eager", "lazy"]
     */
    loading: {
      type: String,
      default: "eager",
    },
  },
  data() {
    return {
      cWidth: "300",
      cHeight: "300",
      cAlt: "默认",
      cSrc: "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/shangxian/1.png",
      cLoading: "eager"
    }
  },
  watch: {
    width(val) {
      this.cWidth = val
    },
    height(val) {
      this.cHeight = val
    },
    alt(val) {
      this.cAlt = val
    },
    src(val) {
      this.cSrc = val
    },
    loading(val) {
      this.cLoading = val
    },
  },
  mounted() {
    this.cWidth = this.width
    this.cHeight = this.height
    this.cAlt = this.alt
    this.cSrc = this.src
    this.cLoading = this.loading
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>

</style>