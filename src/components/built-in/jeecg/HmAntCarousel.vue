<template>
  <a-carousel 
    :afterChange="afterChange"
    :beforeChange="beforeChange"
    :dotPosition="dotPosition"
    :dotsClass="dotsClass"
    :autoplay="autoplay"
    class="block-page"
  >
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel >
</template>

<script>
// import { Carousel  } from "ant-design-vue";

export default {
  name: "HmAntCarousel",
  props: {
    /**
     * 指示点位置
     */
    dotPosition: {
      type: String,
      default: 'bottom'
    },
    /**
     * 自动切换
     */
    autoplay:{
      type:Boolean,
      default:false
    },
    /**
     * 指示点类名
     */
    dotsClass: {
      type: String,
      default: 'slick-dots'
    },
  },
  data() {
    const self = this
    return {
      afterChange:self.afterEvent,
      beforeChange:self.beforeEvent
    };
  },
  methods: {
    afterEvent(current){
      this.$emit("afterChange",current)
    },
    beforeEvent(from, to){
      this.$emit("beforeChange",from, to)
    }
  },
};
</script>
<style scoped>
.block-page{
  width: 100%;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
