<template>
  <div class="page-tag">
    <div class="tag-title" v-if="title" :style="{ width: labelWidth + 'px' }">
      {{ titleVal }}:
    </div>
    <div>
      <a-tag
        :closable="closable"
        :color="color"
        :visible="cVisible"
        v-for="(item, index) in tagList"
        :key="index"
        @close="onColor(item, index)"
        @change="onChange"
      >
        {{ item.value }}
      </a-tag>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntTag",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "标题",
    },
    /**
     * 数据内容
     */
    ctagList: {
      type: Array,
      default: function () {
        return [
          {
            value: "周星星1",
            id: 1,
            title: "sadda",
          },
          {
            value: "周星星2",
          },
          {
            value: "周星星3",
          },
          {
            value: "周星星4",
          },
          {
            value: "周星星5",
          },
        ];
      },
    },
    /**
     * 可关闭
     */
    closable: {
      type: Boolean,
      default: true,
    },
    /**
     * 标签颜色
     * @type Color
     */
    color: {
      type: String,
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number,
    },
    /**
     * 是否显示
     */
    visible: {
      type: Boolean,
      default: true,
    },
  },
  watch: {
    visible(value) {
      this.cVisible = value;
    },
    ctagList(value) {
      this.tagList = value;
    },
    title(value) {
      this.titleVal = value;
    },
  },
  data() {
    return {
      cVisible: false,
      tagList: [
        {
          value: "周星星1",
          id: 1,
        },
        {
          value: "周星星2",
        },
        {
          value: "周星星3",
        },
        {
          value: "周星星4",
        },
        {
          value: "周星星5",
        },
      ],
      titleVal: "",
    };
  },
  mounted() {
    this.titleVal = this.title;
    this.tagList = this.ctagList;
    this.titleVal = this.title;
    this.cVisible = this.visible;
  },
  methods: {
    onColor: function (item, index) {
      this.tagList = this.tagList.filter((tag) => tag !== item);
      this.$emit("close", item, index);
    },
    onChange: function (checked) {
      this.$emit("change", checked);
    },
  },
};
</script>
<style scoped>
.page-tag {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.tag-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
</style>
