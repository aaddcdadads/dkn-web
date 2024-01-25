<template>
  <a-upload v-model:file-list="fileList" :name="name" list-type="picture-card" class="avatar-uploader"
    :show-upload-list="false" :action="cAction" :before-upload="beforeUpload" :data="cData" :headers="cHeaders"
    @change="handleChange">
    <img v-if="cImageUrl" :src="cImageUrl" alt="avatar" />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">{{ cText }}</div>
    </div>
  </a-upload>
</template>
<script>
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { setAuth } from "/@/request/http";
export default {
  components: {
    LoadingOutlined,
    PlusOutlined,
  },
  props: {
    /**
     * 文件参数名
     */
    name: {
      type: String,
      default: "file",
    },
    /**
     * 上传地址
     */
    action: {
      type: String,
    },
    /**
     * 文字
     */
    text: {
      type: String,
    },
    /**
     * 图片链接
     */
    imageUrl: {
      type: String,
    },
    /**
     * 手动上传
     */
    manualUpload: {
      type: Boolean,
      default: false
    },
    /**
     * 请求头
     */
    headers: {
      type: Object,
      default: function () {
        return {
        }
      }
    },
    /**
     * 上传所需参数
     */
    data: {
      type: Object,
      default: function () {
        return {
        }
      }
    }
  },
  watch: {
    imageUrl(value) { this.cImageUrl = value },
    action(value) { this.cAction = value },
    text(value) { this.cText = value },
    headers(value) { this.cHeaders = this.setHeader(value) },
    data(value) { this.cData = value; }
  },
  mounted() {
    this.cImageUrl = this.imageUrl;
    this.cAction = this.action;
    this.cText = this.text;
    this.cHeaders = this.setHeader(this.headers);
    this.cData = this.data;
  },
  data() {
    return {
      fileList: [],
      loading: false,
      cImageUrl: '',
      cAction: '',
      cText: 'Upload',
      cHeaders: {},
      cData: {}
    }
  },
  methods: {
    setHeader(val) {
      let config = { headers: {} }
      setAuth(config);
      val = Object.assign(val || {}, config.headers);
      return val;
    },
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, base64Url => {
          this.cImageUrl = base64Url;
          this.loading = false;
        });
      }
      if (info.file.status === 'error') {
        this.loading = false;
        this.$message.error('upload error');
      }
      function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    },
    beforeUpload(file) {
      const isJpgOrPng =
        file.type === 'image/jpeg'
        || file.type === 'image/png'
        || file.type === 'image/jpg'
        || file.type === 'image/bmp'
        || file.type === 'image/webp';
      if (!isJpgOrPng) {
        this.$message.error('You can only upload [jpg,jpeg,png,bmp,webp] file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!');
      }
      if (this.manualUpload) {
        this.beforeUploadFile(file)
        return false
      }
      return isJpgOrPng && isLt2M;
    },
    beforeUploadFile(file) {
      this.$emit("beforeUploadFile", file)
    }
  },
};
</script>
<style>
.avatar-uploader>.ant-upload {
  width: 128px;
  height: 128px;
}

.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>