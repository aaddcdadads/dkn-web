<template>
  <HmEchartsPieDoughnut
    url="https://block-design.cn/HmEchartsPieDoughnut"
    @onClick="onClick"
  />
</template>

<script>
import HmEchartsPieDoughnut from "/@/components/built-in/jeecg/echarts-vue3/HmEchartsPieDoughnut.vue";
export default {
  components: {
    HmEchartsPieDoughnut,
  },
  data() {
    return {};
  },
  methods: {
    onClick(params) {
      console.log("params", params);
    },
  },
};
</script>

<style>
</style>