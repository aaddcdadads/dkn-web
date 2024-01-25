<template>
  <div class="upload-class" v-if="visible">
    <div
      class="upload-title"
      v-if="title"
      :style="{ width: labelWidth + 'px' }"
    >
      {{ title }}:
    </div>
    <a-upload
      :accept="accept"
      :action="cAction"
      :method="method"
      :data="data"
      :fileList="cFileList"
      :headers="cHeaders"
      :multiple="multiple"
      :name="name"
      :listType="listType"
      :showUploadList="cShowUploadList"
      @change="onChange"
      @preview="onPreview"
      @download="onDownload"
      @reject="onReject"
      @remove="onRemove"
    >
      <slot name="title">
        <a-button :disabled="loading || disabled" :type="buttonType">
          <LoadingOutlined v-if="loading" />
          <UploadOutlined v-else />
          {{ text }}
        </a-button>
      </slot>
    </a-upload>
  </div>
</template>

<script>
import { VueCookieNext } from "vue-cookie-next";
import { UploadOutlined, LoadingOutlined } from "@ant-design/icons-vue";
import { setAuth } from "/@/request/http";

export default {
  components: {
    UploadOutlined,
    LoadingOutlined,
  },
  name: "HmAntUpload",
  props: {
    /**
     * 标题
     */
    title: {
      type: String,
      default: "附件上传",
    },
    /**
     * 按钮文字
     */
    text: {
      type: String,
      default: "上传文字",
    },
    /**
     * 按钮类型
     * @type Enum
     * @options ["", "primary", "dashed", "danger", "link"]
     * 
     */
    buttonType: {
      type: String,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 类型
     *
     */
    accept: {
      type: String,
    },
    /**
     * 支持多文件
     */
    multiple: {
      type: Boolean,
    },
    /**
     * 已上传文件
     * @model
     */
    fileList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    /**
     * 显示上传列表
     */
    showUploadList: {
      type: Boolean,
      default: false,
    },
    /**
     * 上传地址
     */
    action: {
      type: String,
    },
    /**
     * 上传额外参数
     */
    data: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * HTTP方法
     * @type Enum
     * @default POST
     * @options ["POST","GET","PUT","DELETE"]
     */
    method: {
      type: String,
    },
    /**
     * 文件参数名
     */
    name: {
      type: String,
      default: "file",
    },
    /**
     * 请求头
     */
    headers: {
      type: Object,
    },
    /**
     * 上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card
     */
    listType: {
      type: String,
      default: "picture",
    },
    /**
     * 标题宽度
     */
    labelWidth: {
      type: Number,
    },
    /**
     * 授权标识
     */
    auth: {
      type: String,
      default: ""
    },
    /**
     * 是否显示
     * @boolean
     */
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      cFileList: [],
      cAction: null,
      cShowUploadList: false,
      cHeaders: {},
      loading: false,
    };
  },
  watch: {
    fileList(value) {
      this.cFileList = value;
    },
    action(value) {
      this.cAction = this.convertUrl(value);
    },
    showUploadList(val) {
      this.cShowUploadList = val;
    },
  },
  mounted() {
    this.cAction = this.convertUrl(this.action);
    this.cFileList = this.fileList;
    this.cShowUploadList = this.showUploadList;
    let config = { headers: {} }
    setAuth(config)
    this.cHeaders = Object.assign(this.headers || {}, config.headers)
  },
  methods: {
    convertUrl(url) {
      if (!url) {
        return null;
      }
      if (window.location.origin.indexOf("block-design.cn") < 0) {
        return url;
      }
      let config = { url }
      this.transformUrlProxy(config)
      url = config.url
      let urlObj = new URL(
        url.indexOf(":") > -1 ? url : window.location.origin + url
      );
      let schema = urlObj.origin.split(":")[0];
      let port = urlObj.port || (schema === "http" ? 80 : 443);
      VueCookieNext.setCookie("x-project-api-schema", schema);
      VueCookieNext.setCookie("x-project-api-hostname", urlObj.hostname);
      VueCookieNext.setCookie("x-project-api-port", port);
      return `/project-api${urlObj.pathname}`;
    },
    onPreview: function (e) {
      this.$emit("preview", e);
    },
    transformUrlProxy(config) {
      if (!localStorage.getItem("pro__msg")) return;

      let { proxy } = JSON.parse(
        JSON.parse(localStorage.getItem("pro__msg")).value
      );

      if (!proxy) return;

      proxy.forEach((item) => {
        config.url =
          config.url.indexOf(item[0]) == 0
            ? `${item[1]}${config.url}`
            : config.url;
      });
    },
    onChange: function (data, event) {
      this.loading = true;
      this.cFileList = [...data.fileList];
      this.$emit("change", data, event);
      if (data.file && data.file.status === "error") {
        this.onReject(data);
      }
      if (data.file && data.file.status === "done") {
        this.onUploadDone(data);
      }
      if (data.file && data.file.status === "removed") {
        this.loading = false;
      }
      if (event && event.nativeEvent) {
        event.nativeEvent.preventDefault();
      }
    },
    /**
     * 上传成功事件
     */
    onUploadDone: function (data) {
      this.loading = false;
      this.$emit("onUploadDone", data);
    },
    onDownload: function (e) {
      this.$emit("download", e);
    },
    onReject: function (e) {
      this.loading = false;
      this.$emit("reject", e);
    },
    onRemove: function (e) {
      this.$emit("remove", e);
    },
  },
};
</script>
<style scoped>
.upload-class {
  position: relative;
  display: flex;
  align-items: center;
  min-width: 100px;
  width: 100%;
}
.upload-title {
  position: relative;
  min-width: 0px;
  max-width: 500px;
  text-align: left;
  margin-right: 10px;
}
</style>