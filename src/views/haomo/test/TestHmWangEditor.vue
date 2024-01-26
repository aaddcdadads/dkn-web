<template>
  <div>
    <HmWangEditor></HmWangEditor>

    <HmWangEditor v-model="html" :editor-config="editorConfig" :maxContentLength="maxContentLength"></HmWangEditor>
  </div>
</template>

<script>
import HmWangEditor from '/@/components/built-in/jeecg/haomo/HmWangEditor.vue'
export default {
  components: {
    HmWangEditor
  },
  data() {
    return {
      html: `<p>hello word\n毫末科技1</p>`,
      editorConfig: {
        //https://www.wangeditor.com/v5/editor-config.html#maxlength-onmaxlength
        placeholder: "请输入...",
        readOnly: false,
        autoFocus: true,
        scroll: true,
        MENU_CONF: {
          uploadImage: {
            server: '/api/property/uploadFile',
            fieldName: "file",
            headers: {}
          },
          uploadVideo: {
            server: '/api/property/uploadFile',
            fieldName: "file",
            headers: {}
          }
        }
      },
      maxContentLength:10
    }
  },
  mounted() {
    let self = this;
    setTimeout(function () {
      self.html = `<p>hello word</p><p>毫末科技2</p>`
    }, 10);
  },
  methods: {

  }
}
</script>

<style></style>