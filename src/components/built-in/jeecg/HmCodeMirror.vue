<template>
  <div class="hm-codemirror" ref="container"></div>
</template>

<script>
import { MergeView } from "@codemirror/merge";
import { basicSetup } from "codemirror";
import { EditorView, keymap, placeholder } from '@codemirror/view'
import { EditorState, Compartment, StateEffect } from "@codemirror/state";
import { indentWithTab } from '@codemirror/commands';
import { indentUnit } from '@codemirror/language';
import { javascript } from "@codemirror/lang-javascript";
import { vue } from "@codemirror/lang-vue";
import { json } from '@codemirror/lang-json'
import { oneDark } from "@codemirror/theme-one-dark";

export default {
  name: "HmCodeMirror",
  components: {},
  props: {
    /**
     * 值
     * @model
     */
    value: {
      type: String,
    },
    /**
     * 对比值
     * @model
     */
    diffValue: {
      type: String,
    },
    /**
     * 自动聚焦
     */
    autofocus: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否禁用
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 是否Tab缩进
     */
    indentWithTab: {
      type: Boolean,
      default: true,
    },
    /**
     * 缩进大小
     */
     tabSize: {
      type: Number,
      default: 2,
    },
    /**
     * 提示文字
     */
     placeholder: {
      type: String,
      default: "Code goes here...",
    },
    /**
     * 编辑器样式
     */
     style: {
      type: Object,
      default: function () {
        return {
          height: '400px'
        };
      },
    },
    /**
     * 自动销毁实例
     */
     autoDestroy: {
      type: Boolean,
      default: true,
    },
    /**
     * 语法
     * @type Enum
     * @options ["javascript", "vue", "json"]
     */
    language: {
      type: String,
      default: 'javascript'
    },
    /**
     * 模式
     * @type Enum
     * @options ["default", "diff"]
     */
    mode: {
      type: String,
      default: 'default'
    },
    /**
     * 主题
     * @type Enum
     * @options ["default", "dark"]
     */
    theme: {
      type: String,
      default: 'default'
    },
    /**
     * 自动滚动
     */
    autoScroll: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      view: {},
      cValue: "",
      state: {},
      editorTools: {},
      leftEditorTools: {},
      rightEditorTools: {},
      diffEditorTools: {}
    };
  },
  watch: {
    value(newValue) {
      if(this.mode == "default"){
        this.editorTools.setDoc(newValue) 
        // 检测变动并滚动到底部
        if(this.autoScroll){
          const scrollEffect = EditorView.scrollIntoView(this.view.state.doc.length, { y: 'end' });
          this.view.dispatch({
            effects: scrollEffect
          });
        }
      }else{
        this.leftEditorTools.setDoc(newValue)
      }
    },
    diffValue(newValue) {
      this.rightEditorTools.setDoc(newValue)
    },
    disabled(disabled) {
      this.mode == "default" ? 
        this.editorTools.toggleDisabled(disabled)
        : this.leftEditorTools.toggleDisabled(disabled)
      
    },
    indentWithTab(iwt) {
      this.mode == "default" ? 
        this.editorTools.setTabSize(iwt)
        : this.leftEditorTools.setTabSize(iwt)
    },
    placeholder(placeholder) {
      this.mode == "default" ? 
        this.editorTools.setPlaceholder(placeholder) 
        : this.leftEditorTools.setPlaceholder(placeholder)
    },
    style(style) {
      this.mode == "default" ? 
        this.editorTools.setStyle(style) 
        : this.leftEditorTools.setStyle(style)
    },
  },
  mounted() {
    console.log("codemirror mounted")
    this.createEditorState()
    this.createEditorView()
    this.createEditorTools()
    
    this.onReady({
      state: this.state,
      view: this.view,
      container: this.$refs.container
    })
  },
  beforeUnmount(){
    if (this.autoDestroy && this.view) {
      this.destroyEditorView(this.view)
    }
  },
  methods: {
    /**
     * 销毁编辑器
     */
    destroyEditorView(view){
      view.destroy()
    },
    /**
     * 创建编辑器变量
     */
    createEditorState(){
      let self = this;
      let extensions = [
        basicSetup,
        EditorView.updateListener.of((viewUpdate) => {
          // https://discuss.codemirror.net/t/codemirror-6-proper-way-to-listen-for-changes/2395/11
          self.onUpdate(viewUpdate)
          // doc changed
          if (viewUpdate.docChanged) {
            self.onChange(viewUpdate.state.doc.toString(), viewUpdate)
          }
          // focus state change
          if (viewUpdate.focusChanged) {
            viewUpdate.view.hasFocus ? self.onFocus(viewUpdate) : self.onBlur(viewUpdate)
          }
        })
      ];
      this.loadTheme(extensions)
      this.loadLanguage(extensions)
      console.log("extensions", extensions)
      self.extensions = extensions;
    },
    /**
     * 创建编辑器视图
     */
    createEditorView(){
      let self = this;
      let state = {
        doc: self.value,
        extensions: self.extensions
      }
      if(self.mode == "diff"){
        let rightExtensions = [...self.extensions]
        
        rightExtensions[1] = EditorView.updateListener.of((viewUpdate) => {
          // https://discuss.codemirror.net/t/codemirror-6-proper-way-to-listen-for-changes/2395/11
          self.onUpdate(viewUpdate)
          // doc changed
          if (viewUpdate.docChanged) {
            self.onDiffChange(viewUpdate.state.doc.toString(), viewUpdate)
          }
          // focus state change
          if (viewUpdate.focusChanged) {
            viewUpdate.view.hasFocus ? self.onFocus(viewUpdate) : self.onBlur(viewUpdate)
          }
        })

        self.view = new MergeView({
          a: state,
          b: {
            doc: self.diffValue,
            extensions: rightExtensions
          },
          parent: self.$refs.container
        });
      }
      if(self.mode == "default"){
        self.view = new EditorView({
          state: EditorState.create(state),
          parent: self.$refs.container
        });
      }
    },
    createEditorTools(){
      if(this.mode == "default"){
        this.editorTools = this.getEditorTools(this.view)
        this.initEditorTools(this.editorTools)
      }
      if(this.mode == "diff"){
        this.leftEditorTools = this.getEditorTools(this.view.a)
        this.rightEditorTools = this.getEditorTools(this.view.b)
        this.initEditorTools(this.leftEditorTools)
        this.initEditorTools(this.rightEditorTools)
      }
    },
    initEditorTools(editorTools){
      if (this.autofocus) {
        editorTools.focus()
      }
      editorTools.toggleDisabled(this.disabled)
      editorTools.setTabSize(this.indentWithTab)
      editorTools.setPlaceholder(this.placeholder)
      editorTools.setStyle(this.style)
    },
    /**
     * 加载主题
     */
    loadTheme(extensions){
      switch (this.theme) {
        case "dark":
          extensions.push(oneDark)
          break;
      
        default:
          break;
      }
    },
    /**
     * 加载语言
     */
    loadLanguage(extensions){
      switch (this.language) {
        case "javascript":
          extensions.push(javascript())
          break;

        case "vue":
          extensions.push(vue())
          break;

        case "json":
          extensions.push(json())
          break;
      
        default:
          break;
      }
    },
    onChange(newDoc, viewUpdate) {
      if (newDoc !== this.value) {
        console.log("onChange: ", newDoc, viewUpdate);
        this.$emit("update:value", newDoc);
        this.$emit("change", newDoc);
      }
    },
    onDiffChange(newDoc, viewUpdate){
      if (newDoc !== this.diffValue) {
        console.log("onDiffChange: ", newDoc, viewUpdate);
        this.$emit("update:diffValue", newDoc);
        this.$emit("diffChange", newDoc);
      }
    },
    onUpdate(viewUpdate) {
      console.log("onUpdate: ", viewUpdate);
      this.$emit("update", viewUpdate);
    },
    onBlur(viewUpdate) {
      console.log("离焦", viewUpdate);
      this.$emit("blur", viewUpdate);
    },
    onFocus(viewUpdate) {
      console.log("聚焦", viewUpdate);
      this.$emit("onFocus", viewUpdate);
    },
    onReady(e) {
      console.log("onReady", e);
      this.$emit("onFocus", e);
    },
    /**
     * 获取编辑器工具对象
     */
    getEditorTools(view){
      const createEditorCompartment = (view) => {
        const compartment = new Compartment()
        const run = (extension) => {
          compartment.get(view.state)
            ? view.dispatch({ effects: compartment.reconfigure(extension) }) // reconfigure
            : view.dispatch({ effects: StateEffect.appendConfig.of(compartment.of(extension)) }) // inject
        }
        return { compartment, run }
      }
      const createEditorExtensionToggler = (view, extension) => {
        const { compartment, run } = createEditorCompartment(view)
        return (targetApply) => {
          const exExtension = compartment.get(view.state)
          const apply = targetApply ?? exExtension !== extension
          run(apply ? extension : [])
        }
      }
      // doc state
      const getDoc = () => view.state.doc.toString()
      const setDoc = (newDoc) => {
        if (newDoc !== getDoc()) {
          view.dispatch({
            changes: {
              from: 0,
              to: view.state.doc.length,
              insert: newDoc
            }
          })
        }
      }

      // UX operations
      const focus = () => view.focus()

      // reconfigure extension
      const { run: reExtensions } = createEditorCompartment(view)

      // disabled editor
      const toggleDisabled = createEditorExtensionToggler(view, [
        EditorView.editable.of(false),
        EditorState.readOnly.of(true)
      ])

      // https://codemirror.net/examples/tab/
      const toggleIndentWithTab = createEditorExtensionToggler(view, keymap.of([indentWithTab]))

      // tab size
      // https://gist.github.com/s-cork/e7104bace090702f6acbc3004228f2cb
      const { run: reTabSize } = createEditorCompartment(view)
      const setTabSize = (tabSize) => {
        reTabSize([EditorState.tabSize.of(tabSize), indentUnit.of(' '.repeat(tabSize))])
      }

      // phrases
      // https://codemirror.net/examples/translate/
      const { run: rePhrases } = createEditorCompartment(view)
      const setPhrases = (phrases) => {
        rePhrases([EditorState.phrases.of(phrases)])
      }

      // set editor's placeholder
      const { run: rePlaceholder } = createEditorCompartment(view)
      const setPlaceholder = (value) => {
        rePlaceholder(placeholder(value))
      }

      // set style to editor element
      // https://codemirror.net/examples/styling/
      const { run: reStyle } = createEditorCompartment(view)
      const setStyle = (style) => {
        style = style || {}
        reStyle(EditorView.theme({ '&': { ...(style) } }))
      }

      return {
        focus,
        getDoc,
        setDoc,
        reExtensions,
        toggleDisabled,
        toggleIndentWithTab,
        setTabSize,
        setPhrases,
        setPlaceholder,
        setStyle
      }
    },
  }
};
</script>
<style scoped>
/deep/ .cm-mergeView{
  height: v-bind(style.height);
}
/deep/ .cm-mergeView .ͼ1{
  height: 100% !important;
}
/deep/ .cm-mergeViewEditors{
  height: 100%;
}
</style>
