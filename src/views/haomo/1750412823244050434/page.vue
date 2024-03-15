<template>
  <div class="page card">
    <div class="page-wrapper">
      <div class="ele-wrapper ele-wrapper-da541548-bfc6-4553-818d-b26b5dfe89f4">
        <hm-multi-grid :row-num="3" :col-num="3"> </hm-multi-grid>
      </div>
      <div class="ele-wrapper ele-wrapper-8e2e7b94-2ded-4e31-bd32-35084d9e5cf6">
        <hm-grid :col-num="3"> </hm-grid>
      </div>
      <div class="ele-wrapper ele-wrapper-e11cea7e-a02a-469b-a2a5-afa7fcae77ff">
        <hm-ant-radio
          value="undefined"
          :craido-l-ist="[
            { state: false, value: 'raido1' },
            { state: true, value: 'raido2' },
            { state: false, value: 'raido3' },
          ]"
        >
        </hm-ant-radio>
      </div>
      <div class="ele-wrapper ele-wrapper-testFormily">
        <hm-ant-formily
          ref="testFormily"
          :config="testFormily.config"
          v-model:value="testFormily.value"
          :col-num="0"
          :col-min-width="380"
          :label-col="7"
          :wrapper-col="14"
          class="ele-testFormily"
        >
        </hm-ant-formily>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from "vue";
import HmMultiGrid from "/@/components/built-in/layout/HmMultiGrid.vue";
import HmGrid from "/@/components/built-in/layout/HmGrid.vue";
import HmAntRadio from "/@/components/built-in/jeecg/HmAntRadio.vue";
import HmAntFormily from "/@/components/built-in/jeecg/HmAntFormily.vue";

export default {
  name: "Test",
  components: {
    HmMultiGrid,
    HmGrid,
    HmAntRadio,
    HmAntFormily,
  },
  data() {
    let self = this;
    return {
      "e11cea7e-a02a-469b-a2a5-afa7fcae77ff": {
        value: null,
        craidoLIst: [
          {
            state: false,
            value: "raido1",
          },
          {
            state: true,
            value: "raido2",
          },
          {
            state: false,
            value: "raido3",
          },
        ],
      },
      testFormily: {
        config: {
          radio: {
            props: {
              label: "测试",
            },
          },
        },
        value: {},
      },
    };
  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page {
}

.ele-wrapper-testFormily {
  width: 100%;
}
</style>
