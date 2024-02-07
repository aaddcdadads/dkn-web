<template>
  <a-button @click="click">改变数据</a-button>
  <div class="erGraphDemo1">
    <HmAntvX6TopologyGraph></HmAntvX6TopologyGraph>
  </div>
  <div class="erGraphDemo2">
    <HmAntvX6TopologyGraph ref="bpmn" :data="bpmn.data" :width="bpmn.width" :height="bpmn.height" :edgeStyle="bpmn.edgeStyle"
      @deleteTopic="onDeleteTopic" @addTopic="onDddTopic"></HmAntvX6TopologyGraph>
  </div>
</template>
  
<script>
import HmAntvX6TopologyGraph from '@/components/built-in/jeecg/antv-x6-vue3/HmAntvX6TopologyGraph.vue'

export default {
  components: {
    HmAntvX6TopologyGraph
  },
  data() {
    return {
      bpmn: {
        width: 1500,
        height: 1500,
      }
    }
  },
  methods: {
    click() {
      this.bpmn.data = [
          {
            "id": "1",
            "shape": "switch",
            "width": 50,
            "height": 60,
            "position": {
              "x": 50,
              "y": 260
            },
            "label": "A服务器区1",
          },
          {
            "id": "2",
            "shape": "server",
            "width": 50,
            "height": 60,
            "position": {
              "x": 50,
              "y": 490
            },
            "label": "B服务器区1",
          },
          {
            "id": "3",
            "shape": "pc",
            "width": 50,
            "height": 60,
            "position": {
              "x": 250,
              "y": 350
            },
            "label": "DMZ交换机1",
          },
          {
            "id": "4",
            "shape": "pc",
            "width": 50,
            "height": 60,
            "position": {
              "x": 570,
              "y": 210
            },
            "label": "出口路由",
          },
          {
            "id": "5",
            "shape": "switch",
            "width": 50,
            "height": 60,
            "position": {
              "x": 570,
              "y": 480
            },
            "label": "区域A交换机",
          },
          {
            "id": "6",
            "shape": "switch",
            "width": 50,
            "height": 60,
            "position": {
              "x": 570,
              "y": 610
            },
            "label": "区域A交换机",
          },
          {
            "id": "7",
            "shape": "switch",
            "width": 50,
            "height": 60,
            "position": {
              "x": 780,
              "y": 350
            },
            "label": "区域B交换机",
          },
          {
            "id": "8",
            "shape": "fireWall",
            "width": 50,
            "height": 60,
            "position": {
              "x": 380,
              "y": 350
            },
            "label": "防火墙",
          },
          {
            "id": "9",
            "shape": "fireWall",
            "width": 50,
            "height": 60,
            "position": {
              "x": 570,
              "y": 350 
            },
            "label": "出口防火墙",
          },
          {
            "id": "10",
            "shape": "pc",
            "width": 50,
            "height": 60,
            "position": {
              "x": 940,
              "y": 350
            },
          },
          {
            "id": "11",
            "shape": "pc",
            "width": 50,
            "height": 60,
            "position": {
              "x": 570,
              "y": 730
            },
          },
          {
            "id": "12",
            "shape": "network_cloud",
            "width": 50,
            "height": 60,
            "position": {
              "x": 570,
              "y": 50
            },
            "label": "广域网",
          },
          {
            "id": "13",
            "shape": "bpmn-edge",
            "source": "1",
            "target": "3",
          },
          {
            "id": "14",
            "shape": "bpmn-edge",
            "source": "1",
            "target": "3",
          },
          {
            "id": "15",
            "shape": "bpmn-edge",
            "source": "2",
            "target": "3",
          },
          {
            "id": "16",
            "shape": "bpmn-edge",
            "source": "3",
            "target": "8",
          },
          {
            "id": "17",
            "shape": "bpmn-edge",
            "source": "8",
            "target": "9",
            "label":"networkId-2\n峰值宽带：948Mbps\n峰值并发会话：23948"
          },
          {
            "id": "18",
            "shape": "bpmn-edge",
            "source": "9",
            "target": "7",
          },
          {
            "id": "19",
            "shape": "bpmn-edge",
            "source": "7",
            "target": "10",
          },
          {
            "id": "20",
            "shape": "bpmn-edge",
            "source": "9",
            "target": "5",
          },
          {
            "id": "21",
            "shape": "bpmn-edge",
            "source": "5",
            "target": "6",
          },
          {
            "id": "22",
            "shape": "bpmn-edge",
            "source": "6",
            "target": "11",
          },
          {
            "id": "23",
            "shape": "bpmn-edge",
            "source": "9",
            "target": "4",
          },
          {
            "id": "24",
            "shape": "bpmn-edge",
            "source": "4",
            "target": "12",
            "label":"networkId-1\n峰值宽带：948Mbps\n峰值并发会话：23948"
          },
        ]
    },
    onDddTopic(node, item) {
      console.log("添加事件", node, item)
    },
    onDeleteTopic(id) {
      console.log("删除事件",id)
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
  