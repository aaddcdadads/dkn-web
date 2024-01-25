<template>
  <div class="container">
    <div :id="graphEleId"></div>
    <div :id="miniMapId" v-if="cEnableMiniMap" :style="miniMapStyle"></div>
    <div class="loading-container" v-if="cLoadingStatus">
      <LoadingOutlined spin />
    </div>
    <div class="tools">
      <!-- <DatabaseFilled @mousedown="startDragAddTable"/> -->
      <a-button
        size="small"
        @mousedown="startDragAddTable"
      >
        <DatabaseFilled />
      </a-button>
      <!-- <a-button
        danger
        shape="circle"
        size="small"
        v-if="editButtonVisible"
        @click="deleteCurretSelect"
      >
        <DeleteOutlined />
      </a-button> -->
    </div>
    <a-modal
      :title="modalType"
      :visible="modalVisible"
      @cancel="handleCancel"
      destroyOnClose
      :width="900"
      cancelText="取消"
      okText="确定"
      :zIndex="999"
    >
      <template v-if="modalType !== '表间关系'">
        <a-form
          ref="tableForm"
          layout="inline"
          :model="formTableState"
          style="margin-bottom: 12px; height: 80px"
          :rules="tableRules"
        >
          <a-form-item name="code" label="tableCode">
            <a-input v-model:value="formTableState.code" @blur="tableFormBlur"> </a-input>
          </a-form-item>
          <a-form-item name="name" label="tableName">
            <a-input v-model:value="formTableState.name" @blur="tableFormBlur"> </a-input>
          </a-form-item>
        </a-form>
        <a-button style="margin-bottom: 12px" @click="addColumn"
          >新增字段</a-button
        >
        <a-table :columns="columns" :data-source="dataSource" bordered>
          <template
            v-for="col in ['code', 'name', 'type', 'primary', 'mandatory']"
            #[col]="{ text, record }"
            :key="col"
          >
            <div>
              <a-input
                v-if="editableData[record.key] && col !== 'type'"
                v-model:value="editableData[record.key][col]"
                style="margin: -5px 0"
              />
              <a-auto-complete
                v-else-if="editableData[record.key] && col == 'type'"
                v-model:value="editableData[record.key][col]"
                :options="dataTypeOptions"
                :filter-option="(input, option) => option.value.indexOf(input) >= 0"
                style="margin: -5px 0"
              />

              <template v-else>
                {{ text }}
              </template>
            </div>
          </template>
          <template
            v-for="col in ['primary', 'mandatory']"
            #[col]="{ text, record }"
            :key="col"
          >
            <div>
              <a-checkbox
                v-if="editableData[record.key]"
                v-model:value="editableData[record.key][col]"
                style="margin: -5px 0"
              />
              <template v-else>
                <CheckOutlined v-if="text"/>
              </template>
            </div>
          </template>
          <template #operation="{ record }">
            <div class="editable-row-operations">
              <span v-if="editableData[record.key]">
                <a style="margin-right: 12px" @click="save(record.key)">保存</a>
                <a @click="cancel(record.key)">取消</a>
              </span>
              <span v-else>
                <a @click="edit(record.key)" style="margin-right: 12px">编辑</a>
                <a @click="remove(record)" style="color: red">删除</a>
              </span>
            </div>
          </template>
        </a-table>
      </template>
      <template v-else>
        <a-form
          ref="relationForm"
          :model="formRelationState"
          style="margin-bottom: 12px"
          :rules="relationRules"
          :label-col="{
            span: 4,
          }"
          :wrapper-col="{
            span: 14,
          }"

        >
          <a-form-item label="tableCodeInFrom" name="tableCodeInFrom">
            <a-select
              v-model:value="formRelationState.from.tableId"
              @change="
                handleTableCodeChange(
                  $event,
                  'tableColumnsOptionInFrom',
                  'from'
                )
              "
            >
              <a-select-option
                v-for="{ name, id } in tableNameOption"
                :key="id"
                :value="id"
                >{{ name }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-form-item label="tableColumnInFrom" name="tableColumnInFrom">
            <a-select v-model:value="formRelationState.from.columnId" @change="relationFormChange">
              <a-select-option
                v-for="{ name, key } in tableColumnsOptionInFrom"
                :key="key"
                :value="key"
                >{{ name }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-form-item label="tableCodeInTo" name="tableCodeInTo">
            <a-select
              v-model:value="formRelationState.to.tableId"
              @change="
                handleTableCodeChange($event, 'tableColumnsOptionInTo', 'to')
              "
            >
              <a-select-option
                v-for="{ name, id } in tableNameOption"
                :key="id"
                :value="id"
                >{{ name }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-form-item label="tableColumnInTo" name="tableColumnInTo">
            <a-select v-model:value="formRelationState.to.columnId" @change="relationFormChange">
              <a-select-option
                v-for="{ name, key } in tableColumnsOptionInTo"
                :key="key"
                :value="key"
                >{{ name }}</a-select-option
              >
            </a-select>
          </a-form-item>
        </a-form>
      </template>
      <template #footer>
        <a-button @click="handleCancel" v-if="modalType == '新增表'">取消</a-button>
        <a-button type="primary" @click="handleOk" v-if="modalType == '新增表'">确认</a-button>
        <span v-else></span>
      </template>
    </a-modal>
  </div>
</template>

<script>
import { Graph, Shape, Addon } from "@antv/x6";
import { DagreLayout } from "@antv/layout";
import {
  FormOutlined,
  DeleteOutlined,
  DatabaseFilled,
  CheckOutlined,
  LoadingOutlined
} from "@ant-design/icons-vue";
import { message, Modal } from 'ant-design-vue';
import { upperFirst, cloneDeep } from "lodash-es";

const { Dnd } = Addon

const LINE_HEIGHT = 24; //节点内行高
const NODE_WIDTH = 150; //节点宽度
//用于初始化data
const PROPS_LIST = [
  "loadingStatus",
  "width",
  "height",
  "isZoomable",
  "isDragable",
  "isScollable",
  "isEditable",
  "enableMiniMap",
  "backgroundGridType",
];

//设置port
Graph.registerPortLayout(
  "erPortPosition",
  (portsPositionArgs) => {
    return portsPositionArgs.map((_, index) => {
      return {
        position: {
          x: 0,
          y: (index + 1) * LINE_HEIGHT,
        },
        angle: 0,
      };
    });
  },
  true
);

//设置自定义node
Graph.registerNode(
  "er-rect",
  {
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
    ],
    attrs: {
      rect: {
        strokeWidth: 1,
        stroke: "#5F95FF",
        fill: "#5F95FF",
      },
      label: {
        fontWeight: "bold",
        fill: "#ffffff",
        fontSize: 12,
      },
    },
    ports: {
      groups: {
        list: {
          markup: [
            {
              tagName: "rect",
              selector: "portBody",
            },
            {
              tagName: "text",
              selector: "portNameLabel",
            },
            {
              tagName: "text",
              selector: "portTypeLabel",
            },
          ],
          attrs: {
            portBody: {
              width: NODE_WIDTH,
              height: LINE_HEIGHT,
              strokeWidth: 1,
              stroke: "#5F95FF",
              fill: "#EFF4FF",
              magnet: true,
            },
            portNameLabel: {
              ref: "portBody",
              refX: 6,
              refY: 6,
              fontSize: 10,
            },
            portTypeLabel: {
              ref: "portBody",
              refX: 95,
              refY: 6,
              fontSize: 10,
            },
          },
          position: "erPortPosition",
        },
      },
    },
  },
  true
);

//设置自动布局算法
const dagreLayout = new DagreLayout({
  type: "dagre",
  rankdir: "LR",
  align: "UL",
  ranksep: 80,
  nodesep: 80,
});

//弹窗表格col
const columns = [
  {
    title: '字段',
    dataIndex: 'code',
    width: '25%',
    slots: {
      customRender: 'code',
    },
  },
  {
    title: '说明',
    dataIndex: 'name',
    width: '25%',
    slots: {
      customRender: 'name',
    },
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: '20%',
    slots: {
      customRender: 'type',
    },
  },
  {
    title: '主键',
    dataIndex: 'primary',
    width: '5%',
    slots: {
      customRender: 'primary',
    },
  },
  {
    title: '非空',
    dataIndex: 'mandatory',
    width: '5%',
    slots: {
      customRender: 'mandatory',
    },
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    slots: {
      customRender: 'operation',
    },
  },
];

//数据类型options
const dataTypeOptions = [
  { value: 'smallint' },
  { value: 'text' },
  { value: 'time' },
  { value: 'timestamp' },
  { value: 'tinyblob' },
  { value: 'tinyint' },
  { value: 'tinytext' },
  { value: 'varbinary' },
  { value: 'varchar' },
  { value: 'varcharbinary' },
  { value: 'year' },
  { value: 'float' },
  { value: 'int' },
  { value: 'integer' },
  { value: 'longblob' },
  { value: 'longtext' },
  { value: 'mediumblob' },
  { value: 'mediumint' },
  { value: 'mediumtext' },
  { value: 'numeric' },
  { value: 'dec' },
  { value: 'decimal' },
  { value: 'double' },
  { value: 'double precision' },
  { value: 'enum' },
  { value: 'fixed' },
  { value: 'float' },
  { value: 'real' },
  { value: 'set' },
  { value: 'bigint' },
  { value: 'binary' },
  { value: 'bit' },
  { value: 'blob' },
  { value: 'bool' },
  { value: 'boolean' },
  { value: 'char' },
  { value: 'char binary' },
  { value: 'date' },
  { value: 'datetime' }
]

export default {
  components: {
    DatabaseFilled,
    FormOutlined,
    DeleteOutlined,
    CheckOutlined,
    LoadingOutlined
  },
  props: {
    /**
     * 数据
     */
    data: {
      type: Object,
      default: function () {
        return {
          tableList: [
            {
              id: "112",
              code: "1",
              name: "学生",
              columns: [
                {
                  key: "1-1",
                  code: "1-1",
                  name: "ID",
                  type: "STRING",
                  primary: 1,
                  mandatory: 1
                },
                {
                  key: "1-2",
                  code: "1-2",
                  name: "Name",
                  type: "STRING",
                  primary: 0,
                  mandatory: 1
                },
                {
                  key: "1-3",
                  code: "1-3",
                  name: "Class",
                  type: "NUMBER",
                  primary: 0,
                  mandatory: 1
                },
                {
                  key: "1-4",
                  code: "1-4",
                  name: "Gender",
                  type: "BOOLEAN",
                  primary: 0,
                  mandatory: 1
                },
              ],
            },
            {
              id: "11223",
              code: "2",
              name: "课程",
              columns: [
                {
                  key: "2-1",
                  code: "2-1",
                  name: "ID",
                  type: "STRING",
                },
                {
                  key: "2-2",
                  code: "2-2",
                  name: "Name",
                  type: "STRING",
                },
                {
                  key: "2-3",
                  code: "2-3",
                  name: "StudentID",
                  type: "STRING",
                },
                {
                  key: "2-4",
                  code: "2-4",
                  name: "TeacherID",
                  type: "STRING",
                },
                {
                  key: "2-5",
                  code: "2-5",
                  name: "Description",
                  type: "STRING",
                },
              ],
            },
            {
              id: "14412",
              code: "3",
              name: "老师",
              columns: [
                {
                  key: "3-1",
                  code: "3-1",
                  name: "ID",
                  type: "STRING",
                },
                {
                  key: "3-2",
                  code: "3-2",
                  name: "Name",
                  type: "STRING",
                },
                {
                  key: "3-3",
                  code: "3-3",
                  name: "Age",
                  type: "NUMBER",
                },
              ],
            },
          ],
          relationList: [
            {
              id: 'asdasdda',
              from: {
                tableId: "1",
                columnId: "1-1",
                tableCode: "1",
                column: "1-1",
              },
              to: {
                tableId: "2",
                columnId: "2-3",
                tableCode: "2",
                column: "2-3",
              },
            },
            {
              id: '1231ss',
              from: {
                tableId: "3",
                columnId: "3-1",
                tableCode: "3",
                column: "3-1",
              },
              to: {
                tableId: "2",
                columnId: "2-4",
                tableCode: "2",
                column: "2-4",
              },
            },
          ]
        }
      }
    },
    /**
     * GET URL
     */
    url: {
      type: String,
    },
    /**
     * GET Params
     */
    params: {
      type: Object,
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "1000",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "600",
    },
    /**
     * 是否允许缩放
     */
    isZoomable: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否允许拖拽
     */
    isDragable: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否允许滚动
     */
    isScollable: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否允许编辑
     */
    isEditable: {
      type: Boolean,
      default: true,
    },
    /**
     * 是否启用地图
     */
    enableMiniMap: {
      type: Boolean,
      default: true,
    },
    /**
     * 背景网格样式
     * @type Enum
     * @options ["dot", "fixedDot", "mesh", "doubleMesh", "none"]
     */
    backgroundGridType: {
      type: String,
      default: "dot",
    },
    /**
     * 加载状态
     */
    loadingStatus: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dataTypeOptions,
      cLoadingStatus: false,
      graph: null, //graph实例
      dnd: null, //拖拽对象
      graphEleId: "Graph",
      miniMapId: "miniMap",
      miniMapStyle: {
        position: "absolute",
        bottom: "10px",
        right: "20px",
      },

      //用来储存转换后的node和edge
      nodeList: [],
      edgeList: [],

      //控制tools按钮显隐
      editButtonVisible: false,

      //当前选中的节点
      currentSelectTableData: {},
      currentSelectRelationData: {},
      currentSelectNode: "",
      currentSelectEdge: "",
      currentSelectTableId: "",

      modalVisible: false,
      modalType: "",

      cWidth: "",
      cHeight: "",
      cTableList: [],
      cRelationList: [],
      cIsZoomable: true,
      cIsDragable: true,
      cIsEditable: true,
      cIsScollable: true,
      cEnableMiniMap: true,
      cBackgroundGridType: "dot",

      //modal 弹窗数据
      dataSource: [],
      relationFormRef: null,
      columns,
      tableRules: {},
      relationRules: {},
      editableData: {},
      formTableState: {
        code: '',
        name: ''
      },
      formRelationState: {
        from: {
          tableId: '',
          columnId: '',
          tableCode: '',
          column: ''
        },
        to: {
          tableId: '',
          columnId: '',
          tableCode: '',
          column: ''
        }
      },

      tableNameOption: [],
      tableColumnsOptionInFrom: [],
      tableColumnsOptionInTo: [],
    };
  },
  created() {
    //随机生成id，避免多个组件同时使用同一id
    const randomNum = Math.ceil(Math.random() * 1000);
    this.graphEleId += randomNum;
    this.miniMapId += randomNum;
  },
  mounted() {
    //注册表单验证信息
    const validate = async (rule, value) => {
      if (value === '') {
        return Promise.reject('该项不能为空');
      } else if ( this.formRelationState.from.tableId === this.formRelationState.to.tableId ) {
        return Promise.reject('from与to的表名称不能相同');
      } else {
        return Promise.resolve();
      }
    }

    this.tableRules = {
      code: {
        required: true,
        message: '请输入code!',
        trigger: 'blur',
      },
      name: {
        required: true,
        message: '请输入name!',
        trigger: 'blur',
      },
    }

    this.relationRules = {
      tableCodeInFrom: {
        required: true,
        validator: validate,
        trigger: 'blur',
      },

      tableCodeInTo: {
        required: true,
        validator: validate,
        trigger: 'blur',
      },

    }
    //初始化组件data数据
    PROPS_LIST.forEach((prop) => {
      const name = `c${upperFirst(prop)}`;
      this[name] = this[prop];
    });
    this.cTableList = this.data.tableList
    this.cRelationList = this.data.relationList
    //转化数据库数据为Graph格式
    this.nodeList = this.cTableList.map((item) =>
      this.transTableDataToNode(item)
    );
    this.edgeList = this.cRelationList.map((item) =>
      this.transRelationDataToEdge(item)
    );
    this.$nextTick(() => {
      //调用初始化画布配置方法
      this.initGraphOption();
      //挂载画布
      this.mountGraph();
    });
  },
  watch: {
    loadingStatus(val) {
      this.cLoadingStatus = val
    },
    width(val) {
      this.cWidth = this.getCssUnit(val)
      this.reloadGraph(true);
    },
    height(val) {
      this.cHeight = this.getCssUnit(val)
      this.reloadGraph(true);
    },
    isZoomable(val) {
      this.cIsZoomable = val
      this.reloadGraph(true);
    },
    isDragable(val) {
      this.cIsDragable = val
      this.reloadGraph(true);
    },
    isScollable(val) {
      this.cIsScollable = val
      this.reloadGraph(true);
    },
    isEditable(val) {
      this.cIsEditable = val
      this.reloadGraph(true);
    },
    enableMiniMap(val) {
      this.cEnableMiniMap = val
      this.reloadGraph(true);
    },
    backgroundGridType(val) {
      this.cBackgroundGridType = val
      this.reloadGraph(true);
    },
    data: {
      handler: function (newVal) {
        this.cTableList = newVal.tableList;
        this.cRelationList = newVal.relationList;
        this.nodeList = this.cTableList.map((item) =>
          this.transTableDataToNode(item)
        );
        this.edgeList = this.cRelationList.map((item) =>
          this.transRelationDataToEdge(item)
        );
        this.reloadGraph(true);
      },
      deep: true,
    },
    currentSelectTableData: {
      handler: function (val) {
        if (!val) return
        this.dataSource = val.columns
        this.formTableState = { code: val.code, name: val.name }
      },
      deep: true
    },
    cTableList: {
      handler: function (val) {
        if (this.currentSelectRelationData.from) {
          this.tableNameOption = val.map(item => ({code: item.code, name: item.name, id: item.id}))
          this.tableColumnsOptionInFrom = val.filter(item => item.code === this.currentSelectRelationData.from.tableCode)[0].columns
          this.tableColumnsOptionInTo = val.filter(item => item.code === this.currentSelectRelationData.to.tableCode)[0].columns
        }
        if (this.currentSelectTableId) {
          this.currentSelectTableData = val.filter(item => item.id === this.currentSelectTableId)[0]
        }
      },
      deep: true
    },
    currentSelectRelationData: {
      handler: function (val) {
        this.formRelationState = cloneDeep(val)
      },
      deep: true
    },
  },
  methods: {
    /**
     * 初始化画布配置
     */
    initGraphOption() {
      let self = this;
      //保存graph实例
      let container = document.getElementById(self.graphEleId)
      let { width, height } = document.getElementsByClassName('container')[0].getBoundingClientRect()
      this.graph = new Graph({
        container,
        width,
        height,
        resizing: {
          enabled: true,
          preserveAspectRatio: true
        },
        keyboard: {
          enabled: true,
        },
        connecting: {
          //连线路由配置
          router: {
            name: "manhattan",
            // args: {
            //   step: 5
            // }
            args: {
              startDirections: ['right','left'],
              endDirections: ['right','left'],
              maxDirectionChange: 180
            },
          },
          // connector: {
          //   name: 'jumpover',
          //   // args: {
          //   //   type: 'arc',
          //   //   size: 18
          //   // },
          // },
          createEdge() {
            return new Shape.Edge({
              attrs: {
                line: {
                  stroke: "#A2B1C3",
                  strokeWidth: 2,
                },
              },

              zIndex: 99999999
            });
          },
          allowBlank: false,
        },
        scroller: {
          //滚动配置
          enabled: self.cIsScollable,
          pageVisible: false,
          pageBreak: false,
          pannable: self.cIsDragable, //拖拽选项
        },
        mousewheel: {
          //缩放配置
          enabled: self.cIsZoomable,
          modifiers: ["ctrl", "meta"],
        },
        minimap: {
          //小地图配置
          enabled: self.cEnableMiniMap,
          container: document.getElementById(self.miniMapId),
        },
        grid: {
          //网格配置
          size: 10,
          visible: self.cBackgroundGridType !== "none",
          type: self.cBackgroundGridType,
          args: {
            color: "#a0a0a0", // 网格线/点颜色
            thickness: 1, // 网格线宽度/网格点大小
          },
        },
        selecting: {
          //框选配置
          enabled: true,
          showNodeSelectionBox: true,
          showEdgeSelectionBox: true,
          multiple: false,
        },
      });
      //框选事件
      this.graph.on("node:selected", ({ node }) => {
        self.editButtonVisible = true;
        self.currentSelectNode = node.data.id;
      });
      this.graph.on("node:unselected", () => {
        self.editButtonVisible = false;
        self.currentSelectNode = "";
      });
      this.graph.on("edge:selected", ({ edge }) => {
        self.editButtonVisible = true;
        self.currentSelectEdge = edge.id;
      });
      this.graph.on("edge:unselected", () => {
        self.editButtonVisible = false;
        self.currentSelectEdge = "";
      });
      //双击node修改
      this.graph.on("node:dblclick", ({ node }) => {
        self.currentSelectTableId = node.data.id
        self.currentSelectTableData = self.transNodeDataToTable({
          data: node.data,
          id: node.id,
          label: node.label,
          ports: node.port.ports,
        });
        self.openEditTableModal();
      });
      //监听edge链接事件，将新增的edge添加进edgeList
      this.graph.on("edge:connected", ({ isNew, edge }) => {
        if (isNew) {
          const { id, shape, source, target } = edge;
          self.edgeList.push({
            id,
            shape,
            source,
            target,
            attrs: { line: { stroke: "#A2B1C3", strokeWidth: 2 } },
            zIndex: 0,
          });
          this.relationAdd(edge)
        }
      });
      //双击edge修改
      this.graph.on("edge:dblclick", ({ edge }) => {
        self.currentSelectRelationData = self.transEdgeDataToRelation(edge);
        self.cTableList = self.nodeList.map((item) =>
          self.transNodeDataToTable(item)
        );
        self.openEditRelationModal();
      });
      //拖拽配置
      this.dnd = new Dnd({
        target: self.graph,
        scaled: false,
        animation: true,
      })
      this.graph.bindKey(['backspace', 'del'], () => {
        self.deleteCurretSelect()
      })
    },
    relationAdd(edge) {
      this.$emit('relationAdd', edge)
    },

    /**
     * 拖拽新增表
     */
    startDragAddTable(e) {
      const nodeOption = this.transTableDataToNode({
        id: "new_table*",
        code: "new_table*",
        name: "new_table*",
        columns: [],
      })
      const node = this.graph.createNode(nodeOption)
      this.dnd.start(node, e)
    },

    /**
     * 挂载画布
     */
    mountGraph() {
      //初始化布局
      const model = {
        nodes: this.nodeList,
        edges: this.edgeList,
      };
      console.log(model,'model');
      const newModel = dagreLayout.layout(model);
      //展示graph
      this.graph.fromJSON(newModel);
      this.graph.centerContent()
    },

    /**
     * 重置画布。在表数据或配置项发生变化时使用
     * @param hardRload 为true时将销毁整个画布实例并在重新加载配置项之后挂载画布
     */
    reloadGraph(hardRload) {
      if (hardRload) {
        this.cTableList = this.data.tableList
        this.cRelationList = this.data.relationList
        //转化数据库数据为Graph格式
        this.nodeList = this.cTableList.map((item) =>
          this.transTableDataToNode(item)
        );
        this.edgeList = this.cRelationList.map((item) =>
          this.transRelationDataToEdge(item)
        );
        this.graph.dispose();
        this.initGraphOption();
      }
      this.mountGraph();
    },

    /**
     * 转换column为port数据
     * @param column
     */
    transColumnDataToPort(column) {
      return {
        id: column.code,
        key: column.key,
        group: "list",
        attrs: {
          portNameLabel: {
            text: column.name,
          },
          portTypeLabel: {
            text: column.type,
          },
        },
      };
    },

    /**
     * 转换表数据为node数据
     * @param tableData
     */
    transTableDataToNode(tableData) {
      //处理columns。转换为ports
      const ports = tableData.columns.map((item) =>
        this.transColumnDataToPort(item)
      );
      return {
        id: tableData.code,
        shape: "er-rect",
        label: tableData.name,
        width: NODE_WIDTH,
        height: LINE_HEIGHT,
        data: {
          id: tableData.id,
          tableData
        },
        ports,
      }
    },

    /**
     * 转换relation为edge数据
     * @param relationData
     */
    transRelationDataToEdge(relationData) {
      //随机生成一个临时id
      // const id = Math.ceil(Math.random() * 1000000000) + "";
      return {
        id: relationData.id,
        shape: "edge",
        data: relationData,
        source: {
          cell: relationData.from.tableCode,
          port: relationData.from.column,
        },
        target: {
          cell: relationData.to.tableCode,
          port: relationData.to.column,
        },
        attrs: {
          line: {
            stroke: "#A2B1C3",
            strokeWidth: 2,
          },
        },
        zIndex: 0,
      };
    },

    /**
     * 转换edge为relation数据
     * @param edgeData
     */
    transEdgeDataToRelation(edgeData) {
      return {
        id: edgeData.id,
        from: {
          tableId: edgeData.data.from.tableId,
          columnId: edgeData.data.from.columnId,
          tableCode: edgeData.source.cell,
          column: edgeData.source.port,
        },
        to: {
          tableId: edgeData.data.to.tableId,
          columnId: edgeData.data.to.columnId,
          tableCode: edgeData.target?.cell,
          column: edgeData.target?.port,
        },
      };
    },

    /**
     * 转换node数据为表数据
     * @param node
     */
    transNodeDataToTable(node) {
      // const columns = node.ports.map((item) => this.transPortToColumn(item));

      return {
        id: node.data.id,
        code: node.id,
        name: node.label,
        columns: node.data.tableData.columns,
      };
    },

    /**
     * 转换port数据为column
     * @param port
     */
    transPortToColumn(port) {
      return {
        code: port.id,
        name: port.attrs.portNameLabel.text,
        type: port.attrs.portTypeLabel.text,
        key: port.key,
      };
    },

    /**
     * 新增表
     * @param tableData
     */
    addTable(tableData) {
      this.nodeList.push(this.transTableDataToNode(tableData));
      this.$emit('addTable', tableData)
      // this.reloadGraph();
    },

    /**
     * 批量新增表
     * @param tableList
     */
    batchAddTable(tableList) {
      const temp = tableList.map((item) => {
        return this.transTableDataToNode(item);
      });
      this.nodeList.push(...temp);
      this.reloadGraph();
    },

    /**
     * 在指定表中新增字段
     * @param tableCode
     * @param column 表字段配置项
     */
    addTableColumn(tableCode, column) {
      const ports = this.transColumnDataToPort(column);
      this.nodeList = this.nodeList.map((item) => {
        return item.id == tableCode
          ? {
              ...item,
              ports: [...item.ports, ports],
            }
          : item;
      });
      this.reloadGraph();
    },

    /**
     * 在指定表中批量新增字段
     * @param tableCode
     * @param columns
     */
    batchAddTableColumns(tableCode, columns) {
      const ports = columns.map((item) => this.transColumnDataToPort(item));
      this.nodeList = this.nodeList.map((item) => {
        return item.id == tableCode
          ? {
              ...item,
              ports: [...item.ports, ...ports],
            }
          : item;
      });
      this.reloadGraph();
    },

    /**
     * 删除表
     * @param tableId 传入tableId数组可支持批量删除 [ id1, id2, id3... ]
     */
    deleteTable(tableId) {
      this.nodeList = this.nodeList.filter((item) =>
        Array.isArray(tableId)
          ? tableId.indexOf(item.id) === -1
          : item.data.id !== tableId
      );
      this.$emit('deleteTable',tableId)
    },

    /**
     * 删除指定字段的关联关系
     * @param tableCode
     * @param columnCode
     */
    deleteColumnRelationByCode(tableCode, columnCode) {
      this.edgeList = this.edgeList.filter((item) => {
        if (item.source.cell === tableCode) {
          if (item.source.port === columnCode) {
            return false;
          } else {
            return true;
          }
        } else if (item.target.cell === tableCode) {
          if (item.target.port === columnCode) {
            return false;
          } else {
            return true;
          }
        }
      });
    },

    /**
     * 删除指定表的关联关系
     * @param tableCode 传入tableCode数组可支持批量删除 [ id1, id2, id3... ]
     */
    deleteTableRelationByCode(tableCode) {
      this.edgeList = this.edgeList.filter((item) =>
        Array.isArray(tableCode)
          ? tableCode.indexOf(item.source.cell) === -1 &&
            tableCode.indexOf(item.target.cell) === -1
          : item.source.cell !== tableCode && item.target.cell !== tableCode
      );
    },

    /**
     * 根据edge的id来删除对应的关联关系
     * @param edgeId
     */
    deleteRelationByEdgeId(edgeId) {
      this.edgeList = this.edgeList.filter((item) => item.id !== edgeId);
      this.$emit('deleteRelationByEdgeId', edgeId)
      this.reloadGraph();
    },

    /**
     * 删除指定表中字段
     * @param tableCode
     * @param columnCode 传入columnCode数组可支持批量删除 [ id1, id2, id3... ]
     */
    deleteTableColumnByCode(tableCode, columnCode) {
      this.nodeList = this.nodeList.map((item) =>
        tableCode === item
          ? {
              ...item,
              ports: item.ports.filter((port) =>
                Array.isArray(columnCode)
                  ? columnCode.indexOf(port.attrs.portNameLabel.text) === -1
                  : port.attrs.portNameLabel.text !== columnCode
              ),
            }
          : item
      );
      this.deleteColumnRelationByCode(tableCode, columnCode);
      this.reloadGraph();
    },

    /**
     * 修改表
     * @param tableCode
     * @param tableData
     */
    updateTable(tableCode, tableData) {
      const nodeData = this.transTableDataToNode(tableData);
      this.nodeList = this.nodeList.map((item) =>
        item.id === tableCode ? nodeData : item
      );
      // this.edgeList = this.edgeList.map(item => {
      //   if ( item.source.cell === tableCode ) {
      //     return {
      //       ...item,
      //       source: {
      //         cell: tableData.code,
      //         port: item.source.port,
      //       },
      //     }
      //   } else if ( item.target.cell === tableCode ) {

      //   }
      // })
      //删除被修改表的关联关系，避免出现id不一致
      this.deleteTableRelationByCode(tableCode);
      this.reloadGraph();
    },

    /**
     * 更新表间关系
     * @param relationData
     * @param relationCode Graph上edge的id
     */
    updateRelation(relationData, relationCode) {
      const edgeData = this.transRelationDataToEdge(relationData);
      this.edgeList = this.edgeList.map((item) =>
        item.id === relationCode ? edgeData : item
      );
      this.reloadGraph();
    },

    /**
     * 通过name查询表
     * @param tableName
     */
    getTableByName(tableName) {
      const nodeData = this.nodeList.filter(
        (item) => item.label === tableName
      )[0];
      return this.transNodeDataToTable(nodeData);
    },

    /**
     * 通过code查询表
     * @param tableCode
     */
    getTableByCode(tableCode) {
      const nodeData = this.nodeList.filter((item) => item.id === tableCode)[0];
      return this.transNodeDataToTable(nodeData);
    },

    /**
     * 通过本表字段对应的外链表。例如 book_id对应的book表
     * @param tableCode
     */
    getForeignTablesByCode(tableCode) {
      let resCodeList = [];
      this.edgeList.forEach((item) => {
        if (item.source.cell === tableCode) {
          resCodeList.push(item.target.cell);
        }
      });
      return resCodeList;
    },

    /**
     * 查询所有指向该表的表
     * @param tableCode
     */
    getRelatedTablesByCode(tableCode) {
      let resCodeList = [];
      this.edgeList.forEach((item) => {
        if (item.target.cell === tableCode) {
          resCodeList.push(item.source.cell);
        }
      });
      return resCodeList;
    },

    /**
     * 打开新增表数据的弹窗
     */
    openAddTableModal() {
      this.modalVisible = true;
      this.modalType = "新增表";
    },

    /**
     * 打开修改表数据的弹窗
     */
    openEditTableModal() {
      this.modalVisible = true;
      this.modalType = `${this.currentSelectTableData.name}表(${this.currentSelectTableData.code})`;
    },

    /**
     * 打开修改表间关系的弹窗
     */
    openEditRelationModal() {
      this.modalVisible = true;
      this.modalType = "表间关系";
    },

    /**
     * 删除当前选中
     */
    deleteCurretSelect() {
      Modal.confirm({
        content: '是否确认删除？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => {
          this.currentSelectNode && this.deleteTable(this.currentSelectNode);
          this.currentSelectEdge &&
            this.deleteRelationByEdgeId(this.currentSelectEdge);
        }
      });

    },

    /**
     * 弹窗关闭
     */
    modalClose() {
      this.modalVisible = false;
    },

    /**
     * 弹窗表格提交
     * @param data 修改之后的数据
     * @param tableCode 为空即新增
     */
    modalTableSubmit(data, tableCode) {
      if (tableCode) {
        this.updateTable(tableCode, data);
      } else {
        this.addTable(data);
        this.modalVisible = false;
      }
    },

    /**
     * 表关系修改提交
     * @param relationData
     * @param relationCode Graph上edge的id
     */
    modalRelationSubmit(relationData, relationCode) {
      this.updateRelation(relationData, relationCode);
    },

    /**
     * 提交修改的数据
     */
    handleOk() {
      const tableData = {
        ...this.formTableState,
        columns: this.dataSource
      }

      if ( this.modalType == '新增表' ) {
        this.$refs.tableForm.validate().then(() => {
          this.modalTableSubmit(tableData)
          this.reset()
        }).catch(() => {
          message.error('选项填写有误！');
        })
      }
    },
    /**
     * 取消修改
     */
    handleCancel() {
      this.reset()
      this.modalClose()
    },
    /**
     * 修改弹窗中，表格字段修改blur事件
     */
    tableFormBlur() {
      if (this.modalType == '新增表') return
      this.$refs.tableForm.validate().then(() => {
        this.saveTableChange()
      }).catch(() => {
        message.error('选项填写有误！');
      })
    },
    saveTableChange() {
      this.$emit('saveTableChange',this.formTableState,this.currentSelectTableId)
    },
    /**
     * 修改弹窗中，表格关系修改blur事件
     */
    relationFormChange() {
      if (this.modalType == '新增表') return
      this.$refs.relationForm.validate().then(() => {
        this.saveRelationChange()
      }).catch(() => {
        message.error('选项填写有误！');
      })
    },
    saveRelationChange() {
      const relationData = cloneDeep(this.formRelationState)
      if (relationData.from.columnId && relationData.to.columnId) {
        this.$emit('saveRelationChange',relationData,this.currentSelectEdge)
      }
    },
    /**
     * 表格行编辑方法
     */
    edit(key) {
      this.editableData[key] = cloneDeep(this.dataSource.filter(item => key === item.key)[0])
    },
    /**
     * 表格行保存
     */
    save(key) {
      Object.assign(this.dataSource.filter(item => key === item.key)[0], this.editableData[key]);
      if (this.modalType !== '新增表') {
        this.$emit('saveColChange', this.editableData[key],this.currentSelectTableId,this.dataSource)
      }
      delete this.editableData[key]
    },
    /**
     * 表格行编辑取消
     */
    cancel(key) {
      delete this.editableData[key];
    },
    /**
     * 表格行删除
     */
    remove({ key, code, isNew }) {
      this.dataSource = this.dataSource.filter(item => key !== item.key)
      if (this.modalType !== '新增表' && !isNew) {
        this.$emit('delCol', key, this.currentSelectTableId,this.dataSource)
      }
      //删除指定表中字段，避免因未删除关联关系出现error
      // this.deleteTableColumnByCode(this.currentSelectNode, code)
    },
    /**
     * 新增一条column
     */
    addColumn() {
      //随机生成一个临时key
      const key = Math.ceil(Math.random() * 1000000000);
      this.dataSource.push({
        key,
        code: "",
        name: "",
        type: "",
        isNew: true
      })
    },
    /**
     * 选择表
     */
    handleTableCodeChange(val, optionName, dataName) {
      this[optionName] = this.cTableList.filter(item => item.id === val)[0].columns
      this.formRelationState[dataName].columnId = ''
      this.relationFormChange()
    },
    /**
     * 重置数据
     */
    reset() {
      this.formTableState = {
        node: '',
        name: ''
      }
      this.dataSource = []
      this.editableData = {}
      this.formRelationState = {
        from: {
          tableCode: '',
          column: ''
        },
        to: {
          tableCode: '',
          column: ''
        }
      }
      this.tableNameOption = []
      this.tableColumnsOptionInFrom = []
      this.tableColumnsOptionInTo = []
    },

    /**
     * css转换
     */
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
  position: relative;
}
.tools {
  position: absolute;
  width: 30px;
  height: 60px;
  top: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
}
.loading-container {
  position: absolute;
  z-index: 99999999;
  opacity: .7;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  color: #ee4f12;
}
</style>
