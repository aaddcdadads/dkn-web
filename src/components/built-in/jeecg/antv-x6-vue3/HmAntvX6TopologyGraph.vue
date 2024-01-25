<template>
  <div :id="generateId">

  </div>
</template>
  
<script>
import "@antv/x6-vue-shape";
import { Graph } from '@antv/x6'


export default {
  name: "HmAntvX6TopologyGraph",
  props: {
    /**
     * 节点数据
     */
    data: {
      type: Object,
      default: function () {
        return [
          {
            "id": "1",
            "shape": "server",
            "width": 50,
            "height": 60,
            "position": {
              "x": 50,
              "y": 260
            },
            "label": "A服务器区",
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
            "label": "B服务器区",
          },
          {
            "id": "3",
            "shape": "switch",
            "width": 50,
            "height": 60,
            "position": {
              "x": 250,
              "y": 350
            },
            "label": "DMZ交换机",
          },
          {
            "id": "4",
            "shape": "switch",
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
      }
    },
    /**
     * 画布宽度
     */
    width: {
      type: String,
      default: "1000",
    },
    /**
     * 画布高度
     */
    height: {
      type: String,
      default: "1500",
    },
    /**
     * 自定义节点样式配置
     */
    nodeStyle: {
      type: Object,
      default: function () {
        return [
          {
            name: "fireWall",
            cls: {
              inherit: 'rect',
              width: 100,
              height: 60,
              attrs: {
                body: {
                  strokeWidth: 0,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/TopologyLogo/fireWall.png',
                  width: 50,
                  height: 50,
                  x: 0,
                  y: -10,
                },
                text: {
                  text: '',
                  refX: 0,
                  refY: 45,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body',
                },
                {
                  tagName: 'image',
                  selector: 'image',
                },
                {
                  tagName: 'text',
                  selector: 'text',
                },
              ],
            },
            overwrite: true//重复name覆盖
          },
          {
            name: "router",
            cls: {
              inherit: 'rect',
              width: 200,
              height: 60,
              attrs: {
                body: {
                  strokeWidth: 0,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/TopologyLogo/router.png',
                  width: 50,
                  height: 50,
                  x: 0,
                  y: -10,
                },
                text: {
                  text: '',
                  refX: 0,
                  refY: 45,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body',
                },
                {
                  tagName: 'image',
                  selector: 'image',
                },
                {
                  tagName: 'text',
                  selector: 'text',
                },
              ],
            },
            overwrite: true//重复name覆盖
          },
          {
            name: "switch",
            cls: {
              inherit: 'rect',
              width: 200,
              height: 60,
              attrs: {
                body: {
                  strokeWidth: 0,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/TopologyLogo/switch.png',
                  width: 50,
                  height: 50,
                  x: 0,
                  y: -10,
                },
                text: {
                  text: '',
                  refX: 0,
                  refY: 45,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body',
                },
                {
                  tagName: 'image',
                  selector: 'image',
                },
                {
                  tagName: 'text',
                  selector: 'text',
                },
              ],
            },
            overwrite: true//重复name覆盖
          },
          {
            name: "server",
            cls: {
              inherit: 'rect',
              width: 200,
              height: 60,
              attrs: {
                body: {
                  strokeWidth: 0,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/TopologyLogo/server.png',
                  width: 50,
                  height: 50,
                  x: 0,
                  y: -10,
                },
                text: {
                  text: '',
                  refX: 0,
                  refY: 45,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body',
                },
                {
                  tagName: 'image',
                  selector: 'image',
                },
                {
                  tagName: 'text',
                  selector: 'text',
                },
              ],
            },
            overwrite: true//重复name覆盖
          },
          {
            name: "pc",
            cls: {
              inherit: 'rect',
              width: 200,
              height: 60,
              attrs: {
                body: {
                  strokeWidth: 0,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/TopologyLogo/pc.png',
                  width: 50,
                  height: 50,
                  x: 0,
                  y: -10,
                },
                text: {
                  text: '',
                  refX: 0,
                  refY: 45,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body',
                },
                {
                  tagName: 'image',
                  selector: 'image',
                },
                {
                  tagName: 'text',
                  selector: 'text',
                },
              ],
            },
            overwrite: true//重复name覆盖
          },
          {
            name: "network_cloud",
            cls: {
              inherit: 'rect',
              width: 200,
              height: 60,
              attrs: {
                body: {
                  strokeWidth: 0,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://hm-static-img.oss-cn-beijing.aliyuncs.com/TopologyLogo/network_cloud.png',
                  width: 50,
                  height: 50,
                  x: 0,
                  y: -10,
                },
                text: {
                  text: '',
                  refX: 0,
                  refY: 45,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body',
                },
                {
                  tagName: 'image',
                  selector: 'image',
                },
                {
                  tagName: 'text',
                  selector: 'text',
                },
              ],
            },
            overwrite: true//重复name覆盖
          },

        ]
      }
    },
    /**
     * 自定义边样式配置
     */
    edgeStyle: {
      type: Object,
      default: function () {
        return [{
          name: "bpmn-edge",
          cls: {
            inherit: 'edge',
            attrs: {
              line: {
                stroke: '#3c4260',
                strokeWidth: 2,
                targetMarker: false,//箭头
              },
            },
            router: {
              name: 'orth',
            },
            tools: {
              name: 'vertices',
              args: {
                attrs: { fill: '#666' },
              },
            },
            connector: {
              name: 'rounded',
              args: {
                radius: 20,
              },
            },
          },
          overwrite: true
        }]
      }
    }
  },
  computed: {
    generateId() {
      return `container${new Date().getTime()}`;
    }
  },
  watch: {
    data(val) {
      this.cData = val
      this._resetCells()
    },
    edgeStyle(val) {
      this.cEdgeStyle = val
      this._registerEdge()
    },
    nodeStyle(val) {
      this.cNodeStyle = val
      this._registerNode()
    }
  },
  data() {
    return {
      cData: [],
      cRegisterEdgeStyle: [],
      cRegisterNodeStyle: [],
      graph: null//画布
    }
  },
  mounted() {

    this.cData = this.data
    this.cEdgeStyle = this.edgeStyle
    this.cNodeStyle = this.nodeStyle
    this._createCanvas()
    this._registerEdge()
    this._registerNode()
    this._resetCells()
    console.log('test', this)
  },
  methods: {
    /**
     * 初始化画布
     * @return void
     */
    _createCanvas() {
      this.graph = new Graph({
        container: document.getElementById(this.generateId),
        width: parseInt(this.width),  //画布宽度
        height: parseInt(this.height), //画布高度
        // connecting: {
        //   router: 'orth',
        // },
      })
      //单击
      this.graph.on('cell:click', ({ e, x, y, cell, view }) => {
        this.$emit("cellClick", e, x, y, cell, view)
      })
      //双击
      this.graph.on('cell:dblclick', ({ e, x, y, cell, view }) => {
        this.$emit("cellDblclick", e, x, y, cell, view)
      })
      //右键
      this.graph.on('cell:contextmenu', ({ e, x, y, cell, view }) => {
        this.$emit("cellContextmenu", e, x, y, cell, view)
      })
      //移动边后触发
      this.graph.on('edge:moved', ({ e, x, y, view }) => {
        this.$emit("edgeMoved", e, x, y, view)
      })
      //移动节点后触发
      this.graph.on('node:moved', ({ e, x, y, node, view }) => {
        console.log('view',e, x, y, view )

        this.$emit("nodeMoved", e, x, y, node, view)
        this.nodeMoved(e, x, y, node, view)
      })
      console.log('graph', this.graph)
    },
    /**
     * 移动节点修改data内节点位置
     * @param {Object} e
     * @param {Number} x
     * @param {Number} y
     * @param {Object} node
     * @param {Object} view
     * @return void
     */
    nodeMoved(e, x, y, node, view) {
      let index = this.data.findIndex((role) => role.id === node.id);
      this.data[index].position = { x, y }
    },
    /**
     * data数据处理函数
     * @return void
     */
    _resetCells() {
      let cells = []
      this.cData.forEach((item) => {
        const index = this.cEdgeStyle.findIndex((role) => role.name === item.shape);
        if (index != -1) {
          cells.push(this.graph.createEdge(item))
        } else {
          cells.push(this.graph.createNode(item))
        }
      })
      this.graph.resetCells(cells)
      // this.graph.zoomToFit({ padding: 10, maxScale: 1 })
    },
    /**
     * 自定义边配置处理函数
     * @return void
     */
    _registerEdge() {
      if (this.cEdgeStyle.length == 0) {
        return
      }
      this.cEdgeStyle.forEach(e => {
        if (!e.name) {
          throw "名称不能为空"
        }
        Graph.registerEdge(
          e.name,
          e.cls,
          e.overwrite,
        )
      })
    },
    /**
     * 自定义节点配置处理函数
     * @return void
     */
    _registerNode() {
      if (this.cNodeStyle.length == 0) {
        return
      }
      this.cNodeStyle.forEach(e => {
        if (!e.name) {
          throw "名称不能为空"
        }
        Graph.registerNode(
          e.name,
          e.cls,
          e.overwrite,
        )
      })
    }
  }
}
</script>
  
<style scoped>
#container {
  border-left: 1px solid #D1D1D1;
  border-right: 1px solid #D1D1D1;
  border-top: 1px solid #D1D1D1;

}
</style>
  