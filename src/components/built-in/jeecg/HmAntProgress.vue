<template>
  <div class="progress-class">
    <div class="progress-title">{{ title }}:</div>
    <a-progress
      :type="type"
      :percent="percent"
      :gap-position="gapPosition"
      :stroke-color="strokeColor"
      :stroke-width="strokeWidth"
      class="ant-class"
    >
    </a-progress>
  </div>
</template>

<script>
export default {
  name: "HmAntProgress",
  props: {
    /**
     * 当前值
     * @model
     */
    percent: {
      type: Number,
      default: 30,
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "进度条",
    },
    /**
     * 类型
     * @type Enum
     * @default line
     * @options ["line","circle","dashboard"]
     */
    type: {
      type: String,
    },
    /**
     *线宽
     */
    strokeWidth: {
      type: Number,
      default: 10,
    },
    /**
     * 颜色
     * @type Color
     */
    strokeColor: {
      type: String,
      default: "green",
    },
    /**
     * 圆形缺口位置
     * @type Enum
     * @default top
     * @options ["top","bottom","left","right"]
     */
    gapPosition: {
      type: String,
      default: "top",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.progress-class {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 300px;
  width: 100%;
}
.progress-title {
  position: relative;
  min-width: 100px;
  max-width: 150px;
  text-align: right;
  margin-right: 20px;
}
.ant-class {
  width: 200px;
  min-width: 100%;
}
</style>