<template>
  <div class="hm-bg-text" @click="click" @dblclick="dbClick" v-if="hasPermission(auth)">
    <i
      v-if="!img && !!icon && ['left', 'top'].indexOf(iconPosition) >= 0"
      :class="icon"
      class="text-icon"
      :style="cIconStyle"
      @click.stop="onIconClick"
    ></i>
    <img
      v-if="img && ['left', 'top'].indexOf(iconPosition) >= 0"
      class="text-img"
      :src="img"
      :style="cImgStyle"
    />
    <span class="text-inner">{{ text }}</span>
    <i
      v-if="!img && !!icon && ['right', 'bottom'].indexOf(iconPosition) >= 0"
      :class="icon"
      class="text-icon"
      :style="cIconStyle"
      @click.stop="onIconClick"
    ></i>
    <img
      v-if="img && ['right', 'bottom'].indexOf(iconPosition) >= 0"
      class="text-img"
      :src="img"
      :style="cImgStyle"
    />
  </div>
</template>

<script>
import { hasPermission } from '/@/utils/util';
/**
 * 文字
 */
export default {
  name: "HmAntIconText",
  components: {},
  props: {
    /**
     * 文字
     */
    text: {
      type: String,
      default: "文字"
    },
    /**
     * 图标
     * @type Icon
     */
    icon: {
      type: String,
      default: "fa fa-bath"
    },
    /**
     * 图片
     */
    img: {
      type: String
    },
    /**
     * 图标位置
     * @type Enum
     * @options ["left", "right", "top", "bottom"]
     */
    iconPosition: {
      type: String,
      default: "left"
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "100px"
    },
    /**
     * 文字大小
     */
    fontSize: {
      type: String,
      default: "20px"
    },
    /**
     * 图标图片大小
     */
    iconSize: {
      type: String,
      default: "20px"
    },
    /**
     * 图标颜色
     * @type Color
     */
    color: {
      type: String,
      default: "rgba(0,0,0,1)"
    },
    /**
     * 文字颜色
     * @type Color
     */
    colorText: {
      type: String,
      default: "rgba(0,0,0,1)"
    },
    /**
     * 对齐
     * @type Enum
     * @options ["left", "center", "right"]
     */
    textAlign: {
      type: String,
      default: "center"
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: "5"
    },
    /**
     * 图标间距
     */
    iconPadding: {
      type: String,
      default: "5"
    },
    /**
     * 图标背景色
     * @type Color
     */
    bgColor: {
      type: String,
      default: "#ffffff"
    },
    /**
     * 授权标识
     */
    auth: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hasPermission,
      timeOutEvent: 0,
      cPadding: "5px",
      cIconPadding: "10px",
      cTextAlign: "left",
      cWidth: "100px",
      cFontSize: "18px",
      cIconSize: "18px",
      cColor: "rgba(0,0,0,1)",
      cIconStyle: "display: inline-block",
      cImgStyle: "display: inline-block",
      cColorText: "rgba(0,0,0,1)",
      cBgColor: "#fff"
    };
  },
  watch: {
    padding(value) {
      this.cPadding = this.getCssUnit(value);
    },
    iconPadding(value) {
      this.cIconPadding = this.getCssUnit(value);
    },
    fontSize(value) {
      this.cFontSize = this.getCssUnit(value);
    },
    iconSize(value) {
      this.cIconSize = this.getCssUnit(value);
    },
    textAlign(value) {
      this.cTextAlign = value;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    color(value) {
      this.cColor = value;
    },
    bgColor(value) {
      this.cBgColor = value;
    },
    colorText(value) {
      this.cColorText = value;
    },
    iconPosition(value) {
      this.calcIconStyle(value);
    }
  },
  computed: {},
  mounted() {
    this.cPadding = this.getCssUnit(this.padding);
    this.cIconPadding = this.getCssUnit(this.iconPadding);
    this.cFontSize = this.getCssUnit(this.fontSize);
    this.cIconSize = this.getCssUnit(this.iconSize);
    this.cWidth = this.getCssUnit(this.width);
    this.cTextAlign = this.textAlign;
    this.cColor = this.color;
    this.cBgColor = this.bgColor;
    this.cColorText = this.colorText;
    this.calcIconStyle(this.iconPosition);
    this.calcImgStyle(this.iconPosition);
  },
  methods: {
    click: function() {
      let self = this;
      clearTimeout(this.timeOutEvent);
      this.timeOutEvent = setTimeout(function() {
        // self.$emit("onClick");
        // console.log("触发点击事件");
        self.onClick();
      }, 300);
    },
    onIconClick: function() {
      this.$emit("onIconClick");
      console.log("触发图标点击事件");
    },
    onClick: function() {
      this.$emit("onClick");
      console.log("触发点击事件");
    },
    dbClick: function(e) {
      clearTimeout(this.timeOutEvent);
      this.$emit("dbClick", e);
      console.log("触发双击事件", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    calcIconStyle(iconPosition) {
      if (iconPosition === "left") {
        this.cIconStyle = "display: inline-block";
      } else if (iconPosition === "top") {
        this.cIconStyle = "display: block";
      } else if (iconPosition === "right") {
        this.cIconStyle = "display: inline-block";
      } else if (iconPosition === "bottom") {
        this.cIconStyle = "display: block";
      }
    },
    calcImgStyle(iconPosition) {
      if (iconPosition === "left") {
        this.cImgStyle = "display: inline-block";
      } else if (iconPosition === "top") {
        this.cImgStyle = "display: block";
      } else if (iconPosition === "right") {
        this.cImgStyle = "display: inline-block";
      } else if (iconPosition === "bottom") {
        this.cImgStyle = "display: block";
      }
      if (this.cTextAlign === "center") {
        this.cImgStyle += ";margin: 0 auto;";
      }
      if (this.cTextAlign === "right") {
        this.cImgStyle += ";";
      }
    }
  }
};
</script>

<style scoped>
.hm-bg-text {
  width: v-bind(cWidth);
  padding: v-bind(cPadding);
  text-align: v-bind(cTextAlign);
  font-size: v-bind(cFontSize);
  color: v-bind(cColor);
  background-color: v-bind(cBgColor);
}
.text-inner {
  color: v-bind(cColorText);
}
.text-icon {
  font-size: v-bind(cIconSize);
  padding: v-bind(cIconPadding);
}
.text-img {
  width: v-bind(cIconSize);
  height: v-bind(cIconSize);
}
</style>