<template>
  <a-button @click="click">改变数据</a-button>
  <div class="erGraphDemo1">
    <HmAntvX6LogicFlow></HmAntvX6LogicFlow>
  </div>
  <div class="erGraphDemo2">
    <HmAntvX6LogicFlow ref="bpmn" :data="bpmn.data" :width="bpmn.width" :height="bpmn.height" @cellClick="onCellClick"
      @cellDblclick="onCellDblclick" @cellContextmenu="onCellContextmenu" @edgeMoved="onEdgeMoved"
      @nodeMoved="onNodeMoved"></HmAntvX6LogicFlow>
  </div>
</template>
  
<script>
import HmAntvX6LogicFlow from '@/components/built-in/jeecg/antv-x6-vue3/HmAntvX6LogicFlow.vue'

export default {
  components: {
    HmAntvX6LogicFlow
  },
  data() {
    return {
      bpmn: {
        width: 500,
        height: 500,
        data: [
          
        ]
      }
    }
  },
  methods: {
    click() {
      this.bpmn.data =  [
          {
            "id": "1",
            "shape": "INPUT",
            "position": {
              "x": 50,
              "y": 180
            },
            "label": "节点1",
          },
          {
            "id": "2",
            "shape": "AGG",
            "position": {
              "x": 300,
              "y": 180
            },
            "label": "节点2",
          },
          {
            "id": "edge-0",
            "shape": "bpmn-edge",
            "source": "1",
            "target": "2"
          },
        ]
    },
    onCellClick(e, x, y, cell, view) {
      console.log("单击事件", e, x, y, cell, view)
    },
    onCellDblclick(e, x, y, cell, view) {
      console.log("双击事件", e, x, y, cell, view)
    },
    onCellContextmenu(e, x, y, cell, view) {
      console.log("右键事件", e, x, y, cell, view)
    },
    onEdgeMoved(e, x, y, view) {
      console.log("移动边事件", e, x, y, view)
    },
    onNodeMoved(e, x, y, node, view) {
      console.log("移动节点事件", e, x, y, node, view)
    }
  }

}
</script>
  
<style scoped>
.erGraphDemo1 {
  float: left;
  width: 50%;
  height: 100vh;
}

.erGraphDemo2 {
  float: right;
  width: 50%;
  height: 100vh;
}
</style>
  