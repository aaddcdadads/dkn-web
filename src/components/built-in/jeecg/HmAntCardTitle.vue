<template>
  <div class="hm-bg-card">
    <slot>
      <div style="height: 10%; width: 100%; min-width: 200px">{{ title }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "HmBgCard",
  components: {},
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "标题标题1212",
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "200",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "200",
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: "8",
    },
    /**
     * 对齐
     */
    textAlign: {
      type: String,
      default: "left",
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: "5",
    },
    /**
     * 水平阴影
     */
    boxShadowHShadow: {
      type: String,
      default: "0",
    },
    /**
     * 垂直阴影
     */
    boxShadowVShadow: {
      type: String,
      default: "2",
    },
    /**
     * 模糊距离
     */
    boxShadowBlur: {
      type: String,
      default: "12",
    },
    /**
     * 阴影大小
     */
    boxShadowSpread: {
      type: String,
      default: "0",
    },
    /**
     * 阴影颜色
     * @type Color
     */
    boxShadowColor: {
      type: String,
      default: "rgba(0,0,0,0.04)",
    },
    /**
     * 背景色
     * @type Color
     */
    backgroundColor: {
      type: String,
      default: "#fff",
    },
  },
  data() {
    return {
      cWidth: "200px",
      cHeight: "200px",
      cPadding: "5px",
      cTextAlign: "left",
      cBackgroundColor: "white",
      cBorderRadius: "8px",
      cBoxShadowHShadow: "0px",
      cBoxShadowVShadow: "2px",
      cBoxShadowBlur: "12px",
      cBoxShadowSpread: "0px",
      cBoxShadowColor: "rgba(0,0,0,0.04)",
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    padding(value) {
      this.cPadding = this.getCssUnit(value);
    },
    textAlign(value) {
      this.cTextAlign = value;
    },
    backgroundColor(value) {
      this.cBackgroundColor = value;
    },
    borderRadius(value) {
      this.cBorderRadius = this.getCssUnit(value);
    },
    boxShadowHShadow(value) {
      this.cBoxShadowHShadow = this.getCssUnit(value);
    },
    boxShadowVShadow(value) {
      this.cBoxShadowVShadow = this.getCssUnit(value);
    },
    boxShadowBlur(value) {
      this.cBoxShadowBlur = this.getCssUnit(value);
    },
    boxShadowSpread(value) {
      this.cBoxShadowSpread = this.getCssUnit(value);
    },
    boxShadowColor(value) {
      this.cBoxShadowColor = value;
    },
  },
  computed: {},
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cPadding = this.getCssUnit(this.padding);
    this.cTextAlign = this.textAlign;
    this.cBackgroundColor = this.backgroundColor;
    this.cBorderRadius = this.getCssUnit(this.borderRadius);
    this.cBoxShadowHShadow = this.getCssUnit(this.boxShadowHShadow);
    this.cBoxShadowVShadow = this.getCssUnit(this.boxShadowVShadow);
    this.cBoxShadowBlur = this.getCssUnit(this.boxShadowBlur);
    this.cBoxShadowSpread = this.getCssUnit(this.boxShadowSpread);
    this.cBoxShadowColor = this.boxShadowColor;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style scoped>
.hm-bg-card {
  display: inline-flex;
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  padding: v-bind(cPadding);
  text-align: v-bind(cTextAlign);
  background-color: v-bind(cBackgroundColor);
  border-radius: v-bind(cBorderRadius);
  box-shadow: v-bind(cBoxShadowHShadow) v-bind(cBoxShadowVShadow)
    v-bind(cBoxShadowBlur) v-bind(cBoxShadowSpread) v-bind(cBoxShadowColor);
}
</style>