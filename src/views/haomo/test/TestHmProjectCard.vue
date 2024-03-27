<template>
  <div>
    <hm-project-card></hm-project-card>
    <hm-project-card
      img = "https://block-design.oss-cn-shenzhen.aliyuncs.com/haomo-ljh/bgTwo.jpg"
      description = "测试测试测试测试测试测试测试测试测试测试测试测试测试"
      :isCollect = false
      :collectNumber = 1
      :isFork = true
      :forkNumber = 2
    ></hm-project-card>
  </div>
</template>

<script>
import HmProjectCard from '/@/components/built-in/jeecg/HmProjectCard.vue'
export default {
  components: {
    HmProjectCard
  },
  data(){
    return{
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>