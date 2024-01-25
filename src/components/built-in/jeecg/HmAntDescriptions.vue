<template>
  <a-descriptions
    :title="title"
    :bordered="bordered"
    :column="column"
    :size="size"
    :layout="layout"
    :colon="colon"
  >
    <a-descriptions-item
      v-for="(item,index) in data"
      :key="index"
      :label="item.label"
      :span="itemSpan"
    >{{item.value}}</a-descriptions-item>
  </a-descriptions>
</template>

<script>
export default {
  name: "HmAntDescriptions",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "title"
    },
    /**
     * 数据
     */
    data: {
      type: Array,
      default: function() {
        return [
          { label: "label", value: "label" },
          { label: "telephone", value: "1810000000" },
          { label: "live", value: "Hangzhou, Zhejiang" },
          { label: "remark", value: "empty" },
          {
            label: "address",
            value:
              "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China"
          },
          {
            label: "address222",
            value:
              "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China"
          }
        ];
      }
    },
    /**
     * 列表大小
     */
    size: {
      type: String,
      default: "default"
    },
    /**
     * 列的数量
     */
    span: {
      type: Number,
      default: 1
    },
    /**
     * 边框
     */
    bordered: {
      type: Boolean,
      default: true
    },
    /**
     * 一行的数量
     */
    column: {
      type: Number,
      default: 3
    },

    /**
     * 描述布局
     */
    layout: {
      type: String,
      default: "horizontal"
    }
  },
  data() {
    return {
      itemSpan: undefined,
    };
  },
  created() {
    this.itemSpan = this.span;
  },
  methods: {}
};
</script>
<style scoped>
</style>
