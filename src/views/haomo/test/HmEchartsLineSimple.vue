<template>
  <div>
    <HmEchartsLineSimple ref="test1" url="https://block-design.cn/HmEchartsLineSimple" 
    :dropMenu="true" :dropMenuOption="dropMenuOption"
      @onMenuClick="onTMenuClick" />
    <HmEchartsLineSimple ref="test2" url="https://block-design.cn/HmEchartsLineSimple" 
    :dropMenu="true" :dropMenuOption="dropMenuOption"
      @onMenuClick="onFMenuClick" />
  </div>
</template>
<script>
import HmEchartsLineSimple from '/@/components/built-in/jeecg/echarts-vue3/HmEchartsLineSimple.vue'
export default {
  components: {
    HmEchartsLineSimple
  },
  data() {
    return {
      dropMenuOption: {
        title: "测试",
        children: ["png", "svg", "pdf"]
      }
    }
  },
  methods: {
    onTMenuClick(e, obj) {
      console.log("onMenuClick", e, obj);
      if (e.index == 0) {
        this.$refs.test1.downloadImagePNG("测试test1");
      }
      else if (e.index == 1) {
        this.$refs.test1.downloadImageSVG("测试test1");
      }
      else {
        this.$refs.test1.downloadImagePDF("测试test1");
      }
    },
    onFMenuClick(e, obj) {
      console.log("onMenuClick", e, obj);
      if (e.index == 0) {
        this.$refs.test2.downloadImagePNG("测试test2");
      }
      else if (e.index == 1) {
        this.$refs.test2.downloadImageSVG("测试test2");
      }
      else {
        this.$refs.test2.downloadImagePDF("测试test2");
      }
    }
  }
}
</script>

<style></style>