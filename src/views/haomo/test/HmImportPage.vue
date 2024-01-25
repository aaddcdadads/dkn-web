<template>
  <div>
    <hm-import-page :page-id="pageId"></hm-import-page>
  </div>
</template>

<script>
import HmImportPage from "/@/components/built-in/layout/HmImportPage.vue";
export default {
  components: {
    HmImportPage,
  },
  data() {
    return {
      pageId: "test",
      pageCode: "HmBaiduMap",
    };
  },
  methods:  {},
};
</script>

<style>
</style>