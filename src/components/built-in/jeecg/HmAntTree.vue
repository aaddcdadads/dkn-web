<template>
  <div class="tree-combox">
    <a-input-search v-if="isSearch" v-model:value="searchValue" @change="onSearchChange" style="margin-bottom: 8px"
      placeholder="Search" />
    <div class="tree-check" v-if="isControl && checkable">
      <a-checkbox v-model="value1" @change="showNode">展开/折叠</a-checkbox>
      <a-checkbox v-model="value2" @change="allNode">全选/全不选</a-checkbox>
      <a-checkbox :checked="!checkStrictly" @change="checkNode">父子联动</a-checkbox>
    </div>
    <a-tree v-model:checkedKeys="cCheckedKeys" :checkable="checkable" v-model:expanded-keys="expandedKeys"
      :auto-expand-parent="autoExpandParent" :selected-keys="selectedKeys" :tree-data="cTreeData" :show-line="showLine"
      :block-node="blockNode" :replace-fields="replaceFields" :check-strictly="checkStrictly"
      :default-checked-keys="defaultCheckedKeys" :draggable="draggable" :filter-tree-node="filterTreeNode"
      :loaded-keys="loadedKeys" :multiple="multiple" :selectable="selectable" :show-icon="showIcon" @expand="onExpand"
      @select="onSelect" @check="onCheck" @dragend="onDragend" @dragenter="onDragenter" @dragleave="onDragleave"
      @dragover="onDragover" @dragstart="onDragstart" @drop="onDrop" @load="onLoad" @rightClick="onRightClick">
      <!-- { key: treeKey, title, titleMenuDisabled } -->
      <template #title="treeNode" v-if="actions.length > 0">
        <div class="title-div">
          <div>
            <span>{{ treeNode.title }}</span>
          </div>
          <div class="title-div-slot" v-if="!treeNode.titleMenuDisabled">
            <a-popover :trigger="['hover']">
              <template #content>
                <a-menu>
                  <a-menu-item v-for="(action, index) in actions" :key="index" @click="action.callback(action, treeNode)">
                    {{ action.name }}
                  </a-menu-item>
                </a-menu>
              </template>
              <EllipsisOutlined />
            </a-popover>
          </div>
        </div>
      </template>
      <template #custom="{ slots, selected }">
        <!-- <i :class="`fa fa-${slots.iconClass}`"></i> -->
        <img :src="selected ? slots.selectedIconUrl : slots.iconUrl" :width="slots.iconWidth" :height="slots.iconHeight"
          class="icon-img" />
      </template>
    </a-tree>
  </div>
</template>

<script>
import { getAction, postAction } from "/@/request/http";
import { EllipsisOutlined } from "@ant-design/icons-vue";
import _ from "lodash";

export default {
  name: "HmAntTree",
  components: {
    EllipsisOutlined,
  },
  props: {
    /**
     * 数据
     */
    treeData: {
      type: Array,
      default: function () {
        return [
          {
            title: "0-0",
            key: "0-0",
            children: [
              {
                title: "0-0-0",
                key: "0-0-0",
                children: [
                  {
                    title: "0-0-0-0",
                    key: "0-0-0-0",
                    slots: {
                      icon: "custom",
                      selectedIconUrl:
                        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/gongkan/r.jpg",
                      iconUrl:
                        "https://block-design.oss-cn-shenzhen.aliyuncs.com/project-imgs/gongkan/r.jpg",
                      iconWidth: 20,
                      iconHeight: 20,
                    },
                  },
                  { title: "0-0-0-1", key: "0-0-0-1" },
                  { title: "0-0-0-2", key: "0-0-0-2" },
                ],
              },
              {
                title: "0-0-1",
                key: "0-0-1",
                children: [
                  { title: "0-0-1-0", key: "0-0-1-0" },
                  { title: "0-0-1-1", key: "0-0-1-1" },
                  { title: "0-0-1-2", key: "0-0-1-2" },
                ],
              },
              {
                title: "0-0-2",
                key: "0-0-2",
              },
            ],
          },
          {
            title: "0-1",
            key: "0-1",
            children: [
              { title: "0-1-0-0", key: "0-1-0-0" },
              { title: "0-1-0-1", key: "0-1-0-1" },
              { title: "0-1-0-2", key: "0-1-0-2" },
            ],
          },
          {
            title: "0-2",
            key: "0-2",
          },
        ];
      },
    },
    /**
     * 操作按钮
     */
    actions: {
      type: Array,
      default: function () {
        return [
          {
            name: "添加子级",
            callback: function (action, item) {
              console.log("添加子级: ", action, item);
            },
          },
          {
            name: "删除",
            callback: function (action, item) {
              console.log("删除: ", action, item);
            },
          },
          {
            name: "重命名",
            callback: function (action, item) {
              console.log("重命名: ", action, item);
            },
          },
        ];
      },
    },
    /**
     * 当前选中项
     */
    checkedKeys: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     * 是否展示连线
     */
    showLine: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示复选框
     */
    checkable: {
      type: Boolean,
      default: false,
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
      default: function () {
        return {};
      },
    },
    /**
     * 数据父字段
     */
    parentColumn: {
      type: String,
      default: "parentId",
    },
    /**
     * 远程数据映射
     */
    dataMap: {
      type: Object,
      default: function () {
        return {
          key: "key",
          title: "title",
        };
      },
    },
    /**
     * 节点占据一行
     */
    blockNode: {
      type: Boolean,
      default: false,
    },
    /**
     * 字段替换
     */
    replaceFields: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 自动展开
     */
    autoExpandParent: {
      type: Boolean,
      default: false,
    },
    /**
     * @Deprecated 父子节点不关联
     */
    // checkStrictly: {
    // 	type: Boolean,
    // 	default: false,
    // },
    /**
     * 默认选中节点
     */
    defaultCheckedKeys: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     *（受控）展开指定的树节点
     */
    // expandedKeys: {
    //   type: Array,
    //   default: function(){
    //      return ["0-0-0", "0-0-1"]
    //   },
    // },
    /**
     * 节点可拖拽
     */
    draggable: {
      type: Boolean,
      default: false,
    },
    /**
     * @Deprecated 按需高亮树节点
     */
    // filterTreeNode: {
    // 	type: Function,
    // },
    /**
     * 异步加载数据
     */
    // loadData: {
    //   type: Function,
    //   default: function () {},
    // },
    /**
     * 已经加载节点
     */
    loadedKeys: {
      type: Array,
      default: function () {
        [];
      },
    },
    /**
     * 支持多选节点
     */
    multiple: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否可选中
     */
    selectable: {
      type: Boolean,
      default: true,
    },
    /**
     * 展示title图标
     */
    showIcon: {
      type: Boolean,
      default: false,
    },
    /**
     * 搜索
     */
    isSearch: {
      type: Boolean,
      default: false,
    },
    /**
     * 复选框可控
     */
    isControl: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      expandedKeys: ["0-0-0", "0-0-1"],
      originCheckedKeys: [],
      cCheckedKeys: ["0-0-0"],
      selectedKeys: [],
      cTreeData: [],
      initialTreeData: [],
      cActions: [],
      searchValue: "",
      value1: false,
      value2: false,
      checkStrictly: false
    };
  },
  watch: {
    checkedKeys: {
      handler: function (value, oldValue) {
        this.cCheckedKeys = value;
      },
      deep: true,
    },
    url(value) {
      this.getData(value);
    },
    params: {
      handler: function (value) {
        console.log("params change");
        this.getData(null, value);
      },
      deep: true,
    },
    treeData: {
      handler: function (value) {
        this.cTreeData = value;
      },
      deep: true,
    },
    action: {
      handler: function (value) {
        this.cActions = value;
      },
      deep: true,
    },
  },
  mounted() {
    console.log(`mounted: `, this.treeData);
    if (this.checkedKeys != null && typeof this.checkedKeys != "undefined") {
      this.cCheckedKeys = JSON.parse(JSON.stringify(this.checkedKeys));
      this.originCheckedKeys = JSON.parse(JSON.stringify(this.checkedKeys));
    }

    this.cTreeData = this.treeData;
    this.cActions = this.actions;
    this.getData();
  },
  methods: {
    getData(url, params) {
      let self = this;
      url = url || this.url;
      console.log("请求使用的url", url);
      params =
        params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
      getAction(url, params).then((res) => {
        if (res.result.treeList) {
          self.cTreeData = res.result.treeList;
        } else {
          let flatData = res.result
            ? res.result.records || res.result
            : res.data;

          if (self.dataMap.key && self.dataMap.title) {
            self.cTreeData = self.convertArrayToTree(
              flatData,
              self.parentColumn,
              self.dataMap
            );
            console.log("flatData", self.cTreeData);
          }
        }
        self.initialTreeData = JSON.parse(JSON.stringify(self.cTreeData));
      });
    },
    /**
     * 将生成的Rest接口的数据转换成树状结构
     */
    convertArrayToTree(arr, parentColumn, dataMap) {
      parentColumn = parentColumn || "parentId";
      var map = {},
        node,
        roots = [],
        i;

      for (i = 0; i < arr.length; i += 1) {
        map[arr[i].id] = i; // initialize the map
        arr[i].children = []; // initialize the children
      }

      for (i = 0; i < arr.length; i += 1) {
        node = arr[i];
        node.key = node[dataMap.key];
        node.title = node[dataMap.title];
        if (node[parentColumn] && node[parentColumn] != "0") {
          // if you have dangling branches check that map[node.parentId] exists
          if (typeof arr[map[node[parentColumn]]] == "undefined") {
            console.log(
              `找不到数组中的：`,
              map[node[parentColumn]],
              parentColumn
            );
            continue;
          }
          arr[map[node[parentColumn]]].children.push(node);
        } else {
          roots.push(node);
        }
      }
      return roots;
    },
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      this.expandedKeys = expandedKeys;
      //   this.autoExpandParent = false;
    },
    onCheck(checkedKeys, event) {
      console.log("onCheck", checkedKeys);
      console.log("event", event);
      // 计算偏差
      // var oldSet = new Set(this.originCheckedKeys);
      // var newSet = new Set(checkedKeys);
      // var toDeleteKeys = [...oldSet].filter((item) => !newSet.has(item));
      // var toAddKeys = [...newSet].filter((item) => !oldSet.has(item));
      this.cCheckedKeys = checkedKeys;
      this.$emit("update:checkedKeys", checkedKeys);
      this.$emit("check", {
        // originCheckedKeys: this.originCheckedKeys,
        checkedKeys: checkedKeys,
        // toDeleteKeys: toDeleteKeys,
        // toAddKeys: toAddKeys,
      });
      if (event) {
        event.nativeEvent.preventDefault();
      }
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
      this.$emit("select", { selectedKeys, info });
    },
    onDragend: function (e) {
      this.$emit("dragend", e);
    },
    onDragenter: function (e) {
      this.$emit("dragenter", e);
    },
    onDragleave: function (e) {
      this.$emit("dragleave", e);
    },
    onDragover: function (e) {
      this.$emit("dragover", e);
    },
    onDragstart: function (e) {
      this.$emit("dragstart", e);
    },
    onDrop: function (e) {
      this.$emit("drop", e);
    },
    onLoad: function (e) {
      this.$emit("load", e);
    },
    onRightClick: function (e) {
      this.$emit("rightClick", e);
    },
    onSearchChange: function (e) {
      let self = this;
      console.log("e", this.searchValue);
      this.$emit("onSearchChange", this.searchValue);
      if (this.searchValue == "") {
        //为空时要回到最初 的树节点
        self.cTreeData = JSON.parse(JSON.stringify(self.initialTreeData));
      } else {
        let data = JSON.parse(JSON.stringify(self.initialTreeData));
        self.cTreeData = self.arrayTreeFilter(
          data,
          self.filterFn,
          self.searchValue
        );
      }
    },
    arrayTreeFilter(data, predicate, filterText) {
      const nodes = data;
      // 如果已经没有节点了，结束递归
      if (!(nodes && nodes.length)) {
        return;
      }
      const newChildren = [];
      for (const node of nodes) {
        if (!predicate(node, filterText)) {
          const subs = this.arrayTreeFilter(
            node.children,
            predicate,
            filterText
          );
          if ((subs && subs.length) || predicate(node, filterText)) {
            node.children = subs;
            newChildren.push(node);
          } else {
            node["style"] = "display: none";
          }
        }
      }
      return nodes;
    },
    filterFn(data, filterText) {
      //过滤函数
      if (!filterText) {
        return true;
      }
      return new RegExp(filterText, "i").test(data.title); //我是一title过滤 ，你可以根据自己需求改动
    },
    setArray(flag,key) {
      let arr = [];
      let self = this;
      if (flag) {
        var arrNew = [];
        treeList(self.cTreeData).forEach(e => {
          arr.push(e[key || "key"]);
        })
      }
      function treeList(arr) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].hasOwnProperty("children")) {
            treeList(arr[i].children)
          }
          arrNew.push(arr[i]);
        }
        return arrNew;
      }
      return arr;
    },
    showNode(e) {
      this.expandedKeys = this.setArray(e.target.checked,this.replaceFields["key"] || "key");
    },
    allNode(e) {
      let allNode = this.setArray(e.target.checked,this.replaceFields["key"] || "key");
      this.$emit("allNode", e.target.checked,allNode);
    },
    checkNode(e) {
      this.checkStrictly = !e.target.checked;
    },
  },
};
</script>

<style scoped>
.tree-combox {
  width: 100%;
  height: auto;
}

.tree-check {
  width: 100%;
  display: flex;
  padding-left: 24px;
  box-sizing: border-box;
}

.ant-tree {
  width: 100%;
}

.ant-tree :deep(.ant-tree-node-content-wrapper) {
  width: 98.9%;
}

.ant-tree :deep(.ant-tree-iconEle) {
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-img[src=""],
.icon-img:not([src]) {
  opacity: 0;
}

.title-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title-div-slot {
  margin-right: 12px;
}

.ant-menu-inline,
.ant-menu-vertical,
.ant-menu-vertical-left {
  border-right: 0px solid #f0f0f0;
}
</style>
