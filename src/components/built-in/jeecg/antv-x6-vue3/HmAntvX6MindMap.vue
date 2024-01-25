<template>
  <div :id="generateId"></div>
</template >

<script>
import "@antv/x6-vue-shape";
import { Graph, Cell, Node, Path } from "@antv/x6";
import Hierarchy from "@antv/hierarchy";
// import insertCss from 'insert-css'

export default {
  name: "HmAntvX6MindMap",
  props: {
    /**
     * 节点数据
     */
    data: {
      type: Object,
      default: function () {
        return {
          id: "1",
          type: "topic",
          label: "中心主题",
          width: 160,
          height: 50,
          children: [
            {
              id: "1-1",
              type: "topic-branch",
              label: "分支主题1",
              width: 100,
              height: 40,
              children: [
                {
                  id: "1-1-1",
                  type: "topic-child",
                  label: "子主题1",
                  width: 60,
                  height: 30,
                },
                {
                  id: "1-1-2",
                  type: "topic-child",
                  label: "子主题2",
                  width: 60,
                  height: 30,
                },
                {
                  id: "1-1-23",
                  type: "topic",
                  label: "子主题3",
                  width: 100,
                  height: 40,
                },
              ],
            },
            {
              id: "1-2",
              type: "topic-branch",
              edge: "test-edge", //线样式未填默认为第一个线样式
              label: "分支主题2",
              width: 100,
              height: 40,
            },
          ],
        };
      },
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
     * 自定义节点后图片配置
     */
    nodeImgStyle: {
      type: String,
      default:
        "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*SYCuQ6HHs5cAAAAAAAAAAAAAARQnAQ",
    },
    /**
     * 自定义节点样式配置
     */
    nodeStyle: {
      type: Object,
      default: function () {
        return [
          {
            name: "topic",
            imgShow: true, //是否显示节点后图片
            cls: {
              inherit: "rect",
              markup: [
                {
                  tagName: "rect",
                  selector: "body",
                },
                {
                  tagName: "image",
                  selector: "img",
                },
                {
                  tagName: "text",
                  selector: "label",
                },
              ],
              attrs: {
                body: {
                  rx: 6,
                  ry: 6,
                  stroke: "#5F95FF",
                  fill: "#EFF4FF",
                  strokeWidth: 1,
                },
                label: {
                  fontSize: 14,
                  fill: "#262626",
                },
              },
            },
            overwrite: true, //重复name覆盖
          },
          {
            name: "topic-branch",
            imgShow: true, //是否显示节点后图片
            cls: {
              inherit: "rect",
              markup: [
                {
                  tagName: "rect",
                  selector: "body",
                },
                {
                  tagName: "image",
                  selector: "img",
                },
                {
                  tagName: "text",
                  selector: "label",
                },
              ],
              attrs: {
                body: {
                  rx: 6,
                  ry: 6,
                  stroke: "#5F95FF",
                  fill: "#EFF4FF",
                  strokeWidth: 1,
                },
                label: {
                  fontSize: 14,
                  fill: "#262626",
                },
              },
            },
            overwrite: true, //重复name覆盖
          },
          {
            name: "topic-child",
            imgShow: true,
            cls: {
              inherit: "rect",
              markup: [
                {
                  tagName: "rect",
                  selector: "body",
                },
                {
                  tagName: "text",
                  selector: "label",
                },
                {
                  tagName: "path",
                  selector: "line",
                },
              ],
              attrs: {
                body: {
                  fill: "#ffffff",
                  strokeWidth: 0,
                  stroke: "#5F95FF",
                },
                label: {
                  fontSize: 14,
                  fill: "#262626",
                  textVerticalAnchor: "bottom",
                },
                line: {
                  stroke: "#5F95FF",
                  strokeWidth: 2,
                  d: "M 0 15 L 60 15",
                },
              },
            },
            overwrite: true,
          },
          {
            name: "activity",
            cls: {
              inherit: "rect",
              markup: [
                {
                  tagName: "rect",
                  selector: "body",
                },
                {
                  tagName: "image",
                  selector: "img",
                },
                {
                  tagName: "text",
                  selector: "label",
                },
              ],
              attrs: {
                body: {
                  rx: 6,
                  ry: 6,
                  stroke: "#5F95FF",
                  fill: "#EFF4FF",
                  strokeWidth: 1,
                },
                img: {
                  x: 6,
                  y: 6,
                  width: 16,
                  height: 16,
                  "xlink:href":
                    "https://gw.alipayobjects.com/mdn/rms_43231b/afts/img/A*pwLpRr7QPGwAAAAAAAAAAAAAARQnAQ",
                },
                label: {
                  fontSize: 12,
                  fill: "#262626",
                },
              },
            },
            overwrite: true,
          },
        ];
      },
    },
    /**
     * 自定义边样式配置
     */
    edgeStyle: {
      type: Object,
      default: function () {
        return [
          {
            name: "mindmap-edge",
            cls: {
              inherit: "edge",
              connector: {
                name: "mindmap",
              },
              attrs: {
                line: {
                  targetMarker: "",
                  stroke: "#A2B1C3",
                  strokeWidth: 2,
                },
              },
              zIndex: 0,
            },
            overwrite: true,
          },
          {
            name: "test-edge",
            cls: {
              inherit: "edge",
              connector: {
                name: "mindmap",
              },
              attrs: {
                line: {
                  targetMarker: "",
                  stroke: "red",
                  strokeWidth: 2,
                },
              },
              zIndex: 0,
            },
            overwrite: true,
          },
        ];
      },
    },
    /**
     * 自定义连接器配置
     */
    connectorStyle: {
      type: Object,
      default: function () {
        return {
          name: "mindmap",
          cls: function (sourcePoint, targetPoint, routerPoints, options) {
            const midX = sourcePoint.x + 10;
            const midY = sourcePoint.y;
            const ctrX = (targetPoint.x - midX) / 5 + midX;
            const ctrY = targetPoint.y;
            const pathData = `
     M ${sourcePoint.x} ${sourcePoint.y}
     L ${midX} ${midY}
     Q ${ctrX} ${ctrY} ${targetPoint.x} ${targetPoint.y}
    `;
            return options.raw ? Path.parse(pathData) : pathData;
          },
          overwrite: true,
        };
      },
    },
  },
  computed: {
    generateId() {
      return `container${new Date().getTime()}`;
    },
  },
  watch: {
    data(val) {
      this.cData = val;
      this._render();
    },
    edgeStyle(val) {
      this.cEdgeStyle = val;
      this._registerEdge();
    },
    nodeStyle(val) {
      this.cNodeStyle = val;
      this._registerNode();
    },
    connectorStyle(val) {
      this.cConnectorStyle = val;
      this._registerNode();
    },
  },
  data() {
    return {
      cData: {},
      cRegisterEdgeStyle: [],
      cRegisterNodeStyle: [],
      cConnectorStyle: {},
      graph: null, //画布
    };
  },
  mounted() {
    this.cData = this.data;
    this.cEdgeStyle = this.edgeStyle;
    this.cNodeStyle = this.nodeStyle;
    this.cConnectorStyle = this.connectorStyle;
    this._createCanvas();
    this._registerConnector();
    this._registerEdge();
    this._registerNode();
    this._render();
  },
  methods: {
    /**
     * 初始化画布
     * @return void
     */
    _createCanvas() {
      this.graph = new Graph({
        container: document.getElementById(this.generateId),
        width: parseInt(this.width), //画布宽度
        height: parseInt(this.height), //画布高度
        connecting: {
          connectionPoint: "anchor",
        },
        selecting: {
          enabled: true,
        },
        keyboard: {
          enabled: true,
        },
      });
      this.graph.on("add:topic", ({ node }) => {
        this.addTopic(node);
      });
      this.graph.bindKey(["backspace", "delete"], () => {
        this.deleteTopic();
      });
      // this.graph.bindKey('tab', (e) => {
      //     e.preventDefault()
      //     const selectedNodes = this.graph.getSelectedCells().filter((item) => item.isNode())
      //     if (selectedNodes.length) {
      //         const node = selectedNodes[0]
      //         const type = node.prop('type')
      //         if (this.addChildNode(node.id, type)) {
      //             this._render()
      //         }
      //     }
      // })
    },
    /**
     * 删除节点子函数
     * @param {String} id
     * @return {Object} 节点内容
     */
    removeNode(id) {
      const res = this.findItem(this.cData, id);
      const dataItem = res?.parent;
      if (dataItem && dataItem.children) {
        const { children } = dataItem;
        const index = children.findIndex((item) => item.id === id);
        return children.splice(index, 1);
      }
      return null;
    },
    /**
     * 删除节点事件
     * @return void
     */
    deleteTopic() {
      const selectedNodes = this.graph
        .getSelectedCells()
        .filter((item) => item.isNode());
      let id = null;
      if (selectedNodes.length) {
        id = selectedNodes[0].id;
        if (this.removeNode(id)) {
          this._render();
        }
      }
      this.$emit("deleteTopic", id);
    },
    /**
     * 添加节点函数
     * @param {Object} node
     * @return void
     */
    addTopic(node) {
      const { id } = node;
      const type = node.prop("type");
      const item = this.addChildNode(id, type);
      if (item) {
        this._render();
      }
      this.$emit("addTopic", node, item);
    },
    /**
     * 计算得出子节点
     * @param {String} id
     * @param {Object} type
     * @return {Object}　新节点内容
     */
    addChildNode(id, type) {
      const res = this.findItem(this.cData, id);
      const dataItem = res?.node;
      if (dataItem) {
        let item = null;
        const length = dataItem.children ? dataItem.children.length : 0;
        console.log("dataItem", dataItem);
        const index = this.cNodeStyle.findIndex((role) => role.name === type);
        const cType = this.cNodeStyle[index + 1]
          ? this.cNodeStyle[index + 1].name
          : type;
        console.log("cType", cType);
        let width = dataItem.width;
        let height = dataItem.height;
        if (dataItem.children && dataItem.children[0]) {
          width = dataItem.children[0].width;
          height = dataItem.children[0].height;
        }
        item = {
          id: `${id}-${length + 1}`,
          type: cType,
          label: `新分支${length + 1}`,
          width: width,
          height: height,
        };
        if (item) {
          if (dataItem.children) {
            dataItem.children.push(item);
          } else {
            dataItem.children = [item];
          }
          return item;
        }
      }
      return null;
    },
    /**
     * 获取节点内容
     * @param {Object} obj
     * @param {String} id
     * @return {Object}　节点内容
     */
    findItem(obj, id) {
      if (obj.id === id) {
        return {
          parent: null,
          node: obj,
        };
      }
      const { children } = obj;
      if (children) {
        for (let i = 0, len = children.length; i < len; i++) {
          const res = this.findItem(children[i], id);
          if (res) {
            return {
              parent: res.parent || obj,
              node: res.node,
            };
          }
        }
      }
      return null;
    },
    /**
     * data数据处理函数
     * @return void
     */
    _render() {
      const data = this.cData;
      const result = Hierarchy.mindmap(data, {
        direction: "H",
        getHeight(d) {
          return d.height;
        },
        getWidth(d) {
          return d.width;
        },
        getHGap() {
          return 40;
        },
        getVGap() {
          return 20;
        },
        getSide: () => {
          return "right";
        },
      });
      const cells = [];
      const traverse = (hierarchyItem) => {
        if (hierarchyItem) {
          const { data, children } = hierarchyItem;

          cells.push(
            this.graph.createNode({
              id: data.id,
              shape: data.type,
              x: hierarchyItem.x,
              y: hierarchyItem.y,
              width: data.width,
              height: data.height,
              label: data.label,
              type: data.type,
            })
          );
          if (children) {
            children.forEach((item) => {
              const { id, data } = item;
              const shape = data.edge ? data.edge : this.cEdgeStyle[0].name;
              cells.push(
                this.graph.createEdge({
                  shape: shape,
                  source: {
                    cell: hierarchyItem.id,
                    anchor: {
                      name: "right",
                      args: {
                        dx: -16,
                      },
                    },
                    // data.type === 'topic-child'
                    //     ? {
                    //         name: 'right',
                    //         args: {
                    //             dx: -16,
                    //         },
                    //     }
                    //     : {
                    //         name: 'center',
                    //         args: {
                    //             dx: '25%',
                    //         },
                    //     },
                  },
                  target: {
                    cell: id,
                    anchor: {
                      name: "left",
                    },
                  },
                })
              );
              traverse(item);
            });
          }
        }
      };
      traverse(result);
      this.graph.resetCells(cells);
      this.graph.centerContent();
    },
    /**
     * 自定义边配置处理函数
     * @return void
     */
    _registerEdge() {
      if (this.cEdgeStyle.length == 0) {
        return;
      }
      this.cEdgeStyle.forEach((e) => {
        if (!e.name) {
          throw "名称不能为空";
        }
        Graph.registerEdge(e.name, e.cls, e.overwrite);
      });
    },
    /**
     * 自定义节点配置处理函数
     * @return void
     */
    _registerNode() {
      if (this.cNodeStyle.length == 0) {
        return;
      }
      this.cNodeStyle.forEach((e) => {
        if (!e.name) {
          throw "名称不能为空";
        }
        if (e.imgShow) {
          console.log(e, this.nodeImgStyle);
          let par = {
            ref: "body",
            refX: "100%",
            refY: "50%",
            refY2: -8,
            width: 16,
            height: 16,
            "xlink:href": this.nodeImgStyle,
            event: "add:topic",
            class: "topic-image",
          };
          e.cls.attrs.img = par;
        }
        Graph.registerNode(e.name, e.cls, e.overwrite);
      });
    },
    /**
     * 自定义连接器配置处理函数
     * @return void
     */
    _registerConnector() {
      if (!this.cConnectorStyle.name) {
        throw "名称不能为空";
      }
      Graph.registerConnector(
        this.cConnectorStyle.name,
        this.cConnectorStyle.cls,
        this.cConnectorStyle.overwrite
      );
    },
  },
};
</script>

<style scoped>
#container {
  border-left: 1px solid #d1d1d1;
  border-right: 1px solid #d1d1d1;
  border-top: 1px solid #d1d1d1;
}

.topic-image {
  width: 500;
  visibility: hidden;
  cursor: pointer;
}

.x6-node:hover .topic-image {
  visibility: visible;
}

.x6-node-selected rect {
  stroke-width: 2px;
}
</style>
