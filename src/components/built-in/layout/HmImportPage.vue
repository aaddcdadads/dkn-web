<template>
  <div class="hm-import-page">
    <component ref="component" :is="pageComponent"></component>
  </div>
</template>

<script>
import { h, defineAsyncComponent, toRefs } from 'vue';
let pages = import.meta.glob('/src/pages/**/page.vue') || {}
let views = import.meta.glob('/src/views/haomo/**/page.vue') || {}
const modules = Object.assign(pages, views);

/**
 * 背景卡片
 */
export default {
  name: "HmImportPage",
  components: {
  },
  props: {
    /**
     * 页面id
     */
    pageId: {
      type: String,
    },
  },
  setup(props, context) {
    function getPage(pageId) {
      let page;
      let prefix = Object.keys(views).length > 0 ? '/src/views/haomo' : '/src/pages'
      Object.keys(modules).forEach((key) => {
        if (key == `${prefix}/${pageId}/page.vue`) {
          page = defineAsyncComponent(modules[key]);
        }
      });
      return page;
    }

    const pageComponent = getPage(props.pageId);
    return {
      pageComponent,
      getPage
    }
  },
  mounted() {
  },
  methods: {
    getCssUnit(value) {
      if (isNaN(Number(value))) {
        return value;
      }
      return `${value}px`;
    }
  },
};
</script>

<style scoped>
.hm-import-page {
}
</style>