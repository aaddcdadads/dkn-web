<template>
  <div>
    <hm-ant-cascader
    :url="url" 
    :fieldNames="replaceFields" 
    >
    </hm-ant-cascader>
  </div>
</template>

<script>
import HmAntCascader from "@/components/built-in/jeecg/HmAntCascader.vue";
export default {
  components: {
    HmAntCascader
  },
  data() {
    return {
      url:"/api/restify/trainingservice/depart/list",
      replaceFields:{
        label: "id",
				value: "label",
        children:"id"
      }
    };
  },
  mounted() {}
};
</script>

<style scoped>
</style>
