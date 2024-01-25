<template>
  <div class="hm-bg-card"  :style="{backgroundImage: 'url(' + backgroundImage + ')'}" v-show="!hidden">
    <div class="title">{{title}}</div>
    <slot></slot>
  </div>
</template>

<script>
/**
 * 背景卡片
 */
export default {
  name: "HmBgScreenCard",
  components: {
  },
  props: {
    /**
     * 标题文字 
     */
    title: {
      type: String,
      default: '标题'
    },
    /**
     * 标题颜色
     * @type Color
     */
    titleColor: {
      type: String,
      default: 'rgba(255,255,255)'
    },

    /**
     * 标题位置
     */
    top: {
      type: String,
      default: '38'
    },

    /**
     * 宽度
     */
    width: {
      type: String,
      default: '1920'
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '1080'
    },
     /**
     * 背景图
     */
    backgroundImage: {
      type: String,
      default: 'https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/big-screen/background16_9a.png'
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: '0'
    },
    /**
     * 对齐
     */
    textAlign: {
      type: String,
      default: 'left'
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: '0'
    },
    /**
     * 水平阴影
     */
    boxShadowHShadow: {
      type: String,
      default: '0'
    },
    /**
     * 垂直阴影
     */
    boxShadowVShadow: {
      type: String,
      default: '2'
    },
    /**
     * 模糊距离
     */
    boxShadowBlur: {
      type: String,
      default: '12'
    },
    /**
     * 阴影大小
     */
    boxShadowSpread: {
      type: String,
      default: '0'
    },
    /**
     * 阴影颜色
     * @type Color
     */
    boxShadowColor: {
      type: String,
      default: 'rgba(0,0,0,0.04)'
    },
    /**
     * 背景色
     * @type Color
     */
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    /**
     * 是否隐藏
     */
    hidden: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cWidth: '200px',
      cHeight: '200px',
      cbackgroundImage:'https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/big-screen/background16_9a.png',
      cPadding: '5px',
      cTextAlign: 'left',
      cBackgroundColor: 'white',
      cBorderRadius: '8px',
      cBoxShadowHShadow: '0px',
      cBoxShadowVShadow: '2px',
      cBoxShadowBlur: '12px',
      cBoxShadowSpread: '0px',
      cBoxShadowColor: 'rgba(0,0,0,0.04)',
      ctitleColor: 'rgba(0,0,0,0.04)',
      ctop:'38px',
    }
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    backgroundImage(value) {
      this.cbackgroundImage = this.getCssUnit(value);
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
    titleColor(value) {
      this.ctitleColor = value;
    },
    top(value) {
      this.ctop = value;
    }
  },
  computed: {
  },
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
    this.ctitleColor = this.titleColor;
    this.cbackgroundImage = this.getCssUnit(this.backgroundImage);
    this.ctop = this.getCssUnit(this.top);
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  },
};
</script>

<style scoped>
.hm-bg-card {
  /* display: inline-flex; */
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  padding: v-bind(cPadding);
  text-align: v-bind(cTextAlign);
  background-color: v-bind(cBackgroundColor);
  border-radius: v-bind(cBorderRadius);
  box-shadow: v-bind(cBoxShadowHShadow) v-bind(cBoxShadowVShadow) v-bind(cBoxShadowBlur) v-bind(cBoxShadowSpread) v-bind(cBoxShadowColor);
  /* background-image: v-bind('url(' + cbackgroundImage + ')'); */
  background-size: 100% 100%;
  background-repeat: 'no-repeat';
}
.title {
  position: fixed;
  top:v-bind(ctop);
  z-index: 1000;
  width: 100%;
  height: 30px;
  text-align: center;
  font-size: 36px;
  line-height: 25px;
  font-weight: bold;
  color: v-bind(ctitleColor);
}
</style>