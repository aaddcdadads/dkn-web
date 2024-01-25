<template>
  <div class="page-user">
    <div>
      <div>
        <img class="img-class" :src="userImg" alt="" />
      </div>
      <div class="user">{{userName}}</div>
      <div class="describe">{{Describe}}</div>
    </div>
    <div class="icon-class"><img class="icon" src="https://www.itying.com/images/flutter/3.png" alt=""><div>{{designation}}</div></div>
    <div class="icon-class"><img class="icon" src="https://www.itying.com/images/flutter/4.png" alt=""><div>{{Professional}}</div></div>
    <div class="icon-class"><img class="icon" src="https://www.itying.com/images/flutter/5.png" alt=""><div>{{Address}}</div></div>
  </div>
</template>

<script>
export default {
  name:'HmAntUserinformation',
  props:{
    /**
     * 头像地址
     */
    userImg:{
      type:String,
      default:'https://www.itying.com/images/flutter/2.png'
    },
    /**
     * 用户姓名
     */
    userName:{
      type:String,
      default:'jeecg用户'
    },
    /**
     * 用户签名
     */
    Describe:{
      type:String,
      default:'海纳百川 有容乃大'
    },

    /**
     * 称号
     */
    designation:{
      type:String,
      default:'交互专家'
    },
    /**
     * 职业
     */
    Professional:{
      type:String,
      default:'蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED'
    },
    /**
     * 地址
     */
    Address:{
      type:String,
      default:'浙江省杭州市'
    }
  }
};
</script>

<style scoped>

.page-user {
  min-width: 300px;
  width: 100%;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid #e5e5e5;
}


.img-class {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.user{
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}

.describe{
   margin-top: 10px;
   font-size: 16px;
}

.icon-class {
  display: flex;
  margin-top: 15px;
  font-size: 16px;
}

.icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 5px;
}
</style>