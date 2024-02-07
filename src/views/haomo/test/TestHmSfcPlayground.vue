<template>
  <div style="height:100%;">
    <HmSfcPlayground ref="sfc" showEditor framework="element-plus" @onCodeError="onCodeError"
    ></HmSfcPlayground>
    <button @click="setCode1">Set Code1</button>
    <button @click="setCode2">Set Code2</button>
  </div>
</template>

<script>
const code1 = `<template>
  <div>111</div>
  <a-button>test按钮1</a-button>
  <el-button>test按钮2</el-button>
</template>

`
import HmSfcPlayground from "/@/components/built-in/jeecg/HmSfcPlayground.vue";
export default {
  components: {
    HmSfcPlayground,
  },
  data() {
    return {
    };
  },
  mounted(){
    let self = this;
  },
  methods:{
    onCodeError(error){
      console.log("onCodeError", error)
    },
    setCode1(){
      this.$refs.sfc.setCode(code1);
    },
    setCode2(){
      this.$refs.sfc.setCode(`<template>
  <a-button>test按钮2</a-button1>
</template>` + "<script></" + "scriptt>");
    },
  }
};
</script>

<style scoped>
/deep/ .editor{
  margin-top: 30px;
}
</style>
