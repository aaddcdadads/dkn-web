<template>
  <a-alert
    :message="message"
    :type="type"
    :show-icon="showIcon"
    :closable="closable"
    :description="description"
    @close="onClose"
    @click="click"
    class="alert-class"
  ></a-alert>
</template>

<script>
export default {
  props: {
    /**
     * 文字
     * @model
     */
    message: {
      type: String,
      default: "Success Text",
    },
    /**
     * 辅助文字
     */
    description: {
      type: String,
      default: "辅助提示辅助提示",
    },
    /**
     * 样式
     * @type Enum
     * @default success
     * @options ["success","info","warning","error"]
     */
    type: {
      type: String,
      default: "success",
    },

    /**
     * 显示辅助图标
     */
    showIcon: {
      type: Boolean,
      default: true,
    },

    /**
     *显示关闭按钮
     */
    closable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    click: function() {
      console.log("点击事件")
      this.$emit("click");
    },

    onClose: function(e) {
      this.$emit("close", e);
    },
  },
};
</script>

<style>
.alert-class {
  width: 100%;
}
</style>