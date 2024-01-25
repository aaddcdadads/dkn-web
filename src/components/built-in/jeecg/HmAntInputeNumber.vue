<template>
  <div class="number-class">
    <div class="number-title" v-if="title" :style="{width: labelWidth + 'px'}">{{ title }}:</div>
    <a-input-number
      class="ant-number"
      :defaultValue="defaultValue"
      :max="max"
      :min="min"
      :size="size"
      :step="step"
      :disabled="disabled"
      v-model:value="cvalue"
      @change="onChange"
      @pressEnter="pressEnter"
    ></a-input-number>
  </div>
</template>

<script>
export default {
  name: "HmAntInputeNumber",
  data() {
    return {
      cvalue: "",
      cWidth: "200px"

    };
  },
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: Number
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "数字输入框"
    },
    /**
     * 初始值
     */
    defaultValue: {
      type: Number,
      default: 0
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 数值间隔
     */
    step: {
      type: Number
    },
    /**
     * 最大值
     */
    max: {
      type: Number
    },
    /**
     * 最小值
     */
    min: {
      type: Number
    },
    /**
     * 大小
     * @type Enum
     * @default
     * @options ["large","small"]
     */
    size: {
      type: String
    },
    /**
     * 输入框宽度
     */
    width: {
      type: String,
      default: "50"
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number
    }
  },
  watch: {
    cvalue(value) {
      this.cvalue = value;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    }
  },
  mounted() {
    this.cvalue = this.value;
    this.cWidth = this.getCssUnit(this.width);
  },
  methods: {
    onChange: function(e) {
      this.$emit("update:value", this.cvalue);
      this.$emit("change", e);
    },
    onPressEnter: function(e) {
      this.$emit("pressEnter", e);
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  }
};
</script>

<style scoped>
.number-class {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.number-title {
  position: relative;
  min-width: 75px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.ant-number {
  /* width: 100%; */
  width: v-bind(cWidth);
  max-width: 80vw;
}
</style>