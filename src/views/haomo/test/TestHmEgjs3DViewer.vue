<template>
  <div>
    <HmEgjs3DViewer ref="view3d" @ready="onReady"/>
  </div>
</template>

<script>
import HmEgjs3DViewer from "/@/components/built-in/vue3-3d/HmEgjs3DViewer.vue";
export default {
  components: {
    HmEgjs3DViewer,
  },
  data() {
    return {
      
    };
  },
  methods: {
    onReady(e) {
      this.demoClone();
    },

    demoClone() {
      let scene = this.$refs.view3d.$refs.view3d.view3D._scene;
      let plant = this.$refs.view3d.$refs.view3d.view3D._model.meshes[0];
      let plant1 = plant.clone();
      plant1.translateX(1.5);
      scene.add(plant1);
    }
  },
};
</script>

<style>
</style>