
<template>
  <div class="pdf-container">
    <vue-pdf-embed :source="src" />
  </div>
</template>

<script >
import { defineComponent, onMounted, reactive, ref } from 'vue';
import VuePdfEmbed from 'vue-pdf-embed'
export default {
  name: "HmPdfEmbed",
  components: { VuePdfEmbed },
  props: {
    /**
     * pdf访问路径
     */
    src: {
      type: String,
      default: "",
    },
  },
  data(){
    return{
    }
  },
  watch: {
  },
  mounted(){
  },
  methods:{
  }
}
</script>
<style lang="less" scoped>
.pdf-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
</style>