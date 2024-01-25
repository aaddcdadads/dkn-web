<template>
  <a-drawer
    :placement="placement"
    :closable="closable"
    v-model:visible="cVisible"
    :after-visible-change="afterVisibleChange"
    :destroy-on-close="destroyOnClose"
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
    :get-container="getContainer(getContainerClass)"
    :mask-closable="maskClosable"
    @close="onClose"
  >
    <!-- 设置后抽屉直接挂载到 DOM 上，你可以通过该 handle 控制抽屉打开关闭 -->
    <template #handle></template>
    <!-- 标题 -->
    <template #title>
      <slot name="title">
        <span>{{ title }}</span>
      </slot>
    </template>
    <slot name="content">{{ content }}</slot>
  </a-drawer>
</template>
<script>
export default {
  name: "HmAntDrawer",
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
     * 抽屉的方向
     * @type Enum
     * @default right
     * @options ["left","right","top","bottom"]
     */
    placement: {
      type: String,
      default: "right",
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
      default: function () {
        return {};
      },
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
      default: function () {
        return {
          position: "absolute",
        };
      },
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
    /**
     * 指定 Drawer 挂载的 HTML 节点
     */
    getContainerClass: {
      type: String,
      default: "body",
    },
    /**
     * 点击蒙层是否允许关闭
     */
    maskClosable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cVisible: false,
    };
  },
  watch: {
    visible(value) {
      this.cVisible = value;
    },
  },
  mounted() {
    this.cVisible = this.visible;
  },
  methods: {
    showDrawer() {
      this.cVisible = true;
    },
    closeDrawer() {
      this.cVisible = false;
    },
    // 点击遮罩层或右上角叉或取消按钮的回调
    onClose: function (e) {
      this.$emit("close", e);
    },
    // 获取指定Dom节点
    getContainer(e) {
      let self = this;
      let UserCSS = self.getContainerClass || e;
      let DOM = false;
      let defaultCSS = ".ele-wrapper-";
      if (!UserCSS || UserCSS == "body") {
        return DOM;
      }else{
        DOM = /^[.#]/.test(UserCSS) ? UserCSS : defaultCSS + UserCSS;
      }
      return DOM;
    },
    // 切换抽屉时动画结束后的回调
    afterVisibleChange(e) {
      this.$emit("change", e);
    },
  },
};
</script>

<style>
</style>