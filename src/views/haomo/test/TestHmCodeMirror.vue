<template>
  <div>
    <hm-code-mirror
      ref="codemirror"
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="javascript"
      mode="default"
      :autoScroll="false"
    ></hm-code-mirror>
    <button @click="changeValue">changeValue</button>
    <button @click="formatCode">formatCode</button>
  </div>
</template>

<script>
import HmCodeMirror from "/@/components/built-in/jeecg/HmCodeMirror.vue";
export default {
  components: { HmCodeMirror },
  data() {
    return {
      cValue: `aaa`,
      cDiffValue: "bbbb",
    };
  },
  methods: {
    changeValue() {
      this.cValue = `<template>
  <div>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <hm-code-mirror
      v-model:value="cValue"
      v-model:diffValue="cDiffValue"
      :autofocus="false"
      :disabled="false"
      :indent-with-tab="true"
      :tab-size="4"
      :autoDestroy="true"
      theme="dark"
      language="vue"
      mode="diff"
    ></hm-code-mirror>
    <button @click="changeValue">changeValue</button>
  </div>
</template>`;
      console.log(this.cValue);
    },
    formatCode() {
      this.$refs.codemirror.formatCode();
    },
  },
};
</script>

<style></style>
