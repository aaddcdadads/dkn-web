<template>
  <div style="margin-top: 30px">
    <a-back-top
      :target="target"
      :visibility-height="visibilityHeight"
      :class="backtopClass"
      @click="onClick"
      ><div v-if="defineTxt" class="ant-back-top-inner">{{ defineTxt }}</div>
      <!-- <template #icon><i class="fa fa-tree"></i></template> -->
      <!-- <i v-else class="fa fa-user"></i> -->
      <i v-else :class="icon"></i>
    </a-back-top>
  </div>
</template>

<script>
const _that = window;
export default {
  name: "HmAntBackTop",
  props: {
    /**
     * 位置
     * @type Enum
     * @default bottomRight
     * @options ["leftBottom","rightBottom"]
     */
    backtopClass: {
      type: String,
    },

    /**
     *文字
     */
    defineTxt: {
      type: String,
      default: "UP",
    },
    /**
     * 图标
     * @ Icon
     */
    icon: {
      type: String,
      //   default: "fa fa-user",
    },
    /**
     * 触发函数
     */
    target: {
      type: Function,
      default: function () {
        return _that;
      },
    },
    /**
     * 触发值
     */
    visibilityHeight: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClick: function (e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style scoped>
.leftBottom {
  position: fixed;
  left: 30px;
}
.rightBottom {
  position: fixed;
  right: 30px;
}
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>