<template>
  <div class="erGraphDemo">
    <HmDbViewer></HmDbViewer>
  </div>
</template>

<script>
import HmDbViewer from '/@/components/built-in/jeecg/antv-x6-vue3/HmDbViewer/HmDbViewer.vue'

export default {
  components:{
    HmDbViewer
  },
  data() {
    return {

    }
  },
  methods: {

  }

}
</script>

<style scoped>
.erGraphDemo {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
