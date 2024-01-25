<template>
  <a-page-header
    v-if="isshow"
    :title="title"
    :subTitle="subTitle"
    :avatar="avatar"
    :breadcrumb="breadcrumb"
    @back="back"
  >
  </a-page-header>
  <a-page-header
    v-else
    :title="title"
    :subTitle="subTitle"
    :breadcrumb="breadcrumb"
    @back="back"
  >
  </a-page-header>
</template>

<script>
export default {
  name: "HmAntPageheader",
   data(){
    return{
      isshow : false,
    }
  },
  props: {
    /**
     * 是否展示头像
     */
    show: {
      type: Boolean,
      default:false
    },
    /**
     * 标题文字
     */
    title: {
      type: String,
      default: 'Title'
    },
    /**
     * 二级标题文字
     */
    subTitle: {
      type: String,
      default:'This is a subtitle'
    },
    /**
     * 面包屑的配置
     */
    breadcrumb: {
      type: String,
    },
    /**
     * 头像
     */
    avatar: {
      type: Object,
      default: () => ({
        src:'https://www.itying.com/images/flutter/2.png'
      })
    },
  },

  watch:{
    show(value) {
      console.log('监听的变化',value)
      this.isshow = value;
    },
  },
 mounted() {
   this.isshow =  this.show;
 },
 
  methods: {
    back: function (e) {
      this.$emit("back", e);
    },
  },
};
</script>

<style scoped>
</style>