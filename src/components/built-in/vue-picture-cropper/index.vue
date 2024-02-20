<template>
  <div class="VuePictureCropper" :style="{ width: width, height: height }">
    <input
      ref="uploadInput"
      type="file"
      accept="image/jpg, image/jpeg, image/png, image/gif"
      @change="selectFile"
      style="display: none"
    />
    <div class="select-file-slot" v-if="src === undefined || !src">
      <slot>
        <span class="select-file-text" @click="clickSelectFile">选择图片</span>
      </slot>
    </div>
    <vue-picture-cropper
      v-else
      :boxStyle="boxStyle"
      :img="src"
      :options="options"
      :presetMode="presetMode"
    />
  </div>
</template>
  <script>
import VuePictureCropper, { cropper } from "vue-picture-cropper";
export default {
  name: "HmVuePictureCropper",
  components: {
    VuePictureCropper,
  },
  props: {
    /**
     * 宽度
     */
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "200px",
    },
    /**
     * 裁剪区样式
     */
    boxStyle: {
      type: Object,
      default: function () {
        return {
          width: "100%",
          height: "100%",
          backgroundColor: "#f8f8f8",
          margin: "auto",
        };
      },
    },
    /**
     * 预设模式
     */
    presetMode: {
      type: Object,
      default: function () {
        return {
          mode: "fixedSize",
          width: 100,
          height: 100,
        };
      },
    },
    /**
     * cropperjs配置项
     */
    options: {
      type: Object,
      default: function () {
        return {
          remark: "https://github.com/fengyuanchen/cropperjs#options",
          viewMode: 1,
          dragMode: "crop",
          aspectRatio: 16 / 9,
        };
      },
    },
  },
  data() {
    return {
      src: "", // base64
      picture: {
        dataURL: "",
        blobURL: "",
      },
    };
  },
  methods: {
    clear() {
      this.src = "";
      cropper.clear();
    },
    reset() {
      cropper.reset();
    },
    async getResult() {
      let self = this;
      const base64 = cropper.getDataURL();
      const blob = await cropper.getBlob();
      const file = await cropper.getFile({
        fileName: "",
      });
      // 把base64赋给结果展示区
      self.picture.dataURL = base64;
      try {
        self.picture.blobURL = URL.createObjectURL(blob);
      } catch (e) {
        self.picture.blobURL = "";
      }
      self.$emit("getResult", self.picture);
    },
    // 子组件触发
    clickSelectFile() {
      this.$refs.uploadInput.click();
    },
    // 通过选取本地图片
    selectFile(event) {
      let self = this;
      // 重置上一次的结果
      self.picture.dataURL = "";
      self.picture.blobURL = "";
      // 如果有多个裁剪框，也需要重置掉裁剪目标的值，避免使用同一张图片无法触发watch
      self.src = "";
      // 获取选取的文件
      const target = event.target;
      const { files } = target;
      if (!files) return;
      const file = files[0];
      self.convertBase64(file);
    },
    // 转换为base64传给裁切组件
    convertBase64(file) {
      let self = this;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        self.src = reader.result || "";
      };
    },
  },
};
</script>
<style lang="less" scoped>
.VuePictureCropper {
  position: relative;
  .select-file-slot {
    width: 100%;
    height: 100%;
    background: #f8f8f8;
    position: absolute;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px dashed #f2f2f2;
  }
  .select-file-text{
      user-select: none;
      cursor: pointer;
    }
}
</style>