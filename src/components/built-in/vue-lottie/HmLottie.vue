<template>
  <Vue3Lottie 
    ref="lottieAnimation"
    :animationData="animationData"
    :animationLink="animationLink"
    :width="cWidth"
    :height="cHeight"
    :speed="speed"
    :direction="direction"
    :loop="cLoop"
    :autoPlay="autoPlay"
    :pauseOnHover="pauseOnHover"
    :playOnHover="playOnHover"
    :delay="delay"
    :backgroundColor="backgroundColor"
    :noMargin="noMargin"
    :scale="scale"
    :assetsPath="assetsPath"
    :renderer="renderer"
    :rendererSettings="rendererSettings"
    @onComplete="onComplete"
    @onLoopComplete="onLoopComplete"
    @onEnterFrame="onEnterFrame"
    @onSegmentStart="onSegmentStart"
    @onAnimationLoaded="onAnimationLoaded"
  >    
  </Vue3Lottie>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'

/**
 * 背景卡片
 */
export default {
  name: "HmLottie",
  components: {
    Vue3Lottie
  },
  props: {
    /**
     * 动画URL
    */
    animationLink: {
      type: String,
      default: "https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json",
    },
    /**
     * 动画数据
    */
    animationData: {
      type: Object,
      default: function () {
        return {
        }
      },
    },
    /**
     * 宽度
    */
    width: {
      type: String,
      default: "200",
    },
    /**
     * 高度
    */
    height: {
      type: String,
      default: "200",
    },
    /**
     * 播放速度
    */
    speed: {
      type: Number,
      default: 1,
    },
    /**
     * 播放方向
     * @type Enum
     * @options ["forward", "reverse", "alternate"]
    */
    direction:{
      type: String,
      default: "forward",
    },
    /**
     * 循环播放
    */
    loop: {
      type: Boolean,
      default: true,
    },
    /**
     * 播放次数
    */
    loopCount: {
      type: Number,
      default: 0,
    },
    /**
     * 自动播放
    */
    autoPlay: {
      type: Boolean,
      default: true,
    },
    /**
     * 切换动画状态
    */
    pauseAnimation: {
      type: Boolean,
      default: false,
    },
    /**
     * 悬停暂停动画
    */
    pauseOnHover: {
      type: Boolean,
      default: false,
    },
    /**
     * 悬停播放动画
    */
    playOnHover: {
      type: Boolean,
      default: false,
    },
    /**
     * 延迟播放动画
    */
    delay: {
      type: Number,
      default: 0,
    },
    /**
     * 背景颜色
     * @type Color
    */
    backgroundColor: {
      type: String,
      default: "transparent",
    },
    /**
     * 消除自动边距
    */
    noMargin: {
      type: Boolean,
      default: false,
    },
    /**
     * 动画缩放
    */
    scale: {
      type: Number,
      default: 1,
    },
    /**
     * 资源路径
    */
    assetsPath: {
      type: String,
      default: "",
    },
    /**
     * 动画渲染器
     * @type Enum
     * @options ["svg", "canvas", "html"]
    */
    renderer: {
      type: String,
      default: "svg",
    },
    /**
     * 配置渲染器
    */
    rendererSettings: {
      type: Object,
      default: function(){
        return {}
      },
    },
  },
  data() {
    return {
      cWidth: "200px",
      cHeight: "200px",
      cLoop:0,
      lottieAnimation:null,
    }
  },
  watch: {
    width(value) {
      this.cWidth = this.getCssUnit(value)
    },
    height(value) {
      this.cHeight = this.getCssUnit(value)
    },
    loop(value) {
      this.cLoop = this.loopCount > 0 ? this.loopCount :  value
    },
    loopCount(value) {
      this.cLoop = value > 0 ? value :  this.loop
    },
    

  },
  computed: {},
  mounted() {
    this.cWidth = this.getCssUnit(this.width)
    this.cHeight = this.getCssUnit(this.height)
    //loop初始化
    this.cLoop = this.loopCount > 0 ? this.loopCount :  this.loop
    //获取动画实例
    this.lottieAnimation =  this.$refs.lottieAnimation
    

  },
  
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value
      }
      return `${value}px`
    },
  
    onComplete() {
      // Lottie 动画播放完成时触发
      // console.log('Lottie complete');
      this.$emit("onComplete")
    },
    onLoopComplete() {
      // Lottie 动画循环播放完成时触发
      // console.log('Lottie loop complete');
      this.$emit("onLoopComplete")
    },
    onEnterFrame() {
      // Lottie 动画进入每帧播放时触发
      this.$emit("onEnterFrame")
    },
    onSegmentStart() {
      // Lottie 动画进入指定片段时触发
      // console.log('Lottie segment start');
      this.$emit("segmentStart")
    },
    onAnimationLoaded() {
      this.$emit("onAnimationLoaded")
    }

  },
}
</script>

<style scoped>

</style>
