<template>
  <a-steps
    class="hm-ant-steps"
    :type="type"
    :current="cCurrent"
    :direction="direction"
    :labelPlacement="labelPlacement"
    :progressDot="progressDot"
    :size="size"
    :status="status"
    :initial="initial"
    @change="change"
  >
    <a-step v-for="item in listValue" :key="item.id">
      <template #title>{{ item.value }}</template>
      <template #description>
        <span>{{ item.describe }}</span>
      </template>
      <template #icon>
        <i :class="`fa ${item.icon}`" @click="stepClick(item)" v-if="item.icon"></i>
      </template>
    </a-step>
  </a-steps>
</template>

<script>
export default {
  name: "HmAntSteps",
  data() {
    return {
      initial: 0,
      status: "process",
      cIconSize: '24px',
      cCurrent: 0,
    };
  },
  props: {
    /**
     * 类型
     * @type Enum
     * @default default
     * @options ["default","navigation"]
     */
    type: {
      type: String,
    },
    /**
     * 方向
     * @type Enum
     * @default horizontal
     * @options ["horizontal","vertical"]
     */
    direction: {
      type: String,
    },
    /**
     * 标题文字
     * @model
     */
    listValue: {
      type: Array,
      default: function() {
        return [
          {
            id: 1,
            value: "Finished",
            describe: "This is a description.",
            icon: "fa-user-circle-o",
          },
          {
            id: 2,
            value: "In Progress",
            describe: "This is a description.",
            icon: "fa-user-circle-o",
          },
          {
            id: 3,
            value: "Waiting",
            describe: "This is a description.",
            icon: "fa-user-circle-o",
          },
        ];
      },
    },

    /**
     * 标签位置
     * @type Enum
     * @default horizontal
     * @options ["horizontal","vertical"]
     */
    labelPlacement: {
      type: String,
    },
    /**
     * 点状步骤条
     */
    progressDot: {
      type: Boolean,
      default: false,
    },
    /**
     * 当前步骤
     * 
     */
    current: {
      type: Number,
      default: 1,
    },
    /**
     * 大小
     * @type Enum
     * @default default
     * @options ["default","small"]
     */
    size: {
      type: String,
    },

    /**
     * 图标大小
     */
    iconSize: {
      type: String,
      default: '24'
    },

  },

  watch: {
    iconSize(value) {
      this.cIconSize = this.getCssUnit(value)
    },
    current(value) {
      this.cCurrent = value
    }
  },

  mounted() {
    this.cIconSize = this.getCssUnit(this.iconSize)
    this.cCurrent = this.current
  },

  methods: {
    /**
     * 步骤图标点击事件
     */
    stepClick: function(list) {
      console.log("步骤条信息：", list)
      this.$emit("stepClick", list);
    },

    change: function(e) {
      this.cCurrent = e
      this.$emit("change", e);
    },

    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  },
};
</script>

<style scoped>
.hm-ant-steps /deep/ .ant-steps-item-icon {
  /* width: 100% !important; */
  margin: 0 auto;
}

.hm-ant-steps /deep/ .ant-steps-item-content {
  display: inline-block !important;
}

/* .hm-ant-steps /deep/ .ant-steps-item-tail {
  margin-left: 50% !important;
} */

.hm-ant-steps /deep/ .ant-steps-icon i::before {
  font-size: v-bind(cIconSize);
}
</style>