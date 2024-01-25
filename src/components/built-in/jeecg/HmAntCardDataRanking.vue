<template>
  <div class="rank-page">
    <h2>{{title}}</h2>
    <div
      v-for="item in item"
      :key="item.id"
      style="line-height: 26px"
      class="data-item"
    >
      <span class="num-id" :class="item.on == true ? 'on' : ''">{{
        item.id
      }}</span>
      <span style="margin-right: 100px">{{ item.name }}</span>
      <span>{{ item.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "门店销售排行榜"
    },
    /**
     * 数据源
     */
    item: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            name: "白鹭岛 1 号店",
            price: "1234.56",
            on: true,
          },
          {
            id: 2,
            name: "白鹭岛 2 号店",
            price: "1234.56",
            on: true,
          },
          {
            id: 3,
            name: "白鹭岛 3 号店",
            price: "1234.56",
            on: true,
          },
          {
            id: 4,
            name: "白鹭岛 4 号店",
            price: "1234.56",
          },
          {
            id: 5,
            name: "白鹭岛 5 号店",
            price: "1234.56",
          },
          {
            id: 6,
            name: "白鹭岛 6 号店",
            price: "1234.56",
          },
          {
            id: 7,
            name: "白鹭岛 7 号店",
            price: "1234.56",
          },
        ];
      },
    },
  },
  data() {
    return {
      //   item: [
      //     {
      //       id: 1,
      //       name: "白鹭岛 1 号店",
      //       price: "1234.56",
      //     },
      //     {
      //       id: 2,
      //       name: "白鹭岛 2 号店",
      //       price: "1234.56",
      //     },
      //     {
      //       id: 3,
      //       name: "白鹭岛 3 号店",
      //       price: "1234.56",
      //     },
      //     {
      //       id: 4,
      //       name: "白鹭岛 4 号店",
      //       price: "1234.56",
      //     },
      //     {
      //       id: 5,
      //       name: "白鹭岛 5 号店",
      //       price: "1234.56",
      //     },
      //     {
      //       id: 6,
      //       name: "白鹭岛 6 号店",
      //       price: "1234.56",
      //     },
      //     {
      //       id: 7,
      //       name: "白鹭岛 7 号店",
      //       price: "1234.56",
      //     },
      //   ],
    };
  },
};
</script>

<style scoped>
.num-id {
  display: block;
  background: rgba(240, 240, 240, 1);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  color: #fff;
}
.on {
  background: rgba(38, 54, 71, 1);
}

.data-item {
  display: flex;
  justify-content: space-between;
}
.rank-page {
  min-width: 300px;
  background: #fff;
  width: 100%;
}
</style>