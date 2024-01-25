<template>
  <div class="hm-modal">
    <a-modal
      :title="title"
      :visible="cVisible"
      :width="cWidth"
      :cancel-text="cancelText"
      :ok-text="okText"
      :okType="okType"
      :destroyOnClose="destroyOnClose"
      :closable="closable"
      :mask="mask"
      :bodyStyle="{
				height: cHeight,
        padding: '24px'
			}"
      :ok-button-props="{
        style: okButtonBoole?'':{ 'display' : 'none'}
      }"
      :cancel-button-props="{
        style: cancelButtonProps?'':{ 'display' : 'none'}
      }"
      :footer="okButtonBoole||cancelButtonProps ?undefined:null"
      :zIndex="cZIndex"
      :style="style"
      @ok="handleOk"
      @cancel="handleCancel"
      @afterClose="afterClose"
    >
      <div v-if="cVisible">
        <slot />
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "HmModal",
  components: {},
  props: {
    /**
     * 对话框标题
     */
    title: {
      type: String,
      default: "对话框"
    },
    /**
     * 是否显示遮罩
     */
    mask: {
      type: Boolean,
      default: true
    },
    /**
     * 是否可见
     * @model
     */
    visible: {
      type: Boolean,
      default: true
    },
    /**
     * 关闭时销毁 Modal 里的子元素
     */
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    /**
     * 显示关闭按钮
     */
    closable: {
      type: Boolean,
      default: false
    },
    /**
     * 确认按钮文字
     */
    okText: {
      type: String,
      default: "确定"
    },
    /**
     * 显示确认按钮
     */
    okButtonBoole: {
      type: Boolean,
      default: true
    },
    /**
     * 确认按钮类型
     * @type Enum
     * @default primary
     * @options ["", "primary", "dashed", "danger", "link"]
     */
    okType: {
      type: String
    },
    /**
     * 取消按钮文字
     */
    cancelText: {
      type: String,
      default: "取消"
    },
    /**
     * 显示取消按钮
     */
    cancelButtonProps: {
      type: Boolean,
      default: true
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "520px"
    },
    /**
     * 层级
     */
    zIndex: {
      type: Number,
      default: 1000
    },
    /**
     * 内容高度
     */
    height: {
      type: String,
      default: "320px"
    },
    /**
     * 自动关闭
     */
    autoClose: {
      type: Boolean,
      default: true
    },
    /**
     * 设置浮层样式
     */
    style: {
      type: Object,
      default: function () {
        return {
            top: '100px'
        }
      },
    },
  },
  data() {
    return {
      cWidth: "520px",
      cHeight: "320px",
      cVisible: false,
      cZIndex: 1000
    };
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value);
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    visible(value) {
      this.cVisible = !!value;
    },
    zIndex(val) {
      this.cZIndex = val;
    }
  },
  computed: {},
  mounted() {
    let self = this;
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cZIndex = this.zIndex;
    self.cVisible = !!self.visible;
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    handleOk(e) {
      if (this.autoClose) {
        this.cVisible = false;
        this.$emit("update:visible", this.cVisible);
      }
      this.$emit("ok", e);
    },
    handleCancel(e) {
      if (this.autoClose) {
        this.cVisible = false;
        this.$emit("update:visible", this.cVisible);
      }
      this.$emit("cancel", e);
    },
    afterClose(e) {
      this.$emit("after-close", e);
    }
  }
};
</script>

<style scoped>
.hm-modal {
  min-width: 100px;
  width: 100%;
  min-height: 100px;
  height: 1px;
  height: 100%;
}

.hm-modal /deep/ .ant-modal .ant-modal-body {
  padding: 24px !important;
}

.modal-slot {
  min-height: 200px;
}
</style>
