<template>
  <a-comment
    class="comment-class"
  >
    <slot />
    <!-- 评论内容 -->
    <template #content>
      {{contentVal}}
    </template>
  </a-comment>
</template>

<script>
// import { Comment } from "ant-design-vue";

export default {
  name: "HmAntComment",
  props: {
    /**
     * 数据内容
     */
    content: {
      type: String,
      defautl:'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    },
  },
  data() {
    return {
      contentVal:'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    };
  },
  watch:{
    content(val){
      this.contentVal = val;
    }
  },
  methods: {},
};
</script>
<style scoped>
.comment-class{
  width: 100%;
}
</style>
