<template>
  <div>
    <!-- 测试组件默认属性 -->
    <!-- <hm-amap-loca-nav></hm-amap-loca-nav> -->

    <!-- 测试组件各个属性功能 -->
    <hm-amap-loca-nav
      width="100%"
      :zoom-level="14"
      :center="[116.397559, 39.89621]"
      viewMode="2D"
      :map-options="{pitch: 40}"
      :vehicle="driving.vehicle"
      :vehicle-options="driving.vehicleOption"
    ></hm-amap-loca-nav>
  </div>
</template>

<script>
import HmAmapLocaNav from '/@/components/built-in/vue3map/amap/HmAmapLocaNav.vue'
export default {
  components: {
    HmAmapLocaNav
  },
  data(){
    return{
      driving: {
        vehicle: '驾车',
        vehicleOption: {
          policy: 0,
          ferry: 1,
          province: '京'
        }
      }
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