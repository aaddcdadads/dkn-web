<template>
  <div class="grid-stack">
    <div class="grid-stack-item" v-for="(item, index) in list" :key="index">
      <div class="grid-stack-item-content" :gs-x="item.x" :gs-y="item.y" :gs-w="item.w" :gs-h="item.h">
        <div class="grid-slot">
          <slot :name="`grid-slot-${item.key}`">
            <div class="hm-slot" :data-slot-name="`grid-slot-${item.key}`">
              <div class="sortable-list"></div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { GridStack } from 'gridstack';

export default {
  props: {
    /**
     * 数据列
     */
    list: {
      type: Array,
      default: function() {
        return [
          {
            key: 0,
            x: 20,
            y: 20,
            w: 300,
            h: 300
          },{
            key: 1,
            x: 400,
            y: 400,
            w: 300,
            h: 300
          },
        ]
      },
    },
  },
  watch: {
    list: {
      handle: function(val) {
        this.cList = val
        this.grid && this.grid.destroy() 
        this.init()
      },
      deep: true
    }
  },
  data() {
    return {
      grid: null
    }
  },
  mounted() {
    this.cList = this.list
    this.init()
  },
  methods: {
    init() {
      //初始化
      let self = this
      this.grid = GridStack.init();
      this.grid.on('change', self.handleNodesChange);
      this.grid.on('dragstart', self.handleNodesDragstart);
      this.grid.on('dragstop', self.handleNodesDragstop);
      this.grid.on('dropped', self.handleNodesDropped);
      this.grid.on('resizestart', self.handleNodesResizestart);
      this.grid.on('resize', self.handleNodesResize);
      this.grid.on('resizestop', self.handleNodesResizestop);
    },
    handleNodesChange(e, items) {
      this.$emit("handleNodesChange", {e, items})
    },
    handleNodesDragstart(e, el) {
      this.$emit("handleNodesDragstart", {e, el})
    },
    handleNodesDragstop(e, el) {
      this.$emit("handleNodesDragstop", {e, el})
    },
    handleNodesDropped(e, previousWidget, newWidget) {
      this.$emit("handleNodesDropped", {e, previousWidget, newWidget})
    },
    handleNodesResizestart(e, el) {
      this.$emit("handleNodesResizestart", {e, el})
    },
    handleNodesResize(e, el) {
      this.$emit("handleNodesResize", {e, el})
    },
    handleNodesResizestop(e, el) {
      this.$emit("handleNodesResizestop", {e, el})
    },
  }
}
</script>

<style scoped>
@import url('gridstack/dist/gridstack.min.css');
.grid-slot {
  width: 100%;
  height: 100%;
}
</style>