<template>
  <div>
    <hm-jessibuca-player ref="webPlayer" :url="url" v-if="show"></hm-jessibuca-player>
    <!-- <hm-jessibuca-player ref="webPlayer" :url="url" v-if="show"></hm-jessibuca-player> -->
    <!-- <hm-jessibuca-player ref="webPlayer" :url="url" v-if="show"></hm-jessibuca-player> -->
    <!-- <hm-jessibuca-player ref="webPlayer" :url="url" v-if="show"></hm-jessibuca-player> -->
    <button @click="shoot">截图</button>
    <button @click="record">录屏</button>
    <button @click="fullScreen">全屏</button>
  </div>

  <!-- <hm-skeye-web-player></hm-skeye-web-player> -->
  <!-- <hm-skeye-web-player  ref="b" id="b"></hm-skeye-web-player> -->
  <!-- <hm-skeye-web-player  ref="a" id="a"></hm-skeye-web-player> -->
  <!-- <hm-skeye-web-player ref="c" id="c"></hm-skeye-web-player> -->
</template>

<script>
import HmJessibucaPlayer from "/@/components/built-in/jeecg/hm-jessibuca/HmJessibucaPlayer.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HmSplitPanesTest",
  components: {
    HmJessibucaPlayer
  },
  data() {
    return {
      url: "ws://192.168.1.6:18080/live/192.168.1.18.live.flv",
      show: true
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.url = "ws://192.168.1.6:18080/live/192.168.1.18.live.flv";
    //   setTimeout(() => {
    //     this.show = false;
    //   }, 3000);
    // }, 5000);
  },
  methods: {
    shoot() {
      this.$refs.webPlayer.videoScreenShot()
    },
    record() {
      this.$refs.webPlayer.videoRecord()
    },
    fullScreen() {
      this.$refs.webPlayer.videoFullScreen()
    },
  },
  updated() {}
});
</script>

<style scoped>
</style>