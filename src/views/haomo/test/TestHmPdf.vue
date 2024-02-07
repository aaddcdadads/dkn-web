<template>
  <div>
    <hm-modal ref="test" height="800px">
      <a-button @click="changePdf">替换pdf</a-button>
      <hm-pdf :src="src"></hm-pdf>
    </hm-modal>
  </div>
</template>

<script>
import HmPdf from "@/components/built-in/jeecg/HmPdf.vue";
import HmModal from "@/components/built-in/layout/HmModal.vue";
export default {
  components: {
    HmPdf,
    HmModal
  },
  data() {
    return {
      src:"https://hm-temp.oss-cn-beijing.aliyuncs.com/test1.pdf"
    };
  },
  methods: {
    changePdf() {
      console.log(`替换pdf`);
      this.src = 'https://hm-temp.oss-cn-beijing.aliyuncs.com/test3.pdf';
    }
  },
};
</script>

<style>
</style>