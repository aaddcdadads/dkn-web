<template>
  <div class="input-div">
    <div class="input-title" v-if="title" :style="{ width: labelWidth + 'px' }">
      {{ title }}:
    </div>
    <div class="ant-input-class">
      <a-input-password
        class="hm-ant-input"
        v-model:value="cValue"
        allowClear
        :disabled="disabled"
        :placeholder="placeholder"
        @change="onChange"
        @pressEnter="onPressEnter"
        @blur="onBlur"
        @focus="onFocus"
      >
        <template #prefix>
          <i :class="prefixicon"></i>
          <!-- <user-outlined type="user" /> -->
        </template>
        <template #suffix>
          <i :class="suffixicon"></i>
        </template>
      </a-input-password>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntInputPassword",
  props: {
    /**
     * @model
     * @model
     */
    value: {
      type: String,
    },
    /**
     * 前缀图标
     * @type Icon
     */
    prefixicon: {
      type: String,
    },
    /**
     * 后缀图标
     * @type Icon
     *
     */
    suffixicon: {
      type: String,
    },

    /**
     * 标题
     */
    title: {
      type: String,
      default: "密码",
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 输入框宽度
     */
    width: {
      type: String,
      default: "200",
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number,
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: "请输入提示文字",
    },
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
  },
  mounted() {
    this.cValue = this.value;
    this.cWidth = this.getCssUnit(this.width);
  },
  data() {
    return {
      cValue: "",
      cWidth: "200px",
    };
  },
  methods: {
    onBlur: function (e) {
      console.log(e, "离焦");
      this.$emit("blur", e);
    },
    onFocus: function (e) {
      console.log(e, "聚焦");
      this.$emit("onFocus", e);
    },
    onChange: function (e) {
      console.log("onChange: ", e);
      this.$emit("update:value", this.cValue);
      this.$emit("change", e);
    },
    onPressEnter: function (e) {
      this.$emit("pressEnter", e);
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
.input-div {
  position: relative;
  display: flex;
  /* justify-content: space-evenly; */
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.input-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.ant-input-class {
  /* width: 100%; */
  width: v-bind(cWidth);
  max-width: 80vw;
}
</style>