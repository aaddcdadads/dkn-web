<template>
  <codemirror
    v-model="cValue"
    :autofocus="autofocus"
    :disabled="disabled	"
    :indent-with-tab="indentWithTab"
    :tab-size="tabSize"
    :placeholder="placeholder"
    :style="style"
    :autoDestroy="autoDestroy"
    @change="onChange"
    @update="onUpdate"
    @blur="onBlur"
    @focus="onFocus"
    @ready="onReady"
  />
</template>

<script>
import { Codemirror } from "vue-codemirror";
export default {
  name: "HmCodeMirror",
  components: {
    Codemirror,
  },
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String,
    },
    /**
     * 自动聚焦
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否Tab缩进
     */
    indentWithTab: {
      type: Boolean,
      default: true,
    },
    /**
     * 缩进大小
     */
     tabSize: {
      type: Number,
      default: 2,
    },
    /**
     * 提示文字
     */
     placeholder: {
      type: String,
      default: "Code goes here...",
    },
    /**
     * 编辑器样式
     */
     style: {
      type: Object,
      default: function () {
        return {
          height: '400px'
        };
      },
    },
    /**
     * 自动销毁实例
     */
     autoDestroy: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
      cValue: "",
    };
  },
  watch: {
    value(value) {
      this.cValue = value;
    },
  },
  mounted() {
    this.cValue = this.value;
  },
  methods: {
    onChange: function(e) {
      console.log("onChange: ", e);
      this.$emit("update:value", this.cValue);
      this.$emit("change", e);
    },
    onUpdate: function(e) {
      console.log("onUpdate: ", e);
      this.$emit("update", e);
    },
    onBlur: function (e) {
      console.log("离焦", e);
      this.$emit("blur", e);
    },
    onFocus: function (e) {
      console.log("聚焦", e);
      this.$emit("onFocus", e);
    },
    onReady: function (e) {
      console.log("onReady", e);
      this.$emit("onFocus", e);
    }
  }
};
</script>
<style scoped></style>
