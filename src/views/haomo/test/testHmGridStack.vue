<template>
  <div style="width: 2000px;height: 1000px;">
      <HmGridStack ref="HmGridStack">
        <template #grid-slot-0>
          <div style="background-color: red;width: 100%;height: 100%;">
          </div>
        </template>
        <template #grid-slot-1>
          <div style="background-color: green;width: 100%;height: 100%;">
          </div>
        </template>
      </HmGridStack>
    <!-- <div style="width: 400px; height: 400px;">
      <HmGridStack></HmGridStack>
    </div> -->
    <a-button @click="test">123123</a-button>
  </div>
</template>

<script>
import HmGridStack from "/@/components/built-in/jeecg/HmGridStack.vue";

export default {
  components: {
    HmGridStack
  },
  methods: {
    test() {
      this.$refs.HmGridStack.grid.destroy()
    }
  }
}
</script>

<style>

</style>