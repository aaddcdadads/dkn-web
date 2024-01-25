<template>
  <div class="list-card">
    <div class="title">
      <div>
      {{ title }}:
      </div>  
      <div style="color:rgb(71,171,252)">更多</div>
    </div>
    <div>
      <div class="card-body" v-for="(item, index) in cardList" :key="index">
        <div class="item-title">{{ item.title }}</div>
        <div>{{ item.dataTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntListCard",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "流程提醒",
    },
    cardList: {
      type: Array,
      default: function () {
        return [
          {
            title: "流程催办提醒",
            dataTime: "2021-03-04 14:17:43",
          },
          {
            title: "流程催办提醒",
            dataTime: "2021-03-04 14:17:43",
          },
          {
            title: "流程催办提醒",
            dataTime: "2021-03-04 14:17:43",
          },
        ];
      },
    },
  },
};
</script>

<style>
.list-card {
  position: relative;
  /* display: flex; */
  /* justify-content: space-evenly; */
  /* align-items: center; */
  min-width: 300px;
  width: 100%;
  padding: 40px;
}
.title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  /* min-width: 100px; */
  /* max-width: 150px; */
  text-align: left;
  /* margin-right: 20px; */
  font-weight: 600;
  font-size: 20px;
  border-bottom: 1px solid #e5e5e5;
  /* line-height: 18px; */
}
.card-body {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 20px;
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
}
</style>