<template>
  <div class="number-class">
    <a-button type="button" @click="sub">-</a-button>
    <a-input-number
      class="ant-number"
      :defaultValue="defaultValue"
      :max="max"
      :min="min"
      :size="size"
      :step="step"
      :disabled="disabled"
      v-model:value="cValue"
      @change="change"
      @pressEnter="pressEnter"
    ></a-input-number>
    <a-button type="button" @click="add">+</a-button>
  </div>
</template>

<script>
export default {
  name: "HmAntCounter",
  data() {
    return {
      cValue: "",
      cWidth: "200px",
    };
  },
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: Number,
    },
    /**
     * 初始值
     */
    defaultValue: {
      type: Number,
      default: 0,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 数值间隔
     */
    step: {
      type: Number,
    },
    /**
     * 最大值
     */
    max: {
      type: Number,
    },
    /**
     * 最小值
     */
    min: {
      type: Number,
      default: 0,
    },
    /**
     * 大小
     * @type Enum
     * @default
     * @options ["large","small"]
     */
    size: {
      type: String,
    },
    /**
     * 输入框宽度
     */
    width: {
      type: String,
      default: "50",
    },
  },
  watch: {
    cValue(value) {
      this.cValue = value;
    },
    width(value) {  
      this.cWidth = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cValue = this.value || 0;
    this.cWidth = this.getCssUnit(this.width);
  },
  methods: {
    onChange: function (e) {
      this.$emit("update:value", this.cValue);
      this.$emit("change", e);
    },
    onPressEnter: function (e) {
      this.$emit("pressEnter", e);
    },
    add(){
      this.cValue = parseInt(this.cValue) + 1
      console.log('val', this.cValue)
    },
    sub(){
      if (this.cValue>this.min){
        this.cValue = parseInt(this.cValue) - 1
        console.log('val', this.cValue)
      }
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
.number-class {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 32px;
  width: 100%;
}
.ant-number {
  /* width: 100%; */
  width: v-bind(cWidth);
  text-align: center;
}
.ant-number /deep/ .ant-input-number-handler-wrap {
  display: none;
}
.ant-number /deep/ .ant-input-number-input {
  text-align: center;
}
</style>
