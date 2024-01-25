<template>
  <div class="switch-div">
    <div class="switch-title" v-if="title" :style="{width: labelWidth + 'px'}">{{ title }}:</div>
    <div class="switch-class">
      <a-slider
        :marks="marks"
        :max="cMax"
        :min="cMin"
        v-model:value="cValue"
        :vertical="vertical"
        :tipFormatter="tipFormatter"
        :disabled="disabled"
        @change="onChange"
        @afterChange="onAfterChange"
      >
      </a-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntSlider",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default:'滑动输入条'
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 方向
     */
    vertical: {
      type: Boolean,
    },
    /**
     * 最大值
     */
    max: {
      type: Number,
      default: 100,
    },
    /**
     * 最小值
     */
    min: {
      type: Number,
      default: 0,
    },
    /**
     * 默认值
     * @model
     */
    value: {
      type: Number,
      default: 0,
    },
    /**
     * 刻度标记
     */
    marks: {
      type: Object,
    },
    /**
     * Tooltip值
     */
    tipFormatter: {
      type: Function,
    },
    /**
     * 标题宽度
     */
    labelWidth:{
      type:Number
    }
  },
  watch: {
    value(val) {
      this.cValue = val;
    },
    max(val) {
      this.cMax = val;
    },
    min(val) {
      this.cMin = val;
    },
  },
  data() {
    return {
      cValue: 0,
      cMax:100,
      cMin:0,
    };
  },
  methods: {
    onChange: function (e) {
       this.$emit("update:value", this.cValue);
      this.$emit("change", e);
      this.cValue = e;
    },
    onAfterChange: function (e) {
      this.$emit("afterChange", e);
    },
  },
};
</script>

<style scoped>
.ant-slider {
  min-width: 10vw;
  min-height: 1vw;
}
.switch-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  max-width:100%;
  width: 100%;
}
.switch-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align:left;
  margin-right: 10px;
}
.switch-class {
  position: relative;
  /* width: 100%;
  min-width: 50px;
  max-width: 100px; */
}
</style>