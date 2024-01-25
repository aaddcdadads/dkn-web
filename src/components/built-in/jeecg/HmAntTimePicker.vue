<template>
  <div class="switch-div">
    <div class="switch-title" v-if="title" :style="{width: labelWidth + 'px'}">{{ title }}:</div>
    <div class="switch-class">
      <a-time-picker
        :allowClear="allowClear"
        :format="format"
        :placeholder="placeholder"
        :use12Hours="use12Hours"
        :disabled="disabled"
        v-model:value="cValue"
        @change="onChange"
        @openChange="onOpenChange"
      >
        <slot />
        <!-- 选择框底部显示自定义的内容 -->
        <slot name="addon"></slot>
        <!-- 自定义的选择框后缀图标 -->
        <slot name="suffixIcon"></slot>
        <!-- 自定义的清除图标 -->
        <slot name="clearIcon"></slot>
      </a-time-picker>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "HmAntTimePicker",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "时间选择器"
    },
    /**
     * 当前值
     * @model
     */
    value: {
      type: String,
      default: null
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请选择时间"
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 时间格式
     */
    format: {
      type: String,
      default: "HH:mm:ss"
    },
    /**
     * 12小时制
     */
    use12Hours: {
      type: Boolean,
      default: false
    },
    /**
     * 显示清除按钮
     */
    allowClear: {
      type: Boolean,
      default: true
    },
    /**
     * 输入框宽度
     */
    width: {
      type: String,
      default: "200"
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number
    }
  },
  watch: {
    value(val) {
      if (!val) {
        this.cValue = null;
        return;
      }
      this.cValue = moment(val, this.format);
    },
    open(val) {
      this.cOpen = val;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    }
  },
  mounted() {
    this.cWidth = this.getCssUnit(this.width);
    this.cValue = this.value ? moment(this.value) : moment();
    if (!this.value) {
      this.$emit("update:value", moment().format("HH:mm:ss"));
    }
  },
  data() {
    return {
      cValue: null,
      cOpen: false,
      cWidth: "200px"
    };
  },
  methods: {
    onChange: function(e, timeString) {
      console.log(`onChange: `, e, timeString);
      console.log("this.cValue: ", e);
      this.cValue = e;
      this.$emit("update:value", timeString);
      this.$emit("change", timeString, e);
    },
    onOpenChange: function(e) {
      this.cOpen = !this.cOpen;
      this.$emit("openChange", e);
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
.switch-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.switch-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.switch-class {
  position: relative;
  /* width: 100%;
  min-width: 50px;
  max-width: 100px; */
}

.switch-class /deep/ .ant-time-picker {
  width: v-bind(cWidth);
  max-width: 80vw;
}
</style>

