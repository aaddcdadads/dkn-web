<template>
  <div class="table-page">
    <div class="title">
      <span style="color: #fff">{{ titleLeft }}</span>
      <span style="color: #fff">{{ titleRight }}&gt;&gt;</span>
    </div>
    <div class="container">
      <div class="container-table">
        <div class="t-body">
          <span style="with:25%；text-algin:center">{{ tTitle }}</span>
          <span>{{ tTitleSec }}</span>
          <span>{{ tTitleNo }}</span>
          <span>{{ tTitleOperation }}</span>
        </div>
        <div class="t-data" v-for="item in dataSource" :key="item.id">
          <span>{{ item.number }}</span>
          <span>{{ item.des }}</span>
          <span>{{ item.no }}</span>
          <a href="#">{{ item.opera }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      r: 7,
    };
  },
  props: {
    titleLeft: {
      type: String,
      default: "我的在办 【5】",
    },
    titleRight: {
      type: String,
      default: "更多",
    },
    tTitle: {
      type: String,
      default: "剩佘天数",
    },
    tTitleSec: {
      type: String,
      default: "工单标题",
    },
    tTitleNo: {
      type: String,
      default: "工单编号",
    },
    tTitleOperation: {
      type: String,
      default: "操作",
    },
    dataSource: {
      type: Array,
      default: function () {
        return [
          {
            id: 1,
            number: 1,
            des: "药品又出问题了",
            no: "10086456789",
            opera: "办理",
          },
          {
            id: 2,
            number: 1,
            des: "药品又出问题了",
            no: "10086456789",
            opera: "办理",
          },
          {
            id: 3,
            number: 1,
            des: "药品又出问题了",
            no: "10086456789",
            opera: "办理",
          },
          {
            id: 4,
            number: 1,
            des: "药品又出问题了",
            no: "10086456789",
            opera: "办理",
          },
          {
            id: 5,
            number: 1,
            des: "药品又出问题了",
            no: "10086456789",
            opera: "办理",
          },
          {
            id: 6,
            number: 1,
            des: "药品又出问题了",
            no: "10086456789",
            opera: "办理",
          },
          {
            id: 7,
            number: 1,
            des: "药品又出问题了",
            no: "10086456789",
            opera: "办理",
          },
        ];
      },
    },
  },
};
</script>

<style scoped>
.table-page {
  min-width: 400px;
  background: #fff;
  width: 100%;
}
.title {
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  background: rgba(90, 128, 249, 1);
}
.t-body {
  display: flex;
  justify-content: space-around;
}
.container {
  padding: 0 10px;
  box-sizing: border-box;
}
.container-table {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
}
.t-data {
  display: flex;
  justify-content: space-around;
  padding: 5px 0;
  border-top: 1px solid #ccc;
}
</style>