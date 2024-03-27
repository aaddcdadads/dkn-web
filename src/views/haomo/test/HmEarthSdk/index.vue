<template>
  <!-- <div class="erGraphDemo1"> -->
    <HmEarthSdk></HmEarthSdk>
  <!-- </div> -->
  <!-- <div class="erGraphDemo2">
    <HmEarthSdk></HmEarthSdk>
  </div> -->
</template>

<script>
import HmEarthSdk from '@/components/built-in/jeecg/HmEarthSdk.vue'

export default {
  components: {
    HmEarthSdk
  },
  data(){
    return{
    }
  },
  methods: {

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
  