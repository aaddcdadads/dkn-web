<template>
  <a-button @click="click">改变数据</a-button>
  <div class="erGraphDemo1">
    <HmAntvX6MindMap></HmAntvX6MindMap>
  </div>
  <div class="erGraphDemo2">
    <HmAntvX6MindMap ref="bpmn" :data="bpmn.data" :width="bpmn.width" :height="bpmn.height" :edgeStyle="bpmn.edgeStyle"
      @deleteTopic="onDeleteTopic" @addTopic="onDddTopic"></HmAntvX6MindMap>
  </div>
</template>
  
<script>
import HmAntvX6MindMap from '@/components/built-in/jeecg/antv-x6-vue3/HmAntvX6MindMap.vue'

export default {
  components: {
    HmAntvX6MindMap
  },
  data() {
    return {
      bpmn: {
        width: 500,
        height: 500,
        cData: {
          id: '1',
          type: 'topic',
          label: '中心主题',
          width: 160,
          height: 50,
          children: [
            {
              id: '1-1',
              type: 'topic-branch',
              label: '分支主题1',
              width: 100,
              height: 40,
              children: [
                {
                  id: '1-1-1',
                  type: 'topic-child',
                  label: '子主题1',
                  width: 60,
                  height: 30,
                },
                {
                  id: '1-1-2',
                  type: 'topic-child',
                  label: '子主题2',
                  width: 60,
                  height: 30,
                },
                {
                  id: '1-1-23',
                  type: 'topic',
                  label: '子主题3',
                  width: 100,
                  height: 40,
                },
              ],
            },
            {
              id: '1-2',
              type: 'topic-branch',
              edge: "test-edge",//线样式未填默认为第一个线样式
              label: '分支主题2',
              width: 100,
              height: 40,
            },
          ],
        },
        edgeStyle: [{
          name: "mindmap-edge",
          cls: {
            inherit: 'edge',
            connector: {
              name: 'mindmap',
            },
            attrs: {
              line: {
                targetMarker: '',
                stroke: 'red',
                strokeWidth: 2,
              },
            },
            zIndex: 0,
          },
          overwrite: true
        },
        {
          name: "test-edge",
          cls: {
            inherit: 'edge',
            connector: {
              name: 'mindmap',
            },
            attrs: {
              line: {
                targetMarker: '',
                stroke: '#A2B1C3',
                strokeWidth: 2,
              },
            },
            zIndex: 0,
          },
          overwrite: true
        }]
      }
    }
  },
  methods: {
    click() {
      this.bpmn.data = {
        id: '1',
        type: 'topic',
        label: '中心主题',
        width: 160,
        height: 50,
        children: [
          {
            id: '1-1',
            type: 'topic-branch',
            label: '分支主题1',
            width: 100,
            height: 40,
            children: [
              {
                id: '1-1-1',
                type: 'topic-child',
                label: '子主题1',
                width: 60,
                height: 30,
              }
            ],
          },
          {
            id: '1-2',
            type: 'topic-branch',
            edge: "test-edge",//线样式未填默认为第一个线样式
            label: '分支主题2',
            width: 100,
            height: 40,
          },
        ],
      }
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
  