<template>
  <div>
    <hm-button text="清除" @click="clear"></hm-button>
    <hm-button text="重置" @click="reset"></hm-button>
    <hm-button text="剪切" @click="cut"></hm-button>
    <div class="test-contain">
      <div class="ele-warrper-test">
        <hm-picture-cropper
          ref="test"
          class="ele-test"
          width="100%"
          height="100%"
          @getResult="onGetResult"
        ></hm-picture-cropper>
      </div>
      <div class="ele-warrper-testListImage">
        <img v-for="(item,index) in imageList" :key="index" :src="item" />
      </div>
    </div>
    <div class="ele-warrper-testImage">
        <img :src="src" />
    </div>
  </div>
</template>
<script>
import HmButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmPictureCropper from "/@/components/built-in/vue-picture-cropper/index.vue";
export default {
  components: {
    HmButton,
    HmPictureCropper,
  },
  data() {
    return {
        src:"",
        imageList: [],
    };
  },
  methods: {
    clear() {
      this.$refs.test.clear();
      this.src = "";
      this.imageList = [];
    },
    reset() {
      this.$refs.test.reset();
    },
    cut() {
      this.$refs.test.getResult();
    },
    onGetResult(e) {
        this.src = e.dataURL;
      this.imageList.push(e.dataURL);
    },
  },
};
</script>
<style scoped>
.test-contain {
  width: 100%;
  height: 500px;
  display: flex;
}
.ele-warrper-test {
  width: 50%;
  height: 100%;
}
.ele-warrper-testListImage{
    width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 6px;
  row-gap: 6px;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>