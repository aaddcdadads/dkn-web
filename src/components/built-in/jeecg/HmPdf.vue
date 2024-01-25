
<template>
  <div v-if="csrc" class="pdf-container">
    <div class="spin-container" v-if="!pageVisible">
      <a-spin />
    </div>
    <template v-if="pageVisible">
      <VuePdf v-for="page in numOfPages" :key="page" :src="csrc" :page="page" />
    </template>
  </div>
</template>

<script >
import { defineComponent, onMounted, reactive, ref } from 'vue';
import { VuePdf, createLoadingTask } from 'vue3-pdfjs/esm';
export default {
  name: "HmPdf",
  components: { VuePdf },
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
      loadingTask:"",
      numOfPages:"",
      csrc:"",
      pageVisible: true
    }
  },
  watch: {
    src(value) {
      console.log(value,'value')
      this.csrc = value;
      this.loadPdf()
    },
  },
  mounted(){
    this.csrc=this.src
    this.loadPdf()
  },
  methods:{
    loadPdf() {
      this.pageVisible = false
      if(this.csrc){
        this.loadingTask = createLoadingTask(this.csrc)
        this.loadingTask.promise.then((pdf) => {
          this.pageVisible = true
          this.numOfPages = pdf.numPages
          console.log('this.numOfPages',this.numOfPages)
        })
      }
    }
  }
}
</script>
<style scoped>
.pdf-container {
  width: 100%;
  height: 100%;
}
.spin-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>