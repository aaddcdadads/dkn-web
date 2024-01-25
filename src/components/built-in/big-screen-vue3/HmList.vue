<template>
  <!-- 列表 -->
  <div class="rank-page">
    <div
      v-for="item in item"
      :key="item.id"
      style="line-height: 26px"
      class="data-item"
    >
      <span class="num-id" :class="item.on == true ? 'on' : ''">{{
        item.id
      }}</span>
      <span class="label_span" style="width:80px;">{{ item.address }}</span>
      <span class="label_span" style="width:80px;">{{ item.department }}</span>
      <span class="label_span" style="width:100px;">{{ item.team }}</span>
      <span class="label_span" style="width:60px;">{{ item.name }}</span>
      <span class="label_span" style="width:120px;">{{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmList",
  props: {
    /**
     * 数据源
     */
    item: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            address: "北京总部",
            department: "市场部",
            team: "第一小分队",
            name: "张三",
            price: "6,672,389....",
            on: true,
          },
          {
            id: 2,
            address: "北京总部",
            department: "市场部",
            team: "第一小分队",
            name: "李四",
            price: "7,673,456.89",
            on: true,
          },
          {
            id: 3,
            address: "北京总部",
            department: "市场二部",
            team: "第二小分队",
            name: "百度",
            price: "百度链接",
            on: true,
          },
          {
            id: 4,
            address: "上海分部",
            department: "销售部",
            team: "第三小分队",
            name: "张伟",
            price: "8,967,569....",
          },
          {
            id: 5,
            address: "上海分部",
            department: "销售部",
            team: "第三小分队",
            name: "李静",
            price: "5,645,657....",
          },
          {
            id: 6,
            address: "上海分部",
            department: "销售部",
            team: "第三小分队",
            name: "完颜付",
            price: "4,999,889....",
          },
          {
            id: 7,
            address: "上海分部",
            department: "销售部",
            team: "第三小分队",
            name: "纳兰德",
            price: "8,878,765....",
          },
          {
            id: 8,
            address: "上海分部",
            department: "销售二部",
            team: "突击小队",
            name: "迪乌夫",
            price: "7,609,878....",
          }
        ];
      },
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.num-id {
  display: block;
  background: rgba(60, 71, 215, 1);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  color: #fff;
}
.on {
  background: rgba(241, 59, 61, 1);
}

.data-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background:rgba(255, 255, 255, 0);
}
.rank-page {
  min-width: 300px;
  background: rgba(255, 255, 255, 0);
  width: 100%;
  
}
.label_span{
    display:inline-block;
    text-align: right;
    color: rgba(67, 97, 131, 1);
}
.data-item:nth-child(2n-1){
    background:rgba(0, 0, 0, 1);
}
</style>