<template>
  选择模型：<a-select :options="options" v-model:value="value"></a-select>
  <a-button @click="clickUi">隐藏UI</a-button>
  <div class="erGraphDemo1">
    <HmCesium key="1"></HmCesium>
  </div>
  <div class="erGraphDemo2">
    <HmCesium ref="cesium" 
    :modelType="value" 
    :modelHeight="cesium.modelHeight"
    :modelCenter="cesium.modelCenter"
    :modelPitch="cesium.modelPitch"
    :modelRoll="cesium.modelRoll"
    :mapSetUp="cesium.mapSetUp"
    ></HmCesium>
  </div>
</template>
  
<script>
import HmCesium from '/@/components/built-in/jeecg/HmCesium.vue'

export default {
  components: {
    HmCesium
  },
  data() {
    return {
      cesium: {
        modelHeight: 1000,
        modelCenter: [116.404, 39.915],
        modelPitch: 0,
        modelRoll: 0,
        mapSetUp: {
          baseLayerPicker: true, 
          fullscreenButton: true, 
          vrButton: true, 
          geocoder: true,
          homeButton: true, 
          infoBox: false, 
          selectionIndicator: true, 
          navigationHelpButton: true,
          navigationInstructionsInitiallyVisible: true, 
          timeline: true, 
          scene3DOnly: true, 
          animation: true, 
          shouldAnimate: true, 
          sceneMode: 3, 
          requestRenderMode: false, 
          shadows: true 
        }
      },
      value:"CesiumAir",
      options: [{
        label: "CesiumAir",
        value: "CesiumAir"
      },
      {
        label: "CesiumDrone",
        value: "CesiumDrone"
      },
      {
        label: "GroundVehicle",
        value: "GroundVehicle"
      },
      {
        label: "CesiumBalloon",
        value: "CesiumBalloon"
      },
      {
        label: "CesiumMilkTruck",
        value: "CesiumMilkTruck"
      },
      {
        label: "CesiumMan",
        value: "CesiumMan"
      },
      {
        label: "BoxUnlit",
        value: "BoxUnlit"
      },
      {
        label: "DracoCompressed",
        value: "DracoCompressed"
      },
      {
        label: "CesiumBalloonKTX2",
        value: "CesiumBalloonKTX2"
      },
      ],
      cesium: {
      }
    }
  },
  methods: {
    clickUi() {
      this.cesium.mapSetUp = {
        baseLayerPicker: false, 
          fullscreenButton: false, 
          vrButton: false, 
          geocoder: false,
          homeButton: false, 
          infoBox: false, 
          selectionIndicator: false, 
          navigationHelpButton: false,
          navigationInstructionsInitiallyVisible: false, 
          timeline: false, 
          scene3DOnly: false, 
          animation: false, 
          shouldAnimate: false, 
          sceneMode: 3, 
          requestRenderMode: false, 
          shadows: false 
      }
    }
  }

}
</script>
  
<style scoped>
.erGraphDemo1 {
  float: left;
  width: 50%;
  height: 100vh;
}

.erGraphDemo2 {
  float: right;
  width: 50%;
  height: 100vh;
}
</style>
  