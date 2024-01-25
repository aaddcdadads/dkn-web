<template>
  <div
    class="DragResizeCard"
    :style="{ width: parentW + 'px', height: parentH + 'px' }"
  >
    <vue-drag-resize
      v-for="(component, index) in cDataList"
      :key="index"
      :id="'vueDragResize-' + index"
      :isActive="component.dragResizeProps.isActive"
      :w="component.dragResizeProps.width || 200"
      :h="component.dragResizeProps.height || 200"
      :minw="component.dragResizeProps.minw || 44"
      :minh="component.dragResizeProps.minh || 44"
      :x="component.dragResizeProps.x"
      :y="component.dragResizeProps.y"
      :z="component.dragResizeProps.z"
      :sticks="component.dragResizeProps.sticks"
      :preventActiveBehavior="component.dragResizeProps.preventActiveBehavior"
      :parentScaleX="component.dragResizeProps.parentScaleX"
      :parentScaleY="component.dragResizeProps.parentScaleY"
      :parentW="parentW"
      :parentH="parentH"
      :parentLimitation="
        parentLimitation || component.dragResizeProps.parentLimitation
      "
      :axis="component.dragResizeProps.axis"
      :dragHandle="component.dragResizeProps.dragHandle"
      :dragCancel="component.dragResizeProps.dragCancel"
      @clicked="onClick"
      @activated="onActivated"
      @resizing="onResize"
      @resizestop="onResizestop"
      @dragging="onDragging"
      @dragstop="onDragstop"
    >
      <div class="DragResizeCard-container">
        <component :is="component.name" v-bind="component.props"></component>
      </div>
    </vue-drag-resize>
  </div>
</template>
<script>
import VueDragResize from "vue-drag-resize/src";
import HmAntTable from "@/components/built-in/jeecg/HmAntTable.vue";
import HmBgCard from "@/components/built-in/layout/HmBgCard.vue";
export default {
  name: "",
  components: {
    VueDragResize,
    HmAntTable,
    HmBgCard,
  },
  props: {
    /**
     * 禁止超出父级
     */
    parentLimitation: {
      type: Boolean,
      default: true,
    },
    /**
     * 父级宽度
     */
    parentW: {
      type: Number,
      default: 800,
    },
    /**
     * 父级高度
     */
    parentH: {
      type: Number,
      default: 800,
    },
    /**
     * 数据列表
     */
    dataList: {
      type: Array,
      default: function () {
        return [
          {
            dragResizeProps: {
              width: 400,
              height: 200,
              isActive: true,
              x: 0,
              y: 0,
              z: 0,
            },
            name: "HmAntTable",
            props: {},
          },
          {
            dragResizeProps: {
              width: 200,
              height: 200,
              isActive: true,
              x: 400,
            },
            name: "HmBgCard",
            props: {
              width: "100%",
              height: "100%",
              backgroundColor: "#ff6700",
            },
          },
        ];
      },
    },
  },
  watch: {
    dataList: {
      handler: function (value, oldValue) {
        this.cDataList = value;
      },
      deep: true,
    },
  },
  mounted() {
    this.cDataList = this.dataList;
  },
  data() {
    return {
      cDataList: [],
    };
  },
  methods: {
    //组件点击事件
    onClick(e) {
      console.log("onClick", e);
      this.$emit("onClick", e);
    },
    //点击组件外事件
    onActivated(e) {
      console.log("onActivated", e);
      this.$emit("onActivated", e);
    },
    //缩放时事件
    onResize(e) {
      console.log("onResize", e);
      this.$emit("onResize", e);
    },
    //缩放结束
    onResizestop(e) {
      console.log("onResizestop", e);
      this.$emit("onResizestop", e);
    },
    //拖拽时事件
    onDragging(e) {
      console.log("onDragging", e);
      this.$emit("onDragging", e);
    },
    //拖拽结束事件
    onDragstop(e) {
      console.log("onDragstop", e);
      this.$emit("onDragstop", e);
    },
  },
};
</script>
<style lang="less" scoped>
.DragResizeCard {
  // border: 1px dashed #ececec66;
  &-container {
    width: 100%;
    height: 100%;
    overflow: auto;
    word-break: break-all;
    /deep/ .table-div {
      //表格 使用的是align-items:center;
      align-items: flex-start;
    }
  }
}
</style>