<template>
  <div>
    <hm-ant-text @onClick="onClick" :padding="20"></hm-ant-text>
  </div>
</template>

<script>
import HmAntText from "/@/components/built-in/jeecg/HmAntBgText.vue";
export default {
  components: {
    HmAntText,
  },
  data() {
    return {};
  },
  method: {},
  methods: {
    onClick() {
      console.log("1111");
    },
  },
};
</script>

<style>
</style>