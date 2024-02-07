<template>
  <div>
    <a-button @click="onClick2">选择图片</a-button>
    <a-button @click="onClick3">截切</a-button>
    <test ref="test2" :boxStyle="boxStyle" :presetMode="presetMode" @getResult="getResult"></test>
    <img v-if="src" :src="src" />
  </div>
</template>
  <script>
import Test from "/@/components/built-in/vue-picture-cropper/index.vue";
export default {
  components: {
    Test,
  },
  data() {
    return {
      src:"",
      boxStyle: { width: "100%", height: "100%" },
      presetMode: {},
    };
  },
  methods: {
    onClick2() {
      this.$refs.test2.clickSelectFile();
    },
    onClick3() {
      this.$refs.test2.getResult();
    },
    getResult(e){
      console.log("e",e);
      this.src=e.dataURL;
    }
  },
};
</script>
  <style lang="less" scoped>
</style>
  