<template>
  <div class="iframe-div">
    <iframe id="tldraw-iframe" class="tldraw-iframe" :src="src" />
  </div>
</template>
<script>
export default {
  name: "HmTldraw",
  components: {},
  props: {
    /**
     * 访问地址
     */
    src: {
      type: String,
      default: "/tldraw"
    },
  },
  data() {
    return {
      readyCallback: null
    };
  },
  watch: {
    
  },
  created(){
    this.initIframeEvent();
  },
  methods: {
    initIframeEvent() {
      window.addEventListener(
        'message',
        (e) => {
          if (e.data.action) {
            this.handleMessage({
              action: e.data.action,
              data: e.data.data,
            })
          }
        },
        false
      )
    },
    onReadyCallback(callback){
      this.readyCallback = callback;
    },
    handleMessage(message) {
      console.log('hmtldraw-handleMessage', message)
      switch (message.action) {
        case 'on-ready':
          this.$emit("onReady")
          if(this.readyCallback){
            this.readyCallback()
          }
          return
        case 'on-code-error':
          this.$emit("on-code-error", message.data)
          return
        case 'on-code-ok':
          this.$emit("on-code-ok")
          return
      }
    },
    changeSize(size){
      this.postIframeMessage("change-size", size)
    },
    changePage(pageId){
      this.postIframeMessage("change-page", pageId)
    },
    setCode(code){
      this.postIframeMessage("set-code", code)
    },
    setDepMaps(maps){
      this.postIframeMessage("set-dep-maps", maps)
    },
    setExportJson(json){
      this.postIframeMessage("set-export-json", json)
    },
    clear(){
      this.postIframeMessage("clear")
    },
    clearAll(){
      this.postIframeMessage("clear-all")
    },
    getExportImage(){
      return this.getIframeData("get-export-image")
    },
    getExportSfcImage(){
      return this.getIframeData("get-export-sfc-image")
    },
    getExportJson(){
      return this.getIframeData("get-export-json")
    },
    postIframeMessage(action, data){
      const iframe = document.getElementById(`tldraw-iframe`)
      if (iframe) {
        iframe.contentWindow?.postMessage({ action, data }, '*')
      }
    },
    getIframeData(action){
      return new Promise((resolve) => {
        let result = null;
        if (window === undefined) return resolve(result)
        const windowListener = (event) => {
          if (event.data.action && event.data.action === action) {
            result = event.data.data;
            window.removeEventListener('message', windowListener)
            clearTimeout(timeOut)
            resolve(result)
          }
        }
        const timeOut = setTimeout(() => {
          resolve(result)
          window.removeEventListener('message', windowListener)
        }, 2000)
        window.addEventListener('message', windowListener)
        //request new screenshot
        const iframe = document.getElementById(`tldraw-iframe`)
        if (iframe) {
          iframe.contentWindow?.postMessage({ action }, '*')
        } else {
          console.log('first level iframe not found or not accessible')
        }
      });
    }
  }
};
</script>
<style scoped>
.iframe-div{
  width: 100%;
  height: 100%;
}
.tldraw-iframe{
  border: unset;
  width: 100%;
  height: 100%;
}
</style>
