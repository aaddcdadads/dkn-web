<template>
  <div style="border: 1px solid #ccc">
    <Toolbar
      ref="toolbar"
      v-if="show"
      style="border-bottom: 1px solid #ccc"
      :editor="editor"
      :mode="mode"
    />
    <Editor
      ref="editor"
      v-if="show"
      style="height: 500px; overflow-y: hidden"
      v-model="cHtml"
      :defaultConfig="cEditorConfig"
      :mode="mode"
      @onCreated="onCreated"
      @onChange="onChange"
      @onDestroyed="onDestroyed"
      @onMaxLength="onMaxLength"
      @onFocus="onFocus"
      @onBlur="onBlur"
      @customAlert="customAlert"
      @customPaste="customPaste"
    />
    <a-alert v-if="showMaxContentLengthError()" :title="'最大长度不允许超过'+maxContentLength+'字符'" type="error" :closable="false"></a-alert>
  </div>
</template>
<script>
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import _ from "lodash"

export default {
  name: "HmWangEditor",
  components: { Editor, Toolbar },
  props: {
    /**
     * 模式类型
     * @type Enum
     * @options ["default", "simple"]
     */
    mode: {
      type: String,
      default: "default",
    },
    /**
     * 文本内容
     * @model
     */
    value: {
      type: String,
      default: "",
    },
    /**
     * 工具栏配置
     */
    // toolbarConfig: {
    //   type: Object,
    //   default: function () {
    //     return {
    //       //https://www.wangeditor.com/v5/toolbar-config.html#toolbarkeys
    //       //默认配置
    //       toolbarKeys: [
    //         "headerSelect",
    //         "blockquote",
    //         "|",
    //         "bold",
    //         "underline",
    //         "italic",
    //         {
    //           key: "group-more-style",
    //           title: "更多",
    //           iconSvg:
    //             '<svg viewBox="0 0 1024 1024"><path d="M204.8 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M505.6 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path><path d="M806.4 505.6m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z"></path></svg>',
    //           menuKeys: ["through", "code", "sup", "sub", "clearStyle"],
    //         },
    //         "color",
    //         "bgColor",
    //         "|",
    //         "fontSize",
    //         "fontFamily",
    //         "lineHeight",
    //         "|",
    //         "bulletedList",
    //         "numberedList",
    //         "todo",
    //         {
    //           key: "group-justify",
    //           title: "对齐",
    //           iconSvg:
    //             '<svg viewBox="0 0 1024 1024"><path d="M768 793.6v102.4H51.2v-102.4h716.8z m204.8-230.4v102.4H51.2v-102.4h921.6z m-204.8-230.4v102.4H51.2v-102.4h716.8zM972.8 102.4v102.4H51.2V102.4h921.6z"></path></svg>',
    //           menuKeys: [
    //             "justifyLeft",
    //             "justifyRight",
    //             "justifyCenter",
    //             "justifyJustify",
    //           ],
    //         },
    //         {
    //           key: "group-indent",
    //           title: "缩进",
    //           iconSvg:
    //             '<svg viewBox="0 0 1024 1024"><path d="M0 64h1024v128H0z m384 192h640v128H384z m0 192h640v128H384z m0 192h640v128H384zM0 832h1024v128H0z m0-128V320l256 192z"></path></svg>',
    //           menuKeys: ["indent", "delIndent"],
    //         },
    //         "|",
    //         "emotion",
    //         "insertLink",
    //         {
    //           key: "group-image",
    //           title: "图片",
    //           iconSvg:
    //             '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
    //           menuKeys: ["insertImage", "uploadImage"],
    //         },
    //         {
    //           key: "group-video",
    //           title: "视频",
    //           iconSvg:
    //             '<svg viewBox="0 0 1024 1024"><path d="M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z"></path></svg>',
    //           menuKeys: ["insertVideo", "uploadVideo"],
    //         },
    //         "insertTable",
    //         "codeBlock",
    //         "divider",
    //         "|",
    //         "undo",
    //         "redo",
    //         "|",
    //         "fullScreen",
    //       ],
    //       //排除的菜单,数组选key值
    //       excludeKeys: [
    //         // "group-image",
    //         // "group-video",
    //         // {
    //         //   key: "group-image",
    //         //   title: "图片",
    //         //   iconSvg:
    //         //     '<svg viewBox="0 0 1024 1024"><path d="M959.877 128l0.123 0.123v767.775l-0.123 0.122H64.102l-0.122-0.122V128.123l0.122-0.123h895.775zM960 64H64C28.795 64 0 92.795 0 128v768c0 35.205 28.795 64 64 64h896c35.205 0 64-28.795 64-64V128c0-35.205-28.795-64-64-64zM832 288.01c0 53.023-42.988 96.01-96.01 96.01s-96.01-42.987-96.01-96.01S682.967 192 735.99 192 832 234.988 832 288.01zM896 832H128V704l224.01-384 256 320h64l224.01-192z"></path></svg>',
    //         //   menuKeys: ["insertImage", "uploadImage"],
    //         // },
    //         // {
    //         //   key: "group-video",
    //         //   title: "视频",
    //         //   iconSvg:
    //         //     '<svg viewBox="0 0 1024 1024"><path d="M981.184 160.096C837.568 139.456 678.848 128 512 128S186.432 139.456 42.816 160.096C15.296 267.808 0 386.848 0 512s15.264 244.16 42.816 351.904C186.464 884.544 345.152 896 512 896s325.568-11.456 469.184-32.096C1008.704 756.192 1024 637.152 1024 512s-15.264-244.16-42.816-351.904zM384 704V320l320 192-320 192z"></path></svg>',
    //         //   menuKeys: ["insertVideo", "uploadVideo"],
    //         // },
    //       ],
    //     };
    //   },
    // },
    /**
     * 编辑器配置
     */
    editorConfig: {
      type: Object,
      default: function () {
        return {
          //https://www.wangeditor.com/v5/editor-config.html#maxlength-onmaxlength
          placeholder: "请输入...",
          readOnly: false,
          autoFocus: true,
          scroll: true,
          MENU_CONF: {
            uploadImage: {
              server: '/api/upload',
              fieldName: "file",
              headers: {}
            },
            uploadVideo: {
              server: '/api/upload',
              fieldName: "file",
              headers: {}
            }
          }
        };
      },
    },
    /**
     * 最大长度
     */
    maxContentLength: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      cHtml: '',
      editor: null,
      // cToolbarConfig: {},
      cEditorConfig: {},
      show: true,
      maxContentLengthError: false
    };
  },
  watch: {
    value(value) {
      console.log(`watch value: `, value);
      this.cHtml = value;
    },
    // toolbarConfig: {
    //   handler: function (value) {
    //     this.show = false;
    //     this.cToolbarConfig = _.cloneDeep(value)
    //     this.show = true;
    //   },
    //   deep: true,
    // },
    editorConfig: {
      handler: function (value) {
        this.show = false;
        this.cEditorConfig = _.cloneDeep(value)
        this.show = true;
      },
      deep: true,
    }
  },
  computed: {
    
  },
  created() {
    let self = this;
    this.show = false;
    // self.cToolbarConfig = _.cloneDeep(self.toolbarConfig)
    self.cEditorConfig = _.cloneDeep(self.editorConfig)
    self.show = true;
  },
  mounted() {
    console.log(`mounted value: `, this.value);
    // this.cHtml = this.value;
  },
  methods: {
    //编辑器创建完毕时的回调函数。
    onCreated(editor) {
      this.cHtml = this.value;
      this.editor = Object.seal(editor); // 一定要用 Object.seal() ，否则会报错
    },
    //编辑器内容、选区变化时的回调函数。
    onChange(editor) {
      this.$emit("change", this.cHtml, editor);
      this.$emit("input", this.cHtml);
    },
    //超出最大值事件
    onMaxLength(editor) {
      this.$emit("onMaxLength", editor);
    },
    //编辑器 focus 时的回调函数。
    onFocus(editor) {
      this.$emit("onFocus", editor);
    },
    //编辑器 blur 时的回调函数。
    onBlur(editor) {
      this.$emit("onBlur", editor);
    },
    //自定义粘贴。可阻止编辑器的默认粘贴，实现自己的粘贴逻辑。
    customPaste(editor, event, callback) {
      this.$emit("customPaste", editor, event, callback);
    },
    //编辑器销毁时的回调函数。
    onDestroyed(editor) {
      console.log("onDestroyed", editor);
    },
    //自定义编辑器 alert 。如想用 antd 的 message 功能。
    customAlert(info, type) {
      window.alert(`customAlert in Vue demo\n${type}:\n${info}`);
    },
    //显示最大长度错误
    showMaxContentLengthError() {
      if (!this.$refs.editor) return false;
      // this.maxContentLengthError = this.$refs.editor.editor.getText().length > this.maxContentLength;
      this.maxContentLengthError = false;
      this.$emit("showMaxContentLengthError", this.maxContentLengthError)
      return this.maxContentLengthError;
    }
  },
  beforeDestroy() {
    const editor = this.editor;
    if (editor == null) return;
    editor.destroy(); // 组件销毁时，及时销毁编辑器
  },
};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>