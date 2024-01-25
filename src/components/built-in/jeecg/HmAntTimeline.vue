<template>
  <a-timeline :mode="mode">
    <div>
      <a-timeline-item :color="color" v-for="item in item" :key="item.key">{{
        item.name
      }}</a-timeline-item>
    </div>
  </a-timeline>
</template>

<script>
export default {
  name: "HmAntTimeline",
  props: {
    /**
     * 自定义内容
     * @model
     */
    val: {
      type: Array,
      default: function () {
        return [
          "Solve initial network problems 2015-09-01",
          "Technical testing 2015-09-01",
          "Network problems being solved 2015-09-01",
          "Network problems being solved 2015-09-01",
        ];
      },
    },
    /**
     * 类型
     * @type Enum
     * @default left
     * @options ["left","alternate","right"]
     */
    mode: {
      type: String,
    },
    /**
     * 圆圈颜色
     * @type Color
     */
    color: {
      type: String,
      default: "blue",
    },
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    item() {
      let itemArr = [];
      for (let i = 0; i < this.val.length; i++) {
        itemArr.push({ key: i, name: this.val[i] });
      }
      console.log("itemArr", itemArr);
      return itemArr;
    },
  },
};
</script>
<style scoped>
</style>
