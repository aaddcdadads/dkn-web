<template>
  <div>
    <hm-ant-checkbox
      :ccheckboxList="ccheckboxList"
      @onChange="change"
    ></hm-ant-checkbox>
  </div>
</template>

<script>
import HmAntCheckbox from "/@/components/built-in/jeecg/HmAntCheckbox.vue";
export default {
  components: {
    HmAntCheckbox,
  },
  data() {
    return {
      ccheckboxList: [
        {
          key: "1",
          checkbox: false,
          value: "checkbox",
        },
        {
          key: "2",
          checkbox: true,
          value: "checkbox",
        },
        {
          key: "3",
          checkbox: false,
          value: "checkbox",
          disabled: false,
        },
      ],
    };
  },
  methods:  {},
  methods: {
    change(item, index) {
      console.log(item, index, "1111");
    },
  },
};
</script>

<style>
</style>