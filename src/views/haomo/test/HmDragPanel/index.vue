<template>
	<div class="page-hm-panel">
		<hm-drag-panel :title="'测试面板'" width="400px" :iconVisible="iconVisible"></hm-drag-panel>
	</div>
</template>

<script>
import HmDragPanel from '/@/components/built-in/layout/HmDragPanel.vue'

export default {
  components: {
    HmDragPanel
  },
  data() {
    return {
      iconVisible:{
        drag:true,
        enlarge:true,
        more:true
      }
      
    }
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