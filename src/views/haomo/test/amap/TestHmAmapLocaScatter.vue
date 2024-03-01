<template>
  <div>
    <!-- 测试组件默认属性 -->
    <!-- <hm-amap-loca-scatter></hm-amap-loca-scatter> -->

    <!-- 测试组件各个属性功能 -->
    <hm-amap-loca-scatter
      width="100%"
      :zoom-level="11.7"
      :center="[113.97199630737305, 22.5807295363949]"
      viewMode="3D"
      :map-options="{pitch: 40, mapStyle: 'amap://styles/b688c625f9fa4d1d3b2788385d346611'}"
      :layers="layers"
    ></hm-amap-loca-scatter>
  </div>
</template>

<script>
import HmAmapLocaScatter from '/@/components/built-in/vue3map/amap/HmAmapLocaScatter.vue'
export default {
  components: {
    HmAmapLocaScatter
  },
  data(){
    return{
      layers: [{
        name: '贴地',
        source: {
          url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road.json',
        },
        style: {
          color: 'rgba(43,156,75,1)',
          unit: 'meter',
          size: [150, 150],
          borderWidth: 0,
        },
        options: {
          zIndex: 111,
          opacity: 1,
          visible: true,
          zooms: [2, 22],
        }
      }, {
        name: '红色',
        source: {
          url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_F.json',
        },
        style: {
          unit: 'meter',
          size: [2600, 2600],
          borderWidth: 0,
          texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_red.png',
          duration: 500,
          animate: true,
        },
        options: {
          loca: true,
          zIndex: 113,
          opacity: 1,
          visible: true,
          zooms: [2, 22],
        }
      }, {
        name: '黄色',
        source: {
          url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_E.json',
        },
        style: {
          unit: 'meter',
          size: [1000, 1000],
          borderWidth: 0,
          texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_yellow.png',
          duration: 1000,
          animate: true,
        },
        options: {
          loca: true,
          zIndex: 112,
          opacity: 1,
          visible: true,
          zooms: [2, 22],
        }
      }]
    }
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style>

</style>