<template>
  <div>
    <a-button @click="changePdf">替换pdf</a-button>
    <h1>File</h1>
    <vue-pdf-embed :source="source1" />

    <!-- <h1>Base64</h1>
    <vue-pdf-embed :source="source2" /> -->
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

// OR THE FOLLOWING IMPORT FOR VUE 2
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      source1: 'https://hm-temp.oss-cn-beijing.aliyuncs.com/test1.pdf',
      // source2: 'data:application/pdf;base64,<BASE64_ENCODED_PDF>',
    }
  },
  methods: {
    changePdf() {
      console.log(`替换pdf`);
      this.source1 = 'https://hm-temp.oss-cn-beijing.aliyuncs.com/test3.pdf';
    }
  }
}
</script>