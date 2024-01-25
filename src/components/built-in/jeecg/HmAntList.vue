<template>
  <a-list
    :bordered="bordered"
    :size="size"
    :split="split"
    :data-source="dataList"
    class="list-class"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta
          :description="item.value"
        >
          <template #title>
            <a href="javascript:;">{{ item.title }}</a>
          </template>
          <template #avatar>
            <a-avatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
export default {
  name: "HmAntList",
  props: {
    /**
     * 数据内容
     */
    dataSource: {
      type: Array,
      default: function () {
        return [
          {
            title: "Ant Design Title 1",
            value:'value',
          },
          {
            title: "Ant Design Title 2",
            value:'value',
          },
          {
            title: "Ant Design Title 3",
            value:'value',
          },
          {
            title: "Ant Design Title 4",
            value:'value',
          },
        ];
      },
    },
    /**
     * 大小
     * @type Enum
     * @default small
     * @options ["default","middle","small"]
     */
    size: {
      type: String
    },
    /**
     * 边框
     */
    bordered: {
      type: Boolean,
      default: true,
    },
    /**
     * 分割线
     */
    split: {
      type: Boolean,
      default: true,
    },
    
  },
  data() {
    return {
      dataList:[]
    };
  },
  watch:{
    dataSource(val){
      this.dataList = val
    }
  },
  created(){
    this.dataList = this.dataSource
  }
};
</script>

<style scoped>
.list-class {
  width: 100%;
  min-height: 33vw;
  border: 1px solid #e5e5e5;
}
</style>