<template>
  <div>
    <!-- 测试组件默认属性 -->
    <!-- <hm-amap-loca-scatter></hm-amap-loca-scatter> -->

    <!-- 测试组件各个属性功能 -->
    <hm-amap-loca-simple
      width="100%"
      :zoom-level="11.7"
      :center="[113.97199630737305, 22.5807295363949]"
      viewMode="3D"
      :map-options="{pitch: 40, mapStyle: 'amap://styles/b688c625f9fa4d1d3b2788385d346611'}"
      :point-layers="pointLayers"
    ></hm-amap-loca-simple>
  </div>
</template>

<script>
import HmAmapLocaSimple from '/@/components/built-in/vue3map/amap/HmAmapLocaSimple.vue'
export default {
  components: {
    HmAmapLocaSimple
  },
  data(){
    return{
      pointLayers: [{
        options: {
          fitView: true
        },
        style: {
          size: 28
        }, 
        source: {
          url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/sz_road_F.json'
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