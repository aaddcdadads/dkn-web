<template>
  <div>
    <hm-ant-time-picker :value="defaultPickerValue"></hm-ant-time-picker>
    <hm-ant-time-picker></hm-ant-time-picker>
  </div>
</template>

<script>
import HmAntTimePicker from '/@/components/built-in/jeecg/HmAntTimePicker.vue'
import moment from "moment"
import { defineComponent, ref } from 'vue';

export default {
  components: {
    HmAntTimePicker
  },
  data(){
    return{
      defaultPickerValue: null
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
