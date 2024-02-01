<template>
  <div>
    <hm-tabs :activeKey="1" :hideTabs="[0]">
        <template #tab-slot-0>
        <button
        >0</button>
        </template>
        <template #tab-slot-1>
        <button
        >1</button>
        </template>
        <template #tab-slot-2>
        <button
        >2</button>
        </template>
    </hm-tabs>
  </div>
</template>

<script>
import HmTabs from "/@/components/built-in/layout/HmTabs.vue";
export default {
  components: {
    HmTabs,
  },
  data() {
    return {
      
    };
  },
  methods: {
  },
};
</script>

<style>
</style>