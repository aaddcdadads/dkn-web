<template>
  <hm-custom-login ref="test" :urls="test.urls" :params="test.params" :tabs="test.tabs" :titleOption="test.titleOption"></hm-custom-login>
</template>
<script>
import HmCustomLogin from "/@/components/built-in/jeecg/HmCustomLogin.vue";
export default {
  name: "TestHmCustomLogin",
  components: { HmCustomLogin },
  data() {
    return {
      test: {
        urls: {},
        params:{
          loginParams: {type:"1"},
          phoneParams: {},
          registerParams: {},
          forgetParams: {},
          smsParams: {smsmode:"1"},
        },
        tabs:[],
        titleOption:{
          title:"TEST LOGIN VIEW",
          style:{
            "font-size": "32px",
          }
        }
      },
    };
  },
};
</script>
