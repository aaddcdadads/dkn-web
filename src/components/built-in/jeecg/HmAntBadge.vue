<template>
  <a-badge
    :color="color"
    :count="count"
    :overflowCount="overflowCount"
    class="badge_class"
    @change="onChange"
  >
    <a class="head-example">
      <slot/>
    </a>
  </a-badge>
</template>

<script>
export default {
  name: "HmAntBadge",
  props: {
    /**
     * 类型
     */
    dot: {
      type: Boolean,
      default: false,
    },
    /**
     * 默认值
     * @model
     */
    count: {
      type: Number,
      default: 5,
    },
    /**
     * 封顶数值
     */
    overflowCount: {
      type: Number,
      default: 99,
    },
    /**
     * 圆点颜色
     * @type Color
     */
    color: {
      type: String,
    },
    /**
     * 背景颜色
     * @type Color
     */
    backgroundColor: {
      type: String,
      default: "#eee"
    }
  },
  data() {
    return {
      cBackgroundColor: "#eee"
    };
  },
  watch: {
    backgroundColor(value) {
      this.cBackgroundColor = value;
    },
  },
  mounted() {
    this.cBackgroundColor = this.backgroundColor;
  },
  methods: {
    onChange: function (e) {
      this.$emit("change", e);
    },
  },
};
</script>
<style scoped>
.head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: v-bind(cBackgroundColor);
  display: inline-block;
}
</style>
