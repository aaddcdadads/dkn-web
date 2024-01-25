<template>
  <div class="textarea-div">
    <div class="textarea-title" v-if="title" :style="{width: labelWidth + 'px'}">{{title}}:</div>
    <a-textarea
      class="ant-textarea"
      v-model:value="cValue"
      :placeholder="placeholder"
      :allowClear="allowClear"
      :showCount="showCount"
      :rows="row"
      :disabled="disabled"
      @change="onChange"
      @pressEnter="pressEnter"
    ></a-textarea>
  </div>
</template>

<script>
export default {
  name: "HmAntTextarea",
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "文本框"
    },
    /**
     * 显示行数
     */
    row: {
      type: Number,
      default: 5
    },
    /**
     * 空值显示
     */
    placeholder: {
      type: String,
      default: "Basic usage"
    },
    /**
     * 删除内容
     */
    allowClear: {
      type: Boolean
    },
    /**
     * 展示字数
     */
    showCount: {
      type: Boolean
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
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
    labelWidth:{
      type:Number,
      default:1000
    }
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
    width(value) {
      this.cWidth = this.getCssUnit(value);
    }
  },
  data() {
    return {
      cValue:"",
      cWidth: "200px"
    };
  },
  mounted() {
    this.cValue = this.value;
    this.cWidth = this.getCssUnit(this.width);
  },
  methods: {
     onChange: function(e) {
      console.log("onChange: ", e);

      this.$emit("update:value", this.cValue);
      this.$emit("change", e);
    },
    pressEnter: function(e) {
      this.$emit("update:value", this.cValue);
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
.textarea-div {
  position: relative;
  display: flex;
  min-width: 100px;
  width: 100%;
}
.textarea-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
.ant-textarea {
  /* width: 100%; */
  width: v-bind(cWidth);
  max-width: 80vw;
}
</style>