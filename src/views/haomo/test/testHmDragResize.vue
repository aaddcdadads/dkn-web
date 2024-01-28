<template>
  <div style="width: 500px; height: 500px;">
    <HmDragResize :width="1200" :height="500">
      <HmAntTable />
    </HmDragResize>
    <!-- <HmDragResize
      :x="200"
    >
      123123123123123
    </HmDragResize>
    <HmDragResize
      :x="400"
    >
      123123123123123123123123123
    </HmDragResize> -->
  </div>
</template>

<script>
import HmDragResize from "/@/components/built-in/jeecg/HmDragResize.vue";

export default {
  components: {
    HmDragResize
  }
}
</script>

<style>

</style>