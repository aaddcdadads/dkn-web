<template>
  <a-empty 
    :description="description" 
    :imageStyle="imageStyle" 
    :image="image">
    <slot />
    <!-- 自定义描述内容 -->
    <slot name="description"></slot>
    <!-- 图片 -->
    <slot name="image"></slot>
  </a-empty>
</template>

<script>

export default {
  name: "HmAntEmpty",

  props: {
    /**
     * 自定义描述内容
     */
    description: {
      type: String,
    },
    /**
     * 图片url
     */
    image: {
      type: String,
    },
    /**
     * 图片样式
     */
    imageStyle: {
      type: String,
    },
    
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>