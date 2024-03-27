<template>
  <div class="switch-div">
    <div class="switch-title" v-if="title" :style="{ width: labelWidth + 'px' }">{{ title }}:</div>
    <div class="switch-class">
      <a-tree-select
        allowClear
        :multiple="multiple"
        :treeDefaultExpandAll="treeDefaultExpandAll"
        :placeholder="placeholder"
        showSearch
        :size="size"
        v-model:treeData="cTreeData"
        :treeCheckable="treeCheckable"
        :disabled="disabled"
        v-model:value="cValue"
        @change="onChange"
        @search="onSearch"
        @select="onSelect"
        @treeExpand="onTreeExpand"
        :filterTreeNode="filterTreeNode"
        :replaceFields="replaceFields"
      >
        <slot></slot>
        <!-- 隐藏 tag 时显示的内容 -->
        <slot name="maxTagPlaceholder"></slot>
        <!-- 选择框默认文字 -->
        <slot name="placeholder"></slot>
        <!-- 搜索框默认文字 -->
        <!-- <slot name="searchPlaceholder"></slot> -->
        <!-- 自定义的选择框后缀图标 -->
        <template #suffixIcon>
          <i v-if="suffixIcon" :class="`iconcss ${suffixIcon}`" aria-hidden="true"></i>
        </template>
        <!-- 树节点显示的内容 -->
        <slot name="title"></slot>
      </a-tree-select>
    </div>
  </div>
</template>

<script>
  // import { TreeSelect } from "ant-design-vue";
  import { getAction, postAction, deleteAction, putAction } from '/@/request/http';
  import _ from 'lodash';
  export default {
    name: 'HmAntTreeSelect',
    props: {
      /**
       *  默认值
       */
      value: {
        type: String,
      },
      /**
       * 标题
       */
      title: {
        type: String,
        default: '树形选择器',
      },
      /**
       * 提示文字
       */
      placeholder: {
        type: String,
        default: '请选择',
      },
      /**
       * 数据内容
       * @model
       */
      treeData: {
        type: Array,
        default: function () {
          return [
            {
              title: 'Node1',
              value: 'Node1',
              key: '0-0',
              children: [
                {
                  title: 'Child Node1',
                  value: 'Child Node1',
                  key: '0-0-0',
                },
              ],
            },
            {
              title: 'Node2',
              value: 'Node2',
              key: '0-1',
              children: [
                {
                  title: 'Child Node3',
                  value: 'Child Node3',
                  key: '0-1-0',
                  disabled: 'true',
                },
                {
                  title: 'Child Node4',
                  value: 'Child Node4',
                  key: '0-1-1',
                },
                {
                  title: 'Child Node5',
                  value: 'Child Node5',
                  key: '0-1-2',
                },
              ],
            },
          ];
        },
      },
      /**
       * 是否禁用
       */
      disabled: {
        type: Boolean,
        default: false,
      },
      /**
       * 支持多选
       */
      multiple: {
        type: Boolean,
      },
      /**
       * 支持选中
       */
      treeCheckable: {
        type: Boolean,
      },
      /**
       * 后缀图标
       * @type Icon
       */
      suffixIcon: {
        type: String,
      },
      /**
       * 大小
       * @type Enum
       * @default default
       * @options ["default","large","small"]
       */
      size: {
        type: String,
      },
      /**
       * 输入框宽度
       */
      width: {
        type: String,
        default: '100%',
      },
      /**
       * 是否展开
       */
      treeDefaultExpandAll: {
        type: Boolean,
        default: false,
      },
      /**
       * 标题宽度
       */
      labelWidth: {
        type: Number,
      },
      /**
       * GET URL
       */
      url: {
        type: String,
        default: '',
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
       * 替换treeNode中的字段
       */
      replaceFields: {
        type: Object,
        default: function () {
          return {
            key: 'key',
            title: 'title',
            value: 'value',
          };
        },
      },
      /**
       * 数据父字段
       */
      parentColumn: {
        type: String,
        default: 'parentId',
      },
      /**
       * 筛选函数
       */
      filterTreeNode: {
        type: Function,
        default: function (input, option) {
          return option.props.title.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        },
      },
      /**
       * 禁用父节点
       */
      disabledParent: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        cValue: null,
        cTreeData: this.treeData,
        suffixIcon: '',
        cWidth: '200px',
      };
    },
    watch: {
      treeData(value) {
        this.cTreeData = value;
      },
      value(value) {
        this.cValue = value;
      },
      width(value) {
        this.cWidth = this.getCssUnit(value);
      },
      url(value) {
        console.log('url', value);
        this.getData(value);
      },
      params: {
        handler: function (value, oldValue) {
          if (JSON.stringify(value) == JSON.stringify(oldValue)) {
            return;
          }
          this.getData(null, value);
        },
        deep: true,
      },
    },
    mounted() {
      this.cWidth = this.getCssUnit(this.width);
      this.getData();
    },
    methods: {
      onSelect: function (e) {
        this.$emit('select', e);
        console.log('onSelect', e);
        this.cValue = e;
      },
      onChange: function (e, l) {
        this.$emit('update:treeData', this.cTreeData);
        this.$emit('update:value', this.cValue);
        this.$emit('change', e, l);
        console.log('change', e, l);
        this.cValue = e;
      },
      onSearch: function (e) {
        this.$emit('search', e);
      },
      onTreeExpand: function (e) {
        this.$emit('treeExpand', e);
      },
      getCssUnit(value) {
        if (isNaN(Number(value))) {
          return value;
        }
        return `${value}px`;
      },
      getData(url, params) {
        let self = this;
        url = url || this.url;
        console.log('请求使用的url', url);
        params = params || (this.params ? JSON.parse(JSON.stringify(this.params)) : {});
        getAction(url, params).then((res) => {
          if (res.result.treeList) {
            self.cTreeData = res.result.treeList;
          } else {
            let flatData = res.result ? res.result.records || res.result.data || res.result : res.data;
            self.cTreeData = self.arrToTree(flatData, self.parentColumn);
          }
          console.log('cTreeData', self.cTreeData);
        });
      },
      arrToTree(flatData, parentId) {
        parentId = parentId || 'parentId';
        let rootTree = [];
        flatData.forEach((tree) => {
          if (tree[parentId] == null || tree[parentId] == 0) {
            tree.disabled = this.disabledParent;
            rootTree.push(tree);
          }
          flatData.forEach((node) => {
            if (node[parentId] != null && node[parentId] != 0 && node[parentId] == tree['id']) {
              if (!tree.children) {
                tree.children = [];
              }
              if (!tree.children || tree.children.length == 0) {
                tree.disabled = this.disabledParent;
              }
              tree.children.push(node);
            }
          });
        });
        return rootTree;
      },
    },
  };
</script>
<style scoped>
  .switch-div {
    position: relative;
    display: flex;
    /* justify-content: space-evenly; */
    align-items: center;
    min-width: 100px;
    width: 100%;
  }

  .switch-title {
    position: relative;
    min-width: 0px;
    max-width: 500px;
    text-align: left;
    margin-right: 10px;
  }

  .switch-class {
    width: v-bind(cWidth);
    max-width: 80vw;
  }

  .iconcss {
    width: 1em;
    height: 1em;
  }

  .switch-class /deep/ .ant-select {
    width: 100%;
  }
</style>
