<template>
  <!-- npm install --save tinymce "@tinymce/tinymce-vue@^4" -->
  <!-- 中文文档 http://tinymce.ax-z.cn/ -->
    <editor :init="cInit" :disabled="disabled" v-model="cValue" :setup="editorChange()"/>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep';
import Editor from "@tinymce/tinymce-vue";
export default {
  components: {
    Editor,
  },
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String,
      default: "Welcome to TinyMCE Vue!"
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 其他配置
     */
    init: {
      type: Object,
      default: function () {
        return {
          selector: '#textarea',//选择器配置
          inline: false,//开启内联模式
          plugins: 'link image code lists advlist',//插件配置
          advlist_bullet_styles: 'circle,disc,square',//无序列表
          //advlist_number_styles: 'lower-alpha,lower-roman,upper-alpha,upper-roman',//有序列表
          toolbar: 'undo redo | cut copy | styleselect | forecolor backcolor | bold italic bullist numlist | link image code',//工具栏配置       
          //toolbar: ['undo | bold italic ','alignleft styleselect alignright'],//多行工具栏,toolbar的参数为数组
          //toolbar: false, //隐藏工具栏
          menubar: 'file edit',//菜单栏配置
          //menubar:false,//隐藏菜单栏       
          themes: 'silver',//主题
          skins: 'oxide',//皮肤,浅色;深色:oxide-dark
          height: 300,//固定宽高
          resize: 'both',//true,false,'both'(可改变宽高)
          statusbar: false,//隐藏状态栏,false后不能改变宽高
          images_upload_url: '',//图片上传
          // images_upload_base_path: '',//图片上传
          file_picker_types: 'file image media',
          file_picker_callback: function (callback, value, meta) {
            console.log(meta.filetype, value);
            if (meta.filetype == 'file') { };
            if (meta.filetype == 'image') { };
            if (meta.filetype == 'medio') { };
          },//文件上传
          language: "zh_CN",
          contextmenu: "bold copy",//右键菜单
          placeholder: "在这里输入文字"
        };
      },
    },
  },
  watch: {
    init(value) {
      this.cInit = cloneDeep(value);
    },
    value:{
      handler: function(val, oldValue) {
        this.cValue = val;
      },
      deep: true
    }
  },
  created() {
    this.cInit = cloneDeep(this.init);
    this.cValue = this.value;
  },
  data() {
    return {
      cInit: {},
      cValue:""
    };
  },
  methods: {
    editorChange(e) {
      this.$emit("editorChange", this.cValue);
      this.$emit("update:value", this.cValue);
    }
  },
};
</script>