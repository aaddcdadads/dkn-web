<template>
  <a-tooltip
    :placement="placement"
    :mouse-enter-delay="mouseEnterDelay"
    :mouse-leave-delay="mouseLeaveDelay"
    :trigger="trigger"
    :color="color"
    @visibleChange="onVisibleChange"
    @click="onClick"
  >
    <i
      v-if="!img && !!icon && iconShow"
      :class="icon"
      class="text-icon"
      :style="cIconStyle"
    ></i>
    <img
      v-if="img && iconShow"
      class="text-img"
      :src="img"
      :style="cImgStyle"
    />
    {{ value }}
    <!-- 提示文字 -->
    <template #title
      ><span :style="`color: ${titleColor}`">{{ title }}</span></template
    >
  </a-tooltip>
</template>

<script>
export default {
  name: "HmAntTooltip",
  props: {
    /**
     * 显示图标图片
     */
    iconShow: {
      type: Boolean,
      default: false,
    },
    /**
     * 图标
     * @type Icon
     */
    icon: {
      type: String,
      default: "fa fa-bath",
    },
    /**
     * 图片
     */
    img: {
      type: String,
    },
    /**
     * 图标图片大小
     */
    iconSize: {
      type: String,
      default: "20px",
    },
    /**
     * 图标间距
     */
    iconPadding: {
      type: String,
      default: "5",
    },
    /**
     * 文本内容
     * @model
     */
    value: {
      type: String,
      default: "121212",
    },
    /**
     * 提示文字
     */
    title: {
      type: String,
      default: "这是提示12312文1212字",
    },
    /**
     * 背景颜色
     * @type Color
     */
    color: {
      type: String,
      default: "transparent",
    },
    /**
     * 提示文字颜色
     */
    titleColor: {
      type: String,
      default: "#333333",
    },
    /**
     * 显示位置
     * @type Enum
     * @default bottomLeft
     * @options ["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]
     */
    placement: {
      type: String,
    },
    /**
     * 触发事件
     * @type Enum
     * @default hover
     * @options ["hover","focus","click","contextmenu"]
     */
    trigger: {
      type: String,
      default: "hover",
    },
    /**
     *显示延时
     */
    mouseEnterDelay: {
      type: Number,
      default: 0,
    },
    /**
     * 隐藏延时
     */
    mouseLeaveDelay: {
      type: Number,
      default: 0.1,
    },
  },
  data() {
    return {
      cIconPadding: "10px",
      cIconSize: "18px",
      cIconStyle: "display: inline-block",
      cImgStyle: "display: inline-block",
      cVisible: false,
    };
  },
  watch: {
    iconPadding(value) {
      this.cIconPadding = this.getCssUnit(value);
    },
    iconSize(value) {
      this.cIconSize = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cIconPadding = this.getCssUnit(this.iconPadding);
    this.cIconSize = this.getCssUnit(this.iconSize);
    this.tooltipInfo =
      '<span style={{ color: "#555555" }}>提示气泡文字中</span>';
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onVisibleChange: function (e) {
      this.$emit("visibleChange", e);
      console.log("eeee", e);
      this.cVisible = e;
    },
    onClick(){
      this.$emit("onClick");
    }
  },
};
</script>

<style scoped>
.text-icon {
  font-size: v-bind(cIconSize);
  padding: v-bind(cIconPadding);
}
.text-img {
  width: v-bind(cIconSize);
  height: v-bind(cIconSize);
}
</style>