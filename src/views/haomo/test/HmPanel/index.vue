<template>
	<div class="page-hm-panel">
		<hm-panel :title="'测试面板'"></hm-panel>
	</div>
</template>

<script>
import HmPanel from '/@/components/built-in/layout/HmPanel.vue'

export default {
  components: {
    HmPanel
  },
  data() {
    return {}
  },
  methods: {
    
  }
}
</script>

<style lang="less">
.page-hm-panel {
  .title {
    color: red;
  }
}
</style>