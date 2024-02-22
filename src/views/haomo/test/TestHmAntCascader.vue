<template>
  <div>
    <hm-ant-cascader ref="test" :data-url="test.dataUrl"></hm-ant-cascader>
    <hm-ant-cascader ref="testNew" :data-url="testNew.dataUrl"></hm-ant-cascader>
    <a-button @click="onClick">切换中英文</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: {
        dataUrl: "https://block-design.oss-cn-shenzhen.aliyuncs.com/component-JSON/province.json"
      },
      testNew: {
        dataUrl: "https://block-design.oss-cn-shenzhen.aliyuncs.com/component-JSON/country.json?enName"
      }
    }
  },
  methods: {
    onClick() {
      console.log("value变化onClick")
      this.testNew.dataUrl = "https://block-design.oss-cn-shenzhen.aliyuncs.com/component-JSON/country.json?zhName";
    }
  }
}
</script>