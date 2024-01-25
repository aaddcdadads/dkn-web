<template>
  <VueDragResize
    :w="cWidth"
    :h="cHeight"
    :minw="cMinWidth"
    :minh="cMinHeight"
    :x="cX"
    :y="cY"
    :z="cZ"
    :isActive="cIsActive"
    :parentW="cParentW"
    :parentH="cParentH"
    :isDraggable="cIsDraggable"
    :isResizable="cIsResizable"
    :parentLimitation="cParentLimitation"
    :snapToGrid="cSnapToGrid"
    :gridX="cGridX"
    :gridY="cGridY"
    :aspectRatio="cAspectRatio"
    :stickSize="cStickSize"
    :sticks="cSticks"
    :axis="cAxis"
    @clicked="onClicked"
    @activated="onActivated"
    @deactivated="onDeactivated"
    @resizing="onResizing"
    @resizestop="onResizestop"
    @dragging="onDragging"
    @dragstop="onDragstop"
  >
    <slot></slot>
  </VueDragResize>
</template>

<script>
import VueDragResize from "vue-drag-resize/src";

export default {
  name: "HmDragResize",
  components: {
    VueDragResize,
  },
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: '200',
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '200',
    },
    /**
     * 最小宽度
     */
    minWidth: {
      type: String,
      default: '100',
    },
    /**
     * 最小高度
     */
    minHeight: {
      type: String,
      default: '100',
    },
    /**
     * 初始x轴位置
     */
    x: {
      type: Number,
      default: 0,
    },
    /**
     * 初始y轴位置
     */
    y: {
      type: Number,
      default: 0,
    },
    /**
     * 初始y轴位置
     */
    z: {
      type: Number,
      default: 9999,
    },
    /**
     * 是否激活
     */
    isActive: {
      type: Boolean,
      default: true,
    },
    /**
     * 父边界宽度
     */
    parentW: {
      type: Number,
      default: 1000,
    },
    /**
     * 父边界高度
     */
    parentH: {
      type: Number,
      default: 700,
    },
    /**
     * 是否可拖动
     */
    isDraggable: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否可调大小
     */
     isResizable: {
      type: Boolean,
      default: true,
    },
    /**
     * 调整范围限制为父级
     */
     parentLimitation: {
      type: Boolean,
      default: false,
    },
    /**
     * 网格吸附
     */
     snapToGrid: {
      type: Boolean,
      default: false,
    },
    /**
     * x轴网格步长
     */
     gridX: {
      type: Number,
      default: 20,
    },
    /**
     * y轴网格步长
     */
     gridY: {
      type: Number,
      default: 20,
    },
    /**
     * 缩放保持比例
     */
     aspectRatio: {
      type: Boolean,
      default: false,
    },
    /**
     * 调整杆尺寸
     */
    stickSize: {
      type: Number,
      default: 12,
    },
    /**
     * 可调整方向
     */
    sticks: {
      type: Array,
      default: function() {
        return [
          'tl', // tl - Top left
          'tm', // tm - Top middle
          'tr', // tr - Top right
          'mr', // mr - Middle right
          'br', // br - Bottom right
          'bm', // bm - Bottom middle
          'bl', // bl - Bottom left
          'ml'// ml - Middle left
        ]
      },
    },
    /**
     * 可拖动的轴
     * @type Enum
     * @default both
     * @options ["x", "y", "both", "none"]
     */
    axis: {
      type: String,
      default: "both"
    },
  },
  data() {
    return {
      cWidth: 200,
      cHeight: 200,
      cMinWidth: 100,
      cMinHeight: 100,
      cX: 0,
      cY: 0,
      cZ: 9999,
      cIsActive: true,
      cParentW: 1000,
      cParentH: 700,
      cIsDraggable: true,
      cIsResizable: true,
      cParentLimitation: false,
      cSnapToGrid: false,
      cGridX: 20,
      cGridY: 20,
      cAspectRatio: false,
      cStickSize: 12,
      cSticks: [
        'tl', // tl - Top left
        'tm', // tm - Top middle
        'tr', // tr - Top right
        'mr', // mr - Middle right
        'br', // br - Bottom right
        'bm', // bm - Bottom middle
        'bl', // bl - Bottom left
        'ml'// ml - Middle left
      ],
      cAxis: "both"
    };
  },
  mounted() {
    this.cWidth = this.width
    this.cHeight = this.height
    this.cMinWidth = this.minWidth
    this.cMinHeight = this.minHeight
    this.cX = this.x
    this.cY = this.y
    this.cZ = this.z
    this.cIsActive = this.isActive
    this.cParentW = this.parentW
    this.cParentH = this.parentH
    this.cIsDraggable = this.isDraggable
    this.cIsResizable = this.isResizable
    this.cParentLimitation = this.parentLimitation
    this.cSnapToGrid = this.snapToGrid
    this.cGridX = this.gridX
    this.cGridY = this.gridY
    this.cAspectRatio = this.aspectRatio
    this.cStickSize = this.stickSize
    this.cSticks = this.sticks
    this.cAxis = this.axis
  },
  watch: {
    width(val) {
      this.cWidth = val
    },
    height(val) {
      this.cHeight = val
    },
    minWidth(val) {
      this.cMinWidth = val
    },
    minHeight(val) {
      this.cMinHeight = val
    },
    x(val) {
      this.cX = val
    },
    y(val) {
      this.cY = val
    },
    z(val) {
      this.cZ = val
    },
    isActive(val) {
      this.cIsActive = val
    },
    parentW(val) {
      this.cParentW = val
    },
    parentH(val) {
      this.cParentH = val
    },
    isDraggable(val) {
      this.cIsDraggable = val
    },
    parentLimitation(val) {
      this.cParentLimitation = val
    },
    snapToGrid(val) {
      this.cSnapToGrid = val
    },
    gridX(val) {
      this.cGridX = val
    },
    gridY(val) {
      this.cGridY = val
    },
    aspectRatio(val) {
      this.cAspectRatio = val
    },
    stickSize(val) {
      this.cStickSize = val
    },
    sticks(val) {
      this.cSticks = val
    },
    axis(val) {
      this.cAxis = val
    },
  },
  methods: {
    onClicked(e) {
      this.$emit("clickHandle", e)
    },
    onActivated() {
      this.$emit("activatedHandle")
    },
    onDeactivated() {
      this.$emit("deactivatedHandle")
    },
    onResizing(e) {
      this.$emit("resizingHandle", e)
    },
    onResizestop(e) {
      this.$emit("resizestopHandle", e)
    },
    onDragging(e) {
      this.$emit("draggingHandle", e)
    },
    onDragstop(e) {
      this.$emit("dragstopHandle", e)
    }
  },
};
</script>

<style lang="less" scoped>
.dragResizeContainer {
  width: 100%;
  height: 100%;
}
</style>