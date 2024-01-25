<template>
  <div>
    <a-button type="primary" @click="showDrawer">Open</a-button>
    <a-drawer
      :title="title"
      :placement="placement"
      :closable="closable"
      v-model:visible="cVisible"
      :after-visible-change="afterVisibleChange"
      :destory-on-close="destroyOnClose"
      :mask="mask"
      :mask-style="maskStyle"
      :wrap-class-name="wrapClassName"
      :wrap-style="wrapStyle"
      :drawer-style="drawerStyle"
      :header-style="headerStyle"
      :body-style="bodyStyle"
      :width="width"
      :height="height"
      :z-index="zIndex"
      :keyboard="keyboard"
      @close="onClose"
    >
      <!-- 设置后抽屉直接挂载到 DOM 上，你可以通过该 handle 控制抽屉打开关闭 -->
      <template #handle></template>
      <!-- 标题 -->
      <template #title><smile-outlined /></template>
      {{ content }}
    </a-drawer>
  </div>
</template>

<script>
import { SmileOutlined } from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    SmileOutlined,
  },
  data() {
    return {
      cVisible: false,
    };
  },
  watch: {
    visible(value) {
      this.cVisible = value;
      console.log("value", value);
    },
  },
  props: {
    /**
     * 内容
     */
    content: {
      type: String,
      default: "1234123456456456",
    },
    /**
     *是否显示右上角的关闭按钮
     */
    closable: {
      type: Boolean,
      default: true,
    },
    /**
     * Drawer 是否可见
     */
    visible: {
      type: Boolean,
      default: false,
    },
    /**
     *抽屉的方向
     */
    placement: {
      type: String,
      default: "right",
    },
    /**
     * 切换抽屉时动画结束后的回调
     */
    afterVisibleChange: {
      type: Function,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "这是标题",
    },
    /**
     * 关闭时销毁 Drawer 里的子元素
     */
    destroyOnClose: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否展示遮罩
     */
    mask: {
      type: Boolean,
      default: true,
    },
    /**
     * 遮罩样式
     */
    maskStyle: {
      type: Object,
    },
    /**
     * 对话框外层容器的类名
     */
    wrapClassName: {
      type: String,
    },
    /**
     * 可用于设置 Drawer 最外层容器的样式
     */
    wrapStyle: {
      type: Object,
    },
    /**
     * 用于设置 Drawer 弹出层的样式
     */
    drawerStyle: {
      type: Object,
    },
    /**
     * 用于设置 Drawer 头部的样式
     */
    headerStyle: {
      type: Object,
    },
    /**
     * 可用于设置 Drawer 内容部分的样式
     */
    bodyStyle: {
      type: Object,
    },
    /**
     * 宽度
     */
    width: {
      type: [String, Number],
      default: "256",
    },
    /**
     * 高度, 在 placement 为 top 或 bottom 时使用
     */
    height: {
      type: [String, Number],
      default: "256",
    },
    /**
     * 设置 Drawer 的 z-index
     */
    zIndex: {
      type: Number,
      default: 1000,
    },
    /**
     * 是否支持键盘 esc 关闭
     */
    keyboard: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    showDrawer() {
      this.cVisible = true;
    },
    onClose: function (e) {
      this.$emit("close", e);
    },
  },
});
</script>

<style>
</style>