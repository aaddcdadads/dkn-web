<template>
  <div v-if="!hidden" class="panel-table_div">
    <hm-panel
      :title="title"
      :titleHeight="titleHeight"
      :width="titleLineWidth"
      :height="titleLineHeight"
      :borderRadius="borderRadius"
      :textAlign="textAlign"
      :boxShadowHShadow="boxShadowHShadow"
      :boxShadowVShadow="boxShadowVShadow"
      :boxShadowBlur="boxShadowBlur"
      :boxShadowSpread="boxShadowSpread"
      :padding="padding"
      :boxShadowColor="boxShadowColor"
      :backgroundColor="backgroundColor"
      :titleBlockWidth="titleBlockWidth"
      :titleBlockHeight="titleBlockHeight"
      :titleBlockColor="titleBlockColor"
      :titleColor="titleColor"
      :slotWidth="slotWidth"
      :slotHeight="slotHeight"
    >
      <template v-slot:slot-title-icon>
        <a-popover
          class="popover"
          title="选择要展示的列表项"
          trigger="click"
          :placement="bottom"
          @visibleChange="popoverChange"
        >
          <template #content>
            <a-row>
              <a-checkbox
                :icheckboxndeterminate="indeterminate"
                :checked="checkAll"
                @change="onCheckAllChange"
              >全选</a-checkbox>
            </a-row>
            <a-checkbox-group
              class="checkboxGroup"
              v-model:value="checkedList"
              :options="plainOptions"
              @change="onColumnSelectChange"
            ></a-checkbox-group>
          </template>
          <i :class="titleicon" :style="`position: absolute;right: 25px;color:${cTitleIconColor}`"></i>
        </a-popover>
      </template>
    </hm-panel>
    <hm-ant-table
      ref="table"
      :columns="cColumns"
      :data="cData"
      :url="url"
      :params="params"
      :getDataMap="getDataMap"
      :show-column-no="showColumnNo"
      :rowSelectFlag="rowSelectFlag"
      :bordered="bordered"
      :actions="cActions"
      :combined="cCombined"
      :isFlatAction="isFlatAction"
      :scroll="scroll"
      :pagination="cPagination"
      @change="onChange"
      @onSelect="onSelect"
      @onSelectChange="onSelectChange"
      @onSelectAll="onSelectAll"
    ></hm-ant-table>
  </div>
</template>
<script>
import HmAntTable from '/@/components/built-in/jeecg/HmAntTable.vue';
import HmPanel from '/@/components/built-in/layout/HmPanel.vue';
import _ from 'lodash'
export default {
  name: "HmPanelTable",
  components: {
    HmPanel,
    HmAntTable
  },
  props: {
    /**
		 * 列定义
		 */
    columns: {
      type: Array,
      default: function() {
        return [
          {
            title: "姓名",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "年龄",
            dataIndex: "age",
            key: "age",
            width: 80,
          },
          {
            title: "地址",
            dataIndex: "address",
            key: "address",
            ellipsis: true,
          },
          {
            title: "性别",
            dataIndex: "sexual",
            key: "sexual",
            ellipsis: true,
          },
          {
            title: "毕业院校",
            dataIndex: "school",
            key: "school",
            ellipsis: true,
          },
          {
            title: "操作",
            dataIndex: "",
            key: "action",
            slots: { customRender: "action" },
          },
        ];
      },
    },
		/**
		 * 列表数据
		 */
    data: {
      type: Array,
      default: function() {
        return [
          {
            key: "1",
            name: "John Brown",
            age: 32,
            address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
            sexual: "男",
            school: "加里敦大学",
          },
          {
            key: "2",
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park, London No. 2 Lake Park",
            sexual: "男",
            school: "加里敦大学",
          },
          {
            key: "3",
            name: "Joe Black",
            age: 32,
            address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
            sexual: "男",
            school: "加里敦大学",
          },
        ];
      },
    },
    /**
     * 翻页参数
     */
    pagination: {
      type: Object,
      default: function () {
        return {
          current: 1,
          pageSize: 10,
        };
      },
    },
    /**
     * 显示序号列
     */
    showColumnNo: {
      type: Boolean,
      default: false
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
     * 请求结果映射
     * @desc list为列表数据路径；total为总数路径。路径采用JSONPath格式（去掉前面的 $.）
     */
    getDataMap: {
      type: Object,
      default: function () {
        return {
          list: '',
          total: ''
        }
      }
    },
    /**
     * 可选择行
     */
    rowSelectFlag: {
      type: Boolean,
      default: false
    },
    /**
     * 表格宽度
     */
    width: {
      type: String,
      default: '100%'
    },
    /**
     * 表格高度
     */
    height: {
      type: String,
      default: '500'
    },
    /**
     * 标题行宽度
     */
    titleLineWidth: {
      type: String,
      default: '100%'
    },
    /**
     * 标题行高度
     */
    titleLineHeight: {
      type: String,
      default: '45'
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: "表格标题"
    },
    /**
     * 标题大小
     */
    titleSize: {
      type: String,
      default: "14"
    },
    /**
    * 标题高度
    */
    titleHeight: {
      type: String,
      default: '45'
    },
    /**
     * 标题颜色
     * @type Color
     */
    titleColor: {
      type: String,
      default: '#000000'
    },
    /**
    * 标题图标
    * @type Icon
    */
    titleicon: {
      type: String,
      default: 'fa fa-bath'
    },
    /**
     * 图标大小
     */
    titleIconSize: {
      type: String,
      default: '24'
    },
    /**
    * 图标颜色
    * @type Color
    */
    titleIconColor: {
      type: String,
      default: '#0000FF'
    },

    /**
    * 背景色
    * @type Color
    */
    backgroundColor: {
      type: String,
      default: '#fff'
    },

    /**
     * 标题块宽
     */
    titleBlockWidth: {
      type: String,
      default: '4'
    },
    /**
     * 标题块高
     */
    titleBlockHeight: {
      type: String,
      default: '16'
    },
    /**
     * 标题块颜色
     * @type Color
     */
    titleBlockColor: {
      type: String,
      default: '#1890ff'
    },
    /**
     * 圆角
     */
    borderRadius: {
      type: String,
      default: '8'
    },
    /**
     * 对齐
     */
    textAlign: {
      type: String,
      default: 'left'
    },
    /**
     * 内边距
     */
    padding: {
      type: String,
      default: '5'
    },
    /**
     * 水平阴影
     */
    boxShadowHShadow: {
      type: String,
      default: '0'
    },
    /**
     * 垂直阴影
     */
    boxShadowVShadow: {
      type: String,
      default: '2'
    },
    /**
     * 模糊距离
     */
    boxShadowBlur: {
      type: String,
      default: '12'
    },
    /**
     * 阴影大小
     */
    boxShadowSpread: {
      type: String,
      default: '0'
    },
    /**
     * 阴影颜色
     * @type Color
     */
    boxShadowColor: {
      type: String,
      default: 'rgba(0,0,0,0.04)'
    },

    /**
     * 是否隐藏
     */
    hidden: {
      type: Boolean,
      default: false
    },
    /**
    * 插槽宽度
    */
    slotWidth: {
      type: String,
      default: '21'
    },
    /**
     * 插槽高度
     */
    slotHeight: {
      type: String,
      default: '19'
    },
    /**
     * 表格边框
     */
    bordered: {
      type: Boolean,
      default: true
    },
    /**
     * 操作按钮
     */
    actions: {
      type: Array,
      default: function() {
        return [
          {
            name: "编辑",
            callback: `function (item) {
							console.log("点击编辑: ", item);
						}`,
          },
          {
            name: "删除",
            callback: `function (item) {
							console.log("点击删除: ", item);
						}`,
          },
        ];
      },
    },
    /**
     * 操作按钮展开
     */
    isFlatAction: {
      type: Boolean,
      default: false
    },
    /**
     * 固定行列
     */
    scroll: {
      type: Object,
      default: function () {
        return {
          x: '100%'
        }
      }
    },
    /**
     * 自动合并单元
     * @description 数据相同的内容自动合并. 形如 ["r1c1:r10c1", "r2c2:r10c2", "r1:r2", "c4"]，这里的r1c1表示的是第1行（row 1），第1列（column 1）。第1列不包含表格，指的是数据行。
     */
    combined: {
      type: Array,
      default: function() {
        return [];
      }
    },

  },
  data() {
    return {
      checkAll: true,
      indeterminate: true,
      checkedList: [],
      plainOptions: [],
      cColumns: [],
      cData: [],
      // cParams: [],
      cActions: [],
      cCombined: [],
      cWidth: '100%',
      cHeight: '400px',
      cTitleSize: '16px',
      cTitleIconSize: '24px',
      cTitleIconColor: '',
      cPagination: {
        current: 1,
        pageSize: 10,
      },
    };
  },
  watch: {
    columns: {
      handler: function(value, oldValue) {
        this.cColumns = value
      }, 
      deep: true
    },
    data: {
      handler: function(value, oldValue) {
        this.cData = value
      }, 
      deep: true
    },
    // params: {
    //   handler: function(value, oldValue) {
    //     this.cParams = value
    //   }, 
    //   deep: true
    // },
    actions: {
      handler: function(value, oldValue) {
        this.cActions = value
      }, 
      deep: true
    },
    combined: {
      handler: function(value, oldValue) {
        this.cCombined = value
      }, 
      deep: true
    },
    pagination: {
      handler: function(value, oldValue) {
        this.cPagination = Object.assign(this.cPagination, value);
      }, 
      deep: true
    },
    width(value) {
      this.cWidth = this.getCssUnit(value)
    },
    height(value) {
      this.cHeight = this.getCssUnit(value)
    },
    titleSize(value) {
      this.cTitleSize = this.getCssUnit(value)
    },
    titleIconColor(value) {
      this.cTitleIconColor = value
    },
    titleIconSize(value) {
      this.cTitleIconSize = this.getCssUnit(value)
    },
  },

  mounted() {
    this.cColumns = this.columns;
    this.plainOptions = this.columns.map(item => {
      return item.title
    });
    this.cData = this.data;
    // this.cParams = this.params;
    this.cActions = this.actions;
    this.cCombined = this.combined;
    this.checkedList = this.plainOptions;
    this.cWidth = this.getCssUnit(this.width);
    this.cHeight = this.getCssUnit(this.height);
    this.cTitleSize = this.getCssUnit(this.titleSize);
    this.cTitleIconSize = this.getCssUnit(this.titleIconSize);
    this.cTitleIconColor = this.titleIconColor;
    this.cPagination = Object.assign(this.cPagination, this.pagination);
  },

  methods: {
    getData(){
      this.$refs.table.getData()
    },
    /**
     * 全选change事件
     */
    onCheckAllChange(e) {
      this.checkedList = e.target.checked ? this.plainOptions : [];
      this.indeterminate = false;
      this.checkAll = e.target.checked;
      this.checkboxChangeColumns();
    },

    onChange(pagination, filters, sorter, { currentDataSource }) {
      console.log(
        `pagination: `,
        pagination,
        "filters: ",
        filters,
        "sorter: ",
        sorter,
        "currentDataSource: ",
        currentDataSource
      );
      this.cPagination = Object.assign(this.cPagination, pagination);
      console.log('this.cPagination: ', this.cPagination);
      this.$emit("change", pagination, filters, sorter, { currentDataSource });
    },

    onSelectChange(data) {
      this.$emit("onSelectChange", data);
    },

    onSelect(data) {
      this.$emit("onSelect", data);
    },

    onSelectAll(data) {
      this.$emit("onSelectAll", data);
    },

    /**
     * 列选择change事件
     */
    onColumnSelectChange(checkedList) {
      // console.log("checkedList", checkedList, this.columns)
      this.indeterminate = !!checkedList.length && checkedList.length < this.plainOptions.length;
      this.checkAll = checkedList.length === this.plainOptions.length;
      this.checkboxChangeColumns();
    },

    /**
     * 列选择改变列表展示项
     */
    checkboxChangeColumns() {
      let _this = this
      this.cColumns = _.filter(_this.columns, function(item) {
        let lastIndex = _.indexOf(_this.checkedList, item.title)
        return lastIndex != -1
      })
    },

    /**
     * 气泡框change事件
     */
    popoverChange(e) {
      console.log("气泡框change事件", e)
    },

    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  }
};
</script>
<style scoped>
.panel-table_div {
  width: v-bind(cWidth);
  height: v-bind(cHeight);
}

.popover::before {
  font-size: v-bind(cTitleIconSize);
}

.checkboxGroup /deep/ .ant-checkbox-group-item {
  display: block;
}

.panel-table_div /deep/ .title {
  font-size: v-bind(cTitleSize)
}
</style>
