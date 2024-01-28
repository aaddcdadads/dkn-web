<template>
  <div>
    <hm-ant-card-data @click="onClick"></hm-ant-card-data>
  </div>
</template>

<script>
import HmAntCardData from "/@/components/built-in/jeecg/HmAntCardData.vue";
export default {
  components: {
    HmAntCardData,
  },
  data() {
    return {};
  },
  methods:  {},
  methods: {
    onClick() {
      console.log("aaa");
    },
  },
};
</script>

<style>
</style>