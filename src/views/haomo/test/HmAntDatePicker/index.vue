<template>
  <div>
    <HmAntDatePicker v-model:value="defaultPickerValue" :is-range="true"></HmAntDatePicker>

  </div>
</template>

<script>
import HmAntDatePicker from '/@/components/built-in/jeecg/HmAntDatePicker.vue'
import moment from "moment"
import { defineComponent, ref } from 'vue';

export default {
  components: {
    HmAntDatePicker
  },
  data(){
    return{
      defaultPickerValue: `${moment().format()}, ${moment().format()}`
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
