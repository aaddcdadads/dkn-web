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
      }
    },
    setFramework(framework){
      localStorage.setItem("framework", framework)
    },
    setCode(code){
      localStorage.setItem("code", code)
      this.postIframeMessage("set-code", code)
    },
    postIframeMessage(action, data){
      const iframe = document.getElementById(`sfc-iframe`)
      if (iframe) {
        iframe.contentWindow?.postMessage({ action, data }, '*')
      }
    },
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
