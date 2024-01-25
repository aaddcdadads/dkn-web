<template>
  <div class="page-card">
    <div class="card-page" v-for="item in cardList" :key="item">
      <div class="card-title">
        <img class="img-class" src="https://static.jeecg.com/temp/国炬软件logo_1606575029126.png" style alt />
        <div>
          <div class="card-title-value">{{ item.title }}</div>
          <div class="card-content-value">{{ item.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntPersonalInformation",
  props: {
    /**
     * 数据
     */
    cardList: {
      type: Array,
      default: function() {
        return [
          {
            title: "下午好，123，准备吃什么呢?",
            content: "前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台"
          }
        ];
      }
    }
  },
  data() {
    return {};
  },
  watch: {
    visible(value) {
      this.cVisible = value;
    },
    titleList(value) {
      this.cTitleList = value;
    }
  },
  mounted() {
    this.cTitleList = this.titleList;
  },
  methods: {
    visibleChange: function(e) {
      this.$emit("visibleChange", e);
    }
  }
};
</script>

<style scoped>
.page-card {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
.card-page {
  box-sizing: border-box;
  background-color: white;
  /* flex: 0 0 40%; */
  /* min-width: 23%; */
  min-width: 200px;
  max-width: 50%;
  border: 1px solid #e5e5e5;
}
.card-title {
  display: flex;
  padding: 10px;
}
.img-class {
  width: 72px;
  height: 72px;
  border-radius: 50%;
}
.card-title-value {
  margin-left: 20px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 16px;
}
.card-content-value {
  margin-left: 20px;
  color: rgba(0,0,0,.45);
}
</style>