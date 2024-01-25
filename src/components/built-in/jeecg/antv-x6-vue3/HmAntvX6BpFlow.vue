<template>
  <div :id="generateId">

  </div>
</template>
  
<script>
import "@antv/x6-vue-shape";
import { Graph } from '@antv/x6'


export default {
  name: "HmAntvX6BpFlow",
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
            "shape": "event",
            "width": 40,
            "height": 40,
            "position": {
              "x": 50,
              "y": 180
            }
          },
          {
            "id": "2",
            "shape": "activity",
            "width": 100,
            "height": 60,
            "position": {
              "x": 20,
              "y": 280
            },
            "label": "请假申请"
          },
          {
            "id": "3",
            "shape": "bpmn-edge",
            "source": "1",
            "target": "2"
          },
          {
            "id": "4",
            "shape": "gateway",
            "width": 55,
            "height": 55,
            "position": {
              "x": 170,
              "y": 282.5
            }
          },
          {
            "id": "5",
            "shape": "bpmn-edge",
            "source": "2",
            "target": "4"
          },
          {
            "id": "6",
            "shape": "activity",
            "width": 100,
            "height": 60,
            "position": {
              "x": 300,
              "y": 240
            },
            "label": "领导审批"
          },
          {
            "id": "7",
            "shape": "activity",
            "width": 100,
            "height": 60,
            "position": {
              "x": 300,
              "y": 320
            },
            "label": "人事审批"
          },
          {
            "id": "8",
            "shape": "bpmn-edge",
            "source": "4",
            "target": "6"
          },
          {
            "id": "9",
            "shape": "bpmn-edge",
            "source": "4",
            "target": "7"
          },
          {
            "id": "10",
            "shape": "gateway",
            "width": 55,
            "height": 55,
            "position": {
              "x": 460,
              "y": 282.5
            }
          },
          {
            "id": "11",
            "shape": "bpmn-edge",
            "source": "6",
            "target": "10"
          },
          {
            "id": "12",
            "shape": "bpmn-edge",
            "source": "7",
            "target": "10"
          },
          {
            "id": "13",
            "shape": "activity",
            "width": 100,
            "height": 60,
            "position": {
              "x": 560,
              "y": 280
            },
            "label": "人事审批"
          },
          {
            "id": "14",
            "shape": "bpmn-edge",
            "source": "10",
            "target": "13"
          },
          {
            "id": "15",
            "shape": "event",
            "width": 40,
            "height": 40,
            "position": {
              "x": 710,
              "y": 290
            },
            "attrs": {
              "body": {
                "strokeWidth": 4
              }
            }
          },
          {
            "id": "16",
            "shape": "bpmn-edge",
            "source": "13",
            "target": "15"
          }
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
      default: "500",
    },
    /**
     * 自定义节点样式配置
     */
    nodeStyle: {
      type: Object,
      default: function () {
        return [
          {
            name: "event",
            cls: {
              inherit: 'circle',
              attrs: {
                body: {
                  strokeWidth: 2,
                  stroke: '#5F95FF',
                  fill: '#FFF',
                },
              },
            },
            overwrite: true//重复name覆盖
          },
          {
            name: "gateway",
            cls: {
              inherit: 'polygon',
              attrs: {
                body: {
                  refPoints: '0,10 10,0 20,10 10,20',
                  strokeWidth: 2,
                  stroke: '#5F95FF',
                  fill: '#EFF4FF',
                },
                label: {
                  text: '+',
                  fontSize: 40,
                  fill: '#5F95FF',
                },
              }
            },
            overwrite: true
          },
          {
            name: "activity",
            cls: {
              inherit: 'rect',
              markup: [
                {
                  tagName: 'rect',
                  selector: 'body',
                },
                {
                  tagName: 'image',
                  selector: 'img',
                },
                {
                  tagName: 'text',
                  selector: 'label',
                },
              ],
              attrs: {
                body: {
                  rx: 6,
                  ry: 6,
                  stroke: '#5F95FF',
                  fill: '#EFF4FF',
                  strokeWidth: 1,
                },
                img: {
                  x: 6,
                  y: 6,
                  width: 16,
                  height: 16,
                  'xlink:href':
                    'https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ',
                },
                label: {
                  fontSize: 12,
                  fill: '#262626',
                },
              }
            },
            overwrite: true
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
                stroke: '#A2B1C3',
                strokeWidth: 2,
              },
            }
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
  