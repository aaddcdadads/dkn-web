<template>
  <div class="page card">
    <div class="page-wrapper">
        <div class="ele-wrapper ele-wrapper-43e037e6-b84b-4935-a344-6c1d4c37c458">
      <hm-ant-button> 
       
    </hm-ant-button>
    </div>
        <div class="ele-wrapper ele-wrapper-testFormily">
      <hm-ant-formily ref="testFormily" :config="testFormily.config" v-model:value="testFormily.value" :col-num="0" :col-min-width="380" :label-col="7" :wrapper-col="14" class="ele-testFormily"> 
       
    </hm-ant-formily>
    </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue';
import HmAntButton from "/@/components/built-in/jeecg/HmAntButton.vue";
import HmAntFormily from "/@/components/built-in/jeecg/HmAntFormily.vue";


export default {
  name: "Test",
  components: {
    HmAntButton,
    HmAntFormily,
  },
  data() {
    let self = this;
    return {
  "testFormily": {
    "config": {
      "radio": {
        "type": "RadioGroup",
        "props": {
          "label": "测试",
          "options": [
            {
              "label": "Apple",
              "value": "Apple"
            },
            {
              "label": "Pear",
              "value": "Pear"
            }
          ]
        }
      }
    },
    "value": {}
  }
};
  },
  watch: {
  },
  methods:{

  }
};
</script>

<style lang="less" scoped>
.page {
  
}

.ele-wrapper-testFormily {
  width:100%;
}

</style>
