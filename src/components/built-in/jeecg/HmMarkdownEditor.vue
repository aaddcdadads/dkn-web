<template>
  <v-md-editor
    v-model="cText"
    :model="model"
    :tab-size="tabSize"
    :height="height"
    :disabled-menus="[]"
    :placeholder="placeholder"
    @upload-image="uploadImage"
    @change="onChange"
    @save="save"
    @image-click="imageClick"
    @fullscreen-change="fullscreenChange"
    @blur="blur"
  ></v-md-editor>
</template>

<script>
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';

// highlightjs
import hljs from "highlight.js";
VMdEditor.use(githubTheme, {
  Hljs: hljs,
});

export default {
  components: {
    VMdEditor,
  },
  props: {
    /**
     * 内容
     * @model
     */
    text: {
      type: String,
      default: "",
    },
    /**
     * 模式
     * @type Enum
     * @options ["","edit","editable","preview"]
     */
    model: {
      type: String,
      default: "edit",
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: "300px",
    },
    /**
     * 制表符长度
     */
    tabSize: {
      type: Number,
      default: 2,
    },
    /**
     * 目录导航置右
     */
    tocNavPositionRight: {
      type: Boolean,
      default: false,
    },
    /**
     * 显示目录导航
     */
    defaultShowToc: {
      type: Boolean,
      default: false,
    },
    /**
     * 提示文字
     */
    placeholder: {
      type: String,
      default: '请输入'
    },
    /**
     * 自动聚焦
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * 默认全屏
     */
    defaultFullscreen: {
      type: Boolean,
      default: false,
    },
    /**
     * 目录导航标题
     */
    includeLevel: {
      type: Array,
      default: function() {
	return [2, 3];
      }
    },
    /**
     * 左侧工具栏
     */
    // leftToolbar: {
    //   type: String,
    //   default:
    //     "undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save",
    // },
    /**
     * 右侧工具栏
     */
    // rightToolbar: {
    //   type: String,
    //   default: "preview toc sync-scroll fullscreen",
    // },
    /**
     * 自定义工具栏
     */
    // toolbar: {
    //   type: Object,
    //   default: function () {
    //     return {};
    //   },
    // },
    /**
     * 工具栏配置
     */
    // toolbarConfig: {
    //   type: Object,
    //   default: function () {
    //     return {
    //       "image-link": {
    //         // 是否在插入图片链接的时候默认带上width height 属性，默认值：false
    //         insertWithSize: false,
    //       },
    //     };
    //   },
    // },
    /**
     * 禁用的菜单
     */
    disabledMenus: {
      type: Object,
      default: function () {
        return ["image/upload-image"];
      },
    },
    /**
     * 配置上传图片
     */
    uploadImageConfig: {
      type: Object,
      default: function () {
        return { accept: "image/*" };
      },
    },
    /**
     * 初始化 Codemirror
     */
    codemirrorConfig: {
      type: Object,
      default: function () {
        return {};
      },
    },
    /**
     * 优化编辑器
     */
    codemirrorStyleReset: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cText: "",
      cHeight: "300px",
      // cLeftToolbar: "",
      cTocNavPositionRight: "",
      cDefaultShowToc: "",
      // cToolbar: {},
      cDefaultFullscreen: false,
      cIncludeLevel: [2, 3],
      // cToolbarConfig: {
      //   "image-link": {
      //     // 是否在插入图片链接的时候默认带上width height 属性，默认值：false
      //     insertWithSize: false,
      //   },
      // },
      cDisabledMenus: ["image/upload-image"],
      cUploadImageConfig: { accept: "image/*" },
      cCodemirrorStyleReset: true,
    };
  },
  watch: { 
    text(value) {
      this.cText = value;
    },
    height(value) {
      this.cHeight = this.getCssUnit(value);
    },
    toolbar(value) {
      this.cToolbar = value;
      // for (var p in this.toolbar) {
      //   this.cLeftToolbar = this.leftToolbar + " " + p;
      // }
    },
  },
  mounted() {
    this.cText =  this.text;
    this.cHeight = this.getCssUnit(this.height);
    this.cToolbar = this.toolbar;
  },
  methods: {
    //在预览解析前触发的函数，配置此属性后必须要调用 next 方法并传入需要渲染的 md 文本，否则 preview 组件将不会进行渲染。
    beforePreviewChange(text, next){
      this.$emit("beforePreviewChange",{text, next});
    },
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    },
    onChange: function (text, html) {
      this.$emit("update:value", text);
      this.$emit("onChange", { text, html });
    },
    //保存按钮
    save: function (text, html) {
      this.$emit("save", { text, html });
    },
    //点击图片时触发的事件
    imageClick: function (images, currentIndex) {
      this.$emit("imageClick", { images, currentIndex });
    },
    //切换全屏状态时触发的事件
    fullscreenChange: function (isFullscreen) {
      this.$emit("fullscreenChange", isFullscreen);
    },
    //上传图片
    uploadImage: function (event, insertImage, files) {
      this.$emit("uploadImage", { event, insertImage, files });
    },
    //失焦
    blur: function (event) {
      this.$emit("blur", event);
    },
  },
};
</script>
<style scoped>
.test {
  height: v-bind(cHeight);
}
</style>
