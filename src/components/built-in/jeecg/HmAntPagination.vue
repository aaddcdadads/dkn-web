<template>
  <a-pagination
    :current="current"
    :hideOnSinglePage="hideOnSinglePage"
    :pageSize="pageSize"
    :pageSizeOptions="pageSizeOptions"
    :showLessItems="showLessItems"
    :showQuickJumper="showQuickJumper"
    :showSizeChanger="showSizeChanger"
    :showTotal="cShowTotal"
    :simple="simple"
    :size="size"
    :total="total"
    @showSizeChange="showSizeChange"
    class="pagination-class"
  >
  </a-pagination>
</template>

<script>
export default {
  name: "HmAntPagination",
  props: {
    /**
     * 当前页数
     */
    current: {
      type: Number,
      default: 1,
    },
    /**
     * 一页是否隐藏
     */
    hideOnSinglePage: {
      type: Boolean,
    },
    /**
     * 每页条数
     */
    pageSize: {
      type: Number,
      default: 10,
    },
    /**
     * 显示多少条
     */
    pageSizeOptions: {
      type: Array,
      default: function() {
        return ['10', '20', '30','40'];
      } 
    },
    /**
     * 展示较少元素
     */
    showLessItems: {
      type: Boolean,
      
    },
    /**
     * 是否快速跳转
     */
    showQuickJumper: {
      type: Boolean,
    },
    /**
     * 改变pageSize
     */
    showSizeChanger: {
      type: Boolean,
    },
    /**
     * 显示数据总量
     */
    showTotal: {
      type: Function,
    },
    /**
     *简单分页
     */
    simple: {
      type: Boolean,
    },
    /**
     * 分页大小
     */
    size: {
      type: String,
    },
    /**
     * 数据总数
     */
    total: {
      type: Number,
      default: 50,
    },
  },
  data(){
    return {
      cShowTotal: function(){}
    };
  },
  created(){
    if(typeof this.showTotal == 'function'){
      this.cShowTotal = this.showTotal
    }
  },
  methods: {
    change: function (e) {
      this.$emit("change", e);
    },
    showSizeChange: function (e) {
      this.$emit("showSizeChange", e);
    },
  },
};
</script>

<style scoped>
  .pagination-class{
    width: 100%;
  }
</style>