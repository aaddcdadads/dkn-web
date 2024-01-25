<template>
  <div class="show_code" v-if="show">
    <div class="btn_tab">
      <div class="flex">
        <button @click="activeTab = 'html'" class="btn" :class="activeTab === 'html' ? 'html' : null"
          v-if="html !== '' || undefined">
          HTML
        </button>
        <button @click="activeTab = 'css'" class="btn" :class="activeTab === 'css' ? 'html' : null"
          v-if="css !== '' || undefined">
          CSS
        </button>
        <button @click="activeTab = 'js'" class="btn" :class="activeTab === 'js' ? 'html' : null"
          v-if="js !== '' || undefined">
          JS
        </button>
      </div>
      <button class="copy" @click="onCopy">{{ copy }}</button>
    </div>
    <div class="code_style flex">
      <ul class="row_style">
        <li v-for="(row, indexs) in rows" :key="indexs" class="rowli">{{ row }}</li>
      </ul>
      <div class="flex_over">
        <div v-if="activeTab === 'html'" class="code_style">
          <pre><code ref="html">{{ html }}</code></pre>
        </div>
        <div v-if="activeTab === 'css'" class="code_style">
          <pre><code ref="css">{{ css }}</code></pre>
        </div>
        <div v-if="activeTab === 'js'" class="code_style">
          <pre><code ref="js">{{ js }}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/tomorrow-night-bright.min.css';
export default {
  name: "showCode",
  props: {
    /**
     * html
     */
    html: {
      type: String,
      default: ""
    },
    /**
     * css
     */
    css: {
      type: String,
      default: ""
    },
    /**
     * js
     */
    js: {
      type: String,
      default: ""
    }
  },
  watch: {
    activeTab: {
      handler: function () {
        this.copy = "复制";
        this.$nextTick(() => {
          this.getRH();
        })
      },
      deep: true,
    },
    html: {
      handler: function () {
        this.getRH();
      },
      deep: true,
    },
    js: {
      handler: function () {
        this.getRH();
      }
    },
    css: {
      handler: function () {
        this.getRH();
      }
    },
  },
  data() {
    return {
      copy: "复制",
      activeTab: "html",
      rows: [],
      show: true,
    }
  },
 
  mounted() {
    this.getRH();
    this.onShow();
  },
  methods: {
    onCopy() {
      let text = this.$refs[`${this.activeTab}`];
      let range = document.createRange();
      range.selectNodeContents(text);
      let selection = document.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("Copy");
      this.copy = "已复制";
      setTimeout(() => {
        this.copy = "复制";
      }, 4000)
    },
    getRH() {//代码高亮与行数
      this.rows = [];
      let element = this.$refs[`${this.activeTab}`];
      hljs.highlightElement(element);
      let len = element.innerHTML.split('\n').length;
      for (let i = 1; i <= len; i++) {
        this.rows.push(i);
      }
      return this.rows;
    },
    onShow(){
      if (!this.html && !this.js && !this.css) {
        this.show = false;
      } else if (this.html) {
        this.activeTab = 'html'
        return
      } else if (this.css) {
        this.activeTab = 'css'
        return
      } else if (this.js) {
        this.activeTab = 'js'
        return
      }
    }

  }
}
</script>
<style scoped>
@media screen and (max-width: 500px) { .copy,.btn { font-size: 12px; }  }
@media screen and (min-width:900px){ .btn { width: 120px; }}
.show_code {
  min-width: 200px;
  max-width: 700px;
  border-radius: 12px;
  margin-bottom: 8px;
}
.flex{
  display: flex;
  flex-direction: row;
  max-height: 300px;
  overflow-y:auto;
}
.btn_tab {
  background-color: #232627;
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.code_style {
  background-color: #000;
  border-radius: 0 0 12px 12px;
}

code {
  font-family: Source Code Pro;
}

.row_style {
  list-style-type: none;
  font-family: Source Code Pro;
  padding: 1em;
  font-size: 1em;
}

.rowli {
  text-align: center;
}
.copy {
  height: 32px;
  color: white;
  width: 60px;
  margin: 4px;
  border: none;
  background-color: #232627;
  border-radius: 5px;
}

.copy:hover {
  background-color: #9999AA;
}

.btn_tab {
  background-color: #232627;
  border-radius: 12px 12px 0 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.btn {
  min-width: 54px;
  border: none;
  background-color: #232627;
  font-family: Inter;
  color: #6c7174;
  height: 32px;
  padding: 12px 0;
  border-radius: 8px;
  line-height: 9px;
  margin: 4px;
}

.html {
  color: #fff;
  background-color: #343839;
}
.flex_over{
  flex: 1; 
  /* overflow-x: scroll; */
}
</style>