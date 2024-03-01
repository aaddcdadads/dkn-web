<template>
  <div>
    <a-button @click="addData">添加覆盖物</a-button>
    <a-button @click="delData">清除覆盖物</a-button>
    <HmOpenLayers :center="center" :point="point" :circle="circle" :line="line" :polygon="polygon"></HmOpenLayers>
  </div>
</template>

<script>
import HmOpenLayers from '/@/components/built-in/jeecg/HmOpenLayers.vue'

export default {
  components: {
    HmOpenLayers
  },
  data() {
    return {
      center: [39, 39],
      point: [],
      circle: [],
      line: [],
      polygon: []
    }
  },
  methods: {
    addData() {
      this.point = [{
        icon: "https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/OpenLayersIcon/star.png",
        point: [39.15, 38.51],
        scale: 0.1,
        shakeStatus: true//摇动动画
      },
      {
        icon: "https://hm-public-static.oss-cn-shenzhen.aliyuncs.com/map/OpenLayersIcon/star.png",
        point: [38.15, 38.51],
        scale: 0.1,
        shakeStatus: false
        },]
      
      this.line = [
        {
          coordinates: [
            [39.15, 34.51],
            [38.15, 35.51],
            [37.15, 36.51],
          ],
          strokeColor: 'red',
          strokeWidth: 20,
          shakeStatus: true//摇动动画
        },
        {
          coordinates: [
            [34.15, 31.51],
            [42.15, 36.51],
            [35.15, 37.51],
          ],
          strokeColor: 'blue',
          strokeWidth: 8,
          shakeStatus: false//摇动动画
        },
        {
          coordinates: [
            [25.6064453125, 44.73302734375001],
            [27.759765625, 44.75500000000001],
            [28.287109375, 43.32677734375001],
            [30.55029296875, 46.40294921875001],
            [31.69287109375, 43.04113281250001],
          ],
          strokeColor: 'blue',
          strokeWidth: 10,
          flowlineStatus: true,//开启渐变
          //渐变配置
          flowlineStyle: {
            color: 'red',
            color2: 'yellow',
            width: 10,
            width2: 10,
            arrow: 1
          },

          shakeStatus: false//摇动动画 ps:渐变加载不出动画
        }
      ]
      this.polygon = [{
        coordinates: [
          [
            [36.844959, 29.691586],
            [36.842749, 29.69098],
            [36.84217, 29.693122],
            [36.844358, 29.693667],
            [36.844959, 29.691586],
          ],
          //内圈
          [
            [36.84573034297229, 29.691206743587088],
            [36.84236332851385, 29.69026183008994],
            [36.84133866368556, 29.69351739026062],
            [36.8447693829186, 29.694312532467134],
            [36.84573034297229, 29.691206743587088],
          ],
        ],
        strokeColor: 'red',
        strokeWidth: 20,
        fillColor: "rgba(255,0,0,0.2)",
        shakeStatus: true//摇动动画
      },
      {
        coordinates: [
          [
            [38.84573034297229, 29.691206743587088],
            [38.84236332851385, 29.69026183008994],
            [38.84133866368556, 29.69351739026062],
            [38.8447693829186, 29.694312532467134],
            [38.84573034297229, 29.691206743587088],
          ],
        ],
        strokeColor: 'blue',
        strokeWidth: 20,
        fillColor: "rgba(255,0,0,0.2)",
        // shakeStatus:false//摇动动画
        },]
      
      this.circle = [{
        radius: 2,
        center: [39.15, 38.51],
        strokeColor: "blue",
        strokeWidth: 2,
        fillColor: "rgba(255,200,0,0.2)",
        shakeStatus: false//摇动动画
      },
      {
        radius: 2,
        center: [38.15, 38.51],
        strokeColor: "blue",
        fillColor: "rgba(255,200,0,0.2)",
        strokeWidth: 2,
        shakeStatus: false//摇动动画
      }]
    },
    delData() {
      this.point = [],
      this.circle = [],
      this.line = [],
      this.polygon = []
    }
  }
}
</script>

<style></style>