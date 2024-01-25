<template>
  <div class="group-class">
    <div class="group-title">团队</div>
    <div class="group">
      <div class="group-value" v-for="(item,index) in groupList" :key="index">
      <img class="icon" :src="item.imgUrl" alt="">
      <div class="group-value-icon">{{item.value}} </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
   name: "HmAntGroupCard",
  props: {
    /**
     * 数据
     */
    cgroupList: {
      type: Array,
      default: function () {
        return [
          {
            imgUrl:'https://www.itying.com/images/flutter/1.png',
            value:'科学搬砖组'
          },
          {
            imgUrl:'https://www.itying.com/images/flutter/2.png',
            value:'程序员日常'
          },
          {
            imgUrl:'https://www.itying.com/images/flutter/3.png',
            value:'设计天团'
          },
          {
           imgUrl:'https://www.itying.com/images/flutter/4.png',
            value:'中二少女团'
          },
          {
            imgUrl:'https://www.itying.com/images/flutter/5.png',
            value:'骗你学计算机'
          },
        ];
      },
    },
  },
  data() {
    return {
      groupList:[
        {
            imgUrl:'https://www.itying.com/images/flutter/1.png',
            value:'科学搬砖组'
          },
          {
            imgUrl:'https://www.itying.com/images/flutter/2.png',
            value:'程序员日常'
          },
          {
            imgUrl:'https://www.itying.com/images/flutter/3.png',
            value:'设计天团'
          },
          {
           imgUrl:'https://www.itying.com/images/flutter/4.png',
            value:'中二少女团'
          },
          {
            imgUrl:'https://www.itying.com/images/flutter/5.png',
            value:'骗你学计算机'
          },
      ]
    };
  },
  watch:{
    cgroupList(value){
      this.groupList = value
    }
  },
  mounted(){
    this.groupList = this.cgroupList
  }
}
</script>

<style scoped>
.group-class {
  min-width: 300px;
  width: 100%;
  padding: 20px;
}

.group-title {
  font-size: 18px;
  font-weight: bold;
}
.group {
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 16px;
}
.icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
}
.group-value {
  display: flex;
  box-sizing: border-box;
  flex: 0 0 45%;
  margin-top: 10px;
}
</style>