<template>
  <div>
    <div style="padding-top: -36px;display: inline-block;">
      <hm-iframe width="1280px" height="1024px" :src="src1"/>
    </div>
    <div style="padding-top: -36px;display: inline-block;padding-top: -36px;">
      <hm-iframe width="1280px" height="1024px" :src="src2"/>
    </div>
  </div>
</template>

<script>
import HmIframe from "/@/components/built-in/jeecg/HmIframe.vue";
export default {
  components: {
    HmIframe,
  },
  data() {
    return {
      src1: 'http://192.168.1.207:9000/vnc.html',
      src2: 'http://192.168.1.207:9001/vnc.html'
    };
  },
  methods: {
  },
};
</script>

<style>
</style>