<template>
  <a-popover
    :placement="placement"
    :mouseEnterDelay="mouseEnterDelay"
    :mouseLeaveDelay="mouseLeaveDelay"
  >
    <template #content>
      <div v-for="item in contentList" :key="item.key">
        <a @click="hide">{{item.value}}</a>
      </div>
    </template>
    <a-button type="link" style="color: #BFBFBF">
      <template #icon>
        <EllipsisOutlined />
      </template>
    </a-button>
  </a-popover>
</template>

<script>
import { EllipsisOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    EllipsisOutlined
  },
  name: "HmAntBubbleTab",
  props: {
    /**
     * 数据
     * @model
     */
    contentList: {
      type: Array,
      default: function() {
        return [
          {
            key: 1,
            value: "添加级别"
          },
          {
            key: 2,
            value: "删除"
          },
          {
            key: 3,
            value: "重命名"
          }
        ];
      }
    },
    /**
     * 气泡框位置
     * @type Enum
     * @default bottom
     * @options ["top","left","right","bottom","topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]
     */
    placement: {
      type: String
    },
    /**
     * 触发事件
     * @type Enum
     * @default
     * @options ["显示延时","隐藏延时"]
     */
    event: {
      type: String
    }
  },

  data() {
    return {
      titleVal: "title",
      contentVal: "content",
      event: "",
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      cContentList: [
        {
          key: 1,
          value: "添加级别"
        },
        {
          key: 2,
          value: "删除"
        },
        {
          key: 3,
          value: "重命名"
        }
      ]
    };
  },
  watch: {
    contentList(value) {
      this.cContentList = value;
    },
    event(val) {
      this.event = val;
      if (val == "显示延时") {
        this.mouseEnterDelay = 0;
      } else {
        this.mouseLeaveDelay = 0.1;
      }
    }
  },
  mounted() {
    this.cContentList = this.contentList;
  },
  methods: {
    click: function() {
      console.log("触发点击事件");
      this.$emit("click");
    }
  }
};
</script>

<style scoped>
</style>