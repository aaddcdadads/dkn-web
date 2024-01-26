<template>
  <div>
    <hm-skeye-web-player ref="webPlayer"></hm-skeye-web-player>
    <button @click="downloadImg">图片下载</button>
  </div>
  <!-- <hm-skeye-web-player></hm-skeye-web-player> -->
  <!-- <hm-skeye-web-player  ref="b" id="b"></hm-skeye-web-player> -->
  <!-- <hm-skeye-web-player  ref="a" id="a"></hm-skeye-web-player> -->
  <!-- <hm-skeye-web-player ref="c" id="c"></hm-skeye-web-player> -->
</template>

<script>
import HmSkeyeWebPlayer from "/@/components/built-in/jeecg/skeye-web-player/HmSkeyeWebPlayer.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    HmSkeyeWebPlayer
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    downloadImg() {
      this.$refs.webPlayer.videoScreenShot();
    }
  },
  updated() {}
});
</script>

<style scoped>
</style>