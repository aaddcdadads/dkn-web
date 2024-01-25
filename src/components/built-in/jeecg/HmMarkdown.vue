<template>
  <div>
    <Markdown :source="source" />
  </div>
</template>

<script>
import Markdown from 'vue3-markdown-it';
export default {
  name: "HmMarkdown",
  components: {
    Markdown
  },
  props: {
    /**
     * 源头
     */
    source: {
      type: String,
      default: "# 标题\n## 1 标题1\n## 2 标题2"
    },
  },
  data() {
    return {
    }
  },
}
</script>