<template>
  <div>
    <!-- <HmAntSteps :iconSize="iconSize"></HmAntSteps> -->
    <a-button @click="click">button</a-button>
    <!-- <hm-ant-card-data :url="url1"></hm-ant-card-data>
    <HmAntCardEchartsAreaStack :url="url2"></HmAntCardEchartsAreaStack>
    <HmAntCardEchartsSimple :url="url3"></HmAntCardEchartsSimple>
    <HmAntCardDataProgress :url="url4"></HmAntCardDataProgress>-->
  </div>
</template>

<script>
import HmAntCardEchartsAreaStack from '/@/components/built-in/jeecg/HmAntCardEchartsAreaStack.vue'
import HmAntCardData from '/src/components/built-in/jeecg/HmAntCardData.vue'
import HmAntCardEchartsSimple from '/src/components/built-in/jeecg/HmAntCardEchartsSimple.vue'
import HmAntCardDataProgress from '/src/components/built-in/jeecg/HmAntCardDataProgress.vue'
import HmAntSteps from '/src/components/built-in/jeecg/HmAntSteps.vue'
export default {
  components: {
    HmAntCardData,
    HmAntCardEchartsAreaStack,
    HmAntCardEchartsSimple,
    HmAntCardDataProgress,
    HmAntSteps
  },

  data() {
    return {
      url1: '',
      url2: '',
      url3: '',
      url4: '',
      iconSize: '24'
    }
  },

  mounted() {
    setTimeout(() => {
      this.url1 = 'https://block-design.cn/HmAntCardData'
      this.url2 = 'https://block-design.cn/HmAntCardEchartsAreaStack'
      this.url3 = 'https://block-design.cn/HmAntCardEchartsSimple'
      this.url4 = 'https://block-design.cn/HmAntCardDataProgress'
    }, 5000)

  },

  methods: {
    click() {
      this.iconSize = this.iconSize == '24' ? '32' : '24'
      console.log("this.iconSize", this.iconSize)
    }
  }

}
</script>

<style>
</style>