<template>
  <div>
    <a-transfer
      class="tree-transfer"
      v-model:data-source="dataSource"
      :target-keys="targetKeys"
      :render="render"
      :show-select-all="showSelectAll"
      :showSearch="showSearch"
      @change="onChange"
    >
      <template #children="{ direction, selectedKeys, onItemSelect }">
        <a-tree
          v-if="direction === 'left'"
          blockNode
          checkable
          checkStrictly
          defaultExpandAll
          :checkedKeys="[...selectedKeys, ...targetKeys]"
          :treeData="treeData"
          @check="
            (_, props) => {
              onChecked(
                _,
                props,
                [...selectedKeys, ...targetKeys],
                onItemSelect
              );
            }
          "
          @select="
            (_, props) => {
              onChecked(
                _,
                props,
                [...selectedKeys, ...targetKeys],
                onItemSelect
              );
            }
          "
        />
      </template>
    </a-transfer>
  </div>
</template>
<script>
import { computed, defineComponent, ref} from "vue";
const transferDataSource = [];

function flatten(list = []) {
  list.forEach((item) => {
    transferDataSource.push(item);
    flatten(item.children);
  });
}

function isChecked(selectedKeys, eventKey) {
  return selectedKeys.indexOf(eventKey) !== -1;
}

function handleTreeData(data, targetKeys = []) {
  data.forEach((item) => {
    item["disabled"] = targetKeys.includes(item.key);

    if (item.children) {
      handleTreeData(item.children, targetKeys);
    }
  });
  return data;
}

export default defineComponent({
  props: {
    /**
     * 数据内容
     */
    dataSource: {
      type: Array,
      default: function () {
        return [
          {
            key: "0-0",
            title: "0-0",
          },
          {
            key: "0-1",
            title: "0-1",
            children: [
              {
                key: "0-1-0",
                title: "0-1-0",
              },
              {
                key: "0-1-1",
                title: "0-1-1",
              },
            ],
          },
          {
            key: "0-2",
            title: "0-3",
          },
        ];
      },
    },
    /**
     * 右侧数据内容
     */
    targetKeys: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     * 行渲染函数
     */
    render: {
      type: Function,
      default: (item) => item.title,
    },
    /**
     * 显示搜索框
     */
    showSearch: {
      type: Boolean,
    },
    /**
     * 显示全选框
     */
    showSelectAll: {
      type: Boolean,
      default: false,
    },
  },
  
  setup(props,context) {
    
    flatten(JSON.parse(JSON.stringify(props.dataSource)));

    const targetKeys = ref(props.targetKeys);
    const dataSource = ref(transferDataSource);
    const treeData = computed(() => {
      return handleTreeData(props.dataSource, targetKeys.value);
    });

    const onChange = (keys) => {
      context.emit("change", keys);
      targetKeys.value = keys;
    };

    const onChecked = (_, e, checkedKeys, onItemSelect) => {
      const { eventKey } = e.node;
      onItemSelect(eventKey, !isChecked(checkedKeys, eventKey));
    };

    const render = props.render;
    const showSearch = props.showSearch;
    const showSelectAll = props.showSelectAll;
    
    return {
      targetKeys,
      dataSource,
      treeData,
      onChange,
      onChecked,
      render,
      showSearch,
      showSelectAll,
    };
  },
});
</script>
<style scoped>
.tree-transfer  {
  width: 100%;
  min-width: 30vw;
  min-height: 5vw;
}
</style>