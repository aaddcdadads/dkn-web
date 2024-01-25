<template>
  <Timeline :theme="theme">
    <timeline-title>{{ title }}</timeline-title>
    <timeline-item
      v-for="item in contentList"
      :key="item.key"
      :bg-color="item.bgColor"
      :line-color="item.lineColor"
      :font-color="item.fontColor"
      :icon-size="item.iconSize"
    >
      {{ item.content }}
    </timeline-item>
    <!-- <timeline-item
      v-for="item in contentList"
      :key="item.key"
      :bg-color="src==null ? item.bgColor:undefined"
      :line-color="src==null ? item.lineColor:undefined"
      :font-color="src==null ? item.fontColor:undefined"
      :icon-size="src==null ? item.iconSize:undefined"
    >
      <template #others>
        <img
          :src="item.src"
          :style="item.style"
        />
      </template>
      {{ item.content }}
    </timeline-item> -->
  </Timeline>
</template>

<script>
import { Timeline, TimelineTitle, TimelineItem } from "vue3-cute-component";
import "vue3-cute-component/dist/style.css";
export default {
  name: "HmTimelinePro",
  components: { Timeline, TimelineTitle, TimelineItem },
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "2022",
    },
    /**
     * 主题颜色
     */
    theme: {
      type: String,
      default: "#9dd8e0",
    },
    /**
     * 数据
     * @model
     */
    contentList: {
      type: Array,
      default: function () {
        return [
          {
            key: 1,
            content: "祝大家虎年大吉",
            bgColor: "#9dd8e0",
            lineColor: "#9dd8e0",
            fontColor: "#e166ab",
            iconSize: "small",
          },
          {
            key: 2,
            content: "虎虎生威",
            bgColor: "#ffffff",
            lineColor: "#e6b6b0",
            fontColor: "#37414a",
            iconSize: "medium",
          },
          {
            key: 3,
            content: "用例",
            bgColor: "#f2d7e1",
            lineColor: "#f2d7e1",
            fontColor: "#37414a",
            iconSize: "large",
          },
          // {
          //   key: 4,
          //   content: "插入图片",
          //   bgColor: "",
          //   lineColor: "",
          //   fontColor: "",
          //   iconSize: "",
          //   src: "https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png",
          //   style: {
          //     width: "20px",
          //   }
          // }
        ];
      },
    },
  },
  data() {
    return {
      cTitle: "0",
      cContentList: [
        {
          key: 1,
          content: "添加级别",
        },
        {
          key: 2,
          content: "删除",
        },
        {
          key: 3,
          content: "重命名",
        },
      ],
    };
  },
  watch: {
    title(value) {
      this.cTitle = value;
    },
    contentList(value) {
      this.cContentList = value;
    },
    // src(value) {
    //   this.cSrc = value;
    // },
    // style(value) {
    //   this.cStyle = value;
    // }
  },
  mounted() {
    this.cTitle = this.title;
    this.cContentList = this.contentList;
    // this.cSrc = this.src;
    // this.cStyle = this.style;
  },
  methods: {},
};
</script>
<style scoped>
</style>
