<template>
<!-- 翻牌器 -->
  <div class="number">
    <ul id="dataNums">
      <li v-for="(item,index) in list" :key="index">
        <div class="dataBoc">
          <div class="tt" :style="{transition:'all 2.5s ease-in-out 0s',top:'-'+item.top+'px'}">
            <span v-for="(item2,index2) in numList" :key="index2">{{item2}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 9999999
    }
  },
  data() {
    return {
      list: [],
      numList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."]
    };
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scroll() {

      this.list = this.number.toString().split("");
      let arr = [];
      this.list.forEach(value => {
        arr.push({ num: value, top: 0 });
      });
      this.list = arr;
      let Hei = parseFloat(
        getComputedStyle(document.getElementById("dataNums")).height
      );
      this.list.forEach((value, index) => {
        setTimeout(() => {
          value.top = parseFloat(value.num * Hei + Hei * 10);
        }, index * 300);
      });
    }
  }
};
</script>

<style>
.number {
  margin-bottom: 10px;
  text-align: center;
}
ul {
  display: inline-block;
  height: 40px;
  text-align: center;
}
li {
  list-style: none;
  float: left;
  width: 40px;
  height: 40px;
  text-align: center;
  margin: 0 4px;
  background: url("src/components/built-in/big-screen-vue3/img/icon/bk.png") no-repeat center;
  background-size: 100% 100%;
}
.dataBoc {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.tt {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
span {
  width: 100%;
  height: 100%;
  line-height: 40px;
  float: left;
  text-align: center;
  font-size: 26px;
  color: #f64841;
}
</style>