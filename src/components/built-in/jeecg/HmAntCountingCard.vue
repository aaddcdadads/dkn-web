<template>
  <div class="container" @click="click">
    <div class="text-wrapper">
      {{title}}
    </div>
    <div class="group">
      <text class="text_1">{{mainText}}</text>
      <text class="text_2">{{company}}</text>
      <text class="text_3">{{secondaryText}}</text>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntCountingCard",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "已经精通技能点",
    },
    /**
     * 标题大小
     */
    titleSize: {
      type: String,
      default: "",
    },
    /**
     * 主文本
     */
    mainText: {
      type: String,
      default: "8",
    },
    /**
     * 主文本大小
     */
    mainTextSize: {
      type: String,
      default: "36",
    },
    /**
     * 单位
     */
    company: {
      type: String,
      default: "/",
    },
    /**
     * 次文本
     */
    secondaryText: {
      type: String,
      default: "16",
    },
    /**
     * 次文本大小
     */
    secondaryTextSize: {
      type: String,
      default: "15",
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: '8'
    },
    /**
     * 边框颜色
     * @type Color
     */
    borderColor: {
      type: String,
      default: '#4d5af1'
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
     * 标题颜色
     * @type Color
     */
    titleColor: {
      type: String,
      default: '#4d5af1'
    },
    /**
     * 主文本颜色
     * @type Color
     */
    mainTextColor: {
      type: String,
      default: '#4d5af1'
    },
    /**
     * 次文本颜色
     * @type Color
     */
    secondaryTextColor: {
      type: String,
      default: '#1a1a1a'
    },
  },
  data() {
    return {
      cTitleSize: '13px',
      cMainTextSize: '36px',
      cSecondaryTextSize: '15px',
      cBorderRadius: '8px',
      cBorderColor: 'white',
      cBackgroundColor: 'white',
      cTitleColor: 'white',
      cMainTextColor: 'white',
      cSecondaryTextColor: 'white',
    }
  },
  watch: {
    titleSize(value) {
      this.cTitleSize = this.getCssUnit(value);
    },
    mainTextSize(value) {
      this.cMainTextSize = this.getCssUnit(value);
    },
    secondaryTextSize(value) {
      this.cSecondaryTextSize = this.getCssUnit(value);
    },
    borderRadius(value) {
      this.cBorderRadius = this.getCssUnit(value);
    },
    borderColor(value) {
      this.cBorderColor = value;
    },
    backgroundColor(value) {
      this.cBackgroundColor = value;
    },
    titleColor(value) {
      this.cTitleColor = value;
    },
    mainTextColor(value) {
      this.cMainTextColor = value;
    },
    secondaryTextColor(value) {
      this.cSecondaryTextColor = value;
    },
  },
  mounted() {
    this.cTitleSize = this.getCssUnit(this.titleSize);
    this.cMainTextSize = this.getCssUnit(this.mainTextSize);
    this.cSecondaryTextSize = this.getCssUnit(this.secondaryTextSize);
    this.cBorderRadius = this.getCssUnit(this.borderRadius);
    this.cBorderColor = this.borderColor;
    this.cBackgroundColor = this.backgroundColor;
    this.cTitleColor = this.titleColor;
    this.cMainTextColor = this.mainTextColor;
    this.cSecondaryTextColor = this.secondaryTextColor;
  },
  methods: {
    click: function() {
      console.log("触发点击事件")
      this.$emit("click")
    },

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
.container {
  width: 100%;
  height: 100%;
}
.text-wrapper {
  display: inline-flex;
  padding: 4px 15px;
  text-align: center;
  color: v-bind(cTitleColor);
  font-size: v-bind(cTitleSize);
  font-weight: 500;
  background-color: v-bind(cBackgroundColor);
  border-radius: v-bind(cBorderRadius);
  border-style: solid;
  border-width: 1px;
  border-color: v-bind(cBorderColor);
}
.group {
  margin-top: 5px;
}
.text_1 {
  color: v-bind(cMainTextColor);
  font-size: v-bind(cMainTextSize);
  font-weight: 900;
  white-space: nowrap;
}
.text_2 {
  margin-left: 10px;
  color: v-bind(cSecondaryTextColor);
  font-size: v-bind(cSecondaryTextSize);
  font-weight: 900;
  white-space: nowrap;
}
.text_3 {
  margin-left: 4px;
  color: v-bind(cSecondaryTextColor);
  font-size: v-bind(cSecondaryTextSize);
  font-weight: 900;
  white-space: nowrap;
}
</style>