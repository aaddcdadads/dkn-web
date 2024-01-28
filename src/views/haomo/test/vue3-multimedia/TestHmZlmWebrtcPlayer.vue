<template>
  <HmZlmWebrtcPlayer :url="url" />
</template>

<script>

import HmZlmWebrtcPlayer from '@/components/built-in/vue3-multimedia/zlm/HmZlmWebrtcPlayer.vue';

export default {
  commponents: {
    HmZlmWebrtcPlayer
  },
  props: {
   /**
     * 视频流地址
     */
    url: {
      type: String,
      default: () => {
        return "http://192.168.202.164:18080/index/api/webrtc?app=live&stream=192.168.1.18&type=play";
      }
    }
  },
  data() {
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped>
</style>
