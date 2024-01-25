<template>
  <div class="page-card">
    <div class="card-page" v-for="item in cardList" :key="item">
      <div class="card-title">
        <img class="img-class" src="https://www.itying.com/images/flutter/2.png" style alt />
        <div class="card-title-value">{{ item.title }}</div>
      </div>
      <div class="card-body">
        <div>{{ item.content }}</div>
      </div>
      <div class="card-foot">
        <a href="">{{ item.userName }}</a>
        <div>{{ item.time }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HmAntProjectCard",
  props: {
    /**
     * 数据
     */
    cardList: {
      type: Array,
      default: function() {
        return [
          {
            title: "Alipay",
            content: "那是一种内在的东西， 他们到达不了，也无法触及的",
            userName: "科学搬砖组",
            time: "9小时前"
          },
          {
            title: "Alipay",
            content: "希望是一个好东西，也许是最好的，好东西是不会消亡的",
            userName: "科学搬砖组",
            time: "9小时前"
          },
          {
            title: "Alipay",
            content: "城镇中有那么多的酒馆，她却偏偏走进了我的酒馆",
            userName: "科学搬砖组",
            time: "9小时前"
          },
          {
            title: "Alipay",
            content: "那时候我只会想自己想要什么，从不想自己拥有什么",
            userName: "科学搬砖组",
            time: "9小时前"
          },
          {
            title: "Alipay",
            content: "凛冬将至",
            userName: "科学搬砖组",
            time: "9小时前"
          },
          {
            title: "Alipay",
            content: "生命就像一盒巧克力，结果往往出人意料",
            userName: "科学搬砖组",
            time: "9小时前"
          }
        ];
      }
    }
  },
  data() {
    return {
      
    };
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
  flex: 0 0 33.3%;
  /* min-width: 23%; */
  min-width: 200px;
  max-width: 33.3%;
  border: 1px solid #e5e5e5;
}
.card-title {
  display: flex;
  padding: 10px;
}
.img-class {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.card-title-value {
  margin-left: 20px;
  font-size: 18px;
}
.card-body {
  display: flex;
  padding: 10px;
}
.card-foot {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
</style>