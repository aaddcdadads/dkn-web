<template>
  <div class="iframe-div">
    <iframe id="sfc-iframe" class="sfc-iframe" :src="showEditor ? `${src}?type=1` : src" />
  </div>
</template>
<script>
export default {
  name: "HmSfcPlayground",
  components: {},
  props: {
    /**
     * 访问地址
     */
    src: {
      type: String,
      default: "/sfc/"
    },
    /**
     * 是否显示编辑器
     */
    showEditor: {
      type: Boolean,
      default: false
    },
    /**
     * 框架
     * @type Enum
     * @options ["ant-design-vue", "element-plus", "vant"]
     */
    framework: {
      type: String,
      default: "ant-design-vue"
    }
  },
  data() {
    return {};
  },
  watch: {
    
  },
  created(){
    this.initIframeEvent();
    this.setFramework(this.framework)
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
    handleMessage(message) {
      console.log('hm-sfc-playground-handleMessage', message)
      switch (message.action) {
        case 'on-code-error':
          this.$emit("on-code-error", message.data)
          return
        case 'on-code-ok':
          this.$emit("on-code-ok")
          return
      }
    },
    setFramework(framework){
      localStorage.setItem("framework", framework)
    },
    setAutoScroll(flag){
      this.postIframeMessage("set-auto-scroll", flag)
    },
    setCode(code){
      localStorage.setItem("code", code)
      this.postIframeMessage("set-code", code)
    },
    getPageScreenshot(){
      return this.getIframeData("take-page-screenshot")
    },
    postIframeMessage(action, data){
      const iframe = document.getElementById(`sfc-iframe`)
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
        }, 5000)
        window.addEventListener('message', windowListener)
        //request new screenshot
        const iframe = document.getElementById(`sfc-iframe`)
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
.sfc-iframe{
  border: unset;
  width: 100%;
  height: 100%;
}
</style>
