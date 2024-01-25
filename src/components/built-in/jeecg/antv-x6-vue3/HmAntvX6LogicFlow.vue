<template>
  <div :id="generateId">
    <div class="hm-modal" ref="componentRef">
      <a-modal ref="modal" :visible="cVisible" :closable="false" :mask="false" :width="cModalWidth"
        :bodyStyle="{ height: '', padding: '24px' }" :ok-button-props="{ style: { 'display': 'none' } }"
        :cancel-button-props="{ style: { 'display': 'none' } }"
        :footer="okButtonBoole || cancelButtonProps ? undefined : null" :zIndex="999" :style="style" @ok="handleOk"
        @cancel="handleCancel" @afterClose="afterClose">
        <div v-for="item in nodeList" :key="item.label" class="divItem" @click="nodeClick(item)">
          <img v-if="item.img" class="text-img" :src="item.img" />
          <span class="span">{{ item.label }}</span>
        </div>
      </a-modal>
    </div>
  </div>
</template>
  
<script>
import { Graph, Path } from '@antv/x6'
import insertCss from 'insert-css'
export default {
  name: "HmAntvX6LogicFlow",
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
            "shape": "FILTER",
            "position": {
              "x": 50,
              "y": 180
            },
            "label": "区域B交换机",
          },
          {
            "id": "2",
            "shape": "FILTER",
            "position": {
              "x": 300,
              "y": 180
            },
            "label": "区域B交换机1",
          },
          {
            "id": "edge-0",
            "shape": "bpmn-edge",
            "source": "1",
            "target": "2"
          },
        ]
      }
    },
    /**
     * 节点选择器
     */
    nodeList: {
      type: Object,
      default: function () {
        return [
          {
            value: "FILTER",
            label: "数据筛选",
            img: "https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*ZJ6qToit8P4AAAAAAAAAAAAADtOHAQ/original"
          },
          {
            value: "JOIN",
            label: "数据连接",
            img: "https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*EHqyQoDeBvIAAAAAAAAAAAAADtOHAQ/original"
          },
          {
            value: "INPUT",
            label: "数据输入",
            img: "https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*RXnuTpQ22xkAAAAAAAAAAAAADtOHAQ/original"
          },
          {
            value: "UNION",
            label: "数据合并",
            img: "https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*k4eyRaXv8gsAAAAAAAAAAAAADtOHAQ/original"
          },
          {
            value: "AGG",
            label: "数据聚合",
            img: "https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*TKG8R6nfYiAAAAAAAAAAAAAADtOHAQ/original"
          },
          {
            value: "OUTPUT",
            label: "数据输出",
            img: "https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*zUgORbGg1HIAAAAAAAAAAAAADtOHAQ/original"
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
     * 弹出层宽度
     */
    modalWidth: {
      type: String,
      default: "150",
    },
    /**
     * 自定义节点样式配置
     */
    nodeStyle: {
      type: Object,
      default: function () {
        return [
          {
            name: "FILTER",
            cls: {

              inherit: 'rect',
              width: 120,
              height: 40,
              attrs: {
                body: {
                  strokeWidth: 1,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*ZJ6qToit8P4AAAAAAAAAAAAADtOHAQ/original',
                  width: 20,
                  height: 20,
                  x: 5,
                  y: 10,
                },
                text: {
                  text: '',
                  refX: 30,
                  refY: 20,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              ports: {
                groups: {
                  group1: {
                    attrs: {
                      circle: {
                        class: 'topic-image',

                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                      },
                      text: {
                        fontSize: 12,
                        fill: '#888',
                      },

                    },
                    position: {
                      name: 'absolute',
                    },
                  },
                },
                items: [
                  {
                    id: 'port2',
                    group: 'group1',
                    args: {
                      x: '0%',
                      y: '50%',
                    },

                  },
                  {
                    id: 'port3',
                    group: 'group1',
                    args: {
                      x: '100%',
                      y: '50%',
                    },
                    attrs: {
                    },
                    label: {
                      position: {
                        name: 'right',
                      },
                    },
                  },
                ],
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
            name: "JOIN",
            cls: {

              inherit: 'rect',
              width: 120,
              height: 40,
              attrs: {
                body: {
                  strokeWidth: 1,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*EHqyQoDeBvIAAAAAAAAAAAAADtOHAQ/original',
                  width: 20,
                  height: 20,
                  x: 5,
                  y: 10,
                },
                text: {
                  text: '',
                  refX: 30,
                  refY: 20,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              ports: {
                groups: {
                  group1: {
                    attrs: {
                      circle: {
                        class: 'topic-image',

                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                      },
                      text: {
                        fontSize: 12,
                        fill: '#888',
                      },

                    },
                    position: {
                      name: 'absolute',
                    },
                  },
                },
                items: [
                  {
                    id: 'port2',
                    group: 'group1',
                    args: {
                      x: '0%',
                      y: '50%',
                    },

                  },
                  {
                    id: 'port3',
                    group: 'group1',
                    args: {
                      x: '100%',
                      y: '50%',
                    },
                    attrs: {
                    },
                    label: {
                      position: {
                        name: 'right',
                      },
                    },
                  },
                ],
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
            name: "INPUT",
            cls: {

              inherit: 'rect',
              width: 120,
              height: 40,
              attrs: {
                body: {
                  strokeWidth: 1,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*RXnuTpQ22xkAAAAAAAAAAAAADtOHAQ/original',
                  width: 20,
                  height: 20,
                  x: 5,
                  y: 10,
                },
                text: {
                  text: '',
                  refX: 30,
                  refY: 20,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              ports: {
                groups: {
                  group1: {
                    attrs: {
                      circle: {
                        class: 'topic-image',

                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                      },
                      text: {
                        fontSize: 12,
                        fill: '#888',
                      },

                    },
                    position: {
                      name: 'absolute',
                    },
                  },
                },
                items: [
                  {
                    id: 'port2',
                    group: 'group1',
                    args: {
                      x: '0%',
                      y: '50%',
                    },

                  },
                  {
                    id: 'port3',
                    group: 'group1',
                    args: {
                      x: '100%',
                      y: '50%',
                    },
                    attrs: {
                    },
                    label: {
                      position: {
                        name: 'right',
                      },
                    },
                  },
                ],
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
            name: "UNION",
            cls: {

              inherit: 'rect',
              width: 120,
              height: 40,
              attrs: {
                body: {
                  strokeWidth: 1,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*k4eyRaXv8gsAAAAAAAAAAAAADtOHAQ/original',
                  width: 20,
                  height: 20,
                  x: 5,
                  y: 10,
                },
                text: {
                  text: '',
                  refX: 30,
                  refY: 20,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              ports: {
                groups: {
                  group1: {
                    attrs: {
                      circle: {
                        class: 'topic-image',

                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                      },
                      text: {
                        fontSize: 12,
                        fill: '#888',
                      },

                    },
                    position: {
                      name: 'absolute',
                    },
                  },
                },
                items: [
                  {
                    id: 'port2',
                    group: 'group1',
                    args: {
                      x: '0%',
                      y: '50%',
                    },

                  },
                  {
                    id: 'port3',
                    group: 'group1',
                    args: {
                      x: '100%',
                      y: '50%',
                    },
                    attrs: {
                    },
                    label: {
                      position: {
                        name: 'right',
                      },
                    },
                  },
                ],
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
            name: "AGG",
            cls: {

              inherit: 'rect',
              width: 120,
              height: 40,
              attrs: {
                body: {
                  strokeWidth: 1,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*TKG8R6nfYiAAAAAAAAAAAAAADtOHAQ/original',
                  width: 20,
                  height: 20,
                  x: 5,
                  y: 10,
                },
                text: {
                  text: '',
                  refX: 30,
                  refY: 20,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              ports: {
                groups: {
                  group1: {
                    attrs: {
                      circle: {
                        class: 'topic-image',

                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                      },
                      text: {
                        fontSize: 12,
                        fill: '#888',
                      },

                    },
                    position: {
                      name: 'absolute',
                    },
                  },
                },
                items: [
                  {
                    id: 'port2',
                    group: 'group1',
                    args: {
                      x: '0%',
                      y: '50%',
                    },

                  },
                  {
                    id: 'port3',
                    group: 'group1',
                    args: {
                      x: '100%',
                      y: '50%',
                    },
                    attrs: {
                    },
                    label: {
                      position: {
                        name: 'right',
                      },
                    },
                  },
                ],
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
            name: "OUTPUT",
            cls: {

              inherit: 'rect',
              width: 120,
              height: 40,
              attrs: {
                body: {
                  strokeWidth: 1,
                  refWidth: 1,
                  refHeight: 1,
                },
                image: {
                  'xlink:href':
                    'https://mdn.alipayobjects.com/huamei_f4t1bn/afts/img/A*zUgORbGg1HIAAAAAAAAAAAAADtOHAQ/original',
                  width: 20,
                  height: 20,
                  x: 5,
                  y: 10,
                },
                text: {
                  text: '',
                  refX: 30,
                  refY: 20,
                  fontSize: 12,
                  'text-anchor': 'start',
                },
              },
              ports: {
                groups: {
                  group1: {
                    attrs: {
                      circle: {
                        class: 'topic-image',

                        r: 6,
                        magnet: true,
                        stroke: '#31d0c6',
                        strokeWidth: 2,
                        fill: '#fff',
                      },
                      text: {
                        fontSize: 12,
                        fill: '#888',
                      },

                    },
                    position: {
                      name: 'absolute',
                    },
                  },
                },
                items: [
                  {
                    id: 'port2',
                    group: 'group1',
                    args: {
                      x: '0%',
                      y: '50%',
                    },

                  },
                  {
                    id: 'port3',
                    group: 'group1',
                    args: {
                      x: '100%',
                      y: '50%',
                    },
                    attrs: {
                    },
                    label: {
                      position: {
                        name: 'right',
                      },
                    },
                  },
                ],
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
            markup: [
              {
                tagName: 'path',
                selector: 'wrap',
                attrs: {
                  fill: 'none',
                  cursor: 'pointer',
                  stroke: 'transparent',
                  strokeLinecap: 'round',
                },
              },
              {
                tagName: 'path',
                selector: 'line',
                attrs: {
                  fill: 'none',
                  pointerEvents: 'none',
                },
              },
            ],
            connector: { name: 'curveConnector' },
            attrs: {
              wrap: {
                connection: true,
                strokeWidth: 10,
                strokeLinejoin: 'round',
              },
              line: {
                connection: true,
                stroke: '#A2B1C3',
                strokeWidth: 1,
                targetMarker: {
                  name: 'classic',
                  size: 6,
                },
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
    },
    modalWidth(value) {
      this.cModalWidth = this.getCssUnit(value);
    },
  },
  data() {
    return {
      cVisible: false,
      style: {
        left: '10px',
        top: '10px'
      },
      cModalWidth: "",
      cData: [],
      cRegisterEdgeStyle: [],
      cRegisterNodeStyle: [],
      graph: null,//画布,
      dropdownOptions: [
        { key: 'option1', text: 'Option 1' },
        { key: 'option2', text: 'Option 2' },
        { key: 'option3', text: 'Option 3' },
      ],
      openNode: {}
    }
  },
  mounted() {
    this.cModalWidth = this.getCssUnit(this.modalWidth);
    this.cData = this.data
    this.cEdgeStyle = this.edgeStyle
    this.cNodeStyle = this.nodeStyle
    this._createCanvas()
    this._registerEdge()
    this._registerNode()
    this._resetCells()
  },
  methods: {
    /**
     * 打开弹出框
     * @param {Number} x
     * @param {Number} y
     * @return void
     */
    openModal(x, y) {
      this.cVisible = true
      const componentElement = this.$refs.componentRef;
      const rect = componentElement.getBoundingClientRect();
      const componentX = rect.left; // 组件左上角的x坐标
      const componentY = rect.top; // 组件左上角的y坐标
      console.log( 'rect',rect,componentX, componentY)
      const distance = Math.sqrt((x - componentX) ** 2 + (y - componentY) ** 2);
      console.log('Distance to target:', distance);
      x=x-950
      this.style = {
        left: `${x}px`,
        top: `${y}px`
      }
    },
    /**
     * 选择节点
     * @param {Object} item
     * @return void
     */
    nodeClick(item) {
      console.log('item', item, this.openNode)
      const position = this.getDownstreamNodePosition(this.openNode)
      let id = Math.floor(Math.random() * 100) + 1
      console.log('id;', id)
      let par = {
        "id": id,
        "shape": item.value,
        "position": {
          "x": position.x,
          "y": position.y
        },
        "label": item.label,
      }
      let edge = {
        "id": Math.floor(Math.random() * 100) + 1,
        "shape": "bpmn-edge",
        "source": this.openNode.id,
        "target": id
      }
      this.cData.push(par)
      this.cData.push(edge)
      this.$nextTick(() => {
        this._resetCells()
      })
      this.cVisible = false
    },
    /**
     * 根据起点初始下游节点的位置信息
     * @param node 起始节点
     * @returns
     */
    getDownstreamNodePosition(node) {
      // 找出画布中以该起始节点为起点的相关边的终点id集合
      const dx = 250
      const dy = 100
      // 获取起点的位置信息
      const position = node.getPosition()
      let par = {
        x: position.x + dx,
        y: position.y
      }
      let list = []
      this.graph.getNodes().forEach(e => {
        list.push(e.getPosition())
      })
      list = list.sort((a, b) => { return a.y - b.y })
      console.log('list', list, this.graph.getNodes())
      list.forEach((nodePosition) => {
        // const nodePosition = graphNode.getPosition()
        console.log('nodePosition', par, nodePosition)
        if (par.x == nodePosition.x && par.y == nodePosition.y) {
          par.y = nodePosition.y + dy
        }
      })
      console.log('par', par)
      return par
    },
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
        console.log(1, cell)
        console.log(2, view)
        this.openNode = cell
        this.openModal(x, y)
        this.$emit("cellClick", e, x, y, cell, view)
      })
      //双击
      this.graph.on('cell:dblclick', ({ e, x, y, cell, view }) => {
        console.log(2, x, y)
        this.$emit("cellDblclick", e, x, y, cell, view)
      })
      //右键
      this.graph.on('cell:contextmenu', ({ e, x, y, cell, view }) => {
        console.log(3, x, y)
        this.$emit("cellContextmenu", e, x, y, cell, view)
      })
      //移动边后触发
      this.graph.on('edge:moved', ({ e, x, y, view }) => {
        console.log(4, x, y)
        this.$emit("edgeMoved", e, x, y, view)
      })
      //移动节点后触发
      this.graph.on('node:moved', ({ e, x, y, node, view }) => {
        console.log(5, x, y)
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
      this.registerConnector()
    },
    /**
     * 注册连线
     * @return void
     */
    registerConnector() {
      Graph.registerConnector(
        'curveConnector',
        (sourcePoint, targetPoint) => {
          const hgap = Math.abs(targetPoint.x - sourcePoint.x)
          const path = new Path()
          path.appendSegment(
            Path.createSegment('M', sourcePoint.x - 4, sourcePoint.y),
          )
          path.appendSegment(
            Path.createSegment('L', sourcePoint.x + 12, sourcePoint.y),
          )
          // 水平三阶贝塞尔曲线
          path.appendSegment(
            Path.createSegment(
              'C',
              sourcePoint.x < targetPoint.x
                ? sourcePoint.x + hgap / 2
                : sourcePoint.x - hgap / 2,
              sourcePoint.y,
              sourcePoint.x < targetPoint.x
                ? targetPoint.x - hgap / 2
                : targetPoint.x + hgap / 2,
              targetPoint.y,
              targetPoint.x - 6,
              targetPoint.y,
            ),
          )
          path.appendSegment(
            Path.createSegment('L', targetPoint.x + 2, targetPoint.y),
          )

          return path.serialize()
        },
        true,
      )
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

    },
    /**
     * 关闭弹出框
     * @return void
     */
    handleCancel() {
      this.cVisible = false;
    },
    /**
    * 长度转换
    * @param {String{} value
    * @return void
    */
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  }
}
insertCss(`
.topic-image {
    visibility: hidden;
    cursor: pointer;
  }
  .x6-node:hover .topic-image {
    visibility: visible;
  }
`)
</script>
  
<style scoped>
#container {
  border-left: 1px solid #D1D1D1;
  border-right: 1px solid #D1D1D1;
  border-top: 1px solid #D1D1D1;
}

.span {
  width: 100%;
  margin-left: 5px;
}

.divItem {
  margin-top: 10px;
}

.text-img {
  width: "18px";
  height: "18px";
}
</style>
  