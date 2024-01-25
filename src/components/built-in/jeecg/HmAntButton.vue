<template>
  <a-button
    :ghost="ghost"
    :shape="shape"
    :size="size"
    :type="type"
    :disabled="disabled"
    v-if="visible && hasPermission(auth)"
    @fakeclick="onClick"
    class="hm-ant-button"
  >
    {{ text }}
    <template #icon>
       <i v-if="!!icon" style="margin:5px;" :class="icon"></i>
    </template>
  </a-button>
</template>

<script>
import { hasPermission } from '/@/utils/util';

export default {
  name: "HmAntButton",
  props: {
    /**
     * 按钮文字
     */
    text: {
      type: String,
      default: '按钮',
    },
     /**
      * 按钮类型
      * @type Enum
      * @options ["", "primary", "dashed", "danger", "link"]
     * 
     */
    type: {
      type: String,
    },
     /**
     * 按钮形状
     * @type Enum
     * @options ["", "circle", "round"]
     */
    shape: {
      type: String
    },
    /**
     * 按钮大小
     * @type Enum
     * @options ["", "small", "large"]
     */
    size: {
      type: String,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 背景透明
     */
    ghost: {
      type: Boolean,
    },
    /**
     * 图标
     * @type Icon
     */
    icon: {
      type: String,
    },
    /**
     * 是否显示
     * @boolean
     */
    visible: {
      type: Boolean,
      default: true
    },
    /**
     * 授权标识
     */
    auth: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      hasPermission,
    };
  },
  methods: {
    onClick: function (e) {
      /**
      * 点击事件
      * @params e
      * @event click
      */
      this.$emit("click", e);
    },
  },
};
</script>
<style scoped>
/* .hm-ant-button {
  width: 100%;
} */
</style>
