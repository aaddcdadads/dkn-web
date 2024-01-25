<template>
  <a-statistic
    :groupSeparator="groupSeparator"
    :precision="precision"
    :prefix="prefix"
    :suffix="suffix"
    :title="titleVal"
    v-model:value="values"
    @finish="onFinish"
    :value-style="{ color: numberColor,fontSize: numberSize}"
    class="statistic-class"
  >
    <slot />
    <!-- 自定义数值展示 -->
    <slot name="formatter"></slot>
    <!-- 设置数值的前缀 -->
    <slot name="prefix"></slot>
    <!-- 设置数值的后缀 -->
    <slot name="suffix"></slot>
    <!-- 数值的标题 -->
    <slot name="title"></slot>
  </a-statistic>
</template>

<script>
export default {
  name: "HmAntStatistic",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: '标题',
    },
    /**
     * 标题颜色
     * @type Color
     */
    color: {
      type: String,
      default: "#CCCCCC",
    },
    /**
     * 标题大小
     */
    fontSize: {
      type: String,
      default: "14px",
    },
    /**
     * 数字
     * @model
     */
    value: {
      type: String, //String | Number
      default: '99',
    },
    /**
     * 数字颜色
     * @type Color
     */
    numberColor: {
      type: String,
      default: "#000000",
    },
    /**
     * 数字大小
     */
    numberSize: {
      type: String,
      default: "24px",
    },
    /**
     * 前缀
     */
    prefix: {
      type: String,
      default: ''
    },
    /**
     * 后缀
     */
    suffix: {
      type: String,
      default: ''
    },
    /**
     * 精度
     */
    precision: {
      type: Number,
      default: 2,
    },
    /**
     * 千分位标识符
     */
    groupSeparator: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      titleVal: '',
      values: '',
      cColor: '#CCCCCC',
      cSize: '14px',
    };
  },
  watch: {
    title(val) {
      this.titleVal = val
    },
    value(val) {
      this.values = val
    },
    color(value) {
      this.cColor = this.getCssUnit(value);
    },
    fontSize(value) {
      this.cSize = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cColor = this.getCssUnit(this.color);
    this.cSize = this.getCssUnit(this.fontSize);
  },
  methods: {
    onFinish: function(e) {
      this.$emit("finish", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}`;
    },
  },
  created() {
    this.titleVal = this.title
    this.values = this.value
  }
};
</script>

<style scoped>
.statistic-class /deep/ .ant-statistic-title {
  color: v-bind(cColor);
  font-size: v-bind(cSize);
}
</style>